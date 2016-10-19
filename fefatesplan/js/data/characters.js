var data = {
  characters: {}, parents: [], children: []
};

data.Character = function Character(name, version, classes, gender, growthRates) {
  this.name = name;
  this.version = version;
  this.image = 'images/characters/' + this.name.toLowerCase() + '.jpg';
  this.defaultImage = 'images/characters/' + this.name.toLowerCase() + '.jpg';
  this.classes = classes;
  this.gender = gender;
  this.growthRates = growthRates;

  // for boon and bane
  this.defaultGrowthRates = [];
  for (var i = 0; i < growthRates.length; i++) {
    this.defaultGrowthRates[i] = growthRates[i];
  }
}

data.Parent = function Parent(name, version, classes, gender, growthRates, maxStats, kid, compatibilities) {
  data.Character.call(this, name, version, classes, gender, growthRates);
  this.maxStats = maxStats;
  this.spouse = '';
  this.skill = '';
  this.kid = kid;
  this.compatibilities = compatibilities;
}

data.Child = function Child(name, version, classes, gender, growthRates, parent, skill) {
  data.Character.call(this, name, version, classes, gender, growthRates);

  this.parent = parent;
  if (!this.parent.gender) {
    this.dad = this.parent;
  } else {
    this.mom = this.parent;
  }
  this.spouse = '';
  this.skill = skill, this.skills = ['', '', '', '', ''],
  this.skillFromDad = '', this.skillFromMom = '';

  this.mainClass = '';

  this.maxStats = [];

  this.updateStats = function () {
    this.updateGrowthRates();
    this.updateMaxStats();
  }

  this.addClass = function (classOption) {
    this.mainClass = classOption;
    this.updateGrowthRates();
  }

  this.addClassGrowths = function () {
    if (this.mainClass) {
      for (var i = 0; i < this.mainClass.growthRates.length; i++) {
        this.growthRates[i] += this.mainClass.growthRates[i];
      }
    }
  }

  this.updateGrowthRates = function () {
    var otherParent = ((this.parent == this.dad) ? this.mom : this.dad);

    // the refresh
    for (var i = 0; i < this.defaultGrowthRates.length; i++) {
      this.growthRates[i] = this.defaultGrowthRates[i];
    }

    if (this.name == 'Kana') {
      // I'm pretty sure that Kana's growth rates are affected by Boon/Bane, but I'm not 100% certain
      if (this.dad && this.mom) {
        for (var i = 0; i < this.growthRates.length; i++) {
          this.growthRates[i] = (Math.floor(((this.growthRates[i] + this.dad.growthRates[i] + this.mom.growthRates[i]) / 3) * 10) / 10);
        }
      } else {
        for (var i = 0; i < this.growthRates.length; i++) {
          this.growthRates[i] = ((this.growthRates[i] + this.parent.growthRates[i]) / 2);
        }
      }
    } else {
      if (this.dad && this.mom) {
        for (var i = 0; i < this.growthRates.length; i++) {
          this.growthRates[i] = ((this.growthRates[i] + otherParent.growthRates[i]) / 2);
        }
      }
    }

    this.addClassGrowths();
  }

  this.updateMaxStats = function () {
    var childModifier = 1;
    if (this.name == 'Kana') {
      if (!this.parent.gender && !(this.mom instanceof data.Parent) ||
           this.parent.gender && !(this.dad instanceof data.Parent)) {
        childModifier = 0;
      }
    }

    if (this.dad && this.mom) {
      for (var i = 0; i < this.maxStats.length; i++) {
        this.maxStats[i] = this.dad.maxStats[i] + this.mom.maxStats[i] + childModifier;
      }
    } else {
      for (var i = 0; i < this.parent.maxStats.length; i++) {
        this.maxStats[i] = this.parent.maxStats[i] + childModifier;
      }
    }
  }

  this.updateStats();

  this.matchGender = function (newClass) {
    if (this.gender) {
      if (newClass == 'Nohr Prince') {
        return 'Nohr Princess';
      } else if (newClass == 'Monk') {
        return 'Shrine Maiden';
      } else {
        return newClass;
      }
    } else {
      if (newClass == 'Nohr Princess') {
        return 'Nohr Prince';
      } else if (newClass == 'Shrine Maiden') {
        return 'Monk';
      } else {
        return newClass;
      }
    }
  }

  this.matchClasses = function (parent) {
    var newClass;
    if ((this.classes.indexOf(parent.classes[0]) == -1) &&
        (parent.classes[0] != 'Songstress')) {
      newClass = this.matchGender(parent.classes[0]);
      this.classes.push(newClass);
    } else {
      if (parent.gender) {
        if (this.classes.indexOf(parent.classes[1]) == -1) {
          newClass = this.matchGender(parent.classes[1]);
          this.classes.push(newClass);
        } else if (parent.classes.length > 2 && (this.classes.indexOf(parent.classes[2]) == -1)) {
          newClass = this.matchGender(parent.classes[2]);
          this.classes.push(newClass);
        } else {
          var parallel = parent.classes[0];
          if (parallel == 'Songstress' || parallel == 'Villager') {
            parallel = parent.classes[1];
          }
          this.classes.push(data.getParallel(parallel));
        }
      } else { // kana and shigure
        if (this.name == 'Kana') {
          var parallel = data.getParallel(this.parent.classes[1]);
          if (!parallel) { parallel = 'Talent' };
          data.characters.avatar.changeTalent(parallel);
        } else { // shigure
          if (parent.classes[0] == 'Troubadour') {
            this.classes.push('Wyvern Rider');
          } else {
            if (this.classes.indexOf(parent.classes[1]) == -1) {
              newClass = this.matchGender(parent.classes[1]);
              this.classes.push(newClass);
            }
          }
        }
      }
    }
  }

  this.updateClasses = function () {
    if (this.classes.length > 2) {
      this.classes.length = 2;
    }
    if (!this.parent.gender) { // checks if main parent is male
      if (this.mom) {
        this.matchClasses(this.mom);
      }
    } else {
      if (this.dad) {
        this.matchClasses(this.dad);
      }
    }
  }

  this.addParent = function (newParent) {
    if (this.mom) { // if mother exists
      if (!this.parent.gender) { // if fathered kid, e.g. not azura or fem avatar
        this.skillFromMom = '';
        if (this.mom.kid) {
          var sibling = eval('data.characters.' + this.mom.kid.toLowerCase());
          sibling.dad = '', sibling.newParent = '';
          sibling.updateImage(), sibling.updateStats(), sibling.updateClasses();
        }
        this.mom.spouse = '', this.dad.spouse = '';
        this.mom = '';
      } else { // if shigure or kana
        if (this.dad) {
          this.skillFromDad = '';
          if (this.dad.kid) {
            var sibling = eval('data.characters.' + this.dad.kid.toLowerCase());
            sibling.mom = '', sibling.newParent = ''; // removes reference to azura
            sibling.updateImage(), sibling.updateStats(), sibling.updateClasses();
          }
          this.mom.spouse = '', this.dad.spouse = '';
          this.dad = '';
        }
      }
    }
    if (newParent) { // check to make sure it's not blank
      if (!this.parent.gender) {
        this.mom = newParent;
        if (this.mom.kid) { // aka, if new mom is azura or female avatar
          var sibling = eval('data.characters.' + this.mom.kid.toLowerCase());
          sibling.dad = this.dad, sibling.newParent = this.dad.name;
          sibling.updateImage(), sibling.updateStats(), sibling.updateClasses();
        }
      } else { // if shigure or kana, adding new father
        this.dad = newParent;
        if (this.dad.kid) {
          var sibling = eval('data.characters.' + this.dad.kid.toLowerCase());
          sibling.mom = this.mom, sibling.newParent = this.mom.name;
          sibling.updateImage(), sibling.updateStats(), sibling.updateClasses();
        }
      }
      this.dad.spouse = this.mom.name, this.mom.spouse = this.dad.name;
    }

    this.newParent = newParent.name || '';
    this.updateImage(), this.updateStats(), this.updateClasses();

    if (this.spouse) { // if the kid is married, aka to avatar
      data.characters.kana.updateImage(), data.characters.kana.updateStats(), data.characters.kana.updateClasses();
    }
  }

  this.updateImage = function () {
    var name = this.name, otherParent;
    // just for kana special stuff
    if (this.name == 'Kana') {
      name = (this.gender ? 'Kanaf' : 'Kanam');
    }

    if (this.dad && this.mom && this.name != 'Shigure') {
      otherParent = ((this.parent == this.dad) ? this.mom : this.dad);

      if (otherParent.name != 'Avatar' && otherParent instanceof data.Parent) {
        this.image = 'images/characters/children/' + name + '/' + otherParent.name.toLowerCase() + '-' + name.toLowerCase() + '.jpg';
      } else if (otherParent instanceof data.Child && otherParent.mom) {
        this.image = 'images/characters/children/' + name + '/' + otherParent.mom.name.toLowerCase() + '-' + name.toLowerCase() + '.jpg';
      } else {
        this.image = this.defaultImage;
      }
    } else {
      this.image = this.defaultImage;
    }
  }

  this.addSkill = function (newSkill, index) {
    this.skills.splice(index, 1, newSkill);
  }

  this.inheritSkill = function (inheritedSkill, parent) {
    if (!parent) { // father
      this.skillFromDad = inheritedSkill;
    } else {
      this.skillFromMom = inheritedSkill;
    }
    if (this.skills.indexOf('') != -1 && this.skills.indexOf(inheritedSkill) == -1) {
      this.skills.splice(this.skills.indexOf(''), 1, inheritedSkill);
    }
  }
}

data.getParallel = function (parallel) {
  switch (parallel) {
    case 'Cavalier':
      return 'Ninja';
    case 'Knight':
      return 'Spear Fighter';
    case 'Fighter':
      return 'Oni Savage';
    case 'Mercenary':
      return 'Samurai';
    case 'Outlaw':
      return 'Archer';
    case 'Samurai':
      return 'Mercenary';
    case 'Oni Savage':
      return 'Fighter';
    case 'Spear Fighter':
      return 'Knight';
    case 'Diviner':
      return 'Dark Mage';
    case 'Sky Knight':
      return 'Wyvern Rider';
    case 'Archer':
      return 'Outlaw';
    case 'Wyvern Rider':
      return 'Sky Knight';
    case 'Ninja':
      return 'Cavalier';
    case 'Dark Mage':
      return 'Diviner';
    case 'Wolfskin':
      return 'Outlaw';
    case 'Kitsune':
      return 'Apothecary';
    case 'Songstress':
      return 'Troubadour';
    case 'Villager':
      return 'Apothecary';
    default:
      return null;
  }
}
