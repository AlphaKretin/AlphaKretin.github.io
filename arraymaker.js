var mons = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "alolan rattata", "alolan raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "alolan raichu", "sandshrew", "sandslash", "alolan sandshrew", "alolan sandslash", "nidoranf", "nidorina", "nidoqueen", "nidoranm", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "alolan vulpix", "alolan ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "alolan diglett", "alolan dugtrio", "meowth", "persian", "alolan meowth", "alolan persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "alolan geodude", "alolan graveler", "alolan golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "alolan grimer", "alolan muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "alolan exeggutor", "cubone", "marowak", "alolan marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion", "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi", "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos", "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking", "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress", "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish", "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring", "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid", "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom", "kingdra", "phanpy", "donphan", "porygon2", "stantler", "smeargle", "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank", "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar", "tyranitar", "lugia", "ho_oh", "celebi", "treecko", "grovyle", "sceptile", "torchic", "combusken", "blaziken", "mudkip", "marshtomp", "swampert", "poochyena", "mightyena", "zigzagoon", "linoone", "wurmple", "silcoon", "beautifly", "cascoon", "dustox", "lotad", "lombre", "ludicolo", "seedot", "nuzleaf", "shiftry", "taillow", "swellow", "wingull", "pelipper", "ralts", "kirlia", "gardevoir", "surskit", "masquerain", "shroomish", "breloom", "slakoth", "vigoroth", "slaking", "nincada", "ninjask", "shedinja", "whismur", "loudred", "exploud", "makuhita", "hariyama", "azurill", "nosepass", "skitty", "delcatty", "sableye", "mawile", "aron", "lairon", "aggron", "meditite", "medicham", "electrike", "manectric", "plusle", "minun", "volbeat", "illumise", "roselia", "gulpin", "swalot", "carvanha", "sharpedo", "wailmer", "wailord", "numel", "camerupt", "torkoal", "spoink", "grumpig", "spinda", "trapinch", "vibrava", "flygon", "cacnea", "cacturne", "swablu", "altaria", "zangoose", "seviper", "lunatone", "solrock", "barboach", "whiscash", "corphish", "crawdaunt", "baltoy", "claydol", "lileep", "cradily", "anorith", "armaldo", "feebas", "milotic", "castform", "castform sunny", "castform rainy", "castform snowy", "kecleon", "shuppet", "banette", "duskull", "dusclops", "tropius", "chimecho", "absol", "wynaut", "snorunt", "glalie", "spheal", "sealeo", "walrein", "clamperl", "huntail", "gorebyss", "relicanth", "luvdisc", "bagon", "shelgon", "salamence", "beldum", "metang", "metagross", "regirock", "regice", "registeel", "latias", "latios", "kyogre", "groudon", "rayquaza", "jirachi", "deoxys", "turtwig", "grotle", "torterra", "chimchar", "monferno", "infernape", "piplup", "prinplup", "empoleon", "starly", "staravia", "staraptor", "bidoof", "bibarel", "kricketot", "kricketune", "shinx", "luxio", "luxray", "budew", "roserade", "cranidos", "rampardos", "shieldon", "bastiodon", "burmy", "wormadam", "wormadam sandy", "wormadam trash", "mothim", "combee", "vespiquen", "pachirisu", "buizel", "floatzel", "cherubi", "cherrim", "shellos", "gastrodon", "ambipom", "drifloon", "drifblim", "buneary", "lopunny", "mismagius", "honchkrow", "glameow", "purugly", "chingling", "stunky", "skuntank", "bronzor", "bronzong", "bonsly", "mime jr", "happiny", "chatot", "spiritomb", "gible", "gabite", "garchomp", "munchlax", "riolu", "lucario", "hippopotas", "hippowdon", "skorupi", "drapion", "croagunk", "toxicroak", "carnivine", "finneon", "lumineon", "mantyke", "snover", "abomasnow", "weavile", "magnezone", "lickilicky", "rhyperior", "tangrowth", "electivire", "magmortar", "togekiss", "yanmega", "leafeon", "glaceon", "gliscor", "mamoswine", "porygon_z", "gallade", "probopass", "dusknoir", "froslass", "rotom", "rotom heat", "rotom wash", "rotom mow", "rotom fan", "rotom frost", "uxie", "mesprit", "azelf", "dialga", "palkia", "heatran", "regigigas", "giratina", "giratina origin", "cresselia", "phione", "manaphy", "darkrai", "shaymin", "shaymin sky", "arceus", "victini", "snivy", "servine", "serperior", "tepig", "pignite", "emboar", "oshawott", "dewott", "samurott", "patrat", "watchog", "lillipup", "herdier", "stoutland", "purrloin", "liepard", "pansage", "simisage", "pansear", "simisear", "panpour", "simipour", "munna", "musharna", "pidove", "tranquill", "unfezant", "blitzle", "zebstrika", "roggenrola", "boldore", "gigalith", "woobat", "swoobat", "drilbur", "excadrill", "audino", "timburr", "gurdurr", "conkeldurr", "tympole", "palpitoad", "seismitoad", "throh", "sawk", "sewaddle", "swadloon", "leavanny", "venipede", "whirlipede", "scolipede", "cottonee", "whimsicott", "petilil", "lilligant", "basculin", "basculin blue", "sandile", "krokorok", "krookodile", "darumaka", "darmanitan", "darmanitan zen", "maractus", "dwebble", "crustle", "scraggy", "scrafty", "sigilyph", "yamask", "cofagrigus", "tirtouga", "carracosta", "archen", "archeops", "trubbish", "garbodor", "zorua", "zoroark", "minccino", "cinccino", "gothita", "gothorita", "gothitelle", "solosis", "duosion", "reuniclus", "ducklett", "swanna", "vanillite", "vanillish", "vanilluxe", "deerling", "sawsbuck", "emolga", "karrablast", "escavalier", "foongus", "amoonguss", "frillish", "jellicent", "alomomola", "joltik", "galvantula", "ferroseed", "ferrothorn", "klink", "klang", "klinklang", "tynamo", "eelektrik", "eelektross", "elgyem", "beheeyem", "litwick", "lampent", "chandelure", "axew", "fraxure", "haxorus", "cubchoo", "beartic", "cryogonal", "shelmet", "accelgor", "stunfisk", "mienfoo", "mienshao", "druddigon", "golett", "golurk", "pawniard", "bisharp", "bouffalant", "rufflet", "braviary", "vullaby", "mandibuzz", "heatmor", "durant", "deino", "zweilous", "hydreigon", "larvesta", "volcarona", "cobalion", "terrakion", "virizion", "tornadus", "tornadus therian", "thundurus", "thundurus therian", "reshiram", "zekrom", "landorus", "landorus therian", "kyurem", "white kyurem", "black kyurem", "keldeo", "meloetta", "meloetta pirouette", "genesect", "chespin", "quilladin", "chesnaught", "fennekin", "braixen", "delphox", "froakie", "frogadier", "greninja", "bunnelby", "diggersby", "fletchling", "fletchinder", "talonflame", "scatterbug", "spewpa", "vivillon", "litleo", "pyroar", "flabebe", "floette", "florges", "skiddo", "gogoat", "pancham", "pangoro", "furfrou", "espurr", "meowstic", "honedge", "doublade", "aegislash", "spritzee", "aromatisse", "swirlix", "slurpuff", "inkay", "malamar", "binacle", "barbaracle", "skrelp", "dragalge", "clauncher", "clawitzer", "helioptile", "heliolisk", "tyrunt", "tyrantrum", "amaura", "aurorus", "sylveon", "hawlucha", "dedenne", "carbink", "goomy", "sliggoo", "goodra", "klefki", "phantump", "trevenant", "pumpkaboo", "gourgeist", "bergmite", "avalugg", "noibat", "noivern", "xerneas", "yveltal", "zygarde", "diancie", "hoopa", "hoopa unbound", "volcanion", "mega venusaur", "mega charizard x", "mega charizard y", "mega blastoise", "mega alakazam", "mega gengar", "mega kangaskhan", "mega pinsir", "mega gyarados", "mega aerodactyl", "mega mewtwo x", "mega mewtwo y", "mega ampharos", "mega scizor", "mega heracross", "mega houndoom", "mega tyranitar", "mega blaziken", "mega gardevoir", "mega mawile", "mega aggron", "mega medicham", "mega manectric", "mega banette", "mega absol", "mega garchomp", "mega lucario", "mega abomasnow", "mega beedrill", "mega pidgeot", "mega slowbro", "mega steelix", "mega sceptile", "mega swampert", "mega sableye", "mega sharpedo", "mega camerupt", "mega altaria", "mega glalie", "mega salamence", "mega metagross", "mega latias", "mega latios", "mega rayquaza", "mega lopunny", "mega gallade", "mega audino", "mega diancie", "rowlet", "dartrix", "decidueye", "litten", "torracat", "incineroar", "popplio", "brionne", "primarina", "pikipek", "trumbeak", "toucannon", "yungoos", "gumshoos", "grubbin", "charjabug", "vikavolt", "crabrawler", "crabominable", "oricorio", "cutiefly", "ribombee", "rockruff", "lycanroc", "lycanroc midnight", "wishiwashi", "mareanie", "toxapex", "mudbray", "mudsdale", "dewpider", "araquanid", "fomantis", "lurantis", "morelull", "shiinotic", "salandit", "salazzle", "stufful", "bewear", "bounsweet", "steenee", "tsareena", "comfey", "oranguru", "passimian", "wimpod", "golisopod", "sandygast", "palossand", "pyukumuku", "type null", "silvally", "minior", "komala", "turtonator", "togedemaru", "mimikyu", "bruxish", "drampa", "dhelmise", "jangmo_o", "hakamo_o", "kommo_o", "tapu koko", "tapu lele", "tapu bulu", "tapu fini", "cosmog", "cosmoem", "solgaleo", "lunala", "nihilego", "buzzwole", "pheromosa", "xurkitree", "celesteela", "kartana", "guzzlord", "necrozma", "magearna", "marshadow"];
var moves = ["pound", "karate chop", "double slap", "comet punch", "mega punch", "pay day", "fire punch", "ice punch", "thunder punch", "scratch", "vice grip", "guillotine", "razor wind", "swords dance", "cut", "gust", "wing attack", "whirlwind", "fly", "bind", "slam", "vine whip", "stomp", "double kick", "mega kick", "jump kick", "rolling kick", "sand attack", "headbutt", "horn attack", "fury attack", "horn drill", "tackle", "body slam", "wrap", "take down", "thrash", "double_edge", "tail whip", "poison sting", "twineedle", "pin missile", "leer", "bite", "growl", "roar", "sing", "supersonic", "sonic boom", "disable", "acid", "ember", "flamethrower", "mist", "water gun", "hydro pump", "surf", "ice beam", "blizzard", "psybeam", "bubble beam", "aurora beam", "hyper beam", "peck", "drill peck", "submission", "low kick", "counter", "seismic toss", "strength", "absorb", "mega drain", "leech seed", "growth", "razor leaf", "solar beam", "poison powder", "stun spore", "sleep powder", "petal dance", "string shot", "dragon rage", "fire spin", "thunder shock", "thunderbolt", "thunder wave", "thunder", "rock throw", "earthquake", "fissure", "dig", "toxic", "confusion", "psychic", "hypnosis", "meditate", "agility", "quick attack", "rage", "teleport", "night shade", "mimic", "screech", "double team", "recover", "harden", "minimize", "smokescreen", "confuse ray", "withdraw", "defense curl", "barrier", "light screen", "haze", "reflect", "focus energy", "bide", "metronome", "mirror move", "self_destruct", "egg bomb", "lick", "smog", "sludge", "bone club", "fire blast", "waterfall", "clamp", "swift", "skull bash", "spike cannon", "constrict", "amnesia", "kinesis", "soft_boiled", "high jump kick", "glare", "dream eater", "poison gas", "barrage", "leech life", "lovely kiss", "sky attack", "transform", "bubble", "dizzy punch", "spore", "flash", "psywave", "splash", "acid armor", "crabhammer", "explosion", "fury swipes", "bonemerang", "rest", "rock slide", "hyper fang", "sharpen", "conversion", "tri attack", "super fang", "slash", "substitute", "struggle", "sketch", "triple kick", "thief", "spider web", "mind reader", "nightmare", "flame wheel", "snore", "curse", "flail", "conversion 2", "aeroblast", "cotton spore", "reversal", "spite", "powder snow", "protect", "mach punch", "scary face", "feint attack", "sweet kiss", "belly drum", "sludge bomb", "mud_slap", "octazooka", "spikes", "zap cannon", "foresight", "destiny bond", "perish song", "icy wind", "detect", "bone rush", "lock_on", "outrage", "sandstorm", "giga drain", "endure", "charm", "rollout", "false swipe", "swagger", "milk drink", "spark", "fury cutter", "steel wing", "mean look", "attract", "sleep talk", "heal bell", "_return", "present", "frustration", "safeguard", "pain split", "sacred fire", "magnitude", "dynamic punch", "megahorn", "dragon breath", "baton pass", "encore", "pursuit", "rapid spin", "sweet scent", "iron tail", "metal claw", "vital throw", "morning sun", "synthesis", "moonlight", "hidden power", "cross chop", "twister", "rain dance", "sunny day", "crunch", "mirror coat", "psych up", "extreme speed", "ancient power", "shadow ball", "future sight", "rock smash", "whirlpool", "beat up", "fake out", "uproar", "stockpile", "spit up", "swallow", "heat wave", "hail", "torment", "flatter", "will_o_wisp", "memento", "facade", "focus punch", "smelling salts", "follow me", "nature power", "charge", "taunt", "helping hand", "trick", "role play", "wish", "assist", "ingrain", "superpower", "magic coat", "recycle", "revenge", "brick break", "yawn", "knock off", "endeavor", "eruption", "skill swap", "imprison", "refresh", "grudge", "snatch", "secret power", "dive", "arm thrust", "camouflage", "tail glow", "luster purge", "mist ball", "feather dance", "teeter dance", "blaze kick", "mud sport", "ice ball", "needle arm", "slack off", "hyper voice", "poison fang", "crush claw", "blast burn", "hydro cannon", "meteor mash", "astonish", "weather ball", "aromatherapy", "fake tears", "air cutter", "overheat", "odor sleuth", "rock tomb", "silver wind", "metal sound", "grass whistle", "tickle", "cosmic power", "water spout", "signal beam", "shadow punch", "extrasensory", "sky uppercut", "sand tomb", "sheer cold", "muddy water", "bullet seed", "aerial ace", "icicle spear", "iron defense", "block", "howl", "dragon claw", "frenzy plant", "bulk up", "bounce", "mud shot", "poison tail", "covet", "volt tackle", "magical leaf", "water sport", "calm mind", "leaf blade", "dragon dance", "rock blast", "shock wave", "water pulse", "doom desire", "psycho boost", "roost", "gravity", "miracle eye", "wake_up slap", "hammer arm", "gyro ball", "healing wish", "brine", "natural gift", "feint", "pluck", "tailwind", "acupressure", "metal burst", "u_turn", "close combat", "payback", "assurance", "embargo", "fling", "psycho shift", "trump card", "heal block", "wring out", "power trick", "gastro acid", "lucky chant", "me first", "copycat", "power swap", "guard swap", "punishment", "last resort", "worry seed", "sucker punch", "toxic spikes", "heart swap", "aqua ring", "magnet rise", "flare blitz", "force palm", "aura sphere", "rock polish", "poison jab", "dark pulse", "night slash", "aqua tail", "seed bomb", "air slash", "x_scissor", "bug buzz", "dragon pulse", "dragon rush", "power gem", "drain punch", "vacuum wave", "focus blast", "energy ball", "brave bird", "earth power", "switcheroo", "giga impact", "nasty plot", "bullet punch", "avalanche", "ice shard", "shadow claw", "thunder fang", "ice fang", "fire fang", "shadow sneak", "mud bomb", "psycho cut", "zen headbutt", "mirror shot", "flash cannon", "rock climb", "defog", "trick room", "draco meteor", "discharge", "lava plume", "leaf storm", "power whip", "rock wrecker", "cross poison", "gunk shot", "iron head", "magnet bomb", "stone edge", "captivate", "stealth rock", "grass knot", "chatter", "judgment", "bug bite", "charge beam", "wood hammer", "aqua jet", "attack order", "defend order", "heal order", "head smash", "double hit", "roar of time", "spacial rend", "lunar dance", "crush grip", "magma storm", "dark void", "seed flare", "ominous wind", "shadow force", "hone claws", "wide guard", "guard split", "power split", "wonder room", "psyshock", "venoshock", "autotomize", "rage powder", "telekinesis", "magic room", "smack down", "storm throw", "flame burst", "sludge wave", "quiver dance", "heavy slam", "synchronoise", "electro ball", "soak", "flame charge", "coil", "low sweep", "acid spray", "foul play", "simple beam", "entrainment", "after you", "round", "echoed voice", "chip away", "clear smog", "stored power", "quick guard", "ally switch", "scald", "shell smash", "heal pulse", "hex", "sky drop", "shift gear", "circle throw", "incinerate", "quash", "acrobatics", "reflect type", "retaliate", "final gambit", "bestow", "inferno", "water pledge", "fire pledge", "grass pledge", "volt switch", "struggle bug", "bulldoze", "frost breath", "dragon tail", "work up", "electroweb", "wild charge", "drill run", "dual chop", "heart stamp", "horn leech", "sacred sword", "razor shell", "heat crash", "leaf tornado", "steamroller", "cotton guard", "night daze", "psystrike", "tail slap", "hurricane", "head charge", "gear grind", "searing shot", "techno blast", "relic song", "secret sword", "glaciate", "bolt strike", "blue flare", "fiery dance", "freeze shock", "ice burn", "snarl", "icicle crash", "v_create", "fusion flare", "fusion bolt", "flying press", "mat block", "belch", "rototiller", "sticky web", "fell stinger", "phantom force", "trick_or_treat", "noble roar", "ion deluge", "parabolic charge", "forests curse", "petal blizzard", "freeze_dry", "disarming voice", "parting shot", "topsy_turvy", "draining kiss", "crafty shield", "flower shield", "grassy terrain", "misty terrain", "electrify", "play rough", "fairy wind", "moonblast", "boomburst", "fairy lock", "kings shield", "play nice", "confide", "diamond storm", "steam eruption", "hyperspace hole", "water shuriken", "mystical fire", "spiky shield", "aromatic mist", "eerie impulse", "venom drench", "powder", "geomancy", "magnetic flux", "happy hour", "electric terrain", "dazzling gleam", "celebrate", "hold hands", "baby_doll eyes", "nuzzle", "hold back", "infestation", "power_up punch", "oblivion wing", "thousand arrows", "thousand waves", "lands wrath", "light of ruin", "origin pulse", "precipice blades", "dragon ascent", "hyperspace fury", "ten million volt thunderbolt", "accelerock", "acid downpour", "all_out pummeling", "anchor shot", "aurora veil", "baneful bunker", "beak blast", "black hole eclipse", "bloom doom", "breakneck blitz", "brutal swing", "burn up", "catastropika", "clanging scales", "continental crush", "core enforcer", "corkscrew crash", "darkest lariat", "devastating drake", "dragon hammer", "extreme evoboost", "fire lash", "first impression", "fleur cannon", "floral healing", "gear up", "genesis supernova", "gigavolt havoc", "guardian of alola", "high horsepower", "hydro vortex", "ice hammer", "inferno overdrive", "instruct", "laser focus", "leafage", "liquidation", "lunge", "malicious moonsault", "moongeist beam", "multi_attack", "natures madness", "never_ending nightmare", "oceanic operetta", "pollen puff", "power trip", "prismatic laser", "psychic fangs", "psychic terrain", "pulverizing pancake", "purify", "revelation dance", "savage spin_out", "shadow bone", "shattered psyche", "shell trap", "shore up", "sinister arrow raid", "smart strike", "solar blade", "soul_stealing 7_star strike", "sparkling aria", "spectral thief", "speed swap", "spirit shackle", "spotlight", "stoked sparksurfer", "stomping tantrum", "strength sap", "subzero slammer", "sunsteel strike", "supersonic skystrike", "tearful look", "tectonic rage", "throat chop", "toxic thread", "trop kick", "twinkle tackle", "zing zap"];
var items = ["ability capsule", "ability urge", "abomasite", "absolite", "absorb bulb", "adamant orb", "adventure rules", "aerodactylite", "aggronite", "aguav berry", "air balloon", "alakazite", "altarianite", "ampharosite", "amulet coin", "antidote", "apicot berry", "armor fossil", "aspear berry", "audinite", "awakening", "babiri berry", "balmmushroom", "banettite", "beedrillite", "belue berry", "berry juice", "big mushroom", "big nugget", "big pearl", "big root", "binding band", "black belt", "black flute", "black sludge", "blackglasses", "blastoisinite", "blazikenite", "blk apricorn", "blu apricorn", "blue flute", "blue scarf", "blue shard", "bluk berry", "brightpowder", "bug gem", "burn drive", "burn heal", "calcium", "cameruptite", "carbos", "casteliacone", "cell battery", "charcoal", "charizardite x", "charizardite y", "charti berry", "cheri berry", "cherish ball", "chesto berry", "chilan berry", "chill drive", "choice band", "choice scarf", "choice specs", "chople berry", "claw fossil", "cleanse tag", "clever wing", "coba berry", "colbur berry", "colress machine", "comet shard", "cornn berry", "cover fossil", "custap berry", "damp mulch", "damp rock", "dark gem", "dawn stone", "deepseascale", "deepseatooth", "destiny knot", "diancite", "dire hit", "dire hit 2", "dire hit 3", "dive ball", "dna splicers", "dome fossil", "douse drive", "draco plate", "dragon fang", "dragon gem", "dragon scale", "dread plate", "dream ball", "dropped item", "dubious disc", "durin berry", "dusk ball", "dusk stone", "earth plate", "eject button", "electirizer", "electric gem", "elevator key", "elixir", "energy root", "energypowder", "enigma berry", "escape rope", "ether", "everstone", "eviolite", "exp share", "expert belt", "fairy gem", "fast ball", "fighting gem", "figy berry", "fire gem", "fire stone", "fist plate", "flame orb", "flame plate", "float stone", "fluffy tail", "flying gem", "focus band", "focus sash", "fresh water", "friend ball", "full heal", "full incense", "full restore", "galladite", "ganlon berry", "garchompite", "gardevoirite", "gengarite", "genius wing", "ghost gem", "glalitite", "gooey mulch", "grass gem", "great ball", "green scarf", "green shard", "grepa berry", "grip claw", "griseous orb", "grn apricorn", "ground gem", "growth mulch", "grubby hanky", "guard spec", "gyaradosite", "haban berry", "hard stone", "heal ball", "heal powder", "health wing", "heart scale", "heat rock", "heavy ball", "helix fossil", "heracronite", "hm01", "hm02", "hm03", "hm04", "hm05", "hm06", "hm07", "hm08", "holo caster", "hondew berry", "honey", "honor of kalos", "houndoominite", "hp up", "hyper potion", "iapapa berry", "ice gem", "ice heal", "icicle plate", "icy rock", "insect plate", "intriguing stone", "iron", "iron ball", "iron plate", "item drop", "item urge", "jaboca berry", "kangaskhanite", "kasib berry", "kebia berry", "kelpsy berry", "kings rock", "lagging tail", "lansat berry", "latiasite", "latiosite", "lava cookie", "lax incense", "leaf stone", "leftovers", "lemonade", "lens case", "leppa berry", "level ball", "liechi berry", "life orb", "light ball", "light clay", "looker ticket", "lopunnite", "love ball", "lucarionite", "luck incense", "lucky egg", "lucky punch", "lum berry", "lure ball", "lustrous orb", "luxury ball", "macho brace", "magmarizer", "magnet", "mago berry", "magost berry", "manectite", "master ball", "mawilite", "max elixir", "max ether", "max potion", "max repel", "max revive", "meadow plate", "medal box", "medichamite", "mental herb", "metagrossite", "metal coat", "metal powder", "metronome", "mewtwonite x", "mewtwonite y", "micle berry", "mind plate", "miracle seed", "moomoo milk", "moon ball", "moon stone", "muscle band", "muscle wing", "mystic water", "nanab berry", "nest ball", "net ball", "nevermeltice", "nomel berry", "normal gem", "nugget", "occa berry", "odd incense", "odd keystone", "old amber", "old gateau", "oran berry", "oval charm", "oval stone", "pamtre berry", "park ball", "parlyz heal", "pass orb", "passho berry", "payapa berry", "pearl", "pearl string", "pecha berry", "permit", "persim berry", "petaya berry", "pidgeotite", "pinap berry", "pink scarf", "pinsirite", "pixie plate", "plasma card", "plume fossil", "pnk apricorn", "poison barb", "poison gem", "poké ball", "poké doll", "poké toy", "pomeg berry", "potion", "power anklet", "power band", "power belt", "power bracer", "power herb", "power lens", "power plant pass", "power weight", "pp max", "pp up", "premier ball", "pretty wing", "prism scale", "profs letter", "protector", "protein", "psychic gem", "pure incense", "qualot berry", "quick ball", "quick claw", "quick powder", "rabuta berry", "rare bone", "rare candy", "rawst berry", "razor claw", "razor fang", "razz berry", "reaper cloth", "red apricorn", "red card", "red flute", "red scarf", "red shard", "relic band", "relic copper", "relic crown", "relic gold", "relic silver", "relic statue", "relic vase", "repeat ball", "repel", "reset urge", "resist wing", "reveal glass", "revival herb", "revive", "rindo berry", "ring target", "rock gem", "rock incense", "rocky helmet", "roller skates", "root fossil", "rose incense", "rowap berry", "sablenite", "sacred ash", "safari ball", "salac berry", "salamencite", "sceptilite", "scizorite", "scope lens", "sea incense", "sharp beak", "sharpedonite", "shed shell", "shell bell", "shiny charm", "shiny stone", "shoal salt", "shoal shell", "shock drive", "shuca berry", "silk scarf", "silverpowder", "sitrus berry", "skull fossil", "sky plate", "slowbronite", "smoke ball", "smooth rock", "soda pop", "soft sand", "soothe bell", "soul dew", "spell tag", "spelon berry", "splash plate", "spooky plate", "sport ball", "sprinklotad", "stable mulch", "star piece", "stardust", "starf berry", "steel gem", "steelixite", "stick", "sticky barb", "stone plate", "sun stone", "super potion", "super repel", "swampertite", "sweet heart", "swift wing", "tamato berry", "tanga berry", "thick club", "thunderstone", "timer ball", "tinymushroom", "tm01", "tm02", "tm03", "tm04", "tm05", "tm06", "tm07", "tm08", "tm09", "tm10", "tm100", "tm11", "tm12", "tm13", "tm14", "tm15", "tm16", "tm17", "tm18", "tm19", "tm20", "tm21", "tm22", "tm23", "tm24", "tm25", "tm26", "tm27", "tm28", "tm29", "tm30", "tm31", "tm32", "tm33", "tm34", "tm35", "tm36", "tm37", "tm38", "tm39", "tm40", "tm41", "tm42", "tm43", "tm44", "tm45", "tm46", "tm47", "tm48", "tm49", "tm50", "tm51", "tm52", "tm53", "tm54", "tm55", "tm56", "tm57", "tm58", "tm59", "tm60", "tm61", "tm62", "tm63", "tm64", "tm65", "tm66", "tm67", "tm68", "tm69", "tm70", "tm71", "tm72", "tm73", "tm74", "tm75", "tm76", "tm77", "tm78", "tm79", "tm80", "tm81", "tm82", "tm83", "tm84", "tm85", "tm86", "tm87", "tm88", "tm89", "tm90", "tm91", "tm92", "tm93", "tm94", "tm95", "tm96", "tm97", "tm98", "tm99", "tmv pass", "toxic orb", "toxic plate", "twistedspoon", "tyranitarite", "ultra ball", "up_grade", "venusaurite", "wacan berry", "water gem", "water stone", "watmel berry", "wave incense", "wepear berry", "white flute", "white herb", "wht apricorn", "wide lens", "wiki berry", "wise glasses", "x accuracy", "x accuracy 2", "x accuracy 3", "x accuracy 6", "x attack", "x attack 2", "x attack 3", "x attack 6", "x defend", "x defend 2", "x defend 3", "x defend 6", "x sp def", "x sp def 2", "x sp def 3", "x sp def 6", "x special", "x special 2", "x special 3", "x special 6", "x speed", "x speed 2", "x speed 3", "x speed 6", "yache berry", "yellow flute", "yellow scarf", "yellow shard", "ylw apricorn", "zap plate", "zinc", "zoom lens", "normalium z", "firium z", "waterium z", "electrium z", "grassium z", "icium z", "fightinium z", "poisonium z", "groundium z", "flyinium z", "psychium z", "buginium z", "rockium z", "ghostium z", "dragonium z", "darkinium z", "steelium z", "fairium z", "pikanium z", "bottle cap", "gold bottle cap", "z_ring", "decidium z", "incinium z", "primarium z", "tapunium z", "marshadium z", "aloraichium z", "snorlium z", "eevium z", "mewnium z", "normalium z", "firium z", "waterium z", "electrium z", "grassium z", "icium z", "fightinium z", "poisonium z", "groundium z", "flyinium z", "psychium z", "buginium z", "rockium z", "ghostium z", "dragonium z", "darkinium z", "steelium z", "fairium z", "pikanium z", "decidium z", "incinium z", "primarium z", "tapunium z", "marshadium z", "aloraichium z", "snorlium z", "eevium z", "mewnium z", "pikashunium z", "forage bag", "fishing rod", "professors mask", "festival ticket", "sparkling stone", "adrenaline orb", "zygarde cube", "ice stone", "ride pager", "beast ball", "big malasada", "red nectar", "yellow nectar", "pink nectar", "purple nectar", "sun flute", "moon flute", "enigmatic card", "terrain extender", "protective pads", "electric seed", "psychic seed", "misty seed", "grassy seed", "fighting memory", "flying memory", "poison memory", "ground memory", "rock memory", "bug memory", "ghost memory", "steel memory", "fire memory", "water memory", "grass memory", "electric memory", "psychic memory", "ice memory", "dragon memory", "dark memory", "fairy memory"];
var abilities = ["adaptability", "aerilate", "aftermath", "air lock", "analytic", "anger point", "anticipation", "arena trap", "aroma veil", "aura break", "bad dreams", "battery", "battle armor", "battle bond", "berserk", "big pecks", "blaze", "bulletproof", "cacophony", "cheek pouch", "chlorophyll", "clear body", "cloud nine", "color change", "comatose", "competitive", "compound eyes", "contrary", "corrosion", "cursed body", "cute charm", "damp", "dancer", "dark aura", "dazzling", "defeatist", "defiant", "delta stream", "desolate land", "disguise", "download", "drizzle", "drought", "dry skin", "early bird", "effect spore", "electric surge", "fairy aura", "filter", "flame body", "flare boost", "flash fire", "flower gift", "flower veil", "fluffy", "forecast", "forewarn", "friend guard", "frisk", "full metal body", "fur coat", "gale wings", "gluttony", "gooey", "grass pelt", "guts", "harvest", "healer", "heatproof", "heavy metal", "honey gather", "huge power", "hustle", "hydration", "hyper cutter", "ice body", "illuminate", "illusion", "immunity", "imposter", "innards out", "infiltrator", "inner focus", "insomnia", "intimidate", "iron barbs", "iron fist", "justified", "keen eye", "klutz", "leaf guard", "levitate", "light metal", "lightning rod", "limber", "liquid ooze", "magic bounce", "magic guard", "magician", "magma armor", "magnet pull", "marvel scale", "mega launcher", "minus", "mold breaker", "moody", "motor drive", "moxie", "multiscale", "multitype", "mummy", "natural cure", "no guard", "normalize", "oblivious", "overcoat", "overgrow", "own tempo", "parental bond", "pickpocket", "pickup", "pixilate", "plus", "poison heal", "poison point", "poison touch", "power construct", "prankster", "pressure", "primordial sea", "protean", "pure power", "queenly majesty", "quick feet", "rain dish", "rattled", "receiver", "reckless", "refrigerate", "regenerator", "rivalry", "rks system", "rock head", "rough skin", "run away", "sand force", "sand rush", "sand stream", "sand veil", "sap sipper", "schooling", "scrappy", "serene grace", "shadow shield", "shadow tag", "shed skin", "sheer force", "shell armor", "shield dust", "shields down", "simple", "skill link", "slow start", "sniper", "snow cloak", "snow warning", "solar power", "solid rock", "soul_heart", "soundproof", "speed boost", "stakeout", "stall", "stamina", "stance change", "static", "steadfast", "stench", "sticky hold", "storm drain", "strong jaw", "sturdy", "suction cups", "super luck", "surge surfer", "swarm", "sweet veil", "swift swim", "symbiosis", "synchronize", "tangled feet", "technician", "telepathy", "teravolt", "thick fat", "tinted lens", "torrent", "tough claws", "toxic boost", "trace", "triage", "truant", "turboblaze", "unaware", "unburden", "unnerve", "victory star", "vital spirit", "volt absorb", "water absorb", "water compaction", "water veil", "weak armor", "white smoke", "wimp out", "wonder guard", "wonder skin", "zen mode", "emergency exit", "merciless", "water bubble", "steelworker", "slush rush", "long reach", "liquid voice", "galvanize", "tangling hair", "power of alchemy", "beast boost", "psychic surge", "misty surge", "grassy surge", "full metal body", "prism armor"];

