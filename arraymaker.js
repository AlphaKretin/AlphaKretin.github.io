var mons = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "alolan rattata", "alolan raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "alolan raichu", "sandshrew", "sandslash", "alolan sandshrew", "alolan sandslash", "nidoranf", "nidorina", "nidoqueen", "nidoranm", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "alolan vulpix", "alolan ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "alolan diglett", "alolan dugtrio", "meowth", "persian", "alolan meowth", "alolan persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "alolan geodude", "alolan graveler", "alolan golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "alolan grimer", "alolan muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "alolan exeggutor", "cubone", "marowak", "alolan marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion", "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi", "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos", "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking", "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress", "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish", "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring", "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid", "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom", "kingdra", "phanpy", "donphan", "porygon2", "stantler", "smeargle", "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank", "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar", "tyranitar", "lugia", "ho_oh", "celebi", "treecko", "grovyle", "sceptile", "torchic", "combusken", "blaziken", "mudkip", "marshtomp", "swampert", "poochyena", "mightyena", "zigzagoon", "linoone", "wurmple", "silcoon", "beautifly", "cascoon", "dustox", "lotad", "lombre", "ludicolo", "seedot", "nuzleaf", "shiftry", "taillow", "swellow", "wingull", "pelipper", "ralts", "kirlia", "gardevoir", "surskit", "masquerain", "shroomish", "breloom", "slakoth", "vigoroth", "slaking", "nincada", "ninjask", "shedinja", "whismur", "loudred", "exploud", "makuhita", "hariyama", "azurill", "nosepass", "skitty", "delcatty", "sableye", "mawile", "aron", "lairon", "aggron", "meditite", "medicham", "electrike", "manectric", "plusle", "minun", "volbeat", "illumise", "roselia", "gulpin", "swalot", "carvanha", "sharpedo", "wailmer", "wailord", "numel", "camerupt", "torkoal", "spoink", "grumpig", "spinda", "trapinch", "vibrava", "flygon", "cacnea", "cacturne", "swablu", "altaria", "zangoose", "seviper", "lunatone", "solrock", "barboach", "whiscash", "corphish", "crawdaunt", "baltoy", "claydol", "lileep", "cradily", "anorith", "armaldo", "feebas", "milotic", "castform", "castform sunny", "castform rainy", "castform snowy", "kecleon", "shuppet", "banette", "duskull", "dusclops", "tropius", "chimecho", "absol", "wynaut", "snorunt", "glalie", "spheal", "sealeo", "walrein", "clamperl", "huntail", "gorebyss", "relicanth", "luvdisc", "bagon", "shelgon", "salamence", "beldum", "metang", "metagross", "regirock", "regice", "registeel", "latias", "latios", "kyogre", "groudon", "rayquaza", "jirachi", "deoxys", "turtwig", "grotle", "torterra", "chimchar", "monferno", "infernape", "piplup", "prinplup", "empoleon", "starly", "staravia", "staraptor", "bidoof", "bibarel", "kricketot", "kricketune", "shinx", "luxio", "luxray", "budew", "roserade", "cranidos", "rampardos", "shieldon", "bastiodon", "burmy", "wormadam", "wormadam sandy", "wormadam trash", "mothim", "combee", "vespiquen", "pachirisu", "buizel", "floatzel", "cherubi", "cherrim", "shellos", "gastrodon", "ambipom", "drifloon", "drifblim", "buneary", "lopunny", "mismagius", "honchkrow", "glameow", "purugly", "chingling", "stunky", "skuntank", "bronzor", "bronzong", "bonsly", "mime jr", "happiny", "chatot", "spiritomb", "gible", "gabite", "garchomp", "munchlax", "riolu", "lucario", "hippopotas", "hippowdon", "skorupi", "drapion", "croagunk", "toxicroak", "carnivine", "finneon", "lumineon", "mantyke", "snover", "abomasnow", "weavile", "magnezone", "lickilicky", "rhyperior", "tangrowth", "electivire", "magmortar", "togekiss", "yanmega", "leafeon", "glaceon", "gliscor", "mamoswine", "porygon_z", "gallade", "probopass", "dusknoir", "froslass", "rotom", "rotom heat", "rotom wash", "rotom mow", "rotom fan", "rotom frost", "uxie", "mesprit", "azelf", "dialga", "palkia", "heatran", "regigigas", "giratina", "giratina origin", "cresselia", "phione", "manaphy", "darkrai", "shaymin", "shaymin sky", "arceus", "victini", "snivy", "servine", "serperior", "tepig", "pignite", "emboar", "oshawott", "dewott", "samurott", "patrat", "watchog", "lillipup", "herdier", "stoutland", "purrloin", "liepard", "pansage", "simisage", "pansear", "simisear", "panpour", "simipour", "munna", "musharna", "pidove", "tranquill", "unfezant", "blitzle", "zebstrika", "roggenrola", "boldore", "gigalith", "woobat", "swoobat", "drilbur", "excadrill", "audino", "timburr", "gurdurr", "conkeldurr", "tympole", "palpitoad", "seismitoad", "throh", "sawk", "sewaddle", "swadloon", "leavanny", "venipede", "whirlipede", "scolipede", "cottonee", "whimsicott", "petilil", "lilligant", "basculin", "basculin blue", "sandile", "krokorok", "krookodile", "darumaka", "darmanitan", "darmanitan zen", "maractus", "dwebble", "crustle", "scraggy", "scrafty", "sigilyph", "yamask", "cofagrigus", "tirtouga", "carracosta", "archen", "archeops", "trubbish", "garbodor", "zorua", "zoroark", "minccino", "cinccino", "gothita", "gothorita", "gothitelle", "solosis", "duosion", "reuniclus", "ducklett", "swanna", "vanillite", "vanillish", "vanilluxe", "deerling", "sawsbuck", "emolga", "karrablast", "escavalier", "foongus", "amoonguss", "frillish", "jellicent", "alomomola", "joltik", "galvantula", "ferroseed", "ferrothorn", "klink", "klang", "klinklang", "tynamo", "eelektrik", "eelektross", "elgyem", "beheeyem", "litwick", "lampent", "chandelure", "axew", "fraxure", "haxorus", "cubchoo", "beartic", "cryogonal", "shelmet", "accelgor", "stunfisk", "mienfoo", "mienshao", "druddigon", "golett", "golurk", "pawniard", "bisharp", "bouffalant", "rufflet", "braviary", "vullaby", "mandibuzz", "heatmor", "durant", "deino", "zweilous", "hydreigon", "larvesta", "volcarona", "cobalion", "terrakion", "virizion", "tornadus", "tornadus therian", "thundurus", "thundurus therian", "reshiram", "zekrom", "landorus", "landorus therian", "kyurem", "white kyurem", "black kyurem", "keldeo", "meloetta", "meloetta pirouette", "genesect", "chespin", "quilladin", "chesnaught", "fennekin", "braixen", "delphox", "froakie", "frogadier", "greninja", "bunnelby", "diggersby", "fletchling", "fletchinder", "talonflame", "scatterbug", "spewpa", "vivillon", "litleo", "pyroar", "flabebe", "floette", "florges", "skiddo", "gogoat", "pancham", "pangoro", "furfrou", "espurr", "meowstic", "honedge", "doublade", "aegislash", "spritzee", "aromatisse", "swirlix", "slurpuff", "inkay", "malamar", "binacle", "barbaracle", "skrelp", "dragalge", "clauncher", "clawitzer", "helioptile", "heliolisk", "tyrunt", "tyrantrum", "amaura", "aurorus", "sylveon", "hawlucha", "dedenne", "carbink", "goomy", "sliggoo", "goodra", "klefki", "phantump", "trevenant", "pumpkaboo", "gourgeist", "bergmite", "avalugg", "noibat", "noivern", "xerneas", "yveltal", "zygarde", "diancie", "hoopa", "hoopa unbound", "volcanion", "mega venusaur", "mega charizard x", "mega charizard y", "mega blastoise", "mega alakazam", "mega gengar", "mega kangaskhan", "mega pinsir", "mega gyarados", "mega aerodactyl", "mega mewtwo x", "mega mewtwo y", "mega ampharos", "mega scizor", "mega heracross", "mega houndoom", "mega tyranitar", "mega blaziken", "mega gardevoir", "mega mawile", "mega aggron", "mega medicham", "mega manectric", "mega banette", "mega absol", "mega garchomp", "mega lucario", "mega abomasnow", "mega beedrill", "mega pidgeot", "mega slowbro", "mega steelix", "mega sceptile", "mega swampert", "mega sableye", "mega sharpedo", "mega camerupt", "mega altaria", "mega glalie", "mega salamence", "mega metagross", "mega latias", "mega latios", "mega rayquaza", "mega lopunny", "mega gallade", "mega audino", "mega diancie", "rowlet", "dartrix", "decidueye", "litten", "torracat", "incineroar", "popplio", "brionne", "primarina", "pikipek", "trumbeak", "toucannon", "yungoos", "gumshoos", "grubbin", "charjabug", "vikavolt", "crabrawler", "crabominable", "oricorio", "cutiefly", "ribombee", "rockruff", "lycanroc", "lycanroc midnight", "wishiwashi", "mareanie", "toxapex", "mudbray", "mudsdale", "dewpider", "araquanid", "fomantis", "lurantis", "morelull", "shiinotic", "salandit", "salazzle", "stufful", "bewear", "bounsweet", "steenee", "tsareena", "comfey", "oranguru", "passimian", "wimpod", "golisopod", "sandygast", "palossand", "pyukumuku", "type null", "silvally", "minior", "komala", "turtonator", "togedemaru", "mimikyu", "bruxish", "drampa", "dhelmise", "jangmo_o", "hakamo_o", "kommo_o", "tapu koko", "tapu lele", "tapu bulu", "tapu fini", "cosmog", "cosmoem", "solgaleo", "lunala", "nihilego", "buzzwole", "pheromosa", "xurkitree", "celesteela", "kartana", "guzzlord", "necrozma", "magearna", "marshadow"];
var moves = ["pound", "karate chop", "double slap", "comet punch", "mega punch", "pay day", "fire punch", "ice punch", "thunder punch", "scratch", "vice grip", "guillotine", "razor wind", "swords dance", "cut", "gust", "wing attack", "whirlwind", "fly", "bind", "slam", "vine whip", "stomp", "double kick", "mega kick", "jump kick", "rolling kick", "sand attack", "headbutt", "horn attack", "fury attack", "horn drill", "tackle", "body slam", "wrap", "take down", "thrash", "double_edge", "tail whip", "poison sting", "twineedle", "pin missile", "leer", "bite", "growl", "roar", "sing", "supersonic", "sonic boom", "disable", "acid", "ember", "flamethrower", "mist", "water gun", "hydro pump", "surf", "ice beam", "blizzard", "psybeam", "bubble beam", "aurora beam", "hyper beam", "peck", "drill peck", "submission", "low kick", "counter", "seismic toss", "strength", "absorb", "mega drain", "leech seed", "growth", "razor leaf", "solar beam", "poison powder", "stun spore", "sleep powder", "petal dance", "string shot", "dragon rage", "fire spin", "thunder shock", "thunderbolt", "thunder wave", "thunder", "rock throw", "earthquake", "fissure", "dig", "toxic", "confusion", "psychic", "hypnosis", "meditate", "agility", "quick attack", "rage", "teleport", "night shade", "mimic", "screech", "double team", "recover", "harden", "minimize", "smokescreen", "confuse ray", "withdraw", "defense curl", "barrier", "light screen", "haze", "reflect", "focus energy", "bide", "metronome", "mirror move", "self_destruct", "egg bomb", "lick", "smog", "sludge", "bone club", "fire blast", "waterfall", "clamp", "swift", "skull bash", "spike cannon", "constrict", "amnesia", "kinesis", "soft_boiled", "high jump kick", "glare", "dream eater", "poison gas", "barrage", "leech life", "lovely kiss", "sky attack", "transform", "bubble", "dizzy punch", "spore", "flash", "psywave", "splash", "acid armor", "crabhammer", "explosion", "fury swipes", "bonemerang", "rest", "rock slide", "hyper fang", "sharpen", "conversion", "tri attack", "super fang", "slash", "substitute", "struggle", "sketch", "triple kick", "thief", "spider web", "mind reader", "nightmare", "flame wheel", "snore", "curse", "flail", "conversion 2", "aeroblast", "cotton spore", "reversal", "spite", "powder snow", "protect", "mach punch", "scary face", "feint attack", "sweet kiss", "belly drum", "sludge bomb", "mud_slap", "octazooka", "spikes", "zap cannon", "foresight", "destiny bond", "perish song", "icy wind", "detect", "bone rush", "lock_on", "outrage", "sandstorm", "giga drain", "endure", "charm", "rollout", "false swipe", "swagger", "milk drink", "spark", "fury cutter", "steel wing", "mean look", "attract", "sleep talk", "heal bell", "_return", "present", "frustration", "safeguard", "pain split", "sacred fire", "magnitude", "dynamic punch", "megahorn", "dragon breath", "baton pass", "encore", "pursuit", "rapid spin", "sweet scent", "iron tail", "metal claw", "vital throw", "morning sun", "synthesis", "moonlight", "hidden power", "cross chop", "twister", "rain dance", "sunny day", "crunch", "mirror coat", "psych up", "extreme speed", "ancient power", "shadow ball", "future sight", "rock smash", "whirlpool", "beat up", "fake out", "uproar", "stockpile", "spit up", "swallow", "heat wave", "hail", "torment", "flatter", "will_o_wisp", "memento", "facade", "focus punch", "smelling salts", "follow me", "nature power", "charge", "taunt", "helping hand", "trick", "role play", "wish", "assist", "ingrain", "superpower", "magic coat", "recycle", "revenge", "brick break", "yawn", "knock off", "endeavor", "eruption", "skill swap", "imprison", "refresh", "grudge", "snatch", "secret power", "dive", "arm thrust", "camouflage", "tail glow", "luster purge", "mist ball", "feather dance", "teeter dance", "blaze kick", "mud sport", "ice ball", "needle arm", "slack off", "hyper voice", "poison fang", "crush claw", "blast burn", "hydro cannon", "meteor mash", "astonish", "weather ball", "aromatherapy", "fake tears", "air cutter", "overheat", "odor sleuth", "rock tomb", "silver wind", "metal sound", "grass whistle", "tickle", "cosmic power", "water spout", "signal beam", "shadow punch", "extrasensory", "sky uppercut", "sand tomb", "sheer cold", "muddy water", "bullet seed", "aerial ace", "icicle spear", "iron defense", "block", "howl", "dragon claw", "frenzy plant", "bulk up", "bounce", "mud shot", "poison tail", "covet", "volt tackle", "magical leaf", "water sport", "calm mind", "leaf blade", "dragon dance", "rock blast", "shock wave", "water pulse", "doom desire", "psycho boost", "roost", "gravity", "miracle eye", "wake_up slap", "hammer arm", "gyro ball", "healing wish", "brine", "natural gift", "feint", "pluck", "tailwind", "acupressure", "metal burst", "u_turn", "close combat", "payback", "assurance", "embargo", "fling", "psycho shift", "trump card", "heal block", "wring out", "power trick", "gastro acid", "lucky chant", "me first", "copycat", "power swap", "guard swap", "punishment", "last resort", "worry seed", "sucker punch", "toxic spikes", "heart swap", "aqua ring", "magnet rise", "flare blitz", "force palm", "aura sphere", "rock polish", "poison jab", "dark pulse", "night slash", "aqua tail", "seed bomb", "air slash", "x_scissor", "bug buzz", "dragon pulse", "dragon rush", "power gem", "drain punch", "vacuum wave", "focus blast", "energy ball", "brave bird", "earth power", "switcheroo", "giga impact", "nasty plot", "bullet punch", "avalanche", "ice shard", "shadow claw", "thunder fang", "ice fang", "fire fang", "shadow sneak", "mud bomb", "psycho cut", "zen headbutt", "mirror shot", "flash cannon", "rock climb", "defog", "trick room", "draco meteor", "discharge", "lava plume", "leaf storm", "power whip", "rock wrecker", "cross poison", "gunk shot", "iron head", "magnet bomb", "stone edge", "captivate", "stealth rock", "grass knot", "chatter", "judgment", "bug bite", "charge beam", "wood hammer", "aqua jet", "attack order", "defend order", "heal order", "head smash", "double hit", "roar of time", "spacial rend", "lunar dance", "crush grip", "magma storm", "dark void", "seed flare", "ominous wind", "shadow force", "hone claws", "wide guard", "guard split", "power split", "wonder room", "psyshock", "venoshock", "autotomize", "rage powder", "telekinesis", "magic room", "smack down", "storm throw", "flame burst", "sludge wave", "quiver dance", "heavy slam", "synchronoise", "electro ball", "soak", "flame charge", "coil", "low sweep", "acid spray", "foul play", "simple beam", "entrainment", "after you", "round", "echoed voice", "chip away", "clear smog", "stored power", "quick guard", "ally switch", "scald", "shell smash", "heal pulse", "hex", "sky drop", "shift gear", "circle throw", "incinerate", "quash", "acrobatics", "reflect type", "retaliate", "final gambit", "bestow", "inferno", "water pledge", "fire pledge", "grass pledge", "volt switch", "struggle bug", "bulldoze", "frost breath", "dragon tail", "work up", "electroweb", "wild charge", "drill run", "dual chop", "heart stamp", "horn leech", "sacred sword", "razor shell", "heat crash", "leaf tornado", "steamroller", "cotton guard", "night daze", "psystrike", "tail slap", "hurricane", "head charge", "gear grind", "searing shot", "techno blast", "relic song", "secret sword", "glaciate", "bolt strike", "blue flare", "fiery dance", "freeze shock", "ice burn", "snarl", "icicle crash", "v_create", "fusion flare", "fusion bolt", "flying press", "mat block", "belch", "rototiller", "sticky web", "fell stinger", "phantom force", "trick_or_treat", "noble roar", "ion deluge", "parabolic charge", "forests curse", "petal blizzard", "freeze_dry", "disarming voice", "parting shot", "topsy_turvy", "draining kiss", "crafty shield", "flower shield", "grassy terrain", "misty terrain", "electrify", "play rough", "fairy wind", "moonblast", "boomburst", "fairy lock", "kings shield", "play nice", "confide", "diamond storm", "steam eruption", "hyperspace hole", "water shuriken", "mystical fire", "spiky shield", "aromatic mist", "eerie impulse", "venom drench", "powder", "geomancy", "magnetic flux", "happy hour", "electric terrain", "dazzling gleam", "celebrate", "hold hands", "baby_doll eyes", "nuzzle", "hold back", "infestation", "power_up punch", "oblivion wing", "thousand arrows", "thousand waves", "lands wrath", "light of ruin", "origin pulse", "precipice blades", "dragon ascent", "hyperspace fury", "ten million volt thunderbolt", "accelerock", "acid downpour", "all_out pummeling", "anchor shot", "aurora veil", "baneful bunker", "beak blast", "black hole eclipse", "bloom doom", "breakneck blitz", "brutal swing", "burn up", "catastropika", "clanging scales", "continental crush", "core enforcer", "corkscrew crash", "darkest lariat", "devastating drake", "dragon hammer", "extreme evoboost", "fire lash", "first impression", "fleur cannon", "floral healing", "gear up", "genesis supernova", "gigavolt havoc", "guardian of alola", "high horsepower", "hydro vortex", "ice hammer", "inferno overdrive", "instruct", "laser focus", "leafage", "liquidation", "lunge", "malicious moonsault", "moongeist beam", "multi_attack", "natures madness", "never_ending nightmare", "oceanic operetta", "pollen puff", "power trip", "prismatic laser", "psychic fangs", "psychic terrain", "pulverizing pancake", "purify", "revelation dance", "savage spin_out", "shadow bone", "shattered psyche", "shell trap", "shore up", "sinister arrow raid", "smart strike", "solar blade", "soul_stealing 7_star strike", "sparkling aria", "spectral thief", "speed swap", "spirit shackle", "spotlight", "stoked sparksurfer", "stomping tantrum", "strength sap", "subzero slammer", "sunsteel strike", "supersonic skystrike", "tearful look", "tectonic rage", "throat chop", "toxic thread", "trop kick", "twinkle tackle", "zing zap"];
var items = ["ability capsule", "ability urge", "abomasite", "absolite", "absorb bulb", "adamant orb", "adventure rules", "aerodactylite", "aggronite", "aguav berry", "air balloon", "alakazite", "altarianite", "ampharosite", "amulet coin", "antidote", "apicot berry", "armor fossil", "aspear berry", "audinite", "awakening", "babiri berry", "balmmushroom", "banettite", "beedrillite", "belue berry", "berry juice", "big mushroom", "big nugget", "big pearl", "big root", "binding band", "black belt", "black flute", "black sludge", "blackglasses", "blastoisinite", "blazikenite", "blk apricorn", "blu apricorn", "blue flute", "blue scarf", "blue shard", "bluk berry", "brightpowder", "bug gem", "burn drive", "burn heal", "calcium", "cameruptite", "carbos", "casteliacone", "cell battery", "charcoal", "charizardite x", "charizardite y", "charti berry", "cheri berry", "cherish ball", "chesto berry", "chilan berry", "chill drive", "choice band", "choice scarf", "choice specs", "chople berry", "claw fossil", "cleanse tag", "clever wing", "coba berry", "colbur berry", "colress machine", "comet shard", "cornn berry", "cover fossil", "custap berry", "damp mulch", "damp rock", "dark gem", "dawn stone", "deepseascale", "deepseatooth", "destiny knot", "diancite", "dire hit", "dire hit 2", "dire hit 3", "dive ball", "dna splicers", "dome fossil", "douse drive", "draco plate", "dragon fang", "dragon gem", "dragon scale", "dread plate", "dream ball", "dropped item", "dubious disc", "durin berry", "dusk ball", "dusk stone", "earth plate", "eject button", "electirizer", "electric gem", "elevator key", "elixir", "energy root", "energypowder", "enigma berry", "escape rope", "ether", "everstone", "eviolite", "exp share", "expert belt", "fairy gem", "fast ball", "fighting gem", "figy berry", "fire gem", "fire stone", "fist plate", "flame orb", "flame plate", "float stone", "fluffy tail", "flying gem", "focus band", "focus sash", "fresh water", "friend ball", "full heal", "full incense", "full restore", "galladite", "ganlon berry", "garchompite", "gardevoirite", "gengarite", "genius wing", "ghost gem", "glalitite", "gooey mulch", "grass gem", "great ball", "green scarf", "green shard", "grepa berry", "grip claw", "griseous orb", "grn apricorn", "ground gem", "growth mulch", "grubby hanky", "guard spec", "gyaradosite", "haban berry", "hard stone", "heal ball", "heal powder", "health wing", "heart scale", "heat rock", "heavy ball", "helix fossil", "heracronite", "hm01", "hm02", "hm03", "hm04", "hm05", "hm06", "hm07", "hm08", "holo caster", "hondew berry", "honey", "honor of kalos", "houndoominite", "hp up", "hyper potion", "iapapa berry", "ice gem", "ice heal", "icicle plate", "icy rock", "insect plate", "intriguing stone", "iron", "iron ball", "iron plate", "item drop", "item urge", "jaboca berry", "kangaskhanite", "kasib berry", "kebia berry", "kelpsy berry", "kings rock", "lagging tail", "lansat berry", "latiasite", "latiosite", "lava cookie", "lax incense", "leaf stone", "leftovers", "lemonade", "lens case", "leppa berry", "level ball", "liechi berry", "life orb", "light ball", "light clay", "looker ticket", "lopunnite", "love ball", "lucarionite", "luck incense", "lucky egg", "lucky punch", "lum berry", "lure ball", "lustrous orb", "luxury ball", "macho brace", "magmarizer", "magnet", "mago berry", "magost berry", "manectite", "master ball", "mawilite", "max elixir", "max ether", "max potion", "max repel", "max revive", "meadow plate", "medal box", "medichamite", "mental herb", "metagrossite", "metal coat", "metal powder", "metronome", "mewtwonite x", "mewtwonite y", "micle berry", "mind plate", "miracle seed", "moomoo milk", "moon ball", "moon stone", "muscle band", "muscle wing", "mystic water", "nanab berry", "nest ball", "net ball", "nevermeltice", "nomel berry", "normal gem", "nugget", "occa berry", "odd incense", "odd keystone", "old amber", "old gateau", "oran berry", "oval charm", "oval stone", "pamtre berry", "park ball", "parlyz heal", "pass orb", "passho berry", "payapa berry", "pearl", "pearl string", "pecha berry", "permit", "persim berry", "petaya berry", "pidgeotite", "pinap berry", "pink scarf", "pinsirite", "pixie plate", "plasma card", "plume fossil", "pnk apricorn", "poison barb", "poison gem", "poké ball", "poké doll", "poké toy", "pomeg berry", "potion", "power anklet", "power band", "power belt", "power bracer", "power herb", "power lens", "power plant pass", "power weight", "pp max", "pp up", "premier ball", "pretty wing", "prism scale", "profs letter", "protector", "protein", "psychic gem", "pure incense", "qualot berry", "quick ball", "quick claw", "quick powder", "rabuta berry", "rare bone", "rare candy", "rawst berry", "razor claw", "razor fang", "razz berry", "reaper cloth", "red apricorn", "red card", "red flute", "red scarf", "red shard", "relic band", "relic copper", "relic crown", "relic gold", "relic silver", "relic statue", "relic vase", "repeat ball", "repel", "reset urge", "resist wing", "reveal glass", "revival herb", "revive", "rindo berry", "ring target", "rock gem", "rock incense", "rocky helmet", "roller skates", "root fossil", "rose incense", "rowap berry", "sablenite", "sacred ash", "safari ball", "salac berry", "salamencite", "sceptilite", "scizorite", "scope lens", "sea incense", "sharp beak", "sharpedonite", "shed shell", "shell bell", "shiny charm", "shiny stone", "shoal salt", "shoal shell", "shock drive", "shuca berry", "silk scarf", "silverpowder", "sitrus berry", "skull fossil", "sky plate", "slowbronite", "smoke ball", "smooth rock", "soda pop", "soft sand", "soothe bell", "soul dew", "spell tag", "spelon berry", "splash plate", "spooky plate", "sport ball", "sprinklotad", "stable mulch", "star piece", "stardust", "starf berry", "steel gem", "steelixite", "stick", "sticky barb", "stone plate", "sun stone", "super potion", "super repel", "swampertite", "sweet heart", "swift wing", "tamato berry", "tanga berry", "thick club", "thunderstone", "timer ball", "tinymushroom", "tm01", "tm02", "tm03", "tm04", "tm05", "tm06", "tm07", "tm08", "tm09", "tm10", "tm100", "tm11", "tm12", "tm13", "tm14", "tm15", "tm16", "tm17", "tm18", "tm19", "tm20", "tm21", "tm22", "tm23", "tm24", "tm25", "tm26", "tm27", "tm28", "tm29", "tm30", "tm31", "tm32", "tm33", "tm34", "tm35", "tm36", "tm37", "tm38", "tm39", "tm40", "tm41", "tm42", "tm43", "tm44", "tm45", "tm46", "tm47", "tm48", "tm49", "tm50", "tm51", "tm52", "tm53", "tm54", "tm55", "tm56", "tm57", "tm58", "tm59", "tm60", "tm61", "tm62", "tm63", "tm64", "tm65", "tm66", "tm67", "tm68", "tm69", "tm70", "tm71", "tm72", "tm73", "tm74", "tm75", "tm76", "tm77", "tm78", "tm79", "tm80", "tm81", "tm82", "tm83", "tm84", "tm85", "tm86", "tm87", "tm88", "tm89", "tm90", "tm91", "tm92", "tm93", "tm94", "tm95", "tm96", "tm97", "tm98", "tm99", "tmv pass", "toxic orb", "toxic plate", "twistedspoon", "tyranitarite", "ultra ball", "up_grade", "venusaurite", "wacan berry", "water gem", "water stone", "watmel berry", "wave incense", "wepear berry", "white flute", "white herb", "wht apricorn", "wide lens", "wiki berry", "wise glasses", "x accuracy", "x accuracy 2", "x accuracy 3", "x accuracy 6", "x attack", "x attack 2", "x attack 3", "x attack 6", "x defend", "x defend 2", "x defend 3", "x defend 6", "x sp def", "x sp def 2", "x sp def 3", "x sp def 6", "x special", "x special 2", "x special 3", "x special 6", "x speed", "x speed 2", "x speed 3", "x speed 6", "yache berry", "yellow flute", "yellow scarf", "yellow shard", "ylw apricorn", "zap plate", "zinc", "zoom lens", "normalium z", "firium z", "waterium z", "electrium z", "grassium z", "icium z", "fightinium z", "poisonium z", "groundium z", "flyinium z", "psychium z", "buginium z", "rockium z", "ghostium z", "dragonium z", "darkinium z", "steelium z", "fairium z", "pikanium z", "bottle cap", "gold bottle cap", "z_ring", "decidium z", "incinium z", "primarium z", "tapunium z", "marshadium z", "aloraichium z", "snorlium z", "eevium z", "mewnium z", "normalium z", "firium z", "waterium z", "electrium z", "grassium z", "icium z", "fightinium z", "poisonium z", "groundium z", "flyinium z", "psychium z", "buginium z", "rockium z", "ghostium z", "dragonium z", "darkinium z", "steelium z", "fairium z", "pikanium z", "decidium z", "incinium z", "primarium z", "tapunium z", "marshadium z", "aloraichium z", "snorlium z", "eevium z", "mewnium z", "pikashunium z", "forage bag", "fishing rod", "professors mask", "festival ticket", "sparkling stone", "adrenaline orb", "zygarde cube", "ice stone", "ride pager", "beast ball", "big malasada", "red nectar", "yellow nectar", "pink nectar", "purple nectar", "sun flute", "moon flute", "enigmatic card", "terrain extender", "protective pads", "electric seed", "psychic seed", "misty seed", "grassy seed", "fighting memory", "flying memory", "poison memory", "ground memory", "rock memory", "bug memory", "ghost memory", "steel memory", "fire memory", "water memory", "grass memory", "electric memory", "psychic memory", "ice memory", "dragon memory", "dark memory", "fairy memory"];
var abilities = ["adaptability", "aerilate", "aftermath", "air lock", "analytic", "anger point", "anticipation", "arena trap", "aroma veil", "aura break", "bad dreams", "battery", "battle armor", "battle bond", "berserk", "big pecks", "blaze", "bulletproof", "cacophony", "cheek pouch", "chlorophyll", "clear body", "cloud nine", "color change", "comatose", "competitive", "compound eyes", "contrary", "corrosion", "cursed body", "cute charm", "damp", "dancer", "dark aura", "dazzling", "defeatist", "defiant", "delta stream", "desolate land", "disguise", "download", "drizzle", "drought", "dry skin", "early bird", "effect spore", "electric surge", "fairy aura", "filter", "flame body", "flare boost", "flash fire", "flower gift", "flower veil", "fluffy", "forecast", "forewarn", "friend guard", "frisk", "full metal body", "fur coat", "gale wings", "gluttony", "gooey", "grass pelt", "guts", "harvest", "healer", "heatproof", "heavy metal", "honey gather", "huge power", "hustle", "hydration", "hyper cutter", "ice body", "illuminate", "illusion", "immunity", "imposter", "innards out", "infiltrator", "inner focus", "insomnia", "intimidate", "iron barbs", "iron fist", "justified", "keen eye", "klutz", "leaf guard", "levitate", "light metal", "lightning rod", "limber", "liquid ooze", "magic bounce", "magic guard", "magician", "magma armor", "magnet pull", "marvel scale", "mega launcher", "minus", "mold breaker", "moody", "motor drive", "moxie", "multiscale", "multitype", "mummy", "natural cure", "no guard", "normalize", "oblivious", "overcoat", "overgrow", "own tempo", "parental bond", "pickpocket", "pickup", "pixilate", "plus", "poison heal", "poison point", "poison touch", "power construct", "prankster", "pressure", "primordial sea", "protean", "pure power", "queenly majesty", "quick feet", "rain dish", "rattled", "receiver", "reckless", "refrigerate", "regenerator", "rivalry", "rks system", "rock head", "rough skin", "run away", "sand force", "sand rush", "sand stream", "sand veil", "sap sipper", "schooling", "scrappy", "serene grace", "shadow shield", "shadow tag", "shed skin", "sheer force", "shell armor", "shield dust", "shields down", "simple", "skill link", "slow start", "sniper", "snow cloak", "snow warning", "solar power", "solid rock", "soul_heart", "soundproof", "speed boost", "stakeout", "stall", "stamina", "stance change", "static", "steadfast", "stench", "sticky hold", "storm drain", "strong jaw", "sturdy", "suction cups", "super luck", "surge surfer", "swarm", "sweet veil", "swift swim", "symbiosis", "synchronize", "tangled feet", "technician", "telepathy", "teravolt", "thick fat", "tinted lens", "torrent", "tough claws", "toxic boost", "trace", "triage", "truant", "turboblaze", "unaware", "unburden", "unnerve", "victory star", "vital spirit", "volt absorb", "water absorb", "water compaction", "water veil", "weak armor", "white smoke", "wimp out", "wonder guard", "wonder skin", "zen mode", "emergency exit", "merciless", "water bubble", "steelworker", "slush rush", "long reach", "liquid voice", "galvanize", "tangling hair", "power of alchemy", "beast boost", "psychic surge", "misty surge", "grassy surge", "full metal body", "prism armor"];

