var mons = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "alolan rattata", "alolan raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "alolan raichu", "sandshrew", "sandslash", "alolan sandshrew", "alolan sandslash", "nidoranf", "nidorina", "nidoqueen", "nidoranm", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "alolan vulpix", "alolan ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "alolan diglett", "alolan dugtrio", "meowth", "persian", "alolan meowth", "alolan persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "alolan geodude", "alolan graveler", "alolan golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "alolan grimer", "alolan muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "alolan exeggutor", "cubone", "marowak", "alolan marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion", "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi", "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos", "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking", "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress", "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish", "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring", "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid", "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom", "kingdra", "phanpy", "donphan", "porygon2", "stantler", "smeargle", "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank", "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar", "tyranitar", "lugia", "ho_oh", "celebi", "treecko", "grovyle", "sceptile", "torchic", "combusken", "blaziken", "mudkip", "marshtomp", "swampert", "poochyena", "mightyena", "zigzagoon", "linoone", "wurmple", "silcoon", "beautifly", "cascoon", "dustox", "lotad", "lombre", "ludicolo", "seedot", "nuzleaf", "shiftry", "taillow", "swellow", "wingull", "pelipper", "ralts", "kirlia", "gardevoir", "surskit", "masquerain", "shroomish", "breloom", "slakoth", "vigoroth", "slaking", "nincada", "ninjask", "shedinja", "whismur", "loudred", "exploud", "makuhita", "hariyama", "azurill", "nosepass", "skitty", "delcatty", "sableye", "mawile", "aron", "lairon", "aggron", "meditite", "medicham", "electrike", "manectric", "plusle", "minun", "volbeat", "illumise", "roselia", "gulpin", "swalot", "carvanha", "sharpedo", "wailmer", "wailord", "numel", "camerupt", "torkoal", "spoink", "grumpig", "spinda", "trapinch", "vibrava", "flygon", "cacnea", "cacturne", "swablu", "altaria", "zangoose", "seviper", "lunatone", "solrock", "barboach", "whiscash", "corphish", "crawdaunt", "baltoy", "claydol", "lileep", "cradily", "anorith", "armaldo", "feebas", "milotic", "castform", "castform sunny", "castform rainy", "castform snowy", "kecleon", "shuppet", "banette", "duskull", "dusclops", "tropius", "chimecho", "absol", "wynaut", "snorunt", "glalie", "spheal", "sealeo", "walrein", "clamperl", "huntail", "gorebyss", "relicanth", "luvdisc", "bagon", "shelgon", "salamence", "beldum", "metang", "metagross", "regirock", "regice", "registeel", "latias", "latios", "kyogre", "groudon", "rayquaza", "jirachi", "deoxys", "turtwig", "grotle", "torterra", "chimchar", "monferno", "infernape", "piplup", "prinplup", "empoleon", "starly", "staravia", "staraptor", "bidoof", "bibarel", "kricketot", "kricketune", "shinx", "luxio", "luxray", "budew", "roserade", "cranidos", "rampardos", "shieldon", "bastiodon", "burmy", "wormadam", "wormadam sandy", "wormadam trash", "mothim", "combee", "vespiquen", "pachirisu", "buizel", "floatzel", "cherubi", "cherrim", "shellos", "gastrodon", "ambipom", "drifloon", "drifblim", "buneary", "lopunny", "mismagius", "honchkrow", "glameow", "purugly", "chingling", "stunky", "skuntank", "bronzor", "bronzong", "bonsly", "mime jr", "happiny", "chatot", "spiritomb", "gible", "gabite", "garchomp", "munchlax", "riolu", "lucario", "hippopotas", "hippowdon", "skorupi", "drapion", "croagunk", "toxicroak", "carnivine", "finneon", "lumineon", "mantyke", "snover", "abomasnow", "weavile", "magnezone", "lickilicky", "rhyperior", "tangrowth", "electivire", "magmortar", "togekiss", "yanmega", "leafeon", "glaceon", "gliscor", "mamoswine", "porygon_z", "gallade", "probopass", "dusknoir", "froslass", "rotom", "rotom heat", "rotom wash", "rotom mow", "rotom fan", "rotom frost", "uxie", "mesprit", "azelf", "dialga", "palkia", "heatran", "regigigas", "giratina", "giratina origin", "cresselia", "phione", "manaphy", "darkrai", "shaymin", "shaymin sky", "arceus", "victini", "snivy", "servine", "serperior", "tepig", "pignite", "emboar", "oshawott", "dewott", "samurott", "patrat", "watchog", "lillipup", "herdier", "stoutland", "purrloin", "liepard", "pansage", "simisage", "pansear", "simisear", "panpour", "simipour", "munna", "musharna", "pidove", "tranquill", "unfezant", "blitzle", "zebstrika", "roggenrola", "boldore", "gigalith", "woobat", "swoobat", "drilbur", "excadrill", "audino", "timburr", "gurdurr", "conkeldurr", "tympole", "palpitoad", "seismitoad", "throh", "sawk", "sewaddle", "swadloon", "leavanny", "venipede", "whirlipede", "scolipede", "cottonee", "whimsicott", "petilil", "lilligant", "basculin", "basculin blue", "sandile", "krokorok", "krookodile", "darumaka", "darmanitan", "darmanitan zen", "maractus", "dwebble", "crustle", "scraggy", "scrafty", "sigilyph", "yamask", "cofagrigus", "tirtouga", "carracosta", "archen", "archeops", "trubbish", "garbodor", "zorua", "zoroark", "minccino", "cinccino", "gothita", "gothorita", "gothitelle", "solosis", "duosion", "reuniclus", "ducklett", "swanna", "vanillite", "vanillish", "vanilluxe", "deerling", "sawsbuck", "emolga", "karrablast", "escavalier", "foongus", "amoonguss", "frillish", "jellicent", "alomomola", "joltik", "galvantula", "ferroseed", "ferrothorn", "klink", "klang", "klinklang", "tynamo", "eelektrik", "eelektross", "elgyem", "beheeyem", "litwick", "lampent", "chandelure", "axew", "fraxure", "haxorus", "cubchoo", "beartic", "cryogonal", "shelmet", "accelgor", "stunfisk", "mienfoo", "mienshao", "druddigon", "golett", "golurk", "pawniard", "bisharp", "bouffalant", "rufflet", "braviary", "vullaby", "mandibuzz", "heatmor", "durant", "deino", "zweilous", "hydreigon", "larvesta", "volcarona", "cobalion", "terrakion", "virizion", "tornadus", "tornadus therian", "thundurus", "thundurus therian", "reshiram", "zekrom", "landorus", "landorus therian", "kyurem", "white kyurem", "black kyurem", "keldeo", "meloetta", "meloetta pirouette", "genesect", "chespin", "quilladin", "chesnaught", "fennekin", "braixen", "delphox", "froakie", "frogadier", "greninja", "bunnelby", "diggersby", "fletchling", "fletchinder", "talonflame", "scatterbug", "spewpa", "vivillon", "litleo", "pyroar", "flabebe", "floette", "florges", "skiddo", "gogoat", "pancham", "pangoro", "furfrou", "espurr", "meowstic", "honedge", "doublade", "aegislash", "spritzee", "aromatisse", "swirlix", "slurpuff", "inkay", "malamar", "binacle", "barbaracle", "skrelp", "dragalge", "clauncher", "clawitzer", "helioptile", "heliolisk", "tyrunt", "tyrantrum", "amaura", "aurorus", "sylveon", "hawlucha", "dedenne", "carbink", "goomy", "sliggoo", "goodra", "klefki", "phantump", "trevenant", "pumpkaboo", "gourgeist", "bergmite", "avalugg", "noibat", "noivern", "xerneas", "yveltal", "zygarde", "diancie", "hoopa", "hoopa unbound", "volcanion", "mega venusaur", "mega charizard x", "mega charizard y", "mega blastoise", "mega alakazam", "mega gengar", "mega kangaskhan", "mega pinsir", "mega gyarados", "mega aerodactyl", "mega mewtwo x", "mega mewtwo y", "mega ampharos", "mega scizor", "mega heracross", "mega houndoom", "mega tyranitar", "mega blaziken", "mega gardevoir", "mega mawile", "mega aggron", "mega medicham", "mega manectric", "mega banette", "mega absol", "mega garchomp", "mega lucario", "mega abomasnow", "mega beedrill", "mega pidgeot", "mega slowbro", "mega steelix", "mega sceptile", "mega swampert", "mega sableye", "mega sharpedo", "mega camerupt", "mega altaria", "mega glalie", "mega salamence", "mega metagross", "mega latias", "mega latios", "mega rayquaza", "mega lopunny", "mega gallade", "mega audino", "mega diancie", "rowlet", "dartrix", "decidueye", "litten", "torracat", "incineroar", "popplio", "brionne", "primarina", "pikipek", "trumbeak", "toucannon", "yungoos", "gumshoos", "grubbin", "charjabug", "vikavolt", "crabrawler", "crabominable", "oricorio", "cutiefly", "ribombee", "rockruff", "lycanroc", "lycanroc midnight", "wishiwashi", "mareanie", "toxapex", "mudbray", "mudsdale", "dewpider", "araquanid", "fomantis", "lurantis", "morelull", "shiinotic", "salandit", "salazzle", "stufful", "bewear", "bounsweet", "steenee", "tsareena", "comfey", "oranguru", "passimian", "wimpod", "golisopod", "sandygast", "palossand", "pyukumuku", "type null", "silvally", "minior", "komala", "turtonator", "togedemaru", "mimikyu", "bruxish", "drampa", "dhelmise", "jangmo_o", "hakamo_o", "kommo_o", "tapu koko", "tapu lele", "tapu bulu", "tapu fini", "cosmog", "cosmoem", "solgaleo", "lunala", "nihilego", "buzzwole", "pheromosa", "xurkitree", "celesteela", "kartana", "guzzlord", "necrozma", "magearna", "marshadow"];
var moves = ["pound", "karate chop", "double slap", "comet punch", "mega punch", "pay day", "fire punch", "ice punch", "thunder punch", "scratch", "vice grip", "guillotine", "razor wind", "swords dance", "cut", "gust", "wing attack", "whirlwind", "fly", "bind", "slam", "vine whip", "stomp", "double kick", "mega kick", "jump kick", "rolling kick", "sand attack", "headbutt", "horn attack", "fury attack", "horn drill", "tackle", "body slam", "wrap", "take down", "thrash", "double_edge", "tail whip", "poison sting", "twineedle", "pin missile", "leer", "bite", "growl", "roar", "sing", "supersonic", "sonic boom", "disable", "acid", "ember", "flamethrower", "mist", "water gun", "hydro pump", "surf", "ice beam", "blizzard", "psybeam", "bubble beam", "aurora beam", "hyper beam", "peck", "drill peck", "submission", "low kick", "counter", "seismic toss", "strength", "absorb", "mega drain", "leech seed", "growth", "razor leaf", "solar beam", "poison powder", "stun spore", "sleep powder", "petal dance", "string shot", "dragon rage", "fire spin", "thunder shock", "thunderbolt", "thunder wave", "thunder", "rock throw", "earthquake", "fissure", "dig", "toxic", "confusion", "psychic", "hypnosis", "meditate", "agility", "quick attack", "rage", "teleport", "night shade", "mimic", "screech", "double team", "recover", "harden", "minimize", "smokescreen", "confuse ray", "withdraw", "defense curl", "barrier", "light screen", "haze", "reflect", "focus energy", "bide", "metronome", "mirror move", "self_destruct", "egg bomb", "lick", "smog", "sludge", "bone club", "fire blast", "waterfall", "clamp", "swift", "skull bash", "spike cannon", "constrict", "amnesia", "kinesis", "soft_boiled", "high jump kick", "glare", "dream eater", "poison gas", "barrage", "leech life", "lovely kiss", "sky attack", "transform", "bubble", "dizzy punch", "spore", "flash", "psywave", "splash", "acid armor", "crabhammer", "explosion", "fury swipes", "bonemerang", "rest", "rock slide", "hyper fang", "sharpen", "conversion", "tri attack", "super fang", "slash", "substitute", "struggle", "sketch", "triple kick", "thief", "spider web", "mind reader", "nightmare", "flame wheel", "snore", "curse", "flail", "conversion 2", "aeroblast", "cotton spore", "reversal", "spite", "powder snow", "protect", "mach punch", "scary face", "feint attack", "sweet kiss", "belly drum", "sludge bomb", "mud_slap", "octazooka", "spikes", "zap cannon", "foresight", "destiny bond", "perish song", "icy wind", "detect", "bone rush", "lock_on", "outrage", "sandstorm", "giga drain", "endure", "charm", "rollout", "false swipe", "swagger", "milk drink", "spark", "fury cutter", "steel wing", "mean look", "attract", "sleep talk", "heal bell", "_return", "present", "frustration", "safeguard", "pain split", "sacred fire", "magnitude", "dynamic punch", "megahorn", "dragon breath", "baton pass", "encore", "pursuit", "rapid spin", "sweet scent", "iron tail", "metal claw", "vital throw", "morning sun", "synthesis", "moonlight", "hidden power", "cross chop", "twister", "rain dance", "sunny day", "crunch", "mirror coat", "psych up", "extreme speed", "ancient power", "shadow ball", "future sight", "rock smash", "whirlpool", "beat up", "fake out", "uproar", "stockpile", "spit up", "swallow", "heat wave", "hail", "torment", "flatter", "will_o_wisp", "memento", "facade", "focus punch", "smelling salts", "follow me", "nature power", "charge", "taunt", "helping hand", "trick", "role play", "wish", "assist", "ingrain", "superpower", "magic coat", "recycle", "revenge", "brick break", "yawn", "knock off", "endeavor", "eruption", "skill swap", "imprison", "refresh", "grudge", "snatch", "secret power", "dive", "arm thrust", "camouflage", "tail glow", "luster purge", "mist ball", "feather dance", "teeter dance", "blaze kick", "mud sport", "ice ball", "needle arm", "slack off", "hyper voice", "poison fang", "crush claw", "blast burn", "hydro cannon", "meteor mash", "astonish", "weather ball", "aromatherapy", "fake tears", "air cutter", "overheat", "odor sleuth", "rock tomb", "silver wind", "metal sound", "grass whistle", "tickle", "cosmic power", "water spout", "signal beam", "shadow punch", "extrasensory", "sky uppercut", "sand tomb", "sheer cold", "muddy water", "bullet seed", "aerial ace", "icicle spear", "iron defense", "block", "howl", "dragon claw", "frenzy plant", "bulk up", "bounce", "mud shot", "poison tail", "covet", "volt tackle", "magical leaf", "water sport", "calm mind", "leaf blade", "dragon dance", "rock blast", "shock wave", "water pulse", "doom desire", "psycho boost", "roost", "gravity", "miracle eye", "wake_up slap", "hammer arm", "gyro ball", "healing wish", "brine", "natural gift", "feint", "pluck", "tailwind", "acupressure", "metal burst", "u_turn", "close combat", "payback", "assurance", "embargo", "fling", "psycho shift", "trump card", "heal block", "wring out", "power trick", "gastro acid", "lucky chant", "me first", "copycat", "power swap", "guard swap", "punishment", "last resort", "worry seed", "sucker punch", "toxic spikes", "heart swap", "aqua ring", "magnet rise", "flare blitz", "force palm", "aura sphere", "rock polish", "poison jab", "dark pulse", "night slash", "aqua tail", "seed bomb", "air slash", "x_scissor", "bug buzz", "dragon pulse", "dragon rush", "power gem", "drain punch", "vacuum wave", "focus blast", "energy ball", "brave bird", "earth power", "switcheroo", "giga impact", "nasty plot", "bullet punch", "avalanche", "ice shard", "shadow claw", "thunder fang", "ice fang", "fire fang", "shadow sneak", "mud bomb", "psycho cut", "zen headbutt", "mirror shot", "flash cannon", "rock climb", "defog", "trick room", "draco meteor", "discharge", "lava plume", "leaf storm", "power whip", "rock wrecker", "cross poison", "gunk shot", "iron head", "magnet bomb", "stone edge", "captivate", "stealth rock", "grass knot", "chatter", "judgment", "bug bite", "charge beam", "wood hammer", "aqua jet", "attack order", "defend order", "heal order", "head smash", "double hit", "roar of time", "spacial rend", "lunar dance", "crush grip", "magma storm", "dark void", "seed flare", "ominous wind", "shadow force", "hone claws", "wide guard", "guard split", "power split", "wonder room", "psyshock", "venoshock", "autotomize", "rage powder", "telekinesis", "magic room", "smack down", "storm throw", "flame burst", "sludge wave", "quiver dance", "heavy slam", "synchronoise", "electro ball", "soak", "flame charge", "coil", "low sweep", "acid spray", "foul play", "simple beam", "entrainment", "after you", "round", "echoed voice", "chip away", "clear smog", "stored power", "quick guard", "ally switch", "scald", "shell smash", "heal pulse", "hex", "sky drop", "shift gear", "circle throw", "incinerate", "quash", "acrobatics", "reflect type", "retaliate", "final gambit", "bestow", "inferno", "water pledge", "fire pledge", "grass pledge", "volt switch", "struggle bug", "bulldoze", "frost breath", "dragon tail", "work up", "electroweb", "wild charge", "drill run", "dual chop", "heart stamp", "horn leech", "sacred sword", "razor shell", "heat crash", "leaf tornado", "steamroller", "cotton guard", "night daze", "psystrike", "tail slap", "hurricane", "head charge", "gear grind", "searing shot", "techno blast", "relic song", "secret sword", "glaciate", "bolt strike", "blue flare", "fiery dance", "freeze shock", "ice burn", "snarl", "icicle crash", "v_create", "fusion flare", "fusion bolt", "flying press", "mat block", "belch", "rototiller", "sticky web", "fell stinger", "phantom force", "trick_or_treat", "noble roar", "ion deluge", "parabolic charge", "forests curse", "petal blizzard", "freeze_dry", "disarming voice", "parting shot", "topsy_turvy", "draining kiss", "crafty shield", "flower shield", "grassy terrain", "misty terrain", "electrify", "play rough", "fairy wind", "moonblast", "boomburst", "fairy lock", "kings shield", "play nice", "confide", "diamond storm", "steam eruption", "hyperspace hole", "water shuriken", "mystical fire", "spiky shield", "aromatic mist", "eerie impulse", "venom drench", "powder", "geomancy", "magnetic flux", "happy hour", "electric terrain", "dazzling gleam", "celebrate", "hold hands", "baby_doll eyes", "nuzzle", "hold back", "infestation", "power_up punch", "oblivion wing", "thousand arrows", "thousand waves", "lands wrath", "light of ruin", "origin pulse", "precipice blades", "dragon ascent", "hyperspace fury", "ten million volt thunderbolt", "accelerock", "acid downpour", "all_out pummeling", "anchor shot", "aurora veil", "baneful bunker", "beak blast", "black hole eclipse", "bloom doom", "breakneck blitz", "brutal swing", "burn up", "catastropika", "clanging scales", "continental crush", "core enforcer", "corkscrew crash", "darkest lariat", "devastating drake", "dragon hammer", "extreme evoboost", "fire lash", "first impression", "fleur cannon", "floral healing", "gear up", "genesis supernova", "gigavolt havoc", "guardian of alola", "high horsepower", "hydro vortex", "ice hammer", "inferno overdrive", "instruct", "laser focus", "leafage", "liquidation", "lunge", "malicious moonsault", "moongeist beam", "multi_attack", "natures madness", "never_ending nightmare", "oceanic operetta", "pollen puff", "power trip", "prismatic laser", "psychic fangs", "psychic terrain", "pulverizing pancake", "purify", "revelation dance", "savage spin_out", "shadow bone", "shattered psyche", "shell trap", "shore up", "sinister arrow raid", "smart strike", "solar blade", "soul_stealing 7_star strike", "sparkling aria", "spectral thief", "speed swap", "spirit shackle", "spotlight", "stoked sparksurfer", "stomping tantrum", "strength sap", "subzero slammer", "sunsteel strike", "supersonic skystrike", "tearful look", "tectonic rage", "throat chop", "toxic thread", "trop kick", "twinkle tackle", "zing zap"];
var items = ["ability capsule", "ability urge", "abomasite", "absolite", "absorb bulb", "adamant orb", "adventure rules", "aerodactylite", "aggronite", "aguav berry", "air balloon", "alakazite", "altarianite", "ampharosite", "amulet coin", "antidote", "apicot berry", "armor fossil", "aspear berry", "audinite", "awakening", "babiri berry", "balmmushroom", "banettite", "beedrillite", "belue berry", "berry juice", "big mushroom", "big nugget", "big pearl", "big root", "binding band", "black belt", "black flute", "black sludge", "blackglasses", "blastoisinite", "blazikenite", "blk apricorn", "blu apricorn", "blue flute", "blue scarf", "blue shard", "bluk berry", "brightpowder", "bug gem", "burn drive", "burn heal", "calcium", "cameruptite", "carbos", "casteliacone", "cell battery", "charcoal", "charizardite x", "charizardite y", "charti berry", "cheri berry", "cherish ball", "chesto berry", "chilan berry", "chill drive", "choice band", "choice scarf", "choice specs", "chople berry", "claw fossil", "cleanse tag", "clever wing", "coba berry", "colbur berry", "colress machine", "comet shard", "cornn berry", "cover fossil", "custap berry", "damp mulch", "damp rock", "dark gem", "dawn stone", "deepseascale", "deepseatooth", "destiny knot", "diancite", "dire hit", "dire hit 2", "dire hit 3", "dive ball", "dna splicers", "dome fossil", "douse drive", "draco plate", "dragon fang", "dragon gem", "dragon scale", "dread plate", "dream ball", "dropped item", "dubious disc", "durin berry", "dusk ball", "dusk stone", "earth plate", "eject button", "electirizer", "electric gem", "elevator key", "elixir", "energy root", "energypowder", "enigma berry", "escape rope", "ether", "everstone", "eviolite", "exp share", "expert belt", "fairy gem", "fast ball", "fighting gem", "figy berry", "fire gem", "fire stone", "fist plate", "flame orb", "flame plate", "float stone", "fluffy tail", "flying gem", "focus band", "focus sash", "fresh water", "friend ball", "full heal", "full incense", "full restore", "galladite", "ganlon berry", "garchompite", "gardevoirite", "gengarite", "genius wing", "ghost gem", "glalitite", "gooey mulch", "grass gem", "great ball", "green scarf", "green shard", "grepa berry", "grip claw", "griseous orb", "grn apricorn", "ground gem", "growth mulch", "grubby hanky", "guard spec", "gyaradosite", "haban berry", "hard stone", "heal ball", "heal powder", "health wing", "heart scale", "heat rock", "heavy ball", "helix fossil", "heracronite", "hm01", "hm02", "hm03", "hm04", "hm05", "hm06", "hm07", "hm08", "holo caster", "hondew berry", "honey", "honor of kalos", "houndoominite", "hp up", "hyper potion", "iapapa berry", "ice gem", "ice heal", "icicle plate", "icy rock", "insect plate", "intriguing stone", "iron", "iron ball", "iron plate", "item drop", "item urge", "jaboca berry", "kangaskhanite", "kasib berry", "kebia berry", "kelpsy berry", "kings rock", "lagging tail", "lansat berry", "latiasite", "latiosite", "lava cookie", "lax incense", "leaf stone", "leftovers", "lemonade", "lens case", "leppa berry", "level ball", "liechi berry", "life orb", "light ball", "light clay", "looker ticket", "lopunnite", "love ball", "lucarionite", "luck incense", "lucky egg", "lucky punch", "lum berry", "lure ball", "lustrous orb", "luxury ball", "macho brace", "magmarizer", "magnet", "mago berry", "magost berry", "manectite", "master ball", "mawilite", "max elixir", "max ether", "max potion", "max repel", "max revive", "meadow plate", "medal box", "medichamite", "mental herb", "metagrossite", "metal coat", "metal powder", "metronome", "mewtwonite x", "mewtwonite y", "micle berry", "mind plate", "miracle seed", "moomoo milk", "moon ball", "moon stone", "muscle band", "muscle wing", "mystic water", "nanab berry", "nest ball", "net ball", "nevermeltice", "nomel berry", "normal gem", "nugget", "occa berry", "odd incense", "odd keystone", "old amber", "old gateau", "oran berry", "oval charm", "oval stone", "pamtre berry", "park ball", "parlyz heal", "pass orb", "passho berry", "payapa berry", "pearl", "pearl string", "pecha berry", "permit", "persim berry", "petaya berry", "pidgeotite", "pinap berry", "pink scarf", "pinsirite", "pixie plate", "plasma card", "plume fossil", "pnk apricorn", "poison barb", "poison gem", "poké ball", "poké doll", "poké toy", "pomeg berry", "potion", "power anklet", "power band", "power belt", "power bracer", "power herb", "power lens", "power plant pass", "power weight", "pp max", "pp up", "premier ball", "pretty wing", "prism scale", "profs letter", "protector", "protein", "psychic gem", "pure incense", "qualot berry", "quick ball", "quick claw", "quick powder", "rabuta berry", "rare bone", "rare candy", "rawst berry", "razor claw", "razor fang", "razz berry", "reaper cloth", "red apricorn", "red card", "red flute", "red scarf", "red shard", "relic band", "relic copper", "relic crown", "relic gold", "relic silver", "relic statue", "relic vase", "repeat ball", "repel", "reset urge", "resist wing", "reveal glass", "revival herb", "revive", "rindo berry", "ring target", "rock gem", "rock incense", "rocky helmet", "roller skates", "root fossil", "rose incense", "rowap berry", "sablenite", "sacred ash", "safari ball", "salac berry", "salamencite", "sceptilite", "scizorite", "scope lens", "sea incense", "sharp beak", "sharpedonite", "shed shell", "shell bell", "shiny charm", "shiny stone", "shoal salt", "shoal shell", "shock drive", "shuca berry", "silk scarf", "silverpowder", "sitrus berry", "skull fossil", "sky plate", "slowbronite", "smoke ball", "smooth rock", "soda pop", "soft sand", "soothe bell", "soul dew", "spell tag", "spelon berry", "splash plate", "spooky plate", "sport ball", "sprinklotad", "stable mulch", "star piece", "stardust", "starf berry", "steel gem", "steelixite", "stick", "sticky barb", "stone plate", "sun stone", "super potion", "super repel", "swampertite", "sweet heart", "swift wing", "tamato berry", "tanga berry", "thick club", "thunderstone", "timer ball", "tinymushroom", "tm01", "tm02", "tm03", "tm04", "tm05", "tm06", "tm07", "tm08", "tm09", "tm10", "tm100", "tm11", "tm12", "tm13", "tm14", "tm15", "tm16", "tm17", "tm18", "tm19", "tm20", "tm21", "tm22", "tm23", "tm24", "tm25", "tm26", "tm27", "tm28", "tm29", "tm30", "tm31", "tm32", "tm33", "tm34", "tm35", "tm36", "tm37", "tm38", "tm39", "tm40", "tm41", "tm42", "tm43", "tm44", "tm45", "tm46", "tm47", "tm48", "tm49", "tm50", "tm51", "tm52", "tm53", "tm54", "tm55", "tm56", "tm57", "tm58", "tm59", "tm60", "tm61", "tm62", "tm63", "tm64", "tm65", "tm66", "tm67", "tm68", "tm69", "tm70", "tm71", "tm72", "tm73", "tm74", "tm75", "tm76", "tm77", "tm78", "tm79", "tm80", "tm81", "tm82", "tm83", "tm84", "tm85", "tm86", "tm87", "tm88", "tm89", "tm90", "tm91", "tm92", "tm93", "tm94", "tm95", "tm96", "tm97", "tm98", "tm99", "tmv pass", "toxic orb", "toxic plate", "twistedspoon", "tyranitarite", "ultra ball", "up_grade", "venusaurite", "wacan berry", "water gem", "water stone", "watmel berry", "wave incense", "wepear berry", "white flute", "white herb", "wht apricorn", "wide lens", "wiki berry", "wise glasses", "x accuracy", "x accuracy 2", "x accuracy 3", "x accuracy 6", "x attack", "x attack 2", "x attack 3", "x attack 6", "x defend", "x defend 2", "x defend 3", "x defend 6", "x sp def", "x sp def 2", "x sp def 3", "x sp def 6", "x special", "x special 2", "x special 3", "x special 6", "x speed", "x speed 2", "x speed 3", "x speed 6", "yache berry", "yellow flute", "yellow scarf", "yellow shard", "ylw apricorn", "zap plate", "zinc", "zoom lens", "normalium z", "firium z", "waterium z", "electrium z", "grassium z", "icium z", "fightinium z", "poisonium z", "groundium z", "flyinium z", "psychium z", "buginium z", "rockium z", "ghostium z", "dragonium z", "darkinium z", "steelium z", "fairium z", "pikanium z", "bottle cap", "gold bottle cap", "z_ring", "decidium z", "incinium z", "primarium z", "tapunium z", "marshadium z", "aloraichium z", "snorlium z", "eevium z", "mewnium z", "normalium z", "firium z", "waterium z", "electrium z", "grassium z", "icium z", "fightinium z", "poisonium z", "groundium z", "flyinium z", "psychium z", "buginium z", "rockium z", "ghostium z", "dragonium z", "darkinium z", "steelium z", "fairium z", "pikanium z", "decidium z", "incinium z", "primarium z", "tapunium z", "marshadium z", "aloraichium z", "snorlium z", "eevium z", "mewnium z", "pikashunium z", "forage bag", "fishing rod", "professors mask", "festival ticket", "sparkling stone", "adrenaline orb", "zygarde cube", "ice stone", "ride pager", "beast ball", "big malasada", "red nectar", "yellow nectar", "pink nectar", "purple nectar", "sun flute", "moon flute", "enigmatic card", "terrain extender", "protective pads", "electric seed", "psychic seed", "misty seed", "grassy seed", "fighting memory", "flying memory", "poison memory", "ground memory", "rock memory", "bug memory", "ghost memory", "steel memory", "fire memory", "water memory", "grass memory", "electric memory", "psychic memory", "ice memory", "dragon memory", "dark memory", "fairy memory"];
var abilities = ["adaptability", "aerilate", "aftermath", "air lock", "analytic", "anger point", "anticipation", "arena trap", "aroma veil", "aura break", "bad dreams", "battery", "battle armor", "battle bond", "berserk", "big pecks", "blaze", "bulletproof", "cacophony", "cheek pouch", "chlorophyll", "clear body", "cloud nine", "color change", "comatose", "competitive", "compound eyes", "contrary", "corrosion", "cursed body", "cute charm", "damp", "dancer", "dark aura", "dazzling", "defeatist", "defiant", "delta stream", "desolate land", "disguise", "download", "drizzle", "drought", "dry skin", "early bird", "effect spore", "electric surge", "fairy aura", "filter", "flame body", "flare boost", "flash fire", "flower gift", "flower veil", "fluffy", "forecast", "forewarn", "friend guard", "frisk", "full metal body", "fur coat", "gale wings", "gluttony", "gooey", "grass pelt", "guts", "harvest", "healer", "heatproof", "heavy metal", "honey gather", "huge power", "hustle", "hydration", "hyper cutter", "ice body", "illuminate", "illusion", "immunity", "imposter", "innards out", "infiltrator", "inner focus", "insomnia", "intimidate", "iron barbs", "iron fist", "justified", "keen eye", "klutz", "leaf guard", "levitate", "light metal", "lightning rod", "limber", "liquid ooze", "magic bounce", "magic guard", "magician", "magma armor", "magnet pull", "marvel scale", "mega launcher", "minus", "mold breaker", "moody", "motor drive", "moxie", "multiscale", "multitype", "mummy", "natural cure", "no guard", "normalize", "oblivious", "overcoat", "overgrow", "own tempo", "parental bond", "pickpocket", "pickup", "pixilate", "plus", "poison heal", "poison point", "poison touch", "power construct", "prankster", "pressure", "primordial sea", "protean", "pure power", "queenly majesty", "quick feet", "rain dish", "rattled", "receiver", "reckless", "refrigerate", "regenerator", "rivalry", "rks system", "rock head", "rough skin", "run away", "sand force", "sand rush", "sand stream", "sand veil", "sap sipper", "schooling", "scrappy", "serene grace", "shadow shield", "shadow tag", "shed skin", "sheer force", "shell armor", "shield dust", "shields down", "simple", "skill link", "slow start", "sniper", "snow cloak", "snow warning", "solar power", "solid rock", "soul_heart", "soundproof", "speed boost", "stakeout", "stall", "stamina", "stance change", "static", "steadfast", "stench", "sticky hold", "storm drain", "strong jaw", "sturdy", "suction cups", "super luck", "surge surfer", "swarm", "sweet veil", "swift swim", "symbiosis", "synchronize", "tangled feet", "technician", "telepathy", "teravolt", "thick fat", "tinted lens", "torrent", "tough claws", "toxic boost", "trace", "triage", "truant", "turboblaze", "unaware", "unburden", "unnerve", "victory star", "vital spirit", "volt absorb", "water absorb", "water compaction", "water veil", "weak armor", "white smoke", "wimp out", "wonder guard", "wonder skin", "zen mode", "emergency exit", "merciless", "water bubble", "steelworker", "slush rush", "long reach", "liquid voice", "galvanize", "tangling hair", "power of alchemy", "beast boost", "psychic surge", "misty surge", "grassy surge", "full metal body", "prism armor"];

