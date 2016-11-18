var mons = ["rowlet", "dartrix", "decidueye", "litten", "torracat", "incineroar", "popplio", "brionne", "primarina", "pikipek", "trumbeak", "toucannon", "yungoos", "gumshoos", "grubbin", "charjabug", "vikavolt", "crabrawler", "crabominable", "oricorio", "cutiefly", "ribombee", "rockruff", "lycanroc", "wishiwashi", "mareanie", "toxapex", "mudbray", "mudsdale", "dewpider", "araquanid", "fomantis", "lurantis", "morelull", "shiinotic", "salandit", "salazzle", "stufful", "bewear", "bounsweet", "steenee", "tsareena", "comfey", "oranguru", "passimian", "wimpod", "golisopod", "sandygast", "palossand", "pyukumuku", "type: null", "silvally", "minior", "komala", "turtonator", "togedemaru", "mimikyu", "bruxish", "drampa", "dhelmise", "jangmo-o", "hakamo-o", "kommo-o", "tapu koko", "tapu lele", "tapu bulu", "tapu fini", "cosmog", "cosmoem", "solgaleo", "lunala", "nihilego", "buzzwole", "pheromosa", "xurkitree", "celesteela", "kartana", "guzzlord", "necrozma", "magearna", "marshadow"];
var types1 = ["Grass", "Grass", "Grass", "Fire", "Fire", "Fire", "Water", "Water", "Water", "Normal", "Normal", "Normal", "Normal", "Normal", "Bug", "Bug", "Bug", "Fighting", "Fighting", "Fire", "Bug", "Bug", "Rock", "Rock", "Water", "Poison", "Poison", "Ground", "Ground", "Water", "Water", "Grass", "Grass", "Grass", "Grass", "Poison", "Poison", "Normal", "Normal", "Grass", "Grass", "Grass", "Fairy", "Normal", "Fighting", "Bug", "Bug", "Ghost", "Ghost", "Water", "Normal", "Normal", "Rock", "Normal", "Fire", "Electric", "Ghost", "Water", "Normal", "Ghost", "Dragon", "Dragon", "Dragon", "Electric", "Psychic", "Grass", "Water", "Psychic", "Psychic", "Psychic", "Psychic", "Rock", "Bug", "Bug", "Electric", "Steel", "Grass", "Dark", "Psychic", "Steel", "Fighting"];
var types2 = ["Flying", "Flying", "Ghost", "", "", "Dark", "", "", "Fairy", "Flying", "Flying", "Flying", "", "", "", "Electric", "Electric", "", "Ice", "Flying", "Fairy", "Fairy", "", "", "", "Water", "Water", "", "", "Bug", "Bug", "", "", "Fairy", "Fairy", "Fire", "Fire", "Fighting", "Fighting", "", "", "", "", "Psychic", "", "Water", "Water", "Ground", "Ground", "", "", "", "Flying", "", "Dragon", "Steel", "Fairy", "Psychic", "Dragon", "Grass", "", "Fighting", "Fighting", "Fairy", "Fairy", "Fairy", "Fairy", "", "", "Steel", "Ghost", "Poison", "Fighting", "Fighting", "", "Flying", "Steel", "Dragon", "", "Fairy", "Ghost"];
var abs = ["Overgrow/None/Long Reach", "Overgrow/None/Long Reach", "Overgrow/None/Long Reach", "Blaze/None/Intimidate", "Blaze/None/Intimidate", "Blaze/None/Intimidate", "Torrent/None/Liquid Voice", "Torrent/None/Liquid Voice", "Torrent/None/Liquid Voice", "Keen Eye/Skill Link/", "Keen Eye/Skill Link/", "Keen Eye/Skill Link/", "Stakeout/Strong Jaw/Adaptability", "Stakeout/Strong Jaw/Adaptability", "Swarm", "Battery", "Levitate", "Hyper Cutter/Iron Fist/Anger Point", "Hyper Cutter/Iron Fist/Anger Point", "Dancer", "Honey Gather/Shield Dust/Sweet Veil", "Honey Gather/Shield Dust/Sweet Veil", "Keen Eye/Vital Spirit/Steadfast", "Keen Eye/Sand Rush/Steadfast", "Schooling", "Merciless/Limber/Regenerator", "Merciless/Limber/Regenerator", "Own Tempo/Stamina/Inner Focus", "Own Tempo/Stamina/Inner Focus", "Water Bubble/None/Water Absorb", "Water Bubble/None/Water Absorb", "Leaf Guard/None/Contrary", "Leaf Guard/None/Contrary", "Illuminate/Effect Spore/Rain Dish", "Illuminate/Effect Spore/Rain Dish", "Corrosion/None/Oblivious", "Corrosion/None/Oblivious", "Fluffy/Klutz/Cute Charm", "Fluffy/Klutz/Unnerve", "Leaf Guard/Oblivious/Sweet Veil", "Leaf Guard/Oblivious/Sweet Veil", "Leaf Guard/Queenly Majesty/Sweet Veil", "Flower Veil/Triage/Natural Cure", "Inner Focus/Telepathy/Symbiosis", "Receiver/None/Defiant", "Wimp Out", "Emergency Exit", "Water Compaction/None/Sand Veil", "Water Compaction/None/Sand Veil", "Innards Out/None/Unaware", "Battle Armor", "RKS System", "Shields Down", "Comatose", "Shell Armor", "Iron Barbs/Lightning Rod/Sturdy", "Disguise", "Dazzling/Strong Jaw/Wonder Skin", "Berserk/Sap Sipper/Cloud Nine", "Steelworker", "Bulletproof/Soundproof/Overcoat", "Bulletproof/Soundproof/Overcoat", "Bulletproof/Soundproof/Overcoat", "Electric Surge/None/Telepathy", "Psychic Surge/None/Telepathy", "Grassy Surge/None/Telepathy", "Misty Surge/None/Telepathy", "Unaware", "Sturdy", "Full Metal Body", "Shadow Shield", "Beast Boost", "Beast Boost", "Beast Boost", "Beast Boost", "Beast Boost", "Beast Boost", "Beast Boost", "Prism Armor", "Soul-Heart", "Technician"];
var i = 0;
function clicked(){
	if (i < mons.length){
		document.getElementById("myDiv").innerHTML += "var " + mons[i] + " = {<br />&nbsp;&nbsp;&nbsp;&nbsp;name: \"" + c(mons[i]) + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;dex: " + (i + 722) + ",<br />&nbsp;&nbsp;&nbsp;&nbsp;type: \"" + t(i) + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;ability: \"" + abs[i] + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;wiki: \"http://www.serebii.net/pokedex-sm/" + p((i + 722),3) + ".shtml\",<br />&nbsp;&nbsp;&nbsp;&nbsp;image: \"http:\/\/www.serebii.net\/sunmoon\/pokemon\/" + p((i + 722),3) + ".png\"<br />};<br /><br />";
		console.log(i);
		i++
		setTimeout(function(){clicked();},10);
	}
}

function c(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function p(num, size) {
    var s = "000" + num;
    return s.substr(s.length-size);
}

function t(index){
	var s = types1[index];
	if (types2[index] !== ""){
		s += "\/" + types2[index];
	}
	return s;
}