console.log("fuck");

function clicked(){
	var out = "var mons = [";
	for (var mon of mons){
		out += "{id: \"" + mon + "\", name: \"" + eval(mon).name + "\", dex: " + eval(mon).dex + ", alola: " + eval(mon).alola + ", type: \"" + eval(mon).type + "\", ability: \"" + eval(mon).ability + "\", wiki: \"" + eval(mon).wiki + "\", image: \"" + eval(mon).image + "\"}, ";
		console.log(mon);
	}
	var len = out.length - 2;
	out = out.slice(0, len) + "];";
	document.getElementById("myDiv").innerHTML = out;
}

var bulbasaur = {
    name: "Bulbasaur",
    dex: 1,
    alola: -1,
    type: "Grass/Poison",
    ability: "Overgrow/None/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-sm/001.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/001.png"
};

var ivysaur = {
    name: "Ivysaur",
    dex: 2,
    alola: -1,
    type: "Grass/Poison",
    ability: "Overgrow/None/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-sm/002.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/002.png"
};

var venusaur = {
    name: "Venusaur",
    dex: 3,
    alola: -1,
    type: "Grass/Poison",
    ability: "Overgrow/None/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-sm/003.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/003.png"
};

var charmander = {
    name: "Charmander",
    dex: 4,
    alola: -1,
    type: "Fire",
    ability: "Blaze/None/Solar Power",
    wiki: "http://www.serebii.net/pokedex-sm/004.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/004.png"
};

var charmeleon = {
    name: "Charmeleon",
    dex: 5,
    alola: -1,
    type: "Fire",
    ability: "Blaze/None/Solar Power",
    wiki: "http://www.serebii.net/pokedex-sm/005.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/005.png"
};

var charizard = {
    name: "Charizard",
    dex: 6,
    alola: -1,
    type: "Fire/Flying",
    ability: "Blaze/None/Solar Power",
    wiki: "http://www.serebii.net/pokedex-sm/006.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/006.png"
};

var squirtle = {
    name: "Squirtle",
    dex: 7,
    alola: -1,
    type: "Water",
    ability: "Torrent/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/007.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/007.png"
};

var wartortle = {
    name: "Wartortle",
    dex: 8,
    alola: -1,
    type: "Water",
    ability: "Torrent/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/008.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/008.png"
};

var blastoise = {
    name: "Blastoise",
    dex: 9,
    alola: -1,
    type: "Water",
    ability: "Torrent/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/009.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/009.png"
};

var caterpie = {
    name: "Caterpie",
    dex: 10,
    alola: 017,
    type: "Bug",
    ability: "Shield Dust/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-sm/010.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/010.png"
};

var metapod = {
    name: "Metapod",
    dex: 11,
    alola: 018,
    type: "Bug",
    ability: "Shed Skin",
    wiki: "http://www.serebii.net/pokedex-sm/011.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/011.png"
};

var butterfree = {
    name: "Butterfree",
    dex: 12,
    alola: 019,
    type: "Bug/Flying",
    ability: "Compound Eyes/None/Tinted Lens",
    wiki: "http://www.serebii.net/pokedex-sm/012.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/012.png"
};

var weedle = {
    name: "Weedle",
    dex: 13,
    alola: -1,
    type: "Bug/Poison",
    ability: "Shield Dust/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-sm/013.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/013.png"
};

var kakuna = {
    name: "Kakuna",
    dex: 14,
    alola: -1,
    type: "Bug/Poison",
    ability: "Shed Skin",
    wiki: "http://www.serebii.net/pokedex-sm/014.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/014.png"
};

var beedrill = {
    name: "Beedrill",
    dex: 15,
    alola: -1,
    type: "Bug/Poison",
    ability: "Swarm/None/Sniper",
    wiki: "http://www.serebii.net/pokedex-sm/015.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/015.png"
};

var pidgey = {
    name: "Pidgey",
    dex: 16,
    alola: -1,
    type: "Normal/Flying",
    ability: "Keen Eye/Tangled Feet/Big Pecks",
    wiki: "http://www.serebii.net/pokedex-sm/016.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/016.png"
};

var pidgeotto = {
    name: "Pidgeotto",
    dex: 17,
    alola: -1,
    type: "Normal/Flying",
    ability: "Keen Eye/Tangled Feet/Big Pecks",
    wiki: "http://www.serebii.net/pokedex-sm/017.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/017.png"
};

var pidgeot = {
    name: "Pidgeot",
    dex: 18,
    alola: -1,
    type: "Normal/Flying",
    ability: "Keen Eye/Tangled Feet/Big Pecks",
    wiki: "http://www.serebii.net/pokedex-sm/018.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/018.png"
};

var rattata = {
    name: "Rattata",
    dex: 19,
    alola: 015,
    type: "Normal",
    ability: "Run Away/Guts/Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/019.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/019.png"
};

var raticate = {
    name: "Raticate",
    dex: 20,
    alola: 016,
    type: "Normal",
    ability: "Run Away/Guts/Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/020.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/020.png"
};

var alolan_rattata = {
    name: "Rattata",
    dex: 19,
    alola: 015,
    type: "Dark/Normal",
    ability: "Gluttony/Hustle/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-sm/019.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/019-a.png"
};

var alolan_raticate = {
    name: "Alolan Raticate",
    dex: 20,
    alola: 016,
    type: "Dark Normal",
    ability: "Gluttony/Hustle/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-sm/020.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/020-a.png"
};

var spearow = {
    name: "Spearow",
    dex: 21,
    alola: 073,
    type: "Normal/Flying",
    ability: "Keen Eye/None/Sniper",
    wiki: "http://www.serebii.net/pokedex-sm/021.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/021.png"
};

var fearow = {
    name: "Fearow",
    dex: 22,
    alola: 074,
    type: "Normal/Flying",
    ability: "Keen Eye/None/Sniper",
    wiki: "http://www.serebii.net/pokedex-sm/022.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/022.png"
};

var ekans = {
    name: "Ekans",
    dex: 23,
    alola: -1,
    type: "Poison",
    ability: "Intimidate/Shed Skin/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/023.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/023.png"
};

var arbok = {
    name: "Arbok",
    dex: 24,
    alola: -1,
    type: "Poison",
    ability: "Intimidate/Shed Skin/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/024.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/024.png"
};

var pikachu = {
    name: "Pikachu",
    dex: 25,
    alola: 025,
    type: "Electric",
    ability: "Static/None/Lightning Rod",
    wiki: "http://www.serebii.net/pokedex-sm/025.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/025.png"
};

var raichu = {
    name: "Raichu",
    dex: 26,
    alola: 026,
    type: "Electric",
    ability: "Static/None/Lightning Rod",
    wiki: "http://www.serebii.net/pokedex-sm/026.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/026.png"
};

var alolan_raichu = {
    name: "Alolan Raichu",
    dex: 26,
    alola: 026,
    type: "Electric/Psychic",
    ability: "Surge Surfer",
    wiki: "http://www.serebii.net/pokedex-sm/026.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/026-a.png"
};

var sandshrew = {
    name: "Sandshrew",
    dex: 27,
    alola: 251,
    type: "Ground",
    ability: "Sand Veil/None/Sand Rush",
    wiki: "http://www.serebii.net/pokedex-sm/027.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/027.png"
};

var sandslash = {
    name: "Sandslash",
    dex: 28,
    alola: 252,
    type: "Ground",
    ability: "Sand Veil/None/Sand Rush",
    wiki: "http://www.serebii.net/pokedex-sm/028.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/028.png"
};

var alolan_sandshrew = {
    name: "Alolan Sandshrew",
    dex: 27,
    alola: 251,
    type: "Ice/Steel",
    ability: "Snow Cloak/None/Slush Rush",
    wiki: "http://www.serebii.net/pokedex-sm/027.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/027-a.png"
};

var alolan_sandslash = {
    name: "Alolan Sandslash",
    dex: 28,
    alola: 252,
    type: "Ice/Steel",
    ability: "Snow Cloak/None/Slush Rush",
    wiki: "http://www.serebii.net/pokedex-sm/028.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/028-a.png"
};

var nidoranf = {
    name: "Nidoran♀",
    dex: 29,
    alola: -1,
    type: "Poison",
    ability: "Poison Point/Rivalry/Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/029.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/029.png"
};

var nidorina = {
    name: "Nidorina",
    dex: 30,
    alola: -1,
    type: "Poison",
    ability: "Poison Point/Rivalry/Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/030.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/030.png"
};

var nidoqueen = {
    name: "Nidoqueen",
    dex: 31,
    alola: -1,
    type: "Poison/Ground",
    ability: "Poison Point/Rivalry/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/031.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/031.png"
};

var nidoranm = {
    name: "Nidoran♂",
    dex: 32,
    alola: -1,
    type: "Poison",
    ability: "Poison Point/Rivalry/Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/032.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/032.png"
};

var nidorino = {
    name: "Nidorino",
    dex: 33,
    alola: -1,
    type: "Poison",
    ability: "Poison Point/Rivalry/Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/033.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/033.png"
};

var nidoking = {
    name: "Nidoking",
    dex: 34,
    alola: -1,
    type: "Poison/Ground",
    ability: "Poison Point/Rivalry/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/034.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/034.png"
};

var clefairy = {
    name: "Clefairy",
    dex: 35,
    alola: 211,
    type: "Fairy",
    ability: "Cute Charm/Magic Guard/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-sm/035.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/035.png"
};

var clefable = {
    name: "Clefable",
    dex: 36,
    alola: 212,
    type: "Fairy",
    ability: "Cute Charm/Magic Guard/Unaware",
    wiki: "http://www.serebii.net/pokedex-sm/036.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/036.png"
};

var vulpix = {
    name: "Vulpix",
    dex: 37,
    alola: 253,
    type: "Fire",
    ability: "Flash Fire/None/Drought",
    wiki: "http://www.serebii.net/pokedex-sm/037.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/037.png"
};

var ninetales = {
    name: "Ninetales",
    dex: 38,
    alola: 254,
    type: "Fire",
    ability: "Flash Fire/None/Drought",
    wiki: "http://www.serebii.net/pokedex-sm/038.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/038.png"
};

var alolan_vulpix = {
    name: "Alolan Vulpix",
    dex: 37,
    alola: 253,
    type: "Ice",
    ability: "Snow Cloak/None/Snow Warning",
    wiki: "http://www.serebii.net/pokedex-sm/037.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/037-a.png"
};

var alolan_ninetales = {
    name: "Alolan Ninetales",
    dex: 38,
    alola: 254,
    type: "Ice/Fairy",
    ability: "Snow Cloak/None/Snow Warning",
    wiki: "http://www.serebii.net/pokedex-sm/038.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/038-a.png"
};

var jigglypuff = {
    name: "Jigglypuff",
    dex: 39,
    alola: 135,
    type: "Normal/Fairy",
    ability: "Cute Charm/Competitive/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-sm/039.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/039.png"
};

var wigglytuff = {
    name: "Wigglytuff",
    dex: 40,
    alola: 136,
    type: "Normal/Fairy",
    ability: "Cute Charm/Competitive/Frisk",
    wiki: "http://www.serebii.net/pokedex-sm/040.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/040.png"
};

var zubat = {
    name: "Zubat",
    dex: 41,
    alola: 068,
    type: "Poison/Flying",
    ability: "Inner Focus/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/041.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/041.png"
};

var golbat = {
    name: "Golbat",
    dex: 42,
    alola: 069,
    type: "Poison/Flying",
    ability: "Inner Focus/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/042.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/042.png"
};

var oddish = {
    name: "Oddish",
    dex: 43,
    alola: -1,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-sm/043.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/043.png"
};

var gloom = {
    name: "Gloom",
    dex: 44,
    alola: -1,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Stench",
    wiki: "http://www.serebii.net/pokedex-sm/044.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/044.png"
};

var vileplume = {
    name: "Vileplume",
    dex: 45,
    alola: -1,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Effect Spore",
    wiki: "http://www.serebii.net/pokedex-sm/045.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/045.png"
};

var paras = {
    name: "Paras",
    dex: 46,
    alola: 148,
    type: "Bug/Grass",
    ability: "Effect Spore/Dry Skin/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/046.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/046.png"
};

var parasect = {
    name: "Parasect",
    dex: 47,
    alola: 148,
    type: "Bug/Grass",
    ability: "Effect Spore/Dry Skin/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/047.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/047.png"
};

var venonat = {
    name: "Venonat",
    dex: 48,
    alola: -1,
    type: "Bug/Poison",
    ability: "Compound Eyes/Tinted Lens/Run Away",
    wiki: "http://www.serebii.net/pokedex-sm/048.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/048.png"
};

var venomoth = {
    name: "Venomoth",
    dex: 49,
    alola: -1,
    type: "Bug/Poison",
    ability: "Shield Dust/Tinted Lens/Wonder Skin",
    wiki: "http://www.serebii.net/pokedex-sm/049.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/049.png"
};

var diglett = {
    name: "Diglett",
    dex: 50,
    alola: 071,
    type: "Ground",
    ability: "Sand Veil/Arena Trap/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/050.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/050.png"
};

var dugtrio = {
    name: "Dugtrio",
    dex: 51,
    alola: 072,
    type: "Ground",
    ability: "Sand Veil/Arena Trap/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/051.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/051.png"
};

var alolan_diglett = {
    name: "Alolan Diglett",
    dex: 50,
    alola: 071,
    type: "Ground/Steel",
    ability: "Sand Veil/Tangling Hair/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/050.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/050-a.png"
};

var alolan_dugtrio = {
    name: "Alolan Dugtrio",
    dex: 51,
    alola: 072,
    type: "Ground/Steel",
    ability: "Sand Veil/Tangling Hair/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/051.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/051-a.png"
};

var meowth = {
    name: "Meowth",
    dex: 52,
    alola: 045,
    type: "Normal",
    ability: "Pickup/Technician/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/052.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/052.png"
};

var persian = {
    name: "Persian",
    dex: 53,
    alola: 046,
    type: "Normal",
    ability: "Limber/Technician/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/053.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/053.png"
};

var alolan_meowth = {
    name: "Alolan Meowth",
    dex: 52,
    alola: 045,
    type: "Dark",
    ability: "Pickup/Technician/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/052.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/052-a.png"
};

var alolan_persian = {
    name: "Alolan Persian",
    dex: 53,
    alola: 046,
    type: "Dark",
    ability: "Limber/Technician/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/053.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/053-a.png"
};

var psyduck = {
    name: "Psyduck",
    dex: 54,
    alola: 089,
    type: "Water",
    ability: "Damp/Cloud Nine/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/054.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/054.png"
};

var golduck = {
    name: "Golduck",
    dex: 55,
    alola: 090,
    type: "Water",
    ability: "Damp/Cloud Nine/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/055.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/055.png"
};

var mankey = {
    name: "Mankey",
    dex: 56,
    alola: 079,
    type: "Fighting",
    ability: "Vital Spirit/Anger Point/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/056.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/056.png"
};

var primeape = {
    name: "Primeape",
    dex: 57,
    alola: 080,
    type: "Fighting",
    ability: "Vital Spirit/Anger Point/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/057.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/057.png"
};

var growlithe = {
    name: "Growlithe",
    dex: 58,
    alola: 052,
    type: "Fire",
    ability: "Intimidate/Flash Fire/Justified",
    wiki: "http://www.serebii.net/pokedex-sm/058.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/058.png"
};

var arcanine = {
    name: "Arcanine",
    dex: 59,
    alola: 053,
    type: "Fire",
    ability: "Intimidate/Flash Fire/Justified",
    wiki: "http://www.serebii.net/pokedex-sm/059.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/059.png"
};

var poliwag = {
    name: "Poliwag",
    dex: 60,
    alola: 149,
    type: "Water",
    ability: "Water Absorb/Damp/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/060.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/060.png"
};

var poliwhirl = {
    name: "Poliwhirl",
    dex: 61,
    alola: 150,
    type: "Water",
    ability: "Water Absorb/Damp/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/061.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/061.png"
};

var poliwrath = {
    name: "Poliwrath",
    dex: 62,
    alola: 151,
    type: "Water/Fighting",
    ability: "Water Absorb/Damp/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/062.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/062.png"
};

var abra = {
    name: "Abra",
    dex: 63,
    alola: 059,
    type: "Psychic",
    ability: "Synchronize/Inner Focus/Magic Guard",
    wiki: "http://www.serebii.net/pokedex-sm/063.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/063.png"
};

var kadabra = {
    name: "Kadabra",
    dex: 64,
    alola: 043,
    type: "Psychic",
    ability: "Synchronize/Inner Focus/Magic Guard",
    wiki: "http://www.serebii.net/pokedex-sm/064.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/064.png"
};

var alakazam = {
    name: "Alakazam",
    dex: 65,
    alola: 044,
    type: "Psychic",
    ability: "Synchronize/Inner Focus/Magic Guard",
    wiki: "http://www.serebii.net/pokedex-sm/065.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/065.png"
};

var machop = {
    name: "Machop",
    dex: 66,
    alola: 095,
    type: "Fighting",
    ability: "Guts/No Guard/Steadfast",
    wiki: "http://www.serebii.net/pokedex-sm/066.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/066.png"
};

var machoke = {
    name: "Machoke",
    dex: 67,
    alola: 096,
    type: "Fighting",
    ability: "Guts/No Guard/Steadfast",
    wiki: "http://www.serebii.net/pokedex-sm/067.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/067.png"
};

var machamp = {
    name: "Machamp",
    dex: 68,
    alola: 097,
    type: "Fighting",
    ability: "Guts/No Guard/Steadfast",
    wiki: "http://www.serebii.net/pokedex-sm/068.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/068.png"
};

var bellsprout = {
    name: "Bellsprout",
    dex: 69,
    alola: -1,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/069.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/069.png"
};

var weepinbell = {
    name: "Weepinbell",
    dex: 70,
    alola: -1,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/070.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/070.png"
};

var victreebel = {
    name: "Victreebel",
    dex: 71,
    alola: -1,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/071.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/071.png"
};

var tentacool = {
    name: "Tentacool",
    dex: 72,
    alola: 106,
    type: "Water/Poison",
    ability: "Clear Body/Liquid Ooze/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/072.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/072.png"
};

var tentacruel = {
    name: "Tentacruel",
    dex: 73,
    alola: 107,
    type: "Water/Poison",
    ability: "Clear Body/Liquid Ooze/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/073.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/073.png"
};

var geodude = {
    name: "Geodude",
    dex: 74,
    alola: 229,
    type: "Rock/Ground",
    ability: "Rock Head/Sturdy/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/074.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/074.png"
};

var graveler = {
    name: "Graveler",
    dex: 75,
    alola: 230,
    type: "Rock/Ground",
    ability: "Rock Head/Sturdy/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/075.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/075.png"
};

var golem = {
    name: "Golem",
    dex: 76,
    alola: 231,
    type: "Rock/Ground",
    ability: "Rock Head/Sturdy/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/076.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/076.png"
};

var alolan_geodude = {
    name: "Alolan Geodude",
    dex: 74,
    alola: 229,
    type: "Rock/Electric",
    ability: "Magnet Pull/Sturdy/Galvanise",
    wiki: "http://www.serebii.net/pokedex-sm/074.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/074.png-a"
};

var alolan_graveler = {
    name: "Alolan Graveler",
    dex: 75,
    alola: 230,
    type: "Rock/Electric",
    ability: "Magnet Pull/Sturdy/Galvanise",
    wiki: "http://www.serebii.net/pokedex-sm/075.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/075-a.png"
};

var alolan_golem = {
    name: "Alolan Golem",
    dex: 76,
    alola: 231,
    type: "Rock/Electric",
    ability: "Magnet Pull/Sturdy/Galvanise",
    wiki: "http://www.serebii.net/pokedex-sm/076.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/076-a.png"
};

var ponyta = {
    name: "Ponyta",
    dex: 77,
    alola: -1,
    type: "Fire",
    ability: "Run Away/Flash Fire/Flame Body",
    wiki: "http://www.serebii.net/pokedex-sm/077.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/077.png"
};

var rapidash = {
    name: "Rapidash",
    dex: 78,
    alola: -1,
    type: "Fire",
    ability: "Run Away/Flash Fire/Flame Body",
    wiki: "http://www.serebii.net/pokedex-sm/078.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/078.png"
};

var slowpoke = {
    name: "Slowpoke",
    dex: 79,
    alola: 037,
    type: "Water/Psychic",
    ability: "Oblivious/Own Tempo/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/079.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/079.png"
};

var slowbro = {
    name: "Slowbro",
    dex: 80,
    alola: 038,
    type: "Water/Psychic",
    ability: "Oblivious/Own Tempo/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/080.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/080.png"
};

var magnemite = {
    name: "Magnemite",
    dex: 81,
    alola: 047,
    type: "Electric/Steel",
    ability: "Magnet Pull/Sturdy/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/081.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/081.png"
};

var magneton = {
    name: "Magneton",
    dex: 82,
    alola: 048,
    type: "Electric/Steel",
    ability: "Magnet Pull/Sturdy/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/082.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/082.png"
};

var farfetchd = {
    name: "Farfetch'd",
    dex: 83,
    alola: -1,
    type: "Normal/Flying",
    ability: "Keen Eye/Inner Focus/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/083.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/083.png"
};

var doduo = {
    name: "Doduo",
    dex: 84,
    alola: -1,
    type: "Normal/Flying",
    ability: "Run Away/Early Bird/Tangled Feet",
    wiki: "http://www.serebii.net/pokedex-sm/084.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/084.png"
};

var dodrio = {
    name: "Dodrio",
    dex: 85,
    alola: -1,
    type: "Normal/Flying",
    ability: "Run Away/Early Bird/Tangled Feet",
    wiki: "http://www.serebii.net/pokedex-sm/085.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/085.png"
};

var seel = {
    name: "Seel",
    dex: 86,
    alola: -1,
    type: "Water",
    ability: "Thick Fat/Hydration/Ice Body",
    wiki: "http://www.serebii.net/pokedex-sm/086.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/086.png"
};

var dewgong = {
    name: "Dewgong",
    dex: 87,
    alola: -1,
    type: "Water/Ice",
    ability: "Thick Fat/Hydration/Ice Body",
    wiki: "http://www.serebii.net/pokedex-sm/087.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/087.png"
};

var grimer = {
    name: "Grimer",
    dex: 88,
    alola: 050,
    type: "Poison",
    ability: "Stench/Sticky Hold/Poison Touch",
    wiki: "http://www.serebii.net/pokedex-sm/088.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/088.png"
};

var muk = {
    name: "Muk",
    dex: 89,
    alola: 051,
    type: "Poison",
    ability: "Stench/Sticky Hold/Poison Touch",
    wiki: "http://www.serebii.net/pokedex-sm/089.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/089.png"
};

var alolan_grimer = {
    name: "Alolan Grimer",
    dex: 88,
    alola: 050,
    type: "Poison/Dark",
    ability: "Poison Touch/Gluttony/Power of Alchemy",
    wiki: "http://www.serebii.net/pokedex-sm/088.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/088-a.png"
};

