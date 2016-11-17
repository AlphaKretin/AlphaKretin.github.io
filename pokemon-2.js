var abilities = ["emergency exit", "merciless", "water bubble", "steelworker", "slush rush", "long reach", "liquid voice", "galvanize", "tangling hair", "power of alchemy", "beast boost", "psychic surge", "misty surge", "grassy surge", "full metal body", "prism armor"];
var descs = ["The Pokémon, sensing danger, switches out when its HP becomes half or less.", "The Pokémon’s attacks become critical hits if the target is poisoned.", "Lowers the power of Fire-type moves done to the Pokémon and prevents the Pokémon from getting a burn. Also secretly doubles the power of Water-type moves.", "Powers up Steel-type moves.", "Boosts the Pokémon’s Speed stat in a hailstorm.", "The Pokémon uses its moves without making contact with the target.", "All sound-based moves become Water-type moves.", "Normal-type moves become Electric-type moves. The power of those moves is boosted a little.", "Contact with the Pokémon lowers the attacker’s Speed stat.", "The Pokémon copies the Ability of a defeated ally.", "The Pokémon boosts its most proficient stat each time it knocks out a Pokémon.", "Turns the ground into Psychic Terrain when the Pokémon enters a battle.", "Turns the ground into Misty Terrain when the Pokémon enters a battle.", "Turns the ground into Grassy Terrain when the Pokémon enters a battle.", "Prevents other Pokémon’s moves or Abilities from lowering the Pokémon’s stats.", "Reduces the power of supereffective attacks taken."];

function clicked(){
	for (var i = 0; i < abilities.length; i++){
		document.getElementById("myDiv").innerHTML += "var " + abilities[i].replace(/ /g,"_") + " = {<br />&nbsp;&nbsp;&nbsp;&nbsp;name: \"" + c(abilities[i]) + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;desc: \"" + descs[i] + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;wiki: \"http:\/\/www.serebii.net\/abilitydex\/" + u(abilities[i]) + ".shtml\"<br />};<br /><br />"
	}
}

function c(str)
{
	var s = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    return s;	
}

function u(str)
{
 	var s = str.replace(/ /g,"");
    return s;	
}
