var zmoves = ["bulk up", "hone claws", "howl", "laser focus", "leer", "meditate", "odor sleuth", "power trick", "rototiller", "screech", "sharpen", "tail whip", "taunt", "topsy_turvy", "will_o_wisp", "work up", "mirror move", "splash", "aqua ring", "baby_doll eyes", "baneful bunker", "block", "charm", "defend order", "fairy lock", "feather dance", "flower shield", "grassy terrain", "growl", "harden", "mat block", "noble roar", "pain split", "play nice", "poison gas", "poison powder", "quick guard", "reflect", "roar", "spider web", "spikes", "spiky shield", "stealth rock", "strength sap", "tearful look", "tickle", "torment", "toxic", "toxic spikes", "venom drench", "wide guard", "withdraw", "confuse ray", "electrify", "embargo", "fake tears", "gear up", "gravity", "growth", "instruct", "ion deluge", "metal sound", "mind reader", "miracle eye", "nightmare", "psychic terrain", "reflect type", "simple beam", "soak", "sweet kiss", "teeter dance", "telekinesis", "heal block", "psycho shift", "charge", "confide", "cosmic power", "crafty shield", "eerie impulse", "entrainment", "flatter", "glare", "ingrain", "light screen", "magic room", "magnetic flux", "mean look", "misty terrain", "mud sport", "spotlight", "stun spore", "thunder wave", "water sport", "whirlwind", "wish", "wonder room", "aromatic mist", "captivate", "imprison", "magic coat", "powder", "after you", "aurora veil", "electric terrain", "encore", "gastro acid", "grass whistle", "guard split", "guard swap", "hail", "hypnosis", "lock_on", "lovely kiss", "power split", "power swap", "quash", "rain dance", "role play", "safeguard", "sandstorm", "scary face", "sing", "skill swap", "sleep powder", "speed swap", "sticky web", "string shot", "sunny day", "supersonic", "toxic thread", "worry seed", "yawn", "ally switch", "bestow", "me first", "recycle", "snatch", "switcheroo", "trick", "copycat", "defense curl", "defog", "focus energy", "mimic", "sweet scent", "trick room", "camouflage", "detect", "flash", "kinesis", "lucky chant", "magnet rise", "sand attack", "smokescreen", "celebrate", "conversion", "forests curse", "geomancy", "happy hour", "hold hands", "purify", "sketch", "trick_or_treat", "acupressure", "foresight", "heart swap", "sleep talk", "tailwind", "acid armor", "agility", "amnesia", "attract", "autotomize", "barrier", "baton pass", "calm mind", "coil", "cotton guard", "cotton spore", "dark void", "disable", "double team", "dragon dance", "endure", "floral healing", "follow me", "heal order", "heal pulse", "helping hand", "iron defense", "kings shield", "leech seed", "milk drink", "minimize", "moonlight", "morning sun", "nasty plot", "perish song", "protect", "quiver dance", "rage powder", "recover", "rest", "rock polish", "roost", "shell smash", "shift gear", "shore up", "slack off", "soft_boiled", "spore", "substitute", "swagger", "swallow", "swords dance", "synthesis", "tail glow", "aromatherapy", "belly drum", "conversion 2", "haze", "heal bell", "mist", "psych up", "refresh", "spite", "stockpile", "teleport", "transform", "memento", "parting shot", "destiny bond", "grudge", "curse"];
var zeffects = ["Attack ↑", "Attack ↑", "Attack ↑", "Attack ↑", "Attack ↑", "Attack ↑", "Attack ↑", "Attack ↑", "Attack ↑", "Attack ↑", "Attack ↑", "Attack ↑", "Attack ↑", "Attack ↑", "Attack ↑", "Attack ↑", "Attack ↑↑", "Attack ↑↑↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Defense ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑", "Special Attack ↑↑", "Special Attack ↑↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑", "Special Defense ↑↑", "Special Defense ↑↑", "Special Defense ↑↑", "Special Defense ↑↑", "Special Defense ↑↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑", "Speed ↑↑", "Speed ↑↑", "Speed ↑↑", "Speed ↑↑", "Speed ↑↑", "Speed ↑↑", "Speed ↑↑", "Accuracy ↑", "Accuracy ↑", "Accuracy ↑", "Accuracy ↑", "Accuracy ↑", "Accuracy ↑", "Accuracy ↑", "Evasiveness ↑", "Evasiveness ↑", "Evasiveness ↑", "Evasiveness ↑", "Evasiveness ↑", "Evasiveness ↑", "Evasiveness ↑", "Evasiveness ↑", "All stats ↑", "All stats ↑", "All stats ↑", "All stats ↑", "All stats ↑", "All stats ↑", "All stats ↑", "All stats ↑", "All stats ↑", "Boosts critical-hit ratio", "Boosts critical-hit ratio", "Boosts critical-hit ratio", "Boosts critical-hit ratio", "Boosts critical-hit ratio", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Remove user's stat debuffs", "Restores user's HP 100%", "Restores user's HP 100%", "Restores user's HP 100%", "Restores user's HP 100%", "Restores user's HP 100%", "Restores user's HP 100%", "Restores user's HP 100%", "Restores user's HP 100%", "Restores user's HP 100%", "Restores user's HP 100%", "Restores user's HP 100%", "Restores user's HP 100%", "Restores replacement’s HP 100%", "Restores replacement’s HP 100%", "Becomes center of attention", "Becomes center of attention", "Restores user's HP 100% if user is Ghost-type, Attack ↑ otherwise"];
var moves = ["pound", "karate chop", "double slap", "comet punch", "mega punch", "pay day", "fire punch", "ice punch", "thunder punch", "scratch", "vice grip", "guillotine", "razor wind", "swords dance", "cut", "gust", "wing attack", "whirlwind", "fly", "bind", "slam", "vine whip", "stomp", "double kick", "mega kick", "jump kick", "rolling kick", "sand attack", "headbutt", "horn attack", "fury attack", "horn drill", "tackle", "body slam", "wrap", "take down", "thrash", "double_edge", "tail whip", "poison sting", "twineedle", "pin missile", "leer", "bite", "growl", "roar", "sing", "supersonic", "sonic boom", "disable", "acid", "ember", "flamethrower", "mist", "water gun", "hydro pump", "surf", "ice beam", "blizzard", "psybeam", "bubble beam", "aurora beam", "hyper beam", "peck", "drill peck", "submission", "low kick", "counter", "seismic toss", "strength", "absorb", "mega drain", "leech seed", "growth", "razor leaf", "solar beam", "poison powder", "stun spore", "sleep powder", "petal dance", "string shot", "dragon rage", "fire spin", "thunder shock", "thunderbolt", "thunder wave", "thunder", "rock throw", "earthquake", "fissure", "dig", "toxic", "confusion", "psychic", "hypnosis", "meditate", "agility", "quick attack", "rage", "teleport", "night shade", "mimic", "screech", "double team", "recover", "harden", "minimize", "smokescreen", "confuse ray", "withdraw", "defense curl", "barrier", "light screen", "haze", "reflect", "focus energy", "bide", "metronome", "mirror move", "self_destruct", "egg bomb", "lick", "smog", "sludge", "bone club", "fire blast", "waterfall", "clamp", "swift", "skull bash", "spike cannon", "constrict", "amnesia", "kinesis", "soft_boiled", "high jump kick", "glare", "dream eater", "poison gas", "barrage", "leech life", "lovely kiss", "sky attack", "transform", "bubble", "dizzy punch", "spore", "flash", "psywave", "splash", "acid armor", "crabhammer", "explosion", "fury swipes", "bonemerang", "rest", "rock slide", "hyper fang", "sharpen", "conversion", "tri attack", "super fang", "slash", "substitute", "struggle", "sketch", "triple kick", "thief", "spider web", "mind reader", "nightmare", "flame wheel", "snore", "curse", "flail", "conversion 2", "aeroblast", "cotton spore", "reversal", "spite", "powder snow", "protect", "mach punch", "scary face", "feint attack", "sweet kiss", "belly drum", "sludge bomb", "mud_slap", "octazooka", "spikes", "zap cannon", "foresight", "destiny bond", "perish song", "icy wind", "detect", "bone rush", "lock_on", "outrage", "sandstorm", "giga drain", "endure", "charm", "rollout", "false swipe", "swagger", "milk drink", "spark", "fury cutter", "steel wing", "mean look", "attract", "sleep talk", "heal bell", "_return", "present", "frustration", "safeguard", "pain split", "sacred fire", "magnitude", "dynamic punch", "megahorn", "dragon breath", "baton pass", "encore", "pursuit", "rapid spin", "sweet scent", "iron tail", "metal claw", "vital throw", "morning sun", "synthesis", "moonlight", "hidden power", "cross chop", "twister", "rain dance", "sunny day", "crunch", "mirror coat", "psych up", "extreme speed", "ancient power", "shadow ball", "future sight", "rock smash", "whirlpool", "beat up", "fake out", "uproar", "stockpile", "spit up", "swallow", "heat wave", "hail", "torment", "flatter", "will_o_wisp", "memento", "facade", "focus punch", "smelling salts", "follow me", "nature power", "charge", "taunt", "helping hand", "trick", "role play", "wish", "assist", "ingrain", "superpower", "magic coat", "recycle", "revenge", "brick break", "yawn", "knock off", "endeavor", "eruption", "skill swap", "imprison", "refresh", "grudge", "snatch", "secret power", "dive", "arm thrust", "camouflage", "tail glow", "luster purge", "mist ball", "feather dance", "teeter dance", "blaze kick", "mud sport", "ice ball", "needle arm", "slack off", "hyper voice", "poison fang", "crush claw", "blast burn", "hydro cannon", "meteor mash", "astonish", "weather ball", "aromatherapy", "fake tears", "air cutter", "overheat", "odor sleuth", "rock tomb", "silver wind", "metal sound", "grass whistle", "tickle", "cosmic power", "water spout", "signal beam", "shadow punch", "extrasensory", "sky uppercut", "sand tomb", "sheer cold", "muddy water", "bullet seed", "aerial ace", "icicle spear", "iron defense", "block", "howl", "dragon claw", "frenzy plant", "bulk up", "bounce", "mud shot", "poison tail", "covet", "volt tackle", "magical leaf", "water sport", "calm mind", "leaf blade", "dragon dance", "rock blast", "shock wave", "water pulse", "doom desire", "psycho boost", "roost", "gravity", "miracle eye", "wake_up slap", "hammer arm", "gyro ball", "healing wish", "brine", "natural gift", "feint", "pluck", "tailwind", "acupressure", "metal burst", "u_turn", "close combat", "payback", "assurance", "embargo", "fling", "psycho shift", "trump card", "heal block", "wring out", "power trick", "gastro acid", "lucky chant", "me first", "copycat", "power swap", "guard swap", "punishment", "last resort", "worry seed", "sucker punch", "toxic spikes", "heart swap", "aqua ring", "magnet rise", "flare blitz", "force palm", "aura sphere", "rock polish", "poison jab", "dark pulse", "night slash", "aqua tail", "seed bomb", "air slash", "x_scissor", "bug buzz", "dragon pulse", "dragon rush", "power gem", "drain punch", "vacuum wave", "focus blast", "energy ball", "brave bird", "earth power", "switcheroo", "giga impact", "nasty plot", "bullet punch", "avalanche", "ice shard", "shadow claw", "thunder fang", "ice fang", "fire fang", "shadow sneak", "mud bomb", "psycho cut", "zen headbutt", "mirror shot", "flash cannon", "rock climb", "defog", "trick room", "draco meteor", "discharge", "lava plume", "leaf storm", "power whip", "rock wrecker", "cross poison", "gunk shot", "iron head", "magnet bomb", "stone edge", "captivate", "stealth rock", "grass knot", "chatter", "judgment", "bug bite", "charge beam", "wood hammer", "aqua jet", "attack order", "defend order", "heal order", "head smash", "double hit", "roar of time", "spacial rend", "lunar dance", "crush grip", "magma storm", "dark void", "seed flare", "ominous wind", "shadow force", "hone claws", "wide guard", "guard split", "power split", "wonder room", "psyshock", "venoshock", "autotomize", "rage powder", "telekinesis", "magic room", "smack down", "storm throw", "flame burst", "sludge wave", "quiver dance", "heavy slam", "synchronoise", "electro ball", "soak", "flame charge", "coil", "low sweep", "acid spray", "foul play", "simple beam", "entrainment", "after you", "round", "echoed voice", "chip away", "clear smog", "stored power", "quick guard", "ally switch", "scald", "shell smash", "heal pulse", "hex", "sky drop", "shift gear", "circle throw", "incinerate", "quash", "acrobatics", "reflect type", "retaliate", "final gambit", "bestow", "inferno", "water pledge", "fire pledge", "grass pledge", "volt switch", "struggle bug", "bulldoze", "frost breath", "dragon tail", "work up", "electroweb", "wild charge", "drill run", "dual chop", "heart stamp", "horn leech", "sacred sword", "razor shell", "heat crash", "leaf tornado", "steamroller", "cotton guard", "night daze", "psystrike", "tail slap", "hurricane", "head charge", "gear grind", "searing shot", "techno blast", "relic song", "secret sword", "glaciate", "bolt strike", "blue flare", "fiery dance", "freeze shock", "ice burn", "snarl", "icicle crash", "v_create", "fusion flare", "fusion bolt", "flying press", "mat block", "belch", "rototiller", "sticky web", "fell stinger", "phantom force", "trick_or_treat", "noble roar", "ion deluge", "parabolic charge", "forests curse", "petal blizzard", "freeze_dry", "disarming voice", "parting shot", "topsy_turvy", "draining kiss", "crafty shield", "flower shield", "grassy terrain", "misty terrain", "electrify", "play rough", "fairy wind", "moonblast", "boomburst", "fairy lock", "kings shield", "play nice", "confide", "diamond storm", "steam eruption", "hyperspace hole", "water shuriken", "mystical fire", "spiky shield", "aromatic mist", "eerie impulse", "venom drench", "powder", "geomancy", "magnetic flux", "happy hour", "electric terrain", "dazzling gleam", "celebrate", "hold hands", "baby_doll eyes", "nuzzle", "hold back", "infestation", "power_up punch", "oblivion wing", "thousand arrows", "thousand waves", "lands wrath", "light of ruin", "origin pulse", "precipice blades", "dragon ascent", "hyperspace fury", "ten million volt thunderbolt", "accelerock", "acid downpour", "all_out pummeling", "anchor shot", "aurora veil", "baneful bunker", "beak blast", "black hole eclipse", "bloom doom", "breakneck blitz", "brutal swing", "burn up", "catastropika", "clanging scales", "continental crush", "core enforcer", "corkscrew crash", "darkest lariat", "devastating drake", "dragon hammer", "extreme evoboost", "fire lash", "first impression", "fleur cannon", "floral healing", "gear up", "genesis supernova", "gigavolt havoc", "guardian of alola", "high horsepower", "hydro vortex", "ice hammer", "inferno overdrive", "instruct", "laser focus", "leafage", "liquidation", "lunge", "malicious moonsault", "moongeist beam", "multi_attack", "natures madness", "never_ending nightmare", "oceanic operetta", "pollen puff", "power trip", "prismatic laser", "psychic fangs", "psychic terrain", "pulverizing pancake", "purify", "revelation dance", "savage spin_out", "shadow bone", "shattered psyche", "shell trap", "shore up", "sinister arrow raid", "smart strike", "solar blade", "soul_stealing 7_star strike", "sparkling aria", "spectral thief", "speed swap", "spirit shackle", "spotlight", "stoked sparksurfer", "stomping tantrum", "strength sap", "subzero slammer", "sunsteel strike", "supersonic skystrike", "tearful look", "tectonic rage", "throat chop", "toxic thread", "trop kick", "twinkle tackle", "zing zap"];

var i = 0;
function clicked(){
	if (i < moves.length){
		if (zmoves.indexOf(moves[i]) === -1){
			document.getElementById("myDiv").innerHTML += "var " + moves[i].replace(/ /g,"_") + " = {<br />&nbsp;&nbsp;&nbsp;&nbsp;name: \"" + eval(moves[i].replace(/ /g,"_")).name + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;type: \"" + eval(moves[i].replace(/ /g,"_")).type + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;cat: \"" + eval(moves[i].replace(/ /g,"_")).cat + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;power: " + eval(moves[i].replace(/ /g,"_")).power + ",<br />&nbsp;&nbsp;&nbsp;&nbsp;effect: " + eval(moves[i].replace(/ /g,"_")).pp  + ",<br />&nbsp;&nbsp;&nbsp;&nbsp;acc: " + eval(moves[i].replace(/ /g,"_")).acc + ",<br />&nbsp;&nbsp;&nbsp;&nbsp;effect: \"" + eval(moves[i].replace(/ /g,"_")).effect + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;wiki: \"" + eval(moves[i].replace(/ /g,"_")).wiki + "\"<br />};<br /><br />"
		} else {
			document.getElementById("myDiv").innerHTML += "var " + moves[i].replace(/ /g,"_") + " = {<br />&nbsp;&nbsp;&nbsp;&nbsp;name: \"" + eval(moves[i].replace(/ /g,"_")).name + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;type: \"" + eval(moves[i].replace(/ /g,"_")).type + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;cat: \"" + eval(moves[i].replace(/ /g,"_")).cat + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;power: " + eval(moves[i].replace(/ /g,"_")).power + ",<br />&nbsp;&nbsp;&nbsp;&nbsp;effect: " + eval(moves[i].replace(/ /g,"_")).pp  + ",<br />&nbsp;&nbsp;&nbsp;&nbsp;acc: " + eval(moves[i].replace(/ /g,"_")).acc + ",<br />&nbsp;&nbsp;&nbsp;&nbsp;effect: \"" + eval(moves[i].replace(/ /g,"_")).effect + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;zeffect: \"" + zeffects[zmoves.indexOf(moves[i])] + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;wiki: \"" + eval(moves[i].replace(/ /g,"_")).wiki + "\"<br />};<br /><br />"
		}
		i++;
		console.log(i);
		setTimeout(function(){ clicked(); }, 10);
	}
}

console.log("z6");
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

var pound = {
    name: "Pound",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/pound.shtml"
};

var karate_chop = {
    name: "Karate Chop",
    type: "Fighting",
    cat: "Physical",
    power: 50,
    pp: 25,
    acc: 100,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-sm/karatechop.shtml"
};

var double_slap = {
    name: "Double Slap",
    type: "Normal",
    cat: "Physical",
    power: 15,
    pp: 10,
    acc: 85,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/doubleslap.shtml"
};

var comet_punch = {
    name: "Comet Punch",
    type: "Normal",
    cat: "Physical",
    power: 18,
    pp: 15,
    acc: 85,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/cometpunch.shtml"
};

var mega_punch = {
    name: "Mega Punch",
    type: "Normal",
    cat: "Physical",
    power: 80,
    pp: 20,
    acc: 85,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/megapunch.shtml"
};

var pay_day = {
    name: "Pay Day",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 20,
    acc: 100,
    effect: "A small amount of money is gained after the battle resolves.",
    wiki: "http://www.serebii.net/attackdex-sm/payday.shtml"
};

var fire_punch = {
    name: "Fire Punch",
    type: "Fire",
    cat: "Physical",
    power: 75,
    pp: 15,
    acc: 100,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/firepunch.shtml"
};

var ice_punch = {
    name: "Ice Punch",
    type: "Ice",
    cat: "Physical",
    power: 75,
    pp: 15,
    acc: 100,
    effect: "May freeze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/icepunch.shtml"
};

var thunder_punch = {
    name: "Thunder Punch",
    type: "Electric",
    cat: "Physical",
    power: 75,
    pp: 15,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/thunderpunch.shtml"
};

var scratch = {
    name: "Scratch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/scratch.shtml"
};

var vice_grip = {
    name: "Vice Grip",
    type: "Normal",
    cat: "Physical",
    power: 55,
    pp: 30,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/vicegrip.shtml"
};

var guillotine = {
    name: "Guillotine",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "One-Hit-KO, if it hits.",
    wiki: "http://www.serebii.net/attackdex-sm/guillotine.shtml"
};

var razor_wind = {
    name: "Razor Wind",
    type: "Normal",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "Charges on first turn, attacks on second. High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-sm/razorwind.shtml"
};

var swords_dance = {
    name: "Swords Dance",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Sharply raises user's Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/swordsdance.shtml"
};

var cut = {
    name: "Cut",
    type: "Normal",
    cat: "Physical",
    power: 50,
    pp: 30,
    acc: 95,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/cut.shtml"
};

var gust = {
    name: "Gust",
    type: "Flying",
    cat: "Special",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "Hits Pokémon using Fly/Bounce with double power.",
    wiki: "http://www.serebii.net/attackdex-sm/gust.shtml"
};

var wing_attack = {
    name: "Wing Attack",
    type: "Flying",
    cat: "Physical",
    power: 60,
    pp: 35,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/wingattack.shtml"
};

var whirlwind = {
    name: "Whirlwind",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "In battles, the opponent switches. In the wild, the Pokémon runs.",
    wiki: "http://www.serebii.net/attackdex-sm/whirlwind.shtml"
};

var fly = {
    name: "Fly",
    type: "Flying",
    cat: "Physical",
    power: 90,
    pp: 15,
    acc: 95,
    effect: "Flies up on first turn, attacks on second turn.",
    wiki: "http://www.serebii.net/attackdex-sm/fly.shtml"
};

var bind = {
    name: "Bind",
    type: "Normal",
    cat: "Physical",
    power: 15,
    pp: 20,
    acc: 85,
    effect: "Traps opponent, damaging them for 4-5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/bind.shtml"
};

var slam = {
    name: "Slam",
    type: "Normal",
    cat: "Physical",
    power: 80,
    pp: 20,
    acc: 75,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/slam.shtml"
};

var vine_whip = {
    name: "Vine Whip",
    type: "Grass",
    cat: "Physical",
    power: 45,
    pp: 25,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/vinewhip.shtml"
};

var stomp = {
    name: "Stomp",
    type: "Normal",
    cat: "Physical",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/stomp.shtml"
};

var double_kick = {
    name: "Double Kick",
    type: "Fighting",
    cat: "Physical",
    power: 30,
    pp: 30,
    acc: 100,
    effect: "Hits twice in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/doublekick.shtml"
};

var mega_kick = {
    name: "Mega Kick",
    type: "Normal",
    cat: "Physical",
    power: 120,
    pp: 5,
    acc: 75,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/megakick.shtml"
};

var jump_kick = {
    name: "Jump Kick",
    type: "Fighting",
    cat: "Physical",
    power: 100,
    pp: 10,
    acc: 95,
    effect: "If it misses, the user loses half their HP.",
    wiki: "http://www.serebii.net/attackdex-sm/jumpkick.shtml"
};

var rolling_kick = {
    name: "Rolling Kick",
    type: "Fighting",
    cat: "Physical",
    power: 60,
    pp: 15,
    acc: 85,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/rollingkick.shtml"
};

var sand_attack = {
    name: "Sand Attack",
    type: "Ground",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Lowers opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-sm/sandattack.shtml"
};

var headbutt = {
    name: "Headbutt",
    type: "Normal",
    cat: "Physical",
    power: 70,
    pp: 15,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/headbutt.shtml"
};

var horn_attack = {
    name: "Horn Attack",
    type: "Normal",
    cat: "Physical",
    power: 65,
    pp: 25,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/hornattack.shtml"
};

var fury_attack = {
    name: "Fury Attack",
    type: "Normal",
    cat: "Physical",
    power: 15,
    pp: 20,
    acc: 85,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/furyattack.shtml"
};

var horn_drill = {
    name: "Horn Drill",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "One-Hit-KO, if it hits.",
    wiki: "http://www.serebii.net/attackdex-sm/horndrill.shtml"
};

var tackle = {
    name: "Tackle",
    type: "Normal",
    cat: "Physical",
    power: 50,
    pp: 35,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/tackle.shtml"
};

var body_slam = {
    name: "Body Slam",
    type: "Normal",
    cat: "Physical",
    power: 85,
    pp: 15,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/bodyslam.shtml"
};

var wrap = {
    name: "Wrap",
    type: "Normal",
    cat: "Physical",
    power: 15,
    pp: 20,
    acc: 90,
    effect: "Traps opponent, damaging them for 4-5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/wrap.shtml"
};

var take_down = {
    name: "Take Down",
    type: "Normal",
    cat: "Physical",
    power: 90,
    pp: 20,
    acc: 85,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-sm/takedown.shtml"
};

var thrash = {
    name: "Thrash",
    type: "Normal",
    cat: "Physical",
    power: 120,
    pp: 10,
    acc: 100,
    effect: "User attacks for 2-3 turns but then becomes confused.",
    wiki: "http://www.serebii.net/attackdex-sm/thrash.shtml"
};

var double_edge = {
    name: "Double_edge",
    type: "Normal",
    cat: "Physical",
    power: 120,
    pp: 15,
    acc: 100,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-sm/double_edge.shtml"
};

var tail_whip = {
    name: "Tail Whip",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: 100,
    effect: "Lowers opponent's Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/tailwhip.shtml"
};

var poison_sting = {
    name: "Poison Sting",
    type: "Poison",
    cat: "Physical",
    power: 15,
    pp: 35,
    acc: 100,
    effect: "May poison the opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/poisonsting.shtml"
};

var twineedle = {
    name: "Twineedle",
    type: "Bug",
    cat: "Physical",
    power: 25,
    pp: 20,
    acc: 100,
    effect: "Hits twice in one turn. May poison opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/twineedle.shtml"
};

var pin_missile = {
    name: "Pin Missile",
    type: "Bug",
    cat: "Physical",
    power: 25,
    pp: 20,
    acc: 95,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/pinmissile.shtml"
};

var leer = {
    name: "Leer",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: 100,
    effect: "Lowers opponent's Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/leer.shtml"
};

var bite = {
    name: "Bite",
    type: "Dark",
    cat: "Physical",
    power: 60,
    pp: 25,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/bite.shtml"
};

var growl = {
    name: "Growl",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: 100,
    effect: "Lowers opponent's Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/growl.shtml"
};

var roar = {
    name: "Roar",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "In battles, the opponent switches. In the wild, the Pokémon runs.",
    wiki: "http://www.serebii.net/attackdex-sm/roar.shtml"
};

var sing = {
    name: "Sing",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 55,
    effect: "Puts opponent to sleep.",
    wiki: "http://www.serebii.net/attackdex-sm/sing.shtml"
};

var supersonic = {
    name: "Supersonic",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 55,
    effect: "Confuses opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/supersonic.shtml"
};

var sonic_boom = {
    name: "Sonic Boom",
    type: "Normal",
    cat: "Special",
    power: undefined,
    pp: 20,
    acc: 90,
    effect: "Always inflicts 20 HP.",
    wiki: "http://www.serebii.net/attackdex-sm/sonicboom.shtml"
};

var disable = {
    name: "Disable",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Opponent can't use its last attack for a few turns.",
    wiki: "http://www.serebii.net/attackdex-sm/disable.shtml"
};

var acid = {
    name: "Acid",
    type: "Poison",
    cat: "Special",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/acid.shtml"
};

var ember = {
    name: "Ember",
    type: "Fire",
    cat: "Special",
    power: 40,
    pp: 25,
    acc: 100,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/ember.shtml"
};

var flamethrower = {
    name: "Flamethrower",
    type: "Fire",
    cat: "Special",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/flamethrower.shtml"
};

var mist = {
    name: "Mist",
    type: "Ice",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "User's stats cannot be changed for a period of time.",
    wiki: "http://www.serebii.net/attackdex-sm/mist.shtml"
};

var water_gun = {
    name: "Water Gun",
    type: "Water",
    cat: "Special",
    power: 40,
    pp: 25,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/watergun.shtml"
};

var hydro_pump = {
    name: "Hydro Pump",
    type: "Water",
    cat: "Special",
    power: 110,
    pp: 5,
    acc: 80,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/hydropump.shtml"
};

var surf = {
    name: "Surf",
    type: "Water",
    cat: "Special",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "Hits all adjacent Pokémon.",
    wiki: "http://www.serebii.net/attackdex-sm/surf.shtml"
};

var ice_beam = {
    name: "Ice Beam",
    type: "Ice",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "May freeze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/icebeam.shtml"
};

var blizzard = {
    name: "Blizzard",
    type: "Ice",
    cat: "Special",
    power: 110,
    pp: 5,
    acc: 70,
    effect: "May freeze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/blizzard.shtml"
};

var psybeam = {
    name: "Psybeam",
    type: "Psychic",
    cat: "Special",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "May confuse opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/psybeam.shtml"
};

var bubble_beam = {
    name: "Bubble Beam",
    type: "Water",
    cat: "Special",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "May lower opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/bubblebeam.shtml"
};

var aurora_beam = {
    name: "Aurora Beam",
    type: "Ice",
    cat: "Special",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "May lower opponent's Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/aurorabeam.shtml"
};

var hyper_beam = {
    name: "Hyper Beam",
    type: "Normal",
    cat: "Special",
    power: 150,
    pp: 5,
    acc: 90,
    effect: "User must recharge next turn.",
    wiki: "http://www.serebii.net/attackdex-sm/hyperbeam.shtml"
};

var peck = {
    name: "Peck",
    type: "Flying",
    cat: "Physical",
    power: 35,
    pp: 35,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/peck.shtml"
};

var drill_peck = {
    name: "Drill Peck",
    type: "Flying",
    cat: "Physical",
    power: 80,
    pp: 20,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/drillpeck.shtml"
};

var submission = {
    name: "Submission",
    type: "Fighting",
    cat: "Physical",
    power: 80,
    pp: 25,
    acc: 80,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-sm/submission.shtml"
};

var low_kick = {
    name: "Low Kick",
    type: "Fighting",
    cat: "Physical",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "The heavier the opponent, the stronger the attack.",
    wiki: "http://www.serebii.net/attackdex-sm/lowkick.shtml"
};

var counter = {
    name: "Counter",
    type: "Fighting",
    cat: "Physical",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "When hit by a Physical Attack, user strikes back with 2x power.",
    wiki: "http://www.serebii.net/attackdex-sm/counter.shtml"
};

var seismic_toss = {
    name: "Seismic Toss",
    type: "Fighting",
    cat: "Physical",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Inflicts damage equal to user's level.",
    wiki: "http://www.serebii.net/attackdex-sm/seismictoss.shtml"
};

var strength = {
    name: "Strength",
    type: "Normal",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/strength.shtml"
};

var absorb = {
    name: "Absorb",
    type: "Grass",
    cat: "Special",
    power: 20,
    pp: 25,
    acc: 100,
    effect: "User recovers half the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/absorb.shtml"
};

var mega_drain = {
    name: "Mega Drain",
    type: "Grass",
    cat: "Special",
    power: 40,
    pp: 15,
    acc: 100,
    effect: "User recovers half the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/megadrain.shtml"
};

var leech_seed = {
    name: "Leech Seed",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 90,
    effect: "User steals HP from opponent each turn.",
    wiki: "http://www.serebii.net/attackdex-sm/leechseed.shtml"
};

var growth = {
    name: "Growth",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises user's Attack and Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/growth.shtml"
};

var razor_leaf = {
    name: "Razor Leaf",
    type: "Grass",
    cat: "Physical",
    power: 55,
    pp: 25,
    acc: 95,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-sm/razorleaf.shtml"
};

var solar_beam = {
    name: "Solar Beam",
    type: "Grass",
    cat: "Special",
    power: 120,
    pp: 10,
    acc: 100,
    effect: "Charges on first turn, attacks on second.",
    wiki: "http://www.serebii.net/attackdex-sm/solarbeam.shtml"
};

var poison_powder = {
    name: "Poison Powder",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 35,
    acc: 75,
    effect: "Poisons opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/poisonpowder.shtml"
};

var stun_spore = {
    name: "Stun Spore",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: 75,
    effect: "Paralyzes opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/stunspore.shtml"
};

var sleep_powder = {
    name: "Sleep Powder",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 75,
    effect: "Puts opponent to sleep.",
    wiki: "http://www.serebii.net/attackdex-sm/sleeppowder.shtml"
};

var petal_dance = {
    name: "Petal Dance",
    type: "Grass",
    cat: "Special",
    power: 120,
    pp: 10,
    acc: 100,
    effect: "User attacks for 2-3 turns but then becomes confused.",
    wiki: "http://www.serebii.net/attackdex-sm/petaldance.shtml"
};

var string_shot = {
    name: "String Shot",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: 95,
    effect: "Sharply lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/stringshot.shtml"
};

var dragon_rage = {
    name: "Dragon Rage",
    type: "Dragon",
    cat: "Special",
    power: undefined,
    pp: 10,
    acc: 100,
    effect: "Always inflicts 40 HP.",
    wiki: "http://www.serebii.net/attackdex-sm/dragonrage.shtml"
};

var fire_spin = {
    name: "Fire Spin",
    type: "Fire",
    cat: "Special",
    power: 35,
    pp: 15,
    acc: 85,
    effect: "Traps opponent, damaging them for 4-5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/firespin.shtml"
};

var thunder_shock = {
    name: "Thunder Shock",
    type: "Electric",
    cat: "Special",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/thundershock.shtml"
};

var thunderbolt = {
    name: "Thunderbolt",
    type: "Electric",
    cat: "Special",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/thunderbolt.shtml"
};

var thunder_wave = {
    name: "Thunder Wave",
    type: "Electric",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Paralyzes opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/thunderwave.shtml"
};

var thunder = {
    name: "Thunder",
    type: "Electric",
    cat: "Special",
    power: 110,
    pp: 10,
    acc: 70,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/thunder.shtml"
};

var rock_throw = {
    name: "Rock Throw",
    type: "Rock",
    cat: "Physical",
    power: 50,
    pp: 15,
    acc: 90,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/rockthrow.shtml"
};

var earthquake = {
    name: "Earthquake",
    type: "Ground",
    cat: "Physical",
    power: 100,
    pp: 10,
    acc: 100,
    effect: "Power is doubled if opponent is underground from using Dig.",
    wiki: "http://www.serebii.net/attackdex-sm/earthquake.shtml"
};

var fissure = {
    name: "Fissure",
    type: "Ground",
    cat: "Physical",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "One-Hit-KO, if it hits.",
    wiki: "http://www.serebii.net/attackdex-sm/fissure.shtml"
};

var dig = {
    name: "Dig",
    type: "Ground",
    cat: "Physical",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "Digs underground on first turn, attacks on second. Can also escape from caves.",
    wiki: "http://www.serebii.net/attackdex-sm/dig.shtml"
};

var toxic = {
    name: "Toxic",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 90,
    effect: "Badly poisons opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/toxic.shtml"
};

var confusion = {
    name: "Confusion",
    type: "Psychic",
    cat: "Special",
    power: 50,
    pp: 25,
    acc: 100,
    effect: "May confuse opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/confusion.shtml"
};

var psychic = {
    name: "Psychic",
    type: "Psychic",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/psychic.shtml"
};

var hypnosis = {
    name: "Hypnosis",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 60,
    effect: "Puts opponent to sleep.",
    wiki: "http://www.serebii.net/attackdex-sm/hypnosis.shtml"
};

var meditate = {
    name: "Meditate",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "Raises user's Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/meditate.shtml"
};

var agility = {
    name: "Agility",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Sharply raises user's Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/agility.shtml"
};

var quick_attack = {
    name: "Quick Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "User attacks first.",
    wiki: "http://www.serebii.net/attackdex-sm/quickattack.shtml"
};

var rage = {
    name: "Rage",
    type: "Normal",
    cat: "Physical",
    power: 20,
    pp: 20,
    acc: 100,
    effect: "Raises user's Attack when hit.",
    wiki: "http://www.serebii.net/attackdex-sm/rage.shtml"
};

var teleport = {
    name: "Teleport",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Allows user to flee wild battles; also warps player to last PokéCenter.",
    wiki: "http://www.serebii.net/attackdex-sm/teleport.shtml"
};

var night_shade = {
    name: "Night Shade",
    type: "Ghost",
    cat: "Special",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Inflicts damage equal to user's level.",
    wiki: "http://www.serebii.net/attackdex-sm/nightshade.shtml"
};

var mimic = {
    name: "Mimic",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Copies the opponent's last move.",
    wiki: "http://www.serebii.net/attackdex-sm/mimic.shtml"
};

var screech = {
    name: "Screech",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: 85,
    effect: "Sharply lowers opponent's Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/screech.shtml"
};

var double_team = {
    name: "Double Team",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Raises user's Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-sm/doubleteam.shtml"
};

var recover = {
    name: "Recover",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User recovers half its max HP.",
    wiki: "http://www.serebii.net/attackdex-sm/recover.shtml"
};

var harden = {
    name: "Harden",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Raises user's Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/harden.shtml"
};

var minimize = {
    name: "Minimize",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Sharply raises user's Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-sm/minimize.shtml"
};

var smokescreen = {
    name: "Smokescreen",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Lowers opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-sm/smokescreen.shtml"
};

var confuse_ray = {
    name: "Confuse Ray",
    type: "Ghost",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Confuses opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/confuseray.shtml"
};

var withdraw = {
    name: "Withdraw",
    type: "Water",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "Raises user's Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/withdraw.shtml"
};

var defense_curl = {
    name: "Defense Curl",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "Raises user's Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/defensecurl.shtml"
};

var barrier = {
    name: "Barrier",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Sharply raises user's Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/barrier.shtml"
};

var light_screen = {
    name: "Light Screen",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Halves damage from Special attacks for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/lightscreen.shtml"
};

var haze = {
    name: "Haze",
    type: "Ice",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Resets all stat changes.",
    wiki: "http://www.serebii.net/attackdex-sm/haze.shtml"
};

var reflect = {
    name: "Reflect",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Halves damage from Physical attacks for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/reflect.shtml"
};

var focus_energy = {
    name: "Focus Energy",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Increases critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-sm/focusenergy.shtml"
};

var bide = {
    name: "Bide",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "User takes damage for two turns then strikes back double.",
    wiki: "http://www.serebii.net/attackdex-sm/bide.shtml"
};

var metronome = {
    name: "Metronome",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User performs any move in the game at random.",
    wiki: "http://www.serebii.net/attackdex-sm/metronome.shtml"
};

var mirror_move = {
    name: "Mirror Move",
    type: "Flying",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "User performs the opponent's last move.",
    wiki: "http://www.serebii.net/attackdex-sm/mirrormove.shtml"
};

var self_destruct = {
    name: "Self_destruct",
    type: "Normal",
    cat: "Physical",
    power: 200,
    pp: 5,
    acc: 100,
    effect: "User faints.",
    wiki: "http://www.serebii.net/attackdex-sm/self_destruct.shtml"
};

var egg_bomb = {
    name: "Egg Bomb",
    type: "Normal",
    cat: "Physical",
    power: 100,
    pp: 10,
    acc: 75,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/eggbomb.shtml"
};

var lick = {
    name: "Lick",
    type: "Ghost",
    cat: "Physical",
    power: 30,
    pp: 30,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/lick.shtml"
};

var smog = {
    name: "Smog",
    type: "Poison",
    cat: "Special",
    power: 30,
    pp: 20,
    acc: 70,
    effect: "May poison opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/smog.shtml"
};

var sludge = {
    name: "Sludge",
    type: "Poison",
    cat: "Special",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "May poison opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/sludge.shtml"
};

var bone_club = {
    name: "Bone Club",
    type: "Ground",
    cat: "Physical",
    power: 65,
    pp: 20,
    acc: 85,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/boneclub.shtml"
};

var fire_blast = {
    name: "Fire Blast",
    type: "Fire",
    cat: "Special",
    power: 110,
    pp: 5,
    acc: 85,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/fireblast.shtml"
};

var waterfall = {
    name: "Waterfall",
    type: "Water",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/waterfall.shtml"
};

var clamp = {
    name: "Clamp",
    type: "Water",
    cat: "Physical",
    power: 35,
    pp: 15,
    acc: 85,
    effect: "Traps opponent, damaging them for 4-5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/clamp.shtml"
};

var swift = {
    name: "Swift",
    type: "Normal",
    cat: "Special",
    power: 60,
    pp: 20,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-sm/swift.shtml"
};

var skull_bash = {
    name: "Skull Bash",
    type: "Normal",
    cat: "Physical",
    power: 130,
    pp: 10,
    acc: 100,
    effect: "Raises Defense on first turn, attacks on second.",
    wiki: "http://www.serebii.net/attackdex-sm/skullbash.shtml"
};

var spike_cannon = {
    name: "Spike Cannon",
    type: "Normal",
    cat: "Physical",
    power: 20,
    pp: 15,
    acc: 100,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/spikecannon.shtml"
};

var constrict = {
    name: "Constrict",
    type: "Normal",
    cat: "Physical",
    power: 10,
    pp: 35,
    acc: 100,
    effect: "May lower opponent's Speed by one stage.",
    wiki: "http://www.serebii.net/attackdex-sm/constrict.shtml"
};

var amnesia = {
    name: "Amnesia",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Sharply raises user's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/amnesia.shtml"
};

var kinesis = {
    name: "Kinesis",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 80,
    effect: "Lowers opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-sm/kinesis.shtml"
};

var soft_boiled = {
    name: "Soft_boiled",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User recovers half its max HP.",
    wiki: "http://www.serebii.net/attackdex-sm/soft_boiled.shtml"
};

var high_jump_kick = {
    name: "High Jump Kick",
    type: "Fighting",
    cat: "Physical",
    power: 130,
    pp: 10,
    acc: 90,
    effect: "If it misses, the user loses half their HP.",
    wiki: "http://www.serebii.net/attackdex-sm/highjumpkick.shtml"
};

var glare = {
    name: "Glare",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: 100,
    effect: "Paralyzes opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/glare.shtml"
};

var dream_eater = {
    name: "Dream Eater",
    type: "Psychic",
    cat: "Special",
    power: 100,
    pp: 15,
    acc: 100,
    effect: "User recovers half the HP inflicted on a sleeping opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/dreameater.shtml"
};

var poison_gas = {
    name: "Poison Gas",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: 90,
    effect: "Poisons opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/poisongas.shtml"
};

var barrage = {
    name: "Barrage",
    type: "Normal",
    cat: "Physical",
    power: 15,
    pp: 20,
    acc: 85,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/barrage.shtml"
};

var leech_life = {
    name: "Leech Life",
    type: "Bug",
    cat: "Physical",
    power: 20,
    pp: 15,
    acc: 100,
    effect: "User recovers half the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/leechlife.shtml"
};

var lovely_kiss = {
    name: "Lovely Kiss",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 75,
    effect: "Puts opponent to sleep.",
    wiki: "http://www.serebii.net/attackdex-sm/lovelykiss.shtml"
};

var sky_attack = {
    name: "Sky Attack",
    type: "Flying",
    cat: "Physical",
    power: 140,
    pp: 5,
    acc: 90,
    effect: "Charges on first turn, attacks on second. May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/skyattack.shtml"
};

var transform = {
    name: "Transform",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User takes on the form and attacks of the opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/transform.shtml"
};

var bubble = {
    name: "Bubble",
    type: "Water",
    cat: "Special",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "May lower opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/bubble.shtml"
};

var dizzy_punch = {
    name: "Dizzy Punch",
    type: "Normal",
    cat: "Physical",
    power: 70,
    pp: 10,
    acc: 100,
    effect: "May confuse opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/dizzypunch.shtml"
};

var spore = {
    name: "Spore",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Puts opponent to sleep.",
    wiki: "http://www.serebii.net/attackdex-sm/spore.shtml"
};

var flash = {
    name: "Flash",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Lowers opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-sm/flash.shtml"
};

var psywave = {
    name: "Psywave",
    type: "Psychic",
    cat: "Special",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Inflicts damage 50-150% of user's level.",
    wiki: "http://www.serebii.net/attackdex-sm/psywave.shtml"
};

var splash = {
    name: "Splash",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "Doesn't do ANYTHING.",
    wiki: "http://www.serebii.net/attackdex-sm/splash.shtml"
};

var acid_armor = {
    name: "Acid Armor",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Sharply raises user's Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/acidarmor.shtml"
};

var crabhammer = {
    name: "Crabhammer",
    type: "Water",
    cat: "Physical",
    power: 100,
    pp: 10,
    acc: 90,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-sm/crabhammer.shtml"
};

var explosion = {
    name: "Explosion",
    type: "Normal",
    cat: "Physical",
    power: 250,
    pp: 5,
    acc: 100,
    effect: "User faints.",
    wiki: "http://www.serebii.net/attackdex-sm/explosion.shtml"
};

var fury_swipes = {
    name: "Fury Swipes",
    type: "Normal",
    cat: "Physical",
    power: 18,
    pp: 15,
    acc: 80,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/furyswipes.shtml"
};

var bonemerang = {
    name: "Bonemerang",
    type: "Ground",
    cat: "Physical",
    power: 50,
    pp: 10,
    acc: 90,
    effect: "Hits twice in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/bonemerang.shtml"
};

var rest = {
    name: "Rest",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User sleeps for 2 turns, but user is fully healed.",
    wiki: "http://www.serebii.net/attackdex-sm/rest.shtml"
};

var rock_slide = {
    name: "Rock Slide",
    type: "Rock",
    cat: "Physical",
    power: 75,
    pp: 10,
    acc: 90,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/rockslide.shtml"
};

var hyper_fang = {
    name: "Hyper Fang",
    type: "Normal",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 90,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/hyperfang.shtml"
};

var sharpen = {
    name: "Sharpen",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Raises user's Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/sharpen.shtml"
};

var conversion = {
    name: "Conversion",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Changes user's type to that of its first move.",
    wiki: "http://www.serebii.net/attackdex-sm/conversion.shtml"
};

var tri_attack = {
    name: "Tri Attack",
    type: "Normal",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "May paralyze, burn or freeze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/triattack.shtml"
};

var super_fang = {
    name: "Super Fang",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 10,
    acc: 90,
    effect: "Always takes off half of the opponent's HP.",
    wiki: "http://www.serebii.net/attackdex-sm/superfang.shtml"
};

var slash = {
    name: "Slash",
    type: "Normal",
    cat: "Physical",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-sm/slash.shtml"
};

var substitute = {
    name: "Substitute",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Uses HP to creates a decoy that takes hits.",
    wiki: "http://www.serebii.net/attackdex-sm/substitute.shtml"
};

var struggle = {
    name: "Struggle",
    type: "Normal",
    cat: "Physical",
    power: 50,
    pp: 1,
    acc: -1,
    effect: "Only usable when all PP are gone. Hurts the user.",
    wiki: "http://www.serebii.net/attackdex-sm/struggle.shtml"
};

var sketch = {
    name: "Sketch",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Permanently copies the opponent's last move.",
    wiki: "http://www.serebii.net/attackdex-sm/sketch.shtml"
};

var triple_kick = {
    name: "Triple Kick",
    type: "Fighting",
    cat: "Physical",
    power: 10,
    pp: 10,
    acc: 90,
    effect: "Hits thrice in one turn at increasing power.",
    wiki: "http://www.serebii.net/attackdex-sm/triplekick.shtml"
};

var thief = {
    name: "Thief",
    type: "Dark",
    cat: "Physical",
    power: 60,
    pp: 25,
    acc: 100,
    effect: "Also steals opponent's held item.",
    wiki: "http://www.serebii.net/attackdex-sm/thief.shtml"
};

var spider_web = {
    name: "Spider Web",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Opponent cannot escape/switch.",
    wiki: "http://www.serebii.net/attackdex-sm/spiderweb.shtml"
};

var mind_reader = {
    name: "Mind Reader",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "User's next attack is guaranteed to hit.",
    wiki: "http://www.serebii.net/attackdex-sm/mindreader.shtml"
};

var nightmare = {
    name: "Nightmare",
    type: "Ghost",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "The sleeping opponent loses 25% of its max HP each turn.",
    wiki: "http://www.serebii.net/attackdex-sm/nightmare.shtml"
};

var flame_wheel = {
    name: "Flame Wheel",
    type: "Fire",
    cat: "Physical",
    power: 60,
    pp: 25,
    acc: 100,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/flamewheel.shtml"
};

var snore = {
    name: "Snore",
    type: "Normal",
    cat: "Special",
    power: 50,
    pp: 15,
    acc: 100,
    effect: "Can only be used if asleep. May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/snore.shtml"
};

var curse = {
    name: "Curse",
    type: "Ghost",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Ghosts lose 50% of max HP and curse the opponent; Non-Ghosts raise Attack, Defense and lower Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/curse.shtml"
};

var flail = {
    name: "Flail",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "The lower the user's HP, the higher the power.",
    wiki: "http://www.serebii.net/attackdex-sm/flail.shtml"
};

var conversion_2 = {
    name: "Conversion 2",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: 100,
    effect: "User changes type to become resistant to opponent's last move.",
    wiki: "http://www.serebii.net/attackdex-sm/conversion2.shtml"
};

var aeroblast = {
    name: "Aeroblast",
    type: "Flying",
    cat: "Special",
    power: 100,
    pp: 5,
    acc: 95,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-sm/aeroblast.shtml"
};

var cotton_spore = {
    name: "Cotton Spore",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: 100,
    effect: "Sharply lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/cottonspore.shtml"
};

var reversal = {
    name: "Reversal",
    type: "Fighting",
    cat: "Physical",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "The lower the user's HP, the higher the power.",
    wiki: "http://www.serebii.net/attackdex-sm/reversal.shtml"
};

var spite = {
    name: "Spite",
    type: "Ghost",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "The opponent's last move loses 2-5 PP.",
    wiki: "http://www.serebii.net/attackdex-sm/spite.shtml"
};

var powder_snow = {
    name: "Powder Snow",
    type: "Ice",
    cat: "Special",
    power: 40,
    pp: 25,
    acc: 100,
    effect: "May freeze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/powdersnow.shtml"
};

var protect = {
    name: "Protect",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User is not affected by opponent's move.",
    wiki: "http://www.serebii.net/attackdex-sm/protect.shtml"
};

var mach_punch = {
    name: "Mach Punch",
    type: "Fighting",
    cat: "Physical",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "User attacks first.",
    wiki: "http://www.serebii.net/attackdex-sm/machpunch.shtml"
};

var scary_face = {
    name: "Scary Face",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Sharply lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/scaryface.shtml"
};

var feint_attack = {
    name: "Feint Attack",
    type: "Dark",
    cat: "Physical",
    power: 60,
    pp: 20,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-sm/feintattack.shtml"
};

var sweet_kiss = {
    name: "Sweet Kiss",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 75,
    effect: "Confuses opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/sweetkiss.shtml"
};

var belly_drum = {
    name: "Belly Drum",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User loses 50% of its max HP, but Attack raises to maximum.",
    wiki: "http://www.serebii.net/attackdex-sm/bellydrum.shtml"
};

var sludge_bomb = {
    name: "Sludge Bomb",
    type: "Poison",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "May poison opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/sludgebomb.shtml"
};

var mud_slap = {
    name: "Mud_slap",
    type: "Ground",
    cat: "Special",
    power: 20,
    pp: 10,
    acc: 100,
    effect: "Lowers opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-sm/mud_slap.shtml"
};

var octazooka = {
    name: "Octazooka",
    type: "Water",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 85,
    effect: "May lower opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-sm/octazooka.shtml"
};

var spikes = {
    name: "Spikes",
    type: "Ground",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Hurts opponents when they switch into battle.",
    wiki: "http://www.serebii.net/attackdex-sm/spikes.shtml"
};

var zap_cannon = {
    name: "Zap Cannon",
    type: "Electric",
    cat: "Special",
    power: 120,
    pp: 5,
    acc: 50,
    effect: "Paralyzes opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/zapcannon.shtml"
};

var foresight = {
    name: "Foresight",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: 100,
    effect: "Resets opponent's Evasiveness, Normal-type and Fighting-type attacks can now hit Ghosts, and Ghost-type attacks hit Normal.",
    wiki: "http://www.serebii.net/attackdex-sm/foresight.shtml"
};

var destiny_bond = {
    name: "Destiny Bond",
    type: "Ghost",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "If the user faints, the opponent also faints.",
    wiki: "http://www.serebii.net/attackdex-sm/destinybond.shtml"
};

var perish_song = {
    name: "Perish Song",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Any Pokémon in play when this attack is used faints in 3 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/perishsong.shtml"
};

var icy_wind = {
    name: "Icy Wind",
    type: "Ice",
    cat: "Special",
    power: 55,
    pp: 15,
    acc: 95,
    effect: "Lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/icywind.shtml"
};

var detect = {
    name: "Detect",
    type: "Fighting",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Opponent's attack doesn't affect you, but may fail if used often.",
    wiki: "http://www.serebii.net/attackdex-sm/detect.shtml"
};

var bone_rush = {
    name: "Bone Rush",
    type: "Ground",
    cat: "Physical",
    power: 25,
    pp: 10,
    acc: 90,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/bonerush.shtml"
};

var lock_on = {
    name: "Lock_on",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "User's next attack is guaranteed to hit.",
    wiki: "http://www.serebii.net/attackdex-sm/lock_on.shtml"
};

var outrage = {
    name: "Outrage",
    type: "Dragon",
    cat: "Physical",
    power: 120,
    pp: 10,
    acc: 100,
    effect: "User attacks for 2-3 turns but then becomes confused.",
    wiki: "http://www.serebii.net/attackdex-sm/outrage.shtml"
};

var sandstorm = {
    name: "Sandstorm",
    type: "Rock",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Creates a sandstorm for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/sandstorm.shtml"
};

var giga_drain = {
    name: "Giga Drain",
    type: "Grass",
    cat: "Special",
    power: 75,
    pp: 10,
    acc: 100,
    effect: "User recovers half the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/gigadrain.shtml"
};

var endure = {
    name: "Endure",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Always left with at least 1 HP, but may fail if used consecutively.",
    wiki: "http://www.serebii.net/attackdex-sm/endure.shtml"
};

var charm = {
    name: "Charm",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Sharply lowers opponent's Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/charm.shtml"
};

var rollout = {
    name: "Rollout",
    type: "Rock",
    cat: "Physical",
    power: 30,
    pp: 20,
    acc: 90,
    effect: "Doubles in power each turn for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/rollout.shtml"
};

var false_swipe = {
    name: "False Swipe",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 40,
    acc: 100,
    effect: "Always leaves opponent with at least 1 HP.",
    wiki: "http://www.serebii.net/attackdex-sm/falseswipe.shtml"
};

var swagger = {
    name: "Swagger",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 90,
    effect: "Opponent becomes confused, but its Attack is raised two stages.",
    wiki: "http://www.serebii.net/attackdex-sm/swagger.shtml"
};

var milk_drink = {
    name: "Milk Drink",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User recovers half its max HP.",
    wiki: "http://www.serebii.net/attackdex-sm/milkdrink.shtml"
};

var spark = {
    name: "Spark",
    type: "Electric",
    cat: "Physical",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/spark.shtml"
};

var fury_cutter = {
    name: "Fury Cutter",
    type: "Bug",
    cat: "Physical",
    power: 40,
    pp: 20,
    acc: 95,
    effect: "Power increases each turn.",
    wiki: "http://www.serebii.net/attackdex-sm/furycutter.shtml"
};

var steel_wing = {
    name: "Steel Wing",
    type: "Steel",
    cat: "Physical",
    power: 70,
    pp: 25,
    acc: 90,
    effect: "May raise user's Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/steelwing.shtml"
};

var mean_look = {
    name: "Mean Look",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "Opponent cannot flee or switch.",
    wiki: "http://www.serebii.net/attackdex-sm/meanlook.shtml"
};

var attract = {
    name: "Attract",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "If opponent is the opposite gender, it's less likely to attack.",
    wiki: "http://www.serebii.net/attackdex-sm/attract.shtml"
};

var sleep_talk = {
    name: "Sleep Talk",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User performs one of its own moves while sleeping.",
    wiki: "http://www.serebii.net/attackdex-sm/sleeptalk.shtml"
};

var heal_bell = {
    name: "Heal Bell",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Heals the user's party's status conditions.",
    wiki: "http://www.serebii.net/attackdex-sm/healbell.shtml"
};

var _return = {
    name: "Return",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Power increases with user's Happiness.",
    wiki: "http://www.serebii.net/attackdex-sm/return.shtml"
};

var present = {
    name: "Present",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 15,
    acc: 90,
    effect: "Either deals damage or heals.",
    wiki: "http://www.serebii.net/attackdex-sm/present.shtml"
};

var frustration = {
    name: "Frustration",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Power decreases with higher Happiness.",
    wiki: "http://www.serebii.net/attackdex-sm/frustration.shtml"
};

var safeguard = {
    name: "Safeguard",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 25,
    acc: -1,
    effect: "The user's party is protected from status conditions.",
    wiki: "http://www.serebii.net/attackdex-sm/safeguard.shtml"
};

var pain_split = {
    name: "Pain Split",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "The user's and opponent's HP becomes the average of both.",
    wiki: "http://www.serebii.net/attackdex-sm/painsplit.shtml"
};

var sacred_fire = {
    name: "Sacred Fire",
    type: "Fire",
    cat: "Physical",
    power: 100,
    pp: 5,
    acc: 95,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/sacredfire.shtml"
};

var magnitude = {
    name: "Magnitude",
    type: "Ground",
    cat: "Physical",
    power: -1,
    pp: 30,
    acc: 100,
    effect: "Hits with random power.",
    wiki: "http://www.serebii.net/attackdex-sm/magnitude.shtml"
};

var dynamic_punch = {
    name: "Dynamic Punch",
    type: "Fighting",
    cat: "Physical",
    power: 100,
    pp: 5,
    acc: 50,
    effect: "Confuses opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/dynamicpunch.shtml"
};

var megahorn = {
    name: "Megahorn",
    type: "Bug",
    cat: "Physical",
    power: 120,
    pp: 10,
    acc: 85,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/megahorn.shtml"
};

var dragon_breath = {
    name: "Dragon Breath",
    type: "Dragon",
    cat: "Special",
    power: 60,
    pp: 20,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/dragonbreath.shtml"
};

var baton_pass = {
    name: "Baton Pass",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "User switches out and gives stat changes to the incoming Pokémon.",
    wiki: "http://www.serebii.net/attackdex-sm/batonpass.shtml"
};

var encore = {
    name: "Encore",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "Forces opponent to keep using its last move for 3 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/encore.shtml"
};

var pursuit = {
    name: "Pursuit",
    type: "Dark",
    cat: "Physical",
    power: 40,
    pp: 20,
    acc: 100,
    effect: "Double power if the opponent is switching out.",
    wiki: "http://www.serebii.net/attackdex-sm/pursuit.shtml"
};

var rapid_spin = {
    name: "Rapid Spin",
    type: "Normal",
    cat: "Physical",
    power: 20,
    pp: 40,
    acc: 100,
    effect: "Removes effects of trap moves.",
    wiki: "http://www.serebii.net/attackdex-sm/rapidspin.shtml"
};

var sweet_scent = {
    name: "Sweet Scent",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Lowers opponent's Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-sm/sweetscent.shtml"
};

var iron_tail = {
    name: "Iron Tail",
    type: "Steel",
    cat: "Physical",
    power: 100,
    pp: 15,
    acc: 75,
    effect: "May lower opponent's Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/irontail.shtml"
};

var metal_claw = {
    name: "Metal Claw",
    type: "Steel",
    cat: "Physical",
    power: 50,
    pp: 35,
    acc: 95,
    effect: "May raise user's Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/metalclaw.shtml"
};

var vital_throw = {
    name: "Vital Throw",
    type: "Fighting",
    cat: "Physical",
    power: 70,
    pp: 10,
    acc: -1,
    effect: "User attacks last, but ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-sm/vitalthrow.shtml"
};

var morning_sun = {
    name: "Morning Sun",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "User recovers HP. Amount varies with the weather.",
    wiki: "http://www.serebii.net/attackdex-sm/morningsun.shtml"
};

var synthesis = {
    name: "Synthesis",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "User recovers HP. Amount varies with the weather.",
    wiki: "http://www.serebii.net/attackdex-sm/synthesis.shtml"
};

var moonlight = {
    name: "Moonlight",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "User recovers HP. Amount varies with the weather.",
    wiki: "http://www.serebii.net/attackdex-sm/moonlight.shtml"
};

var hidden_power = {
    name: "Hidden Power",
    type: "Normal",
    cat: "Special",
    power: 60,
    pp: 15,
    acc: 100,
    effect: "Type and power depends on user's IVs.",
    wiki: "http://www.serebii.net/attackdex-sm/hiddenpower.shtml"
};

var cross_chop = {
    name: "Cross Chop",
    type: "Fighting",
    cat: "Physical",
    power: 100,
    pp: 5,
    acc: 80,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-sm/crosschop.shtml"
};

var twister = {
    name: "Twister",
    type: "Dragon",
    cat: "Special",
    power: 40,
    pp: 20,
    acc: 100,
    effect: "May cause flinching. Hits Pokémon using Fly/Bounce with double power.",
    wiki: "http://www.serebii.net/attackdex-sm/twister.shtml"
};

var rain_dance = {
    name: "Rain Dance",
    type: "Water",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Makes it rain for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/raindance.shtml"
};

var sunny_day = {
    name: "Sunny Day",
    type: "Fire",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Makes it sunny for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/sunnyday.shtml"
};

var crunch = {
    name: "Crunch",
    type: "Dark",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "May lower opponent's Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/crunch.shtml"
};

var mirror_coat = {
    name: "Mirror Coat",
    type: "Psychic",
    cat: "Special",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "When hit by a Special Attack, user strikes back with 2x power.",
    wiki: "http://www.serebii.net/attackdex-sm/mirrorcoat.shtml"
};

var psych_up = {
    name: "Psych Up",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Copies the opponent's stat changes.",
    wiki: "http://www.serebii.net/attackdex-sm/psychup.shtml"
};

var extreme_speed = {
    name: "Extreme Speed",
    type: "Normal",
    cat: "Physical",
    power: 80,
    pp: 5,
    acc: 100,
    effect: "User attacks first.",
    wiki: "http://www.serebii.net/attackdex-sm/extremespeed.shtml"
};

var ancient_power = {
    name: "Ancient Power",
    type: "Rock",
    cat: "Special",
    power: 60,
    pp: 5,
    acc: 100,
    effect: "May raise all user's stats at once.",
    wiki: "http://www.serebii.net/attackdex-sm/ancientpower.shtml"
};

var shadow_ball = {
    name: "Shadow Ball",
    type: "Ghost",
    cat: "Special",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/shadowball.shtml"
};

var future_sight = {
    name: "Future Sight",
    type: "Psychic",
    cat: "Special",
    power: 120,
    pp: 10,
    acc: 100,
    effect: "Damage occurs 2 turns later.",
    wiki: "http://www.serebii.net/attackdex-sm/futuresight.shtml"
};

var rock_smash = {
    name: "Rock Smash",
    type: "Fighting",
    cat: "Physical",
    power: 40,
    pp: 15,
    acc: 100,
    effect: "May lower opponent's Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/rocksmash.shtml"
};

var whirlpool = {
    name: "Whirlpool",
    type: "Water",
    cat: "Special",
    power: 35,
    pp: 15,
    acc: 85,
    effect: "Traps opponent, damaging them for 4-5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/whirlpool.shtml"
};

var beat_up = {
    name: "Beat Up",
    type: "Dark",
    cat: "Physical",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Each Pokémon in your party attacks.",
    wiki: "http://www.serebii.net/attackdex-sm/beatup.shtml"
};

var fake_out = {
    name: "Fake Out",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 10,
    acc: 100,
    effect: "User attacks first, foe flinches. Only usable on first turn.",
    wiki: "http://www.serebii.net/attackdex-sm/fakeout.shtml"
};

var uproar = {
    name: "Uproar",
    type: "Normal",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "User attacks for 3 turns and prevents sleep.",
    wiki: "http://www.serebii.net/attackdex-sm/uproar.shtml"
};

var stockpile = {
    name: "Stockpile",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Stores energy for use with Spit Up and Swallow.",
    wiki: "http://www.serebii.net/attackdex-sm/stockpile.shtml"
};

var spit_up = {
    name: "Spit Up",
    type: "Normal",
    cat: "Special",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Power depends on how many times the user performed Stockpile.",
    wiki: "http://www.serebii.net/attackdex-sm/spitup.shtml"
};

var swallow = {
    name: "Swallow",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "The more times the user has performed Stockpile, the more HP is recovered.",
    wiki: "http://www.serebii.net/attackdex-sm/swallow.shtml"
};

var heat_wave = {
    name: "Heat Wave",
    type: "Fire",
    cat: "Special",
    power: 95,
    pp: 10,
    acc: 90,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/heatwave.shtml"
};

var hail = {
    name: "Hail",
    type: "Ice",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Non-Ice types are damaged for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/hail.shtml"
};

var torment = {
    name: "Torment",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Opponent cannot use the same move in a row.",
    wiki: "http://www.serebii.net/attackdex-sm/torment.shtml"
};

var flatter = {
    name: "Flatter",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Confuses opponent, but raises its Special Attack by two stages.",
    wiki: "http://www.serebii.net/attackdex-sm/flatter.shtml"
};

var will_o_wisp = {
    name: "Will_o_wisp",
    type: "Fire",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 85,
    effect: "Burns opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/will_o_wisp.shtml"
};

var memento = {
    name: "Memento",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "User faints, sharply lowers opponent's Attack and Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/memento.shtml"
};

var facade = {
    name: "Facade",
    type: "Normal",
    cat: "Physical",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "Power doubles if user is burned, poisoned, or paralyzed.",
    wiki: "http://www.serebii.net/attackdex-sm/facade.shtml"
};

var focus_punch = {
    name: "Focus Punch",
    type: "Fighting",
    cat: "Physical",
    power: 150,
    pp: 20,
    acc: 100,
    effect: "If the user is hit before attacking, it flinches instead.",
    wiki: "http://www.serebii.net/attackdex-sm/focuspunch.shtml"
};

var smelling_salts = {
    name: "Smelling Salts",
    type: "Normal",
    cat: "Physical",
    power: 70,
    pp: 10,
    acc: 100,
    effect: "Power doubles if opponent is paralyzed, but cures it.",
    wiki: "http://www.serebii.net/attackdex-sm/smellingsalts.shtml"
};

var follow_me = {
    name: "Follow Me",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "In Double Battle, the user takes all the attacks.",
    wiki: "http://www.serebii.net/attackdex-sm/followme.shtml"
};

var nature_power = {
    name: "Nature Power",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Uses a certain move based on the current terrain.",
    wiki: "http://www.serebii.net/attackdex-sm/naturepower.shtml"
};

var charge = {
    name: "Charge",
    type: "Electric",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises user's Special Defense and next Electric move's power increases.",
    wiki: "http://www.serebii.net/attackdex-sm/charge.shtml"
};

var taunt = {
    name: "Taunt",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Opponent can only use moves that attack.",
    wiki: "http://www.serebii.net/attackdex-sm/taunt.shtml"
};

var helping_hand = {
    name: "Helping Hand",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "In Double Battles, boosts the power of the partner's move.",
    wiki: "http://www.serebii.net/attackdex-sm/helpinghand.shtml"
};

var trick = {
    name: "Trick",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Swaps held items with the opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/trick.shtml"
};

var role_play = {
    name: "Role Play",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User copies the opponent's Ability.",
    wiki: "http://www.serebii.net/attackdex-sm/roleplay.shtml"
};

var wish = {
    name: "Wish",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "The user recovers HP in the following turn.",
    wiki: "http://www.serebii.net/attackdex-sm/wish.shtml"
};

var assist = {
    name: "Assist",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "In a Double Battle, user randomly attacks with a partner's move.",
    wiki: "http://www.serebii.net/attackdex-sm/assist.shtml"
};

var ingrain = {
    name: "Ingrain",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "User restores HP each turn. User cannot escape/switch.",
    wiki: "http://www.serebii.net/attackdex-sm/ingrain.shtml"
};

var superpower = {
    name: "Superpower",
    type: "Fighting",
    cat: "Physical",
    power: 120,
    pp: 5,
    acc: 100,
    effect: "Lowers user's Attack and Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/superpower.shtml"
};

var magic_coat = {
    name: "Magic Coat",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Reflects moves that cause status conditions back to the attacker.",
    wiki: "http://www.serebii.net/attackdex-sm/magiccoat.shtml"
};

var recycle = {
    name: "Recycle",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "User's used hold item is restored.",
    wiki: "http://www.serebii.net/attackdex-sm/recycle.shtml"
};

var revenge = {
    name: "Revenge",
    type: "Fighting",
    cat: "Physical",
    power: 60,
    pp: 10,
    acc: 100,
    effect: "Power increases if user was hit first.",
    wiki: "http://www.serebii.net/attackdex-sm/revenge.shtml"
};

var brick_break = {
    name: "Brick Break",
    type: "Fighting",
    cat: "Physical",
    power: 75,
    pp: 15,
    acc: 100,
    effect: "Breaks through Reflect and Light Screen barriers.",
    wiki: "http://www.serebii.net/attackdex-sm/brickbreak.shtml"
};

var yawn = {
    name: "Yawn",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Puts opponent to sleep in the next turn.",
    wiki: "http://www.serebii.net/attackdex-sm/yawn.shtml"
};

var knock_off = {
    name: "Knock Off",
    type: "Dark",
    cat: "Physical",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "Removes opponent's held item for the rest of the battle.",
    wiki: "http://www.serebii.net/attackdex-sm/knockoff.shtml"
};

var endeavor = {
    name: "Endeavor",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "Reduces opponent's HP to same as user's.",
    wiki: "http://www.serebii.net/attackdex-sm/endeavor.shtml"
};

var eruption = {
    name: "Eruption",
    type: "Fire",
    cat: "Special",
    power: 150,
    pp: 5,
    acc: 100,
    effect: "Stronger when the user's HP is higher.",
    wiki: "http://www.serebii.net/attackdex-sm/eruption.shtml"
};

var skill_swap = {
    name: "Skill Swap",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "The user swaps Abilities with the opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/skillswap.shtml"
};

var imprison = {
    name: "Imprison",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Opponent is unable to use moves that the user also knows.",
    wiki: "http://www.serebii.net/attackdex-sm/imprison.shtml"
};

var refresh = {
    name: "Refresh",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Cures paralysis, poison, and burns.",
    wiki: "http://www.serebii.net/attackdex-sm/refresh.shtml"
};

var grudge = {
    name: "Grudge",
    type: "Ghost",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "If the users faints after using this move, the PP for the opponent's last move is depleted.",
    wiki: "http://www.serebii.net/attackdex-sm/grudge.shtml"
};

var snatch = {
    name: "Snatch",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Steals the effects of the opponent's next move.",
    wiki: "http://www.serebii.net/attackdex-sm/snatch.shtml"
};

var secret_power = {
    name: "Secret Power",
    type: "Normal",
    cat: "Physical",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "Effects of the attack vary with the location.",
    wiki: "http://www.serebii.net/attackdex-sm/secretpower.shtml"
};

var dive = {
    name: "Dive",
    type: "Water",
    cat: "Physical",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "Dives underwater on first turn, attacks on second turn.",
    wiki: "http://www.serebii.net/attackdex-sm/dive.shtml"
};

var arm_thrust = {
    name: "Arm Thrust",
    type: "Fighting",
    cat: "Physical",
    power: 15,
    pp: 20,
    acc: 100,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/armthrust.shtml"
};

var camouflage = {
    name: "Camouflage",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Changes user's type according to the location.",
    wiki: "http://www.serebii.net/attackdex-sm/camouflage.shtml"
};

var tail_glow = {
    name: "Tail Glow",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Drastically raises user's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/tailglow.shtml"
};

var luster_purge = {
    name: "Luster Purge",
    type: "Psychic",
    cat: "Special",
    power: 70,
    pp: 5,
    acc: 100,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/lusterpurge.shtml"
};

var mist_ball = {
    name: "Mist Ball",
    type: "Psychic",
    cat: "Special",
    power: 70,
    pp: 5,
    acc: 100,
    effect: "May lower opponent's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/mistball.shtml"
};

var feather_dance = {
    name: "Feather Dance",
    type: "Flying",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Sharply lowers opponent's Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/featherdance.shtml"
};

var teeter_dance = {
    name: "Teeter Dance",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Confuses all Pokémon.",
    wiki: "http://www.serebii.net/attackdex-sm/teeterdance.shtml"
};

var blaze_kick = {
    name: "Blaze Kick",
    type: "Fire",
    cat: "Physical",
    power: 85,
    pp: 10,
    acc: 90,
    effect: "High critical hit ratio. May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/blazekick.shtml"
};

var mud_sport = {
    name: "Mud Sport",
    type: "Ground",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Weakens the power of Electric-type moves.",
    wiki: "http://www.serebii.net/attackdex-sm/mudsport.shtml"
};

var ice_ball = {
    name: "Ice Ball",
    type: "Ice",
    cat: "Physical",
    power: 30,
    pp: 20,
    acc: 90,
    effect: "Doubles in power each turn for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/iceball.shtml"
};

var needle_arm = {
    name: "Needle Arm",
    type: "Grass",
    cat: "Physical",
    power: 60,
    pp: 15,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/needlearm.shtml"
};

var slack_off = {
    name: "Slack Off",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User recovers half its max HP.",
    wiki: "http://www.serebii.net/attackdex-sm/slackoff.shtml"
};

var hyper_voice = {
    name: "Hyper Voice",
    type: "Normal",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/hypervoice.shtml"
};

var poison_fang = {
    name: "Poison Fang",
    type: "Poison",
    cat: "Physical",
    power: 50,
    pp: 15,
    acc: 100,
    effect: "May badly poison opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/poisonfang.shtml"
};

var crush_claw = {
    name: "Crush Claw",
    type: "Normal",
    cat: "Physical",
    power: 75,
    pp: 10,
    acc: 95,
    effect: "May lower opponent's Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/crushclaw.shtml"
};

var blast_burn = {
    name: "Blast Burn",
    type: "Fire",
    cat: "Special",
    power: 150,
    pp: 5,
    acc: 90,
    effect: "User must recharge next turn.",
    wiki: "http://www.serebii.net/attackdex-sm/blastburn.shtml"
};

var hydro_cannon = {
    name: "Hydro Cannon",
    type: "Water",
    cat: "Special",
    power: 150,
    pp: 5,
    acc: 90,
    effect: "User must recharge next turn.",
    wiki: "http://www.serebii.net/attackdex-sm/hydrocannon.shtml"
};

var meteor_mash = {
    name: "Meteor Mash",
    type: "Steel",
    cat: "Physical",
    power: 90,
    pp: 10,
    acc: 90,
    effect: "May raise user's Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/meteormash.shtml"
};

var astonish = {
    name: "Astonish",
    type: "Ghost",
    cat: "Physical",
    power: 30,
    pp: 15,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/astonish.shtml"
};

var weather_ball = {
    name: "Weather Ball",
    type: "Normal",
    cat: "Special",
    power: 50,
    pp: 10,
    acc: 100,
    effect: "Move's power and type changes with the weather.",
    wiki: "http://www.serebii.net/attackdex-sm/weatherball.shtml"
};

var aromatherapy = {
    name: "Aromatherapy",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Cures all status problems in your party.",
    wiki: "http://www.serebii.net/attackdex-sm/aromatherapy.shtml"
};

var fake_tears = {
    name: "Fake Tears",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Sharply lowers opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/faketears.shtml"
};

var air_cutter = {
    name: "Air Cutter",
    type: "Flying",
    cat: "Special",
    power: 60,
    pp: 25,
    acc: 95,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-sm/aircutter.shtml"
};

var overheat = {
    name: "Overheat",
    type: "Fire",
    cat: "Special",
    power: 130,
    pp: 5,
    acc: 90,
    effect: "Sharply lowers user's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/overheat.shtml"
};

var odor_sleuth = {
    name: "Odor Sleuth",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: 100,
    effect: "Resets opponent's Evasiveness, Normal-type and Fighting-type attacks can now hit Ghosts, and Ghost-type attacks hit Normal.",
    wiki: "http://www.serebii.net/attackdex-sm/odorsleuth.shtml"
};

var rock_tomb = {
    name: "Rock Tomb",
    type: "Rock",
    cat: "Physical",
    power: 60,
    pp: 15,
    acc: 95,
    effect: "Lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/rocktomb.shtml"
};

var silver_wind = {
    name: "Silver Wind",
    type: "Bug",
    cat: "Special",
    power: 60,
    pp: 5,
    acc: 100,
    effect: "May raise all stats of user at once.",
    wiki: "http://www.serebii.net/attackdex-sm/silverwind.shtml"
};

var metal_sound = {
    name: "Metal Sound",
    type: "Steel",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: 85,
    effect: "Sharply lowers opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/metalsound.shtml"
};

var grass_whistle = {
    name: "Grass Whistle",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 55,
    effect: "Puts opponent to sleep.",
    wiki: "http://www.serebii.net/attackdex-sm/grasswhistle.shtml"
};

var tickle = {
    name: "Tickle",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Lowers opponent's Attack and Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/tickle.shtml"
};

var cosmic_power = {
    name: "Cosmic Power",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises user's Defense and Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/cosmicpower.shtml"
};

var water_spout = {
    name: "Water Spout",
    type: "Water",
    cat: "Special",
    power: 150,
    pp: 5,
    acc: 100,
    effect: "The higher the user's HP, the higher the damage caused.",
    wiki: "http://www.serebii.net/attackdex-sm/waterspout.shtml"
};

var signal_beam = {
    name: "Signal Beam",
    type: "Bug",
    cat: "Special",
    power: 75,
    pp: 15,
    acc: 100,
    effect: "May confuse opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/signalbeam.shtml"
};

var shadow_punch = {
    name: "Shadow Punch",
    type: "Ghost",
    cat: "Physical",
    power: 60,
    pp: 20,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-sm/shadowpunch.shtml"
};

var extrasensory = {
    name: "Extrasensory",
    type: "Psychic",
    cat: "Special",
    power: 80,
    pp: 20,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/extrasensory.shtml"
};

var sky_uppercut = {
    name: "Sky Uppercut",
    type: "Fighting",
    cat: "Physical",
    power: 85,
    pp: 15,
    acc: 90,
    effect: "Hits the opponent, even during Fly.",
    wiki: "http://www.serebii.net/attackdex-sm/skyuppercut.shtml"
};

var sand_tomb = {
    name: "Sand Tomb",
    type: "Ground",
    cat: "Physical",
    power: 35,
    pp: 15,
    acc: 85,
    effect: "Traps opponent, damaging them for 4-5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/sandtomb.shtml"
};

var sheer_cold = {
    name: "Sheer Cold",
    type: "Ice",
    cat: "Special",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "One-Hit-KO, if it hits.",
    wiki: "http://www.serebii.net/attackdex-sm/sheercold.shtml"
};

var muddy_water = {
    name: "Muddy Water",
    type: "Water",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 85,
    effect: "May lower opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-sm/muddywater.shtml"
};

var bullet_seed = {
    name: "Bullet Seed",
    type: "Grass",
    cat: "Physical",
    power: 25,
    pp: 30,
    acc: 100,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/bulletseed.shtml"
};

var aerial_ace = {
    name: "Aerial Ace",
    type: "Flying",
    cat: "Physical",
    power: 60,
    pp: 20,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-sm/aerialace.shtml"
};

var icicle_spear = {
    name: "Icicle Spear",
    type: "Ice",
    cat: "Physical",
    power: 25,
    pp: 30,
    acc: 100,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/iciclespear.shtml"
};

var iron_defense = {
    name: "Iron Defense",
    type: "Steel",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Sharply raises user's Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/irondefense.shtml"
};

var block = {
    name: "Block",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Opponent cannot flee or switch.",
    wiki: "http://www.serebii.net/attackdex-sm/block.shtml"
};

var howl = {
    name: "Howl",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "Raises user's Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/howl.shtml"
};

var dragon_claw = {
    name: "Dragon Claw",
    type: "Dragon",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/dragonclaw.shtml"
};

var frenzy_plant = {
    name: "Frenzy Plant",
    type: "Grass",
    cat: "Special",
    power: 150,
    pp: 5,
    acc: 90,
    effect: "User must recharge next turn.",
    wiki: "http://www.serebii.net/attackdex-sm/frenzyplant.shtml"
};

var bulk_up = {
    name: "Bulk Up",
    type: "Fighting",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises user's Attack and Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/bulkup.shtml"
};

var bounce = {
    name: "Bounce",
    type: "Flying",
    cat: "Physical",
    power: 85,
    pp: 5,
    acc: 85,
    effect: "Springs up on first turn, attacks on second. May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/bounce.shtml"
};

var mud_shot = {
    name: "Mud Shot",
    type: "Ground",
    cat: "Special",
    power: 55,
    pp: 15,
    acc: 95,
    effect: "Lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/mudshot.shtml"
};

var poison_tail = {
    name: "Poison Tail",
    type: "Poison",
    cat: "Physical",
    power: 50,
    pp: 25,
    acc: 100,
    effect: "High critical hit ratio. May poison opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/poisontail.shtml"
};

var covet = {
    name: "Covet",
    type: "Normal",
    cat: "Physical",
    power: 60,
    pp: 25,
    acc: 100,
    effect: "Opponent's item is stolen by the user.",
    wiki: "http://www.serebii.net/attackdex-sm/covet.shtml"
};

var volt_tackle = {
    name: "Volt Tackle",
    type: "Electric",
    cat: "Physical",
    power: 120,
    pp: 15,
    acc: 100,
    effect: "User receives recoil damage. May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/volttackle.shtml"
};

var magical_leaf = {
    name: "Magical Leaf",
    type: "Grass",
    cat: "Special",
    power: 60,
    pp: 20,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-sm/magicalleaf.shtml"
};

var water_sport = {
    name: "Water Sport",
    type: "Water",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Weakens the power of Fire-type moves.",
    wiki: "http://www.serebii.net/attackdex-sm/watersport.shtml"
};

var calm_mind = {
    name: "Calm Mind",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises user's Special Attack and Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/calmmind.shtml"
};

var leaf_blade = {
    name: "Leaf Blade",
    type: "Grass",
    cat: "Physical",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-sm/leafblade.shtml"
};

var dragon_dance = {
    name: "Dragon Dance",
    type: "Dragon",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises user's Attack and Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/dragondance.shtml"
};

var rock_blast = {
    name: "Rock Blast",
    type: "Rock",
    cat: "Physical",
    power: 25,
    pp: 10,
    acc: 90,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/rockblast.shtml"
};

var shock_wave = {
    name: "Shock Wave",
    type: "Electric",
    cat: "Special",
    power: 60,
    pp: 20,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-sm/shockwave.shtml"
};

var water_pulse = {
    name: "Water Pulse",
    type: "Water",
    cat: "Special",
    power: 60,
    pp: 20,
    acc: 100,
    effect: "May confuse opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/waterpulse.shtml"
};

var doom_desire = {
    name: "Doom Desire",
    type: "Steel",
    cat: "Special",
    power: 140,
    pp: 5,
    acc: 100,
    effect: "Damage occurs 2 turns later.",
    wiki: "http://www.serebii.net/attackdex-sm/doomdesire.shtml"
};

var psycho_boost = {
    name: "Psycho Boost",
    type: "Psychic",
    cat: "Special",
    power: 140,
    pp: 5,
    acc: 90,
    effect: "Sharply lowers user's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/psychoboost.shtml"
};

var roost = {
    name: "Roost",
    type: "Flying",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User recovers half of its max HP and loses the Flying type temporarily.",
    wiki: "http://www.serebii.net/attackdex-sm/roost.shtml"
};

var gravity = {
    name: "Gravity",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Prevents moves like Fly and Bounce and the Ability Levitate for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/gravity.shtml"
};

var miracle_eye = {
    name: "Miracle Eye",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "Resets opponent's Evasiveness, removes Dark's Psychic immunity.",
    wiki: "http://www.serebii.net/attackdex-sm/miracleeye.shtml"
};

var wake_up_slap = {
    name: "Wake_up Slap",
    type: "Fighting",
    cat: "Physical",
    power: 70,
    pp: 10,
    acc: 100,
    effect: "Power doubles if opponent is asleep, but wakes it up.",
    wiki: "http://www.serebii.net/attackdex-sm/wake_upslap.shtml"
};

var hammer_arm = {
    name: "Hammer Arm",
    type: "Fighting",
    cat: "Physical",
    power: 100,
    pp: 10,
    acc: 90,
    effect: "Lowers user's Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/hammerarm.shtml"
};

var gyro_ball = {
    name: "Gyro Ball",
    type: "Steel",
    cat: "Physical",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "The slower the user, the stronger the attack.",
    wiki: "http://www.serebii.net/attackdex-sm/gyroball.shtml"
};

var healing_wish = {
    name: "Healing Wish",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "The user faints and the next Pokémon released is fully healed.",
    wiki: "http://www.serebii.net/attackdex-sm/healingwish.shtml"
};

var brine = {
    name: "Brine",
    type: "Water",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 100,
    effect: "Power doubles if opponent's HP is less than 50%.",
    wiki: "http://www.serebii.net/attackdex-sm/brine.shtml"
};

var natural_gift = {
    name: "Natural Gift",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Power and type depend on the user's held berry.",
    wiki: "http://www.serebii.net/attackdex-sm/naturalgift.shtml"
};

var feint = {
    name: "Feint",
    type: "Normal",
    cat: "Physical",
    power: 30,
    pp: 10,
    acc: 100,
    effect: "Only hits if opponent uses Protect or Detect in the same turn.",
    wiki: "http://www.serebii.net/attackdex-sm/feint.shtml"
};

var pluck = {
    name: "Pluck",
    type: "Flying",
    cat: "Physical",
    power: 60,
    pp: 20,
    acc: 100,
    effect: "If the opponent is holding a berry, its effect is stolen by user.",
    wiki: "http://www.serebii.net/attackdex-sm/pluck.shtml"
};

var tailwind = {
    name: "Tailwind",
    type: "Flying",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Doubles Speed for 4 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/tailwind.shtml"
};

var acupressure = {
    name: "Acupressure",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Sharply raises a random stat.",
    wiki: "http://www.serebii.net/attackdex-sm/acupressure.shtml"
};

var metal_burst = {
    name: "Metal Burst",
    type: "Steel",
    cat: "Physical",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Deals damage equal to 1.5x opponent's attack.",
    wiki: "http://www.serebii.net/attackdex-sm/metalburst.shtml"
};

var u_turn = {
    name: "U_turn",
    type: "Bug",
    cat: "Physical",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "User switches out immediately after attacking.",
    wiki: "http://www.serebii.net/attackdex-sm/u_turn.shtml"
};

var close_combat = {
    name: "Close Combat",
    type: "Fighting",
    cat: "Physical",
    power: 120,
    pp: 5,
    acc: 100,
    effect: "Lowers user's Defense and Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/closecombat.shtml"
};

var payback = {
    name: "Payback",
    type: "Dark",
    cat: "Physical",
    power: 50,
    pp: 10,
    acc: 100,
    effect: "Power doubles if the user was attacked first.",
    wiki: "http://www.serebii.net/attackdex-sm/payback.shtml"
};

var assurance = {
    name: "Assurance",
    type: "Dark",
    cat: "Physical",
    power: 60,
    pp: 10,
    acc: 100,
    effect: "Power doubles if opponent already took damage in the same turn.",
    wiki: "http://www.serebii.net/attackdex-sm/assurance.shtml"
};

var embargo = {
    name: "Embargo",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Opponent cannot use items.",
    wiki: "http://www.serebii.net/attackdex-sm/embargo.shtml"
};

var fling = {
    name: "Fling",
    type: "Dark",
    cat: "Physical",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Power depends on held item.",
    wiki: "http://www.serebii.net/attackdex-sm/fling.shtml"
};

var psycho_shift = {
    name: "Psycho Shift",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Gives the opponent the user's status condition, if it hits.",
    wiki: "http://www.serebii.net/attackdex-sm/psychoshift.shtml"
};

var trump_card = {
    name: "Trump Card",
    type: "Normal",
    cat: "Special",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "The lower the PP, the higher the power.",
    wiki: "http://www.serebii.net/attackdex-sm/trumpcard.shtml"
};

var heal_block = {
    name: "Heal Block",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Prevents the opponent from restoring HP for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/healblock.shtml"
};

var wring_out = {
    name: "Wring Out",
    type: "Normal",
    cat: "Special",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "The higher the opponent's HP, the higher the damage.",
    wiki: "http://www.serebii.net/attackdex-sm/wringout.shtml"
};

var power_trick = {
    name: "Power Trick",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User's own Attack and Defense switch.",
    wiki: "http://www.serebii.net/attackdex-sm/powertrick.shtml"
};

var gastro_acid = {
    name: "Gastro Acid",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Cancels out the effect of the opponent's Ability.",
    wiki: "http://www.serebii.net/attackdex-sm/gastroacid.shtml"
};

var lucky_chant = {
    name: "Lucky Chant",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Opponent cannot land critical hits for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/luckychant.shtml"
};

var me_first = {
    name: "Me First",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "User copies the opponent's attack with 1.5× power.",
    wiki: "http://www.serebii.net/attackdex-sm/mefirst.shtml"
};

var copycat = {
    name: "Copycat",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Copies opponent's last move.",
    wiki: "http://www.serebii.net/attackdex-sm/copycat.shtml"
};

var power_swap = {
    name: "Power Swap",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User and opponent swap Attack and Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/powerswap.shtml"
};

var guard_swap = {
    name: "Guard Swap",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User and opponent swap Defense and Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/guardswap.shtml"
};

var punishment = {
    name: "Punishment",
    type: "Dark",
    cat: "Physical",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "Power increases when opponent's stats have been raised.",
    wiki: "http://www.serebii.net/attackdex-sm/punishment.shtml"
};

var last_resort = {
    name: "Last Resort",
    type: "Normal",
    cat: "Physical",
    power: 140,
    pp: 5,
    acc: 100,
    effect: "Can only be used after all other moves are used.",
    wiki: "http://www.serebii.net/attackdex-sm/lastresort.shtml"
};

var worry_seed = {
    name: "Worry Seed",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Changes the opponent's Ability to Insomnia.",
    wiki: "http://www.serebii.net/attackdex-sm/worryseed.shtml"
};

var sucker_punch = {
    name: "Sucker Punch",
    type: "Dark",
    cat: "Physical",
    power: 80,
    pp: 5,
    acc: 100,
    effect: "User attacks first, but only works if opponent is readying an attack.",
    wiki: "http://www.serebii.net/attackdex-sm/suckerpunch.shtml"
};

var toxic_spikes = {
    name: "Toxic Spikes",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Poisons opponents when they switch into battle.",
    wiki: "http://www.serebii.net/attackdex-sm/toxicspikes.shtml"
};

var heart_swap = {
    name: "Heart Swap",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Stat changes are swapped with the opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/heartswap.shtml"
};

var aqua_ring = {
    name: "Aqua Ring",
    type: "Water",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Restores a little HP each turn.",
    wiki: "http://www.serebii.net/attackdex-sm/aquaring.shtml"
};

var magnet_rise = {
    name: "Magnet Rise",
    type: "Electric",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User becomes immune to Ground-type moves for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/magnetrise.shtml"
};

var flare_blitz = {
    name: "Flare Blitz",
    type: "Fire",
    cat: "Physical",
    power: 120,
    pp: 15,
    acc: 100,
    effect: "User receives recoil damage. May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/flareblitz.shtml"
};

var force_palm = {
    name: "Force Palm",
    type: "Fighting",
    cat: "Physical",
    power: 60,
    pp: 10,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/forcepalm.shtml"
};

var aura_sphere = {
    name: "Aura Sphere",
    type: "Fighting",
    cat: "Special",
    power: 80,
    pp: 20,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-sm/aurasphere.shtml"
};

var rock_polish = {
    name: "Rock Polish",
    type: "Rock",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Sharply raises user's Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/rockpolish.shtml"
};

var poison_jab = {
    name: "Poison Jab",
    type: "Poison",
    cat: "Physical",
    power: 80,
    pp: 20,
    acc: 100,
    effect: "May poison the opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/poisonjab.shtml"
};

var dark_pulse = {
    name: "Dark Pulse",
    type: "Dark",
    cat: "Special",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/darkpulse.shtml"
};

var night_slash = {
    name: "Night Slash",
    type: "Dark",
    cat: "Physical",
    power: 70,
    pp: 15,
    acc: 100,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-sm/nightslash.shtml"
};

var aqua_tail = {
    name: "Aqua Tail",
    type: "Water",
    cat: "Physical",
    power: 90,
    pp: 10,
    acc: 90,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/aquatail.shtml"
};

var seed_bomb = {
    name: "Seed Bomb",
    type: "Grass",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/seedbomb.shtml"
};

var air_slash = {
    name: "Air Slash",
    type: "Flying",
    cat: "Special",
    power: 75,
    pp: 15,
    acc: 95,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/airslash.shtml"
};

var x_scissor = {
    name: "X_scissor",
    type: "Bug",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/x_scissor.shtml"
};

var bug_buzz = {
    name: "Bug Buzz",
    type: "Bug",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/bugbuzz.shtml"
};

var dragon_pulse = {
    name: "Dragon Pulse",
    type: "Dragon",
    cat: "Special",
    power: 85,
    pp: 10,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/dragonpulse.shtml"
};

var dragon_rush = {
    name: "Dragon Rush",
    type: "Dragon",
    cat: "Physical",
    power: 100,
    pp: 10,
    acc: 75,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/dragonrush.shtml"
};

var power_gem = {
    name: "Power Gem",
    type: "Rock",
    cat: "Special",
    power: 80,
    pp: 20,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/powergem.shtml"
};

var drain_punch = {
    name: "Drain Punch",
    type: "Fighting",
    cat: "Physical",
    power: 75,
    pp: 10,
    acc: 100,
    effect: "User recovers half the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/drainpunch.shtml"
};

var vacuum_wave = {
    name: "Vacuum Wave",
    type: "Fighting",
    cat: "Special",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "User attacks first.",
    wiki: "http://www.serebii.net/attackdex-sm/vacuumwave.shtml"
};

var focus_blast = {
    name: "Focus Blast",
    type: "Fighting",
    cat: "Special",
    power: 120,
    pp: 5,
    acc: 70,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/focusblast.shtml"
};

var energy_ball = {
    name: "Energy Ball",
    type: "Grass",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/energyball.shtml"
};

var brave_bird = {
    name: "Brave Bird",
    type: "Flying",
    cat: "Physical",
    power: 120,
    pp: 15,
    acc: 100,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-sm/bravebird.shtml"
};

var earth_power = {
    name: "Earth Power",
    type: "Ground",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/earthpower.shtml"
};

var switcheroo = {
    name: "Switcheroo",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Swaps held items with the opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/switcheroo.shtml"
};

var giga_impact = {
    name: "Giga Impact",
    type: "Normal",
    cat: "Physical",
    power: 150,
    pp: 5,
    acc: 90,
    effect: "User must recharge next turn.",
    wiki: "http://www.serebii.net/attackdex-sm/gigaimpact.shtml"
};

var nasty_plot = {
    name: "Nasty Plot",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Sharply raises user's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/nastyplot.shtml"
};

var bullet_punch = {
    name: "Bullet Punch",
    type: "Steel",
    cat: "Physical",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "User attacks first.",
    wiki: "http://www.serebii.net/attackdex-sm/bulletpunch.shtml"
};

var avalanche = {
    name: "Avalanche",
    type: "Ice",
    cat: "Physical",
    power: 60,
    pp: 10,
    acc: 100,
    effect: "Power doubles if user took damage first.",
    wiki: "http://www.serebii.net/attackdex-sm/avalanche.shtml"
};

var ice_shard = {
    name: "Ice Shard",
    type: "Ice",
    cat: "Physical",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "User attacks first.",
    wiki: "http://www.serebii.net/attackdex-sm/iceshard.shtml"
};

var shadow_claw = {
    name: "Shadow Claw",
    type: "Ghost",
    cat: "Physical",
    power: 70,
    pp: 15,
    acc: 100,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-sm/shadowclaw.shtml"
};

var thunder_fang = {
    name: "Thunder Fang",
    type: "Electric",
    cat: "Physical",
    power: 65,
    pp: 15,
    acc: 95,
    effect: "May cause flinching and/or paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/thunderfang.shtml"
};

var ice_fang = {
    name: "Ice Fang",
    type: "Ice",
    cat: "Physical",
    power: 65,
    pp: 15,
    acc: 95,
    effect: "May cause flinching and/or freeze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/icefang.shtml"
};

var fire_fang = {
    name: "Fire Fang",
    type: "Fire",
    cat: "Physical",
    power: 65,
    pp: 15,
    acc: 95,
    effect: "May cause flinching and/or burn opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/firefang.shtml"
};

var shadow_sneak = {
    name: "Shadow Sneak",
    type: "Ghost",
    cat: "Physical",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "User attacks first.",
    wiki: "http://www.serebii.net/attackdex-sm/shadowsneak.shtml"
};

var mud_bomb = {
    name: "Mud Bomb",
    type: "Ground",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 85,
    effect: "May lower opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-sm/mudbomb.shtml"
};

var psycho_cut = {
    name: "Psycho Cut",
    type: "Psychic",
    cat: "Physical",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-sm/psychocut.shtml"
};

var zen_headbutt = {
    name: "Zen Headbutt",
    type: "Psychic",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 90,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/zenheadbutt.shtml"
};

var mirror_shot = {
    name: "Mirror Shot",
    type: "Steel",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 85,
    effect: "May lower opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-sm/mirrorshot.shtml"
};

var flash_cannon = {
    name: "Flash Cannon",
    type: "Steel",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/flashcannon.shtml"
};

var rock_climb = {
    name: "Rock Climb",
    type: "Normal",
    cat: "Physical",
    power: 90,
    pp: 20,
    acc: 85,
    effect: "May confuse opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/rockclimb.shtml"
};

var defog = {
    name: "Defog",
    type: "Flying",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Lowers opponent's Evasiveness and clears fog.",
    wiki: "http://www.serebii.net/attackdex-sm/defog.shtml"
};

var trick_room = {
    name: "Trick Room",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Slower Pokémon move first in the turn for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/trickroom.shtml"
};

var draco_meteor = {
    name: "Draco Meteor",
    type: "Dragon",
    cat: "Special",
    power: 130,
    pp: 5,
    acc: 90,
    effect: "Sharply lowers user's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/dracometeor.shtml"
};

var discharge = {
    name: "Discharge",
    type: "Electric",
    cat: "Special",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/discharge.shtml"
};

var lava_plume = {
    name: "Lava Plume",
    type: "Fire",
    cat: "Special",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/lavaplume.shtml"
};

var leaf_storm = {
    name: "Leaf Storm",
    type: "Grass",
    cat: "Special",
    power: 130,
    pp: 5,
    acc: 90,
    effect: "Sharply lowers user's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/leafstorm.shtml"
};

var power_whip = {
    name: "Power Whip",
    type: "Grass",
    cat: "Physical",
    power: 120,
    pp: 10,
    acc: 85,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/powerwhip.shtml"
};

var rock_wrecker = {
    name: "Rock Wrecker",
    type: "Rock",
    cat: "Physical",
    power: 150,
    pp: 5,
    acc: 90,
    effect: "User must recharge next turn.",
    wiki: "http://www.serebii.net/attackdex-sm/rockwrecker.shtml"
};

var cross_poison = {
    name: "Cross Poison",
    type: "Poison",
    cat: "Physical",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "High critical hit ratio. May poison opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/crosspoison.shtml"
};

var gunk_shot = {
    name: "Gunk Shot",
    type: "Poison",
    cat: "Physical",
    power: 120,
    pp: 5,
    acc: 80,
    effect: "May poison opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/gunkshot.shtml"
};

var iron_head = {
    name: "Iron Head",
    type: "Steel",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/ironhead.shtml"
};

var magnet_bomb = {
    name: "Magnet Bomb",
    type: "Steel",
    cat: "Physical",
    power: 60,
    pp: 20,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-sm/magnetbomb.shtml"
};

var stone_edge = {
    name: "Stone Edge",
    type: "Rock",
    cat: "Physical",
    power: 100,
    pp: 5,
    acc: 80,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-sm/stoneedge.shtml"
};

var captivate = {
    name: "Captivate",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Sharply lowers opponent's Special Attack if opposite gender.",
    wiki: "http://www.serebii.net/attackdex-sm/captivate.shtml"
};

var stealth_rock = {
    name: "Stealth Rock",
    type: "Rock",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Damages opponent switching into battle.",
    wiki: "http://www.serebii.net/attackdex-sm/stealthrock.shtml"
};

var grass_knot = {
    name: "Grass Knot",
    type: "Grass",
    cat: "Special",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "The heavier the opponent, the stronger the attack.",
    wiki: "http://www.serebii.net/attackdex-sm/grassknot.shtml"
};

var chatter = {
    name: "Chatter",
    type: "Flying",
    cat: "Special",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "Confuses opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/chatter.shtml"
};

var judgment = {
    name: "Judgment",
    type: "Normal",
    cat: "Special",
    power: 100,
    pp: 10,
    acc: 100,
    effect: "Type depends on the Arceus Plate being held.",
    wiki: "http://www.serebii.net/attackdex-sm/judgment.shtml"
};

var bug_bite = {
    name: "Bug Bite",
    type: "Bug",
    cat: "Physical",
    power: 60,
    pp: 20,
    acc: 100,
    effect: "Receives the effect from the opponent's held berry.",
    wiki: "http://www.serebii.net/attackdex-sm/bugbite.shtml"
};

var charge_beam = {
    name: "Charge Beam",
    type: "Electric",
    cat: "Special",
    power: 50,
    pp: 10,
    acc: 90,
    effect: "May raise user's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/chargebeam.shtml"
};

var wood_hammer = {
    name: "Wood Hammer",
    type: "Grass",
    cat: "Physical",
    power: 120,
    pp: 15,
    acc: 100,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-sm/woodhammer.shtml"
};

var aqua_jet = {
    name: "Aqua Jet",
    type: "Water",
    cat: "Physical",
    power: 40,
    pp: 20,
    acc: 100,
    effect: "User attacks first.",
    wiki: "http://www.serebii.net/attackdex-sm/aquajet.shtml"
};

var attack_order = {
    name: "Attack Order",
    type: "Bug",
    cat: "Physical",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-sm/attackorder.shtml"
};

var defend_order = {
    name: "Defend Order",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Raises user's Defense and Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/defendorder.shtml"
};

var heal_order = {
    name: "Heal Order",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User recovers half its max HP.",
    wiki: "http://www.serebii.net/attackdex-sm/healorder.shtml"
};

var head_smash = {
    name: "Head Smash",
    type: "Rock",
    cat: "Physical",
    power: 150,
    pp: 5,
    acc: 80,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-sm/headsmash.shtml"
};

var double_hit = {
    name: "Double Hit",
    type: "Normal",
    cat: "Physical",
    power: 35,
    pp: 10,
    acc: 90,
    effect: "Hits twice in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/doublehit.shtml"
};

var roar_of_time = {
    name: "Roar Of Time",
    type: "Dragon",
    cat: "Special",
    power: 150,
    pp: 5,
    acc: 90,
    effect: "User must recharge next turn.",
    wiki: "http://www.serebii.net/attackdex-sm/roaroftime.shtml"
};

var spacial_rend = {
    name: "Spacial Rend",
    type: "Dragon",
    cat: "Special",
    power: 100,
    pp: 5,
    acc: 95,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-sm/spacialrend.shtml"
};

var lunar_dance = {
    name: "Lunar Dance",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "The user faints but the next Pokémon released is fully healed.",
    wiki: "http://www.serebii.net/attackdex-sm/lunardance.shtml"
};

var crush_grip = {
    name: "Crush Grip",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "More powerful when opponent has higher HP.",
    wiki: "http://www.serebii.net/attackdex-sm/crushgrip.shtml"
};

var magma_storm = {
    name: "Magma Storm",
    type: "Fire",
    cat: "Special",
    power: 100,
    pp: 5,
    acc: 75,
    effect: "Traps opponent, damaging them for 4-5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/magmastorm.shtml"
};

var dark_void = {
    name: "Dark Void",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 80,
    effect: "Puts all adjacent opponents to sleep.",
    wiki: "http://www.serebii.net/attackdex-sm/darkvoid.shtml"
};

var seed_flare = {
    name: "Seed Flare",
    type: "Grass",
    cat: "Special",
    power: 120,
    pp: 5,
    acc: 85,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/seedflare.shtml"
};

var ominous_wind = {
    name: "Ominous Wind",
    type: "Ghost",
    cat: "Special",
    power: 60,
    pp: 5,
    acc: 100,
    effect: "May raise all user's stats at once.",
    wiki: "http://www.serebii.net/attackdex-sm/ominouswind.shtml"
};

var shadow_force = {
    name: "Shadow Force",
    type: "Ghost",
    cat: "Physical",
    power: 120,
    pp: 5,
    acc: 100,
    effect: "Disappears on first turn, attacks on second. Can strike through Protect/Detect.",
    wiki: "http://www.serebii.net/attackdex-sm/shadowforce.shtml"
};

var hone_claws = {
    name: "Hone Claws",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Raises user's Attack and Accuracy.",
    wiki: "http://www.serebii.net/attackdex-sm/honeclaws.shtml"
};

var wide_guard = {
    name: "Wide Guard",
    type: "Rock",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Protects the user's team from multi-target attacks.",
    wiki: "http://www.serebii.net/attackdex-sm/wideguard.shtml"
};

var guard_split = {
    name: "Guard Split",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Averages Defense and Special Defense with the target.",
    wiki: "http://www.serebii.net/attackdex-sm/guardsplit.shtml"
};

var power_split = {
    name: "Power Split",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Averages Attack and Special Attack with the target.",
    wiki: "http://www.serebii.net/attackdex-sm/powersplit.shtml"
};

var wonder_room = {
    name: "Wonder Room",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Swaps every Pokémon's Defense and Special Defense for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/wonderroom.shtml"
};

var psyshock = {
    name: "Psyshock",
    type: "Psychic",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "Inflicts damage based on the target's Defense, not Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/psyshock.shtml"
};

var venoshock = {
    name: "Venoshock",
    type: "Poison",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 100,
    effect: "Inflicts double damage if the target is poisoned.",
    wiki: "http://www.serebii.net/attackdex-sm/venoshock.shtml"
};

var autotomize = {
    name: "Autotomize",
    type: "Steel",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Halves weight and sharply raises Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/autotomize.shtml"
};

var rage_powder = {
    name: "Rage Powder",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Forces attacks to hit user, not team-mates.",
    wiki: "http://www.serebii.net/attackdex-sm/ragepowder.shtml"
};

var telekinesis = {
    name: "Telekinesis",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Ignores opponent's Evasiveness for three turns, add Ground immunity.",
    wiki: "http://www.serebii.net/attackdex-sm/telekinesis.shtml"
};

var magic_room = {
    name: "Magic Room",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Suppresses the effects of held items for five turns.",
    wiki: "http://www.serebii.net/attackdex-sm/magicroom.shtml"
};

var smack_down = {
    name: "Smack Down",
    type: "Rock",
    cat: "Physical",
    power: 50,
    pp: 15,
    acc: 100,
    effect: "Makes Flying-type Pokémon vulnerable to Ground moves.",
    wiki: "http://www.serebii.net/attackdex-sm/smackdown.shtml"
};

var storm_throw = {
    name: "Storm Throw",
    type: "Fighting",
    cat: "Physical",
    power: 60,
    pp: 10,
    acc: 100,
    effect: "Always results in a critical hit.",
    wiki: "http://www.serebii.net/attackdex-sm/stormthrow.shtml"
};

var flame_burst = {
    name: "Flame Burst",
    type: "Fire",
    cat: "Special",
    power: 70,
    pp: 15,
    acc: 100,
    effect: "May also injure nearby Pokémon.",
    wiki: "http://www.serebii.net/attackdex-sm/flameburst.shtml"
};

var sludge_wave = {
    name: "Sludge Wave",
    type: "Poison",
    cat: "Special",
    power: 95,
    pp: 10,
    acc: 100,
    effect: "May poison opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/sludgewave.shtml"
};

var quiver_dance = {
    name: "Quiver Dance",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises user's Special Attack, Special Defense and Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/quiverdance.shtml"
};

var heavy_slam = {
    name: "Heavy Slam",
    type: "Steel",
    cat: "Physical",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "The heavier the user, the stronger the attack.",
    wiki: "http://www.serebii.net/attackdex-sm/heavyslam.shtml"
};

var synchronoise = {
    name: "Synchronoise",
    type: "Psychic",
    cat: "Special",
    power: 120,
    pp: 15,
    acc: 100,
    effect: "Hits any Pokémon that shares a type with the user.",
    wiki: "http://www.serebii.net/attackdex-sm/synchronoise.shtml"
};

var electro_ball = {
    name: "Electro Ball",
    type: "Electric",
    cat: "Special",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "The faster the user, the stronger the attack.",
    wiki: "http://www.serebii.net/attackdex-sm/electroball.shtml"
};

var soak = {
    name: "Soak",
    type: "Water",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Changes the target's type to water.",
    wiki: "http://www.serebii.net/attackdex-sm/soak.shtml"
};

var flame_charge = {
    name: "Flame Charge",
    type: "Fire",
    cat: "Physical",
    power: 50,
    pp: 20,
    acc: 100,
    effect: "Raises user's Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/flamecharge.shtml"
};

var coil = {
    name: "Coil",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises user's Attack, Defense and Accuracy.",
    wiki: "http://www.serebii.net/attackdex-sm/coil.shtml"
};

var low_sweep = {
    name: "Low Sweep",
    type: "Fighting",
    cat: "Physical",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "Lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/lowsweep.shtml"
};

var acid_spray = {
    name: "Acid Spray",
    type: "Poison",
    cat: "Special",
    power: 40,
    pp: 20,
    acc: 100,
    effect: "Sharply lowers opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/acidspray.shtml"
};

var foul_play = {
    name: "Foul Play",
    type: "Dark",
    cat: "Physical",
    power: 95,
    pp: 15,
    acc: 100,
    effect: "Uses the opponent's Attack stat.",
    wiki: "http://www.serebii.net/attackdex-sm/foulplay.shtml"
};

var simple_beam = {
    name: "Simple Beam",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Changes target's ability to Simple.",
    wiki: "http://www.serebii.net/attackdex-sm/simplebeam.shtml"
};

var entrainment = {
    name: "Entrainment",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Makes target's ability same as user's.",
    wiki: "http://www.serebii.net/attackdex-sm/entrainment.shtml"
};

var after_you = {
    name: "After You",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Gives target priority in the next turn.",
    wiki: "http://www.serebii.net/attackdex-sm/afteryou.shtml"
};

var round = {
    name: "Round",
    type: "Normal",
    cat: "Special",
    power: 60,
    pp: 15,
    acc: 100,
    effect: "Power increases if teammates use it in the same turn.",
    wiki: "http://www.serebii.net/attackdex-sm/round.shtml"
};

var echoed_voice = {
    name: "Echoed Voice",
    type: "Normal",
    cat: "Special",
    power: 40,
    pp: 15,
    acc: 100,
    effect: "Power increases each turn.",
    wiki: "http://www.serebii.net/attackdex-sm/echoedvoice.shtml"
};

var chip_away = {
    name: "Chip Away",
    type: "Normal",
    cat: "Physical",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "Ignores opponent's stat changes.",
    wiki: "http://www.serebii.net/attackdex-sm/chipaway.shtml"
};

var clear_smog = {
    name: "Clear Smog",
    type: "Poison",
    cat: "Special",
    power: 50,
    pp: 15,
    acc: -1,
    effect: "Removes all of the target's stat changes.",
    wiki: "http://www.serebii.net/attackdex-sm/clearsmog.shtml"
};

var stored_power = {
    name: "Stored Power",
    type: "Psychic",
    cat: "Special",
    power: 20,
    pp: 10,
    acc: 100,
    effect: "Power increases when user's stats have been raised.",
    wiki: "http://www.serebii.net/attackdex-sm/storedpower.shtml"
};

var quick_guard = {
    name: "Quick Guard",
    type: "Fighting",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Fast moves won't damage the user or its teammates.",
    wiki: "http://www.serebii.net/attackdex-sm/quickguard.shtml"
};

var ally_switch = {
    name: "Ally Switch",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "User switches with opposite teammate.",
    wiki: "http://www.serebii.net/attackdex-sm/allyswitch.shtml"
};

var scald = {
    name: "Scald",
    type: "Water",
    cat: "Special",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/scald.shtml"
};

var shell_smash = {
    name: "Shell Smash",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Sharply raises user's Attack, Special Attack and Speed but lowers Defense and Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/shellsmash.shtml"
};

var heal_pulse = {
    name: "Heal Pulse",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Restores half the target's max HP.",
    wiki: "http://www.serebii.net/attackdex-sm/healpulse.shtml"
};

var hex = {
    name: "Hex",
    type: "Ghost",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 100,
    effect: "Inflicts more damage if the target has a status condition.",
    wiki: "http://www.serebii.net/attackdex-sm/hex.shtml"
};

var sky_drop = {
    name: "Sky Drop",
    type: "Flying",
    cat: "Physical",
    power: 60,
    pp: 10,
    acc: 100,
    effect: "Takes opponent into the air on first turn, drops them on second turn.",
    wiki: "http://www.serebii.net/attackdex-sm/skydrop.shtml"
};

var shift_gear = {
    name: "Shift Gear",
    type: "Steel",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Raises user's Attack and sharply raises Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/shiftgear.shtml"
};

var circle_throw = {
    name: "Circle Throw",
    type: "Fighting",
    cat: "Physical",
    power: 60,
    pp: 10,
    acc: 90,
    effect: "In battles, the opponent switches. In the wild, the Pokémon runs.",
    wiki: "http://www.serebii.net/attackdex-sm/circlethrow.shtml"
};

var incinerate = {
    name: "Incinerate",
    type: "Fire",
    cat: "Special",
    power: 60,
    pp: 15,
    acc: 100,
    effect: "Destroys the target's held berry.",
    wiki: "http://www.serebii.net/attackdex-sm/incinerate.shtml"
};

var quash = {
    name: "Quash",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Makes the target act last this turn.",
    wiki: "http://www.serebii.net/attackdex-sm/quash.shtml"
};

var acrobatics = {
    name: "Acrobatics",
    type: "Flying",
    cat: "Physical",
    power: 55,
    pp: 15,
    acc: 100,
    effect: "Stronger when the user does not have a held item.",
    wiki: "http://www.serebii.net/attackdex-sm/acrobatics.shtml"
};

var reflect_type = {
    name: "Reflect Type",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "User becomes the target's type.",
    wiki: "http://www.serebii.net/attackdex-sm/reflecttype.shtml"
};

var retaliate = {
    name: "Retaliate",
    type: "Normal",
    cat: "Physical",
    power: 70,
    pp: 5,
    acc: 100,
    effect: "Inflicts double damage if a teammate fainted on the last turn.",
    wiki: "http://www.serebii.net/attackdex-sm/retaliate.shtml"
};

var final_gambit = {
    name: "Final Gambit",
    type: "Fighting",
    cat: "Special",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "Inflicts damage equal to the user's remaining HP. User faints.",
    wiki: "http://www.serebii.net/attackdex-sm/finalgambit.shtml"
};

var bestow = {
    name: "Bestow",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Gives the user's held item to the target.",
    wiki: "http://www.serebii.net/attackdex-sm/bestow.shtml"
};

var inferno = {
    name: "Inferno",
    type: "Fire",
    cat: "Special",
    power: 100,
    pp: 5,
    acc: 50,
    effect: "Burns opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/inferno.shtml"
};

var water_pledge = {
    name: "Water Pledge",
    type: "Water",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "Added effects appear if preceded by Fire Pledge or succeeded by Grass Pledge.",
    wiki: "http://www.serebii.net/attackdex-sm/waterpledge.shtml"
};

var fire_pledge = {
    name: "Fire Pledge",
    type: "Fire",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "Added effects appear if combined with Grass Pledge or Water Pledge.",
    wiki: "http://www.serebii.net/attackdex-sm/firepledge.shtml"
};

var grass_pledge = {
    name: "Grass Pledge",
    type: "Grass",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "Added effects appear if preceded by Water Pledge or succeeded by Fire Pledge.",
    wiki: "http://www.serebii.net/attackdex-sm/grasspledge.shtml"
};

var volt_switch = {
    name: "Volt Switch",
    type: "Electric",
    cat: "Special",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "User must switch out after attacking.",
    wiki: "http://www.serebii.net/attackdex-sm/voltswitch.shtml"
};

var struggle_bug = {
    name: "Struggle Bug",
    type: "Bug",
    cat: "Special",
    power: 50,
    pp: 20,
    acc: 100,
    effect: "Lowers opponent's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/strugglebug.shtml"
};

var bulldoze = {
    name: "Bulldoze",
    type: "Ground",
    cat: "Physical",
    power: 60,
    pp: 20,
    acc: 100,
    effect: "Lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/bulldoze.shtml"
};

var frost_breath = {
    name: "Frost Breath",
    type: "Ice",
    cat: "Special",
    power: 60,
    pp: 10,
    acc: 90,
    effect: "Always results in a critical hit.",
    wiki: "http://www.serebii.net/attackdex-sm/frostbreath.shtml"
};

var dragon_tail = {
    name: "Dragon Tail",
    type: "Dragon",
    cat: "Physical",
    power: 60,
    pp: 10,
    acc: 90,
    effect: "In battles, the opponent switches. In the wild, the Pokémon runs.",
    wiki: "http://www.serebii.net/attackdex-sm/dragontail.shtml"
};

var work_up = {
    name: "Work Up",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Raises user's Attack and Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/workup.shtml"
};

var electroweb = {
    name: "Electroweb",
    type: "Electric",
    cat: "Special",
    power: 55,
    pp: 15,
    acc: 95,
    effect: "Lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/electroweb.shtml"
};

var wild_charge = {
    name: "Wild Charge",
    type: "Electric",
    cat: "Physical",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-sm/wildcharge.shtml"
};

var drill_run = {
    name: "Drill Run",
    type: "Ground",
    cat: "Physical",
    power: 80,
    pp: 10,
    acc: 95,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-sm/drillrun.shtml"
};

var dual_chop = {
    name: "Dual Chop",
    type: "Dragon",
    cat: "Physical",
    power: 40,
    pp: 15,
    acc: 90,
    effect: "Hits twice in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/dualchop.shtml"
};

var heart_stamp = {
    name: "Heart Stamp",
    type: "Psychic",
    cat: "Physical",
    power: 60,
    pp: 25,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/heartstamp.shtml"
};

var horn_leech = {
    name: "Horn Leech",
    type: "Grass",
    cat: "Physical",
    power: 75,
    pp: 10,
    acc: 100,
    effect: "User recovers half the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/hornleech.shtml"
};

var sacred_sword = {
    name: "Sacred Sword",
    type: "Fighting",
    cat: "Physical",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "Ignores opponent's stat changes.",
    wiki: "http://www.serebii.net/attackdex-sm/sacredsword.shtml"
};

var razor_shell = {
    name: "Razor Shell",
    type: "Water",
    cat: "Physical",
    power: 75,
    pp: 10,
    acc: 95,
    effect: "May lower opponent's Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/razorshell.shtml"
};

var heat_crash = {
    name: "Heat Crash",
    type: "Fire",
    cat: "Physical",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "The heavier the user, the stronger the attack.",
    wiki: "http://www.serebii.net/attackdex-sm/heatcrash.shtml"
};

var leaf_tornado = {
    name: "Leaf Tornado",
    type: "Grass",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 90,
    effect: "May lower opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-sm/leaftornado.shtml"
};

var steamroller = {
    name: "Steamroller",
    type: "Bug",
    cat: "Physical",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/steamroller.shtml"
};

var cotton_guard = {
    name: "Cotton Guard",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Drastically raises user's Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/cottonguard.shtml"
};

var night_daze = {
    name: "Night Daze",
    type: "Dark",
    cat: "Special",
    power: 85,
    pp: 10,
    acc: 95,
    effect: "May lower opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-sm/nightdaze.shtml"
};

var psystrike = {
    name: "Psystrike",
    type: "Psychic",
    cat: "Special",
    power: 100,
    pp: 10,
    acc: 100,
    effect: "Inflicts damage based on the target's Defense, not Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/psystrike.shtml"
};

var tail_slap = {
    name: "Tail Slap",
    type: "Normal",
    cat: "Physical",
    power: 25,
    pp: 10,
    acc: 85,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/tailslap.shtml"
};

var hurricane = {
    name: "Hurricane",
    type: "Flying",
    cat: "Special",
    power: 110,
    pp: 10,
    acc: 70,
    effect: "May confuse opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/hurricane.shtml"
};

var head_charge = {
    name: "Head Charge",
    type: "Normal",
    cat: "Physical",
    power: 120,
    pp: 15,
    acc: 100,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-sm/headcharge.shtml"
};

var gear_grind = {
    name: "Gear Grind",
    type: "Steel",
    cat: "Physical",
    power: 50,
    pp: 15,
    acc: 85,
    effect: "Hits twice in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/geargrind.shtml"
};

var searing_shot = {
    name: "Searing Shot",
    type: "Fire",
    cat: "Special",
    power: 100,
    pp: 5,
    acc: 100,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/searingshot.shtml"
};

var techno_blast = {
    name: "Techno Blast",
    type: "Normal",
    cat: "Special",
    power: 120,
    pp: 5,
    acc: 100,
    effect: "Type depends on the Drive being held.",
    wiki: "http://www.serebii.net/attackdex-sm/technoblast.shtml"
};

var relic_song = {
    name: "Relic Song",
    type: "Normal",
    cat: "Special",
    power: 75,
    pp: 10,
    acc: 100,
    effect: "May put the target to sleep.",
    wiki: "http://www.serebii.net/attackdex-sm/relicsong.shtml"
};

var secret_sword = {
    name: "Secret Sword",
    type: "Fighting",
    cat: "Special",
    power: 85,
    pp: 10,
    acc: 100,
    effect: "Inflicts damage based on the target's Defense, not Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/secretsword.shtml"
};

var glaciate = {
    name: "Glaciate",
    type: "Ice",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 95,
    effect: "Lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/glaciate.shtml"
};

var bolt_strike = {
    name: "Bolt Strike",
    type: "Electric",
    cat: "Physical",
    power: 130,
    pp: 5,
    acc: 85,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/boltstrike.shtml"
};

var blue_flare = {
    name: "Blue Flare",
    type: "Fire",
    cat: "Special",
    power: 130,
    pp: 5,
    acc: 85,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/blueflare.shtml"
};

var fiery_dance = {
    name: "Fiery Dance",
    type: "Fire",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "May raise user's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/fierydance.shtml"
};

var freeze_shock = {
    name: "Freeze Shock",
    type: "Ice",
    cat: "Physical",
    power: 140,
    pp: 5,
    acc: 90,
    effect: "Charges on first turn, attacks on second. May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/freezeshock.shtml"
};

var ice_burn = {
    name: "Ice Burn",
    type: "Ice",
    cat: "Special",
    power: 140,
    pp: 5,
    acc: 90,
    effect: "Charges on first turn, attacks on second. May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/iceburn.shtml"
};

var snarl = {
    name: "Snarl",
    type: "Dark",
    cat: "Special",
    power: 55,
    pp: 15,
    acc: 95,
    effect: "Lowers opponent's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/snarl.shtml"
};

var icicle_crash = {
    name: "Icicle Crash",
    type: "Ice",
    cat: "Physical",
    power: 85,
    pp: 10,
    acc: 90,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-sm/iciclecrash.shtml"
};

var v_create = {
    name: "V_create",
    type: "Fire",
    cat: "Physical",
    power: 180,
    pp: 5,
    acc: 95,
    effect: "Lowers user's Defense, Special Defense and Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/v_create.shtml"
};

var fusion_flare = {
    name: "Fusion Flare",
    type: "Fire",
    cat: "Special",
    power: 100,
    pp: 5,
    acc: 100,
    effect: "Power increases if Fusion Bolt is used in the same turn.",
    wiki: "http://www.serebii.net/attackdex-sm/fusionflare.shtml"
};

var fusion_bolt = {
    name: "Fusion Bolt",
    type: "Electric",
    cat: "Physical",
    power: 100,
    pp: 5,
    acc: 100,
    effect: "Power increases if Fusion Flare is used in the same turn.",
    wiki: "http://www.serebii.net/attackdex-sm/fusionbolt.shtml"
};

var flying_press = {
    name: "Flying Press",
    type: "Fighting",
    cat: "Physical",
    power: 80,
    pp: 10,
    acc: 95,
    effect: "Deals Fighting and Flying type damage.",
    wiki: "http://www.serebii.net/attackdex-sm/flyingpress.shtml"
};

var mat_block = {
    name: "Mat Block",
    type: "Fighting",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Protects teammates from damaging moves.",
    wiki: "http://www.serebii.net/attackdex-sm/matblock.shtml"
};

var belch = {
    name: "Belch",
    type: "Poison",
    cat: "Special",
    power: 120,
    pp: 10,
    acc: 90,
    effect: "User must have consumed a Berry.",
    wiki: "http://www.serebii.net/attackdex-sm/belch.shtml"
};

var rototiller = {
    name: "Rototiller",
    type: "Ground",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Raises Attack and Special Attack of Grass-types.",
    wiki: "http://www.serebii.net/attackdex-sm/rototiller.shtml"
};

var sticky_web = {
    name: "Sticky Web",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Lowers opponent's Speed when switching into battle.",
    wiki: "http://www.serebii.net/attackdex-sm/stickyweb.shtml"
};

var fell_stinger = {
    name: "Fell Stinger",
    type: "Bug",
    cat: "Physical",
    power: 30,
    pp: 25,
    acc: 100,
    effect: "Sharply raises user's Attack if target is KO'd.",
    wiki: "http://www.serebii.net/attackdex-sm/fellstinger.shtml"
};

var phantom_force = {
    name: "Phantom Force",
    type: "Ghost",
    cat: "Physical",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "Disappears on first turn, attacks on second. Can strike through Protect/Detect.",
    wiki: "http://www.serebii.net/attackdex-sm/phantomforce.shtml"
};

var trick_or_treat = {
    name: "Trick_or_treat",
    type: "Ghost",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Adds Ghost type to opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/trick_or_treat.shtml"
};

var noble_roar = {
    name: "Noble Roar",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: 100,
    effect: "Lowers opponent's Attack and Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/nobleroar.shtml"
};

var ion_deluge = {
    name: "Ion Deluge",
    type: "Electric",
    cat: "Status",
    power: -1,
    pp: 25,
    acc: -1,
    effect: "Changes Normal-type moves to Electric-type.",
    wiki: "http://www.serebii.net/attackdex-sm/iondeluge.shtml"
};

var parabolic_charge = {
    name: "Parabolic Charge",
    type: "Electric",
    cat: "Special",
    power: 50,
    pp: 20,
    acc: 100,
    effect: "User recovers half the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/paraboliccharge.shtml"
};

var forests_curse = {
    name: "Forests Curse",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Adds Grass type to opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/forestscurse.shtml"
};

var petal_blizzard = {
    name: "Petal Blizzard",
    type: "Grass",
    cat: "Physical",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "Hits all adjacent Pokémon.",
    wiki: "http://www.serebii.net/attackdex-sm/petalblizzard.shtml"
};

var freeze_dry = {
    name: "Freeze_dry",
    type: "Ice",
    cat: "Special",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "May freeze opponent. Super-effective against Water types.",
    wiki: "http://www.serebii.net/attackdex-sm/freeze_dry.shtml"
};

var disarming_voice = {
    name: "Disarming Voice",
    type: "Fairy",
    cat: "Special",
    power: 40,
    pp: 15,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-sm/disarmingvoice.shtml"
};

var parting_shot = {
    name: "Parting Shot",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Lowers opponent's Attack and Special Attack then switches out.",
    wiki: "http://www.serebii.net/attackdex-sm/partingshot.shtml"
};

var topsy_turvy = {
    name: "Topsy_turvy",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Reverses stat changes of opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/topsy_turvy.shtml"
};

var draining_kiss = {
    name: "Draining Kiss",
    type: "Fairy",
    cat: "Special",
    power: 50,
    pp: 10,
    acc: 100,
    effect: "User recovers most the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/drainingkiss.shtml"
};

var crafty_shield = {
    name: "Crafty Shield",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Protects the Pokémon from status moves.",
    wiki: "http://www.serebii.net/attackdex-sm/craftyshield.shtml"
};

var flower_shield = {
    name: "Flower Shield",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Sharply raises Defense of all Grass-type Pokémon on the field.",
    wiki: "http://www.serebii.net/attackdex-sm/flowershield.shtml"
};

var grassy_terrain = {
    name: "Grassy Terrain",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Restores a little HP of all Pokémon for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/grassyterrain.shtml"
};

var misty_terrain = {
    name: "Misty Terrain",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Protects the field from status conditions for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/mistyterrain.shtml"
};

var electrify = {
    name: "Electrify",
    type: "Electric",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Changes the target's move to Electric type.",
    wiki: "http://www.serebii.net/attackdex-sm/electrify.shtml"
};

var play_rough = {
    name: "Play Rough",
    type: "Fairy",
    cat: "Physical",
    power: 90,
    pp: 10,
    acc: 90,
    effect: "May lower opponent's Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/playrough.shtml"
};

var fairy_wind = {
    name: "Fairy Wind",
    type: "Fairy",
    cat: "Special",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/fairywind.shtml"
};

var moonblast = {
    name: "Moonblast",
    type: "Fairy",
    cat: "Special",
    power: 95,
    pp: 15,
    acc: 100,
    effect: "May lower opponent's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/moonblast.shtml"
};

var boomburst = {
    name: "Boomburst",
    type: "Normal",
    cat: "Special",
    power: 140,
    pp: 10,
    acc: 100,
    effect: "Hits all adjacent Pokémon.",
    wiki: "http://www.serebii.net/attackdex-sm/boomburst.shtml"
};

var fairy_lock = {
    name: "Fairy Lock",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Prevents fleeing in the next turn.",
    wiki: "http://www.serebii.net/attackdex-sm/fairylock.shtml"
};

var kings_shield = {
    name: "King's Shield",
    type: "Steel",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Protects against attacks, and lowers opponent's Attack on contact.",
    wiki: "http://www.serebii.net/attackdex-sm/kingsshield.shtml"
};

var play_nice = {
    name: "Play Nice",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Lowers opponent's Attack. Always hits.",
    wiki: "http://www.serebii.net/attackdex-sm/playnice.shtml"
};

var confide = {
    name: "Confide",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Lowers opponent's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/confide.shtml"
};

var diamond_storm = {
    name: "Diamond Storm",
    type: "Rock",
    cat: "Physical",
    power: 100,
    pp: 5,
    acc: 95,
    effect: "May raise user's Defense",
    wiki: "http://www.serebii.net/attackdex-sm/diamondstorm.shtml"
};

var steam_eruption = {
    name: "Steam Eruption",
    type: "Water",
    cat: "Special",
    power: 110,
    pp: 5,
    acc: 95,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/steameruption.shtml"
};

var hyperspace_hole = {
    name: "Hyperspace Hole",
    type: "Psychic",
    cat: "Special",
    power: 80,
    pp: 5,
    acc: -1,
    effect: "Can strike through Protect/Detect.",
    wiki: "http://www.serebii.net/attackdex-sm/hyperspacehole.shtml"
};

var water_shuriken = {
    name: "Water Shuriken",
    type: "Water",
    cat: "Physical",
    power: 15,
    pp: 20,
    acc: 100,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-sm/watershuriken.shtml"
};

var mystical_fire = {
    name: "Mystical Fire",
    type: "Fire",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 100,
    effect: "Lowers opponent's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/mysticalfire.shtml"
};

var spiky_shield = {
    name: "Spiky Shield",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Protects user and inflicts damage on contact moves.",
    wiki: "http://www.serebii.net/attackdex-sm/spikyshield.shtml"
};

var aromatic_mist = {
    name: "Aromatic Mist",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises Special Defense of allies.",
    wiki: "http://www.serebii.net/attackdex-sm/aromaticmist.shtml"
};

var eerie_impulse = {
    name: "Eerie Impulse",
    type: "Electric",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Sharply lowers opponent's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/eerieimpulse.shtml"
};

var venom_drench = {
    name: "Venom Drench",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Lowers poisoned opponent's Special Attack and Speed.",
    wiki: "http://www.serebii.net/attackdex-sm/venomdrench.shtml"
};

var powder = {
    name: "Powder",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Damages Pokémon using Fire type moves.",
    wiki: "http://www.serebii.net/attackdex-sm/powder.shtml"
};

var geomancy = {
    name: "Geomancy",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Charges on first turn, sharply raises user's Sp. Attack, Sp. Defense and Speed on the second.",
    wiki: "http://www.serebii.net/attackdex-sm/geomancy.shtml"
};

var magnetic_flux = {
    name: "Magnetic Flux",
    type: "Electric",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises Defense and Sp. Defense of Plus/Minus Pokémon.",
    wiki: "http://www.serebii.net/attackdex-sm/magneticflux.shtml"
};

var happy_hour = {
    name: "Happy Hour",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Doubles prize money from trainer battles.",
    wiki: "http://www.serebii.net/attackdex-sm/happyhour.shtml"
};

var electric_terrain = {
    name: "Electric Terrain",
    type: "Electric",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Prevents all Pokémon from falling asleep for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/electricterrain.shtml"
};

var dazzling_gleam = {
    name: "Dazzling Gleam",
    type: "Fairy",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "Hits all adjacent opponents.",
    wiki: "http://www.serebii.net/attackdex-sm/dazzlinggleam.shtml"
};

var celebrate = {
    name: "Celebrate",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "The Pokémon congratulates you on your special day. No battle effect.",
    wiki: "http://www.serebii.net/attackdex-sm/celebrate.shtml"
};

var hold_hands = {
    name: "Hold Hands",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "Makes the user and an ally very happy.",
    wiki: "http://www.serebii.net/attackdex-sm/holdhands.shtml"
};

var baby_doll_eyes = {
    name: "Baby_doll Eyes",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: 100,
    effect: "Always goes first. Lowers the target's attack.",
    wiki: "http://www.serebii.net/attackdex-sm/baby_dolleyes.shtml"
};

var nuzzle = {
    name: "Nuzzle",
    type: "Electric",
    cat: "Physical",
    power: 20,
    pp: 20,
    acc: 100,
    effect: "Paralyzes opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/nuzzle.shtml"
};

var hold_back = {
    name: "Hold Back",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 40,
    acc: 100,
    effect: "Always leaves opponent with at least 1 HP.",
    wiki: "http://www.serebii.net/attackdex-sm/holdback.shtml"
};

var infestation = {
    name: "Infestation",
    type: "Bug",
    cat: "Special",
    power: 20,
    pp: 20,
    acc: 100,
    effect: "Traps opponent, damaging them for 4-5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/infestation.shtml"
};

var power_up_punch = {
    name: "Power_up Punch",
    type: "Fighting",
    cat: "Physical",
    power: 40,
    pp: 20,
    acc: 100,
    effect: "Raises Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/power_uppunch.shtml"
};

var oblivion_wing = {
    name: "Oblivion Wing",
    type: "Flying",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "User recovers most of the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-sm/oblivionwing.shtml"
};

var thousand_arrows = {
    name: "Thousand Arrows",
    type: "Ground",
    cat: "Physical",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "Makes Flying-type Pokémon vulnerable to Ground moves.",
    wiki: "http://www.serebii.net/attackdex-sm/thousandarrows.shtml"
};

var thousand_waves = {
    name: "Thousand Waves",
    type: "Ground",
    cat: "Physical",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "Opponent cannot flee or switch.",
    wiki: "http://www.serebii.net/attackdex-sm/thousandwaves.shtml"
};

var lands_wrath = {
    name: "Lands Wrath",
    type: "Ground",
    cat: "Physical",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-sm/landswrath.shtml"
};

var light_of_ruin = {
    name: "Light Of Ruin",
    type: "Fairy",
    cat: "Special",
    power: 140,
    pp: 5,
    acc: 90,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-sm/lightofruin.shtml"
};

var origin_pulse = {
    name: "Origin Pulse",
    type: "Water",
    cat: "Special",
    power: 110,
    pp: 10,
    acc: 85,
    effect: "Hits all adjacent opponents.",
    wiki: "http://www.serebii.net/attackdex-sm/originpulse.shtml"
};

var precipice_blades = {
    name: "Precipice Blades",
    type: "Ground",
    cat: "Physical",
    power: 120,
    pp: 10,
    acc: 85,
    effect: "Hits all adjacent opponents.",
    wiki: "http://www.serebii.net/attackdex-sm/precipiceblades.shtml"
};

var dragon_ascent = {
    name: "Dragon Ascent",
    type: "Flying",
    cat: "Physical",
    power: 120,
    pp: 5,
    acc: 100,
    effect: "Lowers user's Defense and Special Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/dragonascent.shtml"
};

var hyperspace_fury = {
    name: "Hyperspace Fury",
    type: "Dark",
    cat: "Physical",
    power: 100,
    pp: 5,
    acc: -1,
    effect: "Lowers user's Defense. Can strike through Protect/Detect.",
    wiki: "http://www.serebii.net/attackdex-sm/hyperspacefury.shtml"
};

var ten_million_volt_thunderbolt = {
    name: "10,000,000 Volt Thunderbolt",
    type: "Electric",
    cat: "Special",
    power: 195,
    pp: 1,
    acc: -1,
    effect: "Pikachu-exclusive Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/10000000voltthunderbolt.shtml"
};

var accelerock = {
    name: "Accelerock",
    type: "Rock",
    cat: "Physical",
    power: 40,
    pp: 20,
    acc: 100,
    effect: "User attacks first.",
    wiki: "http://www.serebii.net/attackdex-sm/accelerock.shtml"
};

var acid_downpour = {
    name: "Acid Downpour",
    type: "Poison",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Poison type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/aciddownpour.shtml"
};

var all_out_pummeling = {
    name: "All-out Pummeling",
    type: "Fighting",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Fighting type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/all-outpummeling.shtml"
};

var anchor_shot = {
    name: "Anchor Shot",
    type: "Steel",
    cat: "Physical",
    power: 80,
    pp: 20,
    acc: 100,
    effect: "The user entangles the target with its anchor chain while attacking. The target becomes unable to flee.",
    wiki: "http://www.serebii.net/attackdex-sm/anchorshot.shtml"
};

var aurora_veil = {
    name: "Aurora Veil",
    type: "Ice",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Halves damage from Physical and Special attacks for five turns.",
    wiki: "http://www.serebii.net/attackdex-sm/auroraveil.shtml"
};

var baneful_bunker = {
    name: "Baneful Bunker",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "In addition to protecting the user from attacks, this move also poisons any attacker that makes direct contact.",
    wiki: "http://www.serebii.net/attackdex-sm/banefulbunker.shtml"
};

var beak_blast = {
    name: "Beak Blast",
    type: "Flying",
    cat: "Physical",
    power: 100,
    pp: 15,
    acc: 100,
    effect: "The user first heats up its beak, and then it attacks the target. Making direct contact with the Pokémon while it’s heating up its beak results in a burn.",
    wiki: "http://www.serebii.net/attackdex-sm/beakblast.shtml"
};

var black_hole_eclipse = {
    name: "Black Hole Eclipse",
    type: "Dark",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Dark type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/blackholeeclipse.shtml"
};

var bloom_doom = {
    name: "Bloom Doom",
    type: "Grass",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Grass type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/bloomdoom.shtml"
};

var breakneck_blitz = {
    name: "Breakneck Blitz",
    type: "Normal",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Normal type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/breakneckblitz.shtml"
};

var brutal_swing = {
    name: "Brutal Swing",
    type: "Dark",
    cat: "Physical",
    power: 60,
    pp: 20,
    acc: 100,
    effect: "The user swings its body around violently to inflict damage on everything in its vicinity.",
    wiki: "http://www.serebii.net/attackdex-sm/brutalswing.shtml"
};

var burn_up = {
    name: "Burn Up",
    type: "Fire",
    cat: "Special",
    power: 130,
    pp: 5,
    acc: 100,
    effect: "To inflict massive damage, the user burns itself out. After using this move, the user will no longer be Fire type.",
    wiki: "http://www.serebii.net/attackdex-sm/burnup.shtml"
};

var catastropika = {
    name: "Catastropika",
    type: "Electric",
    cat: "Physical",
    power: 210,
    pp: 1,
    acc: -1,
    effect: "Pikachu-exclusive Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/catastropika.shtml"
};

var clanging_scales = {
    name: "Clanging Scales",
    type: "Dragon",
    cat: "Special",
    power: 110,
    pp: 5,
    acc: 100,
    effect: "Lowers user's Defense.",
    wiki: "http://www.serebii.net/attackdex-sm/clangingscales.shtml"
};

var continental_crush = {
    name: "Continental Crush",
    type: "Rock",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Rock type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/continentalcrush.shtml"
};

var core_enforcer = {
    name: "Core Enforcer",
    type: "Dragon",
    cat: "Special",
    power: 100,
    pp: 10,
    acc: 100,
    effect: "Scorches a 'Z' pattern on the ground.",
    wiki: "http://www.serebii.net/attackdex-sm/coreenforcer.shtml"
};

var corkscrew_crash = {
    name: "Corkscrew Crash",
    type: "Steel",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Steel type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/corkscrewcrash.shtml"
};

var darkest_lariat = {
    name: "Darkest Lariat",
    type: "Dark",
    cat: "Physical",
    power: 85,
    pp: 10,
    acc: 100,
    effect: "Ignores opponent's stat changes.",
    wiki: "http://www.serebii.net/attackdex-sm/darkestlariat.shtml"
};

var devastating_drake = {
    name: "Devastating Drake",
    type: "Dragon",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Dragon type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/devastatingdrake.shtml"
};

var dragon_hammer = {
    name: "Dragon Hammer",
    type: "Dragon",
    cat: "Physical",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "The user uses its body like a hammer to attack the target and inflict damage.",
    wiki: "http://www.serebii.net/attackdex-sm/dragonhammer.shtml"
};

var extreme_evoboost = {
    name: "Extreme Evoboost",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Eevee-exclusive Z-Move. Sharply raises all stats.",
    wiki: "http://www.serebii.net/attackdex-sm/extremeevoboost.shtml"
};

var fire_lash = {
    name: "Fire Lash",
    type: "Fire",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "The user strikes the target with a burning lash. This also lowers the target’s Defense stat.",
    wiki: "http://www.serebii.net/attackdex-sm/firelash.shtml"
};

var first_impression = {
    name: "First Impression",
    type: "Bug",
    cat: "Physical",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "Although this move has great power, it only works the first turn the user is in battle.",
    wiki: "http://www.serebii.net/attackdex-sm/firstimpression.shtml"
};

var fleur_cannon = {
    name: "Fleur Cannon",
    type: "Fairy",
    cat: "Special",
    power: 130,
    pp: 5,
    acc: 90,
    effect: "Sharply lowers user's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/fleurcannon.shtml"
};

var floral_healing = {
    name: "Floral Healing",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "The user restores the target’s HP by up to half of its max HP. It restores more HP when the terrain is grass.",
    wiki: "http://www.serebii.net/attackdex-sm/floralhealing.shtml"
};

var gear_up = {
    name: "Gear Up",
    type: "Steel",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "The user engages its gears to raise the Attack and Sp. Atk stats of ally Pokémon with the Plus or Minus Ability.",
    wiki: "http://www.serebii.net/attackdex-sm/gearup.shtml"
};

var genesis_supernova = {
    name: "Genesis Supernova",
    type: "Psychic",
    cat: "Special",
    power: 185,
    pp: 1,
    acc: -1,
    effect: "Mew-exclusive Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/genesissupernova.shtml"
};

var gigavolt_havoc = {
    name: "Gigavolt Havoc",
    type: "Electric",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Electric type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/gigavolthavoc.shtml"
};

var guardian_of_alola = {
    name: "Guardian Of Alola",
    type: "Fairy",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Tapu-exclusive Z-move. Cuts opponent's HP by 75%.",
    wiki: "http://www.serebii.net/attackdex-sm/guardianofalola.shtml"
};

var high_horsepower = {
    name: "High Horsepower",
    type: "Ground",
    cat: "Physical",
    power: 95,
    pp: 10,
    acc: 95,
    effect: "The user fiercely attacks the target using its entire body.",
    wiki: "http://www.serebii.net/attackdex-sm/highhorsepower.shtml"
};

var hydro_vortex = {
    name: "Hydro Vortex",
    type: "Water",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Water type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/hydrovortex.shtml"
};

var ice_hammer = {
    name: "Ice Hammer",
    type: "Ice",
    cat: "Physical",
    power: 100,
    pp: 10,
    acc: 90,
    effect: "The user swings and hits with its strong, heavy fist. It lowers the user’s Speed, however.",
    wiki: "http://www.serebii.net/attackdex-sm/icehammer.shtml"
};

var inferno_overdrive = {
    name: "Inferno Overdrive",
    type: "Fire",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Fire type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/infernooverdrive.shtml"
};

var instruct = {
    name: "Instruct",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Allows an ally to use a move instead.",
    wiki: "http://www.serebii.net/attackdex-sm/instruct.shtml"
};

var laser_focus = {
    name: "Laser Focus",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "User's next attack is guaranteed to result in a critical hit.",
    wiki: "http://www.serebii.net/attackdex-sm/laserfocus.shtml"
};

var leafage = {
    name: "Leafage",
    type: "Grass",
    cat: "Physical",
    power: 40,
    pp: 40,
    acc: 100,
    effect: "Strikes opponent with leaves.",
    wiki: "http://www.serebii.net/attackdex-sm/leafage.shtml"
};

var liquidation = {
    name: "Liquidation",
    type: "Water",
    cat: "Physical",
    power: 85,
    pp: 10,
    acc: 100,
    effect: "The user slams into the target using a full-force blast of water. This may also lower the target’s Defense stat.",
    wiki: "http://www.serebii.net/attackdex-sm/liquidation.shtml"
};

var lunge = {
    name: "Lunge",
    type: "Bug",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "The user makes a lunge at the target, attacking with full force. This also lowers the target’s Attack stat.",
    wiki: "http://www.serebii.net/attackdex-sm/lunge.shtml"
};

var malicious_moonsault = {
    name: "Malicious Moonsault",
    type: "Dark",
    cat: "Physical",
    power: 180,
    pp: 1,
    acc: -1,
    effect: "Incineroar-exclusive Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/maliciousmoonsault.shtml"
};

var moongeist_beam = {
    name: "Moongeist Beam",
    type: "Ghost",
    cat: "Special",
    power: 100,
    pp: 5,
    acc: 100,
    effect: "Ignores the target's ability.",
    wiki: "http://www.serebii.net/attackdex-sm/moongeistbeam.shtml"
};

var multi_attack = {
    name: "Multi-Attack",
    type: "Normal",
    cat: "Physical",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "Type matches user's current type.",
    wiki: "http://www.serebii.net/attackdex-sm/multi-attack.shtml"
};

var natures_madness = {
    name: "Nature's Madness",
    type: "Fairy",
    cat: "Special",
    power: -1,
    pp: 10,
    acc: 90,
    effect: "Halves the foe's HP.",
    wiki: "http://www.serebii.net/attackdex-sm/nature'smadness.shtml"
};

var never_ending_nightmare = {
    name: "Never-ending Nightmare",
    type: "Ghost",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Ghost type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/never-endingnightmare.shtml"
};

var oceanic_operetta = {
    name: "Oceanic Operetta",
    type: "Water",
    cat: "Special",
    power: 195,
    pp: 1,
    acc: -1,
    effect: "Primarina-exclusive Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/oceanicoperetta.shtml"
};

var pollen_puff = {
    name: "Pollen Puff",
    type: "Bug",
    cat: "Special",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "The user attacks the enemy with a pollen puff that explodes. If the target is an ally, it gives the ally a pollen puff that restores its HP instead.",
    wiki: "http://www.serebii.net/attackdex-sm/pollenpuff.shtml"
};

var power_trip = {
    name: "Power Trip",
    type: "Dark",
    cat: "Physical",
    power: 20,
    pp: 10,
    acc: 100,
    effect: "The user boasts its strength and attacks the target. The more the user’s stats are raised, the greater the move’s power.",
    wiki: "http://www.serebii.net/attackdex-sm/powertrip.shtml"
};

var prismatic_laser = {
    name: "Prismatic Laser",
    type: "Psychic",
    cat: "Special",
    power: 160,
    pp: 10,
    acc: 100,
    effect: "The user shoots powerful lasers using the power of a prism. The user can’t move on the next turn.",
    wiki: "http://www.serebii.net/attackdex-sm/prismaticlaser.shtml"
};

var psychic_fangs = {
    name: "Psychic Fangs",
    type: "Psychic",
    cat: "Physical",
    power: 85,
    pp: 10,
    acc: 100,
    effect: "The user bites the target with its psychic capabilities. This can also destroy Light Screen and Reflect.",
    wiki: "http://www.serebii.net/attackdex-sm/psychicfangs.shtml"
};

var psychic_terrain = {
    name: "Psychic Terrain",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Prevents priority moves from being used for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-sm/psychicterrain.shtml"
};

var pulverizing_pancake = {
    name: "Pulverizing Pancake",
    type: "Normal",
    cat: "Physical",
    power: 210,
    pp: 1,
    acc: -1,
    effect: "Snorlax-exclusive Normal type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/pulverizingpancake.shtml"
};

var purify = {
    name: "Purify",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "The user heals the target’s status condition. If the move succeeds, it also restores the user’s own HP.",
    wiki: "http://www.serebii.net/attackdex-sm/purify.shtml"
};

var revelation_dance = {
    name: "Revelation Dance",
    type: "Normal",
    cat: "Special",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "Type changes based on Oricorio's form.",
    wiki: "http://www.serebii.net/attackdex-sm/revelationdance.shtml"
};

var savage_spin_out = {
    name: "Savage Spin-out",
    type: "Bug",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Bug type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/savagespin-out.shtml"
};

var shadow_bone = {
    name: "Shadow Bone",
    type: "Ghost",
    cat: "Physical",
    power: 85,
    pp: 10,
    acc: 100,
    effect: "The user attacks by beating the target with a bone that contains a spirit. This may also lower the target’s Defense stat.",
    wiki: "http://www.serebii.net/attackdex-sm/shadowbone.shtml"
};

var shattered_psyche = {
    name: "Shattered Psyche",
    type: "Psychic",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Psychic type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/shatteredpsyche.shtml"
};

var shell_trap = {
    name: "Shell Trap",
    type: "Fire",
    cat: "Special",
    power: 150,
    pp: 5,
    acc: 100,
    effect: "Deals more damage to opponent if hit by a Physical move.",
    wiki: "http://www.serebii.net/attackdex-sm/shelltrap.shtml"
};

var shore_up = {
    name: "Shore Up",
    type: "Ground",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "The user regains up to half of its max HP. It restores more HP in a sandstorm.",
    wiki: "http://www.serebii.net/attackdex-sm/shoreup.shtml"
};

var sinister_arrow_raid = {
    name: "Sinister Arrow Raid",
    type: "Ghost",
    cat: "Physical",
    power: 180,
    pp: 1,
    acc: -1,
    effect: "Decidueye-exclusive Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/sinisterarrowraid.shtml"
};

var smart_strike = {
    name: "Smart Strike",
    type: "Steel",
    cat: "Physical",
    power: 70,
    pp: 10,
    acc: -1,
    effect: "The user stabs the target with a sharp horn. This attack never misses.",
    wiki: "http://www.serebii.net/attackdex-sm/smartstrike.shtml"
};

var solar_blade = {
    name: "Solar Blade",
    type: "Grass",
    cat: "Physical",
    power: 125,
    pp: 10,
    acc: 100,
    effect: "Charges on first turn, attacks on second.",
    wiki: "http://www.serebii.net/attackdex-sm/solarblade.shtml"
};

var soul_stealing_7_star_strike = {
    name: "Soul-Stealing 7-Star Strike",
    type: "Ghost",
    cat: "Physical",
    power: 195,
    pp: 1,
    acc: -1,
    effect: "Marshadow-exclusive Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/soul-stealing7-starstrike.shtml"
};

var sparkling_aria = {
    name: "Sparkling Aria",
    type: "Water",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "Heals the burns of its target.",
    wiki: "http://www.serebii.net/attackdex-sm/sparklingaria.shtml"
};

var spectral_thief = {
    name: "Spectral Thief",
    type: "Ghost",
    cat: "Physical",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "The user hides in the target’s shadow, steals the target’s stat boosts, and then attacks.",
    wiki: "http://www.serebii.net/attackdex-sm/spectralthief.shtml"
};

var speed_swap = {
    name: "Speed Swap",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "The user exchanges Speed stats with the target.",
    wiki: "http://www.serebii.net/attackdex-sm/speedswap.shtml"
};

var spirit_shackle = {
    name: "Spirit Shackle",
    type: "Ghost",
    cat: "Physical",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "Prevents the opponent switching out.",
    wiki: "http://www.serebii.net/attackdex-sm/spiritshackle.shtml"
};

var spotlight = {
    name: "Spotlight",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "The user shines a spotlight on the target so that only the target will be attacked during the turn.",
    wiki: "http://www.serebii.net/attackdex-sm/spotlight.shtml"
};

var stoked_sparksurfer = {
    name: "Stoked Sparksurfer",
    type: "Electric",
    cat: "Special",
    power: 175,
    pp: 1,
    acc: -1,
    effect: "Raichu-exclusive Electric type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/stokedsparksurfer.shtml"
};

var stomping_tantrum = {
    name: "Stomping Tantrum",
    type: "Ground",
    cat: "Physical",
    power: 75,
    pp: 10,
    acc: 100,
    effect: "Driven by frustration, the user attacks the target. If the user’s previous move has failed, the power of this move doubles.",
    wiki: "http://www.serebii.net/attackdex-sm/stompingtantrum.shtml"
};

var strength_sap = {
    name: "Strength Sap",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "The user restores its HP by the same amount as the target’s Attack stat. It also lowers the target’s Attack stat.",
    wiki: "http://www.serebii.net/attackdex-sm/strengthsap.shtml"
};

var subzero_slammer = {
    name: "Subzero Slammer",
    type: "Ice",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Ice type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/subzeroslammer.shtml"
};

var sunsteel_strike = {
    name: "Sunsteel Strike",
    type: "Steel",
    cat: "Physical",
    power: 100,
    pp: 5,
    acc: 100,
    effect: "Ignores the target's ability.",
    wiki: "http://www.serebii.net/attackdex-sm/sunsteelstrike.shtml"
};

var supersonic_skystrike = {
    name: "Supersonic Skystrike",
    type: "Flying",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Flying type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/supersonicskystrike.shtml"
};

var tearful_look = {
    name: "Tearful Look",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "The user gets teary eyed to make the target lose its combative spirit. This lowers the target’s Attack and Sp. Atk stats.",
    wiki: "http://www.serebii.net/attackdex-sm/tearfullook.shtml"
};

var tectonic_rage = {
    name: "Tectonic Rage",
    type: "Ground",
    cat: "N/A",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Ground type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/tectonicrage.shtml"
};

var throat_chop = {
    name: "Throat Chop",
    type: "Dark",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "Prevents use of sound moves for two turns.",
    wiki: "http://www.serebii.net/attackdex-sm/throatchop.shtml"
};

var toxic_thread = {
    name: "Toxic Thread",
    type: "Poison",
    cat: "N/A",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "The user shoots poisonous threads to poison the target and lower the target’s Speed stat.",
    wiki: "http://www.serebii.net/attackdex-sm/toxicthread.shtml"
};

var trop_kick = {
    name: "Trop Kick",
    type: "Grass",
    cat: "Physical",
    power: 70,
    pp: 15,
    acc: 100,
    effect: "Lowers opponent's Attack.",
    wiki: "http://www.serebii.net/attackdex-sm/tropkick.shtml"
};

var twinkle_tackle = {
    name: "Twinkle Tackle",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Fairy type Z-Move.",
    wiki: "http://www.serebii.net/attackdex-sm/twinkletackle.shtml"
};

var zing_zap = {
    name: "Zing Zap",
    type: "Electric",
    cat: "Physical",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "A strong electric blast crashes down on the target, giving it an electric shock. This may also make the target flinch.",
    wiki: "http://www.serebii.net/attackdex-sm/zingzap.shtml"
};