var alolan_muk = {
    name: "Alolan Muk",
    dex: 89,
    alola: 051,
    type: "Poison/Dark",
    ability: "Poison Touch/Gluttony/Power of Alchemy",
    wiki: "http://www.serebii.net/pokedex-sm/089.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/089-a.png"
};

var shellder = {
    name: "Shellder",
    dex: 90,
    alola: 115,
    type: "Water",
    ability: "Shell Armor/Skill Link/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/090.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/090.png"
};

var cloyster = {
    name: "Cloyster",
    dex: 91,
    alola: 116,
    type: "Water/Ice",
    ability: "Shell Armor/Skill Link/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/091.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/091.png"
};

var gastly = {
    name: "Gastly",
    dex: 92,
    alola: 061,
    type: "Ghost/Poison",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/092.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/092.png"
};

var haunter = {
    name: "Haunter",
    dex: 93,
    alola: 062,
    type: "Ghost/Poison",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/093.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/093.png"
};

var gengar = {
    name: "Gengar",
    dex: 94,
    alola: 063,
    type: "Ghost/Poison",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/094.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/094.png"
};

var onix = {
    name: "Onix",
    dex: 95,
    alola: -1,
    type: "Rock/Ground",
    ability: "Rock Head/Sturdy/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/095.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/095.png"
};

var drowzee = {
    name: "Drowzee",
    dex: 96,
    alola: 054,
    type: "Psychic",
    ability: "Insomnia/Forewarn/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/096.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/096.png"
};

var hypno = {
    name: "Hypno",
    dex: 97,
    alola: 055,
    type: "Psychic",
    ability: "Insomnia/Forewarn/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/097.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/097.png"
};

var krabby = {
    name: "Krabby",
    dex: 98,
    alola: -1,
    type: "Water",
    ability: "Hyper Cutter/Shell Armor/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/098.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/098.png"
};

var kingler = {
    name: "Kingler",
    dex: 99,
    alola: -1,
    type: "Water",
    ability: "Hyper Cutter/Shell Armor/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/099.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/099.png"
};

var voltorb = {
    name: "Voltorb",
    dex: 100,
    alola: -1,
    type: "Electric",
    ability: "Soundproof/Static/Aftermath",
    wiki: "http://www.serebii.net/pokedex-sm/100.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/100.png"
};

var electrode = {
    name: "Electrode",
    dex: 101,
    alola: -1,
    type: "Electric",
    ability: "Soundproof/Static/Aftermath",
    wiki: "http://www.serebii.net/pokedex-sm/101.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/101.png"
};

var exeggcute = {
    name: "Exeggcute",
    dex: 102,
    alola: 269,
    type: "Grass/Psychic",
    ability: "Chlorophyll/None/Harvest",
    wiki: "http://www.serebii.net/pokedex-sm/102.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/102.png"
};

var exeggutor = {
    name: "Exeggutor",
    dex: 103,
    alola: 270,
    type: "Grass/Psychic",
    ability: "Chlorophyll/None/Harvest",
    wiki: "http://www.serebii.net/pokedex-sm/103.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/103.png"
};

var alolan_exeggutor = {
    name: "Alolan Exeggutor",
    dex: 103,
    alola: 270,
    type: "Grass/Dragon",
    ability: "Frisk/None/Harvest",
    wiki: "http://www.serebii.net/pokedex-sm/103.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/103-a.png"
};

var cubone = {
    name: "Cubone",
    dex: 104,
    alola: 163,
    type: "Ground",
    ability: "Rock Head/Lightning Rod/Battle Armor",
    wiki: "http://www.serebii.net/pokedex-sm/104.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/104.png"
};

var marowak = {
    name: "Marowak",
    dex: 105,
    alola: 164,
    type: "Ground",
    ability: "Rock Head/Lightning Rod/Battle Armor",
    wiki: "http://www.serebii.net/pokedex-sm/105.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/105.png"
};

var alolan_marowak = {
    name: "Alolan Marowak",
    dex: 105,
    alola: 164,
    type: "Fire/Ghost",
    ability: "Rock Head/Lightning Rod/Battle Armor",
    wiki: "http://www.serebii.net/pokedex-sm/105.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/105-a.png"
};

var hitmonlee = {
    name: "Hitmonlee",
    dex: 106,
    alola: -1,
    type: "Fighting",
    ability: "Limber/Reckless/Unburden",
    wiki: "http://www.serebii.net/pokedex-sm/106.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/106.png"
};

var hitmonchan = {
    name: "Hitmonchan",
    dex: 107,
    alola: -1,
    type: "Fighting",
    ability: "Keen Eye/Iron Fist/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/107.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/107.png"
};

var lickitung = {
    name: "Lickitung",
    dex: 108,
    alola: -1,
    type: "Normal",
    ability: "Own Tempo/Oblivious/Cloud Nine",
    wiki: "http://www.serebii.net/pokedex-sm/108.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/108.png"
};

var koffing = {
    name: "Koffing",
    dex: 109,
    alola: -1,
    type: "Poison",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/109.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/109.png"
};

var weezing = {
    name: "Weezing",
    dex: 110,
    alola: -1,
    type: "Poison",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/110.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/110.png"
};

var rhyhorn = {
    name: "Rhyhorn",
    dex: 111,
    alola: -1,
    type: "Ground/Rock",
    ability: "Lightning Rod/Rock Head/Reckless",
    wiki: "http://www.serebii.net/pokedex-sm/111.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/111.png"
};

var rhydon = {
    name: "Rhydon",
    dex: 112,
    alola: -1,
    type: "Ground/Rock",
    ability: "Lightning Rod/Rock Head/Reckless",
    wiki: "http://www.serebii.net/pokedex-sm/112.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/112.png"
};

var chansey = {
    name: "Chansey",
    dex: 113,
    alola: 033,
    type: "Normal",
    ability: "Natural Cure/Serene Grace/Healer",
    wiki: "http://www.serebii.net/pokedex-sm/113.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/113.png"
};

var tangela = {
    name: "Tangela",
    dex: 114,
    alola: -1,
    type: "Grass",
    ability: "Chlorophyll/Leaf Guard/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/114.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/114.png"
};

var kangaskhan = {
    name: "Kangaskhan",
    dex: 115,
    alola: 165,
    type: "Normal",
    ability: "Early Bird/Scrappy/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/115.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/115.png"
};

var horsea = {
    name: "Horsea",
    dex: 116,
    alola: -1,
    type: "Water",
    ability: "Swift Swim/Sniper/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/116.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/116.png"
};

var seadra = {
    name: "Seadra",
    dex: 117,
    alola: -1,
    type: "Water",
    ability: "Poison Point/Sniper/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/117.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/117.png"
};

var goldeen = {
    name: "Goldeen",
    dex: 118,
    alola: 153,
    type: "Water",
    ability: "Swift Swim/Water Veil/Lightning Rod",
    wiki: "http://www.serebii.net/pokedex-sm/118.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/118.png"
};

var seaking = {
    name: "Seaking",
    dex: 119,
    alola: 154,
    type: "Water",
    ability: "Swift Swim/Water Veil/Lightning Rod",
    wiki: "http://www.serebii.net/pokedex-sm/119.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/119.png"
};

var staryu = {
    name: "Staryu",
    dex: 120,
    alola: 184,
    type: "Water",
    ability: "Illuminate/Natural Cure/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/120.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/120.png"
};

var starmie = {
    name: "Starmie",
    dex: 121,
    alola: 185,
    type: "Water/Psychic",
    ability: "Illuminate/Natural Cure/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/121.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/121.png"
};

var mr_mime = {
    name: "Mr. Mime",
    dex: 122,
    alola: -1,
    type: "Psychic/Fairy",
    ability: "Soundproof/Filter/Technician",
    wiki: "http://www.serebii.net/pokedex-sm/122.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/122.png"
};

var scyther = {
    name: "Scyther",
    dex: 123,
    alola: 275,
    type: "Bug/Flying",
    ability: "Swarm/Technician/Steadfast",
    wiki: "http://www.serebii.net/pokedex-sm/123.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/123.png"
};

var jynx = {
    name: "Jynx",
    dex: 124,
    alola: -1,
    type: "Ice/Psychic",
    ability: "Oblivious/Forewarn/Dry Skin",
    wiki: "http://www.serebii.net/pokedex-sm/124.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/124.png"
};

var electabuzz = {
    name: "Electabuzz",
    dex: 125,
    alola: 227,
    type: "Electric",
    ability: "Static/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-sm/125.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/125.png"
};

var magmar = {
    name: "Magmar",
    dex: 126,
    alola: 167,
    type: "Fire",
    ability: "Flame Body/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-sm/126.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/126.png"
};

var pinsir = {
    name: "Pinsir",
    dex: 127,
    alola: 175,
    type: "Bug",
    ability: "Hyper Cutter/Mold Breaker/Moxie",
    wiki: "http://www.serebii.net/pokedex-sm/127.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/127.png"
};

var tauros = {
    name: "Tauros",
    dex: 128,
    alola: 137,
    type: "Normal",
    ability: "Intimidate/Anger Point/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/128.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/128.png"
};

var magikarp = {
    name: "Magikarp",
    dex: 129,
    alola: 091,
    type: "Water",
    ability: "Swift Swim/None/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/129.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/129.png"
};

var gyarados = {
    name: "Gyarados",
    dex: 130,
    alola: 092,
    type: "Water/Flying",
    ability: "Intimidate/None/Moxie",
    wiki: "http://www.serebii.net/pokedex-sm/130.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/130.png"
};

var lapras = {
    name: "Lapras",
    dex: 131,
    alola: 268,
    type: "Water/Ice",
    ability: "Water Absorb/Shell Armor/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/131.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/131.png"
};

var ditto = {
    name: "Ditto",
    dex: 132,
    alola: 209,
    type: "Normal",
    ability: "Limber/None/Imposter",
    wiki: "http://www.serebii.net/pokedex-sm/132.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/132.png"
};

var eevee = {
    name: "Eevee",
    dex: 133,
    alola: 123,
    type: "Normal",
    ability: "Run Away/Adaptability/Anticipation",
    wiki: "http://www.serebii.net/pokedex-sm/133.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/133.png"
};

var vaporeon = {
    name: "Vaporeon",
    dex: 134,
    alola: 124,
    type: "Water",
    ability: "Water Absorb/None/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/134.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/134.png"
};

var jolteon = {
    name: "Jolteon",
    dex: 135,
    alola: 125,
    type: "Electric",
    ability: "Volt Absorb/None/Quick Feet",
    wiki: "http://www.serebii.net/pokedex-sm/135.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/135.png"
};

var flareon = {
    name: "Flareon",
    dex: 136,
    alola: 126,
    type: "Fire",
    ability: "Flash Fire/None/Guts",
    wiki: "http://www.serebii.net/pokedex-sm/136.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/136.png"
};

var porygon = {
    name: "Porygon",
    dex: 137,
    alola: 219,
    type: "Normal",
    ability: "Trace/Download/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/137.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/137.png"
};

var omanyte = {
    name: "Omanyte",
    dex: 138,
    alola: -1,
    type: "Rock/Water",
    ability: "Swift Swim/Shell Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/138.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/138.png"
};

var omastar = {
    name: "Omastar",
    dex: 139,
    alola: -1,
    type: "Rock/Water",
    ability: "Swift Swim/Shell Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/139.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/139.png"
};

var kabuto = {
    name: "Kabuto",
    dex: 140,
    alola: -1,
    type: "Rock/Water",
    ability: "Swift Swim/Battle Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/140.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/140.png"
};

var kabutops = {
    name: "Kabutops",
    dex: 141,
    alola: -1,
    type: "Rock/Water",
    ability: "Swift Swim/Battle Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/141.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/141.png"
};

var aerodactyl = {
    name: "Aerodactyl",
    dex: 142,
    alola: 284,
    type: "Rock/Flying",
    ability: "Rock Head/Pressure/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/142.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/142.png"
};

var snorlax = {
    name: "Snorlax",
    dex: 143,
    alola: 036,
    type: "Normal",
    ability: "Immunity/Thick Fat/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/143.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/143.png"
};

var articuno = {
    name: "Articuno",
    dex: 144,
    alola: -1,
    type: "Ice/Flying",
    ability: "Pressure/None/Snow Cloak",
    wiki: "http://www.serebii.net/pokedex-sm/144.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/144.png"
};

var zapdos = {
    name: "Zapdos",
    dex: 145,
    alola: -1,
    type: "Electric/Flying",
    ability: "Pressure/None/Static/",
    wiki: "http://www.serebii.net/pokedex-sm/145.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/145.png"
};

var moltres = {
    name: "Moltres",
    dex: 146,
    alola: -1,
    type: "Fire/Flying",
    ability: "Pressure/None/Flame Body",
    wiki: "http://www.serebii.net/pokedex-sm/146.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/146.png"
};

var dratini = {
    name: "Dratini",
    dex: 147,
    alola: 281,
    type: "Dragon",
    ability: "Shed Skin/None/Marvel Scale",
    wiki: "http://www.serebii.net/pokedex-sm/147.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/147.png"
};

var dragonair = {
    name: "Dragonair",
    dex: 148,
    alola: 282,
    type: "Dragon",
    ability: "Shed Skin/None/Marvel Scale",
    wiki: "http://www.serebii.net/pokedex-sm/148.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/148.png"
};

var dragonite = {
    name: "Dragonite",
    dex: 149,
    alola: 283,
    type: "Dragon/Flying",
    ability: "Inner Focus/None/Multiscale",
    wiki: "http://www.serebii.net/pokedex-sm/149.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/149.png"
};

var mewtwo = {
    name: "Mewtwo",
    dex: 150,
    alola: -1,
    type: "Psychic",
    ability: "Pressure/None/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/150.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/150.png"
};

var mew = {
    name: "Mew",
    dex: 151,
    alola: -1,
    type: "Psychic",
    ability: "Synchronize",
    wiki: "http://www.serebii.net/pokedex-sm/151.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/151.png"
};

var chikorita = {
    name: "Chikorita",
    dex: 152,
    alola: -1,
    type: "Grass",
    ability: "Overgrow/None/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-sm/152.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/152.png"
};

var bayleef = {
    name: "Bayleef",
    dex: 153,
    alola: -1,
    type: "Grass",
    ability: "Overgrow/None/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-sm/153.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/153.png"
};

var meganium = {
    name: "Meganium",
    dex: 154,
    alola: -1,
    type: "Grass",
    ability: "Overgrow/None/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-sm/154.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/154.png"
};

var cyndaquil = {
    name: "Cyndaquil",
    dex: 155,
    alola: -1,
    type: "Fire",
    ability: "Blaze/None/Flash Fire",
    wiki: "http://www.serebii.net/pokedex-sm/155.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/155.png"
};

var quilava = {
    name: "Quilava",
    dex: 156,
    alola: -1,
    type: "Fire",
    ability: "Blaze/None/Flash Fire",
    wiki: "http://www.serebii.net/pokedex-sm/156.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/156.png"
};

var typhlosion = {
    name: "Typhlosion",
    dex: 157,
    alola: -1,
    type: "Fire",
    ability: "Blaze/None/Flash Fire",
    wiki: "http://www.serebii.net/pokedex-sm/157.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/157.png"
};

var totodile = {
    name: "Totodile",
    dex: 158,
    alola: -1,
    type: "Water",
    ability: "Torrent/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/158.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/158.png"
};

var croconaw = {
    name: "Croconaw",
    dex: 159,
    alola: -1,
    type: "Water",
    ability: "Torrent/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/159.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/159.png"
};

var feraligatr = {
    name: "Feraligatr",
    dex: 160,
    alola: -1,
    type: "Water",
    ability: "Torrent/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/160.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/160.png"
};

var sentret = {
    name: "Sentret",
    dex: 161,
    alola: -1,
    type: "Normal",
    ability: "Run Away/Keen Eye/Frisk",
    wiki: "http://www.serebii.net/pokedex-sm/161.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/161.png"
};

var furret = {
    name: "Furret",
    dex: 162,
    alola: -1,
    type: "Normal",
    ability: "Run Away/Keen Eye/Frisk",
    wiki: "http://www.serebii.net/pokedex-sm/162.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/162.png"
};

var hoothoot = {
    name: "Hoothoot",
    dex: 163,
    alola: -1,
    type: "Normal/Flying",
    ability: "Insomnia/Keen Eye/Tinted Lens",
    wiki: "http://www.serebii.net/pokedex-sm/163.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/163.png"
};

var noctowl = {
    name: "Noctowl",
    dex: 164,
    alola: -1,
    type: "Normal/Flying",
    ability: "Insomnia/Keen Eye/Tinted Lens",
    wiki: "http://www.serebii.net/pokedex-sm/164.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/164.png"
};

var ledyba = {
    name: "Ledyba",
    dex: 165,
    alola: 020,
    type: "Bug/Flying",
    ability: "Swarm/Early Bird/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/165.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/165.png"
};

var ledian = {
    name: "Ledian",
    dex: 166,
    alola: 021,
    type: "Bug/Flying",
    ability: "Swarm/Early Bird/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-sm/166.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/166.png"
};

var spinarak = {
    name: "Spinarak",
    dex: 167,
    alola: 022,
    type: "Bug/Poison",
    ability: "Swarm/Insomnia/Sniper",
    wiki: "http://www.serebii.net/pokedex-sm/167.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/167.png"
};

var ariados = {
    name: "Ariados",
    dex: 168,
    alola: 023,
    type: "Bug/Poison",
    ability: "Swarm/Insomnia/Sniper",
    wiki: "http://www.serebii.net/pokedex-sm/168.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/168.png"
};

var crobat = {
    name: "Crobat",
    dex: 169,
    alola: 070,
    type: "Poison/Flying",
    ability: "Inner Focus/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/169.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/169.png"
};

var chinchou = {
    name: "Chinchou",
    dex: 170,
    alola: 201,
    type: "Water/Electric",
    ability: "Volt Absorb/Illuminate/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/170.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/170.png"
};

var lanturn = {
    name: "Lanturn",
    dex: 171,
    alola: 202,
    type: "Water/Electric",
    ability: "Volt Absorb/Illuminate/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/171.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/171.png"
};

var pichu = {
    name: "Pichu",
    dex: 172,
    alola: 024,
    type: "Electric",
    ability: "Static/None/Lightning Rod",
    wiki: "http://www.serebii.net/pokedex-sm/172.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/172.png"
};

var cleffa = {
    name: "Cleffa",
    dex: 173,
    alola: 210,
    type: "Fairy",
    ability: "Cute Charm/Magic Guard/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-sm/173.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/173.png"
};

var igglybuff = {
    name: "Igglybuff",
    dex: 174,
    alola: 134,
    type: "Normal/Fairy",
    ability: "Cute Charm/Competitive/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-sm/174.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/174.png"
};

var togepi = {
    name: "Togepi",
    dex: 175,
    alola: -1,
    type: "Fairy",
    ability: "Hustle/Serene Grace/Super Luck",
    wiki: "http://www.serebii.net/pokedex-sm/175.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/175.png"
};

var togetic = {
    name: "Togetic",
    dex: 176,
    alola: -1,
    type: "Fairy/Flying",
    ability: "Hustle/Serene Grace/Super Luck",
    wiki: "http://www.serebii.net/pokedex-sm/176.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/176.png"
};

var natu = {
    name: "Natu",
    dex: 177,
    alola: -1,
    type: "Psychic/Flying",
    ability: "Synchronize/Early Bird/Magic Bounce",
    wiki: "http://www.serebii.net/pokedex-sm/177.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/177.png"
};

var xatu = {
    name: "Xatu",
    dex: 178,
    alola: -1,
    type: "Psychic/Flying",
    ability: "Synchronize/Early Bird/Magic Bounce",
    wiki: "http://www.serebii.net/pokedex-sm/178.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/178.png"
};

var mareep = {
    name: "Mareep",
    dex: 179,
    alola: -1,
    type: "Electric",
    ability: "Static/None/Plus",
    wiki: "http://www.serebii.net/pokedex-sm/179.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/179.png"
};

var flaaffy = {
    name: "Flaaffy",
    dex: 180,
    alola: -1,
    type: "Electric",
    ability: "Static/None/Plus",
    wiki: "http://www.serebii.net/pokedex-sm/180.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/180.png"
};

var ampharos = {
    name: "Ampharos",
    dex: 181,
    alola: -1,
    type: "Electric",
    ability: "Static/None/Plus",
    wiki: "http://www.serebii.net/pokedex-sm/181.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/181.png"
};

var bellossom = {
    name: "Bellossom",
    dex: 182,
    alola: -1,
    type: "Grass",
    ability: "Chlorophyll/None/Healer",
    wiki: "http://www.serebii.net/pokedex-sm/182.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/182.png"
};

var marill = {
    name: "Marill",
    dex: 183,
    alola: -1,
    type: "Water/Fairy",
    ability: "Thick Fat/Huge Power/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-sm/183.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/183.png"
};

var azumarill = {
    name: "Azumarill",
    dex: 184,
    alola: -1,
    type: "Water/Fairy",
    ability: "Thick Fat/Huge Power/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-sm/184.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/184.png"
};

var sudowoodo = {
    name: "Sudowoodo",
    dex: 185,
    alola: 031,
    type: "Rock",
    ability: "Sturdy/Rock Head/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/185.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/185.png"
};

var politoed = {
    name: "Politoed",
    dex: 186,
    alola: 152,
    type: "Water",
    ability: "Water Absorb/Damp/Drizzle",
    wiki: "http://www.serebii.net/pokedex-sm/186.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/186.png"
};

var hoppip = {
    name: "Hoppip",
    dex: 187,
    alola: -1,
    type: "Grass/Flying",
    ability: "Chlorophyll/Leaf Guard/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/187.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/187.png"
};

var skiploom = {
    name: "Skiploom",
    dex: 188,
    alola: -1,
    type: "Grass/Flying",
    ability: "Chlorophyll/Leaf Guard/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/188.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/188.png"
};

var jumpluff = {
    name: "Jumpluff",
    dex: 189,
    alola: -1,
    type: "Grass/Flying",
    ability: "Chlorophyll/Leaf Guard/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/189.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/189.png"
};

var aipom = {
    name: "Aipom",
    dex: 190,
    alola: -1,
    type: "Normal",
    ability: "Run Away/Pickup/Skill Link",
    wiki: "http://www.serebii.net/pokedex-sm/190.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/190.png"
};

var sunkern = {
    name: "Sunkern",
    dex: 191,
    alola: -1,
    type: "Grass",
    ability: "Chlorophyll/Solar Power/Early Bird",
    wiki: "http://www.serebii.net/pokedex-sm/191.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/191.png"
};

var sunflora = {
    name: "Sunflora",
    dex: 192,
    alola: -1,
    type: "Grass",
    ability: "Chlorophyll/Solar Power/Early Bird",
    wiki: "http://www.serebii.net/pokedex-sm/192.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/192.png"
};

var yanma = {
    name: "Yanma",
    dex: 193,
    alola: -1,
    type: "Bug/Flying",
    ability: "Speed Boost/Compound Eyes/Frisk",
    wiki: "http://www.serebii.net/pokedex-sm/193.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/193.png"
};

var wooper = {
    name: "Wooper",
    dex: 194,
    alola: -1,
    type: "Water/Ground",
    ability: "Damp/Water Absorb/Unaware",
    wiki: "http://www.serebii.net/pokedex-sm/194.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/194.png"
};

var quagsire = {
    name: "Quagsire",
    dex: 195,
    alola: -1,
    type: "Water/Ground",
    ability: "Damp/Water Absorb/Unaware",
    wiki: "http://www.serebii.net/pokedex-sm/195.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/195.png"
};

var espeon = {
    name: "Espeon",
    dex: 196,
    alola: 127,
    type: "Psychic",
    ability: "Synchronize/None/Magic Bounce",
    wiki: "http://www.serebii.net/pokedex-sm/196.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/196.png"
};

var umbreon = {
    name: "Umbreon",
    dex: 197,
    alola: 128,
    type: "Dark",
    ability: "Synchronize/None/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/197.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/197.png"
};

var murkrow = {
    name: "Murkrow",
    dex: 198,
    alola: 277,
    type: "Dark/Flying",
    ability: "Insomnia/Super Luck/Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/198.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/198.png"
};

var slowking = {
    name: "Slowking",
    dex: 199,
    alola: 039,
    type: "Water/Psychic",
    ability: "Oblivious/Own Tempo/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/199.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/199.png"
};

var misdreavus = {
    name: "Misdreavus",
    dex: 200,
    alola: 066,
    type: "Ghost",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/200.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/200.png"
};

var unown = {
    name: "Unown",
    dex: 201,
    alola: -1,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/201.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/201.png"
};

var wobbuffet = {
    name: "Wobbuffet",
    dex: 202,
    alola: -1,
    type: "Psychic",
    ability: "Shadow Tag/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/202.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/202.png"
};

var girafarig = {
    name: "Girafarig",
    dex: 203,
    alola: -1,
    type: "Normal/Psychic",
    ability: "Inner Focus/Early Bird/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-sm/203.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/203.png"
};

var pineco = {
    name: "Pineco",
    dex: 204,
    alola: -1,
    type: "Bug",
    ability: "Sturdy/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/204.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/204.png"
};

var forretress = {
    name: "Forretress",
    dex: 205,
    alola: -1,
    type: "Bug/Steel",
    ability: "Sturdy/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/205.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/205.png"
};

var dunsparce = {
    name: "Dunsparce",
    dex: 206,
    alola: -1,
    type: "Normal",
    ability: "Serene Grace/Run Away/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/206.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/206.png"
};

var gligar = {
    name: "Gligar",
    dex: 207,
    alola: -1,
    type: "Ground/Flying",
    ability: "Hyper Cutter/Sand Veil/Immunity",
    wiki: "http://www.serebii.net/pokedex-sm/207.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/207.png"
};

var steelix = {
    name: "Steelix",
    dex: 208,
    alola: -1,
    type: "Steel/Ground",
    ability: "Rock Head/Sturdy/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/208.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/208.png"
};

var snubbull = {
    name: "Snubbull",
    dex: 209,
    alola: 258,
    type: "Fairy",
    ability: "Intimidate/Run Away/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/209.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/209.png"
};

var granbull = {
    name: "Granbull",
    dex: 210,
    alola: 259,
    type: "Fairy",
    ability: "Intimidate/Quick Feet/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/210.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/210.png"
};

var qwilfish = {
    name: "Qwilfish",
    dex: 211,
    alola: -1,
    type: "Water/Poison",
    ability: "Poison Point/Swift Swim/Intimidate",
    wiki: "http://www.serebii.net/pokedex-sm/211.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/211.png"
};

var scizor = {
    name: "Scizor",
    dex: 212,
    alola: 276,
    type: "Bug/Steel",
    ability: "Swarm/Technician/Light Metal",
    wiki: "http://www.serebii.net/pokedex-sm/212.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/212.png"
};

var shuckle = {
    name: "Shuckle",
    dex: 213,
    alola: -1,
    type: "Bug/Rock",
    ability: "Sturdy/Gluttony/Contrary",
    wiki: "http://www.serebii.net/pokedex-sm/213.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/213.png"
};

var heracross = {
    name: "Heracross",
    dex: 214,
    alola: -1,
    type: "Bug/Fighting",
    ability: "Swarm/Guts/Moxie",
    wiki: "http://www.serebii.net/pokedex-sm/214.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/214.png"
};

var sneasel = {
    name: "Sneasel",
    dex: 215,
    alola: 249,
    type: "Dark/Ice",
    ability: "Inner Focus/Keen Eye/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-sm/215.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/215.png"
};

var teddiursa = {
    name: "Teddiursa",
    dex: 216,
    alola: -1,
    type: "Normal",
    ability: "Pickup/Quick Feet/Honey Gather",
    wiki: "http://www.serebii.net/pokedex-sm/216.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/216.png"
};

var ursaring = {
    name: "Ursaring",
    dex: 217,
    alola: -1,
    type: "Normal",
    ability: "Guts/Quick Feet/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/217.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/217.png"
};