var moveprops = ["name", "desc", "wiki"];
console.log("item");

function clicked(){
	var out = "var items = [";
	var len = 0;
	for (var mon of items){
		out += "{id: \"" + mon + "\", ";
		mon = mon.replace(/ /g, "_");
		for (var prop of moveprops){
			if (eval(mon)[prop] !== undefined){
				//if (isNaN(parseInt(eval(mon)[prop]))){
					out += prop + ": \"" + eval(mon)[prop] + "\", ";
				//} else {
				//	out += prop + ": " + eval(mon)[prop] + ", ";
				//}				
			}
		}
		len = out.length - 2;
		out = out.slice(0, len) + "}, ";
		console.log(mon);
	}
	len = out.length - 2;
	out = out.slice(0, len) + "];";
	document.getElementById("myDiv").innerHTML = out;
}

var ability_capsule = {
	name: "Ability Capsule",
	desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
	wiki: "http://www.serebii.net/itemdex/abilitycapsule.shtml"
};

var ability_urge = {
	name: "Ability Urge",
	desc: "When used, it activates the Ability of an ally Pokémon.",
	wiki: "http://www.serebii.net/itemdex/abilityurge.shtml"
};

var abomasite = {
	name: "Abomasite",
	desc: "Enables Abomasnow to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/abomasite.shtml"
};

var absolite = {
	name: "Absolite",
	desc: "Enables Absol to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/absolite.shtml"
};

var absorb_bulb = {
	name: "Absorb Bulb",
	desc: "A consumable bulb. If the holder is hit by a Water-type move, its Sp. Atk will rise.",
	wiki: "http://www.serebii.net/itemdex/absorbbulb.shtml"
};

var adamant_orb = {
	name: "Adamant Orb",
	desc: "Increases the power of Dragon-​ and Steel-type moves when held by Dialga.",
	wiki: "http://www.serebii.net/itemdex/adamantorb.shtml"
};

var adventure_rules = {
	name: "Adventure Rules",
	desc: "This book contains all the points a new Trainer needs to know on a journey. It was handmade by a kind friend.",
	wiki: "http://www.serebii.net/itemdex/adventurerules.shtml"
};

var aerodactylite = {
	name: "Aerodactylite",
	desc: "Enables Aerodactyl to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/aerodactylite.shtml"
};

var aggronite = {
	name: "Aggronite",
	desc: "Enables Aggron to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/aggronite.shtml"
};

var aguav_berry = {
	name: "Aguav Berry",
	desc: "Restores HP if it's low, but may cause confusion.",
	wiki: "http://www.serebii.net/itemdex/aguavberry.shtml"
};

var air_balloon = {
	name: "Air Balloon",
	desc: "When held by a Pokémon, the Pokémon will float into the air. When the holder is attacked, this item will burst.",
	wiki: "http://www.serebii.net/itemdex/airballoon.shtml"
};

var alakazite = {
	name: "Alakazite",
	desc: "Enables Alakazam to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/alakazite.shtml"
};

var altarianite = {
	name: "Altarianite",
	desc: "One of a variety of mysterious Mega Stones. Have Altaria hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/altarianite.shtml"
};

var ampharosite = {
	name: "Ampharosite",
	desc: "Enables Ampharos to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/ampharosite.shtml"
};

var amulet_coin = {
	name: "Amulet Coin",
	desc: "An item to be held by a Pokémon. It doubles a battle’s prize money if the holding Pokémon joins in.",
	wiki: "http://www.serebii.net/itemdex/amuletcoin.shtml"
};

var antidote = {
	name: "Antidote",
	desc: "A spray-type medicine. It lifts the effect of poison from one Pokémon.",
	wiki: "http://www.serebii.net/itemdex/antidote.shtml"
};

var apicot_berry = {
	name: "Apicot Berry",
	desc: "Raises Special Defense when HP is low.",
	wiki: "http://www.serebii.net/itemdex/apicotberry.shtml"
};

var armor_fossil = {
	name: "Armor Fossil",
	desc: "A fossil from a prehistoric Pokémon that lived on the land. It appears to be part of a collar.",
	wiki: "http://www.serebii.net/itemdex/armorfossil.shtml"
};

var aspear_berry = {
	name: "Aspear Berry",
	desc: "If held by a Pokémon, it defrosts it.",
	wiki: "http://www.serebii.net/itemdex/aspearberry.shtml"
};

var audinite = {
	name: "Audinite",
	desc: "One of a variety of mysterious Mega Stones. Have Audino hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/audinite.shtml"
};

var awakening = {
	name: "Awakening",
	desc: "A spray-type medicine. It awakens a Pokémon from the clutches of sleep.",
	wiki: "http://www.serebii.net/itemdex/awakening.shtml"
};

var babiri_berry = {
	name: "Babiri Berry",
	desc: "Weakens a supereffective Steel-type attack against the holding Pokémon.",
	wiki: "http://www.serebii.net/itemdex/babiriberry.shtml"
};

var balmmushroom = {
	name: "Balmmushroom",
	desc: "A rare mushroom which gives off a nice fragrance. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/balmmushroom.shtml"
};

var banettite = {
	name: "Banettite",
	desc: "Enables Banette to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/banettite.shtml"
};

var beedrillite = {
	name: "Beedrillite",
	desc: "One of a variety of mysterious Mega Stones. Have Beedrill hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/beedrillite.shtml"
};

var belue_berry = {
	name: "Belue Berry",
	desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/belueberry.shtml"
};

var berry_juice = {
	name: "Berry Juice",
	desc: "A 100% pure juice made of Berries. It restores the HP of one Pokémon by just 20 points.",
	wiki: "http://www.serebii.net/itemdex/berryjuice.shtml"
};

var big_mushroom = {
	name: "Big Mushroom",
	desc: "A large and rare mushroom. It is sought after by collectors.",
	wiki: "http://www.serebii.net/itemdex/bigmushroom.shtml"
};

var big_nugget = {
	name: "Big Nugget",
	desc: "A big nugget of pure gold that gives off a lustrous gleam. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/bignugget.shtml"
};

var big_pearl = {
	name: "Big Pearl",
	desc: "A quite-large pearl that sparkles in a pretty silver color. It can be sold at a high price to shops.",
	wiki: "http://www.serebii.net/itemdex/bigpearl.shtml"
};

var big_root = {
	name: "Big Root",
	desc: "Recovers more HP from HP-stealing moves.",
	wiki: "http://www.serebii.net/itemdex/bigroot.shtml"
};

var binding_band = {
	name: "Binding Band",
	desc: "A band that increases the power of binding moves when held.",
	wiki: "http://www.serebii.net/itemdex/bindingband.shtml"
};

var black_belt = {
	name: "Black Belt",
	desc: "Increases the power of Fighting-type moves.",
	wiki: "http://www.serebii.net/itemdex/blackbelt.shtml"
};

var black_flute = {
	name: "Black Flute",
	desc: "A toy flute made from black glass. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/blackflute.shtml"
};

var black_sludge = {
	name: "Black Sludge",
	desc: "A held item that gradually restores the HP of Poison-type Pokémon. It inflicts damage on all other types.",
	wiki: "http://www.serebii.net/itemdex/blacksludge.shtml"
};

