(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var dropArea = document.getElementById("drop-area");
["dragenter", "dragover", "dragleave", "drop"].forEach(function (eventName) {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

["dragenter", "dragover"].forEach(function (eventName) {
  dropArea.addEventListener(eventName, highlight, false);
});
["dragleave", "drop"].forEach(function (eventName) {
  dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
  dropArea.classList.add("highlight");
}

function unhighlight(e) {
  dropArea.classList.remove("highlight");
}

dropArea.addEventListener("drop", handleDrop, false);

function handleDrop(e) {
  var dt = e.dataTransfer;
  var files = dt.files;
  handleFiles(files);
}

var PUZZLE_START = 'Debug.SetAIName("AI")\nDebug.ReloadFieldBegin(DUEL_ATTACK_FIRST_TURN,4)\n\nDebug.SetPlayerInfo(0,8000,0,1)\nDebug.SetPlayerInfo(1,8000,0,0)\n';
var PUZZLE_END = '--The Morinphen Button\nlocal c = Debug.AddCard(55784832,0,0,LOCATION_REMOVED,0,POS_FACEUP)\n--Draw new hand\nlocal e1 = Effect.CreateEffect(c)\ne1:SetType(EFFECT_TYPE_IGNITION)\ne1:SetRange(LOCATION_REMOVED)\ne1:SetOperation(function(e,tp)\n	local g=Duel.GetMatchingGroup(nil,tp,0xff,0,e:GetHandler())\n	Duel.SendtoDeck(g,nil,0,REASON_RULE)\n	Duel.ShuffleDeck(tp)\n	Duel.BreakEffect()\n	Duel.Draw(tp,5,REASON_RULE)\nend)\nc:RegisterEffect(e1)\n--Unaffected (to stay banished)\nlocal e2=Effect.CreateEffect(c)\ne2:SetType(EFFECT_TYPE_SINGLE)\ne2:SetProperty(EFFECT_FLAG_SINGLE_RANGE+EFFECT_FLAG_CANNOT_DISABLE)\ne2:SetRange(LOCATION_REMOVED)\ne2:SetCode(EFFECT_IMMUNE_EFFECT)\ne2:SetValue(1)\nc:RegisterEffect(e2)\n--Skip opponent\'s turn\nlocal e3=Effect.CreateEffect(c)\ne3:SetType(EFFECT_TYPE_FIELD)\ne3:SetProperty(EFFECT_FLAG_PLAYER_TARGET)\ne3:SetCode(EFFECT_SKIP_TURN)\ne3:SetTargetRange(0,1)\nDuel.RegisterEffect(e3,tp)\n\nDebug.ReloadFieldEnd() --Reloads the field to save the changes you specified above.\nDebug.ShowHint("Activate the banished Morinphen to reset and draw a new test hand. You can pass turn safely to draw a 6th card or Normal Summon again.")';

function handleFiles(files) {
  if (files.length > 0) {
    var file = files[0];
    var reader = new FileReader();

    reader.onload =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(evt) {
        var deckFile, lines, puzzle, mode, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, line, element;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                deckFile = evt.target.result;
                lines = deckFile.split(/\r|\n|\r\n/);
                puzzle = PUZZLE_START;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 6;
                _iterator = lines[Symbol.iterator]();

              case 8:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 25;
                  break;
                }

                line = _step.value;

                if (!(line.startsWith("#") || line.startsWith("!"))) {
                  _context.next = 14;
                  break;
                }

                mode = line.slice(1);
                _context.next = 22;
                break;

              case 14:
                if (!(line.length > 1)) {
                  _context.next = 22;
                  break;
                }

                _context.t0 = mode;
                _context.next = _context.t0 === "main" ? 18 : _context.t0 === "extra" ? 20 : 22;
                break;

              case 18:
                puzzle += "Debug.AddCard(" + line + ",0,0,LOCATION_DECK,0,POS_FACEDOWN)\n";
                return _context.abrupt("break", 22);

              case 20:
                puzzle += "Debug.AddCard(" + line + ",0,0,LOCATION_EXTRA,0,POS_FACEDOWN)\n";
                return _context.abrupt("break", 22);

              case 22:
                _iteratorNormalCompletion = true;
                _context.next = 8;
                break;

              case 25:
                _context.next = 31;
                break;

              case 27:
                _context.prev = 27;
                _context.t1 = _context["catch"](6);
                _didIteratorError = true;
                _iteratorError = _context.t1;

              case 31:
                _context.prev = 31;
                _context.prev = 32;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 34:
                _context.prev = 34;

                if (!_didIteratorError) {
                  _context.next = 37;
                  break;
                }

                throw _iteratorError;

              case 37:
                return _context.finish(34);

              case 38:
                return _context.finish(31);

              case 39:
                puzzle += PUZZLE_END;
                element = document.createElement("a");
                element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(puzzle));
                element.setAttribute("download", "hands_" + file.name.split(".")[0] + ".lua");
                element.style.display = "none";
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);

              case 47:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 27, 31, 39], [32,, 34, 38]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    reader.readAsText(file);
  }
}

},{}]},{},[1]);