var slugma = {
    name: "Slugma",
    dex: 218,
    alola: -1,
    type: "Fire",
    ability: "Magma Armor/Flame Body/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/218.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/218.png"
};

var magcargo = {
    name: "Magcargo",
    dex: 219,
    alola: -1,
    type: "Fire/Rock",
    ability: "Magma Armor/Flame Body/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/219.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/219.png"
};

var swinub = {
    name: "Swinub",
    dex: 220,
    alola: -1,
    type: "Ice/Ground",
    ability: "Oblivious/Snow Cloak/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-sm/220.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/220.png"
};

var piloswine = {
    name: "Piloswine",
    dex: 221,
    alola: -1,
    type: "Ice/Ground",
    ability: "Oblivious/Snow Cloak/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-sm/221.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/221.png"
};

var corsola = {
    name: "Corsola",
    dex: 222,
    alola: 112,
    type: "Water/Rock",
    ability: "Hustle/Natural Cure/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/222.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/222.png"
};

var remoraid = {
    name: "Remoraid",
    dex: 223,
    alola: -1,
    type: "Water",
    ability: "Hustle/Sniper/Moody",
    wiki: "http://www.serebii.net/pokedex-sm/223.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/223.png"
};

var octillery = {
    name: "Octillery",
    dex: 224,
    alola: -1,
    type: "Water",
    ability: "Suction Cups/Sniper/Moody",
    wiki: "http://www.serebii.net/pokedex-sm/224.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/224.png"
};

var delibird = {
    name: "Delibird",
    dex: 225,
    alola: 081,
    type: "Ice/Flying",
    ability: "Vital Spirit/Hustle/Insomnia",
    wiki: "http://www.serebii.net/pokedex-sm/225.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/225.png"
};

var mantine = {
    name: "Mantine",
    dex: 226,
    alola: -1,
    type: "Water/Flying",
    ability: "Swift Swim/Water Absorb/Water Veil",
    wiki: "http://www.serebii.net/pokedex-sm/226.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/226.png"
};

var skarmory = {
    name: "Skarmory",
    dex: 227,
    alola: 208,
    type: "Steel/Flying",
    ability: "Keen Eye/Sturdy/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/227.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/227.png"
};

var houndour = {
    name: "Houndour",
    dex: 228,
    alola: -1,
    type: "Dark/Fire",
    ability: "Early Bird/Flash Fire/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/228.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/228.png"
};

var houndoom = {
    name: "Houndoom",
    dex: 229,
    alola: -1,
    type: "Dark/Fire",
    ability: "Early Bird/Flash Fire/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/229.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/229.png"
};

var kingdra = {
    name: "Kingdra",
    dex: 230,
    alola: -1,
    type: "Water/Dragon",
    ability: "Swift Swim/Sniper/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/230.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/230.png"
};

var phanpy = {
    name: "Phanpy",
    dex: 231,
    alola: -1,
    type: "Ground",
    ability: "Pickup/None/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/231.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/231.png"
};

var donphan = {
    name: "Donphan",
    dex: 232,
    alola: -1,
    type: "Ground",
    ability: "Sturdy/None/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/232.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/232.png"
};

var porygon2 = {
    name: "Porygon2",
    dex: 233,
    alola: 218,
    type: "Normal",
    ability: "Trace/Download/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/233.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/233.png"
};

var stantler = {
    name: "Stantler",
    dex: 234,
    alola: -1,
    type: "Normal",
    ability: "Intimidate/Frisk/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-sm/234.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/234.png"
};

var smeargle = {
    name: "Smeargle",
    dex: 235,
    alola: 058,
    type: "Normal",
    ability: "Own Tempo/Technician/Moody",
    wiki: "http://www.serebii.net/pokedex-sm/235.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/235.png"
};

var tyrogue = {
    name: "Tyrogue",
    dex: 236,
    alola: -1,
    type: "Fighting",
    ability: "Guts/Steadfast/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-sm/236.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/236.png"
};

var hitmontop = {
    name: "Hitmontop",
    dex: 237,
    alola: -1,
    type: "Fighting",
    ability: "Intimidate/Technician/Steadfast",
    wiki: "http://www.serebii.net/pokedex-sm/237.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/237.png"
};

var smoochum = {
    name: "Smoochum",
    dex: 238,
    alola: -1,
    type: "Ice/Psychic",
    ability: "Oblivious/Forewarn/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/238.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/238.png"
};

var elekid = {
    name: "Elekid",
    dex: 239,
    alola: 226,
    type: "Electric",
    ability: "Static/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-sm/239.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/239.png"
};

var magby = {
    name: "Magby",
    dex: 240,
    alola: 166,
    type: "Fire",
    ability: "Flame Body/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-sm/240.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/240.png"
};

var miltank = {
    name: "Miltank",
    dex: 241,
    alola: 138,
    type: "Normal",
    ability: "Thick Fat/Scrappy/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-sm/241.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/241.png"
};

var blissey = {
    name: "Blissey",
    dex: 242,
    alola: 034,
    type: "Normal",
    ability: "Natural Cure/Serene Grace/Healer",
    wiki: "http://www.serebii.net/pokedex-sm/242.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/242.png"
};

var raikou = {
    name: "Raikou",
    dex: 243,
    alola: -1,
    type: "Electric",
    ability: "Pressure/None/Volt Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/243.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/243.png"
};

var entei = {
    name: "Entei",
    dex: 244,
    alola: -1,
    type: "Fire",
    ability: "Pressure/None/Flash Fire",
    wiki: "http://www.serebii.net/pokedex-sm/244.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/244.png"
};

var suicune = {
    name: "Suicune",
    dex: 245,
    alola: -1,
    type: "Water",
    ability: "Pressure/None/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/245.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/245.png"
};

var larvitar = {
    name: "Larvitar",
    dex: 246,
    alola: -1,
    type: "Rock/Ground",
    ability: "Guts/None/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/246.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/246.png"
};

var pupitar = {
    name: "Pupitar",
    dex: 247,
    alola: -1,
    type: "Rock/Ground",
    ability: "Shed Skin",
    wiki: "http://www.serebii.net/pokedex-sm/247.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/247.png"
};

var tyranitar = {
    name: "Tyranitar",
    dex: 248,
    alola: -1,
    type: "Rock/Dark",
    ability: "Sand Stream/None/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/248.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/248.png"
};

var lugia = {
    name: "Lugia",
    dex: 249,
    alola: -1,
    type: "Psychic/Flying",
    ability: "Pressure/None/Multiscale",
    wiki: "http://www.serebii.net/pokedex-sm/249.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/249.png"
};

var ho_oh = {
    name: "Ho-oh",
    dex: 250,
    alola: -1,
    type: "Fire/Flying",
    ability: "Pressure/None/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/250.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/250.png"
};

var celebi = {
    name: "Celebi",
    dex: 251,
    alola: -1,
    type: "Psychic/Grass",
    ability: "Natural Cure",
    wiki: "http://www.serebii.net/pokedex-sm/251.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/251.png"
};

var treecko = {
    name: "Treecko",
    dex: 252,
    alola: -1,
    type: "Grass",
    ability: "Overgrow/None/Unburden",
    wiki: "http://www.serebii.net/pokedex-sm/252.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/252.png"
};

var grovyle = {
    name: "Grovyle",
    dex: 253,
    alola: -1,
    type: "Grass",
    ability: "Overgrow/None/Unburden",
    wiki: "http://www.serebii.net/pokedex-sm/253.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/253.png"
};

var sceptile = {
    name: "Sceptile",
    dex: 254,
    alola: -1,
    type: "Grass",
    ability: "Overgrow/None/Unburden",
    wiki: "http://www.serebii.net/pokedex-sm/254.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/254.png"
};

var torchic = {
    name: "Torchic",
    dex: 255,
    alola: -1,
    type: "Fire",
    ability: "Blaze/None/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/255.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/255.png"
};

var combusken = {
    name: "Combusken",
    dex: 256,
    alola: -1,
    type: "Fire/Fighting",
    ability: "Blaze/None/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/256.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/256.png"
};

var blaziken = {
    name: "Blaziken",
    dex: 257,
    alola: -1,
    type: "Fire/Fighting",
    ability: "Blaze/None/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/257.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/257.png"
};

var mudkip = {
    name: "Mudkip",
    dex: 258,
    alola: -1,
    type: "Water",
    ability: "Torrent/None/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/258.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/258.png"
};

var marshtomp = {
    name: "Marshtomp",
    dex: 259,
    alola: -1,
    type: "Water/Ground",
    ability: "Torrent/None/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/259.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/259.png"
};

var swampert = {
    name: "Swampert",
    dex: 260,
    alola: -1,
    type: "Water/Ground",
    ability: "Torrent/None/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/260.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/260.png"
};

var poochyena = {
    name: "Poochyena",
    dex: 261,
    alola: -1,
    type: "Dark",
    ability: "Run Away/Quick Feet/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/261.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/261.png"
};

var mightyena = {
    name: "Mightyena",
    dex: 262,
    alola: -1,
    type: "Dark",
    ability: "Intimidate/Quick Feet/Moxie",
    wiki: "http://www.serebii.net/pokedex-sm/262.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/262.png"
};

var zigzagoon = {
    name: "Zigzagoon",
    dex: 263,
    alola: -1,
    type: "Normal",
    ability: "Pickup/Gluttony/Quick Feet",
    wiki: "http://www.serebii.net/pokedex-sm/263.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/263.png"
};

var linoone = {
    name: "Linoone",
    dex: 264,
    alola: -1,
    type: "Normal",
    ability: "Pickup/Gluttony/Quick Feet",
    wiki: "http://www.serebii.net/pokedex-sm/264.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/264.png"
};

var wurmple = {
    name: "Wurmple",
    dex: 265,
    alola: -1,
    type: "Bug",
    ability: "Shield Dust/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-sm/265.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/265.png"
};

var silcoon = {
    name: "Silcoon",
    dex: 266,
    alola: -1,
    type: "Bug",
    ability: "Shed Skin",
    wiki: "http://www.serebii.net/pokedex-sm/266.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/266.png"
};

var beautifly = {
    name: "Beautifly",
    dex: 267,
    alola: -1,
    type: "Bug/Flying",
    ability: "Swarm/None/Rivalry",
    wiki: "http://www.serebii.net/pokedex-sm/267.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/267.png"
};

var cascoon = {
    name: "Cascoon",
    dex: 268,
    alola: -1,
    type: "Bug",
    ability: "Shed Skin",
    wiki: "http://www.serebii.net/pokedex-sm/268.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/268.png"
};

var dustox = {
    name: "Dustox",
    dex: 269,
    alola: -1,
    type: "Bug/Poison",
    ability: "Shield Dust/None/Compound Eyes",
    wiki: "http://www.serebii.net/pokedex-sm/269.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/269.png"
};

var lotad = {
    name: "Lotad",
    dex: 270,
    alola: -1,
    type: "Water/Grass",
    ability: "Swift Swim/Rain Dish/Own Tempo",
    wiki: "http://www.serebii.net/pokedex-sm/270.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/270.png"
};

var lombre = {
    name: "Lombre",
    dex: 271,
    alola: -1,
    type: "Water/Grass",
    ability: "Swift Swim/Rain Dish/Own Tempo",
    wiki: "http://www.serebii.net/pokedex-sm/271.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/271.png"
};

var ludicolo = {
    name: "Ludicolo",
    dex: 272,
    alola: -1,
    type: "Water/Grass",
    ability: "Swift Swim/Rain Dish/Own Tempo",
    wiki: "http://www.serebii.net/pokedex-sm/272.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/272.png"
};

var seedot = {
    name: "Seedot",
    dex: 273,
    alola: -1,
    type: "Grass",
    ability: "Chlorophyll/Early Bird/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-sm/273.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/273.png"
};

var nuzleaf = {
    name: "Nuzleaf",
    dex: 274,
    alola: -1,
    type: "Grass/Dark",
    ability: "Chlorophyll/Early Bird/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-sm/274.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/274.png"
};

var shiftry = {
    name: "Shiftry",
    dex: 275,
    alola: -1,
    type: "Grass/Dark",
    ability: "Chlorophyll/Early Bird/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-sm/275.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/275.png"
};

var taillow = {
    name: "Taillow",
    dex: 276,
    alola: -1,
    type: "Normal/Flying",
    ability: "Guts/None/Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/276.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/276.png"
};

var swellow = {
    name: "Swellow",
    dex: 277,
    alola: -1,
    type: "Normal/Flying",
    ability: "Guts/None/Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/277.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/277.png"
};

var wingull = {
    name: "Wingull",
    dex: 278,
    alola: 040,
    type: "Water/Flying",
    ability: "Keen Eye/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/278.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/278.png"
};

var pelipper = {
    name: "Pelipper",
    dex: 279,
    alola: 041,
    type: "Water/Flying",
    ability: "Keen Eye/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/279.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/279.png"
};

var ralts = {
    name: "Ralts",
    dex: 280,
    alola: -1,
    type: "Psychic/Fairy",
    ability: "Synchronize/Trace/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/280.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/280.png"
};

var kirlia = {
    name: "Kirlia",
    dex: 281,
    alola: -1,
    type: "Psychic/Fairy",
    ability: "Synchronize/Trace/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/281.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/281.png"
};

var gardevoir = {
    name: "Gardevoir",
    dex: 282,
    alola: -1,
    type: "Psychic/Fairy",
    ability: "Synchronize/Trace/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/282.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/282.png"
};

var surskit = {
    name: "Surskit",
    dex: 283,
    alola: 139,
    type: "Bug/Water",
    ability: "Swift Swim/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/283.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/283.png"
};

var masquerain = {
    name: "Masquerain",
    dex: 284,
    alola: 140,
    type: "Bug/Flying",
    ability: "Intimidate/None/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/284.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/284.png"
};

var shroomish = {
    name: "Shroomish",
    dex: 285,
    alola: -1,
    type: "Grass",
    ability: "Effect Spore/Poison Heal/Quick Feet",
    wiki: "http://www.serebii.net/pokedex-sm/285.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/285.png"
};

var breloom = {
    name: "Breloom",
    dex: 286,
    alola: -1,
    type: "Grass/Fighting",
    ability: "Effect Spore/Poison Heal/Technician",
    wiki: "http://www.serebii.net/pokedex-sm/286.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/286.png"
};

var slakoth = {
    name: "Slakoth",
    dex: 287,
    alola: -1,
    type: "Normal",
    ability: "Truant",
    wiki: "http://www.serebii.net/pokedex-sm/287.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/287.png"
};

var vigoroth = {
    name: "Vigoroth",
    dex: 288,
    alola: -1,
    type: "Normal",
    ability: "Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-sm/288.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/288.png"
};

var slaking = {
    name: "Slaking",
    dex: 289,
    alola: -1,
    type: "Normal",
    ability: "Truant",
    wiki: "http://www.serebii.net/pokedex-sm/289.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/289.png"
};

var nincada = {
    name: "Nincada",
    dex: 290,
    alola: -1,
    type: "Bug/Ground",
    ability: "Compound Eyes/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-sm/290.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/290.png"
};

var ninjask = {
    name: "Ninjask",
    dex: 291,
    alola: -1,
    type: "Bug/Flying",
    ability: "Speed Boost/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/291.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/291.png"
};

var shedinja = {
    name: "Shedinja",
    dex: 292,
    alola: -1,
    type: "Bug/Ghost",
    ability: "Wonder Guard",
    wiki: "http://www.serebii.net/pokedex-sm/292.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/292.png"
};

var whismur = {
    name: "Whismur",
    dex: 293,
    alola: -1,
    type: "Normal",
    ability: "Soundproof/None/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/293.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/293.png"
};

var loudred = {
    name: "Loudred",
    dex: 294,
    alola: -1,
    type: "Normal",
    ability: "Soundproof/None/Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/294.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/294.png"
};

var exploud = {
    name: "Exploud",
    dex: 295,
    alola: -1,
    type: "Normal",
    ability: "Soundproof/None/Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/295.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/295.png"
};

var makuhita = {
    name: "Makuhita",
    dex: 296,
    alola: 056,
    type: "Fighting",
    ability: "Thick Fat/Guts/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/296.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/296.png"
};

var hariyama = {
    name: "Hariyama",
    dex: 297,
    alola: 057,
    type: "Fighting",
    ability: "Thick Fat/Guts/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/297.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/297.png"
};

var azurill = {
    name: "Azurill",
    dex: 298,
    alola: -1,
    type: "Normal/Fairy",
    ability: "Thick Fat/Huge Power/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-sm/298.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/298.png"
};

var nosepass = {
    name: "Nosepass",
    dex: 299,
    alola: 198,
    type: "Rock",
    ability: "Sturdy/Magnet Pull/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/299.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/299.png"
};

var skitty = {
    name: "Skitty",
    dex: 300,
    alola: -1,
    type: "Normal",
    ability: "Cute Charm/Normalize/Wonder Skin",
    wiki: "http://www.serebii.net/pokedex-sm/300.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/300.png"
};

var delcatty = {
    name: "Delcatty",
    dex: 301,
    alola: -1,
    type: "Normal",
    ability: "Cute Charm/Normalize/Wonder Skin",
    wiki: "http://www.serebii.net/pokedex-sm/301.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/301.png"
};

var sableye = {
    name: "Sableye",
    dex: 302,
    alola: 102,
    type: "Dark/Ghost",
    ability: "Keen Eye/Stall/Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/302.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/302.png"
};

var mawile = {
    name: "Mawile",
    dex: 303,
    alola: -1,
    type: "Steel/Fairy",
    ability: "Hyper Cutter/Intimidate/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/303.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/303.png"
};

var aron = {
    name: "Aron",
    dex: 304,
    alola: -1,
    type: "Steel/Rock",
    ability: "Sturdy/Rock Head/Heavy Metal",
    wiki: "http://www.serebii.net/pokedex-sm/304.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/304.png"
};

var lairon = {
    name: "Lairon",
    dex: 305,
    alola: -1,
    type: "Steel/Rock",
    ability: "Sturdy/Rock Head/Heavy Metal",
    wiki: "http://www.serebii.net/pokedex-sm/305.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/305.png"
};

var aggron = {
    name: "Aggron",
    dex: 306,
    alola: -1,
    type: "Steel/Rock",
    ability: "Sturdy/Rock Head/Heavy Metal",
    wiki: "http://www.serebii.net/pokedex-sm/306.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/306.png"
};

var meditite = {
    name: "Meditite",
    dex: 307,
    alola: -1,
    type: "Fighting/Psychic",
    ability: "Pure Power/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/307.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/307.png"
};

var medicham = {
    name: "Medicham",
    dex: 308,
    alola: -1,
    type: "Fighting/Psychic",
    ability: "Pure Power/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/308.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/308.png"
};

var electrike = {
    name: "Electrike",
    dex: 309,
    alola: -1,
    type: "Electric",
    ability: "Static/Lightning Rod/Minus",
    wiki: "http://www.serebii.net/pokedex-sm/309.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/309.png"
};

var manectric = {
    name: "Manectric",
    dex: 310,
    alola: -1,
    type: "Electric",
    ability: "Static/Lightning Rod/Minus",
    wiki: "http://www.serebii.net/pokedex-sm/310.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/310.png"
};

var plusle = {
    name: "Plusle",
    dex: 311,
    alola: -1,
    type: "Electric",
    ability: "Plus/None/Lightning Rod/VI",
    wiki: "http://www.serebii.net/pokedex-sm/311.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/311.png"
};

var minun = {
    name: "Minun",
    dex: 312,
    alola: -1,
    type: "Electric",
    ability: "Minus/None/Volt Absorb/VI",
    wiki: "http://www.serebii.net/pokedex-sm/312.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/312.png"
};

var volbeat = {
    name: "Volbeat",
    dex: 313,
    alola: -1,
    type: "Bug",
    ability: "Illuminate/Swarm/Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/313.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/313.png"
};

var illumise = {
    name: "Illumise",
    dex: 314,
    alola: -1,
    type: "Bug",
    ability: "Oblivious/Tinted Lens/Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/314.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/314.png"
};

var roselia = {
    name: "Roselia",
    dex: 315,
    alola: -1,
    type: "Grass/Poison",
    ability: "Natural Cure/Poison Point/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-sm/315.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/315.png"
};

var gulpin = {
    name: "Gulpin",
    dex: 316,
    alola: -1,
    type: "Poison",
    ability: "Liquid Ooze/Sticky Hold/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/316.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/316.png"
};

var swalot = {
    name: "Swalot",
    dex: 317,
    alola: -1,
    type: "Poison",
    ability: "Liquid Ooze/Sticky Hold/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/317.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/317.png"
};

var carvanha = {
    name: "Carvanha",
    dex: 318,
    alola: 264,
    type: "Water/Dark",
    ability: "Rough Skin/None/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/318.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/318.png"
};

var sharpedo = {
    name: "Sharpedo",
    dex: 319,
    alola: 265,
    type: "Water/Dark",
    ability: "Rough Skin/None/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/319.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/319.png"
};

var wailmer = {
    name: "Wailmer",
    dex: 320,
    alola: 266,
    type: "Water",
    ability: "Water Veil/Oblivious/Pressure",
    wiki: "http://www.serebii.net/pokedex-sm/320.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/320.png"
};

var wailord = {
    name: "Wailord",
    dex: 321,
    alola: 267,
    type: "Water",
    ability: "Water Veil/Oblivious/Pressure",
    wiki: "http://www.serebii.net/pokedex-sm/321.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/321.png"
};

var numel = {
    name: "Numel",
    dex: 322,
    alola: -1,
    type: "Fire/Ground",
    ability: "Oblivious/Simple/Own Tempo",
    wiki: "http://www.serebii.net/pokedex-sm/322.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/322.png"
};

var camerupt = {
    name: "Camerupt",
    dex: 323,
    alola: -1,
    type: "Fire/Ground",
    ability: "Magma Armor/Solid Rock/Anger Point",
    wiki: "http://www.serebii.net/pokedex-sm/323.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/323.png"
};

var torkoal = {
    name: "Torkoal",
    dex: 324,
    alola: 223,
    type: "Fire",
    ability: "White Smoke/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/324.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/324.png"
};

var spoink = {
    name: "Spoink",
    dex: 325,
    alola: -1,
    type: "Psychic",
    ability: "Thick Fat/Own Tempo/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/325.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/325.png"
};

var grumpig = {
    name: "Grumpig",
    dex: 326,
    alola: -1,
    type: "Psychic",
    ability: "Thick Fat/Own Tempo/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/326.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/326.png"
};

var spinda = {
    name: "Spinda",
    dex: 327,
    alola: 105,
    type: "Normal",
    ability: "Own Tempo/Tangled Feet/Contrary",
    wiki: "http://www.serebii.net/pokedex-sm/327.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/327.png"
};

var trapinch = {
    name: "Trapinch",
    dex: 328,
    alola: 235,
    type: "Ground",
    ability: "Hyper Cutter/Arena Trap/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/328.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/328.png"
};

var vibrava = {
    name: "Vibrava",
    dex: 329,
    alola: 236,
    type: "Ground/Dragon",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/329.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/329.png"
};

var flygon = {
    name: "Flygon",
    dex: 330,
    alola: 237,
    type: "Ground/Dragon",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/330.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/330.png"
};

var cacnea = {
    name: "Cacnea",
    dex: 331,
    alola: -1,
    type: "Grass",
    ability: "Sand Veil/None/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/331.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/331.png"
};

var cacturne = {
    name: "Cacturne",
    dex: 332,
    alola: -1,
    type: "Grass/Dark",
    ability: "Sand Veil/None/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/332.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/332.png"
};

var swablu = {
    name: "Swablu",
    dex: 333,
    alola: -1,
    type: "Normal/Flying",
    ability: "Natural Cure/None/Cloud Nine",
    wiki: "http://www.serebii.net/pokedex-sm/333.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/333.png"
};

var altaria = {
    name: "Altaria",
    dex: 334,
    alola: -1,
    type: "Dragon/Flying",
    ability: "Natural Cure/None/Cloud Nine",
    wiki: "http://www.serebii.net/pokedex-sm/334.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/334.png"
};

var zangoose = {
    name: "Zangoose",
    dex: 335,
    alola: -1,
    type: "Normal",
    ability: "Immunity/None/Toxic Boost",
    wiki: "http://www.serebii.net/pokedex-sm/335.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/335.png"
};

var seviper = {
    name: "Seviper",
    dex: 336,
    alola: -1,
    type: "Poison",
    ability: "Shed Skin/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/336.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/336.png"
};

var lunatone = {
    name: "Lunatone",
    dex: 337,
    alola: -1,
    type: "Rock/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/337.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/337.png"
};

var solrock = {
    name: "Solrock",
    dex: 338,
    alola: -1,
    type: "Rock/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/338.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/338.png"
};

var barboach = {
    name: "Barboach",
    dex: 339,
    alola: 093,
    type: "Water/Ground",
    ability: "Oblivious/Anticipation/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/339.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/339.png"
};

var whiscash = {
    name: "Whiscash",
    dex: 340,
    alola: 094,
    type: "Water/Ground",
    ability: "Oblivious/Anticipation/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/340.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/340.png"
};

var corphish = {
    name: "Corphish",
    dex: 341,
    alola: -1,
    type: "Water",
    ability: "Hyper Cutter/Shell Armor/Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/341.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/341.png"
};

var crawdaunt = {
    name: "Crawdaunt",
    dex: 342,
    alola: -1,
    type: "Water/Dark",
    ability: "Hyper Cutter/Shell Armor/Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/342.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/342.png"
};

var baltoy = {
    name: "Baltoy",
    dex: 343,
    alola: -1,
    type: "Ground/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/343.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/343.png"
};

var claydol = {
    name: "Claydol",
    dex: 344,
    alola: -1,
    type: "Ground/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/344.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/344.png"
};

var lileep = {
    name: "Lileep",
    dex: 345,
    alola: -1,
    type: "Rock/Grass",
    ability: "Suction Cups/None/Storm Drain",
    wiki: "http://www.serebii.net/pokedex-sm/345.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/345.png"
};

var cradily = {
    name: "Cradily",
    dex: 346,
    alola: -1,
    type: "Rock/Grass",
    ability: "Suction Cups/None/Storm Drain",
    wiki: "http://www.serebii.net/pokedex-sm/346.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/346.png"
};

var anorith = {
    name: "Anorith",
    dex: 347,
    alola: -1,
    type: "Rock/Bug",
    ability: "Battle Armor/None/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/347.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/347.png"
};

var armaldo = {
    name: "Armaldo",
    dex: 348,
    alola: -1,
    type: "Rock/Bug",
    ability: "Battle Armor/None/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/348.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/348.png"
};

var feebas = {
    name: "Feebas",
    dex: 349,
    alola: 155,
    type: "Water",
    ability: "Swift Swim/Oblivious/Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/349.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/349.png"
};

var milotic = {
    name: "Milotic",
    dex: 350,
    alola: 156,
    type: "Water",
    ability: "Marvel Scale/Competitive/Cute Charm",
    wiki: "http://www.serebii.net/pokedex-sm/350.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/350.png"
};

var castform = {
    name: "Castform",
    dex: 351,
    alola: 181,
    type: "Normal",
    ability: "Forecast",
    wiki: "http://www.serebii.net/pokedex-sm/351.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/351.png"
};

var castform_sunny = {
    name: "Castform Sunny",
    dex: 351,
    alola: -1,
    type: "Fire",
    ability: "Forecast",
    wiki: "http://www.serebii.net/pokedex-sm/351.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/351-s.png"
};

var castform_rainy = {
    name: "Castform",
    dex: 351,
    alola: -1,
    type: "Water",
    ability: "Forecast",
    wiki: "http://www.serebii.net/pokedex-sm/351.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/351-r.png"
};

var castform_snowy = {
    name: "Castform Snowy",
    dex: 351,
    alola: -1,
    type: "Ice",
    ability: "Forecast",
    wiki: "http://www.serebii.net/pokedex-sm/351.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/351-i.png"
};

var kecleon = {
    name: "Kecleon",
    dex: 352,
    alola: -1,
    type: "Normal",
    ability: "Color Change/None/Protean/VI",
    wiki: "http://www.serebii.net/pokedex-sm/352.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/352.png"
};