var blackglasses = {
	name: "Blackglasses",
	desc: "Increases the power of Dark-type moves.",
	wiki: "http://www.serebii.net/itemdex/blackglasses.shtml"
};

var blastoisinite = {
	name: "Blastoisinite",
	desc: "Enables Blastoise to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/blastoisinite.shtml"
};

var blazikenite = {
	name: "Blazikenite",
	desc: "Enables Blaziken to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/blazikenite.shtml"
};

var blk_apricorn = {
	name: "Blk Apricorn",
	desc: "A black Apricorn It has an indescribable scent.",
	wiki: "http://www.serebii.net/itemdex/blkapricorn.shtml"
};

var blu_apricorn = {
	name: "Blu Apricorn",
	desc: "A blue Apricorn. It smells a bit like grass.",
	wiki: "http://www.serebii.net/itemdex/bluapricorn.shtml"
};

var blue_flute = {
	name: "Blue Flute",
	desc: "A toy flute made from blue glass. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/blueflute.shtml"
};

var blue_scarf = {
	name: "Blue Scarf",
	desc: "Raises holder's Beauty aspect in a Contest.",
	wiki: "http://www.serebii.net/itemdex/bluescarf.shtml"
};

var blue_shard = {
	name: "Blue Shard",
	desc: "A small blue shard. It appears to be from some sort of implement made long ago.",
	wiki: "http://www.serebii.net/itemdex/blueshard.shtml"
};

var bluk_berry = {
	name: "Bluk Berry",
	desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/blukberry.shtml"
};

var brightpowder = {
	name: "Brightpowder",
	desc: "Lowers the opponent’s accuracy.",
	wiki: "http://www.serebii.net/itemdex/brightpowder.shtml"
};

var bug_gem = {
	name: "Bug Gem",
	desc: "Increases the power of a Bug-type move only once.",
	wiki: "http://www.serebii.net/itemdex/buggem.shtml"
};

var burn_drive = {
	name: "Burn Drive",
	desc: "Changes Techno Blast to a Fire-type move when held by Genesect.",
	wiki: "http://www.serebii.net/itemdex/burndrive.shtml"
};

var burn_heal = {
	name: "Burn Heal",
	desc: "A spray-type medicine. It heals a single Pokémon that is suffering from a burn.",
	wiki: "http://www.serebii.net/itemdex/burnheal.shtml"
};

var calcium = {
	name: "Calcium",
	desc: "A nutritious drink for Pokémon. It raises the base Sp. Atk (Special Attack) stat of a single Pokémon.",
	wiki: "http://www.serebii.net/itemdex/calcium.shtml"
};

var cameruptite = {
	name: "Cameruptite",
	desc: "One of a variety of mysterious Mega Stones. Have Camerupt hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/cameruptite.shtml"
};

var carbos = {
	name: "Carbos",
	desc: "A nutritious drink for Pokémon. It raises the base Speed stat of a single Pokémon.",
	wiki: "http://www.serebii.net/itemdex/carbos.shtml"
};

var casteliacone = {
	name: "Casteliacone",
	desc: "Castelia City’s specialty, soft-serve ice cream. It heals all the status problems of a single Pokémon.",
	wiki: "http://www.serebii.net/itemdex/casteliacone.shtml"
};

var cell_battery = {
	name: "Cell Battery",
	desc: "A consumable battery. If the holder is hit by an Electric-type move, its Attack will rise.",
	wiki: "http://www.serebii.net/itemdex/cellbattery.shtml"
};

var charcoal = {
	name: "Charcoal",
	desc: "Increases the power of Fire-type moves.",
	wiki: "http://www.serebii.net/itemdex/charcoal.shtml"
};

var charizardite_x = {
	name: "Charizardite X",
	desc: "Enables Charizard to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/charizarditex.shtml"
};

var charizardite_y = {
	name: "Charizardite Y",
	desc: "Enables Charizard to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/charizarditey.shtml"
};

var charti_berry = {
	name: "Charti Berry",
	desc: "Weakens a supereffective Rock-type attack against the holding Pokémon.",
	wiki: "http://www.serebii.net/itemdex/chartiberry.shtml"
};

var cheri_berry = {
	name: "Cheri Berry",
	desc: "If held by a Pokémon, it recovers from paralysis.",
	wiki: "http://www.serebii.net/itemdex/cheriberry.shtml"
};

var cherish_ball = {
	name: "Cherish Ball",
	desc: "A quite rare Poké Ball that has been specially crafted to commemorate an occasion of some sort.",
	wiki: "http://www.serebii.net/itemdex/cherishball.shtml"
};

var chesto_berry = {
	name: "Chesto Berry",
	desc: "If held by a Pokémon, it recovers from sleep.",
	wiki: "http://www.serebii.net/itemdex/chestoberry.shtml"
};

var chilan_berry = {
	name: "Chilan Berry",
	desc: "Weakens a Normal-type attack against the Pokémon holding this berry.",
	wiki: "http://www.serebii.net/itemdex/chilanberry.shtml"
};

var chill_drive = {
	name: "Chill Drive",
	desc: "Changes Techno Blast to an Ice-type move when held by Genesect.",
	wiki: "http://www.serebii.net/itemdex/chilldrive.shtml"
};

var choice_band = {
	name: "Choice Band",
	desc: "Raises Attack, but only one move can be used.",
	wiki: "http://www.serebii.net/itemdex/choiceband.shtml"
};

var choice_scarf = {
	name: "Choice Scarf",
	desc: "Raises Speed, but only one move can be used.",
	wiki: "http://www.serebii.net/itemdex/choicescarf.shtml"
};

var choice_specs = {
	name: "Choice Specs",
	desc: "Raises Special Attack, but only one move can be used.",
	wiki: "http://www.serebii.net/itemdex/choicespecs.shtml"
};

var chople_berry = {
	name: "Chople Berry",
	desc: "Weakens a supereffective Fighting-type attack against the holding Pokémon.",
	wiki: "http://www.serebii.net/itemdex/chopleberry.shtml"
};

var claw_fossil = {
	name: "Claw Fossil",
	desc: "A fossil of an ancient Pokémon that lived in the sea. It appears to be part of a claw.",
	wiki: "http://www.serebii.net/itemdex/clawfossil.shtml"
};

var cleanse_tag = {
	name: "Cleanse Tag",
	desc: "An item to be held by a Pokémon. It helps keep wild Pokémon away if the holder is the first one in the party.",
	wiki: "http://www.serebii.net/itemdex/cleansetag.shtml"
};

var clever_wing = {
	name: "Clever Wing",
	desc: "Increases Special Defense EVs by 1.",
	wiki: "http://www.serebii.net/itemdex/cleverwing.shtml"
};

var coba_berry = {
	name: "Coba Berry",
	desc: "Weakens a supereffective Flying-type attack against the holding Pokémon.",
	wiki: "http://www.serebii.net/itemdex/cobaberry.shtml"
};

var colbur_berry = {
	name: "Colbur Berry",
	desc: "Weakens a supereffective Dark-type attack against the holding Pokémon.",
	wiki: "http://www.serebii.net/itemdex/colburberry.shtml"
};

var colress_machine = {
	name: "Colress Machine",
	desc: "A special device that wrings out the potential of Pokémon. It is an imperfect prototype.",
	wiki: "http://www.serebii.net/itemdex/colressmachine.shtml"
};

var comet_shard = {
	name: "Comet Shard",
	desc: "A shard which fell to the ground when a comet approached. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/cometshard.shtml"
};

var cornn_berry = {
	name: "Cornn Berry",
	desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/cornnberry.shtml"
};

var cover_fossil = {
	name: "Cover Fossil",
	desc: "A fossil of an ancient Pokémon that lived in the sea in ancient times. It appears to be part of its back.",
	wiki: "http://www.serebii.net/itemdex/coverfossil.shtml"
};

var custap_berry = {
	name: "Custap Berry",
	desc: "Holder can move first when HP is low.",
	wiki: "http://www.serebii.net/itemdex/custapberry.shtml"
};

var damp_mulch = {
	name: "Damp Mulch",
	desc: "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/dampmulch.shtml"
};

var damp_rock = {
	name: "Damp Rock",
	desc: "A Pokémon held item that extends the duration of the move Rain Dance used by the holder.",
	wiki: "http://www.serebii.net/itemdex/damprock.shtml"
};

var dark_gem = {
	name: "Dark Gem",
	desc: "Increases the power of a Dark-type move only once.",
	wiki: "http://www.serebii.net/itemdex/darkgem.shtml"
};

var dawn_stone = {
	name: "Dawn Stone",
	desc: "A peculiar stone that makes certain species of Pokémon evolve. It sparkles like eyes.",
	wiki: "http://www.serebii.net/itemdex/dawnstone.shtml"
};

var deepseascale = {
	name: "Deepseascale",
	desc: "Increases Special Defense when held by Clamperl.",
	wiki: "http://www.serebii.net/itemdex/deepseascale.shtml"
};

var deepseatooth = {
	name: "Deepseatooth",
	desc: "Increases Special Attack when held by Clamperl.",
	wiki: "http://www.serebii.net/itemdex/deepseatooth.shtml"
};

var destiny_knot = {
	name: "Destiny Knot",
	desc: "A long, thin, bright-red string to be held by a Pokémon. If the holder becomes infatuated, the foe does too.",
	wiki: "http://www.serebii.net/itemdex/destinyknot.shtml"
};

var diancite = {
	name: "Diancite",
	desc: "One of a variety of mysterious Mega Stones. Have Diancie hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/diancite.shtml"
};

var dire_hit = {
	name: "Dire Hit",
	desc: "Raises critical-hit ratio of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/direhit.shtml"
};

var dire_hit_2 = {
	name: "Dire Hit 2",
	desc: "It can be used many times to raise the critical-hit ratio of one Pokémon. It wears off if the Pokémon is withdrawn.",
	wiki: "http://www.serebii.net/itemdex/direhit2.shtml"
};

var dire_hit_3 = {
	name: "Dire Hit 3",
	desc: "It can be used many times to greatly raise a Pokémon’s critical-hit ratio. It wears off if the Pokémon is withdrawn.",
	wiki: "http://www.serebii.net/itemdex/direhit3.shtml"
};

var dive_ball = {
	name: "Dive Ball",
	desc: "A somewhat different Poké Ball that works especially well on Pokémon that live underwater.",
	wiki: "http://www.serebii.net/itemdex/diveball.shtml"
};

var dna_splicers = {
	name: "Dna Splicers",
	desc: "A splicer that fuses Kyurem and a certain Pokémon. They are said to have been one in the beginning.",
	wiki: "http://www.serebii.net/itemdex/dnasplicers.shtml"
};

var dome_fossil = {
	name: "Dome Fossil",
	desc: "A fossil of an ancient Pokémon that lived in the sea. It appears to be part of a shell.",
	wiki: "http://www.serebii.net/itemdex/domefossil.shtml"
};

var douse_drive = {
	name: "Douse Drive",
	desc: "Changes Techno Blast to a Water-type move when held by Genesect.",
	wiki: "http://www.serebii.net/itemdex/dousedrive.shtml"
};

var draco_plate = {
	name: "Draco Plate",
	desc: "Increases power of Dragon-type moves. Changes Arceus' type to Dragon.",
	wiki: "http://www.serebii.net/itemdex/dracoplate.shtml"
};

var dragon_fang = {
	name: "Dragon Fang",
	desc: "Increases the power of Dragon-type moves.",
	wiki: "http://www.serebii.net/itemdex/dragonfang.shtml"
};

var dragon_gem = {
	name: "Dragon Gem",
	desc: "Increases the power of a Dragon-type move only once.",
	wiki: "http://www.serebii.net/itemdex/dragongem.shtml"
};

var dragon_scale = {
	name: "Dragon Scale",
	desc: "A thick and tough scale. Dragon-type Pokémon may be holding this item when caught.",
	wiki: "http://www.serebii.net/itemdex/dragonscale.shtml"
};

var dread_plate = {
	name: "Dread Plate",
	desc: "Increases power of Dark-type moves. Changes Arceus' type to Dark.",
	wiki: "http://www.serebii.net/itemdex/dreadplate.shtml"
};

var dream_ball = {
	name: "Dream Ball",
	desc: "A special Poké Ball that appears out of nowhere in a bag at the Entree Forest. It can catch any Pokémon.",
	wiki: "http://www.serebii.net/itemdex/dreamball.shtml"
};

var dropped_item = {
	name: "Dropped Item",
	desc: "The Xtransceiver found at the Nimbasa City amusement park. It seems it belongs to a boy.",
	wiki: "http://www.serebii.net/itemdex/droppeditem.shtml"
};

var dubious_disc = {
	name: "Dubious Disc",
	desc: "A transparent device overflowing with dubious data. Its producer is unknown.",
	wiki: "http://www.serebii.net/itemdex/dubiousdisc.shtml"
};

var durin_berry = {
	name: "Durin Berry",
	desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/durinberry.shtml"
};

var dusk_ball = {
	name: "Dusk Ball",
	desc: "A somewhat different Poké Ball that makes it easier to catch wild Pokémon at night or in dark places like caves.",
	wiki: "http://www.serebii.net/itemdex/duskball.shtml"
};

var dusk_stone = {
	name: "Dusk Stone",
	desc: "A peculiar stone that makes certain species of Pokémon evolve. It is as dark as dark can be.",
	wiki: "http://www.serebii.net/itemdex/duskstone.shtml"
};

var earth_plate = {
	name: "Earth Plate",
	desc: "Increases power of Ground-type moves. Changes Arceus' type to Ground.",
	wiki: "http://www.serebii.net/itemdex/earthplate.shtml"
};

var eject_button = {
	name: "Eject Button",
	desc: "If the holder is hit by an attack, it will switch with another Pokémon in your party.",
	wiki: "http://www.serebii.net/itemdex/ejectbutton.shtml"
};

var electirizer = {
	name: "Electirizer",
	desc: "A box packed with a tremendous amount of electric energy. It is loved by a certain Pokémon.",
	wiki: "http://www.serebii.net/itemdex/electirizer.shtml"
};

var electric_gem = {
	name: "Electric Gem",
	desc: "Increases the power of an Electric-type move only once.",
	wiki: "http://www.serebii.net/itemdex/electricgem.shtml"
};

var elevator_key = {
	name: "Elevator Key",
	desc: "A card key that activates the elevator in Lysandre Labs. It is emblazoned with Team Flare’s logo.",
	wiki: "http://www.serebii.net/itemdex/elevatorkey.shtml"
};

var elixir = {
	name: "Elixir",
	desc: "It restores the PP of all the moves learned by the targeted Pokémon by 10 points each.",
	wiki: "http://www.serebii.net/itemdex/elixir.shtml"
};

var energy_root = {
	name: "Energy Root",
	desc: "A very bitter root. It restores the HP of one POKéMON by 200 points.",
	wiki: "http://www.serebii.net/itemdex/energyroot.shtml"
};

var energypowder = {
	name: "Energypowder",
	desc: "A very bitter medicine powder. It restores the HP of one POKéMON by 50 points.",
	wiki: "http://www.serebii.net/itemdex/energypowder.shtml"
};

var enigma_berry = {
	name: "Enigma Berry",
	desc: "If held by a Pokémon, it restores its HP if it is hit by any supereffective attack.",
	wiki: "http://www.serebii.net/itemdex/enigmaberry.shtml"
};

var escape_rope = {
	name: "Escape Rope",
	desc: "A long, durable rope. Use it to escape instantly from a cave or a dungeon.",
	wiki: "http://www.serebii.net/itemdex/escaperope.shtml"
};

var ether = {
	name: "Ether",
	desc: "It restores the PP of a Pokémon’s selected move by a maximum of 10 points.",
	wiki: "http://www.serebii.net/itemdex/ether.shtml"
};

var everstone = {
	name: "Everstone",
	desc: "An item to be held by a Pokémon. The Pokémon holding this peculiar stone is prevented from evolving.",
	wiki: "http://www.serebii.net/itemdex/everstone.shtml"
};

var eviolite = {
	name: "Eviolite",
	desc: "A mysterious evolutionary lump. When held, it raises the Defense and Sp. Def of a Pokémon that can still evolve.",
	wiki: "http://www.serebii.net/itemdex/eviolite.shtml"
};

var exp_share = {
	name: "Exp Share",
	desc: "An item to be held by a Pokémon. The holder gets a share of a battle’s Exp. Points without battling.",
	wiki: "http://www.serebii.net/itemdex/expshare.shtml"
};

var expert_belt = {
	name: "Expert Belt",
	desc: "Increases the power of super-effective moves.",
	wiki: "http://www.serebii.net/itemdex/expertbelt.shtml"
};

var fairy_gem = {
	name: "Fairy Gem",
	desc: "Increases the power of a Fairy-type move only once.",
	wiki: "http://www.serebii.net/itemdex/fairygem.shtml"
};

var fast_ball = {
	name: "Fast Ball",
	desc: "A Poké Ball that makes it easier to catch Pokémon which are quick to run away.",
	wiki: "http://www.serebii.net/itemdex/fastball.shtml"
};

var fighting_gem = {
	name: "Fighting Gem",
	desc: "Increases the power of a Fighting-type move only once.",
	wiki: "http://www.serebii.net/itemdex/fightinggem.shtml"
};

var figy_berry = {
	name: "Figy Berry",
	desc: "Restores HP if it's low, but may cause confusion.",
	wiki: "http://www.serebii.net/itemdex/figyberry.shtml"
};

var fire_gem = {
	name: "Fire Gem",
	desc: "Increases the power of a Fire-type move only once.",
	wiki: "http://www.serebii.net/itemdex/firegem.shtml"
};

var fire_stone = {
	name: "Fire Stone",
	desc: "A peculiar stone that makes certain species of POKéMON evolve. It is colored orange.",
	wiki: "http://www.serebii.net/itemdex/firestone.shtml"
};

var fist_plate = {
	name: "Fist Plate",
	desc: "Increases power of Fighting-type moves. Changes Arceus' type to Fighting.",
	wiki: "http://www.serebii.net/itemdex/fistplate.shtml"
};

var flame_orb = {
	name: "Flame Orb",
	desc: "An item to be held by a Pokémon. It is a bizarre orb that inflicts a burn on the holder in battle.",
	wiki: "http://www.serebii.net/itemdex/flameorb.shtml"
};

var flame_plate = {
	name: "Flame Plate",
	desc: "Increases power of Fire-type moves. Changes Arceus' type to Fire.",
	wiki: "http://www.serebii.net/itemdex/flameplate.shtml"
};

var float_stone = {
	name: "Float Stone",
	desc: "A very light stone. It reduces the weight of a Pokémon when held.",
	wiki: "http://www.serebii.net/itemdex/floatstone.shtml"
};

var fluffy_tail = {
	name: "Fluffy Tail",
	desc: "An item that attracts Pokémon. Use it to flee from any battle with a wild Pokémon.",
	wiki: "http://www.serebii.net/itemdex/fluffytail.shtml"
};

var flying_gem = {
	name: "Flying Gem",
	desc: "Increases the power of a Flying-type move only once.",
	wiki: "http://www.serebii.net/itemdex/flyinggem.shtml"
};

var focus_band = {
	name: "Focus Band",
	desc: "An item to be held by a Pokémon. The holder may endure a potential KO attack, leaving it with just 1 HP.",
	wiki: "http://www.serebii.net/itemdex/focusband.shtml"
};

var focus_sash = {
	name: "Focus Sash",
	desc: "An item to be held by a Pokémon. If it has full HP, the holder will endure one potential KO attack, leaving 1 HP.",
	wiki: "http://www.serebii.net/itemdex/focussash.shtml"
};

var fresh_water = {
	name: "Fresh Water",
	desc: "Water with a high mineral content. It restores the HP of one POKéMON by 50 points.",
	wiki: "http://www.serebii.net/itemdex/freshwater.shtml"
};

var friend_ball = {
	name: "Friend Ball",
	desc: "A Poké Ball that makes caught Pokémon more friendly.",
	wiki: "http://www.serebii.net/itemdex/friendball.shtml"
};

var full_heal = {
	name: "Full Heal",
	desc: "A spray-type medicine. It heals all the status problems of a single Pokémon.",
	wiki: "http://www.serebii.net/itemdex/fullheal.shtml"
};

var full_incense = {
	name: "Full Incense",
	desc: "An item to be held by a Pokémon. It is an exotic-smelling incense that makes the holder bloated and slow moving.",
	wiki: "http://www.serebii.net/itemdex/fullincense.shtml"
};

