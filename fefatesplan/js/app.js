var data = data || {};

for (var i in data.characters) {
  var character = data.characters[i];
  if (character instanceof data.Parent) {
    data.parents.push(character);
  } else if (character instanceof data.Child) {
    data.children.push(character);
  }
}

function formatVersion (version) {
  if (!version.id) {
    return '';
  } else {
    return $('<img src="images/' + version.id + '.png" class="logo">');
  }
}

$(document).ready(function () {
  $('.select-version').select2({
    width: '300px',
    minimumResultsForSearch: Infinity,
    templateResult: formatVersion,
    templateSelection: formatVersion,
    formatResult: formatVersion,
    escapeMarkup: function(m) { return m; },
    containerCss: { 'height': '70px', 'border': '0' }
  });
});

angular.
  module('InheritanceModule', []).
    controller('InheritanceController', ['$scope', function ($scope) {
      $scope.versions = ['Birthright', 'Conquest', 'Revelation'];
      $scope.game = 'Revelation'; // default
      $scope.versionColors = 'version-revelation';

      $('.select-version').on('change', function () {
        $scope.game = $(this).val();
        $scope.changeVersion();
        $scope.$apply();
      });

      $scope.skills = data.skills;
      for (var i in data.dlc.skills) {
        $scope.skills[i] = data.dlc.skills[i];
      }

      $scope.getChildren = function () {
        $scope.children = data.children.filter(function (c) {
          return (c.version.indexOf($scope.game) != -1);
        });
      }

      $scope.changeVersion = function () {
        $scope.getChildren();
        for (var i = 0; i < data.children.length; i++) {

          if (!data.children[i].parent.gender) {
            if (data.children[i].mom && (data.children[i].mom.version.indexOf($scope.game) == -1)) {
                data.children[i].addParent('');
            }
          } else {
            if (data.children[i].dad && (data.children[i].dad.version.indexOf($scope.game) == -1)) {
              data.children[i].addParent('');
            }
          }

          if ($scope.children.indexOf(data.children[i]) == -1) {
            data.children[i].addParent('');
          }
        }
        $scope.versionColors = 'version-' + ($scope.game.toLowerCase());
      }

      $scope.changeVersion();

      $scope.exportData = function () {
        var exportedData = [
          ['Name', 'Father', 'Mother', 'Paternal Skill', 'Maternal Skill', 'Main Class', '', '', 'Skills', '', '', 'HP', 'Str', 'Mag', 'Skl', 'Spd', 'Lck', 'Def', 'Res']
        ];
        var spreadsheet = "data:text/csv;charset=utf-8,";

        for (var i = 0; i < $scope.children.length; i++) {
          var child = [], childData = $scope.children[i];
          child.push(childData.name);

          if (childData.dad) {
            child.push(childData.dad.name);
          } else {
            child.push('');
          }
          if (childData.mom) {
            child.push(childData.mom.name);
          } else {
            child.push('');
          }

          child.push(childData.skillFromDad || '', childData.skillFromMom || '');

          child.push(childData.mainClass.name || '');

          for (var k = 0; k < childData.skills.length; k++) {
            child.push(childData.skills[k]);
          }

          for (var s = 0; s < childData.growthRates.length; s++) {
            if (s == 0) {
              child.push(childData.growthRates[s]);
            } else {
              child.push(childData.growthRates[s] + ' (' + childData.maxStats[s - 1] + ')');
            }
          }

          exportedData.push(child);
        }

        exportedData.forEach(function(arr, index) {
          dataNode = arr.join(",");
          spreadsheet += index < exportedData.length ? dataNode + "\n" : dataNode;
        });

        var link = document.createElement('a');
        link.setAttribute('href', encodeURI(spreadsheet));
        link.setAttribute('download', 'Inheritance Plan (' + $scope.game + ').csv');
        document.body.appendChild(link);
        link.click();
      }

    }]).
    controller('ChildController', ['$scope', function ($scope) {

      $scope.filterParents = function (p) {
        if (p != data.characters.avatar.name) {
          if (eval('data.characters.' + p.toLowerCase()).version.indexOf($scope.game) != -1) {
            return ( !(eval('data.characters.' + p.toLowerCase()).spouse) || $scope.child.parent.spouse == (eval('data.characters.' + p.toLowerCase()).name) );
          }
        } else {
          // avatar logic
          if (!data.characters.avatar.spouse) {
            if (!$scope.child.parent.gender) {
              return (data.characters.avatar.gender);
            } else {
              return !(data.characters.avatar.gender);
            }
          } else {
            return ($scope.child.parent.spouse == (eval('data.characters.' + p.toLowerCase()).name));
            }
          }
        }

      $scope.addParent = function () {
        if ($scope.child.dad && $scope.child.mom) {
          if ($scope.child.name == 'Kana') {
            if (!$scope.child.parent.gender) {
              $scope.momImage = 'parent-image-out';
            } else {
              $scope.dadImage = 'parent-image-out';
            }
          } else {
            $scope.parentImage = 'parent-image-out';
          }
        }
        if ($scope.child.newParent != '') {
          $scope.child.addParent(eval('data.characters.' + $scope.child.newParent.toLowerCase()));
          if ($scope.child.name == 'Kana') {
            if (!$scope.child.parent.gender) {
              $scope.momImage = 'parent-image-in';
            } else {
              $scope.dadImage = 'parent-image-in';
            }
          } else {
            $scope.parentImage = 'parent-image-in';
          }
        } else {
          $scope.child.addParent('');
        }
      }

      $scope.mainClass = '';
      $scope.baseClass = '', $scope.masterClass = '';
      $scope.masterClasses = [];

      $scope.setClass = function (classOption) {

        if (classOption != 'Talent' && classOption) {
          var selectedClass = data.class[classOption.toLowerCase().replace(/[-\s]+/g, '')];

          if ($scope.baseClass == selectedClass.name) {
            // remove base class / go back
            $scope.child.addClass('');
            $scope.baseClass = '';
            $scope.masterClass = '';
            $scope.masterClasses.length = 0;
          } else {
            if (selectedClass instanceof data.BaseClass) {
              // add base class / go forward
              $scope.child.addClass(selectedClass);
              $scope.baseClass = selectedClass.name;

              $scope.masterClasses.length = 0;

              for (var i = 0; i < selectedClass.masterClasses.length; i++) {
                $scope.masterClasses.push(selectedClass.masterClasses[i]);
              }
            } else if (selectedClass instanceof data.MasterClass) {
              if (selectedClass == $scope.child.mainClass) {
                // remove master class
                $scope.child.addClass(data.class[$scope.baseClass.toLowerCase().replace(/[-\s]+/g, '')]);
                $scope.masterClass = '';
              } else {
                // add master class
                $scope.child.addClass(selectedClass);
                $scope.masterClass = selectedClass.name;
              }
            } else {
              // idk just error handling
              console.log(classOption);
            }
          }
        } else if (!classOption) {
          $scope.child.addClass('');
        }

        // for Monk/Shrine Maiden, Butler/Maid
        if ($scope.masterClasses.length > 2) {
          if (!$scope.child.gender) {
            $scope.masterClasses.length = 2;
          } else {
            $scope.masterClasses.splice(1, 1);
          }
        }
      }

      $scope.mainClass = function (classOption) {
        if ($scope.child.mainClass.name == classOption) {
          return { color: '#E43A89' };
        }
      }

      // just an array to set the stat headers
      $scope.stats = ['HP', 'Str', 'Mag', 'Skl', 'Spd', 'Lck', 'Def', 'Res'];

      $scope.colorStat = function (stat) {
        if (stat < 0) {
          return { color: 'crimson' };
        } else if (stat > 0) {
          return { color: 'mediumaquamarine' };
        }
      }

      $scope.glyphicon = 'glyphicon-chevron-down';
      $scope.statsContainer = 'stats-container';

      $scope.openStats = function () {
        if ($scope.glyphicon == 'glyphicon-chevron-down') {
          $scope.glyphicon = 'glyphicon-chevron-up';
          $scope.statsContainer = 'stats-container-open';
          $scope.statsStatus = 'stats-open';
          $scope.skillsStatus = 'skills-open';
        } else {
          $scope.glyphicon = 'glyphicon-chevron-down';
          $scope.statsContainer = 'stats-container-closed';
          $scope.statsStatus = 'stats-closed';
          $scope.skillsStatus = 'skills-closed';
        }
      }

    }]).
    controller('KanaController', ['$scope', '$controller', function ($scope, $controller) {
      $controller('ChildController', {$scope: $scope});

      $scope.avatar = data.characters.avatar;

      $scope.filterKanaParents = function (c) {
        var character = eval('data.characters.' + c.toLowerCase());

        if (character.version.indexOf($scope.game) != -1) {
          if (!$scope.child.gender) {
            return (!character.gender && (!character.spouse || $scope.child.dad == character));
          } else {
            return (character.gender && (!character.spouse || $scope.child.mom == character));
          }
        }
      }

      $scope.changeGender = function () {
        // reset classes if mom changes
        if ($scope.baseClass == $scope.child.classes[2]) {
          $scope.setClass($scope.child.mainClass.name);
        }
        $scope.avatar.changeGender($scope.child.gender);

        // in case of gender-specific classes
        if ($scope.child.mainClass) {

          var resetClass = '';

          switch ($scope.child.mainClass.name) {
            case 'Hoshido Noble':
              resetClass = 'Hoshido Noble';
              break;
            case 'Nohr Noble':
              resetClass = 'Nohr Noble';
              break;
            case 'Onmyoji':
              resetClass = 'Onmyoji';
              break;
            case 'Great Master':
              resetClass = 'Priestess';
              break;
            case 'Priestess':
              resetClass = 'Great Master';
              break;
            case 'Strategist':
              resetClass = 'Strategist';
              break;
            case 'Butler':
              resetClass = 'Maid';
              break;
            case 'Maid':
              resetClass = 'Butler';
              break;
            default:
              break;
          }

          switch ($scope.baseClass) {
            case 'Nohr Prince':
              $scope.setClass('Nohr Princess');
              break;
            case 'Nohr Princess':
              $scope.setClass('Nohr Prince');
              break;
            case 'Monk':
              $scope.setClass('Shrine Maiden');
              break;
            case 'Shrine Maiden':
              $scope.setClass('Monk');
              break;
            case 'Troubadour':
              // reset it twice to gender it correctly
              $scope.setClass('Troubadour');
              $scope.setClass('Troubadour');
            default:
              break;
          }

          if (resetClass) {
            $scope.setClass(resetClass);
          }
        }
      }

      $scope.changeTalent = function (talent) {
        $scope.avatar.changeTalent(talent);
        $scope.setClass(talent);
      }

      $scope.kanaStats = function (stat) {
        $scope.avatar.changeStats(stat);
      }

      $scope.boonAndBane = function (stat) {
        if (stat == $scope.avatar.boon) {
          return { color: 'mediumaquamarine' };
        } else if (stat == $scope.avatar.bane) {
          return { color: 'crimson' };
        }
      }

    }]).
    controller('SkillsController', ['$scope', '$compile', function ($scope, $compile) {

      $scope.inheritableSkills = data.inheritableSkills;
      $scope.allSkills = data.allSkills;

      $scope.getSkillImage = function (skill) {
        return 'images/skills/' + skill.toLowerCase().replace(/['\s+]+/g, '') + '.png';
      }

      $scope.destroyDropdown = function () {
        $('.select-skill').select2('destroy');
        $('.select-skill').remove();
      }

      $scope.newSkill = function (index, event, inherited, parent) {
        $scope.destroyDropdown();
        $scope.skillIndex = index;
        var $skillsDropdown = $('<div>').addClass('template-select2');

        if (!inherited) {
          $skillsDropdown.html(
            $compile(
              "<select class='select-skill'><option value=''></option><option ng-repeat='skill in allSkills | filter: filterSkills' ng-selected='{{ skill == child.skills[skillIndex] }}'>{{ skill }}</option></select>"
            )($scope));
        } else {
          if (!parent) {
            $skillsDropdown.html(
              $compile(
                "<select class='select-skill'><option value=''></option><option ng-repeat='skill in inheritableSkills | filter: filterDadInheritance' ng-selected='{{ skill == child.skillFromDad }}'>{{ skill }}</option></select>"
              )($scope));
          } else {
            $skillsDropdown.html(
              $compile(
                "<select class='select-skill'><option value=''></option><option ng-repeat='skill in inheritableSkills | filter: filterMomInheritance' ng-selected='{{  skill == child.skillFromMom  }}'>{{ skill }}</option></select>"
              )($scope));
          }
        }

        angular.element(event.currentTarget).parent().append($skillsDropdown);

        $('.select-skill').select2({
          'width': '10em',
          'placeholder': 'Select a skill:'
        });

        if (!inherited) {
          $('.select-skill').on('change', function () {
            $scope.child.addSkill($(this).val(), $scope.skillIndex);
            $scope.updateSkills();
          });
        } else {
          $('.select-skill').on('change', function () {
            $scope.child.inheritSkill($(this).val(), parent);
            $scope.updateSkills();
          });
        }

        $('.select-skill').on('select2:close', function () {
          $scope.destroyDropdown();
        });

        var buffer = setTimeout(function () {
          $('.select-skill').select2('open');
        }, 1);
      }

      $scope.updateSkills = function () {
        $scope.destroyDropdown();
        $scope.$apply();
        $scope.skill = '', $scope.skillIndex = null;
      }

      $scope.filterSkills = function (skill) {
        return ($scope.child.skills.indexOf(skill) == -1 || $scope.child.skills.indexOf(skill) == $scope.skillIndex);
      }

      $scope.filterDadInheritance = function (skill) {
        return (skill != $scope.child.skillFromMom);
      }

      $scope.filterMomInheritance = function (skill) {
        return (skill != $scope.child.skillFromDad);
      }
    }]).
    directive('tooltip', function () {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          $(element).hover(function(){
            if ($(element).attr('src') != 'images/blankSkill.png') {
              $(element).tooltip('show');
            }
          }, function(){
            $(element).tooltip('hide');
          });
          $(element).on('click', function () {
            $(element).tooltip('hide');
          });
        }
      }
    }).
    directive('statsWindow', function () {
      return {
        templateUrl: 'stats-window.html'
      };
    });