var shuppet = {
    name: "Shuppet",
    dex: 353,
    alola: -1,
    type: "Ghost",
    ability: "Insomnia/Frisk/Cursed Body",
    wiki: "http://www.serebii.net/pokedex-sm/353.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/353.png"
};

var banette = {
    name: "Banette",
    dex: 354,
    alola: -1,
    type: "Ghost",
    ability: "Insomnia/Frisk/Cursed Body",
    wiki: "http://www.serebii.net/pokedex-sm/354.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/354.png"
};

var duskull = {
    name: "Duskull",
    dex: 355,
    alola: -1,
    type: "Ghost",
    ability: "Levitate/None/Frisk/VI",
    wiki: "http://www.serebii.net/pokedex-sm/355.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/355.png"
};

var dusclops = {
    name: "Dusclops",
    dex: 356,
    alola: -1,
    type: "Ghost",
    ability: "Pressure/None/Frisk/VI",
    wiki: "http://www.serebii.net/pokedex-sm/356.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/356.png"
};

var tropius = {
    name: "Tropius",
    dex: 357,
    alola: -1,
    type: "Grass/Flying",
    ability: "Chlorophyll/Solar Power/Harvest",
    wiki: "http://www.serebii.net/pokedex-sm/357.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/357.png"
};

var chimecho = {
    name: "Chimecho",
    dex: 358,
    alola: -1,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/358.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/358.png"
};

var absol = {
    name: "Absol",
    dex: 359,
    alola: 245,
    type: "Dark",
    ability: "Pressure/Super Luck/Justified",
    wiki: "http://www.serebii.net/pokedex-sm/359.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/359.png"
};

var wynaut = {
    name: "Wynaut",
    dex: 360,
    alola: -1,
    type: "Psychic",
    ability: "Shadow Tag/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/360.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/360.png"
};

var snorunt = {
    name: "Snorunt",
    dex: 361,
    alola: 246,
    type: "Ice",
    ability: "Inner Focus/Ice Body/Moody",
    wiki: "http://www.serebii.net/pokedex-sm/361.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/361.png"
};

var glalie = {
    name: "Glalie",
    dex: 362,
    alola: 247,
    type: "Ice",
    ability: "Inner Focus/Ice Body/Moody",
    wiki: "http://www.serebii.net/pokedex-sm/362.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/362.png"
};

var spheal = {
    name: "Spheal",
    dex: 363,
    alola: -1,
    type: "Ice/Water",
    ability: "Thick Fat/Ice Body/Oblivious",
    wiki: "http://www.serebii.net/pokedex-sm/363.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/363.png"
};

var sealeo = {
    name: "Sealeo",
    dex: 364,
    alola: -1,
    type: "Ice/Water",
    ability: "Thick Fat/Ice Body/Oblivious",
    wiki: "http://www.serebii.net/pokedex-sm/364.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/364.png"
};

var walrein = {
    name: "Walrein",
    dex: 365,
    alola: -1,
    type: "Ice/Water",
    ability: "Thick Fat/Ice Body/Oblivious",
    wiki: "http://www.serebii.net/pokedex-sm/365.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/365.png"
};

var clamperl = {
    name: "Clamperl",
    dex: 366,
    alola: -1,
    type: "Water",
    ability: "Shell Armor/None/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/366.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/366.png"
};

var huntail = {
    name: "Huntail",
    dex: 367,
    alola: -1,
    type: "Water",
    ability: "Swift Swim/None/Water Veil",
    wiki: "http://www.serebii.net/pokedex-sm/367.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/367.png"
};

var gorebyss = {
    name: "Gorebyss",
    dex: 368,
    alola: -1,
    type: "Water",
    ability: "Swift Swim/None/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/368.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/368.png"
};

var relicanth = {
    name: "Relicanth",
    dex: 369,
    alola: 262,
    type: "Water/Rock",
    ability: "Swift Swim/Rock Head/Sturdy",
    wiki: "http://www.serebii.net/pokedex-sm/369.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/369.png"
};

var luvdisc = {
    name: "Luvdisc",
    dex: 370,
    alola: 111,
    type: "Water",
    ability: "Swift Swim/None/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/370.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/370.png"
};

var bagon = {
    name: "Bagon",
    dex: 371,
    alola: 117,
    type: "Dragon",
    ability: "Rock Head/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/371.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/371.png"
};

var shelgon = {
    name: "Shelgon",
    dex: 372,
    alola: 118,
    type: "Dragon",
    ability: "Rock Head/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/372.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/372.png"
};

var salamence = {
    name: "Salamence",
    dex: 373,
    alola: 119,
    type: "Dragon/Flying",
    ability: "Intimidate/None/Moxie",
    wiki: "http://www.serebii.net/pokedex-sm/373.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/373.png"
};

var beldum = {
    name: "Beldum",
    dex: 374,
    alola: 214,
    type: "Steel/Psychic",
    ability: "Clear Body/None/Light Metal",
    wiki: "http://www.serebii.net/pokedex-sm/374.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/374.png"
};

var metang = {
    name: "Metang",
    dex: 375,
    alola: 215,
    type: "Steel/Psychic",
    ability: "Clear Body/None/Light Metal",
    wiki: "http://www.serebii.net/pokedex-sm/375.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/375.png"
};

var metagross = {
    name: "Metagross",
    dex: 376,
    alola: 216,
    type: "Steel/Psychic",
    ability: "Clear Body/None/Light Metal",
    wiki: "http://www.serebii.net/pokedex-sm/376.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/376.png"
};

var regirock = {
    name: "Regirock",
    dex: 377,
    alola: -1,
    type: "Rock",
    ability: "Clear Body/None/Sturdy",
    wiki: "http://www.serebii.net/pokedex-sm/377.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/377.png"
};

var regice = {
    name: "Regice",
    dex: 378,
    alola: -1,
    type: "Ice",
    ability: "Clear Body/None/Ice Body",
    wiki: "http://www.serebii.net/pokedex-sm/378.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/378.png"
};

var registeel = {
    name: "Registeel",
    dex: 379,
    alola: -1,
    type: "Steel",
    ability: "Clear Body/None/Light Metal",
    wiki: "http://www.serebii.net/pokedex-sm/379.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/379.png"
};

var latias = {
    name: "Latias",
    dex: 380,
    alola: -1,
    type: "Dragon/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/380.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/380.png"
};

var latios = {
    name: "Latios",
    dex: 381,
    alola: -1,
    type: "Dragon/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/381.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/381.png"
};

var kyogre = {
    name: "Kyogre",
    dex: 382,
    alola: -1,
    type: "Water",
    ability: "Drizzle",
    wiki: "http://www.serebii.net/pokedex-sm/382.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/382.png"
};

var groudon = {
    name: "Groudon",
    dex: 383,
    alola: -1,
    type: "Ground",
    ability: "Drought",
    wiki: "http://www.serebii.net/pokedex-sm/383.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/383.png"
};

var rayquaza = {
    name: "Rayquaza",
    dex: 384,
    alola: -1,
    type: "Dragon/Flying",
    ability: "Air Lock",
    wiki: "http://www.serebii.net/pokedex-sm/384.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/384.png"
};

var jirachi = {
    name: "Jirachi",
    dex: 385,
    alola: -1,
    type: "Steel/Psychic",
    ability: "Serene Grace",
    wiki: "http://www.serebii.net/pokedex-sm/385.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/385.png"
};

var deoxys = {
    name: "Deoxys",
    dex: 386,
    alola: -1,
    type: "Psychic",
    ability: "Pressure",
    wiki: "http://www.serebii.net/pokedex-sm/386.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/386.png"
};

var turtwig = {
    name: "Turtwig",
    dex: 387,
    alola: -1,
    type: "Grass",
    ability: "Overgrow/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/387.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/387.png"
};

var grotle = {
    name: "Grotle",
    dex: 388,
    alola: -1,
    type: "Grass",
    ability: "Overgrow/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/388.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/388.png"
};

var torterra = {
    name: "Torterra",
    dex: 389,
    alola: -1,
    type: "Grass/Ground",
    ability: "Overgrow/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/389.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/389.png"
};

var chimchar = {
    name: "Chimchar",
    dex: 390,
    alola: -1,
    type: "Fire",
    ability: "Blaze/None/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-sm/390.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/390.png"
};

var monferno = {
    name: "Monferno",
    dex: 391,
    alola: -1,
    type: "Fire/Fighting",
    ability: "Blaze/None/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-sm/391.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/391.png"
};

var infernape = {
    name: "Infernape",
    dex: 392,
    alola: -1,
    type: "Fire/Fighting",
    ability: "Blaze/None/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-sm/392.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/392.png"
};

var piplup = {
    name: "Piplup",
    dex: 393,
    alola: -1,
    type: "Water",
    ability: "Torrent/None/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/393.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/393.png"
};

var prinplup = {
    name: "Prinplup",
    dex: 394,
    alola: -1,
    type: "Water",
    ability: "Torrent/None/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/394.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/394.png"
};

var empoleon = {
    name: "Empoleon",
    dex: 395,
    alola: -1,
    type: "Water/Steel",
    ability: "Torrent/None/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/395.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/395.png"
};

var starly = {
    name: "Starly",
    dex: 396,
    alola: -1,
    type: "Normal/Flying",
    ability: "Keen Eye/None/Reckless/VI",
    wiki: "http://www.serebii.net/pokedex-sm/396.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/396.png"
};

var staravia = {
    name: "Staravia",
    dex: 397,
    alola: -1,
    type: "Normal/Flying",
    ability: "Intimidate/None/Reckless",
    wiki: "http://www.serebii.net/pokedex-sm/397.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/397.png"
};

var staraptor = {
    name: "Staraptor",
    dex: 398,
    alola: -1,
    type: "Normal/Flying",
    ability: "Intimidate/None/Reckless",
    wiki: "http://www.serebii.net/pokedex-sm/398.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/398.png"
};

var bidoof = {
    name: "Bidoof",
    dex: 399,
    alola: -1,
    type: "Normal",
    ability: "Simple/Unaware/Moody",
    wiki: "http://www.serebii.net/pokedex-sm/399.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/399.png"
};

var bibarel = {
    name: "Bibarel",
    dex: 400,
    alola: -1,
    type: "Normal/Water",
    ability: "Simple/Unaware/Moody",
    wiki: "http://www.serebii.net/pokedex-sm/400.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/400.png"
};

var kricketot = {
    name: "Kricketot",
    dex: 401,
    alola: -1,
    type: "Bug",
    ability: "Shed Skin/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-sm/401.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/401.png"
};

var kricketune = {
    name: "Kricketune",
    dex: 402,
    alola: -1,
    type: "Bug",
    ability: "Swarm/None/Technician",
    wiki: "http://www.serebii.net/pokedex-sm/402.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/402.png"
};

var shinx = {
    name: "Shinx",
    dex: 403,
    alola: -1,
    type: "Electric",
    ability: "Rivalry/Intimidate/Guts",
    wiki: "http://www.serebii.net/pokedex-sm/403.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/403.png"
};

var luxio = {
    name: "Luxio",
    dex: 404,
    alola: -1,
    type: "Electric",
    ability: "Rivalry/Intimidate/Guts",
    wiki: "http://www.serebii.net/pokedex-sm/404.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/404.png"
};

var luxray = {
    name: "Luxray",
    dex: 405,
    alola: -1,
    type: "Electric",
    ability: "Rivalry/Intimidate/Guts",
    wiki: "http://www.serebii.net/pokedex-sm/405.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/405.png"
};

var budew = {
    name: "Budew",
    dex: 406,
    alola: -1,
    type: "Grass/Poison",
    ability: "Natural Cure/Poison Point/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-sm/406.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/406.png"
};

var roserade = {
    name: "Roserade",
    dex: 407,
    alola: -1,
    type: "Grass/Poison",
    ability: "Natural Cure/Poison Point/Technician",
    wiki: "http://www.serebii.net/pokedex-sm/407.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/407.png"
};

var cranidos = {
    name: "Cranidos",
    dex: 408,
    alola: 188,
    type: "Rock",
    ability: "Mold Breaker/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/408.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/408.png"
};

var rampardos = {
    name: "Rampardos",
    dex: 409,
    alola: 189,
    type: "Rock",
    ability: "Mold Breaker/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/409.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/409.png"
};

var shieldon = {
    name: "Shieldon",
    dex: 410,
    alola: 190,
    type: "Rock/Steel",
    ability: "Sturdy/None/Soundproof",
    wiki: "http://www.serebii.net/pokedex-sm/410.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/410.png"
};

var bastiodon = {
    name: "Bastiodon",
    dex: 411,
    alola: 191,
    type: "Rock/Steel",
    ability: "Sturdy/None/Soundproof",
    wiki: "http://www.serebii.net/pokedex-sm/411.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/411.png"
};

var burmy = {
    name: "Burmy",
    dex: 412,
    alola: -1,
    type: "Bug",
    ability: "Shed Skin/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/412.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/412.png"
};

var wormadam = {
    name: "Wormadam",
    dex: 413,
    alola: -1,
    type: "Bug/Grass",
    ability: "Anticipation/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/413.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/413.png"
};

var wormadam_sandy = {
    name: "Wormadam Sandy",
    dex: 413,
    alola: -1,
    type: "Bug/Ground",
    ability: "Anticipation/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/413.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/413-c.png"
};

var wormadam_trash = {
    name: "Wormadam Trash",
    dex: 413,
    alola: -1,
    type: "Bug/Steel",
    ability: "Anticipation/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/413.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/413-s.png"
};

var mothim = {
    name: "Mothim",
    dex: 414,
    alola: -1,
    type: "Bug/Flying",
    ability: "Swarm/None/Tinted Lens",
    wiki: "http://www.serebii.net/pokedex-sm/414.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/414.png"
};

var combee = {
    name: "Combee",
    dex: 415,
    alola: -1,
    type: "Bug/Flying",
    ability: "Honey Gather/None/Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/415.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/415.png"
};

var vespiquen = {
    name: "Vespiquen",
    dex: 416,
    alola: -1,
    type: "Bug/Flying",
    ability: "Pressure/None/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/416.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/416.png"
};

var pachirisu = {
    name: "Pachirisu",
    dex: 417,
    alola: -1,
    type: "Electric",
    ability: "Run Away/Pickup/Volt Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/417.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/417.png"
};

var buizel = {
    name: "Buizel",
    dex: 418,
    alola: -1,
    type: "Water",
    ability: "Swift Swim/None/Water Veil",
    wiki: "http://www.serebii.net/pokedex-sm/418.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/418.png"
};

var floatzel = {
    name: "Floatzel",
    dex: 419,
    alola: -1,
    type: "Water",
    ability: "Swift Swim/None/Water Veil",
    wiki: "http://www.serebii.net/pokedex-sm/419.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/419.png"
};

var cherubi = {
    name: "Cherubi",
    dex: 420,
    alola: -1,
    type: "Grass",
    ability: "Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-sm/420.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/420.png"
};

var cherrim = {
    name: "Cherrim",
    dex: 421,
    alola: -1,
    type: "Grass",
    ability: "Flower Gift",
    wiki: "http://www.serebii.net/pokedex-sm/421.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/421.png"
};

var shellos = {
    name: "Shellos",
    dex: 422,
    alola: 260,
    type: "Water",
    ability: "Sticky Hold/Storm Drain/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/422.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/422.png"
};

var gastrodon = {
    name: "Gastrodon",
    dex: 423,
    alola: 261,
    type: "Water/Ground",
    ability: "Sticky Hold/Storm Drain/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/423.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/423.png"
};

var ambipom = {
    name: "Ambipom",
    dex: 424,
    alola: -1,
    type: "Normal",
    ability: "Technician/Pickup/Skill Link",
    wiki: "http://www.serebii.net/pokedex-sm/424.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/424.png"
};

var drifloon = {
    name: "Drifloon",
    dex: 425,
    alola: 064,
    type: "Ghost/Flying",
    ability: "Aftermath/Unburden/Flare Boost",
    wiki: "http://www.serebii.net/pokedex-sm/425.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/425.png"
};

var drifblim = {
    name: "Drifblim",
    dex: 426,
    alola: 065,
    type: "Ghost/Flying",
    ability: "Aftermath/Unburden/Flare Boost",
    wiki: "http://www.serebii.net/pokedex-sm/426.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/426.png"
};

var buneary = {
    name: "Buneary",
    dex: 427,
    alola: -1,
    type: "Normal",
    ability: "Run Away/Klutz/Limber",
    wiki: "http://www.serebii.net/pokedex-sm/427.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/427.png"
};

var lopunny = {
    name: "Lopunny",
    dex: 428,
    alola: -1,
    type: "Normal",
    ability: "Cute Charm/Klutz/Limber",
    wiki: "http://www.serebii.net/pokedex-sm/428.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/428.png"
};

var mismagius = {
    name: "Mismagius",
    dex: 429,
    alola: 067,
    type: "Ghost",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/429.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/429.png"
};

var honchkrow = {
    name: "Honchkrow",
    dex: 430,
    alola: 278,
    type: "Dark/Flying",
    ability: "Insomnia/Super Luck/Moxie",
    wiki: "http://www.serebii.net/pokedex-sm/430.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/430.png"
};

var glameow = {
    name: "Glameow",
    dex: 431,
    alola: -1,
    type: "Normal",
    ability: "Limber/Own Tempo/Keen Eye",
    wiki: "http://www.serebii.net/pokedex-sm/431.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/431.png"
};

var purugly = {
    name: "Purugly",
    dex: 432,
    alola: -1,
    type: "Normal",
    ability: "Thick Fat/Own Tempo/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/432.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/432.png"
};

var chingling = {
    name: "Chingling",
    dex: 433,
    alola: -1,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/433.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/433.png"
};

var stunky = {
    name: "Stunky",
    dex: 434,
    alola: -1,
    type: "Poison/Dark",
    ability: "Stench/Aftermath/Keen Eye",
    wiki: "http://www.serebii.net/pokedex-sm/434.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/434.png"
};

var skuntank = {
    name: "Skuntank",
    dex: 435,
    alola: -1,
    type: "Poison/Dark",
    ability: "Stench/Aftermath/Keen Eye",
    wiki: "http://www.serebii.net/pokedex-sm/435.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/435.png"
};

var bronzor = {
    name: "Bronzor",
    dex: 436,
    alola: -1,
    type: "Steel/Psychic",
    ability: "Levitate/Heatproof/Heavy Metal",
    wiki: "http://www.serebii.net/pokedex-sm/436.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/436.png"
};

var bronzong = {
    name: "Bronzong",
    dex: 437,
    alola: -1,
    type: "Steel/Psychic",
    ability: "Levitate/Heatproof/Heavy Metal",
    wiki: "http://www.serebii.net/pokedex-sm/437.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/437.png"
};

var bonsly = {
    name: "Bonsly",
    dex: 438,
    alola: 030,
    type: "Rock",
    ability: "Sturdy/Rock Head/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/438.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/438.png"
};

var mime_jr = {
    name: "Mime Jr.",
    dex: 439,
    alola: -1,
    type: "Psychic/Fairy",
    ability: "Soundproof/Filter/Technician",
    wiki: "http://www.serebii.net/pokedex-sm/439.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/439.png"
};

var happiny = {
    name: "Happiny",
    dex: 440,
    alola: 032,
    type: "Normal",
    ability: "Natural Cure/Serene Grace/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-sm/440.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/440.png"
};

var chatot = {
    name: "Chatot",
    dex: 441,
    alola: -1,
    type: "Normal/Flying",
    ability: "Keen Eye/Tangled Feet/Big Pecks",
    wiki: "http://www.serebii.net/pokedex-sm/441.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/441.png"
};

var spiritomb = {
    name: "Spiritomb",
    dex: 442,
    alola: -1,
    type: "Ghost/Dark",
    ability: "Pressure/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/442.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/442.png"
};

var gible = {
    name: "Gible",
    dex: 443,
    alola: 238,
    type: "Dragon/Ground",
    ability: "Sand Veil/None/Rough Skin",
    wiki: "http://www.serebii.net/pokedex-sm/443.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/443.png"
};

var gabite = {
    name: "Gabite",
    dex: 444,
    alola: 239,
    type: "Dragon/Ground",
    ability: "Sand Veil/None/Rough Skin",
    wiki: "http://www.serebii.net/pokedex-sm/444.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/444.png"
};

var garchomp = {
    name: "Garchomp",
    dex: 445,
    alola: 240,
    type: "Dragon/Ground",
    ability: "Sand Veil/None/Rough Skin",
    wiki: "http://www.serebii.net/pokedex-sm/445.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/445.png"
};

var munchlax = {
    name: "Munchlax",
    dex: 446,
    alola: 035,
    type: "Normal",
    ability: "Pickup/Thick Fat/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/446.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/446.png"
};

var riolu = {
    name: "Riolu",
    dex: 447,
    alola: 279,
    type: "Fighting",
    ability: "Steadfast/Inner Focus/Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/447.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/447.png"
};

var lucario = {
    name: "Lucario",
    dex: 448,
    alola: 280,
    type: "Fighting/Steel",
    ability: "Steadfast/Inner Focus/Justified",
    wiki: "http://www.serebii.net/pokedex-sm/448.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/448.png"
};

var hippopotas = {
    name: "Hippopotas",
    dex: 449,
    alola: -1,
    type: "Ground",
    ability: "Sand Stream/None/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/449.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/449.png"
};

var hippowdon = {
    name: "Hippowdon",
    dex: 450,
    alola: -1,
    type: "Ground",
    ability: "Sand Stream/None/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/450.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/450.png"
};

var skorupi = {
    name: "Skorupi",
    dex: 451,
    alola: -1,
    type: "Poison/Bug",
    ability: "Battle Armor/Sniper/Keen Eye",
    wiki: "http://www.serebii.net/pokedex-sm/451.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/451.png"
};

var drapion = {
    name: "Drapion",
    dex: 452,
    alola: -1,
    type: "Poison/Dark",
    ability: "Battle Armor/Sniper/Keen Eye",
    wiki: "http://www.serebii.net/pokedex-sm/452.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/452.png"
};

var croagunk = {
    name: "Croagunk",
    dex: 453,
    alola: -1,
    type: "Poison/Fighting",
    ability: "Anticipation/Dry Skin/Poison Touch",
    wiki: "http://www.serebii.net/pokedex-sm/453.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/453.png"
};

var toxicroak = {
    name: "Toxicroak",
    dex: 454,
    alola: -1,
    type: "Poison/Fighting",
    ability: "Anticipation/Dry Skin/Poison Touch",
    wiki: "http://www.serebii.net/pokedex-sm/454.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/454.png"
};

var carnivine = {
    name: "Carnivine",
    dex: 455,
    alola: -1,
    type: "Grass",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/455.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/455.png"
};

var finneon = {
    name: "Finneon",
    dex: 456,
    alola: 108,
    type: "Water",
    ability: "Swift Swim/Storm Drain/Water Veil",
    wiki: "http://www.serebii.net/pokedex-sm/456.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/456.png"
};

var lumineon = {
    name: "Lumineon",
    dex: 457,
    alola: 109,
    type: "Water",
    ability: "Swift Swim/Storm Drain/Water Veil",
    wiki: "http://www.serebii.net/pokedex-sm/457.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/457.png"
};

var mantyke = {
    name: "Mantyke",
    dex: 458,
    alola: -1,
    type: "Water/Flying",
    ability: "Swift Swim/Water Absorb/Water Veil",
    wiki: "http://www.serebii.net/pokedex-sm/458.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/458.png"
};

var snover = {
    name: "Snover",
    dex: 459,
    alola: -1,
    type: "Grass/Ice",
    ability: "Snow Warning/None/Soundproof",
    wiki: "http://www.serebii.net/pokedex-sm/459.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/459.png"
};

var abomasnow = {
    name: "Abomasnow",
    dex: 460,
    alola: -1,
    type: "Grass/Ice",
    ability: "Snow Warning/None/Soundproof",
    wiki: "http://www.serebii.net/pokedex-sm/460.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/460.png"
};

var weavile = {
    name: "Weavile",
    dex: 461,
    alola: 250,
    type: "Dark/Ice",
    ability: "Pressure/None/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-sm/461.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/461.png"
};

var magnezone = {
    name: "Magnezone",
    dex: 462,
    alola: 049,
    type: "Electric/Steel",
    ability: "Magnet Pull/Sturdy/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/462.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/462.png"
};

var lickilicky = {
    name: "Lickilicky",
    dex: 463,
    alola: -1,
    type: "Normal",
    ability: "Own Tempo/Oblivious/Cloud Nine",
    wiki: "http://www.serebii.net/pokedex-sm/463.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/463.png"
};

var rhyperior = {
    name: "Rhyperior",
    dex: 464,
    alola: -1,
    type: "Ground/Rock",
    ability: "Lightning Rod/Solid Rock/Reckless",
    wiki: "http://www.serebii.net/pokedex-sm/464.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/464.png"
};

var tangrowth = {
    name: "Tangrowth",
    dex: 465,
    alola: -1,
    type: "Grass",
    ability: "Chlorophyll/Leaf Guard/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/465.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/465.png"
};

var electivire = {
    name: "Electivire",
    dex: 466,
    alola: 228,
    type: "Electric",
    ability: "Motor Drive/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-sm/466.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/466.png"
};

var magmortar = {
    name: "Magmortar",
    dex: 467,
    alola: 168,
    type: "Fire",
    ability: "Flame Body/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-sm/467.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/467.png"
};

var togekiss = {
    name: "Togekiss",
    dex: 468,
    alola: -1,
    type: "Fairy/Flying",
    ability: "Hustle/Serene Grace/Super Luck",
    wiki: "http://www.serebii.net/pokedex-sm/468.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/468.png"
};

var yanmega = {
    name: "Yanmega",
    dex: 469,
    alola: -1,
    type: "Bug/Flying",
    ability: "Speed Boost/Tinted Lens/Frisk",
    wiki: "http://www.serebii.net/pokedex-sm/469.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/469.png"
};

var leafeon = {
    name: "Leafeon",
    dex: 470,
    alola: 129,
    type: "Grass",
    ability: "Leaf Guard/None/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-sm/470.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/470.png"
};

var glaceon = {
    name: "Glaceon",
    dex: 471,
    alola: 130,
    type: "Ice",
    ability: "Snow Cloak/None/Ice Body",
    wiki: "http://www.serebii.net/pokedex-sm/471.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/471.png"
};

var gliscor = {
    name: "Gliscor",
    dex: 472,
    alola: -1,
    type: "Ground/Flying",
    ability: "Hyper Cutter/Sand Veil/Poison Heal",
    wiki: "http://www.serebii.net/pokedex-sm/472.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/472.png"
};

var mamoswine = {
    name: "Mamoswine",
    dex: 473,
    alola: -1,
    type: "Ice/Ground",
    ability: "Oblivious/Snow Cloak/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-sm/473.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/473.png"
};

var porygon_z = {
    name: "Porygon-Z",
    dex: 474,
    alola: -1,
    type: "Normal",
    ability: "Adaptability/Download/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/474.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/474.png"
};

var gallade = {
    name: "Gallade",
    dex: 475,
    alola: -1,
    type: "Psychic/Fighting",
    ability: "Steadfast/None/Justified",
    wiki: "http://www.serebii.net/pokedex-sm/475.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/475.png"
};

var probopass = {
    name: "Probopass",
    dex: 476,
    alola: 199,
    type: "Rock/Steel",
    ability: "Sturdy/Magnet Pull/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/476.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/476.png"
};

var dusknoir = {
    name: "Dusknoir",
    dex: 477,
    alola: -1,
    type: "Ghost",
    ability: "Pressure/None/Frisk/VI",
    wiki: "http://www.serebii.net/pokedex-sm/477.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/477.png"
};

var froslass = {
    name: "Froslass",
    dex: 478,
    alola: 248,
    type: "Ice/Ghost",
    ability: "Snow Cloak/None/Cursed Body",
    wiki: "http://www.serebii.net/pokedex-sm/478.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/478.png"
};

var rotom = {
    name: "Rotom",
    dex: 479,
    alola: -1,
    type: "Electric/Ghost",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/479.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/479.png"
};

var rotom_heat = {
    name: "Rotom Heat",
    dex: 479,
    alola: -1,
    type: "Electric/Fire",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/479.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/479-h.png"
};

var rotom_wash = {
    name: "Rotom Wash",
    dex: 479,
    alola: -1,
    type: "Electric/Water",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/479.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/479-w.png"
};