var full_restore = {
	name: "Full Restore",
	desc: "A medicine that fully restores the HP and heals any status problems of a single Pokémon.",
	wiki: "http://www.serebii.net/itemdex/fullrestore.shtml"
};

var galladite = {
	name: "Galladite",
	desc: "One of a variety of mysterious Mega Stones. Have Gallade hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/galladite.shtml"
};

var ganlon_berry = {
	name: "Ganlon Berry",
	desc: "Raises Defense when HP is low.",
	wiki: "http://www.serebii.net/itemdex/ganlonberry.shtml"
};

var garchompite = {
	name: "Garchompite",
	desc: "Enables Garchomp to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/garchompite.shtml"
};

var gardevoirite = {
	name: "Gardevoirite",
	desc: "Enables Gardevoir to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/gardevoirite.shtml"
};

var gengarite = {
	name: "Gengarite",
	desc: "Enables Gengar to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/gengarite.shtml"
};

var genius_wing = {
	name: "Genius Wing",
	desc: "Increases Special Attack EVs by 1.",
	wiki: "http://www.serebii.net/itemdex/geniuswing.shtml"
};

var ghost_gem = {
	name: "Ghost Gem",
	desc: "Increases the power of a Ghost-type move only once.",
	wiki: "http://www.serebii.net/itemdex/ghostgem.shtml"
};

var glalitite = {
	name: "Glalitite",
	desc: "One of a variety of mysterious Mega Stones. Have Glalie hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/glalitite.shtml"
};

var gooey_mulch = {
	name: "Gooey Mulch",
	desc: "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/gooeymulch.shtml"
};

var grass_gem = {
	name: "Grass Gem",
	desc: "Increases the power of a Grass-type move only once.",
	wiki: "http://www.serebii.net/itemdex/grassgem.shtml"
};

var great_ball = {
	name: "Great Ball",
	desc: "A good, high-performance Ball that provides a higher Pokémon catch rate than a standard Poké Ball.",
	wiki: "http://www.serebii.net/itemdex/greatball.shtml"
};

var green_scarf = {
	name: "Green Scarf",
	desc: "Raises holder's Smart aspect in a Contest.",
	wiki: "http://www.serebii.net/itemdex/greenscarf.shtml"
};

var green_shard = {
	name: "Green Shard",
	desc: "A small green shard. It appears to be from some sort of implement made long ago.",
	wiki: "http://www.serebii.net/itemdex/greenshard.shtml"
};

var grepa_berry = {
	name: "Grepa Berry",
	desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base Sp. Def stat.",
	wiki: "http://www.serebii.net/itemdex/grepaberry.shtml"
};

var grip_claw = {
	name: "Grip Claw",
	desc: "A Pokémon held item that extends the duration of multiturn attacks like Bind and Wrap.",
	wiki: "http://www.serebii.net/itemdex/gripclaw.shtml"
};

var griseous_orb = {
	name: "Griseous Orb",
	desc: "Increases the power of Dragon- and Ghost-type moves when held by Giratina, and changes it to Origin Forme.",
	wiki: "http://www.serebii.net/itemdex/griseousorb.shtml"
};

var grn_apricorn = {
	name: "Grn Apricorn",
	desc: "A green Apricorn. It has a mysterious, aromatic scent.",
	wiki: "http://www.serebii.net/itemdex/grnapricorn.shtml"
};

var ground_gem = {
	name: "Ground Gem",
	desc: "Increases the power of a Ground-type move only once.",
	wiki: "http://www.serebii.net/itemdex/groundgem.shtml"
};

var growth_mulch = {
	name: "Growth Mulch",
	desc: "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/growthmulch.shtml"
};

var grubby_hanky = {
	name: "Grubby Hanky",
	desc: "A handkerchief dropped by a regular at Café Warehouse. It smells faintly like a Pokémon.",
	wiki: "http://www.serebii.net/itemdex/grubbyhanky.shtml"
};

var guard_spec = {
	name: "Guard Spec",
	desc: "Prevents stat reduction for five turns.",
	wiki: "http://www.serebii.net/itemdex/guardspec.shtml"
};

var gyaradosite = {
	name: "Gyaradosite",
	desc: "Enables Gyarados to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/gyaradosite.shtml"
};

var haban_berry = {
	name: "Haban Berry",
	desc: "Weakens a supereffective Dragon-type attack against the holding Pokémon.",
	wiki: "http://www.serebii.net/itemdex/habanberry.shtml"
};

var hard_stone = {
	name: "Hard Stone",
	desc: "Increases the power of Rock-type moves.",
	wiki: "http://www.serebii.net/itemdex/hardstone.shtml"
};

var heal_ball = {
	name: "Heal Ball",
	desc: "A remedial Poké Ball that restores the caught Pokémon’s HP and eliminates any status problem.",
	wiki: "http://www.serebii.net/itemdex/healball.shtml"
};

var heal_powder = {
	name: "Heal Powder",
	desc: "A very bitter medicine powder. It heals all the status problems of a single Pokémon.",
	wiki: "http://www.serebii.net/itemdex/healpowder.shtml"
};

var health_wing = {
	name: "Health Wing",
	desc: "Increases HP EVs by 1.",
	wiki: "http://www.serebii.net/itemdex/healthwing.shtml"
};

var heart_scale = {
	name: "Heart Scale",
	desc: "A pretty, heart-shaped scale that is extremely rare. It glows faintly in the colors of the rainbow.",
	wiki: "http://www.serebii.net/itemdex/heartscale.shtml"
};

var heat_rock = {
	name: "Heat Rock",
	desc: "A Pokémon held item that extends the duration of the move Sunny Day used by the holder.",
	wiki: "http://www.serebii.net/itemdex/heatrock.shtml"
};

var heavy_ball = {
	name: "Heavy Ball",
	desc: "A Poké Ball for catching very heavy Pokémon.",
	wiki: "http://www.serebii.net/itemdex/heavyball.shtml"
};

var helix_fossil = {
	name: "Helix Fossil",
	desc: "A fossil of an ancient Pokémon that lived in the sea. It appears to be part of a seashell.",
	wiki: "http://www.serebii.net/itemdex/helixfossil.shtml"
};

var heracronite = {
	name: "Heracronite",
	desc: "Enables Heracross to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/heracronite.shtml"
};

var hm01 = {
	name: "HM01",
	desc: "Teaches the move Cut.",
	wiki: "http://www.serebii.net/itemdex/hm01.shtml"
};

var hm02 = {
	name: "HM02",
	desc: "Teaches the move Fly.",
	wiki: "http://www.serebii.net/itemdex/hm02.shtml"
};

var hm03 = {
	name: "HM03",
	desc: "Teaches the move Surf.",
	wiki: "http://www.serebii.net/itemdex/hm03.shtml"
};

var hm04 = {
	name: "HM04",
	desc: "Teaches the move Strength.",
	wiki: "http://www.serebii.net/itemdex/hm04.shtml"
};

var hm05 = {
	name: "HM05",
	desc: "Teaches the move Flash/Defog/Whirlpool/Waterfall.",
	wiki: "http://www.serebii.net/itemdex/hm05.shtml"
};

var hm06 = {
	name: "HM06",
	desc: "Teaches the move Whirlpool/Rock Smash/Dive.",
	wiki: "http://www.serebii.net/itemdex/hm06.shtml"
};

var hm07 = {
	name: "HM07",
	desc: "Teaches the move Waterfall.",
	wiki: "http://www.serebii.net/itemdex/hm07.shtml"
};

var hm08 = {
	name: "HM08",
	desc: "Teaches the move Dive/Rock Climb.",
	wiki: "http://www.serebii.net/itemdex/hm08.shtml"
};

var holo_caster = {
	name: "Holo Caster",
	desc: "A device that allows users to receive and view hologram clips at any time. It is also used to chat with others.",
	wiki: "http://www.serebii.net/itemdex/holocaster.shtml"
};

var hondew_berry = {
	name: "Hondew Berry",
	desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base Sp. Atk stat.",
	wiki: "http://www.serebii.net/itemdex/hondewberry.shtml"
};

var honey = {
	name: "Honey",
	desc: "A sweet honey with a lush aroma that attracts wild Pokémon when it is used in grass, caves, or on special trees.",
	wiki: "http://www.serebii.net/itemdex/honey.shtml"
};

var honor_of_kalos = {
	name: "Honor Of Kalos",
	desc: "A precious symbol that is awarded only to an individual who has done great things for the Kalos region.",
	wiki: "http://www.serebii.net/itemdex/honorofkalos.shtml"
};

var houndoominite = {
	name: "Houndoominite",
	desc: "Enables Houndoom to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/houndoominite.shtml"
};

var hp_up = {
	name: "Hp Up",
	desc: "A nutritious drink for Pokémon. It raises the base HP of a single Pokémon.",
	wiki: "http://www.serebii.net/itemdex/hpup.shtml"
};

var hyper_potion = {
	name: "Hyper Potion",
	desc: "A spray-type medicine for wounds. It restores the HP of one Pokémon by 200 points.",
	wiki: "http://www.serebii.net/itemdex/hyperpotion.shtml"
};

var iapapa_berry = {
	name: "Iapapa Berry",
	desc: "Restores HP if it's low, but may cause confusion.",
	wiki: "http://www.serebii.net/itemdex/iapapaberry.shtml"
};

var ice_gem = {
	name: "Ice Gem",
	desc: "Increases the power of an Ice-type move only once.",
	wiki: "http://www.serebii.net/itemdex/icegem.shtml"
};

var ice_heal = {
	name: "Ice Heal",
	desc: "A spray-type medicine. It defrosts a Pokémon that has been frozen solid.",
	wiki: "http://www.serebii.net/itemdex/iceheal.shtml"
};

var icicle_plate = {
	name: "Icicle Plate",
	desc: "Increases power of Ice-type moves. Changes Arceus' type to Ice.",
	wiki: "http://www.serebii.net/itemdex/icicleplate.shtml"
};

var icy_rock = {
	name: "Icy Rock",
	desc: "A Pokémon held item that extends the duration of the move Hail used by the holder.",
	wiki: "http://www.serebii.net/itemdex/icyrock.shtml"
};

var insect_plate = {
	name: "Insect Plate",
	desc: "Increases power of Bug-type moves. Changes Arceus' type to Bug.",
	wiki: "http://www.serebii.net/itemdex/insectplate.shtml"
};

var intriguing_stone = {
	name: "Intriguing Stone",
	desc: "A rather curious stone that might appear to be valuable to some. It’s all in the eye of the beholder.",
	wiki: "http://www.serebii.net/itemdex/intriguingstone.shtml"
};

var iron = {
	name: "Iron",
	desc: "A nutritious drink for Pokémon. It raises the base Defense stat of a single Pokémon.",
	wiki: "http://www.serebii.net/itemdex/iron.shtml"
};

var iron_ball = {
	name: "Iron Ball",
	desc: "A Pokémon held item that cuts Speed. It makes Flying-type and levitating holders susceptible to Ground moves.",
	wiki: "http://www.serebii.net/itemdex/ironball.shtml"
};

var iron_plate = {
	name: "Iron Plate",
	desc: "Increases power of Steel-type moves. Changes Arceus' type to Steel.",
	wiki: "http://www.serebii.net/itemdex/ironplate.shtml"
};

var item_drop = {
	name: "Item Drop",
	desc: "When used, it causes an ally Pokémon to drop a held item.",
	wiki: "http://www.serebii.net/itemdex/itemdrop.shtml"
};

var item_urge = {
	name: "Item Urge",
	desc: "When used, it causes an ally Pokémon to use its held item.",
	wiki: "http://www.serebii.net/itemdex/itemurge.shtml"
};

var jaboca_berry = {
	name: "Jaboca Berry",
	desc: "If held by a Pokémon and a physical attack lands, the attacker also takes damage.",
	wiki: "http://www.serebii.net/itemdex/jabocaberry.shtml"
};

var kangaskhanite = {
	name: "Kangaskhanite",
	desc: "Enables Kangaskhan to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/kangaskhanite.shtml"
};

var kasib_berry = {
	name: "Kasib Berry",
	desc: "Weakens a supereffective Ghost-type attack against the holding Pokémon.",
	wiki: "http://www.serebii.net/itemdex/kasibberry.shtml"
};

var kebia_berry = {
	name: "Kebia Berry",
	desc: "Weakens a supereffective Poison-type attack against the holding Pokémon.",
	wiki: "http://www.serebii.net/itemdex/kebiaberry.shtml"
};

var kelpsy_berry = {
	name: "Kelpsy Berry",
	desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base Attack stat.",
	wiki: "http://www.serebii.net/itemdex/kelpsyberry.shtml"
};

var kings_rock = {
	name: "Kings Rock",
	desc: "An item to be held by a Pokémon. When the holder inflicts damage, the target may flinch.",
	wiki: "http://www.serebii.net/itemdex/kingsrock.shtml"
};

var lagging_tail = {
	name: "Lagging Tail",
	desc: "An item to be held by a Pokémon. It is tremendously heavy and makes the holder move slower than usual.",
	wiki: "http://www.serebii.net/itemdex/laggingtail.shtml"
};

var lansat_berry = {
	name: "Lansat Berry",
	desc: "Increases critical-hit ratio when HP is low.",
	wiki: "http://www.serebii.net/itemdex/lansatberry.shtml"
};

var latiasite = {
	name: "Latiasite",
	desc: "One of a variety of mysterious Mega Stones. Have Latias hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/latiasite.shtml"
};

var latiosite = {
	name: "Latiosite",
	desc: "One of a variety of mysterious Mega Stones. Have Latios hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/latiosite.shtml"
};

var lava_cookie = {
	name: "Lava Cookie",
	desc: "LAVARIDGE TOWN’s local specialty. It heals all the status problems of one POKéMON.",
	wiki: "http://www.serebii.net/itemdex/lavacookie.shtml"
};

var lax_incense = {
	name: "Lax Incense",
	desc: "An item to be held by a Pokémon. The tricky aroma of this incense may make attacks miss the holder.",
	wiki: "http://www.serebii.net/itemdex/laxincense.shtml"
};

var leaf_stone = {
	name: "Leaf Stone",
	desc: "A peculiar stone that makes certain species of POKéMON evolve. It has a leaf pattern.",
	wiki: "http://www.serebii.net/itemdex/leafstone.shtml"
};

var leftovers = {
	name: "Leftovers",
	desc: "An item to be held by a Pokémon. The holder’s HP is gradually restored during battle.",
	wiki: "http://www.serebii.net/itemdex/leftovers.shtml"
};

var lemonade = {
	name: "Lemonade",
	desc: "A very sweet drink. It restores the HP of one POKéMON by 80 points.",
	wiki: "http://www.serebii.net/itemdex/lemonade.shtml"
};

var lens_case = {
	name: "Lens Case",
	desc: "A rather chic-looking case for carrying contact lenses.",
	wiki: "http://www.serebii.net/itemdex/lenscase.shtml"
};

var leppa_berry = {
	name: "Leppa Berry",
	desc: "If held by a Pokémon, it restores a move’s PP by 10.",
	wiki: "http://www.serebii.net/itemdex/leppaberry.shtml"
};

var level_ball = {
	name: "Level Ball",
	desc: "A Poké Ball for catching Pokémon that are a lower level than your own.",
	wiki: "http://www.serebii.net/itemdex/levelball.shtml"
};

var liechi_berry = {
	name: "Liechi Berry",
	desc: "Raises Attack when HP is low.",
	wiki: "http://www.serebii.net/itemdex/liechiberry.shtml"
};

var life_orb = {
	name: "Life Orb",
	desc: "Increases the power of moves, but loses HP each turn.",
	wiki: "http://www.serebii.net/itemdex/lifeorb.shtml"
};

var light_ball = {
	name: "Light Ball",
	desc: "An item to be held by PIKACHU. It is a puzzling orb that raises the Attack and Sp. Atk stat.",
	wiki: "http://www.serebii.net/itemdex/lightball.shtml"
};

var light_clay = {
	name: "Light Clay",
	desc: "A Pokémon held item that extends the duration of barrier moves like Light Screen and Reflect used by the holder.",
	wiki: "http://www.serebii.net/itemdex/lightclay.shtml"
};

var looker_ticket = {
	name: "Looker Ticket",
	desc: "A ticket that was handmade by Looker. It’s decorated with a liberal amount of glittery paint.",
	wiki: "http://www.serebii.net/itemdex/lookerticket.shtml"
};

var lopunnite = {
	name: "Lopunnite",
	desc: "One of a variety of mysterious Mega Stones. Have Lopunny hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/lopunnite.shtml"
};

var love_ball = {
	name: "Love Ball",
	desc: "Poké Ball for catching Pokémon that are the opposite gender of your Pokémon.",
	wiki: "http://www.serebii.net/itemdex/loveball.shtml"
};

var lucarionite = {
	name: "Lucarionite",
	desc: "Enables Lucario to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/lucarionite.shtml"
};

var luck_incense = {
	name: "Luck Incense",
	desc: "An item to be held by a Pokémon. It doubles a battle’s prize money if the holding Pokémon joins in.",
	wiki: "http://www.serebii.net/itemdex/luckincense.shtml"
};

var lucky_egg = {
	name: "Lucky Egg",
	desc: "An item to be held by a Pokémon. It is an egg filled with happiness that earns extra Exp. Points in battle.",
	wiki: "http://www.serebii.net/itemdex/luckyegg.shtml"
};

var lucky_punch = {
	name: "Lucky Punch",
	desc: "Increases critical-hit ratio when held by Chansey.",
	wiki: "http://www.serebii.net/itemdex/luckypunch.shtml"
};

var lum_berry = {
	name: "Lum Berry",
	desc: "If held by a Pokémon, it recovers from any status problem.",
	wiki: "http://www.serebii.net/itemdex/lumberry.shtml"
};

var lure_ball = {
	name: "Lure Ball",
	desc: "A Poké Ball for catching Pokémon hooked by a Rod when fishing.",
	wiki: "http://www.serebii.net/itemdex/lureball.shtml"
};

var lustrous_orb = {
	name: "Lustrous Orb",
	desc: "Increases the power of Dragon-​ and Water-type moves when held by Palkia.",
	wiki: "http://www.serebii.net/itemdex/lustrousorb.shtml"
};

var luxury_ball = {
	name: "Luxury Ball",
	desc: "A comfortable Poké Ball that makes a caught wild Pokémon quickly grow friendly.",
	wiki: "http://www.serebii.net/itemdex/luxuryball.shtml"
};

var macho_brace = {
	name: "Macho Brace",
	desc: "An item to be held by a Pokémon. It is a stiff and heavy brace that promotes strong growth but lowers Speed.",
	wiki: "http://www.serebii.net/itemdex/machobrace.shtml"
};

var magmarizer = {
	name: "Magmarizer",
	desc: "A box packed with a tremendous amount of magma energy. It is loved by a certain Pokémon.",
	wiki: "http://www.serebii.net/itemdex/magmarizer.shtml"
};

var magnet = {
	name: "Magnet",
	desc: "Increases the power of Electric-type moves.",
	wiki: "http://www.serebii.net/itemdex/magnet.shtml"
};

var mago_berry = {
	name: "Mago Berry",
	desc: "Restores HP if it's low, but may cause confusion.",
	wiki: "http://www.serebii.net/itemdex/magoberry.shtml"
};

var magost_berry = {
	name: "Magost Berry",
	desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/magostberry.shtml"
};

var manectite = {
	name: "Manectite",
	desc: "Enables Manectric to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/manectite.shtml"
};

var master_ball = {
	name: "Master Ball",
	desc: "The best Ball with the ultimate level of performance. It will catch any wild Pokémon without fail.",
	wiki: "http://www.serebii.net/itemdex/masterball.shtml"
};

var mawilite = {
	name: "Mawilite",
	desc: "Enables Mawile to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/mawilite.shtml"
};

var max_elixir = {
	name: "Max Elixir",
	desc: "It fully restores the PP of all the moves learned by the targeted Pokémon.",
	wiki: "http://www.serebii.net/itemdex/maxelixir.shtml"
};

var max_ether = {
	name: "Max Ether",
	desc: "It fully restores the PP of a single selected move that has been learned by the target Pokémon.",
	wiki: "http://www.serebii.net/itemdex/maxether.shtml"
};