var moveprops = ["name", "desc", "wiki"];
console.log("abilities");

function clicked(){
	var out = "var abilities = [";
	var len = 0;
	for (var mon of abilities){
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

var adaptability = {
	name: "Adaptability",
	desc: "Powers up moves of the same type.",
	wiki: "http://www.serebii.net/abilitydex/adaptability.shtml"
};

var aerilate = {
	name: "Aerilate",
	desc: "Normal-type moves become Flying-type moves.",
	wiki: "http://www.serebii.net/abilitydex/aerilate.shtml"
};

var aftermath = {
	name: "Aftermath",
	desc: "Damages the foe landing the finishing hit.",
	wiki: "http://www.serebii.net/abilitydex/aftermath.shtml"
};

var air_lock = {
	name: "Air Lock",
	desc: "Eliminates the effects of weather.",
	wiki: "http://www.serebii.net/abilitydex/airlock.shtml"
};

var analytic = {
	name: "Analytic",
	desc: "Strengthens moves when moving last.",
	wiki: "http://www.serebii.net/abilitydex/analytic.shtml"
};

var anger_point = {
	name: "Anger Point",
	desc: "Raises Attack upon taking a critical hit.",
	wiki: "http://www.serebii.net/abilitydex/angerpoint.shtml"
};

var anticipation = {
	name: "Anticipation",
	desc: "Senses the foe’s dangerous moves.",
	wiki: "http://www.serebii.net/abilitydex/anticipation.shtml"
};

var arena_trap = {
	name: "Arena Trap",
	desc: "Prevents the foe from fleeing.",
	wiki: "http://www.serebii.net/abilitydex/arenatrap.shtml"
};

var aroma_veil = {
	name: "Aroma Veil",
	desc: "Protects allies from attacks that limit their move choices.",
	wiki: "http://www.serebii.net/abilitydex/aromaveil.shtml"
};

var aura_break = {
	name: "Aura Break",
	desc: "The effects of \"Aura\" Abilities are reversed.",
	wiki: "http://www.serebii.net/abilitydex/aurabreak.shtml"
};

var bad_dreams = {
	name: "Bad Dreams",
	desc: "Reduces a sleeping foe’s HP.",
	wiki: "http://www.serebii.net/abilitydex/baddreams.shtml"
};

var battery = {
	name: "Battery",
	desc: "Raises the power of allies' special moves",
	wiki: "http://www.serebii.net/abilitydex/battery.shtml"
};

var battle_armor = {
	name: "Battle Armor",
	desc: "The Pokémon is protected against critical hits.",
	wiki: "http://www.serebii.net/abilitydex/battlearmor.shtml"
};

var battle_bond = {
	name: "Battle Bond",
	desc: "Lets a Pokémon change its form after causing an opponent to faint.",
	wiki: "http://www.serebii.net/abilitydex/battlebond.shtml"
};

var berserk = {
	name: "Berserk",
	desc: "Raises Special Attack when HP is low",
	wiki: "http://www.serebii.net/abilitydex/berserk.shtml"
};

var big_pecks = {
	name: "Big Pecks",
	desc: "Protects the Pokémon from Defense-lowering attacks.",
	wiki: "http://www.serebii.net/abilitydex/bigpecks.shtml"
};

var blaze = {
	name: "Blaze",
	desc: "Powers up Fire-type moves in a pinch.",
	wiki: "http://www.serebii.net/abilitydex/blaze.shtml"
};

var bulletproof = {
	name: "Bulletproof",
	desc: "Protects the Pokémon from some ball and bomb moves.",
	wiki: "http://www.serebii.net/abilitydex/bulletproof.shtml"
};

var cacophony = {
	name: "Cacophony",
	desc: "Avoids sound-based moves.",
	wiki: "http://www.serebii.net/abilitydex/cacophony.shtml"
};

var cheek_pouch = {
	name: "Cheek Pouch",
	desc: "Restores HP as well when the Pokémon eats a Berry.",
	wiki: "http://www.serebii.net/abilitydex/cheekpouch.shtml"
};

var chlorophyll = {
	name: "Chlorophyll",
	desc: "Boosts the Pokémon's Speed in sunshine.",
	wiki: "http://www.serebii.net/abilitydex/chlorophyll.shtml"
};

var clear_body = {
	name: "Clear Body",
	desc: "Prevents the Pokémon's stats from being lowered.",
	wiki: "http://www.serebii.net/abilitydex/clearbody.shtml"
};

var cloud_nine = {
	name: "Cloud Nine",
	desc: "Eliminates the effects of weather.",
	wiki: "http://www.serebii.net/abilitydex/cloudnine.shtml"
};

var color_change = {
	name: "Color Change",
	desc: "Changes the Pokémon's type to the foe’s move.",
	wiki: "http://www.serebii.net/abilitydex/colorchange.shtml"
};

var comatose = {
	name: "Comatose",
	desc: "Protects the Pokémon from status conditions other than sleep.",
	wiki: "http://www.serebii.net/abilitydex/comatose.shtml"
};

var competitive = {
	name: "Competitive",
	desc: "Boosts the Sp. Atk stat when a stat is lowered.",
	wiki: "http://www.serebii.net/abilitydex/competitive.shtml"
};

var compound_eyes = {
	name: "Compound Eyes",
	desc: "The Pokémon's accuracy is boosted.",
	wiki: "http://www.serebii.net/abilitydex/compoundeyes.shtml"
};

var contrary = {
	name: "Contrary",
	desc: "Inverts changes to stat stages.",
	wiki: "http://www.serebii.net/abilitydex/contrary.shtml"
};

var corrosion = {
	name: "Corrosion",
	desc: "Allows the user to inflict poison on any Pokémon.",
	wiki: "http://www.serebii.net/abilitydex/corrosion.shtml"
};

var cursed_body = {
	name: "Cursed Body",
	desc: "Has a 30% chance of Disabling any move that hits the Pokémon.",
	wiki: "http://www.serebii.net/abilitydex/cursedbody.shtml"
};

var cute_charm = {
	name: "Cute Charm",
	desc: "Contact with the Pokémon may cause infatuation.",
	wiki: "http://www.serebii.net/abilitydex/cutecharm.shtml"
};

var damp = {
	name: "Damp",
	desc: "Prevents combatants from self destructing.",
	wiki: "http://www.serebii.net/abilitydex/damp.shtml"
};

var dancer = {
	name: "Dancer",
	desc: "Allows the Pokémon to immediately copy dancing moves.",
	wiki: "http://www.serebii.net/abilitydex/dancer.shtml"
};

var dark_aura = {
	name: "Dark Aura",
	desc: "Powers up each Pokémon's Dark-type moves.",
	wiki: "http://www.serebii.net/abilitydex/darkaura.shtml"
};

var dazzling = {
	name: "Dazzling",
	desc: "Prevents the opponent from using moves with increased priority.",
	wiki: "http://www.serebii.net/abilitydex/dazzling.shtml"
};

var defeatist = {
	name: "Defeatist",
	desc: "Halves Attack and Special Attack below 50% HP.",
	wiki: "http://www.serebii.net/abilitydex/defeatist.shtml"
};

var defiant = {
	name: "Defiant",
	desc: "Raises Attack two stages upon having any stat lowered.",
	wiki: "http://www.serebii.net/abilitydex/defiant.shtml"
};

var delta_stream = {
	name: "Delta Stream",
	desc: "Eliminates weather effects and eliminates weaknesses of Flying-type Pokémon.",
	wiki: "http://www.serebii.net/abilitydex/deltastream.shtml"
};

var desolate_land = {
	name: "Desolate Land",
	desc: "Creates harsh sunlight.",
	wiki: "http://www.serebii.net/abilitydex/desolateland.shtml"
};

var disguise = {
	name: "Disguise",
	desc: "Allows the Pokémon to nullify damage from one attack.",
	wiki: "http://www.serebii.net/abilitydex/disguise.shtml"
};

var download = {
	name: "Download",
	desc: "Adjusts power according to the foe’s lowest defensive stat.",
	wiki: "http://www.serebii.net/abilitydex/download.shtml"
};

var drizzle = {
	name: "Drizzle",
	desc: "The Pokémon makes it rain if it appears in battle.",
	wiki: "http://www.serebii.net/abilitydex/drizzle.shtml"
};

var drought = {
	name: "Drought",
	desc: "The Pokémon makes it sunny if it is in battle.",
	wiki: "http://www.serebii.net/abilitydex/drought.shtml"
};

var dry_skin = {
	name: "Dry Skin",
	desc: "Reduces HP if it is hot. Water restores HP.",
	wiki: "http://www.serebii.net/abilitydex/dryskin.shtml"
};

var early_bird = {
	name: "Early Bird",
	desc: "The Pokémon awakens quickly from sleep.",
	wiki: "http://www.serebii.net/abilitydex/earlybird.shtml"
};

var effect_spore = {
	name: "Effect Spore",
	desc: "Contact may paralyze, poison, or cause sleep.",
	wiki: "http://www.serebii.net/abilitydex/effectspore.shtml"
};

var electric_surge = {
	name: "Electric Surge",
	desc: "Immediately creates Electric Terrain upon entering battle.",
	wiki: "http://www.serebii.net/abilitydex/electricsurge.shtml"
};

var fairy_aura = {
	name: "Fairy Aura",
	desc: "Powers up each Pokémon's Fairy-type moves.",
	wiki: "http://www.serebii.net/abilitydex/fairyaura.shtml"
};

var filter = {
	name: "Filter",
	desc: "Powers down supereffective moves.",
	wiki: "http://www.serebii.net/abilitydex/filter.shtml"
};

var flame_body = {
	name: "Flame Body",
	desc: "Contact with the Pokémon may burn the foe.",
	wiki: "http://www.serebii.net/abilitydex/flamebody.shtml"
};

var flare_boost = {
	name: "Flare Boost",
	desc: "Increases Special Attack to 1.5× when burned.",
	wiki: "http://www.serebii.net/abilitydex/flareboost.shtml"
};

var flash_fire = {
	name: "Flash Fire",
	desc: "Powers up Fire-type moves if hit by a fire move.",
	wiki: "http://www.serebii.net/abilitydex/flashfire.shtml"
};

var flower_gift = {
	name: "Flower Gift",
	desc: "Powers up party Pokémon when it is sunny.",
	wiki: "http://www.serebii.net/abilitydex/flowergift.shtml"
};

var flower_veil = {
	name: "Flower Veil",
	desc: "Prevents lowering of ally Grass-type Pokémon's stats.",
	wiki: "http://www.serebii.net/abilitydex/flowerveil.shtml"
};

var fluffy = {
	name: "Fluffy",
	desc: "Haves damage from physical moves, but doubles damage from Fire-type ones.",
	wiki: "http://www.serebii.net/abilitydex/fluffy.shtml"
};

var forecast = {
	name: "Forecast",
	desc: "Transforms with the weather.",
	wiki: "http://www.serebii.net/abilitydex/forecast.shtml"
};

var forewarn = {
	name: "Forewarn",
	desc: "Determines what moves the foe has.",
	wiki: "http://www.serebii.net/abilitydex/forewarn.shtml"
};

var friend_guard = {
	name: "Friend Guard",
	desc: "Decreases damage inflicted against ally Pokémon.",
	wiki: "http://www.serebii.net/abilitydex/friendguard.shtml"
};

var frisk = {
	name: "Frisk",
	desc: "The Pokémon can check the foe’s held item.",
	wiki: "http://www.serebii.net/abilitydex/frisk.shtml"
};

var full_metal_body = {
	name: "Full Metal Body",
	desc: "Prevents stat reduction caused by other Pokémon's moves or abilities.",
	wiki: "http://www.serebii.net/abilitydex/fullmetalbody.shtml"
};

var fur_coat = {
	name: "Fur Coat",
	desc: "Halves damage from physical moves.",
	wiki: "http://www.serebii.net/abilitydex/furcoat.shtml"
};

var gale_wings = {
	name: "Gale Wings",
	desc: "Gives priority to Flying-type moves.",
	wiki: "http://www.serebii.net/abilitydex/galewings.shtml"
};

var gluttony = {
	name: "Gluttony",
	desc: "Encourages the early use of a held Berry.",
	wiki: "http://www.serebii.net/abilitydex/gluttony.shtml"
};

var gooey = {
	name: "Gooey",
	desc: "Contact with the Pokémon lowers the attacker's Speed stat.",
	wiki: "http://www.serebii.net/abilitydex/gooey.shtml"
};

var grass_pelt = {
	name: "Grass Pelt",
	desc: "Boosts the Defense stat in Grassy Terrain.",
	wiki: "http://www.serebii.net/abilitydex/grasspelt.shtml"
};

var guts = {
	name: "Guts",
	desc: "Boosts Attack if there is a status problem.",
	wiki: "http://www.serebii.net/abilitydex/guts.shtml"
};

var harvest = {
	name: "Harvest",
	desc: "Sometimes restores a consumed Berry.",
	wiki: "http://www.serebii.net/abilitydex/harvest.shtml"
};

var healer = {
	name: "Healer",
	desc: "Has a 30% chance of curing each adjacent ally of any major status ailment after each turn.",
	wiki: "http://www.serebii.net/abilitydex/healer.shtml"
};

var heatproof = {
	name: "Heatproof",
	desc: "Weakens the power of Fire-type moves.",
	wiki: "http://www.serebii.net/abilitydex/heatproof.shtml"
};

var heavy_metal = {
	name: "Heavy Metal",
	desc: "Doubles the Pokémon's weight.",
	wiki: "http://www.serebii.net/abilitydex/heavymetal.shtml"
};

var honey_gather = {
	name: "Honey Gather",
	desc: "The Pokémon may gather Honey from somewhere.",
	wiki: "http://www.serebii.net/abilitydex/honeygather.shtml"
};

var huge_power = {
	name: "Huge Power",
	desc: "Raises the Pokémon's Attack stat.",
	wiki: "http://www.serebii.net/abilitydex/hugepower.shtml"
};

var hustle = {
	name: "Hustle",
	desc: "Boosts the Attack stat, but lowers accuracy.",
	wiki: "http://www.serebii.net/abilitydex/hustle.shtml"
};

var hydration = {
	name: "Hydration",
	desc: "Heals status problems if it is raining.",
	wiki: "http://www.serebii.net/abilitydex/hydration.shtml"
};

var hyper_cutter = {
	name: "Hyper Cutter",
	desc: "Prevents the Attack stat from being lowered.",
	wiki: "http://www.serebii.net/abilitydex/hypercutter.shtml"
};

var ice_body = {
	name: "Ice Body",
	desc: "The Pokémon regains HP in a hailstorm.",
	wiki: "http://www.serebii.net/abilitydex/icebody.shtml"
};

var illuminate = {
	name: "Illuminate",
	desc: "Raises the likelihood of meeting wild Pokémon.",
	wiki: "http://www.serebii.net/abilitydex/illuminate.shtml"
};

var illusion = {
	name: "Illusion",
	desc: "Takes the appearance of the last conscious party Pokémon upon being sent out until hit by a damaging move.",
	wiki: "http://www.serebii.net/abilitydex/illusion.shtml"
};

var immunity = {
	name: "Immunity",
	desc: "Prevents the Pokémon from getting poisoned.",
	wiki: "http://www.serebii.net/abilitydex/immunity.shtml"
};

var imposter = {
	name: "Imposter",
	desc: "Transforms upon entering battle.",
	wiki: "http://www.serebii.net/abilitydex/imposter.shtml"
};

var innards_out = {
	name: "Innards Out",
	desc: "Deals damage to opposing Pokémon upon fainting.",
	wiki: "http://www.serebii.net/abilitydex/innardsout.shtml"
};

var infiltrator = {
	name: "Infiltrator",
	desc: "Ignores Light Screen, Reflect, and Safeguard.",
	wiki: "http://www.serebii.net/abilitydex/infiltrator.shtml"
};

var inner_focus = {
	name: "Inner Focus",
	desc: "The Pokémon is protected from flinching.",
	wiki: "http://www.serebii.net/abilitydex/innerfocus.shtml"
};

var insomnia = {
	name: "Insomnia",
	desc: "Prevents the Pokémon from falling asleep.",
	wiki: "http://www.serebii.net/abilitydex/insomnia.shtml"
};

var intimidate = {
	name: "Intimidate",
	desc: "Lowers the foe’s Attack stat.",
	wiki: "http://www.serebii.net/abilitydex/intimidate.shtml"
};

var iron_barbs = {
	name: "Iron Barbs",
	desc: "Damages attacking Pokémon for 1/8 their max HP on contact.",
	wiki: "http://www.serebii.net/abilitydex/ironbarbs.shtml"
};

var iron_fist = {
	name: "Iron Fist",
	desc: "Boosts the power of punching moves.",
	wiki: "http://www.serebii.net/abilitydex/ironfist.shtml"
};

var justified = {
	name: "Justified",
	desc: "Raises Attack when hit by Dark-type moves.",
	wiki: "http://www.serebii.net/abilitydex/justified.shtml"
};

var keen_eye = {
	name: "Keen Eye",
	desc: "Prevents the Pokémon from losing accuracy.",
	wiki: "http://www.serebii.net/abilitydex/keeneye.shtml"
};

var klutz = {
	name: "Klutz",
	desc: "The Pokémon can’t use any held items.",
	wiki: "http://www.serebii.net/abilitydex/klutz.shtml"
};

var leaf_guard = {
	name: "Leaf Guard",
	desc: "Prevents status problems in sunny weather.",
	wiki: "http://www.serebii.net/abilitydex/leafguard.shtml"
};

var levitate = {
	name: "Levitate",
	desc: "Gives full immunity to all Ground-type moves.",
	wiki: "http://www.serebii.net/abilitydex/levitate.shtml"
};

var light_metal = {
	name: "Light Metal",
	desc: "Halves the Pokémon's weight.",
	wiki: "http://www.serebii.net/abilitydex/lightmetal.shtml"
};

var lightning_rod = {
	name: "Lightning Rod",
	desc: "The Pokémon draws in all Electric-type moves to raise Sp. Atk.",
	wiki: "http://www.serebii.net/abilitydex/lightningrod.shtml"
};

var limber = {
	name: "Limber",
	desc: "The Pokémon is protected from paralysis.",
	wiki: "http://www.serebii.net/abilitydex/limber.shtml"
};

var liquid_ooze = {
	name: "Liquid Ooze",
	desc: "Inflicts damage on foes using any draining move.",
	wiki: "http://www.serebii.net/abilitydex/liquidooze.shtml"
};

var magic_bounce = {
	name: "Magic Bounce",
	desc: "Reflects most non-damaging moves back at their user.",
	wiki: "http://www.serebii.net/abilitydex/magicbounce.shtml"
};

var magic_guard = {
	name: "Magic Guard",
	desc: "The Pokémon only takes damage from attacks.",
	wiki: "http://www.serebii.net/abilitydex/magicguard.shtml"
};

var magician = {
	name: "Magician",
	desc: "The Pokémon steals the held item of a Pokémon it hits with a move.",
	wiki: "http://www.serebii.net/abilitydex/magician.shtml"
};

var magma_armor = {
	name: "Magma Armor",
	desc: "Prevents the Pokémon from becoming frozen.",
	wiki: "http://www.serebii.net/abilitydex/magmaarmor.shtml"
};

var magnet_pull = {
	name: "Magnet Pull",
	desc: "Prevents Steel-type Pokémon from escaping.",
	wiki: "http://www.serebii.net/abilitydex/magnetpull.shtml"
};

var marvel_scale = {
	name: "Marvel Scale",
	desc: "Boosts Defense if there is a status problem.",
	wiki: "http://www.serebii.net/abilitydex/marvelscale.shtml"
};

var mega_launcher = {
	name: "Mega Launcher",
	desc: "Powers up aura and pulse moves.",
	wiki: "http://www.serebii.net/abilitydex/megalauncher.shtml"
};

var minus = {
	name: "Minus",
	desc: "Boosts Sp. Atk if another Pokémon has Plus.",
	wiki: "http://www.serebii.net/abilitydex/minus.shtml"
};

var mold_breaker = {
	name: "Mold Breaker",
	desc: "Moves can be used regardless of Abilities.",
	wiki: "http://www.serebii.net/abilitydex/moldbreaker.shtml"
};

var moody = {
	name: "Moody",
	desc: "Raises a random stat two stages and lowers another one stage after each turn.",
	wiki: "http://www.serebii.net/abilitydex/moody.shtml"
};

var motor_drive = {
	name: "Motor Drive",
	desc: "Raises Speed if hit by an Electric-type move.",
	wiki: "http://www.serebii.net/abilitydex/motordrive.shtml"
};

var moxie = {
	name: "Moxie",
	desc: "Raises Attack one stage upon KOing a Pokémon.",
	wiki: "http://www.serebii.net/abilitydex/moxie.shtml"
};

var multiscale = {
	name: "Multiscale",
	desc: "Halves damage taken from full HP.",
	wiki: "http://www.serebii.net/abilitydex/multiscale.shtml"
};

var multitype = {
	name: "Multitype",
	desc: "Changes type to match the held Plate.",
	wiki: "http://www.serebii.net/abilitydex/multitype.shtml"
};

var mummy = {
	name: "Mummy",
	desc: "Contact with this Pokémon spreads this Ability.",
	wiki: "http://www.serebii.net/abilitydex/mummy.shtml"
};

var natural_cure = {
	name: "Natural Cure",
	desc: "All status problems are healed upon switching out.",
	wiki: "http://www.serebii.net/abilitydex/naturalcure.shtml"
};

var no_guard = {
	name: "No Guard",
	desc: "Ensures the Pokémon and its foe’s attacks land.",
	wiki: "http://www.serebii.net/abilitydex/noguard.shtml"
};

var normalize = {
	name: "Normalize",
	desc: "All the Pokémon's moves become Normal type.",
	wiki: "http://www.serebii.net/abilitydex/normalize.shtml"
};

var oblivious = {
	name: "Oblivious",
	desc: "Prevents the Pokémon from becoming infatuated or falling for taunts*.",
	wiki: "http://www.serebii.net/abilitydex/oblivious.shtml"
};

var overcoat = {
	name: "Overcoat",
	desc: "Protects against damage from weather.",
	wiki: "http://www.serebii.net/abilitydex/overcoat.shtml"
};

var overgrow = {
	name: "Overgrow",
	desc: "Powers up Grass-type moves in a pinch.",
	wiki: "http://www.serebii.net/abilitydex/overgrow.shtml"
};

var own_tempo = {
	name: "Own Tempo",
	desc: "Prevents the Pokémon from becoming confused.",
	wiki: "http://www.serebii.net/abilitydex/owntempo.shtml"
};

var parental_bond = {
	name: "Parental Bond",
	desc: "Parent and child attack together.",
	wiki: "http://www.serebii.net/abilitydex/parentalbond.shtml"
};

var pickpocket = {
	name: "Pickpocket",
	desc: "Steals attacking Pokémon's held item on contact.",
	wiki: "http://www.serebii.net/abilitydex/pickpocket.shtml"
};

var pickup = {
	name: "Pickup",
	desc: "The Pokémon may pick up items.",
	wiki: "http://www.serebii.net/abilitydex/pickup.shtml"
};

var pixilate = {
	name: "Pixilate",
	desc: "Normal-type moves become Fairy-type moves.",
	wiki: "http://www.serebii.net/abilitydex/pixilate.shtml"
};

var plus = {
	name: "Plus",
	desc: "Boosts Sp. Atk if another Pokémon has Minus.",
	wiki: "http://www.serebii.net/abilitydex/plus.shtml"
};

var poison_heal = {
	name: "Poison Heal",
	desc: "Restores HP if the Pokémon is poisoned.",
	wiki: "http://www.serebii.net/abilitydex/poisonheal.shtml"
};

var poison_point = {
	name: "Poison Point",
	desc: "Contact with the Pokémon may poison the foe.",
	wiki: "http://www.serebii.net/abilitydex/poisonpoint.shtml"
};

var poison_touch = {
	name: "Poison Touch",
	desc: "Has a 30% chance of poisoning Pokémon upon contact when attacking.",
	wiki: "http://www.serebii.net/abilitydex/poisontouch.shtml"
};

var power_construct = {
	name: "Power Construct",
	desc: "Changes the Pokémon's form when its HP falls below half.",
	wiki: "http://www.serebii.net/abilitydex/powerconstruct.shtml"
};

var prankster = {
	name: "Prankster",
	desc: "Raises non-damaging moves' priority by one stage.",
	wiki: "http://www.serebii.net/abilitydex/prankster.shtml"
};

var pressure = {
	name: "Pressure",
	desc: "The Pokémon raises the foe’s PP usage.",
	wiki: "http://www.serebii.net/abilitydex/pressure.shtml"
};

var primordial_sea = {
	name: "Primordial Sea",
	desc: "Causes heavy rain.",
	wiki: "http://www.serebii.net/abilitydex/primordialsea.shtml"
};

var protean = {
	name: "Protean",
	desc: "Changes the Pokémon's type to the same type of the move it is using.",
	wiki: "http://www.serebii.net/abilitydex/protean.shtml"
};

var pure_power = {
	name: "Pure Power",
	desc: "Boosts the power of physical attacks.",
	wiki: "http://www.serebii.net/abilitydex/purepower.shtml"
};

var queenly_majesty = {
	name: "Queenly Majesty",
	desc: "Prevents the opponent from using moves with increased priority.",
	wiki: "http://www.serebii.net/abilitydex/queenlymajesty.shtml"
};

var quick_feet = {
	name: "Quick Feet",
	desc: "Boosts Speed if there is a status problem.",
	wiki: "http://www.serebii.net/abilitydex/quickfeet.shtml"
};

var rain_dish = {
	name: "Rain Dish",
	desc: "The Pokémon gradually recovers HP in rain.",
	wiki: "http://www.serebii.net/abilitydex/raindish.shtml"
};

var rattled = {
	name: "Rattled",
	desc: "Raises Speed one stage upon being hit by a Dark, Ghost, or Bug move.",
	wiki: "http://www.serebii.net/abilitydex/rattled.shtml"
};

var receiver = {
	name: "Receiver",
	desc: "Takes the Ability of a fainted ally.",
	wiki: "http://www.serebii.net/abilitydex/receiver.shtml"
};

var reckless = {
	name: "Reckless",
	desc: "Powers up moves that have recoil damage.",
	wiki: "http://www.serebii.net/abilitydex/reckless.shtml"
};

var refrigerate = {
	name: "Refrigerate",
	desc: "Normal-type moves become Ice-type moves.",
	wiki: "http://www.serebii.net/abilitydex/refrigerate.shtml"
};

var regenerator = {
	name: "Regenerator",
	desc: "Heals for 1/3 max HP upon leaving battle.",
	wiki: "http://www.serebii.net/abilitydex/regenerator.shtml"
};

var rivalry = {
	name: "Rivalry",
	desc: "Raises Attack if the foe is of the same gender.",
	wiki: "http://www.serebii.net/abilitydex/rivalry.shtml"
};

var rks_system = {
	name: "RKS System",
	desc: "Changes type to match a specific item.",
	wiki: "http://www.serebii.net/abilitydex/rkssystem.shtml"
};

var rock_head = {
	name: "Rock Head",
	desc: "Protects the Pokémon from recoil damage.",
	wiki: "http://www.serebii.net/abilitydex/rockhead.shtml"
};

var rough_skin = {
	name: "Rough Skin",
	desc: "Inflicts damage to the foe on contact.",
	wiki: "http://www.serebii.net/abilitydex/roughskin.shtml"
};

var run_away = {
	name: "Run Away",
	desc: "Enables sure getaway from wild Pokémon.",
	wiki: "http://www.serebii.net/abilitydex/runaway.shtml"
};

var sand_force = {
	name: "Sand Force",
	desc: "Strengthens Rock, Ground, and Steel moves to 1.3× their power during a sandstorm.",
	wiki: "http://www.serebii.net/abilitydex/sandforce.shtml"
};

var sand_rush = {
	name: "Sand Rush",
	desc: "Doubles Speed during a sandstorm.",
	wiki: "http://www.serebii.net/abilitydex/sandrush.shtml"
};

var sand_stream = {
	name: "Sand Stream",
	desc: "The Pokémon summons a sandstorm in battle.",
	wiki: "http://www.serebii.net/abilitydex/sandstream.shtml"
};

var sand_veil = {
	name: "Sand Veil",
	desc: "Boosts the Pokémon's evasion in a sandstorm.",
	wiki: "http://www.serebii.net/abilitydex/sandveil.shtml"
};

var sap_sipper = {
	name: "Sap Sipper",
	desc: "Absorbs Grass moves, raising Attack one stage.",
	wiki: "http://www.serebii.net/abilitydex/sapsipper.shtml"
};

var schooling = {
	name: "Schooling",
	desc: "Changes the Pokémon's form when certain requirements are met.",
	wiki: "http://www.serebii.net/abilitydex/schooling.shtml"
};

var scrappy = {
	name: "Scrappy",
	desc: "Enables moves to hit Ghost-type foes.",
	wiki: "http://www.serebii.net/abilitydex/scrappy.shtml"
};

var serene_grace = {
	name: "Serene Grace",
	desc: "Boosts the likelihood of added effects appearing.",
	wiki: "http://www.serebii.net/abilitydex/serenegrace.shtml"
};

var shadow_shield = {
	name: "Shadow Shield",
	desc: "Lowers damage taken from moves while at maximum HP.",
	wiki: "http://www.serebii.net/abilitydex/shadowshield.shtml"
};

var shadow_tag = {
	name: "Shadow Tag",
	desc: "Prevents the foe from escaping.",
	wiki: "http://www.serebii.net/abilitydex/shadowtag.shtml"
};

var shed_skin = {
	name: "Shed Skin",
	desc: "The Pokémon may heal its own status problems.",
	wiki: "http://www.serebii.net/abilitydex/shedskin.shtml"
};

var sheer_force = {
	name: "Sheer Force",
	desc: "Strengthens moves with extra effects to 1.3× their power, but prevents their extra effects.",
	wiki: "http://www.serebii.net/abilitydex/sheerforce.shtml"
};

var shell_armor = {
	name: "Shell Armor",
	desc: "The Pokémon is protected against critical hits.",
	wiki: "http://www.serebii.net/abilitydex/shellarmor.shtml"
};

var shield_dust = {
	name: "Shield Dust",
	desc: "Blocks the added effects of attacks taken.",
	wiki: "http://www.serebii.net/abilitydex/shielddust.shtml"
};

var shields_down = {
	name: "Shields Down",
	desc: "Changes the Pokémon's form when HP is low.",
	wiki: "http://www.serebii.net/abilitydex/shieldsdown.shtml"
};

var simple = {
	name: "Simple",
	desc: "The Pokémon is prone to wild stat changes.",
	wiki: "http://www.serebii.net/abilitydex/simple.shtml"
};

var skill_link = {
	name: "Skill Link",
	desc: "Increases the frequency of multi-strike moves.",
	wiki: "http://www.serebii.net/abilitydex/skilllink.shtml"
};

var slow_start = {
	name: "Slow Start",
	desc: "Temporarily halves Attack and Speed.",
	wiki: "http://www.serebii.net/abilitydex/slowstart.shtml"
};

var sniper = {
	name: "Sniper",
	desc: "Powers up moves if they become critical hits.",
	wiki: "http://www.serebii.net/abilitydex/sniper.shtml"
};

var snow_cloak = {
	name: "Snow Cloak",
	desc: "Raises evasion in a hailstorm.",
	wiki: "http://www.serebii.net/abilitydex/snowcloak.shtml"
};

var snow_warning = {
	name: "Snow Warning",
	desc: "The Pokémon summons a hailstorm in battle.",
	wiki: "http://www.serebii.net/abilitydex/snowwarning.shtml"
};

var solar_power = {
	name: "Solar Power",
	desc: "Boosts Sp. Atk, but lowers HP in sunshine.",
	wiki: "http://www.serebii.net/abilitydex/solarpower.shtml"
};

var solid_rock = {
	name: "Solid Rock",
	desc: "Powers down supereffective moves.",
	wiki: "http://www.serebii.net/abilitydex/solidrock.shtml"
};

var soul_heart = {
	name: "Soul_heart",
	desc: "Raises the Pokémon's Special Attack when any Pokémon faints.",
	wiki: "http://www.serebii.net/abilitydex/soul_heart.shtml"
};

var soundproof = {
	name: "Soundproof",
	desc: "Gives full immunity to all sound-based moves.",
	wiki: "http://www.serebii.net/abilitydex/soundproof.shtml"
};

var speed_boost = {
	name: "Speed Boost",
	desc: "The Pokémon's Speed stat is gradually boosted.",
	wiki: "http://www.serebii.net/abilitydex/speedboost.shtml"
};

var stakeout = {
	name: "Stakeout",
	desc: "Doubles damage inflicted on Pokémon that enter mid-battle.",
	wiki: "http://www.serebii.net/abilitydex/stakeout.shtml"
};

var stall = {
	name: "Stall",
	desc: "The Pokémon moves after even slower foes.",
	wiki: "http://www.serebii.net/abilitydex/stall.shtml"
};

var stamina = {
	name: "Stamina",
	desc: "Raises defense when hit by an attack.",
	wiki: "http://www.serebii.net/abilitydex/stamina.shtml"
};

var stance_change = {
	name: "Stance Change",
	desc: "The Pokémon changes form depending on how it battles.",
	wiki: "http://www.serebii.net/abilitydex/stancechange.shtml"
};

var static = {
	name: "Static",
	desc: "Contact with the Pokémon may cause paralysis.",
	wiki: "http://www.serebii.net/abilitydex/static.shtml"
};

var steadfast = {
	name: "Steadfast",
	desc: "Raises Speed each time the Pokémon flinches.",
	wiki: "http://www.serebii.net/abilitydex/steadfast.shtml"
};

var stench = {
	name: "Stench",
	desc: "The stench may cause the target to flinch.",
	wiki: "http://www.serebii.net/abilitydex/stench.shtml"
};

var sticky_hold = {
	name: "Sticky Hold",
	desc: "Protects the Pokémon from item theft.",
	wiki: "http://www.serebii.net/abilitydex/stickyhold.shtml"
};

var storm_drain = {
	name: "Storm Drain",
	desc: "The Pokémon draws in all Water-type moves.",
	wiki: "http://www.serebii.net/abilitydex/stormdrain.shtml"
};

var strong_jaw = {
	name: "Strong Jaw",
	desc: "The Pokémon's strong jaw gives it tremendous biting power.",
	wiki: "http://www.serebii.net/abilitydex/strongjaw.shtml"
};

var sturdy = {
	name: "Sturdy",
	desc: "The Pokémon is protected against 1-hit KO attacks.",
	wiki: "http://www.serebii.net/abilitydex/sturdy.shtml"
};

var suction_cups = {
	name: "Suction Cups",
	desc: "Negates moves that force switching out.",
	wiki: "http://www.serebii.net/abilitydex/suctioncups.shtml"
};

var super_luck = {
	name: "Super Luck",
	desc: "Heightens the critical-hit ratios of moves.",
	wiki: "http://www.serebii.net/abilitydex/superluck.shtml"
};

var surge_surfer = {
	name: "Surge Surfer",
	desc: "Doubles Speed while under the effects of Electric Terrain.",
	wiki: "http://www.serebii.net/abilitydex/surgesurfer.shtml"
};

var swarm = {
	name: "Swarm",
	desc: "Powers up Bug-type moves in a pinch.",
	wiki: "http://www.serebii.net/abilitydex/swarm.shtml"
};

var sweet_veil = {
	name: "Sweet Veil",
	desc: "Prevents itself and its allies from falling asleep.",
	wiki: "http://www.serebii.net/abilitydex/sweetveil.shtml"
};

var swift_swim = {
	name: "Swift Swim",
	desc: "Boosts the Pokémon's Speed in rain.",
	wiki: "http://www.serebii.net/abilitydex/swiftswim.shtml"
};

var symbiosis = {
	name: "Symbiosis",
	desc: "The Pokémon can pass an item to an ally.",
	wiki: "http://www.serebii.net/abilitydex/symbiosis.shtml"
};

var synchronize = {
	name: "Synchronize",
	desc: "Passes on a burn, poison, or paralysis to the foe.",
	wiki: "http://www.serebii.net/abilitydex/synchronize.shtml"
};

var tangled_feet = {
	name: "Tangled Feet",
	desc: "Raises evasion if the Pokémon is confused.",
	wiki: "http://www.serebii.net/abilitydex/tangledfeet.shtml"
};

var technician = {
	name: "Technician",
	desc: "Powers up the Pokémon's weaker moves.",
	wiki: "http://www.serebii.net/abilitydex/technician.shtml"
};

var telepathy = {
	name: "Telepathy",
	desc: "Protects against damaging moves from friendly Pokémon.",
	wiki: "http://www.serebii.net/abilitydex/telepathy.shtml"
};

var teravolt = {
	name: "Teravolt",
	desc: "Moves can be used regardless of Abilities.",
	wiki: "http://www.serebii.net/abilitydex/teravolt.shtml"
};

var thick_fat = {
	name: "Thick Fat",
	desc: "Raises resistance to Fire- and Ice-type moves.",
	wiki: "http://www.serebii.net/abilitydex/thickfat.shtml"
};

var tinted_lens = {
	name: "Tinted Lens",
	desc: "Powers up “not very effective” moves.",
	wiki: "http://www.serebii.net/abilitydex/tintedlens.shtml"
};

var torrent = {
	name: "Torrent",
	desc: "Powers up Water-type moves in a pinch.",
	wiki: "http://www.serebii.net/abilitydex/torrent.shtml"
};

var tough_claws = {
	name: "Tough Claws",
	desc: "Powers up moves that make direct contact.",
	wiki: "http://www.serebii.net/abilitydex/toughclaws.shtml"
};

var toxic_boost = {
	name: "Toxic Boost",
	desc: "Increases Attack to 1.5× when poisoned.",
	wiki: "http://www.serebii.net/abilitydex/toxicboost.shtml"
};

var trace = {
	name: "Trace",
	desc: "The Pokémon copies a foe's Ability.",
	wiki: "http://www.serebii.net/abilitydex/trace.shtml"
};

var triage = {
	name: "Triage",
	desc: "Boosts HP-restoring moves used to the highest priority.",
	wiki: "http://www.serebii.net/abilitydex/triage.shtml"
};

var truant = {
	name: "Truant",
	desc: "The Pokémon can't attack on consecutive turns.",
	wiki: "http://www.serebii.net/abilitydex/truant.shtml"
};

var turboblaze = {
	name: "Turboblaze",
	desc: "Moves can be used regardless of Abilities.",
	wiki: "http://www.serebii.net/abilitydex/turboblaze.shtml"
};

var unaware = {
	name: "Unaware",
	desc: "Ignores any change in stats by the foe.",
	wiki: "http://www.serebii.net/abilitydex/unaware.shtml"
};

var unburden = {
	name: "Unburden",
	desc: "Raises Speed if a held item is used.",
	wiki: "http://www.serebii.net/abilitydex/unburden.shtml"
};

var unnerve = {
	name: "Unnerve",
	desc: "Prevents opposing Pokémon from eating held Berries.",
	wiki: "http://www.serebii.net/abilitydex/unnerve.shtml"
};

var victory_star = {
	name: "Victory Star",
	desc: "Raises moves' accuracy to 1.1× for friendly Pokémon.",
	wiki: "http://www.serebii.net/abilitydex/victorystar.shtml"
};

var vital_spirit = {
	name: "Vital Spirit",
	desc: "Prevents the Pokémon from falling asleep.",
	wiki: "http://www.serebii.net/abilitydex/vitalspirit.shtml"
};

var volt_absorb = {
	name: "Volt Absorb",
	desc: "Restores HP if hit by an Electric-type move.",
	wiki: "http://www.serebii.net/abilitydex/voltabsorb.shtml"
};

var water_absorb = {
	name: "Water Absorb",
	desc: "Restores HP if hit by a Water-type move.",
	wiki: "http://www.serebii.net/abilitydex/waterabsorb.shtml"
};

var water_compaction = {
	name: "Water Compaction",
	desc: "Raises Defense by two stages if hit by a Water-type move.",
	wiki: "http://www.serebii.net/abilitydex/watercompaction.shtml"
};

var water_veil = {
	name: "Water Veil",
	desc: "Prevents the Pokémon from getting a burn.",
	wiki: "http://www.serebii.net/abilitydex/waterveil.shtml"
};

var weak_armor = {
	name: "Weak Armor",
	desc: "Raises Speed and lowers Defense by one stage each upon being hit by any move.",
	wiki: "http://www.serebii.net/abilitydex/weakarmor.shtml"
};

var white_smoke = {
	name: "White Smoke",
	desc: "Prevents the Pokémon's stats from being lowered.",
	wiki: "http://www.serebii.net/abilitydex/whitesmoke.shtml"
};

var wimp_out = {
	name: "Wimp Out",
	desc: "Causes the Pokémon to flee or switch out when HP is low.",
	wiki: "http://www.serebii.net/abilitydex/wimpout.shtml"
};

var wonder_guard = {
	name: "Wonder Guard",
	desc: "Only supereffective moves will hit.",
	wiki: "http://www.serebii.net/abilitydex/wonderguard.shtml"
};

var wonder_skin = {
	name: "Wonder Skin",
	desc: "Has a 50% chance of protecting against non-damaging moves that inflict major status ailments.",
	wiki: "http://www.serebii.net/abilitydex/wonderskin.shtml"
};

var zen_mode = {
	name: "Zen Mode",
	desc: "Changes the Pokémon's shape when HP is halved.",
	wiki: "http://www.serebii.net/abilitydex/zenmode.shtml"
};

var emergency_exit = {
	name: "Emergency Exit",
	desc: "The Pokémon, sensing danger, switches out when its HP becomes half or less.",
	wiki: "http://www.serebii.net/abilitydex/emergencyexit.shtml"
};

var merciless = {
	name: "Merciless",
	desc: "The Pokémon’s attacks become critical hits if the target is poisoned.",
	wiki: "http://www.serebii.net/abilitydex/merciless.shtml"
};

var water_bubble = {
	name: "Water Bubble",
	desc: "Lowers the power of Fire-type moves done to the Pokémon and prevents the Pokémon from getting a burn. Also secretly doubles the power of Water-type moves.",
	wiki: "http://www.serebii.net/abilitydex/waterbubble.shtml"
};

var steelworker = {
	name: "Steelworker",
	desc: "Powers up Steel-type moves.",
	wiki: "http://www.serebii.net/abilitydex/steelworker.shtml"
};

var slush_rush = {
	name: "Slush Rush",
	desc: "Boosts the Pokémon’s Speed stat in a hailstorm.",
	wiki: "http://www.serebii.net/abilitydex/slushrush.shtml"
};

var long_reach = {
	name: "Long Reach",
	desc: "The Pokémon uses its moves without making contact with the target.",
	wiki: "http://www.serebii.net/abilitydex/longreach.shtml"
};

var liquid_voice = {
	name: "Liquid Voice",
	desc: "All sound-based moves become Water-type moves.",
	wiki: "http://www.serebii.net/abilitydex/liquidvoice.shtml"
};

var galvanize = {
	name: "Galvanize",
	desc: "Normal-type moves become Electric-type moves. The power of those moves is boosted a little.",
	wiki: "http://www.serebii.net/abilitydex/galvanize.shtml"
};

var tangling_hair = {
	name: "Tangling Hair",
	desc: "Contact with the Pokémon lowers the attacker’s Speed stat.",
	wiki: "http://www.serebii.net/abilitydex/tanglinghair.shtml"
};

var power_of_alchemy = {
	name: "Power Of Alchemy",
	desc: "The Pokémon copies the Ability of a defeated ally.",
	wiki: "http://www.serebii.net/abilitydex/powerofalchemy.shtml"
};

var beast_boost = {
	name: "Beast Boost",
	desc: "The Pokémon boosts its most proficient stat each time it knocks out a Pokémon.",
	wiki: "http://www.serebii.net/abilitydex/beastboost.shtml"
};

var psychic_surge = {
	name: "Psychic Surge",
	desc: "Turns the ground into Psychic Terrain when the Pokémon enters a battle.",
	wiki: "http://www.serebii.net/abilitydex/psychicsurge.shtml"
};

var misty_surge = {
	name: "Misty Surge",
	desc: "Turns the ground into Misty Terrain when the Pokémon enters a battle.",
	wiki: "http://www.serebii.net/abilitydex/mistysurge.shtml"
};

var grassy_surge = {
	name: "Grassy Surge",
	desc: "Turns the ground into Grassy Terrain when the Pokémon enters a battle.",
	wiki: "http://www.serebii.net/abilitydex/grassysurge.shtml"
};

var full_metal_body = {
	name: "Full Metal Body",
	desc: "Prevents other Pokémon’s moves or Abilities from lowering the Pokémon’s stats.",
	wiki: "http://www.serebii.net/abilitydex/fullmetalbody.shtml"
};

var prism_armor = {
	name: "Prism Armor",
	desc: "Reduces the power of supereffective attacks taken.",
	wiki: "http://www.serebii.net/abilitydex/prismarmor.shtml"
};