var rotom_mow = {
    name: "Rotom Mow",
    dex: 479,
    alola: -1,
    type: "Electric/Grass",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/479.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/479-m.png"
};

var rotom_fan = {
    name: "Rotom Fan",
    dex: 479,
    alola: -1,
    type: "Electric/Flying",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/479.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/479-s.png"
};

var rotom_frost = {
    name: "Rotom Frost",
    dex: 479,
    alola: -1,
    type: "Electric/Frost",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/479.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/479-f.png"
};

var uxie = {
    name: "Uxie",
    dex: 480,
    alola: -1,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/480.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/480.png"
};

var mesprit = {
    name: "Mesprit",
    dex: 481,
    alola: -1,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/481.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/481.png"
};

var azelf = {
    name: "Azelf",
    dex: 482,
    alola: -1,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/482.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/482.png"
};

var dialga = {
    name: "Dialga",
    dex: 483,
    alola: -1,
    type: "Steel/Dragon",
    ability: "Pressure/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/483.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/483.png"
};

var palkia = {
    name: "Palkia",
    dex: 484,
    alola: -1,
    type: "Water/Dragon",
    ability: "Pressure/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/484.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/484.png"
};

var heatran = {
    name: "Heatran",
    dex: 485,
    alola: -1,
    type: "Fire/Steel",
    ability: "Flash Fire/None/Flame Body",
    wiki: "http://www.serebii.net/pokedex-sm/485.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/485.png"
};

var regigigas = {
    name: "Regigigas",
    dex: 486,
    alola: -1,
    type: "Normal",
    ability: "Slow Start",
    wiki: "http://www.serebii.net/pokedex-sm/486.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/486.png"
};

var giratina = {
    name: "Giratina",
    dex: 487,
    alola: -1,
    type: "Ghost/Dragon",
    ability: "Pressure/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/487.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/487.png"
};

var giratina_origin = {
    name: "Giratina",
    dex: 487,
    alola: -1,
    type: "Ghost/Dragon",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/487.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/487-o.png"
};

var cresselia = {
    name: "Cresselia",
    dex: 488,
    alola: -1,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/488.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/488.png"
};

var phione = {
    name: "Phione",
    dex: 489,
    alola: -1,
    type: "Water",
    ability: "Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/489.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/489.png"
};

var manaphy = {
    name: "Manaphy",
    dex: 490,
    alola: -1,
    type: "Water",
    ability: "Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/490.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/490.png"
};

var darkrai = {
    name: "Darkrai",
    dex: 491,
    alola: -1,
    type: "Dark",
    ability: "Bad Dreams",
    wiki: "http://www.serebii.net/pokedex-sm/491.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/491.png"
};

var shaymin = {
    name: "Shaymin",
    dex: 492,
    alola: -1,
    type: "Grass",
    ability: "Natural Cure",
    wiki: "http://www.serebii.net/pokedex-sm/492.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/492.png"
};

var shaymin_sky = {
    name: "Shaymin Sky",
    dex: 492,
    alola: -1,
    type: "Grass/Flying",
    ability: "Serene Grace",
    wiki: "http://www.serebii.net/pokedex-sm/492.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/492-s.png"
};

var arceus = {
    name: "Arceus",
    dex: 493,
    alola: -1,
    type: "Normal",
    ability: "Multitype",
    wiki: "http://www.serebii.net/pokedex-sm/493.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/493.png"
};

var victini = {
    name: "Victini",
    dex: 494,
    alola: -1,
    type: "Psychic/Fire",
    ability: "Victory Star",
    wiki: "http://www.serebii.net/pokedex-sm/494.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/494.png"
};

var snivy = {
    name: "Snivy",
    dex: 495,
    alola: -1,
    type: "Grass",
    ability: "Overgrow/None/Contrary",
    wiki: "http://www.serebii.net/pokedex-sm/495.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/495.png"
};

var servine = {
    name: "Servine",
    dex: 496,
    alola: -1,
    type: "Grass",
    ability: "Overgrow/None/Contrary",
    wiki: "http://www.serebii.net/pokedex-sm/496.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/496.png"
};

var serperior = {
    name: "Serperior",
    dex: 497,
    alola: -1,
    type: "Grass",
    ability: "Overgrow/None/Contrary",
    wiki: "http://www.serebii.net/pokedex-sm/497.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/497.png"
};

var tepig = {
    name: "Tepig",
    dex: 498,
    alola: -1,
    type: "Fire",
    ability: "Blaze/None/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-sm/498.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/498.png"
};

var pignite = {
    name: "Pignite",
    dex: 499,
    alola: -1,
    type: "Fire/Fighting",
    ability: "Blaze/None/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-sm/499.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/499.png"
};

var emboar = {
    name: "Emboar",
    dex: 500,
    alola: -1,
    type: "Fire/Fighting",
    ability: "Blaze/None/Reckless",
    wiki: "http://www.serebii.net/pokedex-sm/500.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/500.png"
};

var oshawott = {
    name: "Oshawott",
    dex: 501,
    alola: -1,
    type: "Water",
    ability: "Torrent/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/501.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/501.png"
};

var dewott = {
    name: "Dewott",
    dex: 502,
    alola: -1,
    type: "Water",
    ability: "Torrent/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/502.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/502.png"
};

var samurott = {
    name: "Samurott",
    dex: 503,
    alola: -1,
    type: "Water",
    ability: "Torrent/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/503.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/503.png"
};

var patrat = {
    name: "Patrat",
    dex: 504,
    alola: -1,
    type: "Normal",
    ability: "Run Away/Keen Eye/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/504.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/504.png"
};

var watchog = {
    name: "Watchog",
    dex: 505,
    alola: -1,
    type: "Normal",
    ability: "Illuminate/Keen Eye/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/505.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/505.png"
};

var lillipup = {
    name: "Lillipup",
    dex: 506,
    alola: 120,
    type: "Normal",
    ability: "Vital Spirit/Pickup/Run Away",
    wiki: "http://www.serebii.net/pokedex-sm/506.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/506.png"
};

var herdier = {
    name: "Herdier",
    dex: 507,
    alola: 121,
    type: "Normal",
    ability: "Intimidate/Sand Rush/Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/507.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/507.png"
};

var stoutland = {
    name: "Stoutland",
    dex: 508,
    alola: 122,
    type: "Normal",
    ability: "Intimidate/Sand Rush/Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/508.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/508.png"
};

var purrloin = {
    name: "Purrloin",
    dex: 509,
    alola: -1,
    type: "Dark",
    ability: "Limber/Unburden/Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/509.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/509.png"
};

var liepard = {
    name: "Liepard",
    dex: 510,
    alola: -1,
    type: "Dark",
    ability: "Limber/Unburden/Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/510.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/510.png"
};

var pansage = {
    name: "Pansage",
    dex: 511,
    alola: -1,
    type: "Grass",
    ability: "Gluttony/None/Overgrow",
    wiki: "http://www.serebii.net/pokedex-sm/511.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/511.png"
};

var simisage = {
    name: "Simisage",
    dex: 512,
    alola: -1,
    type: "Grass",
    ability: "Gluttony/None/Overgrow",
    wiki: "http://www.serebii.net/pokedex-sm/512.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/512.png"
};

var pansear = {
    name: "Pansear",
    dex: 513,
    alola: -1,
    type: "Fire",
    ability: "Gluttony/None/Blaze",
    wiki: "http://www.serebii.net/pokedex-sm/513.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/513.png"
};

var simisear = {
    name: "Simisear",
    dex: 514,
    alola: -1,
    type: "Fire",
    ability: "Gluttony/None/Blaze",
    wiki: "http://www.serebii.net/pokedex-sm/514.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/514.png"
};

var panpour = {
    name: "Panpour",
    dex: 515,
    alola: -1,
    type: "Water",
    ability: "Gluttony/None/Torrent",
    wiki: "http://www.serebii.net/pokedex-sm/515.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/515.png"
};

var simipour = {
    name: "Simipour",
    dex: 516,
    alola: -1,
    type: "Water",
    ability: "Gluttony/None/Torrent",
    wiki: "http://www.serebii.net/pokedex-sm/516.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/516.png"
};

var munna = {
    name: "Munna",
    dex: 517,
    alola: -1,
    type: "Psychic",
    ability: "Forewarn/Synchronize/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/517.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/517.png"
};

var musharna = {
    name: "Musharna",
    dex: 518,
    alola: -1,
    type: "Psychic",
    ability: "Forewarn/Synchronize/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/518.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/518.png"
};

var pidove = {
    name: "Pidove",
    dex: 519,
    alola: -1,
    type: "Normal/Flying",
    ability: "Big Pecks/Super Luck/Rivalry",
    wiki: "http://www.serebii.net/pokedex-sm/519.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/519.png"
};

var tranquill = {
    name: "Tranquill",
    dex: 520,
    alola: -1,
    type: "Normal/Flying",
    ability: "Big Pecks/Super Luck/Rivalry",
    wiki: "http://www.serebii.net/pokedex-sm/520.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/520.png"
};

var unfezant = {
    name: "Unfezant",
    dex: 521,
    alola: -1,
    type: "Normal/Flying",
    ability: "Big Pecks/Super Luck/Rivalry",
    wiki: "http://www.serebii.net/pokedex-sm/521.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/521.png"
};

var blitzle = {
    name: "Blitzle",
    dex: 522,
    alola: -1,
    type: "Electric",
    ability: "Lightning Rod/Motor Drive/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-sm/522.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/522.png"
};

var zebstrika = {
    name: "Zebstrika",
    dex: 523,
    alola: -1,
    type: "Electric",
    ability: "Lightning Rod/Motor Drive/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-sm/523.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/523.png"
};

var roggenrola = {
    name: "Roggenrola",
    dex: 524,
    alola: 098,
    type: "Rock",
    ability: "Sturdy/None/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/524.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/524.png"
};

var boldore = {
    name: "Boldore",
    dex: 525,
    alola: 099,
    type: "Rock",
    ability: "Sturdy/None/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/525.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/525.png"
};

var gigalith = {
    name: "Gigalith",
    dex: 526,
    alola: 100,
    type: "Rock",
    ability: "Sturdy/None/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/526.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/526.png"
};

var woobat = {
    name: "Woobat",
    dex: 527,
    alola: -1,
    type: "Psychic/Flying",
    ability: "Unaware/Klutz/Simple",
    wiki: "http://www.serebii.net/pokedex-sm/527.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/527.png"
};

var swoobat = {
    name: "Swoobat",
    dex: 528,
    alola: -1,
    type: "Psychic/Flying",
    ability: "Unaware/Klutz/Simple",
    wiki: "http://www.serebii.net/pokedex-sm/528.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/528.png"
};

var drilbur = {
    name: "Drilbur",
    dex: 529,
    alola: -1,
    type: "Ground",
    ability: "Sand Rush/Sand Force/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/529.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/529.png"
};

var excadrill = {
    name: "Excadrill",
    dex: 530,
    alola: -1,
    type: "Ground/Steel",
    ability: "Sand Rush/Sand Force/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/530.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/530.png"
};

var audino = {
    name: "Audino",
    dex: 531,
    alola: -1,
    type: "Normal",
    ability: "Healer/Regenerator/Klutz",
    wiki: "http://www.serebii.net/pokedex-sm/531.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/531.png"
};

var timburr = {
    name: "Timburr",
    dex: 532,
    alola: -1,
    type: "Fighting",
    ability: "Guts/Sheer Force/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-sm/532.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/532.png"
};

var gurdurr = {
    name: "Gurdurr",
    dex: 533,
    alola: -1,
    type: "Fighting",
    ability: "Guts/Sheer Force/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-sm/533.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/533.png"
};

var conkeldurr = {
    name: "Conkeldurr",
    dex: 534,
    alola: -1,
    type: "Fighting",
    ability: "Guts/Sheer Force/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-sm/534.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/534.png"
};

var tympole = {
    name: "Tympole",
    dex: 535,
    alola: -1,
    type: "Water",
    ability: "Swift Swim/Hydration/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/535.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/535.png"
};

var palpitoad = {
    name: "Palpitoad",
    dex: 536,
    alola: -1,
    type: "Water/Ground",
    ability: "Swift Swim/Hydration/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/536.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/536.png"
};

var seismitoad = {
    name: "Seismitoad",
    dex: 537,
    alola: -1,
    type: "Water/Ground",
    ability: "Swift Swim/Poison Touch/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/537.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/537.png"
};

var throh = {
    name: "Throh",
    dex: 538,
    alola: -1,
    type: "Fighting",
    ability: "Guts/Inner Focus/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/538.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/538.png"
};

var sawk = {
    name: "Sawk",
    dex: 539,
    alola: -1,
    type: "Fighting",
    ability: "Sturdy/Inner Focus/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/539.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/539.png"
};

var sewaddle = {
    name: "Sewaddle",
    dex: 540,
    alola: -1,
    type: "Bug/Grass",
    ability: "Swarm/Chlorophyll/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/540.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/540.png"
};

var swadloon = {
    name: "Swadloon",
    dex: 541,
    alola: -1,
    type: "Bug/Grass",
    ability: "Leaf Guard/Chlorophyll/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/541.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/541.png"
};

var leavanny = {
    name: "Leavanny",
    dex: 542,
    alola: -1,
    type: "Bug/Grass",
    ability: "Swarm/Chlorophyll/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/542.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/542.png"
};

var venipede = {
    name: "Venipede",
    dex: 543,
    alola: -1,
    type: "Bug/Poison",
    ability: "Poison Point/Swarm/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/543.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/543.png"
};

var whirlipede = {
    name: "Whirlipede",
    dex: 544,
    alola: -1,
    type: "Bug/Poison",
    ability: "Poison Point/Swarm/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/544.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/544.png"
};

var scolipede = {
    name: "Scolipede",
    dex: 545,
    alola: -1,
    type: "Bug/Poison",
    ability: "Poison Point/Swarm/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/545.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/545.png"
};

var cottonee = {
    name: "Cottonee",
    dex: 546,
    alola: 087,
    type: "Grass",
    ability: "Prankster/Infiltrator/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-sm/546.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/546.png"
};

var whimsicott = {
    name: "Whimsicott",
    dex: 547,
    alola: 088,
    type: "Grass/Fairy",
    ability: "Prankster/Infiltrator/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-sm/547.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/547.png"
};

var petilil = {
    name: "Petilil",
    dex: 548,
    alola: 085,
    type: "Grass",
    ability: "Chlorophyll/Own Tempo/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-sm/548.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/548.png"
};

var lilligant = {
    name: "Lilligant",
    dex: 549,
    alola: 086,
    type: "Grass",
    ability: "Chlorophyll/Own Tempo/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-sm/549.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/549.png"
};

var basculin = {
    name: "Basculin",
    dex: 550,
    alola: -1,
    type: "Water",
    ability: "Reckless/Adaptability/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/550.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/550.png"
};

var basculin_blue = {
    name: "Basculin Blue",
    dex: 550,
    alola: -1,
    type: "Water",
    ability: "Rock Head/Adaptability/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/550.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/550-b.png"
};

var sandile = {
    name: "Sandile",
    dex: 551,
    alola: 232,
    type: "Ground/Dark",
    ability: "Intimidate/Moxie/Anger Point",
    wiki: "http://www.serebii.net/pokedex-sm/551.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/551.png"
};

var krokorok = {
    name: "Krokorok",
    dex: 552,
    alola: 233,
    type: "Ground/Dark",
    ability: "Intimidate/Moxie/Anger Point",
    wiki: "http://www.serebii.net/pokedex-sm/552.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/552.png"
};

var krookodile = {
    name: "Krookodile",
    dex: 553,
    alola: 234,
    type: "Ground/Dark",
    ability: "Intimidate/Moxie/Anger Point",
    wiki: "http://www.serebii.net/pokedex-sm/553.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/553.png"
};

var darumaka = {
    name: "Darumaka",
    dex: 554,
    alola: -1,
    type: "Fire",
    ability: "Hustle/None/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/554.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/554.png"
};

var darmanitan = {
    name: "Darmanitan",
    dex: 555,
    alola: -1,
    type: "Fire",
    ability: "Sheer Force/None/Zen Mode",
    wiki: "http://www.serebii.net/pokedex-sm/555.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/555.png"
};

var darmanitan_zen = {
    name: "Darmanitan Zen",
    dex: 555,
    alola: -1,
    type: "Fire/Psychic",
    ability: "Zen Mode",
    wiki: "http://www.serebii.net/pokedex-sm/555.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/555-d.png"
};

var maractus = {
    name: "Maractus",
    dex: 556,
    alola: -1,
    type: "Grass",
    ability: "Water Absorb/Chlorophyll/Storm Drain",
    wiki: "http://www.serebii.net/pokedex-sm/556.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/556.png"
};

var dwebble = {
    name: "Dwebble",
    dex: 557,
    alola: -1,
    type: "Bug/Rock",
    ability: "Sturdy/Shell Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/557.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/557.png"
};

var crustle = {
    name: "Crustle",
    dex: 558,
    alola: -1,
    type: "Bug/Rock",
    ability: "Sturdy/Shell Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/558.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/558.png"
};

var scraggy = {
    name: "Scraggy",
    dex: 559,
    alola: -1,
    type: "Dark/Fighting",
    ability: "Shed Skin/Moxie/Intimidate",
    wiki: "http://www.serebii.net/pokedex-sm/559.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/559.png"
};

var scrafty = {
    name: "Scrafty",
    dex: 560,
    alola: -1,
    type: "Dark/Fighting",
    ability: "Shed Skin/Moxie/Intimidate",
    wiki: "http://www.serebii.net/pokedex-sm/560.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/560.png"
};

var sigilyph = {
    name: "Sigilyph",
    dex: 561,
    alola: -1,
    type: "Psychic/Flying",
    ability: "Wonder Skin/Magic Guard/Tinted Lens",
    wiki: "http://www.serebii.net/pokedex-sm/561.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/561.png"
};

var yamask = {
    name: "Yamask",
    dex: 562,
    alola: -1,
    type: "Ghost",
    ability: "Mummy",
    wiki: "http://www.serebii.net/pokedex-sm/562.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/562.png"
};

var cofagrigus = {
    name: "Cofagrigus",
    dex: 563,
    alola: -1,
    type: "Ghost",
    ability: "Mummy",
    wiki: "http://www.serebii.net/pokedex-sm/563.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/563.png"
};

var tirtouga = {
    name: "Tirtouga",
    dex: 564,
    alola: 194,
    type: "Water/Rock",
    ability: "Solid Rock/Sturdy/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/564.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/564.png"
};

var carracosta = {
    name: "Carracosta",
    dex: 565,
    alola: 195,
    type: "Water/Rock",
    ability: "Solid Rock/Sturdy/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/565.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/565.png"
};

var archen = {
    name: "Archen",
    dex: 566,
    alola: 192,
    type: "Rock/Flying",
    ability: "Defeatist",
    wiki: "http://www.serebii.net/pokedex-sm/566.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/566.png"
};

var archeops = {
    name: "Archeops",
    dex: 567,
    alola: 193,
    type: "Rock/Flying",
    ability: "Defeatist",
    wiki: "http://www.serebii.net/pokedex-sm/567.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/567.png"
};

var trubbish = {
    name: "Trubbish",
    dex: 568,
    alola: 206,
    type: "Poison",
    ability: "Stench/Sticky Hold/Aftermath",
    wiki: "http://www.serebii.net/pokedex-sm/568.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/568.png"
};

var garbodor = {
    name: "Garbodor",
    dex: 569,
    alola: 207,
    type: "Poison",
    ability: "Stench/Weak Armor/Aftermath",
    wiki: "http://www.serebii.net/pokedex-sm/569.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/569.png"
};

var zorua = {
    name: "Zorua",
    dex: 570,
    alola: -1,
    type: "Dark",
    ability: "Illusion",
    wiki: "http://www.serebii.net/pokedex-sm/570.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/570.png"
};

var zoroark = {
    name: "Zoroark",
    dex: 571,
    alola: -1,
    type: "Dark",
    ability: "Illusion",
    wiki: "http://www.serebii.net/pokedex-sm/571.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/571.png"
};

var minccino = {
    name: "Minccino",
    dex: 572,
    alola: -1,
    type: "Normal",
    ability: "Cute Charm/Technician/Skill Link",
    wiki: "http://www.serebii.net/pokedex-sm/572.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/572.png"
};

var cinccino = {
    name: "Cinccino",
    dex: 573,
    alola: -1,
    type: "Normal",
    ability: "Cute Charm/Technician/Skill Link",
    wiki: "http://www.serebii.net/pokedex-sm/573.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/573.png"
};

var gothita = {
    name: "Gothita",
    dex: 574,
    alola: -1,
    type: "Psychic",
    ability: "Frisk/Competitive/Shadow Tag",
    wiki: "http://www.serebii.net/pokedex-sm/574.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/574.png"
};

var gothorita = {
    name: "Gothorita",
    dex: 575,
    alola: -1,
    type: "Psychic",
    ability: "Frisk/Competitive/Shadow Tag",
    wiki: "http://www.serebii.net/pokedex-sm/575.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/575.png"
};

var gothitelle = {
    name: "Gothitelle",
    dex: 576,
    alola: -1,
    type: "Psychic",
    ability: "Frisk/Competitive/Shadow Tag",
    wiki: "http://www.serebii.net/pokedex-sm/576.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/576.png"
};

var solosis = {
    name: "Solosis",
    dex: 577,
    alola: -1,
    type: "Psychic",
    ability: "Overcoat/Magic Guard/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/577.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/577.png"
};

var duosion = {
    name: "Duosion",
    dex: 578,
    alola: -1,
    type: "Psychic",
    ability: "Overcoat/Magic Guard/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/578.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/578.png"
};

var reuniclus = {
    name: "Reuniclus",
    dex: 579,
    alola: -1,
    type: "Psychic",
    ability: "Overcoat/Magic Guard/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/579.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/579.png"
};

var ducklett = {
    name: "Ducklett",
    dex: 580,
    alola: -1,
    type: "Water/Flying",
    ability: "Keen Eye/Big Pecks/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/580.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/580.png"
};

var swanna = {
    name: "Swanna",
    dex: 581,
    alola: -1,
    type: "Water/Flying",
    ability: "Keen Eye/Big Pecks/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/581.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/581.png"
};

var vanillite = {
    name: "Vanillite",
    dex: 582,
    alola: 255,
    type: "Ice",
    ability: "Ice Body/None/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/582.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/582.png"
};

var vanillish = {
    name: "Vanillish",
    dex: 583,
    alola: 256,
    type: "Ice",
    ability: "Ice Body/None/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/583.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/583.png"
};

var vanilluxe = {
    name: "Vanilluxe",
    dex: 584,
    alola: 257,
    type: "Ice",
    ability: "Ice Body/None/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/584.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/584.png"
};

var deerling = {
    name: "Deerling",
    dex: 585,
    alola: -1,
    type: "Normal/Grass",
    ability: "Chlorophyll/Sap Sipper/Serene Grace",
    wiki: "http://www.serebii.net/pokedex-sm/585.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/585.png"
};

var sawsbuck = {
    name: "Sawsbuck",
    dex: 586,
    alola: -1,
    type: "Normal/Grass",
    ability: "Chlorophyll/Sap Sipper/Serene Grace",
    wiki: "http://www.serebii.net/pokedex-sm/586.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/586.png"
};

var emolga = {
    name: "Emolga",
    dex: 587,
    alola: 274,
    type: "Electric/Flying",
    ability: "Static/None/Motor Drive",
    wiki: "http://www.serebii.net/pokedex-sm/587.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/587.png"
};

var karrablast = {
    name: "Karrablast",
    dex: 588,
    alola: -1,
    type: "Bug",
    ability: "Swarm/Shed Skin/No Guard",
    wiki: "http://www.serebii.net/pokedex-sm/588.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/588.png"
};

var escavalier = {
    name: "Escavalier",
    dex: 589,
    alola: -1,
    type: "Bug/Steel",
    ability: "Swarm/Shell Armor/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/589.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/589.png"
};

var foongus = {
    name: "Foongus",
    dex: 590,
    alola: -1,
    type: "Grass/Poison",
    ability: "Effect Spore/None/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/590.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/590.png"
};

var amoonguss = {
    name: "Amoonguss",
    dex: 591,
    alola: -1,
    type: "Grass/Poison",
    ability: "Effect Spore/None/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/591.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/591.png"
};

var frillish = {
    name: "Frillish",
    dex: 592,
    alola: -1,
    type: "Water/Ghost",
    ability: "Water Absorb/Cursed Body/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/592.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/592.png"
};

var jellicent = {
    name: "Jellicent",
    dex: 593,
    alola: -1,
    type: "Water/Ghost",
    ability: "Water Absorb/Cursed Body/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/593.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/593.png"
};

var alomomola = {
    name: "Alomomola",
    dex: 594,
    alola: 157,
    type: "Water",
    ability: "Healer/Hydration/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/594.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/594.png"
};

var joltik = {
    name: "Joltik",
    dex: 595,
    alola: -1,
    type: "Bug/Electric",
    ability: "Compound Eyes/Unnerve/Swarm",
    wiki: "http://www.serebii.net/pokedex-sm/595.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/595.png"
};

var galvantula = {
    name: "Galvantula",
    dex: 596,
    alola: -1,
    type: "Bug/Electric",
    ability: "Compound Eyes/Unnerve/Swarm",
    wiki: "http://www.serebii.net/pokedex-sm/596.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/596.png"
};

var ferroseed = {
    name: "Ferroseed",
    dex: 597,
    alola: -1,
    type: "Grass/Steel",
    ability: "Iron Barbs",
    wiki: "http://www.serebii.net/pokedex-sm/597.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/597.png"
};

var ferrothorn = {
    name: "Ferrothorn",
    dex: 598,
    alola: -1,
    type: "Grass/Steel",
    ability: "Iron Barbs/None/Anticipation/VI",
    wiki: "http://www.serebii.net/pokedex-sm/598.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/598.png"
};

var klink = {
    name: "Klink",
    dex: 599,
    alola: -1,
    type: "Steel",
    ability: "Plus/Minus/Clear Body",
    wiki: "http://www.serebii.net/pokedex-sm/599.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/599.png"
};

var klang = {
    name: "Klang",
    dex: 600,
    alola: -1,
    type: "Steel",
    ability: "Plus/Minus/Clear Body",
    wiki: "http://www.serebii.net/pokedex-sm/600.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/600.png"
};

var klinklang = {
    name: "Klinklang",
    dex: 601,
    alola: -1,
    type: "Steel",
    ability: "Plus/Minus/Clear Body",
    wiki: "http://www.serebii.net/pokedex-sm/601.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/601.png"
};

var tynamo = {
    name: "Tynamo",
    dex: 602,
    alola: -1,
    type: "Electric",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/602.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/602.png"
};

var eelektrik = {
    name: "Eelektrik",
    dex: 603,
    alola: -1,
    type: "Electric",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/603.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/603.png"
};

var eelektross = {
    name: "Eelektross",
    dex: 604,
    alola: -1,
    type: "Electric",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/604.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/604.png"
};

var elgyem = {
    name: "Elgyem",
    dex: 605,
    alola: -1,
    type: "Psychic",
    ability: "Telepathy/Synchronize/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/605.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/605.png"
};

var beheeyem = {
    name: "Beheeyem",
    dex: 606,
    alola: -1,
    type: "Psychic",
    ability: "Telepathy/Synchronize/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/606.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/606.png"
};

var litwick = {
    name: "Litwick",
    dex: 607,
    alola: -1,
    type: "Ghost/Fire",
    ability: "Flash Fire/Flame Body/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/607.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/607.png"
};

var lampent = {
    name: "Lampent",
    dex: 608,
    alola: -1,
    type: "Ghost/Fire",
    ability: "Flash Fire/Flame Body/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/608.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/608.png"
};

var chandelure = {
    name: "Chandelure",
    dex: 609,
    alola: -1,
    type: "Ghost/Fire",
    ability: "Flash Fire/Flame Body/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/609.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/609.png"
};

var axew = {
    name: "Axew",
    dex: 610,
    alola: -1,
    type: "Dragon",
    ability: "Rivalry/Mold Breaker/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/610.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/610.png"
};