var max_potion = {
	name: "Max Potion",
	desc: "A spray-type medicine for wounds. It completely restores the HP of a single Pokémon.",
	wiki: "http://www.serebii.net/itemdex/maxpotion.shtml"
};

var max_repel = {
	name: "Max Repel",
	desc: "An item that prevents weak wild Pokémon from appearing for 250 steps after its use.",
	wiki: "http://www.serebii.net/itemdex/maxrepel.shtml"
};

var max_revive = {
	name: "Max Revive",
	desc: "A medicine that revives a fainted Pokémon. It fully restores the Pokémon’s HP.",
	wiki: "http://www.serebii.net/itemdex/maxrevive.shtml"
};

var meadow_plate = {
	name: "Meadow Plate",
	desc: "Increases power of Grass-type moves. Changes Arceus' type to Grass.",
	wiki: "http://www.serebii.net/itemdex/meadowplate.shtml"
};

var medal_box = {
	name: "Medal Box",
	desc: "A box-shaped machine that stores Medals and Medal information.",
	wiki: "http://www.serebii.net/itemdex/medalbox.shtml"
};

var medichamite = {
	name: "Medichamite",
	desc: "Enables Medicham to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/medichamite.shtml"
};

var mental_herb = {
	name: "Mental Herb",
	desc: "An item to be held by a Pokémon. It snaps the holder out of infatuation. It can be used only once.",
	wiki: "http://www.serebii.net/itemdex/mentalherb.shtml"
};

var metagrossite = {
	name: "Metagrossite",
	desc: "One of a variety of mysterious Mega Stones. Have Metagross hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/metagrossite.shtml"
};

var metal_coat = {
	name: "Metal Coat",
	desc: "Increases the power of Steel-type moves.",
	wiki: "http://www.serebii.net/itemdex/metalcoat.shtml"
};

var metal_powder = {
	name: "Metal Powder",
	desc: "Increases Defense when held by Ditto.",
	wiki: "http://www.serebii.net/itemdex/metalpowder.shtml"
};

var metronome = {
	name: "Metronome",
	desc: "Increases the power of moves used consecutively.",
	wiki: "http://www.serebii.net/itemdex/metronome.shtml"
};

var mewtwonite_x = {
	name: "Mewtwonite X",
	desc: "Enables Mewtwo to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/mewtwonitex.shtml"
};

var mewtwonite_y = {
	name: "Mewtwonite Y",
	desc: "Enables Mewtwo to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/mewtwonitey.shtml"
};

var micle_berry = {
	name: "Micle Berry",
	desc: "Increases a move's accuracy when HP is low.",
	wiki: "http://www.serebii.net/itemdex/micleberry.shtml"
};

var mind_plate = {
	name: "Mind Plate",
	desc: "Increases power of Psychic-type moves. Changes Arceus' type to Psychic.",
	wiki: "http://www.serebii.net/itemdex/mindplate.shtml"
};

var miracle_seed = {
	name: "Miracle Seed",
	desc: "Increases the power of Grass-type moves.",
	wiki: "http://www.serebii.net/itemdex/miracleseed.shtml"
};

var moomoo_milk = {
	name: "Moomoo Milk",
	desc: "Milk with a very high nutrition content. It restores the HP of one Pokémon by 100 points.",
	wiki: "http://www.serebii.net/itemdex/moomoomilk.shtml"
};

var moon_ball = {
	name: "Moon Ball",
	desc: "A Poké Ball for catching Pokémon that evolve using the Moon Stone.",
	wiki: "http://www.serebii.net/itemdex/moonball.shtml"
};

var moon_stone = {
	name: "Moon Stone",
	desc: "A peculiar stone that makes certain species of POKéMON evolve. It is as black as the night sky.",
	wiki: "http://www.serebii.net/itemdex/moonstone.shtml"
};

var muscle_band = {
	name: "Muscle Band",
	desc: "Increases the power of Physical-category moves.",
	wiki: "http://www.serebii.net/itemdex/muscleband.shtml"
};

var muscle_wing = {
	name: "Muscle Wing",
	desc: "Increases Attack EVs by 1.",
	wiki: "http://www.serebii.net/itemdex/musclewing.shtml"
};

var mystic_water = {
	name: "Mystic Water",
	desc: "Increases the power of Water-type moves.",
	wiki: "http://www.serebii.net/itemdex/mysticwater.shtml"
};

var nanab_berry = {
	name: "Nanab Berry",
	desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/nanabberry.shtml"
};

var nest_ball = {
	name: "Nest Ball",
	desc: "A somewhat different Poké Ball that works especially well on weaker Pokémon in the wild.",
	wiki: "http://www.serebii.net/itemdex/nestball.shtml"
};

var net_ball = {
	name: "Net Ball",
	desc: "A somewhat different Poké Ball that works especially well on Water- and Bug-type Pokémon.",
	wiki: "http://www.serebii.net/itemdex/netball.shtml"
};

var nevermeltice = {
	name: "Nevermeltice",
	desc: "Increases the power of Ice-type moves.",
	wiki: "http://www.serebii.net/itemdex/nevermeltice.shtml"
};

var nomel_berry = {
	name: "Nomel Berry",
	desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/nomelberry.shtml"
};

var normal_gem = {
	name: "Normal Gem",
	desc: "Increases the power of a Normal-type move only once.",
	wiki: "http://www.serebii.net/itemdex/normalgem.shtml"
};

var nugget = {
	name: "Nugget",
	desc: "A nugget of pure gold that gives off a lustrous gleam. It can be sold at a high price to shops.",
	wiki: "http://www.serebii.net/itemdex/nugget.shtml"
};

var occa_berry = {
	name: "Occa Berry",
	desc: "Weakens a supereffective Fire-type attack against the holding Pokémon.",
	wiki: "http://www.serebii.net/itemdex/occaberry.shtml"
};

var odd_incense = {
	name: "Odd Incense",
	desc: "Increases the power of Psychic-type moves.",
	wiki: "http://www.serebii.net/itemdex/oddincense.shtml"
};

var odd_keystone = {
	name: "Odd Keystone",
	desc: "A vital item that is needed to keep a stone tower from collapsing. Voices can be heard from it occasionally.",
	wiki: "http://www.serebii.net/itemdex/oddkeystone.shtml"
};

var old_amber = {
	name: "Old Amber",
	desc: "A piece of amber that contains the genetic material of an ancient Pokémon. It is clear with a reddish tint.",
	wiki: "http://www.serebii.net/itemdex/oldamber.shtml"
};

var old_gateau = {
	name: "Old Gateau",
	desc: "Old Chateau’s hidden specialty. It heals all the status problems of a single Pokémon.",
	wiki: "http://www.serebii.net/itemdex/oldgateau.shtml"
};

var oran_berry = {
	name: "Oran Berry",
	desc: "If held by a Pokémon, it heals the user by just 10 HP.",
	wiki: "http://www.serebii.net/itemdex/oranberry.shtml"
};

var oval_charm = {
	name: "Oval Charm",
	desc: "An oval charm said to increase the chance of Pokémon Eggs being found at the Day Care.",
	wiki: "http://www.serebii.net/itemdex/ovalcharm.shtml"
};

var oval_stone = {
	name: "Oval Stone",
	desc: "A peculiar stone that makes certain species of Pokémon evolve. It is shaped like an egg.",
	wiki: "http://www.serebii.net/itemdex/ovalstone.shtml"
};

var pamtre_berry = {
	name: "Pamtre Berry",
	desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/pamtreberry.shtml"
};

var park_ball = {
	name: "Park Ball",
	desc: "A special Poké Ball for the Pal Park.",
	wiki: "http://www.serebii.net/itemdex/parkball.shtml"
};

var parlyz_heal = {
	name: "Parlyz Heal",
	desc: "A spray-type medicine. It eliminates paralysis from a single Pokémon.",
	wiki: "http://www.serebii.net/itemdex/parlyzheal.shtml"
};

var pass_orb = {
	name: "Pass Orb",
	desc: "A mysterious orb containing the power of the Unova region, to be used when generating Pass Power.",
	wiki: "http://www.serebii.net/itemdex/passorb.shtml"
};

var passho_berry = {
	name: "Passho Berry",
	desc: "Weakens a supereffective Water-type attack against the holding Pokémon.",
	wiki: "http://www.serebii.net/itemdex/passhoberry.shtml"
};

var payapa_berry = {
	name: "Payapa Berry",
	desc: "Weakens a supereffective Psychic-type attack against the holding Pokémon.",
	wiki: "http://www.serebii.net/itemdex/payapaberry.shtml"
};

var pearl = {
	name: "Pearl",
	desc: "A somewhat-small pearl that sparkles in a pretty silver color. It can be sold cheaply to shops.",
	wiki: "http://www.serebii.net/itemdex/pearl.shtml"
};

var pearl_string = {
	name: "Pearl String",
	desc: "Very large pearls that sparkle in a pretty silver color. A maniac will buy them for a high price.",
	wiki: "http://www.serebii.net/itemdex/pearlstring.shtml"
};

var pecha_berry = {
	name: "Pecha Berry",
	desc: "If held by a Pokémon, it recovers from poison.",
	wiki: "http://www.serebii.net/itemdex/pechaberry.shtml"
};

var permit = {
	name: "Permit",
	desc: "A permit that is needed to enter the Nature Preserve. Not many know about it.",
	wiki: "http://www.serebii.net/itemdex/permit.shtml"
};

var persim_berry = {
	name: "Persim Berry",
	desc: "If held by a Pokémon, it recovers from confusion.",
	wiki: "http://www.serebii.net/itemdex/persimberry.shtml"
};

var petaya_berry = {
	name: "Petaya Berry",
	desc: "Raises Special Attack when HP is low.",
	wiki: "http://www.serebii.net/itemdex/petayaberry.shtml"
};

var pidgeotite = {
	name: "Pidgeotite",
	desc: "One of a variety of mysterious Mega Stones. Have Pidgeot hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/pidgeotite.shtml"
};

var pinap_berry = {
	name: "Pinap Berry",
	desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/pinapberry.shtml"
};

var pink_scarf = {
	name: "Pink Scarf",
	desc: "Raises holder's Cute aspect in a Contest.",
	wiki: "http://www.serebii.net/itemdex/pinkscarf.shtml"
};

var pinsirite = {
	name: "Pinsirite",
	desc: "Enables Pinsir to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/pinsirite.shtml"
};

var pixie_plate = {
	name: "Pixie Plate",
	desc: "Increases power of Fairy-type moves. Changes Arceus' type to Fairy.",
	wiki: "http://www.serebii.net/itemdex/pixieplate.shtml"
};

var plasma_card = {
	name: "Plasma Card",
	desc: "A card key needed to enter the password inside the Plasma Frigate.",
	wiki: "http://www.serebii.net/itemdex/plasmacard.shtml"
};

var plume_fossil = {
	name: "Plume Fossil",
	desc: "A fossil of an ancient Pokémon that flew in the sky in ancient times. It appears to be part of its wing.",
	wiki: "http://www.serebii.net/itemdex/plumefossil.shtml"
};

var pnk_apricorn = {
	name: "Pnk Apricorn",
	desc: "A pink Apricorn. It has a nice, sweet scent.",
	wiki: "http://www.serebii.net/itemdex/pnkapricorn.shtml"
};

var poison_barb = {
	name: "Poison Barb",
	desc: "Increases the power of Poison-type moves.",
	wiki: "http://www.serebii.net/itemdex/poisonbarb.shtml"
};

var poison_gem = {
	name: "Poison Gem",
	desc: "Increases the power of a Poison-type move only once.",
	wiki: "http://www.serebii.net/itemdex/poisongem.shtml"
};

var poké_ball = {
	name: "Poké Ball",
	desc: "A device for catching wild Pokémon. It is thrown like a ball at the target. It is designed as a capsule system.",
	wiki: "http://www.serebii.net/itemdex/pokéball.shtml"
};

var poké_doll = {
	name: "Poké Doll",
	desc: "A doll that attracts Pokémon. Use it to flee from any battle with a wild Pokémon.",
	wiki: "http://www.serebii.net/itemdex/pokédoll.shtml"
};

var poké_toy = {
	name: "Poké Toy",
	desc: "An item that attracts Pokémon. Use it to flee from any battle with a wild Pokémon.",
	wiki: "http://www.serebii.net/itemdex/pokétoy.shtml"
};

var pomeg_berry = {
	name: "Pomeg Berry",
	desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base HP.",
	wiki: "http://www.serebii.net/itemdex/pomegberry.shtml"
};

var potion = {
	name: "Potion",
	desc: "A spray-type medicine for wounds. It restores the HP of one Pokémon by just 20 points.",
	wiki: "http://www.serebii.net/itemdex/potion.shtml"
};

var power_anklet = {
	name: "Power Anklet",
	desc: "A Pokémon held item that promotes Speed gain on leveling, but reduces the Speed stat.",
	wiki: "http://www.serebii.net/itemdex/poweranklet.shtml"
};

var power_band = {
	name: "Power Band",
	desc: "A Pokémon held item that promotes Sp. Def gain on leveling, but reduces the Speed stat.",
	wiki: "http://www.serebii.net/itemdex/powerband.shtml"
};

var power_belt = {
	name: "Power Belt",
	desc: "A Pokémon held item that promotes Defense gain on leveling, but reduces the Speed stat.",
	wiki: "http://www.serebii.net/itemdex/powerbelt.shtml"
};

var power_bracer = {
	name: "Power Bracer",
	desc: "A Pokémon held item that promotes Attack gain on leveling, but reduces the Speed stat.",
	wiki: "http://www.serebii.net/itemdex/powerbracer.shtml"
};

var power_herb = {
	name: "Power Herb",
	desc: "A single-use item to be held by a Pokémon. It allows the immediate use of a move that charges on the first turn.",
	wiki: "http://www.serebii.net/itemdex/powerherb.shtml"
};

var power_lens = {
	name: "Power Lens",
	desc: "A Pokémon held item that promotes Sp. Atk gain on leveling, but reduces the Speed stat.",
	wiki: "http://www.serebii.net/itemdex/powerlens.shtml"
};

var power_plant_pass = {
	name: "Power Plant Pass",
	desc: "This pass serves as an ID card for gaining access to the power plant that lies along Route 13.",
	wiki: "http://www.serebii.net/itemdex/powerplantpass.shtml"
};

var power_weight = {
	name: "Power Weight",
	desc: "A Pokémon held item that promotes HP gain on leveling, but reduces the Speed stat.",
	wiki: "http://www.serebii.net/itemdex/powerweight.shtml"
};

var pp_max = {
	name: "Pp Max",
	desc: "It maximally raises the top PP of a selected move that has been learned by the target Pokémon.",
	wiki: "http://www.serebii.net/itemdex/ppmax.shtml"
};

var pp_up = {
	name: "Pp Up",
	desc: "It slightly raises the maximum PP of a selected move that has been learned by the target Pokémon.",
	wiki: "http://www.serebii.net/itemdex/ppup.shtml"
};

var premier_ball = {
	name: "Premier Ball",
	desc: "A somewhat rare Poké Ball that has been specially made to commemorate an event of some sort.",
	wiki: "http://www.serebii.net/itemdex/premierball.shtml"
};

var pretty_wing = {
	name: "Pretty Wing",
	desc: "Though this feather is beautiful, it’s just a regular feather and has no effect on Pokémon.",
	wiki: "http://www.serebii.net/itemdex/prettywing.shtml"
};

var prism_scale = {
	name: "Prism Scale",
	desc: "A mysterious scale that evolves certain Pokémon. It shines in rainbow colors.",
	wiki: "http://www.serebii.net/itemdex/prismscale.shtml"
};

var profs_letter = {
	name: "Profs Letter",
	desc: "A letter that Professor Sycamore wrote to your mother. A faint but pleasant perfume seems to cling to the paper.",
	wiki: "http://www.serebii.net/itemdex/profsletter.shtml"
};

var protector = {
	name: "Protector",
	desc: "A protective item of some sort. It is extremely stiff and heavy. It is loved by a certain Pokémon.",
	wiki: "http://www.serebii.net/itemdex/protector.shtml"
};

var protein = {
	name: "Protein",
	desc: "A nutritious drink for Pokémon. It raises the base Attack stat of a single Pokémon.",
	wiki: "http://www.serebii.net/itemdex/protein.shtml"
};

var psychic_gem = {
	name: "Psychic Gem",
	desc: "Increases the power of a Psychic-type move only once.",
	wiki: "http://www.serebii.net/itemdex/psychicgem.shtml"
};

var pure_incense = {
	name: "Pure Incense",
	desc: "An item to be held by a Pokémon. It helps keep wild Pokémon away if the holder is the first one in the party.",
	wiki: "http://www.serebii.net/itemdex/pureincense.shtml"
};

var qualot_berry = {
	name: "Qualot Berry",
	desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base Defense stat.",
	wiki: "http://www.serebii.net/itemdex/qualotberry.shtml"
};

var quick_ball = {
	name: "Quick Ball",
	desc: "A somewhat different Poké Ball that provides a better catch rate if it is used at the start of a wild encounter.",
	wiki: "http://www.serebii.net/itemdex/quickball.shtml"
};

var quick_claw = {
	name: "Quick Claw",
	desc: "An item to be held by a Pokémon. A light, sharp claw that lets the bearer move first occasionally.",
	wiki: "http://www.serebii.net/itemdex/quickclaw.shtml"
};

var quick_powder = {
	name: "Quick Powder",
	desc: "Increases Speed when held by Ditto.",
	wiki: "http://www.serebii.net/itemdex/quickpowder.shtml"
};

var rabuta_berry = {
	name: "Rabuta Berry",
	desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/rabutaberry.shtml"
};

var rare_bone = {
	name: "Rare Bone",
	desc: "A bone that is extremely valuable for Pokémon archeology. It can be sold for a high price to shops.",
	wiki: "http://www.serebii.net/itemdex/rarebone.shtml"
};

var rare_candy = {
	name: "Rare Candy",
	desc: "A candy that is packed with energy. It raises the level of a single Pokémon by one.",
	wiki: "http://www.serebii.net/itemdex/rarecandy.shtml"
};

var rawst_berry = {
	name: "Rawst Berry",
	desc: "If held by a Pokémon, it recovers from a burn.",
	wiki: "http://www.serebii.net/itemdex/rawstberry.shtml"
};

var razor_claw = {
	name: "Razor Claw",
	desc: "Increases critical-hit ratio.",
	wiki: "http://www.serebii.net/itemdex/razorclaw.shtml"
};

var razor_fang = {
	name: "Razor Fang",
	desc: "An item to be held by a Pokémon. It may make foes and allies flinch when the holder inflicts damage.",
	wiki: "http://www.serebii.net/itemdex/razorfang.shtml"
};

var razz_berry = {
	name: "Razz Berry",
	desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/razzberry.shtml"
};

var reaper_cloth = {
	name: "Reaper Cloth",
	desc: "A cloth imbued with horrifyingly strong spiritual energy. It is loved by a certain Pokémon.",
	wiki: "http://www.serebii.net/itemdex/reapercloth.shtml"
};

var red_apricorn = {
	name: "Red Apricorn",
	desc: "A red Apricorn. It assails your nostrils.",
	wiki: "http://www.serebii.net/itemdex/redapricorn.shtml"
};

var red_card = {
	name: "Red Card",
	desc: "A card with a mysterious power. When the holder is struck by a foe, the attacker is removed from battle.",
	wiki: "http://www.serebii.net/itemdex/redcard.shtml"
};

var red_flute = {
	name: "Red Flute",
	desc: "A toy flute made from red glass. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/redflute.shtml"
};

var red_scarf = {
	name: "Red Scarf",
	desc: "Raises holder's Cool aspect in a Contest.",
	wiki: "http://www.serebii.net/itemdex/redscarf.shtml"
};

var red_shard = {
	name: "Red Shard",
	desc: "A small red shard. It appears to be from some sort of implement made long ago.",
	wiki: "http://www.serebii.net/itemdex/redshard.shtml"
};

var relic_band = {
	name: "Relic Band",
	desc: "A bracelet made in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/relicband.shtml"
};

var relic_copper = {
	name: "Relic Copper",
	desc: "A copper coin used in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/reliccopper.shtml"
};

var relic_crown = {
	name: "Relic Crown",
	desc: "A crown made in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/reliccrown.shtml"
};

var relic_gold = {
	name: "Relic Gold",
	desc: "A gold coin used in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/relicgold.shtml"
};

