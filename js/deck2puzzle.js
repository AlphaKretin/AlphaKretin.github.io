"use strict";

require("core-js/modules/es6.regexp.split");

require("core-js/modules/web.dom.iterable");

const dropArea = document.getElementById("drop-area");
["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

["dragenter", "dragover"].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false);
});
["dragleave", "drop"].forEach(eventName => {
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
  let dt = e.dataTransfer;
  let files = dt.files;
  handleFiles(files);
}

const PUZZLE_START = 'Debug.SetAIName("AI")\nDebug.ReloadFieldBegin(DUEL_ATTACK_FIRST_TURN,4)\n\nDebug.SetPlayerInfo(0,8000,0,1)\nDebug.SetPlayerInfo(1,8000,0,0)\n';
const PUZZLE_END = '--The Morinphen Button\nlocal c = Debug.AddCard(55784832,0,0,LOCATION_REMOVED,0,POS_FACEUP)\n--Draw new hand\nlocal e1 = Effect.CreateEffect(c)\ne1:SetType(EFFECT_TYPE_IGNITION)\ne1:SetRange(LOCATION_REMOVED)\ne1:SetOperation(function(e,tp)\n	local g=Duel.GetMatchingGroup(nil,tp,0xff,0,e:GetHandler())\n	Duel.SendtoDeck(g,nil,0,REASON_RULE)\n	Duel.ShuffleDeck(tp)\n	Duel.BreakEffect()\n	Duel.Draw(tp,5,REASON_RULE)\nend)\nc:RegisterEffect(e1)\n--Unaffected (to stay banished)\nlocal e2=Effect.CreateEffect(c)\ne2:SetType(EFFECT_TYPE_SINGLE)\ne2:SetProperty(EFFECT_FLAG_SINGLE_RANGE+EFFECT_FLAG_CANNOT_DISABLE)\ne2:SetRange(LOCATION_REMOVED)\ne2:SetCode(EFFECT_IMMUNE_EFFECT)\ne2:SetValue(1)\nc:RegisterEffect(e2)\n--Skip opponent\'s turn\nlocal e3=Effect.CreateEffect(c)\ne3:SetType(EFFECT_TYPE_FIELD)\ne3:SetProperty(EFFECT_FLAG_PLAYER_TARGET)\ne3:SetCode(EFFECT_SKIP_TURN)\ne3:SetTargetRange(0,1)\nDuel.RegisterEffect(e3,tp)\n\nDebug.ReloadFieldEnd() --Reloads the field to save the changes you specified above.\nDebug.ShowHint("Activate the banished Morinphen to reset and draw a new test hand. You can pass turn safely to draw a 6th card or Normal Summon again.")';

function handleFiles(files) {
  if (files.length > 0) {
    const file = files[0];
    const reader = new FileReader();

    reader.onload = async evt => {
      const deckFile = evt.target.result;
      const lines = deckFile.split(/\r|\n|\r\n/);
      let puzzle = PUZZLE_START;
      let mode;

      for (let line of lines) {
        if (line.startsWith("#") || line.startsWith("!")) {
          mode = line.slice(1);
        } else if (line.length > 1) {
          switch (mode) {
            case "main":
              {
                puzzle += "Debug.AddCard(" + line + ",0,0,LOCATION_DECK,0,POS_FACEDOWN)\n";
                break;
              }

            case "extra":
              {
                puzzle += "Debug.AddCard(" + line + ",0,0,LOCATION_EXTRA,0,POS_FACEDOWN)\n";
                break;
              }
          }
        }
      }

      puzzle += PUZZLE_END;
      const element = document.createElement("a");
      element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(puzzle));
      element.setAttribute("download", "hands_" + file.name.split(".")[0] + ".lua");
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };

    reader.readAsText(file);
  }
}