var fraxure = {
    name: "Fraxure",
    dex: 611,
    alola: -1,
    type: "Dragon",
    ability: "Rivalry/Mold Breaker/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/611.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/611.png"
};

var haxorus = {
    name: "Haxorus",
    dex: 612,
    alola: -1,
    type: "Dragon",
    ability: "Rivalry/Mold Breaker/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/612.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/612.png"
};

var cubchoo = {
    name: "Cubchoo",
    dex: 613,
    alola: -1,
    type: "Ice",
    ability: "Snow Cloak/None/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/613.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/613.png"
};

var beartic = {
    name: "Beartic",
    dex: 614,
    alola: -1,
    type: "Ice",
    ability: "Snow Cloak/None/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/614.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/614.png"
};

var cryogonal = {
    name: "Cryogonal",
    dex: 615,
    alola: -1,
    type: "Ice",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/615.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/615.png"
};

var shelmet = {
    name: "Shelmet",
    dex: 616,
    alola: -1,
    type: "Bug",
    ability: "Hydration/Shell Armor/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/616.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/616.png"
};

var accelgor = {
    name: "Accelgor",
    dex: 617,
    alola: -1,
    type: "Bug",
    ability: "Hydration/Sticky Hold/Unburden",
    wiki: "http://www.serebii.net/pokedex-sm/617.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/617.png"
};

var stunfisk = {
    name: "Stunfisk",
    dex: 618,
    alola: -1,
    type: "Ground/Electric",
    ability: "Static/Limber/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/618.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/618.png"
};

var mienfoo = {
    name: "Mienfoo",
    dex: 619,
    alola: -1,
    type: "Fighting",
    ability: "Inner Focus/Regenerator/Reckless",
    wiki: "http://www.serebii.net/pokedex-sm/619.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/619.png"
};

var mienshao = {
    name: "Mienshao",
    dex: 620,
    alola: -1,
    type: "Fighting",
    ability: "Inner Focus/Regenerator/Reckless",
    wiki: "http://www.serebii.net/pokedex-sm/620.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/620.png"
};

var druddigon = {
    name: "Druddigon",
    dex: 621,
    alola: -1,
    type: "Dragon",
    ability: "Rough Skin/Sheer Force/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/621.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/621.png"
};

var golett = {
    name: "Golett",
    dex: 622,
    alola: -1,
    type: "Ground/Ghost",
    ability: "Iron Fist/Klutz/No Guard",
    wiki: "http://www.serebii.net/pokedex-sm/622.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/622.png"
};

var golurk = {
    name: "Golurk",
    dex: 623,
    alola: -1,
    type: "Ground/Ghost",
    ability: "Iron Fist/Klutz/No Guard",
    wiki: "http://www.serebii.net/pokedex-sm/623.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/623.png"
};

var pawniard = {
    name: "Pawniard",
    dex: 624,
    alola: -1,
    type: "Dark/Steel",
    ability: "Defiant/Inner Focus/Pressure",
    wiki: "http://www.serebii.net/pokedex-sm/624.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/624.png"
};

var bisharp = {
    name: "Bisharp",
    dex: 625,
    alola: -1,
    type: "Dark/Steel",
    ability: "Defiant/Inner Focus/Pressure",
    wiki: "http://www.serebii.net/pokedex-sm/625.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/625.png"
};

var bouffalant = {
    name: "Bouffalant",
    dex: 626,
    alola: -1,
    type: "Normal",
    ability: "Reckless/Sap Sipper/Soundproof",
    wiki: "http://www.serebii.net/pokedex-sm/626.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/626.png"
};

var rufflet = {
    name: "Rufflet",
    dex: 627,
    alola: 075,
    type: "Normal/Flying",
    ability: "Keen Eye/Sheer Force/Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/627.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/627.png"
};

var braviary = {
    name: "Braviary",
    dex: 628,
    alola: 076,
    type: "Normal/Flying",
    ability: "Keen Eye/Sheer Force/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/628.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/628.png"
};

var vullaby = {
    name: "Vullaby",
    dex: 629,
    alola: 077,
    type: "Dark/Flying",
    ability: "Big Pecks/Overcoat/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/629.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/629.png"
};

var mandibuzz = {
    name: "Mandibuzz",
    dex: 630,
    alola: 078,
    type: "Dark/Flying",
    ability: "Big Pecks/Overcoat/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/630.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/630.png"
};

var heatmor = {
    name: "Heatmor",
    dex: 631,
    alola: -1,
    type: "Fire",
    ability: "Gluttony/Flash Fire/White Smoke",
    wiki: "http://www.serebii.net/pokedex-sm/631.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/631.png"
};

var durant = {
    name: "Durant",
    dex: 632,
    alola: -1,
    type: "Bug/Steel",
    ability: "Swarm/Hustle/Truant",
    wiki: "http://www.serebii.net/pokedex-sm/632.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/632.png"
};

var deino = {
    name: "Deino",
    dex: 633,
    alola: -1,
    type: "Dark/Dragon",
    ability: "Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/633.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/633.png"
};

var zweilous = {
    name: "Zweilous",
    dex: 634,
    alola: -1,
    type: "Dark/Dragon",
    ability: "Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/634.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/634.png"
};

var hydreigon = {
    name: "Hydreigon",
    dex: 635,
    alola: -1,
    type: "Dark/Dragon",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/635.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/635.png"
};

var larvesta = {
    name: "Larvesta",
    dex: 636,
    alola: -1,
    type: "Bug/Fire",
    ability: "Flame Body/None/Swarm",
    wiki: "http://www.serebii.net/pokedex-sm/636.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/636.png"
};

var volcarona = {
    name: "Volcarona",
    dex: 637,
    alola: -1,
    type: "Bug/Fire",
    ability: "Flame Body/None/Swarm",
    wiki: "http://www.serebii.net/pokedex-sm/637.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/637.png"
};

var cobalion = {
    name: "Cobalion",
    dex: 638,
    alola: -1,
    type: "Steel/Fighting",
    ability: "Justified",
    wiki: "http://www.serebii.net/pokedex-sm/638.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/638.png"
};

var terrakion = {
    name: "Terrakion",
    dex: 639,
    alola: -1,
    type: "Rock/Fighting",
    ability: "Justified",
    wiki: "http://www.serebii.net/pokedex-sm/639.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/639.png"
};

var virizion = {
    name: "Virizion",
    dex: 640,
    alola: -1,
    type: "Grass/Fighting",
    ability: "Justified",
    wiki: "http://www.serebii.net/pokedex-sm/640.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/640.png"
};

var tornadus = {
    name: "Tornadus",
    dex: 641,
    alola: -1,
    type: "Flying",
    ability: "Prankster/None/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/641.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/641.png"
};

var tornadus_therian = {
    name: "Tornadus Therian",
    dex: 641,
    alola: -1,
    type: "Flying",
    ability: "Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/641.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/641-s.png"
};

var thundurus = {
    name: "Thundurus",
    dex: 642,
    alola: -1,
    type: "Electric/Flying",
    ability: "Prankster/None/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/642.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/642.png"
};

var thundurus_therian = {
    name: "Thundurus Therian",
    dex: 642,
    alola: -1,
    type: "Electric/Flying",
    ability: "Volt Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/642.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/642-s.png"
};

var reshiram = {
    name: "Reshiram",
    dex: 643,
    alola: -1,
    type: "Dragon/Fire",
    ability: "Turboblaze",
    wiki: "http://www.serebii.net/pokedex-sm/643.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/643.png"
};

var zekrom = {
    name: "Zekrom",
    dex: 644,
    alola: -1,
    type: "Dragon/Electric",
    ability: "Teravolt",
    wiki: "http://www.serebii.net/pokedex-sm/644.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/644.png"
};

var landorus = {
    name: "Landorus",
    dex: 645,
    alola: -1,
    type: "Ground/Flying",
    ability: "Sand Force/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/645.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/645.png"
};

var landorus_therian = {
    name: "Landorus Therian",
    dex: 645,
    alola: -1,
    type: "Ground/Flying",
    ability: "Intimidate",
    wiki: "http://www.serebii.net/pokedex-sm/645.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/645-s.png"
};

var kyurem = {
    name: "Kyurem",
    dex: 646,
    alola: -1,
    type: "Dragon/Ice",
    ability: "Pressure",
    wiki: "http://www.serebii.net/pokedex-sm/646.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/646.png"
};

var white_kyurem = {
    name: "White Kyurem",
    dex: 646,
    alola: -1,
    type: "Dragon/Ice",
    ability: "Turboblaze",
    wiki: "http://www.serebii.net/pokedex-sm/646.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/646-w.png"
};

var black_kyurem = {
    name: "Black Kyurem",
    dex: 646,
    alola: -1,
    type: "Dragon/Ice",
    ability: "Teravolt",
    wiki: "http://www.serebii.net/pokedex-sm/646.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/646-b.png"
};

var keldeo = {
    name: "Keldeo",
    dex: 647,
    alola: -1,
    type: "Water/Fighting",
    ability: "Justified",
    wiki: "http://www.serebii.net/pokedex-sm/647.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/647.png"
};

var meloetta = {
    name: "Meloetta",
    dex: 648,
    alola: -1,
    type: "Normal/Psychic",
    ability: "Serene Grace",
    wiki: "http://www.serebii.net/pokedex-sm/648.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/648.png"
};

var meloetta_pirouette = {
    name: "Meloetta Pirouette",
    dex: 648,
    alola: -1,
    type: "Normal/Fighting",
    ability: "Serene Grace",
    wiki: "http://www.serebii.net/pokedex-sm/648.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/648-s.png"
};

var genesect = {
    name: "Genesect",
    dex: 649,
    alola: -1,
    type: "Bug/Steel",
    ability: "Download",
    wiki: "http://www.serebii.net/pokedex-sm/649.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/649.png"
};

var chespin = {
    name: "Chespin",
    dex: 650,
    alola: -1,
    type: "Grass",
    ability: "Overgrow/None/Bulletproof",
    wiki: "http://www.serebii.net/pokedex-sm/650.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/650.png"
};

var quilladin = {
    name: "Quilladin",
    dex: 651,
    alola: -1,
    type: "Grass",
    ability: "Overgrow/None/Bulletproof",
    wiki: "http://www.serebii.net/pokedex-sm/651.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/651.png"
};

var chesnaught = {
    name: "Chesnaught",
    dex: 652,
    alola: -1,
    type: "Grass/Fighting",
    ability: "Overgrow/None/Bulletproof",
    wiki: "http://www.serebii.net/pokedex-sm/652.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/652.png"
};

var fennekin = {
    name: "Fennekin",
    dex: 653,
    alola: -1,
    type: "Fire",
    ability: "Blaze/None/Magician",
    wiki: "http://www.serebii.net/pokedex-sm/653.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/653.png"
};

var braixen = {
    name: "Braixen",
    dex: 654,
    alola: -1,
    type: "Fire",
    ability: "Blaze/None/Magician",
    wiki: "http://www.serebii.net/pokedex-sm/654.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/654.png"
};

var delphox = {
    name: "Delphox",
    dex: 655,
    alola: -1,
    type: "Fire/Psychic",
    ability: "Blaze/None/Magician",
    wiki: "http://www.serebii.net/pokedex-sm/655.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/655.png"
};

var froakie = {
    name: "Froakie",
    dex: 656,
    alola: -1,
    type: "Water",
    ability: "Torrent/None/Protean",
    wiki: "http://www.serebii.net/pokedex-sm/656.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/656.png"
};

var frogadier = {
    name: "Frogadier",
    dex: 657,
    alola: -1,
    type: "Water",
    ability: "Torrent/None/Protean",
    wiki: "http://www.serebii.net/pokedex-sm/657.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/657.png"
};

var greninja = {
    name: "Greninja",
    dex: 658,
    alola: -1,
    type: "Water/Dark",
    ability: "Torrent/None/Protean",
    wiki: "http://www.serebii.net/pokedex-sm/658.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/658.png"
};

var bunnelby = {
    name: "Bunnelby",
    dex: 659,
    alola: -1,
    type: "Normal",
    ability: "Pickup/Cheek Pouch/Huge Power",
    wiki: "http://www.serebii.net/pokedex-sm/659.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/659.png"
};

var diggersby = {
    name: "Diggersby",
    dex: 660,
    alola: -1,
    type: "Normal/Ground",
    ability: "Pickup/Cheek Pouch/Huge Power",
    wiki: "http://www.serebii.net/pokedex-sm/660.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/660.png"
};

var fletchling = {
    name: "Fletchling",
    dex: 661,
    alola: 158,
    type: "Normal/Flying",
    ability: "Big Pecks/None/Gale Wings",
    wiki: "http://www.serebii.net/pokedex-sm/661.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/661.png"
};

var fletchinder = {
    name: "Fletchinder",
    dex: 662,
    alola: 159,
    type: "Fire/Flying",
    ability: "Flame Body/None/Gale Wings",
    wiki: "http://www.serebii.net/pokedex-sm/662.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/662.png"
};

var talonflame = {
    name: "Talonflame",
    dex: 663,
    alola: 160,
    type: "Fire/Flying",
    ability: "Flame Body/None/ Gale Wings",
    wiki: "http://www.serebii.net/pokedex-sm/663.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/663.png"
};

var scatterbug = {
    name: "Scatterbug",
    dex: 664,
    alola: -1,
    type: "Bug",
    ability: "Shield Dust/Compound Eyes/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-sm/664.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/664.png"
};

var spewpa = {
    name: "Spewpa",
    dex: 665,
    alola: -1,
    type: "Bug",
    ability: "Shed Skin/None/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-sm/665.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/665.png"
};

var vivillon = {
    name: "Vivillon",
    dex: 666,
    alola: -1,
    type: "Bug/Flying",
    ability: "Shield Dust/Compound Eyes/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-sm/666.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/666.png"
};

var litleo = {
    name: "Litleo",
    dex: 667,
    alola: -1,
    type: "Fire/Normal",
    ability: "Rivalry/Unnerve/Moxie",
    wiki: "http://www.serebii.net/pokedex-sm/667.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/667.png"
};

var pyroar = {
    name: "Pyroar",
    dex: 668,
    alola: -1,
    type: "Fire/Normal",
    ability: "Rivalry/Unnerve/Moxie",
    wiki: "http://www.serebii.net/pokedex-sm/668.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/668.png"
};

var flabebe = {
    name: "Flabébé",
    dex: 669,
    alola: -1,
    type: "Fairy",
    ability: "Flower Veil/None/Symbiosis",
    wiki: "http://www.serebii.net/pokedex-sm/669.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/669.png"
};

var floette = {
    name: "Floette",
    dex: 670,
    alola: -1,
    type: "Fairy",
    ability: "Flower Veil/None/Symbiosis",
    wiki: "http://www.serebii.net/pokedex-sm/670.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/670.png"
};

var florges = {
    name: "Florges",
    dex: 671,
    alola: -1,
    type: "Fairy",
    ability: "Flower Veil/None/Symbiosis",
    wiki: "http://www.serebii.net/pokedex-sm/671.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/671.png"
};

var skiddo = {
    name: "Skiddo",
    dex: 672,
    alola: -1,
    type: "Grass",
    ability: "Sap Sipper/None/Grass Pelt",
    wiki: "http://www.serebii.net/pokedex-sm/672.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/672.png"
};

var gogoat = {
    name: "Gogoat",
    dex: 673,
    alola: -1,
    type: "Grass",
    ability: "Sap Sipper/None/Grass Pelt",
    wiki: "http://www.serebii.net/pokedex-sm/673.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/673.png"
};

var pancham = {
    name: "Pancham",
    dex: 674,
    alola: 220,
    type: "Fighting",
    ability: "Iron Fist/Mold Breaker/Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/674.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/674.png"
};

var pangoro = {
    name: "Pangoro",
    dex: 675,
    alola: 221,
    type: "Fighting/Dark",
    ability: "Iron Fist/Mold Breaker/Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/675.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/675.png"
};

var furfrou = {
    name: "Furfrou",
    dex: 676,
    alola: -1,
    type: "Normal",
    ability: "Fur Coat",
    wiki: "http://www.serebii.net/pokedex-sm/676.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/676.png"
};

var espurr = {
    name: "Espurr",
    dex: 677,
    alola: -1,
    type: "Psychic",
    ability: "Keen Eye/Infiltrator/Own Tempo",
    wiki: "http://www.serebii.net/pokedex-sm/677.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/677.png"
};

var meowstic = {
    name: "Meowstic",
    dex: 678,
    alola: -1,
    type: "Psychic",
    ability: "Keen Eye/Infiltrator/Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/678.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/678.png"
};

var honedge = {
    name: "Honedge",
    dex: 679,
    alola: -1,
    type: "Steel/Ghost",
    ability: "No Guard",
    wiki: "http://www.serebii.net/pokedex-sm/679.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/679.png"
};

var doublade = {
    name: "Doublade",
    dex: 680,
    alola: -1,
    type: "Steel/Ghost",
    ability: "No Guard",
    wiki: "http://www.serebii.net/pokedex-sm/680.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/680.png"
};

var aegislash = {
    name: "Aegislash",
    dex: 681,
    alola: -1,
    type: "Steel/Ghost",
    ability: "Stance Change",
    wiki: "http://www.serebii.net/pokedex-sm/681.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/681.png"
};

var spritzee = {
    name: "Spritzee",
    dex: 682,
    alola: -1,
    type: "Fairy",
    ability: "Healer/None/Aroma Veil",
    wiki: "http://www.serebii.net/pokedex-sm/682.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/682.png"
};

var aromatisse = {
    name: "Aromatisse",
    dex: 683,
    alola: -1,
    type: "Fairy",
    ability: "Healer/None/Aroma Veil",
    wiki: "http://www.serebii.net/pokedex-sm/683.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/683.png"
};

var swirlix = {
    name: "Swirlix",
    dex: 684,
    alola: -1,
    type: "Fairy",
    ability: "Sweet Veil/None/Unburden",
    wiki: "http://www.serebii.net/pokedex-sm/684.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/684.png"
};

var slurpuff = {
    name: "Slurpuff",
    dex: 685,
    alola: -1,
    type: "Fairy",
    ability: "Sweet Veil/None/Unburden",
    wiki: "http://www.serebii.net/pokedex-sm/685.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/685.png"
};

var inkay = {
    name: "Inkay",
    dex: 686,
    alola: -1,
    type: "Dark/Psychic",
    ability: "Contrary/Suction Cups/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/686.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/686.png"
};

var malamar = {
    name: "Malamar",
    dex: 687,
    alola: -1,
    type: "Dark/Psychic",
    ability: "Contrary/Suction Cups/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/687.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/687.png"
};

var binacle = {
    name: "Binacle",
    dex: 688,
    alola: -1,
    type: "Rock/Water",
    ability: "Sniper/Tough Claws/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-sm/688.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/688.png"
};

var barbaracle = {
    name: "Barbaracle",
    dex: 689,
    alola: -1,
    type: "Rock/Water",
    ability: "Sniper/Tough Claws/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-sm/689.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/689.png"
};

var skrelp = {
    name: "Skrelp",
    dex: 690,
    alola: -1,
    type: "Poison/Water",
    ability: "Poison Point/Poison Touch/Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/690.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/690.png"
};

var dragalge = {
    name: "Dragalge",
    dex: 691,
    alola: -1,
    type: "Poison/Dragon",
    ability: "Poison Point/Poison Touch/Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/691.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/691.png"
};

var clauncher = {
    name: "Clauncher",
    dex: 692,
    alola: -1,
    type: "Water",
    ability: "Mega Launcher",
    wiki: "http://www.serebii.net/pokedex-sm/692.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/692.png"
};

var clawitzer = {
    name: "Clawitzer",
    dex: 693,
    alola: -1,
    type: "Water",
    ability: "Mega Launcher",
    wiki: "http://www.serebii.net/pokedex-sm/693.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/693.png"
};

var helioptile = {
    name: "Helioptile",
    dex: 694,
    alola: -1,
    type: "Electric/Normal",
    ability: "Dry Skin/Sand Veil/Solar Power",
    wiki: "http://www.serebii.net/pokedex-sm/694.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/694.png"
};

var heliolisk = {
    name: "Heliolisk",
    dex: 695,
    alola: -1,
    type: "Electric/Normal",
    ability: "Dry Skin/Sand Veil/Solar Power",
    wiki: "http://www.serebii.net/pokedex-sm/695.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/695.png"
};

var tyrunt = {
    name: "Tyrunt",
    dex: 696,
    alola: -1,
    type: "Rock/Dragon",
    ability: "Strong Jaw/None/Sturdy",
    wiki: "http://www.serebii.net/pokedex-sm/696.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/696.png"
};

var tyrantrum = {
    name: "Tyrantrum",
    dex: 697,
    alola: -1,
    type: "Rock/Dragon",
    ability: "Strong Jaw/None/Rock Head",
    wiki: "http://www.serebii.net/pokedex-sm/697.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/697.png"
};

var amaura = {
    name: "Amaura",
    dex: 698,
    alola: -1,
    type: "Rock/Ice",
    ability: "Refrigerate/None/Snow Warning",
    wiki: "http://www.serebii.net/pokedex-sm/698.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/698.png"
};

var aurorus = {
    name: "Aurorus",
    dex: 699,
    alola: -1,
    type: "Rock/Ice",
    ability: "Refrigerate/None/Snow Warning",
    wiki: "http://www.serebii.net/pokedex-sm/699.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/699.png"
};

var sylveon = {
    name: "Sylveon",
    dex: 700,
    alola: 131,
    type: "Fairy",
    ability: "Cute Charm/None/Pixilate",
    wiki: "http://www.serebii.net/pokedex-sm/700.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/700.png"
};

var hawlucha = {
    name: "Hawlucha",
    dex: 701,
    alola: -1,
    type: "Fighting/Flying",
    ability: "Limber/Unburden/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/701.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/701.png"
};

var dedenne = {
    name: "Dedenne",
    dex: 702,
    alola: -1,
    type: "Electric/Fairy",
    ability: "Cheek Pouch/Pickup/Plus",
    wiki: "http://www.serebii.net/pokedex-sm/702.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/702.png"
};

var carbink = {
    name: "Carbink",
    dex: 703,
    alola: 101,
    type: "Rock/Fairy",
    ability: "Clear Body/None/Sturdy",
    wiki: "http://www.serebii.net/pokedex-sm/703.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/703.png"
};

var goomy = {
    name: "Goomy",
    dex: 704,
    alola: 178,
    type: "Dragon",
    ability: "Sap Sipper/Hydration/Gooey",
    wiki: "http://www.serebii.net/pokedex-sm/704.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/704.png"
};

var sliggoo = {
    name: "Sliggoo",
    dex: 705,
    alola: 179,
    type: "Dragon",
    ability: "Sap Sipper/Hydration/Gooey",
    wiki: "http://www.serebii.net/pokedex-sm/705.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/705.png"
};

var goodra = {
    name: "Goodra",
    dex: 706,
    alola: 180,
    type: "Dragon",
    ability: "Sap Sipper/Hydration/Gooey",
    wiki: "http://www.serebii.net/pokedex-sm/706.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/706.png"
};

var klefki = {
    name: "Klefki",
    dex: 707,
    alola: 241,
    type: "Steel/Fairy",
    ability: "Prankster/None/Magician",
    wiki: "http://www.serebii.net/pokedex-sm/707.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/707.png"
};

var phantump = {
    name: "Phantump",
    dex: 708,
    alola: 196,
    type: "Ghost/Grass",
    ability: "Natural Cure/Frisk/Harvest",
    wiki: "http://www.serebii.net/pokedex-sm/708.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/708.png"
};

var trevenant = {
    name: "Trevenant",
    dex: 709,
    alola: 197,
    type: "Ghost/Grass",
    ability: "Natural Cure/Frisk/Harvest",
    wiki: "http://www.serebii.net/pokedex-sm/709.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/709.png"
};

var pumpkaboo = {
    name: "Pumpkaboo",
    dex: 710,
    alola: -1,
    type: "Ghost/Grass",
    ability: "Pickup/Frisk/Insomnia",
    wiki: "http://www.serebii.net/pokedex-sm/710.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/710.png"
};

var gourgeist = {
    name: "Gourgeist",
    dex: 711,
    alola: -1,
    type: "Ghost/Grass",
    ability: "Pickup/Frisk/Insomnia",
    wiki: "http://www.serebii.net/pokedex-sm/711.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/711.png"
};

var bergmite = {
    name: "Bergmite",
    dex: 712,
    alola: -1,
    type: "Ice",
    ability: "Own Tempo/Ice Body/Sturdy",
    wiki: "http://www.serebii.net/pokedex-sm/712.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/712.png"
};

var avalugg = {
    name: "Avalugg",
    dex: 713,
    alola: -1,
    type: "Ice",
    ability: "Own Tempo/Ice Body/Sturdy",
    wiki: "http://www.serebii.net/pokedex-sm/713.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/713.png"
};

var noibat = {
    name: "Noibat",
    dex: 714,
    alola: -1,
    type: "Flying/Dragon",
    ability: "Frisk/Infiltrator/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/714.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/714.png"
};

var noivern = {
    name: "Noivern",
    dex: 715,
    alola: -1,
    type: "Flying/Dragon",
    ability: "Frisk/Infiltrator/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/715.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/715.png"
};

var xerneas = {
    name: "Xerneas",
    dex: 716,
    alola: -1,
    type: "Fairy",
    ability: "Fairy Aura",
    wiki: "http://www.serebii.net/pokedex-sm/716.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/716.png"
};

var yveltal = {
    name: "Yveltal",
    dex: 717,
    alola: -1,
    type: "Dark/Flying",
    ability: "Dark Aura",
    wiki: "http://www.serebii.net/pokedex-sm/717.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/717.png"
};

var zygarde = {
    name: "Zygarde",
    dex: 718,
    alola: 205,
    type: "Dragon/Ground",
    ability: "Aura Break/Power Construct",
    wiki: "http://www.serebii.net/pokedex-sm/718.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/718.png"
};

var diancie = {
    name: "Diancie",
    dex: 719,
    alola: -1,
    type: "Rock/Fairy",
    ability: "Clear Body",
    wiki: "http://www.serebii.net/pokedex-sm/719.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/719.png"
};

var hoopa = {
    name: "Hoopa",
    dex: 720,
    alola: -1,
    type: "Psychic/Ghost",
    ability: "Magician",
    wiki: "http://www.serebii.net/pokedex-sm/720.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/720.png"
};

var hoopa_unbound = {
    name: "Hoopa Unbound",
    dex: 720,
    alola: -1,
    type: "Psychic/Dark",
    ability: "Magician",
    wiki: "http://www.serebii.net/pokedex-sm/720.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/720-u.png"
};

var volcanion = {
    name: "Volcanion",
    dex: 721,
    alola: -1,
    type: "Fire/Water",
    ability: "Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/721.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/721.png"
};

var mega_venusaur = {
    name: "Mega Venusaur",
    dex: 3,
    alola: -1,
    type: "Grass/Poison",
    ability: "Thick Fat",
    wiki: "http://www.serebii.net/pokedex-sm/003.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/003-m.png"
};

var mega_charizard_x = {
    name: "Mega Charizard X",
    dex: 6,
    alola: -1,
    type: "Fire/Dragon",
    ability: "Tough Claws",
    wiki: "http://www.serebii.net/pokedex-sm/006.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/006-mx.png"
};

var mega_charizard_y = {
    name: "Mega Charizard Y",
    dex: 6,
    alola: -1,
    type: "Fire/Flying",
    ability: "Drought",
    wiki: "http://www.serebii.net/pokedex-sm/006.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/006-my.png"
};

var mega_blastoise = {
    name: "Mega Blastoise",
    dex: 9,
    alola: -1,
    type: "Water",
    ability: "Mega Launcher",
    wiki: "http://www.serebii.net/pokedex-sm/009.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/009-m.png"
};

var mega_alakazam = {
    name: "Mega Alakazam",
    dex: 65,
    alola: -1,
    type: "Psychic",
    ability: "Trace",
    wiki: "http://www.serebii.net/pokedex-sm/065.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/065-m.png"
};

var mega_gengar = {
    name: "Mega Gengar",
    dex: 94,
    alola: -1,
    type: "Ghost/Poison",
    ability: "Shadow Tag",
    wiki: "http://www.serebii.net/pokedex-sm/094.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/094-m.png"
};