var relic_silver = {
	name: "Relic Silver",
	desc: "A silver coin used in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/relicsilver.shtml"
};

var relic_statue = {
	name: "Relic Statue",
	desc: "A stone figure made in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/relicstatue.shtml"
};

var relic_vase = {
	name: "Relic Vase",
	desc: "A vase made in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/relicvase.shtml"
};

var repeat_ball = {
	name: "Repeat Ball",
	desc: "A somewhat different Poké Ball that works especially well on Pokémon species that were previously caught.",
	wiki: "http://www.serebii.net/itemdex/repeatball.shtml"
};

var repel = {
	name: "Repel",
	desc: "An item that prevents weak wild Pokémon from appearing for 100 steps after its use.",
	wiki: "http://www.serebii.net/itemdex/repel.shtml"
};

var reset_urge = {
	name: "Reset Urge",
	desc: "When used, it restores any stat changes of an ally Pokémon.",
	wiki: "http://www.serebii.net/itemdex/reseturge.shtml"
};

var resist_wing = {
	name: "Resist Wing",
	desc: "Increases Defense EVs by 1.",
	wiki: "http://www.serebii.net/itemdex/resistwing.shtml"
};

var reveal_glass = {
	name: "Reveal Glass",
	desc: "A looking glass that reveals the truth. It’s a mysterious glass that returns a Pokémon to its original shape.",
	wiki: "http://www.serebii.net/itemdex/revealglass.shtml"
};

var revival_herb = {
	name: "Revival Herb",
	desc: "A very bitter medicinal herb. It revives a fainted Pokémon, fully restoring its HP.",
	wiki: "http://www.serebii.net/itemdex/revivalherb.shtml"
};

var revive = {
	name: "Revive",
	desc: "A medicine that revives a fainted Pokémon. It restores half the Pokémon’s maximum HP.",
	wiki: "http://www.serebii.net/itemdex/revive.shtml"
};

var rindo_berry = {
	name: "Rindo Berry",
	desc: "Weakens a supereffective Grass-type attack against the holding Pokémon.",
	wiki: "http://www.serebii.net/itemdex/rindoberry.shtml"
};

var ring_target = {
	name: "Ring Target",
	desc: "Moves that would otherwise have no effect will land on the Pokémon that holds it.",
	wiki: "http://www.serebii.net/itemdex/ringtarget.shtml"
};

var rock_gem = {
	name: "Rock Gem",
	desc: "Increases the power of a Rock-type move only once.",
	wiki: "http://www.serebii.net/itemdex/rockgem.shtml"
};

var rock_incense = {
	name: "Rock Incense",
	desc: "Increases the power of Rock-type moves.",
	wiki: "http://www.serebii.net/itemdex/rockincense.shtml"
};

var rocky_helmet = {
	name: "Rocky Helmet",
	desc: "If the holder of this item takes damage, the attacker will also be damaged upon contact.",
	wiki: "http://www.serebii.net/itemdex/rockyhelmet.shtml"
};

var roller_skates = {
	name: "Roller Skates",
	desc: "Attaches roller skates to the bottom of your shoes, allowing you to glide quickly around and perform tricks.",
	wiki: "http://www.serebii.net/itemdex/rollerskates.shtml"
};

var root_fossil = {
	name: "Root Fossil",
	desc: "A fossil of an ancient Pokémon that lived in the sea. It appears to be part of a plant root.",
	wiki: "http://www.serebii.net/itemdex/rootfossil.shtml"
};

var rose_incense = {
	name: "Rose Incense",
	desc: "Increases the power of Grass-type moves.",
	wiki: "http://www.serebii.net/itemdex/roseincense.shtml"
};

var rowap_berry = {
	name: "Rowap Berry",
	desc: "If held by a Pokémon and a special attack lands, the attacker also takes damage.",
	wiki: "http://www.serebii.net/itemdex/rowapberry.shtml"
};

var sablenite = {
	name: "Sablenite",
	desc: "One of a variety of mysterious Mega Stones. Have Sableye hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/sablenite.shtml"
};

var sacred_ash = {
	name: "Sacred Ash",
	desc: "It revives all fainted Pokémon. In doing so, it also fully restores their HP.",
	wiki: "http://www.serebii.net/itemdex/sacredash.shtml"
};

var safari_ball = {
	name: "Safari Ball",
	desc: "A special Poké Ball that is used only in the Great Marsh. It is decorated in a camouflage pattern.",
	wiki: "http://www.serebii.net/itemdex/safariball.shtml"
};

var salac_berry = {
	name: "Salac Berry",
	desc: "Raises Speed when HP is low.",
	wiki: "http://www.serebii.net/itemdex/salacberry.shtml"
};

var salamencite = {
	name: "Salamencite",
	desc: "One of a variety of mysterious Mega Stones. Have Salamence hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/salamencite.shtml"
};

var sceptilite = {
	name: "Sceptilite",
	desc: "One of a variety of mysterious Mega Stones. Have Sceptile hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/sceptilite.shtml"
};

var scizorite = {
	name: "Scizorite",
	desc: "Enables Scizor to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/scizorite.shtml"
};

var scope_lens = {
	name: "Scope Lens",
	desc: "Increases critical-hit ratio.",
	wiki: "http://www.serebii.net/itemdex/scopelens.shtml"
};

var sea_incense = {
	name: "Sea Incense",
	desc: "Increases the power of Water-type moves.",
	wiki: "http://www.serebii.net/itemdex/seaincense.shtml"
};

var sharp_beak = {
	name: "Sharp Beak",
	desc: "Increases the power of Flying-type moves.",
	wiki: "http://www.serebii.net/itemdex/sharpbeak.shtml"
};

var sharpedonite = {
	name: "Sharpedonite",
	desc: "One of a variety of mysterious Mega Stones. Have Sharpedo hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/sharpedonite.shtml"
};

var shed_shell = {
	name: "Shed Shell",
	desc: "A tough, discarded carapace to be held by a Pokémon. It enables the holder to switch with a waiting Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/shedshell.shtml"
};

var shell_bell = {
	name: "Shell Bell",
	desc: "An item to be held by a Pokémon. The holder’s HP is restored a little every time it inflicts damage.",
	wiki: "http://www.serebii.net/itemdex/shellbell.shtml"
};

var shiny_charm = {
	name: "Shiny Charm",
	desc: "A shiny charm said to increase the chance of finding a Shiny Pokémon in the wild.",
	wiki: "http://www.serebii.net/itemdex/shinycharm.shtml"
};

var shiny_stone = {
	name: "Shiny Stone",
	desc: "A peculiar stone that makes certain species of Pokémon evolve. It shines with a dazzling light.",
	wiki: "http://www.serebii.net/itemdex/shinystone.shtml"
};

var shoal_salt = {
	name: "Shoal Salt",
	desc: "Pure salt that can be discovered deep inside the Shoal Cave. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/shoalsalt.shtml"
};

var shoal_shell = {
	name: "Shoal Shell",
	desc: "A pretty seashell that can be found deep inside the Shoal Cave. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/shoalshell.shtml"
};

var shock_drive = {
	name: "Shock Drive",
	desc: "Changes Techno Blast to an Electric-type move when held by Genesect.",
	wiki: "http://www.serebii.net/itemdex/shockdrive.shtml"
};

var shuca_berry = {
	name: "Shuca Berry",
	desc: "Weakens a supereffective Ground-type attack against the holding Pokémon.",
	wiki: "http://www.serebii.net/itemdex/shucaberry.shtml"
};

var silk_scarf = {
	name: "Silk Scarf",
	desc: "Increases the power of Normal-type moves.",
	wiki: "http://www.serebii.net/itemdex/silkscarf.shtml"
};

var silverpowder = {
	name: "Silverpowder",
	desc: "Increases the power of Bug-type moves.",
	wiki: "http://www.serebii.net/itemdex/silverpowder.shtml"
};

var sitrus_berry = {
	name: "Sitrus Berry",
	desc: "If held by a Pokémon, it heals the user’s HP a little.",
	wiki: "http://www.serebii.net/itemdex/sitrusberry.shtml"
};

var skull_fossil = {
	name: "Skull Fossil",
	desc: "A fossil from a prehistoric Pokémon that lived on the land. It appears to be part of a head.",
	wiki: "http://www.serebii.net/itemdex/skullfossil.shtml"
};

var sky_plate = {
	name: "Sky Plate",
	desc: "Increases power of Flying-type moves. Changes Arceus' type to Flying.",
	wiki: "http://www.serebii.net/itemdex/skyplate.shtml"
};

var slowbronite = {
	name: "Slowbronite",
	desc: "One of a variety of mysterious Mega Stones. Have Slowbro hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/slowbronite.shtml"
};

var smoke_ball = {
	name: "Smoke Ball",
	desc: "An item to be held by a Pokémon. It enables the holder to flee from any wild Pokémon without fail.",
	wiki: "http://www.serebii.net/itemdex/smokeball.shtml"
};

var smooth_rock = {
	name: "Smooth Rock",
	desc: "A Pokémon held item that extends the duration of the move Sandstorm used by the holder.",
	wiki: "http://www.serebii.net/itemdex/smoothrock.shtml"
};

var soda_pop = {
	name: "Soda Pop",
	desc: "A fizzy soda drink. It restores the HP of one POKéMON by 60 points.",
	wiki: "http://www.serebii.net/itemdex/sodapop.shtml"
};

var soft_sand = {
	name: "Soft Sand",
	desc: "Increases the power of Ground-type moves.",
	wiki: "http://www.serebii.net/itemdex/softsand.shtml"
};

var soothe_bell = {
	name: "Soothe Bell",
	desc: "An item to be held by a Pokémon. It is a bell with a comforting chime that calms the holder and makes it friendly.",
	wiki: "http://www.serebii.net/itemdex/soothebell.shtml"
};

var soul_dew = {
	name: "Soul Dew",
	desc: "Increases both Special Attack and Special Defense when held by Latios or Latias.",
	wiki: "http://www.serebii.net/itemdex/souldew.shtml"
};

var spell_tag = {
	name: "Spell Tag",
	desc: "Increases the power of Ghost-type moves.",
	wiki: "http://www.serebii.net/itemdex/spelltag.shtml"
};

var spelon_berry = {
	name: "Spelon Berry",
	desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/spelonberry.shtml"
};

var splash_plate = {
	name: "Splash Plate",
	desc: "Increases power of Water-type moves. Changes Arceus' type to Water.",
	wiki: "http://www.serebii.net/itemdex/splashplate.shtml"
};

var spooky_plate = {
	name: "Spooky Plate",
	desc: "Increases power of Ghost-type moves. Changes Arceus' type to Ghost.",
	wiki: "http://www.serebii.net/itemdex/spookyplate.shtml"
};

var sport_ball = {
	name: "Sport Ball",
	desc: "A special Poké Ball for the Bug-Catching Contest.",
	wiki: "http://www.serebii.net/itemdex/sportball.shtml"
};

var sprinklotad = {
	name: "Sprinklotad",
	desc: "A watering can shaped like a Lotad. It helps promote the healthy growth of any Berries planted in good, soft soil.",
	wiki: "http://www.serebii.net/itemdex/sprinklotad.shtml"
};

var stable_mulch = {
	name: "Stable Mulch",
	desc: "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/stablemulch.shtml"
};

var star_piece = {
	name: "Star Piece",
	desc: "A shard of a pretty gem that sparkles in a red color. It can be sold at a high price to shops.",
	wiki: "http://www.serebii.net/itemdex/starpiece.shtml"
};

var stardust = {
	name: "Stardust",
	desc: "Lovely, red-colored sand with a loose, silky feel. It can be sold at a high price to shops.",
	wiki: "http://www.serebii.net/itemdex/stardust.shtml"
};

var starf_berry = {
	name: "Starf Berry",
	desc: "Sharply raises a random stat when HP is low.",
	wiki: "http://www.serebii.net/itemdex/starfberry.shtml"
};

var steel_gem = {
	name: "Steel Gem",
	desc: "Increases the power of a Steel-type move only once.",
	wiki: "http://www.serebii.net/itemdex/steelgem.shtml"
};

var steelixite = {
	name: "Steelixite",
	desc: "One of a variety of mysterious Mega Stones. Have Steelix hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/steelixite.shtml"
};

var stick = {
	name: "Stick",
	desc: "Increases critical-hit ratio when held by Farfetch'd.",
	wiki: "http://www.serebii.net/itemdex/stick.shtml"
};

var sticky_barb = {
	name: "Sticky Barb",
	desc: "A held item that damages the holder on every turn. It may latch on to foes and allies that touch the holder.",
	wiki: "http://www.serebii.net/itemdex/stickybarb.shtml"
};

var stone_plate = {
	name: "Stone Plate",
	desc: "Increases power of Rock-type moves. Changes Arceus' type to Rock.",
	wiki: "http://www.serebii.net/itemdex/stoneplate.shtml"
};

var sun_stone = {
	name: "Sun Stone",
	desc: "A peculiar stone that makes certain species of POKéMON evolve. It is as red as the sun.",
	wiki: "http://www.serebii.net/itemdex/sunstone.shtml"
};

var super_potion = {
	name: "Super Potion",
	desc: "A spray-type medicine for wounds. It restores the HP of one Pokémon by 50 points.",
	wiki: "http://www.serebii.net/itemdex/superpotion.shtml"
};

var super_repel = {
	name: "Super Repel",
	desc: "An item that prevents weak wild Pokémon from appearing for 200 steps after its use.",
	wiki: "http://www.serebii.net/itemdex/superrepel.shtml"
};

var swampertite = {
	name: "Swampertite",
	desc: "One of a variety of mysterious Mega Stones. Have Swampert hold it, and this stone will enable it to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/swampertite.shtml"
};

var sweet_heart = {
	name: "Sweet Heart",
	desc: "Very sweet chocolate. It restores the HP of one Pokémon by only 20 points.",
	wiki: "http://www.serebii.net/itemdex/sweetheart.shtml"
};

var swift_wing = {
	name: "Swift Wing",
	desc: "Increases Speed EVs by 1.",
	wiki: "http://www.serebii.net/itemdex/swiftwing.shtml"
};

var tamato_berry = {
	name: "Tamato Berry",
	desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base Speed stat.",
	wiki: "http://www.serebii.net/itemdex/tamatoberry.shtml"
};

var tanga_berry = {
	name: "Tanga Berry",
	desc: "Weakens a supereffective Bug-type attack against the holding Pokémon.",
	wiki: "http://www.serebii.net/itemdex/tangaberry.shtml"
};

var thick_club = {
	name: "Thick Club",
	desc: "Increases Attack when held by Cubone or Marowak.",
	wiki: "http://www.serebii.net/itemdex/thickclub.shtml"
};

var thunderstone = {
	name: "Thunderstone",
	desc: "A peculiar stone that makes certain species of POKéMON evolve. It has a thunderbolt pattern.",
	wiki: "http://www.serebii.net/itemdex/thunderstone.shtml"
};

var timer_ball = {
	name: "Timer Ball",
	desc: "A somewhat different BALL that becomes progressively better the more turns there are in a battle.",
	wiki: "http://www.serebii.net/itemdex/timerball.shtml"
};

var tinymushroom = {
	name: "Tinymushroom",
	desc: "A small and rare mushroom. It is sought after by collectors.",
	wiki: "http://www.serebii.net/itemdex/tinymushroom.shtml"
};

var tm01 = {
	name: "TM01",
	desc: "Teaches the move Mega Punch/DynamicPunch/Focus Punch/Hone Claws.",
	wiki: "http://www.serebii.net/itemdex/tm01.shtml"
};

var tm02 = {
	name: "TM02",
	desc: "Teaches the move Razor Wind/Headbutt/Dragon Claw.",
	wiki: "http://www.serebii.net/itemdex/tm02.shtml"
};

var tm03 = {
	name: "TM03",
	desc: "Teaches the move Swords Dance/Curse/Water Pulse/Psyshock.",
	wiki: "http://www.serebii.net/itemdex/tm03.shtml"
};

var tm04 = {
	name: "TM04",
	desc: "Teaches the move Whirlwind/Rollout/Calm Mind.",
	wiki: "http://www.serebii.net/itemdex/tm04.shtml"
};

var tm05 = {
	name: "TM05",
	desc: "Teaches the move Mega Kick/Roar.",
	wiki: "http://www.serebii.net/itemdex/tm05.shtml"
};

var tm06 = {
	name: "TM06",
	desc: "Teaches the move Toxic.",
	wiki: "http://www.serebii.net/itemdex/tm06.shtml"
};

var tm07 = {
	name: "TM07",
	desc: "Teaches the move Horn Drill/Zap Cannon/Hail.",
	wiki: "http://www.serebii.net/itemdex/tm07.shtml"
};

var tm08 = {
	name: "TM08",
	desc: "Teaches the move Body Slam/Rock Smash/Bulk Up.",
	wiki: "http://www.serebii.net/itemdex/tm08.shtml"
};

var tm09 = {
	name: "TM09",
	desc: "Teaches the move Take Down/Psych Up/Bullet Seed/Venoshock.",
	wiki: "http://www.serebii.net/itemdex/tm09.shtml"
};

var tm10 = {
	name: "TM10",
	desc: "Teaches the move Double-Edge/Hidden Power.",
	wiki: "http://www.serebii.net/itemdex/tm10.shtml"
};

var tm100 = {
	name: "TM100",
	desc: "Teaches the move Confide.",
	wiki: "http://www.serebii.net/itemdex/tm100.shtml"
};

var tm11 = {
	name: "TM11",
	desc: "Teaches the move BubbleBeam/Sunny Day.",
	wiki: "http://www.serebii.net/itemdex/tm11.shtml"
};

var tm12 = {
	name: "TM12",
	desc: "Teaches the move Water Gun/Sweet Scent/Taunt.",
	wiki: "http://www.serebii.net/itemdex/tm12.shtml"
};

var tm13 = {
	name: "TM13",
	desc: "Teaches the move Snore/Ice Beam.",
	wiki: "http://www.serebii.net/itemdex/tm13.shtml"
};

var tm14 = {
	name: "TM14",
	desc: "Teaches the move Blizzard.",
	wiki: "http://www.serebii.net/itemdex/tm14.shtml"
};

var tm15 = {
	name: "TM15",
	desc: "Teaches the move Hyper Beam.",
	wiki: "http://www.serebii.net/itemdex/tm15.shtml"
};

var tm16 = {
	name: "TM16",
	desc: "Teaches the move Pay Day/Icy Wind/Light Screen.",
	wiki: "http://www.serebii.net/itemdex/tm16.shtml"
};

var tm17 = {
	name: "TM17",
	desc: "Teaches the move Submission/Protect.",
	wiki: "http://www.serebii.net/itemdex/tm17.shtml"
};

var tm18 = {
	name: "TM18",
	desc: "Teaches the move Counter/Rain Dance.",
	wiki: "http://www.serebii.net/itemdex/tm18.shtml"
};

var tm19 = {
	name: "TM19",
	desc: "Teaches the move Seismic Toss/Giga Drain/Telekinesis/Roost.",
	wiki: "http://www.serebii.net/itemdex/tm19.shtml"
};

var tm20 = {
	name: "TM20",
	desc: "Teaches the move Rage/Endure/Safeguard.",
	wiki: "http://www.serebii.net/itemdex/tm20.shtml"
};

var tm21 = {
	name: "TM21",
	desc: "Teaches the move Mega Drain/Frustration.",
	wiki: "http://www.serebii.net/itemdex/tm21.shtml"
};

var tm22 = {
	name: "TM22",
	desc: "Teaches the move SolarBeam.",
	wiki: "http://www.serebii.net/itemdex/tm22.shtml"
};

var tm23 = {
	name: "TM23",
	desc: "Teaches the move Dragon Rage/Iron Tail/Smack Down.",
	wiki: "http://www.serebii.net/itemdex/tm23.shtml"
};

var tm24 = {
	name: "TM24",
	desc: "Teaches the move Thunderbolt/DragonBreath.",
	wiki: "http://www.serebii.net/itemdex/tm24.shtml"
};

var tm25 = {
	name: "TM25",
	desc: "Teaches the move Thunder.",
	wiki: "http://www.serebii.net/itemdex/tm25.shtml"
};

var tm26 = {
	name: "TM26",
	desc: "Teaches the move Earthquake.",
	wiki: "http://www.serebii.net/itemdex/tm26.shtml"
};

