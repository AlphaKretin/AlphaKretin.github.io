var sql = window.SQL;
var loaded = false;
//open database
var xhr = new XMLHttpRequest();
xhr.open('GET', '../images/cards.cdb', true);
xhr.responseType = 'arraybuffer';

var contents;
var names;
var ids = [];

xhr.onload = function(e) {
    var uInt8Array = new Uint8Array(this.response);
    var db = new SQL.Database(uInt8Array);
    contents = db.exec("SELECT * FROM datas");
    names = db.exec("SELECT * FROM texts");
    for (var card of contents[0].values) {
        ids.push(card[0]);
    }
    loaded = true;
    // contents is now [{columns:['col1','col2',...], values:[[first row], [second row], ...]}]
};
xhr.send();

function randomCard() {
	if (!loaded) {
        alert("Card database still loading, please wait a few seconds and try again.");
        return;
    }
    var code = ids[Math.floor(Math.random() * ids.length)];
	if (ids.indexOf(code) === -1) {
		alert("Invalid card ID, please try again.");
        return "Invalid card ID, please try again.";
	}
	document.getElementById("output").innerHTML = getCardInfo(code);
}

function go() {
	if (!loaded) {
        alert("Card database still loading, please wait a few seconds and try again.");
        return;
    }
	var input = document.getElementById("inputBox").value;
	var inInt = parseInt(input);
	if (ids.indexOf(inInt) > -1) {
		document.getElementById("output").innerHTML = getCardInfo(inInt);
	} else {
		var index = nameCheck(input);
		if (index > -1 && index in ids) {
			document.getElementById("output").innerHTML = getCardInfo(ids[index]);
		} else {
			alert("Invalid card ID or name, please try again.");
			return;
		}
	}
	
}

function getCardInfo(code) {
	if (!loaded) {
        alert("Card database still loading, please wait a few seconds and try again.");
        return "Card database still loading, please wait a few seconds and try again.";
    }
    var index = ids.indexOf(code);
	if (index === -1) {
		alert("Invalid card ID, please try again.");
        return "Invalid card ID, please try again.";
	}
    var out = "<h1>" + names[0].values[index][1] + "</h1>";
    out += "<b>ID</b>: " + code + "<br/><br/>";
    out += "<b>Region</b>: " + getOT(index) + "<br/>";
    var types = getTypes(index);
    if (types.indexOf("Monster") > -1) {
        var typesStr = types.toString().replace("Monster", getRace(index)).replace(/,/g, "/");
        out += "<b>Type</b>: " + typesStr + " <b>Attribute</b>: " + getAtt(index) + "<br/>";
        var lvName = "Level";
        var lv = getLevelScales(index);
        var def = true;
        if (types.indexOf("Xyz") > -1) {
            lvName = "Rank";
        } else if (types.indexOf("Link") > -1) {
            lvName = "Link Rating";
            def = false;
        }
        out += "<b>" + lvName + "</b>: " + lv[0] + " ";
        out += "<b>ATK</b>: " + contents[0].values[index][5] + " ";
        if (def) {
            out += "<b>DEF</b>: " + contents[0].values[index][6];
        } else {
			out += "<b>Link Markers</b>: " + getMarkers(index);
		}
		
        if (types.indexOf("Pendulum") > -1) {
            out += " <b>Pendulum Scale</b>: " + lv[1] + "/" + lv[2] + "<br/>";
        } else {
			out += "<br/>";
		}
		var cardText = getCardText(index);
		var textName = "Monster Effect";
		if (types.indexOf("Normal") > -1) {
			textName = "Flavour Text";
		}
		if (cardText.length === 2) {
			out += " <b>Pendulum Effect</b>: " + cardText[0] + "<br/>";
			out += " <b>" + textName + "</b>: " + cardText[1];
		} else {
			out += " <b>" + textName + "</b>: " + cardText[0];
		}
    } else if (types.indexOf("Spell") > -1 || types.indexOf("Trap") > -1) {
        var lv = getLevelScales(index)[0];
        if (lv > 0) { //is trap monster
            var typesStr = getRace(index) + "/" + types.toString().replace(/,/g, "/");
            out += "<b>Type</b>: " + typesStr + " <b>Attribute</b>: " + getAtt(index) + "<br/>";
            out += "<b>Level</b>: " + lv + " <b>ATK</b>: " + contents[0].values[index][5] + " <b>DEF</b>: " + contents[0].values[index][6] + "<br/>";
        } else {
            out += "<b>Type</b>: " + types.toString().replace(/,/g, "/") + "<br/>";
        }
        out += "<b>Effect</b>: " + names[0].values[index][2].replace(/\n/g, "<br/>");
    } else {
        out += "<b>Card Text</b>: " + names[0].values[index][2].replace(/\n/g, "<br/>");
    }
    return out;
}

function getLevelScales(index) {
    var level = contents[0].values[index][7];
    var levelStr = level.toString("16");
    if (levelStr.length < 5) {
        return [level, 0, 0];
    } else {
        var lscale = parseInt(levelStr.slice(0, 1));
        var rscale = parseInt(levelStr.slice(2, 3));
        var plevel = parseInt(levelStr.slice(4));
        return [plevel, lscale, rscale];
    }
}