var mega_kangaskhan = {
    name: "Mega Kangaskhan",
    dex: 115,
    alola: -1,
    type: "Normal",
    ability: "Parental Bond",
    wiki: "http://www.serebii.net/pokedex-sm/115.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/115-m.png"
};

var mega_pinsir = {
    name: "Mega Pinsir",
    dex: 127,
    alola: -1,
    type: "Bug/Flying",
    ability: "Aerilate",
    wiki: "http://www.serebii.net/pokedex-sm/127.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/127-m.png"
};

var mega_gyarados = {
    name: "Mega Gyarados",
    dex: 130,
    alola: -1,
    type: "Water/Dark",
    ability: "Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/130.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/130-m.png"
};

var mega_aerodactyl = {
    name: "Mega Aerodactyl",
    dex: 142,
    alola: -1,
    type: "Rock/Flying",
    ability: "Tough Claws",
    wiki: "http://www.serebii.net/pokedex-sm/142.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/142-m.png"
};

var mega_mewtwo_x = {
    name: "Mega Mewtwo X",
    dex: 150,
    alola: -1,
    type: "Psychic/Fighting",
    ability: "Steadfast",
    wiki: "http://www.serebii.net/pokedex-sm/150.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/150-mx.png"
};

var mega_mewtwo_y = {
    name: "Mega Mewtwo Y",
    dex: 150,
    alola: -1,
    type: "Psychic",
    ability: "Insomnia",
    wiki: "http://www.serebii.net/pokedex-sm/150.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/150-my.png"
};

var mega_ampharos = {
    name: "Mega Ampharos",
    dex: 181,
    alola: -1,
    type: "Electric/Dragon",
    ability: "Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/181.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/181-m.png"
};

var mega_scizor = {
    name: "Mega Scizor",
    dex: 212,
    alola: -1,
    type: "Bug/Steel",
    ability: "Technician",
    wiki: "http://www.serebii.net/pokedex-sm/212.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/212-m.png"
};

var mega_heracross = {
    name: "Mega Heracross",
    dex: 214,
    alola: -1,
    type: "Bug/Fighting",
    ability: "Skill Link",
    wiki: "http://www.serebii.net/pokedex-sm/214.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/214-m.png"
};

var mega_houndoom = {
    name: "Mega Houndoom",
    dex: 229,
    alola: -1,
    type: "Dark/Fire",
    ability: "Solar Power",
    wiki: "http://www.serebii.net/pokedex-sm/229.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/229-m.png"
};

var mega_tyranitar = {
    name: "Mega Tyranitar",
    dex: 248,
    alola: -1,
    type: "Rock/Dark",
    ability: "Sand Stream",
    wiki: "http://www.serebii.net/pokedex-sm/248.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/248-m.png"
};

var mega_blaziken = {
    name: "Mega Blaziken",
    dex: 257,
    alola: -1,
    type: "Fire/Fighting",
    ability: "Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/257.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/257-m.png"
};

var mega_gardevoir = {
    name: "Mega Gardevoir",
    dex: 282,
    alola: -1,
    type: "Psychic/Fairy",
    ability: "Pixilate",
    wiki: "http://www.serebii.net/pokedex-sm/282.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/282-m.png"
};

var mega_mawile = {
    name: "Mega Mawile",
    dex: 303,
    alola: -1,
    type: "Steel/Fairy",
    ability: "Huge Power",
    wiki: "http://www.serebii.net/pokedex-sm/303.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/303-m.png"
};

var mega_aggron = {
    name: "Mega Aggron",
    dex: 306,
    alola: -1,
    type: "Steel",
    ability: "Filter",
    wiki: "http://www.serebii.net/pokedex-sm/306.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/306-m.png"
};

var mega_medicham = {
    name: "Mega Medicham",
    dex: 308,
    alola: -1,
    type: "Fighting/Psychic",
    ability: "Pure Power",
    wiki: "http://www.serebii.net/pokedex-sm/308.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/308-m.png"
};

var mega_manectric = {
    name: "Mega Manectric",
    dex: 310,
    alola: -1,
    type: "Electric",
    ability: "Intimidate",
    wiki: "http://www.serebii.net/pokedex-sm/310.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/310-m.png"
};

var mega_banette = {
    name: "Mega Banette",
    dex: 354,
    alola: -1,
    type: "Ghost",
    ability: "Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/354.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/354-m.png"
};

var mega_absol = {
    name: "Mega Absol",
    dex: 359,
    alola: -1,
    type: "Dark",
    ability: "Magic Bounce",
    wiki: "http://www.serebii.net/pokedex-sm/359.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/359-m.png"
};

var mega_garchomp = {
    name: "Mega Garchomp",
    dex: 445,
    alola: -1,
    type: "Dragon/Ground",
    ability: "Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/445.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/445-m.png"
};

var mega_lucario = {
    name: "Mega Lucario",
    dex: 448,
    alola: -1,
    type: "Fighting/Steel",
    ability: "Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/448.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/448-m.png"
};

var mega_abomasnow = {
    name: "Mega Abomasnow",
    dex: 460,
    alola: -1,
    type: "Grass/Ice",
    ability: "Snow Warning",
    wiki: "http://www.serebii.net/pokedex-sm/460.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/460-m.png"
};

var mega_beedrill = {
    name: "Mega Beedrill",
    dex: 15,
    alola: -1,
    type: "Bug/Poison",
    ability: "Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/015.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/015-m.png"
};

var mega_pidgeot = {
    name: "Mega Pidgeot",
    dex: 18,
    alola: -1,
    type: "Normal/Flying",
    ability: "No Guard",
    wiki: "http://www.serebii.net/pokedex-sm/018.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/018-m.png"
};

var mega_slowbro = {
    name: "Mega Slowbro",
    dex: 80,
    alola: -1,
    type: "Water/Psychic",
    ability: "Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/080.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/080-m.png"
};

var mega_steelix = {
    name: "Mega Steelix",
    dex: 208,
    alola: -1,
    type: "Steel/Ground",
    ability: "Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/208.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/208-m.png"
};

var mega_sceptile = {
    name: "Mega Sceptile",
    dex: 254,
    alola: -1,
    type: "Grass/Dragon",
    ability: "Lightning Rod",
    wiki: "http://www.serebii.net/pokedex-sm/254.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/254-m.png"
};

var mega_swampert = {
    name: "Mega Swampert",
    dex: 260,
    alola: -1,
    type: "Water/Ground",
    ability: "Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/260.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/260-m.png"
};

var mega_sableye = {
    name: "Mega Sableye",
    dex: 302,
    alola: -1,
    type: "Dark/Ghost",
    ability: "Magic Bounce",
    wiki: "http://www.serebii.net/pokedex-sm/302.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/302-m.png"
};

var mega_sharpedo = {
    name: "Mega Sharpedo",
    dex: 319,
    alola: -1,
    type: "Water/Dark",
    ability: "Strong Jaw",
    wiki: "http://www.serebii.net/pokedex-sm/319.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/319-m.png"
};

var mega_camerupt = {
    name: "Mega Camerupt",
    dex: 323,
    alola: -1,
    type: "Fire/Ground",
    ability: "Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/323.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/323-m.png"
};

var mega_altaria = {
    name: "Mega Altaria",
    dex: 334,
    alola: -1,
    type: "Dragon/Fairy",
    ability: "Pixilate",
    wiki: "http://www.serebii.net/pokedex-sm/334.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/334-m.png"
};

var mega_glalie = {
    name: "Mega Glalie",
    dex: 362,
    alola: -1,
    type: "Ice",
    ability: "Refrigerate",
    wiki: "http://www.serebii.net/pokedex-sm/362.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/362-m.png"
};

var mega_salamence = {
    name: "Mega Salamence",
    dex: 373,
    alola: -1,
    type: "Dragon/Flying",
    ability: "Aerilate",
    wiki: "http://www.serebii.net/pokedex-sm/373.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/373-m.png"
};

var mega_metagross = {
    name: "Mega Metagross",
    dex: 376,
    alola: -1,
    type: "Steel/Psychic",
    ability: "Tough Claws",
    wiki: "http://www.serebii.net/pokedex-sm/376.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/376-m.png"
};

var mega_latias = {
    name: "Mega Latias",
    dex: 380,
    alola: -1,
    type: "Dragon/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/380.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/380-m.png"
};

var mega_latios = {
    name: "Mega Latios",
    dex: 381,
    alola: -1,
    type: "Dragon/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/381.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/381-m.png"
};

var mega_rayquaza = {
    name: "Mega Rayquaza",
    dex: 384,
    alola: -1,
    type: "Dragon/Flying",
    ability: "Delta Stream",
    wiki: "http://www.serebii.net/pokedex-sm/384.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/384-m.png"
};

var mega_lopunny = {
    name: "Mega Lopunny",
    dex: 428,
    alola: -1,
    type: "Normal/Fighting",
    ability: "Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/428.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/428-m.png"
};

var mega_gallade = {
    name: "Mega Gallade",
    dex: 475,
    alola: -1,
    type: "Psychic/Fighting",
    ability: "Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/475.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/475-m.png"
};

var mega_audino = {
    name: "Mega Audino",
    dex: 531,
    alola: -1,
    type: "Normal/Fairy",
    ability: "Healer",
    wiki: "http://www.serebii.net/pokedex-sm/531.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/531-m.png"
};

var mega_diancie = {
    name: "Mega Diancie",
    dex: 719,
    alola: -1,
    type: "Rock/Fairy",
    ability: "Magic Bounce",
    wiki: "http://www.serebii.net/pokedex-sm/719.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/719-m.png"
};

var rowlet = {
    name: "Rowlet",
    dex: 722,
    alola: 001,
    type: "Grass/Flying",
    ability: "Overgrow/None/Long Reach",
    wiki: "http://www.serebii.net/pokedex-sm/722.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/722.png"
};

var dartrix = {
    name: "Dartrix",
    dex: 723,
    alola: 002,
    type: "Grass/Flying",
    ability: "Overgrow/None/Long Reach",
    wiki: "http://www.serebii.net/pokedex-sm/723.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/723.png"
};

var decidueye = {
    name: "Decidueye",
    dex: 724,
    alola: 003,
    type: "Grass/Ghost",
    ability: "Overgrow/None/Long Reach",
    wiki: "http://www.serebii.net/pokedex-sm/724.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/724.png"
};

var litten = {
    name: "Litten",
    dex: 725,
    alola: 004,
    type: "Fire",
    ability: "Blaze/None/Intimidate",
    wiki: "http://www.serebii.net/pokedex-sm/725.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/725.png"
};

var torracat = {
    name: "Torracat",
    dex: 726,
    alola: 005,
    type: "Fire",
    ability: "Blaze/None/Intimidate",
    wiki: "http://www.serebii.net/pokedex-sm/726.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/726.png"
};

var incineroar = {
    name: "Incineroar",
    dex: 727,
    alola: 006,
    type: "Fire/Dark",
    ability: "Blaze/None/Intimidate",
    wiki: "http://www.serebii.net/pokedex-sm/727.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/727.png"
};

var popplio = {
    name: "Popplio",
    dex: 728,
    alola: 007,
    type: "Water",
    ability: "Torrent/None/Liquid Voice",
    wiki: "http://www.serebii.net/pokedex-sm/728.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/728.png"
};

var brionne = {
    name: "Brionne",
    dex: 729,
    alola: 008,
    type: "Water",
    ability: "Torrent/None/Liquid Voice",
    wiki: "http://www.serebii.net/pokedex-sm/729.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/729.png"
};

var primarina = {
    name: "Primarina",
    dex: 730,
    alola: 009,
    type: "Water/Fairy",
    ability: "Torrent/None/Liquid Voice",
    wiki: "http://www.serebii.net/pokedex-sm/730.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/730.png"
};

var pikipek = {
    name: "Pikipek",
    dex: 731,
    alola: 010,
    type: "Normal/Flying",
    ability: "Keen Eye/Skill Link/",
    wiki: "http://www.serebii.net/pokedex-sm/731.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/731.png"
};

var trumbeak = {
    name: "Trumbeak",
    dex: 732,
    alola: 011,
    type: "Normal/Flying",
    ability: "Keen Eye/Skill Link/",
    wiki: "http://www.serebii.net/pokedex-sm/732.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/732.png"
};

var toucannon = {
    name: "Toucannon",
    dex: 733,
    alola: 012,
    type: "Normal/Flying",
    ability: "Keen Eye/Skill Link/",
    wiki: "http://www.serebii.net/pokedex-sm/733.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/733.png"
};

var yungoos = {
    name: "Yungoos",
    dex: 734,
    alola: 013,
    type: "Normal",
    ability: "Stakeout/Strong Jaw/Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/734.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/734.png"
};

var gumshoos = {
    name: "Gumshoos",
    dex: 735,
    alola: 014,
    type: "Normal",
    ability: "Stakeout/Strong Jaw/Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/735.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/735.png"
};

var grubbin = {
    name: "Grubbin",
    dex: 736,
    alola: 027,
    type: "Bug",
    ability: "Swarm",
    wiki: "http://www.serebii.net/pokedex-sm/736.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/736.png"
};

var charjabug = {
    name: "Charjabug",
    dex: 737,
    alola: 028,
    type: "Bug/Electric",
    ability: "Battery",
    wiki: "http://www.serebii.net/pokedex-sm/737.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/737.png"
};

var vikavolt = {
    name: "Vikavolt",
    dex: 738,
    alola: 029,
    type: "Bug/Electric",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/738.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/738.png"
};

var crabrawler = {
    name: "Crabrawler",
    dex: 739,
    alola: 059,
    type: "Fighting",
    ability: "Hyper Cutter/Iron Fist/Anger Point",
    wiki: "http://www.serebii.net/pokedex-sm/739.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/739.png"
};

var crabominable = {
    name: "Crabominable",
    dex: 740,
    alola: 060,
    type: "Fighting/Ice",
    ability: "Hyper Cutter/Iron Fist/Anger Point",
    wiki: "http://www.serebii.net/pokedex-sm/740.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/740.png"
};

var oricorio = {
    name: "Oricorio",
    dex: 741,
    alola: 082,
    type: "Fire/Flying",
    ability: "Dancer",
    wiki: "http://www.serebii.net/pokedex-sm/741.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/741.png"
};

var cutiefly = {
    name: "Cutiefly",
    dex: 742,
    alola: 083,
    type: "Bug/Fairy",
    ability: "Honey Gather/Shield Dust/Sweet Veil",
    wiki: "http://www.serebii.net/pokedex-sm/742.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/742.png"
};

var ribombee = {
    name: "Ribombee",
    dex: 743,
    alola: 084,
    type: "Bug/Fairy",
    ability: "Honey Gather/Shield Dust/Sweet Veil",
    wiki: "http://www.serebii.net/pokedex-sm/743.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/743.png"
};

var rockruff = {
    name: "Rockruff",
    dex: 744,
    alola: 103,
    type: "Rock",
    ability: "Keen Eye/Vital Spirit/Steadfast",
    wiki: "http://www.serebii.net/pokedex-sm/744.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/744.png"
};

var lycanroc = {
    name: "Lycanroc",
    dex: 745,
    alola: 104,
    type: "Rock",
    ability: "Keen Eye/Sand Rush/Steadfast",
    wiki: "http://www.serebii.net/pokedex-sm/745.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/745.png"
};

var lycanroc_midnight = {
    name: "Lycanroc Midnight",
    dex: 745,
    alola: 104,
    type: "Rock",
    ability: "Keen Eye/Vital Spirit/No Guard",
    wiki: "http://www.serebii.net/pokedex-sm/745.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/745-m.png"
};

var wishiwashi = {
    name: "Wishiwashi",
    dex: 746,
    alola: 110,
    type: "Water",
    ability: "Schooling",
    wiki: "http://www.serebii.net/pokedex-sm/746.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/746.png"
};

var mareanie = {
    name: "Mareanie",
    dex: 747,
    alola: 113,
    type: "Poison/Water",
    ability: "Merciless/Limber/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/747.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/747.png"
};

var toxapex = {
    name: "Toxapex",
    dex: 748,
    alola: 114,
    type: "Poison/Water",
    ability: "Merciless/Limber/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/748.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/748.png"
};

var mudbray = {
    name: "Mudbray",
    dex: 749,
    alola: 132,
    type: "Ground",
    ability: "Own Tempo/Stamina/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/749.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/749.png"
};

var mudsdale = {
    name: "Mudsdale",
    dex: 750,
    alola: 133,
    type: "Ground",
    ability: "Own Tempo/Stamina/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/750.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/750.png"
};

var dewpider = {
    name: "Dewpider",
    dex: 751,
    alola: 141,
    type: "Water/Bug",
    ability: "Water Bubble/None/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/751.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/751.png"
};

var araquanid = {
    name: "Araquanid",
    dex: 752,
    alola: 142,
    type: "Water/Bug",
    ability: "Water Bubble/None/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/752.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/752.png"
};

var fomantis = {
    name: "Fomantis",
    dex: 753,
    alola: 143,
    type: "Grass",
    ability: "Leaf Guard/None/Contrary",
    wiki: "http://www.serebii.net/pokedex-sm/753.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/753.png"
};

var lurantis = {
    name: "Lurantis",
    dex: 754,
    alola: 144,
    type: "Grass",
    ability: "Leaf Guard/None/Contrary",
    wiki: "http://www.serebii.net/pokedex-sm/754.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/754.png"
};

var morelull = {
    name: "Morelull",
    dex: 755,
    alola: 145,
    type: "Grass/Fairy",
    ability: "Illuminate/Effect Spore/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/755.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/755.png"
};

var shiinotic = {
    name: "Shiinotic",
    dex: 756,
    alola: 146,
    type: "Grass/Fairy",
    ability: "Illuminate/Effect Spore/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/756.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/756.png"
};

var salandit = {
    name: "Salandit",
    dex: 757,
    alola: 161,
    type: "Poison/Fire",
    ability: "Corrosion/None/Oblivious",
    wiki: "http://www.serebii.net/pokedex-sm/757.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/757.png"
};

var salazzle = {
    name: "Salazzle",
    dex: 758,
    alola: 162,
    type: "Poison/Fire",
    ability: "Corrosion/None/Oblivious",
    wiki: "http://www.serebii.net/pokedex-sm/758.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/758.png"
};

var stufful = {
    name: "Stufful",
    dex: 759,
    alola: 169,
    type: "Normal/Fighting",
    ability: "Fluffy/Klutz/Cute Charm",
    wiki: "http://www.serebii.net/pokedex-sm/759.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/759.png"
};

var bewear = {
    name: "Bewear",
    dex: 760,
    alola: 170,
    type: "Normal/Fighting",
    ability: "Fluffy/Klutz/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/760.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/760.png"
};

var bounsweet = {
    name: "Bounsweet",
    dex: 761,
    alola: 171,
    type: "Grass",
    ability: "Leaf Guard/Oblivious/Sweet Veil",
    wiki: "http://www.serebii.net/pokedex-sm/761.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/761.png"
};

var steenee = {
    name: "Steenee",
    dex: 762,
    alola: 172,
    type: "Grass",
    ability: "Leaf Guard/Oblivious/Sweet Veil",
    wiki: "http://www.serebii.net/pokedex-sm/762.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/762.png"
};

var tsareena = {
    name: "Tsareena",
    dex: 763,
    alola: 173,
    type: "Grass",
    ability: "Leaf Guard/Queenly Majesty/Sweet Veil",
    wiki: "http://www.serebii.net/pokedex-sm/763.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/763.png"
};

var comfey = {
    name: "Comfey",
    dex: 764,
    alola: 174,
    type: "Fairy",
    ability: "Flower Veil/Triage/Natural Cure",
    wiki: "http://www.serebii.net/pokedex-sm/764.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/764.png"
};

var oranguru = {
    name: "Oranguru",
    dex: 765,
    alola: 176,
    type: "Normal/Psychic",
    ability: "Inner Focus/Telepathy/Symbiosis",
    wiki: "http://www.serebii.net/pokedex-sm/765.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/765.png"
};

var passimian = {
    name: "Passimian",
    dex: 766,
    alola: 177,
    type: "Fighting",
    ability: "Receiver/None/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/766.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/766.png"
};

var wimpod = {
    name: "Wimpod",
    dex: 767,
    alola: 182,
    type: "Bug/Water",
    ability: "Wimp Out",
    wiki: "http://www.serebii.net/pokedex-sm/767.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/767.png"
};

var golisopod = {
    name: "Golisopod",
    dex: 768,
    alola: 183,
    type: "Bug/Water",
    ability: "Emergency Exit",
    wiki: "http://www.serebii.net/pokedex-sm/768.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/768.png"
};

var sandygast = {
    name: "Sandygast",
    dex: 769,
    alola: 186,
    type: "Ghost/Ground",
    ability: "Water Compaction/None/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/769.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/769.png"
};

var palossand = {
    name: "Palossand",
    dex: 770,
    alola: 187,
    type: "Ghost/Ground",
    ability: "Water Compaction/None/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/770.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/770.png"
};

var pyukumuku = {
    name: "Pyukumuku",
    dex: 771,
    alola: 200,
    type: "Water",
    ability: "Innards Out/None/Unaware",
    wiki: "http://www.serebii.net/pokedex-sm/771.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/771.png"
};

var type_null = {
    name: "Type: Null",
    dex: 772,
    alola: -1,
    type: "Normal",
    ability: "Battle Armor",
    wiki: "http://www.serebii.net/pokedex-sm/772.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/772.png"
};

var silvally = {
    name: "Silvally",
    dex: 773,
    alola: 204,
    type: "Normal",
    ability: "RKS System",
    wiki: "http://www.serebii.net/pokedex-sm/773.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/773.png"
};

var minior = {
    name: "Minior",
    dex: 774,
    alola: 213,
    type: "Rock/Flying",
    ability: "Shields Down",
    wiki: "http://www.serebii.net/pokedex-sm/774.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/774.png"
};

var komala = {
    name: "Komala",
    dex: 775,
    alola: 222,
    type: "Normal",
    ability: "Comatose",
    wiki: "http://www.serebii.net/pokedex-sm/775.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/775.png"
};

var turtonator = {
    name: "Turtonator",
    dex: 776,
    alola: 224,
    type: "Fire/Dragon",
    ability: "Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/776.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/776.png"
};

var togedemaru = {
    name: "Togedemaru",
    dex: 777,
    alola: 225,
    type: "Electric/Steel",
    ability: "Iron Barbs/Lightning Rod/Sturdy",
    wiki: "http://www.serebii.net/pokedex-sm/777.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/777.png"
};

var mimikyu = {
    name: "Mimikyu",
    dex: 778,
    alola: 242,
    type: "Ghost/Fairy",
    ability: "Disguise",
    wiki: "http://www.serebii.net/pokedex-sm/778.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/778.png"
};

var bruxish = {
    name: "Bruxish",
    dex: 779,
    alola: 243,
    type: "Water/Psychic",
    ability: "Dazzling/Strong Jaw/Wonder Skin",
    wiki: "http://www.serebii.net/pokedex-sm/779.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/779.png"
};

var drampa = {
    name: "Drampa",
    dex: 780,
    alola: 244,
    type: "Normal/Dragon",
    ability: "Berserk/Sap Sipper/Cloud Nine",
    wiki: "http://www.serebii.net/pokedex-sm/780.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/780.png"
};

var dhelmise = {
    name: "Dhelmise",
    dex: 781,
    alola: 263,
    type: "Ghost/Grass",
    ability: "Steelworker",
    wiki: "http://www.serebii.net/pokedex-sm/781.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/781.png"
};

var jangmo_o = {
    name: "Jangmo-o",
    dex: 782,
    alola: -1,
    type: "Dragon",
    ability: "Bulletproof/Soundproof/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/782.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/782.png"
};

var hakamo_o = {
    name: "Hakamo-o",
    dex: 783,
    alola: -1,
    type: "Dragon/Fighting",
    ability: "Bulletproof/Soundproof/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/783.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/783.png"
};

var kommo_o = {
    name: "Kommo-o",
    dex: 784,
    alola: -1,
    type: "Dragon/Fighting",
    ability: "Bulletproof/Soundproof/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/784.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/784.png"
};

var tapu_koko = {
    name: "Tapu Koko",
    dex: 785,
    alola: 285,
    type: "Electric/Fairy",
    ability: "Electric Surge/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/785.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/785.png"
};

var tapu_lele = {
    name: "Tapu Lele",
    dex: 786,
    alola: 286,
    type: "Psychic/Fairy",
    ability: "Psychic Surge/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/786.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/786.png"
};

var tapu_bulu = {
    name: "Tapu Bulu",
    dex: 787,
    alola: 287,
    type: "Grass/Fairy",
    ability: "Grassy Surge/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/787.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/787.png"
};

var tapu_fini = {
    name: "Tapu Fini",
    dex: 788,
    alola: 288,
    type: "Water/Fairy",
    ability: "Misty Surge/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/788.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/788.png"
};

var cosmog = {
    name: "Cosmog",
    dex: 789,
    alola: 289,
    type: "Psychic",
    ability: "Unaware",
    wiki: "http://www.serebii.net/pokedex-sm/789.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/789.png"
};

var cosmoem = {
    name: "Cosmoem",
    dex: 790,
    alola: 290,
    type: "Psychic",
    ability: "Sturdy",
    wiki: "http://www.serebii.net/pokedex-sm/790.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/790.png"
};

var solgaleo = {
    name: "Solgaleo",
    dex: 791,
    alola: 291,
    type: "Psychic/Steel",
    ability: "Full Metal Body",
    wiki: "http://www.serebii.net/pokedex-sm/791.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/791.png"
};

var lunala = {
    name: "Lunala",
    dex: 792,
    alola: 292,
    type: "Psychic/Ghost",
    ability: "Shadow Shield",
    wiki: "http://www.serebii.net/pokedex-sm/792.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/792.png"
};

var nihilego = {
    name: "Nihilego",
    dex: 793,
    alola: 293,
    type: "Rock/Poison",
    ability: "Beast Boost",
    wiki: "http://www.serebii.net/pokedex-sm/793.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/793.png"
};

var buzzwole = {
    name: "Buzzwole",
    dex: 794,
    alola: 294,
    type: "Bug/Fighting",
    ability: "Beast Boost",
    wiki: "http://www.serebii.net/pokedex-sm/794.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/794.png"
};

var pheromosa = {
    name: "Pheromosa",
    dex: 795,
    alola: 295,
    type: "Bug/Fighting",
    ability: "Beast Boost",
    wiki: "http://www.serebii.net/pokedex-sm/795.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/795.png"
};

var xurkitree = {
    name: "Xurkitree",
    dex: 796,
    alola: 296,
    type: "Electric",
    ability: "Beast Boost",
    wiki: "http://www.serebii.net/pokedex-sm/796.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/796.png"
};

var celesteela = {
    name: "Celesteela",
    dex: 797,
    alola: 297,
    type: "Steel/Flying",
    ability: "Beast Boost",
    wiki: "http://www.serebii.net/pokedex-sm/797.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/797.png"
};

var kartana = {
    name: "Kartana",
    dex: 798,
    alola: 298,
    type: "Grass/Steel",
    ability: "Beast Boost",
    wiki: "http://www.serebii.net/pokedex-sm/798.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/798.png"
};

var guzzlord = {
    name: "Guzzlord",
    dex: 799,
    alola: 299,
    type: "Dark/Dragon",
    ability: "Beast Boost",
    wiki: "http://www.serebii.net/pokedex-sm/799.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/799.png"
};

var necrozma = {
    name: "Necrozma",
    dex: 800,
    alola: 300,
    type: "Psychic",
    ability: "Prism Armor",
    wiki: "http://www.serebii.net/pokedex-sm/800.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/800.png"
};

var magearna = {
    name: "Magearna",
    dex: 801,
    alola: 301,
    type: "Steel/Fairy",
    ability: "Soul-Heart",
    wiki: "http://www.serebii.net/pokedex-sm/801.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/801.png"
};

var marshadow = {
    name: "Marshadow",
    dex: 802,
    alola: 302,
    type: "Fighting/Ghost",
    ability: "Technician",
    wiki: "http://www.serebii.net/pokedex-sm/802.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/802.png"
};