var tm27 = {
	name: "TM27",
	desc: "Teaches the move Fissure/Return.",
	wiki: "http://www.serebii.net/itemdex/tm27.shtml"
};

var tm28 = {
	name: "TM28",
	desc: "Teaches the move Dig.",
	wiki: "http://www.serebii.net/itemdex/tm28.shtml"
};

var tm29 = {
	name: "TM29",
	desc: "Teaches the move Psychic.",
	wiki: "http://www.serebii.net/itemdex/tm29.shtml"
};

var tm30 = {
	name: "TM30",
	desc: "Teaches the move Teleport/Shadow Ball.",
	wiki: "http://www.serebii.net/itemdex/tm30.shtml"
};

var tm31 = {
	name: "TM31",
	desc: "Teaches the move Mimic/Mud-Slap/Brick Break.",
	wiki: "http://www.serebii.net/itemdex/tm31.shtml"
};

var tm32 = {
	name: "TM32",
	desc: "Teaches the move Double Team.",
	wiki: "http://www.serebii.net/itemdex/tm32.shtml"
};

var tm33 = {
	name: "TM33",
	desc: "Teaches the move Ice Punch/Reflect.",
	wiki: "http://www.serebii.net/itemdex/tm33.shtml"
};

var tm34 = {
	name: "TM34",
	desc: "Teaches the move Bide/Swagger/Shock Wave/Sludge Wave.",
	wiki: "http://www.serebii.net/itemdex/tm34.shtml"
};

var tm35 = {
	name: "TM35",
	desc: "Teaches the move Metronome/Sleep Talk/Flamethrower.",
	wiki: "http://www.serebii.net/itemdex/tm35.shtml"
};

var tm36 = {
	name: "TM36",
	desc: "Teaches the move Selfdestruct/Sludge Bomb.",
	wiki: "http://www.serebii.net/itemdex/tm36.shtml"
};

var tm37 = {
	name: "TM37",
	desc: "Teaches the move Egg Bomb/Sandstorm.",
	wiki: "http://www.serebii.net/itemdex/tm37.shtml"
};

var tm38 = {
	name: "TM38",
	desc: "Teaches the move Fire Blast.",
	wiki: "http://www.serebii.net/itemdex/tm38.shtml"
};

var tm39 = {
	name: "TM39",
	desc: "Teaches the move Swift/Rock Tomb.",
	wiki: "http://www.serebii.net/itemdex/tm39.shtml"
};

var tm40 = {
	name: "TM40",
	desc: "Teaches the move Skull Bash/Defense Curl/Aerial Ace.",
	wiki: "http://www.serebii.net/itemdex/tm40.shtml"
};

var tm41 = {
	name: "TM41",
	desc: "Teaches the move Softboiled/ThunderPunch/Torment.",
	wiki: "http://www.serebii.net/itemdex/tm41.shtml"
};

var tm42 = {
	name: "TM42",
	desc: "Teaches the move Dream Eater/Facade.",
	wiki: "http://www.serebii.net/itemdex/tm42.shtml"
};

var tm43 = {
	name: "TM43",
	desc: "Teaches the move Sky Attack/Detect/Secret Power/Flame Charge.",
	wiki: "http://www.serebii.net/itemdex/tm43.shtml"
};

var tm44 = {
	name: "TM44",
	desc: "Teaches the move Rest.",
	wiki: "http://www.serebii.net/itemdex/tm44.shtml"
};

var tm45 = {
	name: "TM45",
	desc: "Teaches the move Thunder Wave/Attract.",
	wiki: "http://www.serebii.net/itemdex/tm45.shtml"
};

var tm46 = {
	name: "TM46",
	desc: "Teaches the move Psywave/Thief.",
	wiki: "http://www.serebii.net/itemdex/tm46.shtml"
};

var tm47 = {
	name: "TM47",
	desc: "Teaches the move Explosion/Steel Wing/Low Sweep.",
	wiki: "http://www.serebii.net/itemdex/tm47.shtml"
};

var tm48 = {
	name: "TM48",
	desc: "Teaches the move Rock Slide/Fire Punch/Skill Swap/Round.",
	wiki: "http://www.serebii.net/itemdex/tm48.shtml"
};

var tm49 = {
	name: "TM49",
	desc: "Teaches the move Tri Attack/Fury Cutter/Snatch/Echoed Voice.",
	wiki: "http://www.serebii.net/itemdex/tm49.shtml"
};

var tm50 = {
	name: "TM50",
	desc: "Teaches the move Substitute/Nightmare/Overheat.",
	wiki: "http://www.serebii.net/itemdex/tm50.shtml"
};

var tm51 = {
	name: "TM51",
	desc: "Teaches the move Roost/Ally Switch/Steel Wing.",
	wiki: "http://www.serebii.net/itemdex/tm51.shtml"
};

var tm52 = {
	name: "TM52",
	desc: "Teaches the move Focus Blast.",
	wiki: "http://www.serebii.net/itemdex/tm52.shtml"
};

var tm53 = {
	name: "TM53",
	desc: "Teaches the move Energy Ball.",
	wiki: "http://www.serebii.net/itemdex/tm53.shtml"
};

var tm54 = {
	name: "TM54",
	desc: "Teaches the move False Swipe.",
	wiki: "http://www.serebii.net/itemdex/tm54.shtml"
};

var tm55 = {
	name: "TM55",
	desc: "Teaches the move Brine/Scald.",
	wiki: "http://www.serebii.net/itemdex/tm55.shtml"
};

var tm56 = {
	name: "TM56",
	desc: "Teaches the move Fling.",
	wiki: "http://www.serebii.net/itemdex/tm56.shtml"
};

var tm57 = {
	name: "TM57",
	desc: "Teaches the move Charge Beam.",
	wiki: "http://www.serebii.net/itemdex/tm57.shtml"
};

var tm58 = {
	name: "TM58",
	desc: "Teaches the move Endure/Sky Drop.",
	wiki: "http://www.serebii.net/itemdex/tm58.shtml"
};

var tm59 = {
	name: "TM59",
	desc: "Teaches the move Dragon Pulse/Incinerate.",
	wiki: "http://www.serebii.net/itemdex/tm59.shtml"
};

var tm60 = {
	name: "TM60",
	desc: "Teaches the move Drain Punch/Quash.",
	wiki: "http://www.serebii.net/itemdex/tm60.shtml"
};

var tm61 = {
	name: "TM61",
	desc: "Teaches the move Will-O-Wisp.",
	wiki: "http://www.serebii.net/itemdex/tm61.shtml"
};

var tm62 = {
	name: "TM62",
	desc: "Teaches the move Silver Wind/Acrobatics.",
	wiki: "http://www.serebii.net/itemdex/tm62.shtml"
};

var tm63 = {
	name: "TM63",
	desc: "Teaches the move Embargo.",
	wiki: "http://www.serebii.net/itemdex/tm63.shtml"
};

var tm64 = {
	name: "TM64",
	desc: "Teaches the move Explosion.",
	wiki: "http://www.serebii.net/itemdex/tm64.shtml"
};

var tm65 = {
	name: "TM65",
	desc: "Teaches the move Shadow Claw.",
	wiki: "http://www.serebii.net/itemdex/tm65.shtml"
};

var tm66 = {
	name: "TM66",
	desc: "Teaches the move Payback.",
	wiki: "http://www.serebii.net/itemdex/tm66.shtml"
};

var tm67 = {
	name: "TM67",
	desc: "Teaches the move Recycle/Retaliate.",
	wiki: "http://www.serebii.net/itemdex/tm67.shtml"
};

var tm68 = {
	name: "TM68",
	desc: "Teaches the move Giga Impact.",
	wiki: "http://www.serebii.net/itemdex/tm68.shtml"
};

var tm69 = {
	name: "TM69",
	desc: "Teaches the move Rock Polish.",
	wiki: "http://www.serebii.net/itemdex/tm69.shtml"
};

var tm70 = {
	name: "TM70",
	desc: "Teaches the move Flash.",
	wiki: "http://www.serebii.net/itemdex/tm70.shtml"
};

var tm71 = {
	name: "TM71",
	desc: "Teaches the move Stone Edge.",
	wiki: "http://www.serebii.net/itemdex/tm71.shtml"
};

var tm72 = {
	name: "TM72",
	desc: "Teaches the move Avalanche/Volt Switch.",
	wiki: "http://www.serebii.net/itemdex/tm72.shtml"
};

var tm73 = {
	name: "TM73",
	desc: "Teaches the move Thunder Wave.",
	wiki: "http://www.serebii.net/itemdex/tm73.shtml"
};

var tm74 = {
	name: "TM74",
	desc: "Teaches the move Gyro Ball.",
	wiki: "http://www.serebii.net/itemdex/tm74.shtml"
};

var tm75 = {
	name: "TM75",
	desc: "Teaches the move Swords Dance.",
	wiki: "http://www.serebii.net/itemdex/tm75.shtml"
};

var tm76 = {
	name: "TM76",
	desc: "Teaches the move Stealth Rock/Struggle Bug.",
	wiki: "http://www.serebii.net/itemdex/tm76.shtml"
};

var tm77 = {
	name: "TM77",
	desc: "Teaches the move Psych Up.",
	wiki: "http://www.serebii.net/itemdex/tm77.shtml"
};

var tm78 = {
	name: "TM78",
	desc: "Teaches the move Captivate/Bulldoze.",
	wiki: "http://www.serebii.net/itemdex/tm78.shtml"
};

var tm79 = {
	name: "TM79",
	desc: "Teaches the move Dark Pulse/Frost Breath.",
	wiki: "http://www.serebii.net/itemdex/tm79.shtml"
};

var tm80 = {
	name: "TM80",
	desc: "Teaches the move Rock Slide.",
	wiki: "http://www.serebii.net/itemdex/tm80.shtml"
};

var tm81 = {
	name: "TM81",
	desc: "Teaches the move X-Scissor.",
	wiki: "http://www.serebii.net/itemdex/tm81.shtml"
};

var tm82 = {
	name: "TM82",
	desc: "Teaches the move Sleep Talk/Dragon Tail.",
	wiki: "http://www.serebii.net/itemdex/tm82.shtml"
};

var tm83 = {
	name: "TM83",
	desc: "Teaches the move Natural Gift/Work Up/Infestation.",
	wiki: "http://www.serebii.net/itemdex/tm83.shtml"
};

var tm84 = {
	name: "TM84",
	desc: "Teaches the move Poison Jab.",
	wiki: "http://www.serebii.net/itemdex/tm84.shtml"
};

var tm85 = {
	name: "TM85",
	desc: "Teaches the move Dream Eater.",
	wiki: "http://www.serebii.net/itemdex/tm85.shtml"
};

var tm86 = {
	name: "TM86",
	desc: "Teaches the move Grass Knot.",
	wiki: "http://www.serebii.net/itemdex/tm86.shtml"
};

var tm87 = {
	name: "TM87",
	desc: "Teaches the move Swagger.",
	wiki: "http://www.serebii.net/itemdex/tm87.shtml"
};

var tm88 = {
	name: "TM88",
	desc: "Teaches the move Pluck/Sleep Talk.",
	wiki: "http://www.serebii.net/itemdex/tm88.shtml"
};

var tm89 = {
	name: "TM89",
	desc: "Teaches the move U-turn.",
	wiki: "http://www.serebii.net/itemdex/tm89.shtml"
};

var tm90 = {
	name: "TM90",
	desc: "Teaches the move Substitute.",
	wiki: "http://www.serebii.net/itemdex/tm90.shtml"
};

var tm91 = {
	name: "TM91",
	desc: "Teaches the move Flash Cannon.",
	wiki: "http://www.serebii.net/itemdex/tm91.shtml"
};

var tm92 = {
	name: "TM92",
	desc: "Teaches the move Trick Room.",
	wiki: "http://www.serebii.net/itemdex/tm92.shtml"
};

var tm93 = {
	name: "TM93",
	desc: "Teaches the move Wild Charge.",
	wiki: "http://www.serebii.net/itemdex/tm93.shtml"
};

var tm94 = {
	name: "TM94",
	desc: "Teaches the move Rock Smash.",
	wiki: "http://www.serebii.net/itemdex/tm94.shtml"
};

var tm95 = {
	name: "TM95",
	desc: "Teaches the move Snarl.",
	wiki: "http://www.serebii.net/itemdex/tm95.shtml"
};

var tm96 = {
	name: "TM96",
	desc: "Teaches the move Nature Power.",
	wiki: "http://www.serebii.net/itemdex/tm96.shtml"
};

var tm97 = {
	name: "TM97",
	desc: "Teaches the move Dark Pulse.",
	wiki: "http://www.serebii.net/itemdex/tm97.shtml"
};

var tm98 = {
	name: "TM98",
	desc: "Teaches the move Power-Up Punch.",
	wiki: "http://www.serebii.net/itemdex/tm98.shtml"
};

var tm99 = {
	name: "TM99",
	desc: "Teaches the move Dazzling Gleam.",
	wiki: "http://www.serebii.net/itemdex/tm99.shtml"
};

var tmv_pass = {
	name: "TMv Pass",
	desc: "A commuter pass that allows the holder to ride the TMV between Lumiose City and Kiloude City at any time.",
	wiki: "http://www.serebii.net/itemdex/tmvpass.shtml"
};

var toxic_orb = {
	name: "Toxic Orb",
	desc: "An item to be held by a Pokémon. It is a bizarre orb that badly poisons the holder in battle.",
	wiki: "http://www.serebii.net/itemdex/toxicorb.shtml"
};

var toxic_plate = {
	name: "Toxic Plate",
	desc: "Increases power of Poison-type moves. Changes Arceus' type to Poison.",
	wiki: "http://www.serebii.net/itemdex/toxicplate.shtml"
};

var twistedspoon = {
	name: "Twistedspoon",
	desc: "Increases the power of Psychic-type moves.",
	wiki: "http://www.serebii.net/itemdex/twistedspoon.shtml"
};

var tyranitarite = {
	name: "Tyranitarite",
	desc: "Enables Tyranitar to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/tyranitarite.shtml"
};

var ultra_ball = {
	name: "Ultra Ball",
	desc: "An ultra-performance Ball that provides a higher Pokémon catch rate than a Great Ball.",
	wiki: "http://www.serebii.net/itemdex/ultraball.shtml"
};

var up_grade = {
	name: "Up-Grade",
	desc: "A transparent device filled with all sorts of data. It was produced by Silph Co.",
	wiki: "http://www.serebii.net/itemdex/up-grade.shtml"
};

var venusaurite = {
	name: "Venusaurite",
	desc: "Enables Venusaur to Mega Evolve during battle.",
	wiki: "http://www.serebii.net/itemdex/venusaurite.shtml"
};

var wacan_berry = {
	name: "Wacan Berry",
	desc: "Weakens a supereffective Electric-type attack against the holding Pokémon.",
	wiki: "http://www.serebii.net/itemdex/wacanberry.shtml"
};

var water_gem = {
	name: "Water Gem",
	desc: "Increases the power of a Water-type move only once.",
	wiki: "http://www.serebii.net/itemdex/watergem.shtml"
};

var water_stone = {
	name: "Water Stone",
	desc: "A peculiar stone that makes certain species of Pokémon evolve. It is a clear, light blue.",
	wiki: "http://www.serebii.net/itemdex/waterstone.shtml"
};

var watmel_berry = {
	name: "Watmel Berry",
	desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/watmelberry.shtml"
};

var wave_incense = {
	name: "Wave Incense",
	desc: "Increases the power of Water-type moves.",
	wiki: "http://www.serebii.net/itemdex/waveincense.shtml"
};

var wepear_berry = {
	name: "Wepear Berry",
	desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/wepearberry.shtml"
};

var white_flute = {
	name: "White Flute",
	desc: "A toy flute made from white glass. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/whiteflute.shtml"
};

var white_herb = {
	name: "White Herb",
	desc: "An item to be held by a POKéMON. It restores any lowered stat in battle. It can be used only once.",
	wiki: "http://www.serebii.net/itemdex/whiteherb.shtml"
};

var wht_apricorn = {
	name: "Wht Apricorn",
	desc: "A white Apricorn. It doesn’t smell like anything.",
	wiki: "http://www.serebii.net/itemdex/whtapricorn.shtml"
};

var wide_lens = {
	name: "Wide Lens",
	desc: "Increases the accuracy of moves.",
	wiki: "http://www.serebii.net/itemdex/widelens.shtml"
};

var wiki_berry = {
	name: "Wiki Berry",
	desc: "Restores HP if it's low, but may cause confusion.",
	wiki: "http://www.serebii.net/itemdex/wikiberry.shtml"
};

var wise_glasses = {
	name: "Wise Glasses",
	desc: "Increases the power of Special-category moves.",
	wiki: "http://www.serebii.net/itemdex/wiseglasses.shtml"
};

var x_accuracy = {
	name: "X Accuracy",
	desc: "Raises Accuracy of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xaccuracy.shtml"
};

var x_accuracy_2 = {
	name: "X Accuracy 2",
	desc: "Sharply raises Accuracy of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xaccuracy2.shtml"
};

var x_accuracy_3 = {
	name: "X Accuracy 3",
	desc: "Drastically raises Accuracy of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xaccuracy3.shtml"
};

var x_accuracy_6 = {
	name: "X Accuracy 6",
	desc: "Immensely raises Accuracy of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xaccuracy6.shtml"
};

var x_attack = {
	name: "X Attack",
	desc: "Raises Attack of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xattack.shtml"
};

var x_attack_2 = {
	name: "X Attack 2",
	desc: "Sharply raises Attack of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xattack2.shtml"
};

var x_attack_3 = {
	name: "X Attack 3",
	desc: "Drastically raises Attack of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xattack3.shtml"
};

var x_attack_6 = {
	name: "X Attack 6",
	desc: "Immensely raises Attack of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xattack6.shtml"
};

var x_defend = {
	name: "X Defend",
	desc: "Raises Defense of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xdefend.shtml"
};

var x_defend_2 = {
	name: "X Defend 2",
	desc: "Sharply raises Defense of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xdefend2.shtml"
};

var x_defend_3 = {
	name: "X Defend 3",
	desc: "Drastically raises Defense of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xdefend3.shtml"
};

var x_defend_6 = {
	name: "X Defend 6",
	desc: "Immensely raises Defense of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xdefend6.shtml"
};

var x_sp_def = {
	name: "X Sp Def",
	desc: "Raises Special Defense of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xspdef.shtml"
};

var x_sp_def_2 = {
	name: "X Sp Def 2",
	desc: "Sharply raises Special Defense of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xspdef2.shtml"
};

var x_sp_def_3 = {
	name: "X Sp Def 3",
	desc: "Drastically raises Special Defense of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xspdef3.shtml"
};

var x_sp_def_6 = {
	name: "X Sp Def 6",
	desc: "Immensely raises Special Defense of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xspdef6.shtml"
};

var x_special = {
	name: "X Special",
	desc: "Raises Special Attack of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xspecial.shtml"
};

var x_special_2 = {
	name: "X Special 2",
	desc: "Sharply raises Special Attack of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xspecial2.shtml"
};

var x_special_3 = {
	name: "X Special 3",
	desc: "Drastically raises Special Attack of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xspecial3.shtml"
};

var x_special_6 = {
	name: "X Special 6",
	desc: "Immensely raises Special Attack of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xspecial6.shtml"
};

var x_speed = {
	name: "X Speed",
	desc: "Raises Speed of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xspeed.shtml"
};

var x_speed_2 = {
	name: "X Speed 2",
	desc: "Sharply raises Speed of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xspeed2.shtml"
};

var x_speed_3 = {
	name: "X Speed 3",
	desc: "Drastically raises Speed of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xspeed3.shtml"
};

var x_speed_6 = {
	name: "X Speed 6",
	desc: "Immensely raises Speed of a Pokémon in battle.",
	wiki: "http://www.serebii.net/itemdex/xspeed6.shtml"
};

var yache_berry = {
	name: "Yache Berry",
	desc: "Weakens a supereffective Ice-type attack against the holding Pokémon.",
	wiki: "http://www.serebii.net/itemdex/yacheberry.shtml"
};

var yellow_flute = {
	name: "Yellow Flute",
	desc: "A toy flute made from yellow glass. A maniac will buy it for a high price.",
	wiki: "http://www.serebii.net/itemdex/yellowflute.shtml"
};