function getOT(index) {
    var ot = contents[0].values[index][1];
    switch (ot) {
        case 1:
            return "OCG";
        case 2:
            return "TCG";
        case 3:
            return "TCG/OCG";
        case 4:
            return "Anime";
        case 8:
            return "Illegal";
        case 16:
            return "Video Game";
        case 32:
            return "Custom";
        default:
            return "Null OT";
    }
}

function getRace(index) {
    var race = contents[0].values[index][8];
    switch (race) {
        case 0x1:
            return "Warrior";
        case 0x2:
            return "Spellcaster";
        case 0x4:
            return "Fairy";
        case 0x8:
            return "Fiend";
        case 0x10:
            return "Zombie";
        case 0x20:
            return "Machine";
        case 0x40:
            return "Aqua";
        case 0x80:
            return "Pyro";
        case 0x100:
            return "Rock";
        case 0x200:
            return "Winged Beast";
        case 0x400:
            return "Plant";
        case 0x800:
            return "Insect";
        case 0x1000:
            return "Thunder";
        case 0x2000:
            return "Dragon";
        case 0x4000:
            return "Beast";
        case 0x8000:
            return "Beast-Warrior";
        case 0x10000:
            return "Dinosaur";
        case 0x20000:
            return "Fish";
        case 0x40000:
            return "Sea Serpent";
        case 0x80000:
            return "Reptile";
        case 0x100000:
            return "Psychic";
        case 0x200000:
            return "Divine-Beast";
        case 0x400000:
            return "Creator God";
        case 0x800000:
            return "Wyrm";
        case 0x1000000:
            return "Cyberse";
        default:
            return "Null Race";
    }
}

function getAtt(index) {
	var att = contents[0].values[index][9];
	switch (att) {
        case 0x1:
            return "EARTH";
        case 0x2:
            return "WATER";
        case 0x4:
            return "FIRE";
        case 0x8:
            return "WIND";
        case 0x10:
            return "LIGHT";
        case 0x20:
            return "DARK";
        case 0x40:
            return "DIVINE";
        default:
            return "Null Attribute";
    }
}

function getMarkers(index) {
	var marks = contents[0].values[index][6];
	var out = "";
	if (marks & 0x001) {
		out += "↙️";
	}
	if (marks & 0x002) {
		out += "⬇️";
	}
	if (marks & 0x004) {
		out += "↘️";
	}
	if (marks & 0x008) {
		out += "⬅️";
	}
	if (marks & 0x020) {
		out += "➡️";
	}
	if (marks & 0x040) {
		out += "↖️";
	}
	if (marks & 0x080) {
		out += "⬆️";
	}
	if (marks & 0x100) {
		out += "↗️";
	}
	return out;
}

function getTypes(index) {
    var types = [];
    var type = contents[0].values[index][4];
    if (type & 0x1) {
        types.push("Monster")
    }
    if (type & 0x2) {
        types.push("Spell")
    }
    if (type & 0x4) {
        types.push("Trap")
    }
    if (type & 0x10) {
        types.push("Normal")
    }
    //effect goes here in numeric order but I put it at the end so that it's at the end of any list of types
    if (type & 0x40) {
        types.push("Fusion")
    }
    if (type & 0x80) {
        types.push("Ritual")
    }
    if (type & 0x200) {
        types.push("Spirit")
    }
    if (type & 0x400) {
        types.push("Union")
    }
    if (type & 0x800) {
        types.push("Gemini")
    }
    if (type & 0x1000) {
        types.push("Tuner")
    }
    if (type & 0x2000) {
        types.push("Synchro")
    }
    if (type & 0x4000) {
        types.push("Token")
    }
    if (type & 0x10000) {
        types.push("Quick-Play")
    }
    if (type & 0x20000) {
        types.push("Continuous")
    }
    if (type & 0x40000) {
        types.push("Equip")
    }
    if (type & 0x80000) {
        types.push("Field")
    }
    if (type & 0x100000) {
        types.push("Counter")
    }
    if (type & 0x200000) {
        types.push("Flip")
    }
    if (type & 0x400000) {
        types.push("Toon")
    }
    if (type & 0x800000) {
        types.push("Xyz")
    }
    if (type & 0x1000000) {
        types.push("Pendulum")
    }
    if (type & 0x2000000) {
        types.push("Special Summon")
    }
    if (type & 0x4000000) {
        types.push("Link")
    }
	if (type & 0x20) {
        types.push("Effect")
    }
    return types;
}

function getCardText(index) {
	var cardText = names[0].values[index][2];
	var regx = cardText.match(/\][\s\S]*?\n([\S\s]*?)\n-/);
	if (regx === null) {
		return [cardText];
	} else {
		var outArr = [];
		outArr.push(regx[1]);
		outArr.push(cardText.match(/(?:r Effect|xt ) ?\]\n([\S\s]*)/)[1]);
		return outArr;
	}
}

function nameCheck(line) {
	var index = -1;
	for (var i = 0; i < names[0]["values"].length; i++) {
		if (names[0]["values"][i][1].toLowerCase() === line.toLowerCase()) {
			index = i;
		} 
	}
	return index;
}