var yellow_scarf = {
	name: "Yellow Scarf",
	desc: "Raises holder's Tough aspect in a Contest.",
	wiki: "http://www.serebii.net/itemdex/yellowscarf.shtml"
};

var yellow_shard = {
	name: "Yellow Shard",
	desc: "A small yellow shard. It appears to be from some sort of implement made long ago.",
	wiki: "http://www.serebii.net/itemdex/yellowshard.shtml"
};

var ylw_apricorn = {
	name: "Ylw Apricorn",
	desc: "A yellow Apricorn. It has an invigorating scent.",
	wiki: "http://www.serebii.net/itemdex/ylwapricorn.shtml"
};

var zap_plate = {
	name: "Zap Plate",
	desc: "Increases power of Electric-type moves. Changes Arceus' type to Electric.",
	wiki: "http://www.serebii.net/itemdex/zapplate.shtml"
};

var zinc = {
	name: "Zinc",
	desc: "A nutritious drink for Pokémon. It raises the base Sp. Def (Special Defense) stat of a single Pokémon.",
	wiki: "http://www.serebii.net/itemdex/zinc.shtml"
};

var zoom_lens = {
	name: "Zoom Lens",
	desc: "Raises a move's accuracy if the holder moves after its target.",
	wiki: "http://www.serebii.net/itemdex/zoomlens.shtml"
};

var normalium_z = {
	name: "Normalium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Normal-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/normaliumz.shtml"
};

var firium_z = {
	name: "Firium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Fire-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/firiumz.shtml"
};

var waterium_z = {
	name: "Waterium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Water-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/wateriumz.shtml"
};

var electrium_z = {
	name: "Electrium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Electric-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/electriumz.shtml"
};

var grassium_z = {
	name: "Grassium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Grass-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/grassiumz.shtml"
};

var icium_z = {
	name: "Icium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Ice-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/iciumz.shtml"
};

var fightinium_z = {
	name: "Fightinium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Fighting-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/fightiniumz.shtml"
};

var poisonium_z = {
	name: "Poisonium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Poison-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/poisoniumz.shtml"
};

var groundium_z = {
	name: "Groundium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Ground-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/groundiumz.shtml"
};

var flyinium_z = {
	name: "Flyinium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Flying-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/flyiniumz.shtml"
};

var psychium_z = {
	name: "Psychium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Psychic-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/psychiumz.shtml"
};

var buginium_z = {
	name: "Buginium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Bug-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/buginiumz.shtml"
};

var rockium_z = {
	name: "Rockium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Rock-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/rockiumz.shtml"
};

var ghostium_z = {
	name: "Ghostium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Ghost-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/ghostiumz.shtml"
};

var dragonium_z = {
	name: "Dragonium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Dragon-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/dragoniumz.shtml"
};

var darkinium_z = {
	name: "Darkinium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Dark-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/darkiniumz.shtml"
};

var steelium_z = {
	name: "Steelium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Steel-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/steeliumz.shtml"
};

var fairium_z = {
	name: "Fairium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Fairy-type moves to Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/fairiumz.shtml"
};

var pikanium_z = {
	name: "Pikanium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Pikachu’s Volt Tackle to a Z-Move.",
	wiki: "http://www.serebii.net/itemdex/pikaniumz.shtml"
};

var bottle_cap = {
	name: "Bottle Cap",
	desc: "A beautiful bottle cap that gives off a silver gleam. Some people are happy to receive one.",
	wiki: "http://www.serebii.net/itemdex/bottlecap.shtml"
};

var gold_bottle_cap = {
	name: "Gold Bottle Cap",
	desc: "A beautiful bottle cap that gives off a golden gleam. Some people are happy to receive one.",
	wiki: "http://www.serebii.net/itemdex/goldbottlecap.shtml"
};

var z_ring = {
	name: "Z-ring",
	desc: "A mysterious ring that enables Pokémon to use Z-Power. It requires both the willpower and the physical power of the Trainer wearing it.",
	wiki: "http://www.serebii.net/itemdex/z-ring.shtml"
};

var decidium_z = {
	name: "Decidium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Decidueye’s Spirit Shackle to a Z-Move.",
	wiki: "http://www.serebii.net/itemdex/decidiumz.shtml"
};

var incinium_z = {
	name: "Incinium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Incineroar’s Darkest Lariat to a Z-Move.",
	wiki: "http://www.serebii.net/itemdex/inciniumz.shtml"
};

var primarium_z = {
	name: "Primarium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Primarina’s Sparkling Aria to a Z-Move.",
	wiki: "http://www.serebii.net/itemdex/primariumz.shtml"
};

var tapunium_z = {
	name: "Tapunium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades the tapu’s Nature’s Madness to a Z-Move.",
	wiki: "http://www.serebii.net/itemdex/tapuniumz.shtml"
};

var marshadium_z = {
	name: "Marshadium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Marshadow’s Spectral Thief to a Z-Move.",
	wiki: "http://www.serebii.net/itemdex/marshadiumz.shtml"
};

var aloraichium_z = {
	name: "Aloraichium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Alolan Raichu’s Thunderbolt to a Z-Move.",
	wiki: "http://www.serebii.net/itemdex/aloraichiumz.shtml"
};

var snorlium_z = {
	name: "Snorlium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Snorlax’s Giga Impact to a Z-Move.",
	wiki: "http://www.serebii.net/itemdex/snorliumz.shtml"
};

var eevium_z = {
	name: "Eevium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Eevee’s Last Resort to a Z-Move.",
	wiki: "http://www.serebii.net/itemdex/eeviumz.shtml"
};

var mewnium_z = {
	name: "Mewnium Z",
	desc: "This is a crystallized form of Z-Power. It upgrades Mew’s Psychic to a Z-Move.",
	wiki: "http://www.serebii.net/itemdex/mewniumz.shtml"
};

var normalium_z = {
	name: "Normalium Z",
	desc: "It converts Z-Power into crystals that upgrade Normal-type moves to Normal-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/normaliumz.shtml"
};

var firium_z = {
	name: "Firium Z",
	desc: "It converts Z-Power into crystals that upgrade Fire-type moves to Fire-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/firiumz.shtml"
};

var waterium_z = {
	name: "Waterium Z",
	desc: "It converts Z-Power into crystals that upgrade Water-type moves to Water-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/wateriumz.shtml"
};

var electrium_z = {
	name: "Electrium Z",
	desc: "It converts Z-Power into crystals that upgrade Electric-type moves to Electric-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/electriumz.shtml"
};

var grassium_z = {
	name: "Grassium Z",
	desc: "It converts Z-Power into crystals that upgrade Grass-type moves to Grass-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/grassiumz.shtml"
};

var icium_z = {
	name: "Icium Z",
	desc: "It converts Z-Power into crystals that upgrade Ice-type moves to Ice-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/iciumz.shtml"
};

var fightinium_z = {
	name: "Fightinium Z",
	desc: "It converts Z-Power into crystals that upgrade Fighting-type moves to Fighting-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/fightiniumz.shtml"
};

var poisonium_z = {
	name: "Poisonium Z",
	desc: "It converts Z-Power into crystals that upgrade Poison-type moves to Poison-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/poisoniumz.shtml"
};

var groundium_z = {
	name: "Groundium Z",
	desc: "It converts Z-Power into crystals that upgrade Ground-type moves to Ground-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/groundiumz.shtml"
};

var flyinium_z = {
	name: "Flyinium Z",
	desc: "It converts Z-Power into crystals that upgrade Flying-type moves to Flying-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/flyiniumz.shtml"
};

var psychium_z = {
	name: "Psychium Z",
	desc: "It converts Z-Power into crystals that upgrade Psychic-type moves to Psychic-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/psychiumz.shtml"
};

var buginium_z = {
	name: "Buginium Z",
	desc: "It converts Z-Power into crystals that upgrade Bug-type moves to Bug-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/buginiumz.shtml"
};

var rockium_z = {
	name: "Rockium Z",
	desc: "It converts Z-Power into crystals that upgrade Rock-type moves to Rock-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/rockiumz.shtml"
};

var ghostium_z = {
	name: "Ghostium Z",
	desc: "It converts Z-Power into crystals that upgrade Ghost-type moves to Ghost-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/ghostiumz.shtml"
};

var dragonium_z = {
	name: "Dragonium Z",
	desc: "It converts Z-Power into crystals that upgrade Dragon-type moves to Dragon-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/dragoniumz.shtml"
};

var darkinium_z = {
	name: "Darkinium Z",
	desc: "It converts Z-Power into crystals that upgrade Dark-type moves to Dark-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/darkiniumz.shtml"
};

var steelium_z = {
	name: "Steelium Z",
	desc: "It converts Z-Power into crystals that upgrade Steel-type moves to Steel-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/steeliumz.shtml"
};

var fairium_z = {
	name: "Fairium Z",
	desc: "It converts Z-Power into crystals that upgrade Fairy-type moves to Fairy-type Z-Moves.",
	wiki: "http://www.serebii.net/itemdex/fairiumz.shtml"
};

var pikanium_z = {
	name: "Pikanium Z",
	desc: "It converts Z-Power into crystals that upgrade Pikachu’s Volt Tackle to an exclusive Z-Move.",
	wiki: "http://www.serebii.net/itemdex/pikaniumz.shtml"
};

var decidium_z = {
	name: "Decidium Z",
	desc: "It converts Z-Power into crystals that upgrade Decidueye’s Spirit Shackle to an exclusive Z-Move.",
	wiki: "http://www.serebii.net/itemdex/decidiumz.shtml"
};

var incinium_z = {
	name: "Incinium Z",
	desc: "It converts Z-Power into crystals that upgrade Incineroar’s Darkest Lariat to an exclusive Z-Move.",
	wiki: "http://www.serebii.net/itemdex/inciniumz.shtml"
};

var primarium_z = {
	name: "Primarium Z",
	desc: "It converts Z-Power into crystals that upgrade Primarina’s Sparkling Aria to an exclusive Z-Move.",
	wiki: "http://www.serebii.net/itemdex/primariumz.shtml"
};

var tapunium_z = {
	name: "Tapunium Z",
	desc: "It converts Z-Power into crystals that upgrade the tapu’s Nature’s Madness to an exclusive Z-Move.",
	wiki: "http://www.serebii.net/itemdex/tapuniumz.shtml"
};

var marshadium_z = {
	name: "Marshadium Z",
	desc: "It converts Z-Power into crystals that upgrade Marshadow’s Spectral Thief to an exclusive Z-Move.",
	wiki: "http://www.serebii.net/itemdex/marshadiumz.shtml"
};

var aloraichium_z = {
	name: "Aloraichium Z",
	desc: "It converts Z-Power into crystals that upgrade Alolan Raichu’s Thunderbolt to an exclusive Z-Move.",
	wiki: "http://www.serebii.net/itemdex/aloraichiumz.shtml"
};

var snorlium_z = {
	name: "Snorlium Z",
	desc: "It converts Z-Power into crystals that upgrade Snorlax’s Giga Impact to an exclusive Z-Move.",
	wiki: "http://www.serebii.net/itemdex/snorliumz.shtml"
};

var eevium_z = {
	name: "Eevium Z",
	desc: "It converts Z-Power into crystals that upgrade Eevee’s Last Resort to an exclusive Z-Move.",
	wiki: "http://www.serebii.net/itemdex/eeviumz.shtml"
};

var mewnium_z = {
	name: "Mewnium Z",
	desc: "It converts Z-Power into crystals that upgrade Mew’s Psychic to an exclusive Z-Move.",
	wiki: "http://www.serebii.net/itemdex/mewniumz.shtml"
};

var pikashunium_z = {
	name: "Pikashunium Z",
	desc: "It converts Z-Power into crystals that upgrade a Thunderbolt by Pikachu in a cap to an exclusive Z-Move.",
	wiki: "http://www.serebii.net/itemdex/pikashuniumz.shtml"
};

var forage_bag = {
	name: "Forage Bag",
	desc: "A bag to carry ingredients gathered during Mallow’s trial in the jungle.",
	wiki: "http://www.serebii.net/itemdex/foragebag.shtml"
};

var fishing_rod = {
	name: "Fishing Rod",
	desc: "A Fishing Rod made by Captain Lana. Cast a line over piles of underwater rocks to fish for wild aquatic Pokémon.",
	wiki: "http://www.serebii.net/itemdex/fishingrod.shtml"
};

var professors_mask = {
	name: "Professor’s Mask",
	desc: "The mask that belongs to The Masked Royal. This pro wrestler apparently sews his mask on a machine himself.",
	wiki: "http://www.serebii.net/itemdex/professor’smask.shtml"
};

var festival_ticket = {
	name: "Festival Ticket",
	desc: "A ticket that allows you to host a mission in Festival Plaza.",
	wiki: "http://www.serebii.net/itemdex/festivalticket.shtml"
};

var sparkling_stone = {
	name: "Sparkling Stone",
	desc: "A stone entrusted by a Pokémon that has been venerated as a guardian deity in the Alola region. There is said to be some secret in how it sparkles.",
	wiki: "http://www.serebii.net/itemdex/sparklingstone.shtml"
};

var adrenaline_orb = {
	name: "Adrenaline Orb",
	desc: "Using it makes wild Pokémon more likely to call for help. If held by a Pokémon, it boosts Speed when intimidated. It can be used only once.",
	wiki: "http://www.serebii.net/itemdex/adrenalineorb.shtml"
};

var zygarde_cube = {
	name: "Zygarde Cube",
	desc: "An item to store Zygarde Cores and Cells. You can also use it to teach Zygarde moves.",
	wiki: "http://www.serebii.net/itemdex/zygardecube.shtml"
};

var ice_stone = {
	name: "Ice Stone",
	desc: "A peculiar stone that can make certain species of Pokémon evolve. It has an unmistakable snowflake pattern.",
	wiki: "http://www.serebii.net/itemdex/icestone.shtml"
};

var ride_pager = {
	name: "Ride Pager",
	desc: "By entering certain numbers on this pager, you can summon Ride Pokémon in an instant.",
	wiki: "http://www.serebii.net/itemdex/ridepager.shtml"
};

var beast_ball = {
	name: "Beast Ball",
	desc: "A special Poké Ball designed to catch Ultra Beasts. It has a low success rate for catching others.",
	wiki: "http://www.serebii.net/itemdex/beastball.shtml"
};

var big_malasada = {
	name: "Big Malasada",
	desc: "The Alola region’s local specialty—fried bread. It can be used once to heal all the status conditions of a Pokémon.",
	wiki: "http://www.serebii.net/itemdex/bigmalasada.shtml"
};

var red_nectar = {
	name: "Red Nectar",
	desc: "A flower nectar obtained at Ula’ula Meadow. It changes the form of certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/rednectar.shtml"
};

var yellow_nectar = {
	name: "Yellow Nectar",
	desc: "A flower nectar obtained at Melemele Meadow. It changes the form of certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/yellownectar.shtml"
};

var pink_nectar = {
	name: "Pink Nectar",
	desc: "The flower nectar obtained at the flowering shrubs on Royal Avenue. It changes the form of certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/pinknectar.shtml"
};

var purple_nectar = {
	name: "Purple Nectar",
	desc: "A flower nectar obtained at Poni Meadow. It changes the form of certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/purplenectar.shtml"
};

var sun_flute = {
	name: "Sun Flute",
	desc: "It is said that the tones it produces were offered up as an expression of gratitude to the Legendary Pokémon of the sun.",
	wiki: "http://www.serebii.net/itemdex/sunflute.shtml"
};

var moon_flute = {
	name: "Moon Flute",
	desc: "It is said that the tones it produces were offered up as an expression of gratitude to the Legendary Pokémon of the moon.",
	wiki: "http://www.serebii.net/itemdex/moonflute.shtml"
};

var enigmatic_card = {
	name: "Enigmatic Card",
	desc: "A mysterious card. Written on it is a request for you to go to a guest room in an Akala motel on Route 8.",
	wiki: "http://www.serebii.net/itemdex/enigmaticcard.shtml"
};

var terrain_extender = {
	name: "Terrain Extender",
	desc: "An item to be held by a Pokémon. It extends the duration of the terrain caused by the holder’s move or Ability.",
	wiki: "http://www.serebii.net/itemdex/terrainextender.shtml"
};

var protective_pads = {
	name: "Protective Pads",
	desc: "An item to be held by a Pokémon. These pads protect the holder from effects caused by making direct contact with the target.",
	wiki: "http://www.serebii.net/itemdex/protectivepads.shtml"
};

var electric_seed = {
	name: "Electric Seed",
	desc: "An item to be held by a Pokémon. It boosts Defense on Electric Terrain. It can only be used once.",
	wiki: "http://www.serebii.net/itemdex/electricseed.shtml"
};

var psychic_seed = {
	name: "Psychic Seed",
	desc: "An item to be held by a Pokémon. It boosts Sp. Def on Psychic Terrain. It can only be used once.",
	wiki: "http://www.serebii.net/itemdex/psychicseed.shtml"
};

var misty_seed = {
	name: "Misty Seed",
	desc: "An item to be held by a Pokémon. It boosts Sp. Def on Misty Terrain. It can only be used once.",
	wiki: "http://www.serebii.net/itemdex/mistyseed.shtml"
};

var grassy_seed = {
	name: "Grassy Seed",
	desc: "An item to be held by a Pokémon. It boosts Defense on Grassy Terrain. It can only be used once.",
	wiki: "http://www.serebii.net/itemdex/grassyseed.shtml"
};

var fighting_memory = {
	name: "Fighting Memory",
	desc: "A memory disc that contains Fighting-type data. It changes the type of the holder if held by a certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/fightingmemory.shtml"
};

var flying_memory = {
	name: "Flying Memory",
	desc: "A memory disc that contains Flying-type data. It changes the type of the holder if held by a certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/flyingmemory.shtml"
};

var poison_memory = {
	name: "Poison Memory",
	desc: "A memory disc that contains Poison-type data. It changes the type of the holder if held by a certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/poisonmemory.shtml"
};

var ground_memory = {
	name: "Ground Memory",
	desc: "A memory disc that contains Ground-type data. It changes the type of the holder if held by a certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/groundmemory.shtml"
};

var rock_memory = {
	name: "Rock Memory",
	desc: "A memory disc that contains Rock-type data. It changes the type of the holder if held by a certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/rockmemory.shtml"
};

var bug_memory = {
	name: "Bug Memory",
	desc: "A memory disc that contains Bug-type data. It changes the type of the holder if held by a certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/bugmemory.shtml"
};

var ghost_memory = {
	name: "Ghost Memory",
	desc: "A memory disc that contains Ghost-type data. It changes the type of the holder if held by a certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/ghostmemory.shtml"
};

var steel_memory = {
	name: "Steel Memory",
	desc: "A memory disc that contains Steel-type data. It changes the type of the holder if held by a certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/steelmemory.shtml"
};

var fire_memory = {
	name: "Fire Memory",
	desc: "A memory disc that contains Fire-type data. It changes the type of the holder if held by a certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/firememory.shtml"
};

var water_memory = {
	name: "Water Memory",
	desc: "A memory disc that contains Water-type data. It changes the type of the holder if held by a certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/watermemory.shtml"
};

var grass_memory = {
	name: "Grass Memory",
	desc: "A memory disc that contains Grass-type data. It changes the type of the holder if held by a certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/grassmemory.shtml"
};

var electric_memory = {
	name: "Electric Memory",
	desc: "A memory disc that contains Electric-type data. It changes the type of the holder if held by a certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/electricmemory.shtml"
};

var psychic_memory = {
	name: "Psychic Memory",
	desc: "A memory disc that contains Psychic-type data. It changes the type of the holder if held by a certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/psychicmemory.shtml"
};

var ice_memory = {
	name: "Ice Memory",
	desc: "A memory disc that contains Ice-type data. It changes the type of the holder if held by a certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/icememory.shtml"
};

var dragon_memory = {
	name: "Dragon Memory",
	desc: "A memory disc that contains Dragon-type data. It changes the type of the holder if held by a certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/dragonmemory.shtml"
};

var dark_memory = {
	name: "Dark Memory",
	desc: "A memory disc that contains Dark-type data. It changes the type of the holder if held by a certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/darkmemory.shtml"
};

var fairy_memory = {
	name: "Fairy Memory",
	desc: "A memory disc that contains Fairy-type data. It changes the type of the holder if held by a certain species of Pokémon.",
	wiki: "http://www.serebii.net/itemdex/fairymemory.shtml"
};
