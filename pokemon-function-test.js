var mons = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "alolan rattata", "alolan raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "alolan raichu", "sandshrew", "sandslash", "alolan sandshrew", "alolan sandslash", "nidoranf", "nidorina", "nidoqueen", "nidoranm", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "alolan vulpix", "alolan ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "alolan diglett", "alolan dugtrio", "meowth", "persian", "alolan meowth", "alolan persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "alolan geodude", "alolan graveler", "alolan golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "alolan grimer", "alolan muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "alolan exeggutor", "cubone", "marowak", "alolan marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion", "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi", "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos", "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking", "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress", "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish", "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring", "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid", "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom", "kingdra", "phanpy", "donphan", "porygon2", "stantler", "smeargle", "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank", "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar", "tyranitar", "lugia", "ho_oh", "celebi", "treecko", "grovyle", "sceptile", "torchic", "combusken", "blaziken", "mudkip", "marshtomp", "swampert", "poochyena", "mightyena", "zigzagoon", "linoone", "wurmple", "silcoon", "beautifly", "cascoon", "dustox", "lotad", "lombre", "ludicolo", "seedot", "nuzleaf", "shiftry", "taillow", "swellow", "wingull", "pelipper", "ralts", "kirlia", "gardevoir", "surskit", "masquerain", "shroomish", "breloom", "slakoth", "vigoroth", "slaking", "nincada", "ninjask", "shedinja", "whismur", "loudred", "exploud", "makuhita", "hariyama", "azurill", "nosepass", "skitty", "delcatty", "sableye", "mawile", "aron", "lairon", "aggron", "meditite", "medicham", "electrike", "manectric", "plusle", "minun", "volbeat", "illumise", "roselia", "gulpin", "swalot", "carvanha", "sharpedo", "wailmer", "wailord", "numel", "camerupt", "torkoal", "spoink", "grumpig", "spinda", "trapinch", "vibrava", "flygon", "cacnea", "cacturne", "swablu", "altaria", "zangoose", "seviper", "lunatone", "solrock", "barboach", "whiscash", "corphish", "crawdaunt", "baltoy", "claydol", "lileep", "cradily", "anorith", "armaldo", "feebas", "milotic", "castform", "castform sunny", "castform rainy", "castform snowy", "kecleon", "shuppet", "banette", "duskull", "dusclops", "tropius", "chimecho", "absol", "wynaut", "snorunt", "glalie", "spheal", "sealeo", "walrein", "clamperl", "huntail", "gorebyss", "relicanth", "luvdisc", "bagon", "shelgon", "salamence", "beldum", "metang", "metagross", "regirock", "regice", "registeel", "latias", "latios", "kyogre", "groudon", "rayquaza", "jirachi", "deoxys", "turtwig", "grotle", "torterra", "chimchar", "monferno", "infernape", "piplup", "prinplup", "empoleon", "starly", "staravia", "staraptor", "bidoof", "bibarel", "kricketot", "kricketune", "shinx", "luxio", "luxray", "budew", "roserade", "cranidos", "rampardos", "shieldon", "bastiodon", "burmy", "wormadam", "wormadam sandy", "wormadam trash", "mothim", "combee", "vespiquen", "pachirisu", "buizel", "floatzel", "cherubi", "cherrim", "shellos", "gastrodon", "ambipom", "drifloon", "drifblim", "buneary", "lopunny", "mismagius", "honchkrow", "glameow", "purugly", "chingling", "stunky", "skuntank", "bronzor", "bronzong", "bonsly", "mime jr", "happiny", "chatot", "spiritomb", "gible", "gabite", "garchomp", "munchlax", "riolu", "lucario", "hippopotas", "hippowdon", "skorupi", "drapion", "croagunk", "toxicroak", "carnivine", "finneon", "lumineon", "mantyke", "snover", "abomasnow", "weavile", "magnezone", "lickilicky", "rhyperior", "tangrowth", "electivire", "magmortar", "togekiss", "yanmega", "leafeon", "glaceon", "gliscor", "mamoswine", "porygon_z", "gallade", "probopass", "dusknoir", "froslass", "rotom", "rotom heat", "rotom wash", "rotom mow", "rotom fan", "rotom frost", "uxie", "mesprit", "azelf", "dialga", "palkia", "heatran", "regigigas", "giratina", "giratina origin", "cresselia", "phione", "manaphy", "darkrai", "shaymin", "shaymin sky", "arceus", "victini", "snivy", "servine", "serperior", "tepig", "pignite", "emboar", "oshawott", "dewott", "samurott", "patrat", "watchog", "lillipup", "herdier", "stoutland", "purrloin", "liepard", "pansage", "simisage", "pansear", "simisear", "panpour", "simipour", "munna", "musharna", "pidove", "tranquill", "unfezant", "blitzle", "zebstrika", "roggenrola", "boldore", "gigalith", "woobat", "swoobat", "drilbur", "excadrill", "audino", "timburr", "gurdurr", "conkeldurr", "tympole", "palpitoad", "seismitoad", "throh", "sawk", "sewaddle", "swadloon", "leavanny", "venipede", "whirlipede", "scolipede", "cottonee", "whimsicott", "petilil", "lilligant", "basculin", "basculin blue", "sandile", "krokorok", "krookodile", "darumaka", "darmanitan", "darmanitan zen", "maractus", "dwebble", "crustle", "scraggy", "scrafty", "sigilyph", "yamask", "cofagrigus", "tirtouga", "carracosta", "archen", "archeops", "trubbish", "garbodor", "zorua", "zoroark", "minccino", "cinccino", "gothita", "gothorita", "gothitelle", "solosis", "duosion", "reuniclus", "ducklett", "swanna", "vanillite", "vanillish", "vanilluxe", "deerling", "sawsbuck", "emolga", "karrablast", "escavalier", "foongus", "amoonguss", "frillish", "jellicent", "alomomola", "joltik", "galvantula", "ferroseed", "ferrothorn", "klink", "klang", "klinklang", "tynamo", "eelektrik", "eelektross", "elgyem", "beheeyem", "litwick", "lampent", "chandelure", "axew", "fraxure", "haxorus", "cubchoo", "beartic", "cryogonal", "shelmet", "accelgor", "stunfisk", "mienfoo", "mienshao", "druddigon", "golett", "golurk", "pawniard", "bisharp", "bouffalant", "rufflet", "braviary", "vullaby", "mandibuzz", "heatmor", "durant", "deino", "zweilous", "hydreigon", "larvesta", "volcarona", "cobalion", "terrakion", "virizion", "tornadus", "tornadus therian", "thundurus", "thundurus therian", "reshiram", "zekrom", "landorus", "landorus therian", "kyurem", "white kyurem", "black kyurem", "keldeo", "meloetta", "meloetta pirouette", "genesect", "chespin", "quilladin", "chesnaught", "fennekin", "braixen", "delphox", "froakie", "frogadier", "greninja", "bunnelby", "diggersby", "fletchling", "fletchinder", "talonflame", "scatterbug", "spewpa", "vivillon", "litleo", "pyroar", "flabebe", "floette", "florges", "skiddo", "gogoat", "pancham", "pangoro", "furfrou", "espurr", "meowstic", "honedge", "doublade", "aegislash", "spritzee", "aromatisse", "swirlix", "slurpuff", "inkay", "malamar", "binacle", "barbaracle", "skrelp", "dragalge", "clauncher", "clawitzer", "helioptile", "heliolisk", "tyrunt", "tyrantrum", "amaura", "aurorus", "sylveon", "hawlucha", "dedenne", "carbink", "goomy", "sliggoo", "goodra", "klefki", "phantump", "trevenant", "pumpkaboo", "gourgeist", "bergmite", "avalugg", "noibat", "noivern", "xerneas", "yveltal", "zygarde", "diancie", "hoopa", "hoopa unbound", "volcanion", "mega venusaur", "mega charizard x", "mega charizard y", "mega blastoise", "mega alakazam", "mega gengar", "mega kangaskhan", "mega pinsir", "mega gyarados", "mega aerodactyl", "mega mewtwo x", "mega mewtwo y", "mega ampharos", "mega scizor", "mega heracross", "mega houndoom", "mega tyranitar", "mega blaziken", "mega gardevoir", "mega mawile", "mega aggron", "mega medicham", "mega manectric", "mega banette", "mega absol", "mega garchomp", "mega lucario", "mega abomasnow", "mega beedrill", "mega pidgeot", "mega slowbro", "mega steelix", "mega sceptile", "mega swampert", "mega sableye", "mega sharpedo", "mega camerupt", "mega altaria", "mega glalie", "mega salamence", "mega metagross", "mega latias", "mega latios", "mega rayquaza", "mega lopunny", "mega gallade", "mega audino", "mega diancie", "rowlet", "dartrix", "decidueye", "litten", "torracat", "incineroar", "popplio", "brionne", "primarina", "pikipek", "trumbeak", "toucannon", "yungoos", "gumshoos", "grubbin", "charjabug", "vikavolt", "crabrawler", "crabominable", "oricorio", "cutiefly", "ribombee", "rockruff", "lycanroc", "lycanroc midnight", "wishiwashi", "mareanie", "toxapex", "mudbray", "mudsdale", "dewpider", "araquanid", "fomantis", "lurantis", "morelull", "shiinotic", "salandit", "salazzle", "stufful", "bewear", "bounsweet", "steenee", "tsareena", "comfey", "oranguru", "passimian", "wimpod", "golisopod", "sandygast", "palossand", "pyukumuku", "type null", "silvally", "minior", "komala", "turtonator", "togedemaru", "mimikyu", "bruxish", "drampa", "dhelmise", "jangmo_o", "hakamo_o", "kommo_o", "tapu koko", "tapu lele", "tapu bulu", "tapu fini", "cosmog", "cosmoem", "solgaleo", "lunala", "nihilego", "buzzwole", "pheromosa", "xurkitree", "celesteela", "kartana", "guzzlord", "necrozma", "magearna", "marshadow"];
var alolans = ["alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:017,", "alola:018,", "alola:019,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:015,", "alola:016,", "alola:015,", "alola:016,", "alola:073,", "alola:074,", "alola:-1,", "alola:-1,", "alola:025,", "alola:026,", "alola:026,", "alola:251,", "alola:252,", "alola:251,", "alola:252,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:211,", "alola:212,", "alola:253,", "alola:254,", "alola:253,", "alola:254,", "alola:135,", "alola:136,", "alola:068,", "alola:069,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:148,", "alola:148,", "alola:-1,", "alola:-1,", "alola:071,", "alola:072,", "alola:071,", "alola:072,", "alola:045,", "alola:046,", "alola:045,", "alola:046,", "alola:089,", "alola:090,", "alola:079,", "alola:080,", "alola:052,", "alola:053,", "alola:149,", "alola:150,", "alola:151,", "alola:059,", "alola:043,", "alola:044,", "alola:095,", "alola:096,", "alola:097,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:106,", "alola:107,", "alola:229,", "alola:230,", "alola:231,", "alola:229,", "alola:230,", "alola:231,", "alola:-1,", "alola:-1,", "alola:037,", "alola:038,", "alola:047,", "alola:048,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:050,", "alola:051,", "alola:050,", "alola:051,", "alola:115,", "alola:116,", "alola:061,", "alola:062,", "alola:063,", "alola:-1,", "alola:054,", "alola:055,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:269,", "alola:270,", "alola:270,", "alola:163,", "alola:164,", "alola:164,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:033,", "alola:-1,", "alola:165,", "alola:-1,", "alola:-1,", "alola:153,", "alola:154,", "alola:184,", "alola:185,", "alola:-1,", "alola:275,", "alola:-1,", "alola:227,", "alola:167,", "alola:175,", "alola:137,", "alola:091,", "alola:092,", "alola:268,", "alola:209,", "alola:123,", "alola:124,", "alola:125,", "alola:126,", "alola:219,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:284,", "alola:036,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:281,", "alola:282,", "alola:283,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:020,", "alola:021,", "alola:022,", "alola:023,", "alola:070,", "alola:201,", "alola:202,", "alola:024,", "alola:210,", "alola:134,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:031,", "alola:152,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:127,", "alola:128,", "alola:277,", "alola:039,", "alola:066,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:258,", "alola:259,", "alola:-1,", "alola:276,", "alola:-1,", "alola:-1,", "alola:249,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:112,", "alola:-1,", "alola:-1,", "alola:081,", "alola:-1,", "alola:208,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:218,", "alola:-1,", "alola:058,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:226,", "alola:166,", "alola:138,", "alola:034,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:040,", "alola:041,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:139,", "alola:140,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:056,", "alola:057,", "alola:-1,", "alola:198,", "alola:-1,", "alola:-1,", "alola:102,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:264,", "alola:265,", "alola:266,", "alola:267,", "alola:-1,", "alola:-1,", "alola:223,", "alola:-1,", "alola:-1,", "alola:105,", "alola:235,", "alola:236,", "alola:237,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:093,", "alola:094,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:155,", "alola:156,", "alola:181,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:245,", "alola:-1,", "alola:246,", "alola:247,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:262,", "alola:111,", "alola:117,", "alola:118,", "alola:119,", "alola:214,", "alola:215,", "alola:216,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:188,", "alola:189,", "alola:190,", "alola:191,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:260,", "alola:261,", "alola:-1,", "alola:064,", "alola:065,", "alola:-1,", "alola:-1,", "alola:067,", "alola:278,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:030,", "alola:-1,", "alola:032,", "alola:-1,", "alola:-1,", "alola:238,", "alola:239,", "alola:240,", "alola:035,", "alola:279,", "alola:280,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:108,", "alola:109,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:250,", "alola:049,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:228,", "alola:168,", "alola:-1,", "alola:-1,", "alola:129,", "alola:130,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:199,", "alola:-1,", "alola:248,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:120,", "alola:121,", "alola:122,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:098,", "alola:099,", "alola:100,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:087,", "alola:088,", "alola:085,", "alola:086,", "alola:-1,", "alola:-1,", "alola:232,", "alola:233,", "alola:234,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:194,", "alola:195,", "alola:192,", "alola:193,", "alola:206,", "alola:207,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:255,", "alola:256,", "alola:257,", "alola:-1,", "alola:-1,", "alola:274,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:157,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:075,", "alola:076,", "alola:077,", "alola:078,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:158,", "alola:159,", "alola:160,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:220,", "alola:221,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:131,", "alola:-1,", "alola:-1,", "alola:101,", "alola:178,", "alola:179,", "alola:180,", "alola:241,", "alola:196,", "alola:197,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:205,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:001,", "alola:002,", "alola:003,", "alola:004,", "alola:005,", "alola:006,", "alola:007,", "alola:008,", "alola:009,", "alola:010,", "alola:011,", "alola:012,", "alola:013,", "alola:014,", "alola:027,", "alola:028,", "alola:029,", "alola:059,", "alola:060,", "alola:082,", "alola:083,", "alola:084,", "alola:103,", "alola:104,", "alola:104,", "alola:110,", "alola:113,", "alola:114,", "alola:132,", "alola:133,", "alola:141,", "alola:142,", "alola:143,", "alola:144,", "alola:145,", "alola:146,", "alola:161,", "alola:162,", "alola:169,", "alola:170,", "alola:171,", "alola:172,", "alola:173,", "alola:174,", "alola:176,", "alola:177,", "alola:182,", "alola:183,", "alola:186,", "alola:187,", "alola:200,", "alola:-1,", "alola:204,", "alola:213,", "alola:222,", "alola:224,", "alola:225,", "alola:242,", "alola:243,", "alola:244,", "alola:263,", "alola:-1,", "alola:-1,", "alola:-1,", "alola:285,", "alola:286,", "alola:287,", "alola:288,", "alola:289,", "alola:290,", "alola:291,", "alola:292,", "alola:293,", "alola:294,", "alola:295,", "alola:296,", "alola:297,", "alola:298,", "alola:299,", "alola:300,", "alola:301,", "alola:302,"];
var i = 0;
function clicked(){
	if (i < mons.length){
		document.getElementById("myDiv").innerHTML += "var " + mons[i] + " = {<br />&nbsp;&nbsp;&nbsp;&nbsp;name: \"" + eval(mons[i]).name + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;dex: " + eval(mons[i]).dex + ",<br />&nbsp;&nbsp;&nbsp;&nbsp;alola: " + alolans[i] + ",<br />&nbsp;&nbsp;&nbsp;&nbsp;type: \"" + eval(mons[i]).type + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;ability: \"" + eval(mons[i]).ability + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;wiki: \"" + eval(mons[i]).wiki + "\",<br />&nbsp;&nbsp;&nbsp;&nbsp;image: \"" + eval(mons[i]).image + "\"<br />};<br /><br />";
		console.log(i);
		i++;
		setTimeout(function(){clicked();},10);
	}
}

console.log("neo version");

var bulbasaur = {
    name: "Bulbasaur",
    dex: 1,
    type: "Grass/Poison",
    ability: "Overgrow/None/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-sm/001.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/001.png"
};

var ivysaur = {
    name: "Ivysaur",
    dex: 2,
    type: "Grass/Poison",
    ability: "Overgrow/None/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-sm/002.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/002.png"
};

var venusaur = {
    name: "Venusaur",
    dex: 3,
    type: "Grass/Poison",
    ability: "Overgrow/None/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-sm/003.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/003.png"
};

var charmander = {
    name: "Charmander",
    dex: 4,
    type: "Fire",
    ability: "Blaze/None/Solar Power",
    wiki: "http://www.serebii.net/pokedex-sm/004.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/004.png"
};

var charmeleon = {
    name: "Charmeleon",
    dex: 5,
    type: "Fire",
    ability: "Blaze/None/Solar Power",
    wiki: "http://www.serebii.net/pokedex-sm/005.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/005.png"
};

var charizard = {
    name: "Charizard",
    dex: 6,
    type: "Fire/Flying",
    ability: "Blaze/None/Solar Power",
    wiki: "http://www.serebii.net/pokedex-sm/006.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/006.png"
};

var squirtle = {
    name: "Squirtle",
    dex: 7,
    type: "Water",
    ability: "Torrent/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/007.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/007.png"
};

var wartortle = {
    name: "Wartortle",
    dex: 8,
    type: "Water",
    ability: "Torrent/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/008.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/008.png"
};

var blastoise = {
    name: "Blastoise",
    dex: 9,
    type: "Water",
    ability: "Torrent/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/009.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/009.png"
};

var caterpie = {
    name: "Caterpie",
    dex: 10,
    type: "Bug",
    ability: "Shield Dust/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-sm/010.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/010.png"
};

var metapod = {
    name: "Metapod",
    dex: 11,
    type: "Bug",
    ability: "Shed Skin",
    wiki: "http://www.serebii.net/pokedex-sm/011.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/011.png"
};

var butterfree = {
    name: "Butterfree",
    dex: 12,
    type: "Bug/Flying",
    ability: "Compound Eyes/None/Tinted Lens",
    wiki: "http://www.serebii.net/pokedex-sm/012.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/012.png"
};

var weedle = {
    name: "Weedle",
    dex: 13,
    type: "Bug/Poison",
    ability: "Shield Dust/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-sm/013.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/013.png"
};

var kakuna = {
    name: "Kakuna",
    dex: 14,
    type: "Bug/Poison",
    ability: "Shed Skin",
    wiki: "http://www.serebii.net/pokedex-sm/014.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/014.png"
};

var beedrill = {
    name: "Beedrill",
    dex: 15,
    type: "Bug/Poison",
    ability: "Swarm/None/Sniper",
    wiki: "http://www.serebii.net/pokedex-sm/015.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/015.png"
};

var pidgey = {
    name: "Pidgey",
    dex: 16,
    type: "Normal/Flying",
    ability: "Keen Eye/Tangled Feet/Big Pecks",
    wiki: "http://www.serebii.net/pokedex-sm/016.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/016.png"
};

var pidgeotto = {
    name: "Pidgeotto",
    dex: 17,
    type: "Normal/Flying",
    ability: "Keen Eye/Tangled Feet/Big Pecks",
    wiki: "http://www.serebii.net/pokedex-sm/017.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/017.png"
};

var pidgeot = {
    name: "Pidgeot",
    dex: 18,
    type: "Normal/Flying",
    ability: "Keen Eye/Tangled Feet/Big Pecks",
    wiki: "http://www.serebii.net/pokedex-sm/018.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/018.png"
};

var rattata = {
    name: "Rattata",
    dex: 19,
    type: "Normal",
    ability: "Run Away/Guts/Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/019.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/019.png"
};

var raticate = {
    name: "Raticate",
    dex: 20,
    type: "Normal",
    ability: "Run Away/Guts/Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/020.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/020.png"
};

var alolan_rattata = {
    name: "Rattata",
    dex: 19,
    type: "Dark/Normal",
    ability: "Gluttony/Hustle/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-sm/019.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/019-a.png"
};

var alolan_raticate = {
    name: "Alolan Raticate",
    dex: 20,
    type: "Dark Normal",
    ability: "Gluttony/Hustle/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-sm/020.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/020-a.png"
};

var spearow = {
    name: "Spearow",
    dex: 21,
    type: "Normal/Flying",
    ability: "Keen Eye/None/Sniper",
    wiki: "http://www.serebii.net/pokedex-sm/021.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/021.png"
};

var fearow = {
    name: "Fearow",
    dex: 22,
    type: "Normal/Flying",
    ability: "Keen Eye/None/Sniper",
    wiki: "http://www.serebii.net/pokedex-sm/022.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/022.png"
};

var ekans = {
    name: "Ekans",
    dex: 23,
    type: "Poison",
    ability: "Intimidate/Shed Skin/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/023.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/023.png"
};

var arbok = {
    name: "Arbok",
    dex: 24,
    type: "Poison",
    ability: "Intimidate/Shed Skin/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/024.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/024.png"
};

var pikachu = {
    name: "Pikachu",
    dex: 25,
    type: "Electric",
    ability: "Static/None/Lightning Rod",
    wiki: "http://www.serebii.net/pokedex-sm/025.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/025.png"
};

var raichu = {
    name: "Raichu",
    dex: 26,
    type: "Electric",
    ability: "Static/None/Lightning Rod",
    wiki: "http://www.serebii.net/pokedex-sm/026.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/026.png"
};

var raichu = {
    name: "Raichu",
    dex: 26,
    type: "Electric/Psychic",
    ability: "Surge Surfer",
    wiki: "http://www.serebii.net/pokedex-sm/026.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/026-a.png"
};

var sandshrew = {
    name: "Sandshrew",
    dex: 27,
    type: "Ground",
    ability: "Sand Veil/None/Sand Rush",
    wiki: "http://www.serebii.net/pokedex-sm/027.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/027.png"
};

var sandslash = {
    name: "Sandslash",
    dex: 28,
    type: "Ground",
    ability: "Sand Veil/None/Sand Rush",
    wiki: "http://www.serebii.net/pokedex-sm/028.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/028.png"
};

var alolan_sandshrew = {
    name: "Alolan Sandshrew",
    dex: 27,
    type: "Ice/Steel",
    ability: "Snow Cloak/None/Slush Rush",
    wiki: "http://www.serebii.net/pokedex-sm/027.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/027-a.png"
};

var alolan_sandslash = {
    name: "Alolan Sandslash",
    dex: 28,
    type: "Ice/Steel",
    ability: "Snow Cloak/None/Slush Rush",
    wiki: "http://www.serebii.net/pokedex-sm/028.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/028-a.png"
};

var nidoranf = {
    name: "Nidoran♀",
    dex: 29,
    type: "Poison",
    ability: "Poison Point/Rivalry/Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/029.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/029.png"
};

var nidorina = {
    name: "Nidorina",
    dex: 30,
    type: "Poison",
    ability: "Poison Point/Rivalry/Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/030.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/030.png"
};

var nidoqueen = {
    name: "Nidoqueen",
    dex: 31,
    type: "Poison/Ground",
    ability: "Poison Point/Rivalry/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/031.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/031.png"
};

var nidoranm = {
    name: "Nidoran♂",
    dex: 32,
    type: "Poison",
    ability: "Poison Point/Rivalry/Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/032.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/032.png"
};

var nidorino = {
    name: "Nidorino",
    dex: 33,
    type: "Poison",
    ability: "Poison Point/Rivalry/Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/033.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/033.png"
};

var nidoking = {
    name: "Nidoking",
    dex: 34,
    type: "Poison/Ground",
    ability: "Poison Point/Rivalry/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/034.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/034.png"
};

var clefairy = {
    name: "Clefairy",
    dex: 35,
    type: "Fairy",
    ability: "Cute Charm/Magic Guard/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-sm/035.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/035.png"
};

var clefable = {
    name: "Clefable",
    dex: 36,
    type: "Fairy",
    ability: "Cute Charm/Magic Guard/Unaware",
    wiki: "http://www.serebii.net/pokedex-sm/036.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/036.png"
};

var vulpix = {
    name: "Vulpix",
    dex: 37,
    type: "Fire",
    ability: "Flash Fire/None/Drought",
    wiki: "http://www.serebii.net/pokedex-sm/037.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/037.png"
};

var ninetales = {
    name: "Ninetales",
    dex: 38,
    type: "Fire",
    ability: "Flash Fire/None/Drought",
    wiki: "http://www.serebii.net/pokedex-sm/038.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/038.png"
};

var alolan_vulpix = {
    name: "Alolan Vulpix",
    dex: 37,
    type: "Ice",
    ability: "Snow Cloak/None/Snow Warning",
    wiki: "http://www.serebii.net/pokedex-sm/037.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/037-a.png"
};

var alolan_ninetales = {
    name: "Alolan Ninetales",
    dex: 38,
    type: "Ice/Fairy",
    ability: "Snow Cloak/None/Snow Warning",
    wiki: "http://www.serebii.net/pokedex-sm/038.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/038-a.png"
};

var jigglypuff = {
    name: "Jigglypuff",
    dex: 39,
    type: "Normal/Fairy",
    ability: "Cute Charm/Competitive/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-sm/039.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/039.png"
};

var wigglytuff = {
    name: "Wigglytuff",
    dex: 40,
    type: "Normal/Fairy",
    ability: "Cute Charm/Competitive/Frisk",
    wiki: "http://www.serebii.net/pokedex-sm/040.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/040.png"
};

var zubat = {
    name: "Zubat",
    dex: 41,
    type: "Poison/Flying",
    ability: "Inner Focus/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/041.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/041.png"
};

var golbat = {
    name: "Golbat",
    dex: 42,
    type: "Poison/Flying",
    ability: "Inner Focus/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/042.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/042.png"
};

var oddish = {
    name: "Oddish",
    dex: 43,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-sm/043.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/043.png"
};

var gloom = {
    name: "Gloom",
    dex: 44,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Stench",
    wiki: "http://www.serebii.net/pokedex-sm/044.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/044.png"
};

var vileplume = {
    name: "Vileplume",
    dex: 45,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Effect Spore",
    wiki: "http://www.serebii.net/pokedex-sm/045.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/045.png"
};

var paras = {
    name: "Paras",
    dex: 46,
    type: "Bug/Grass",
    ability: "Effect Spore/Dry Skin/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/046.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/046.png"
};

var parasect = {
    name: "Parasect",
    dex: 47,
    type: "Bug/Grass",
    ability: "Effect Spore/Dry Skin/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/047.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/047.png"
};

var venonat = {
    name: "Venonat",
    dex: 48,
    type: "Bug/Poison",
    ability: "Compound Eyes/Tinted Lens/Run Away",
    wiki: "http://www.serebii.net/pokedex-sm/048.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/048.png"
};

var venomoth = {
    name: "Venomoth",
    dex: 49,
    type: "Bug/Poison",
    ability: "Shield Dust/Tinted Lens/Wonder Skin",
    wiki: "http://www.serebii.net/pokedex-sm/049.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/049.png"
};

var diglett = {
    name: "Diglett",
    dex: 50,
    type: "Ground",
    ability: "Sand Veil/Arena Trap/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/050.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/050.png"
};

var dugtrio = {
    name: "Dugtrio",
    dex: 51,
    type: "Ground",
    ability: "Sand Veil/Arena Trap/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/051.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/051.png"
};

var meowth = {
    name: "Meowth",
    dex: 52,
    type: "Normal",
    ability: "Pickup/Technician/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/052.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/052.png"
};

var persian = {
    name: "Persian",
    dex: 53,
    type: "Normal",
    ability: "Limber/Technician/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/053.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/053.png"
};

var alolan_diglett = {
    name: "Alolan Diglett",
    dex: 50,
    type: "Ground/Steel",
    ability: "Sand Veil/Tangling Hair/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/050.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/050-a.png"
};

var alolan_dugtrio = {
    name: "Alolan Dugtrio",
    dex: 51,
    type: "Ground/Steel",
    ability: "Sand Veil/Tangling Hair/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/051.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/051-a.png"
};

var alolan_meowth = {
    name: "Alolan Meowth",
    dex: 52,
    type: "Dark",
    ability: "Pickup/Technician/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/052.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/052-a.png"
};

var alolan_persian = {
    name: "Alolan Persian",
    dex: 53,
    type: "Dark",
    ability: "Limber/Technician/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/053.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/053-a.png"
};

var psyduck = {
    name: "Psyduck",
    dex: 54,
    type: "Water",
    ability: "Damp/Cloud Nine/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/054.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/054.png"
};

var golduck = {
    name: "Golduck",
    dex: 55,
    type: "Water",
    ability: "Damp/Cloud Nine/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/055.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/055.png"
};

var mankey = {
    name: "Mankey",
    dex: 56,
    type: "Fighting",
    ability: "Vital Spirit/Anger Point/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/056.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/056.png"
};

var primeape = {
    name: "Primeape",
    dex: 57,
    type: "Fighting",
    ability: "Vital Spirit/Anger Point/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/057.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/057.png"
};

var growlithe = {
    name: "Growlithe",
    dex: 58,
    type: "Fire",
    ability: "Intimidate/Flash Fire/Justified",
    wiki: "http://www.serebii.net/pokedex-sm/058.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/058.png"
};

var arcanine = {
    name: "Arcanine",
    dex: 59,
    type: "Fire",
    ability: "Intimidate/Flash Fire/Justified",
    wiki: "http://www.serebii.net/pokedex-sm/059.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/059.png"
};

var poliwag = {
    name: "Poliwag",
    dex: 60,
    type: "Water",
    ability: "Water Absorb/Damp/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/060.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/060.png"
};

var poliwhirl = {
    name: "Poliwhirl",
    dex: 61,
    type: "Water",
    ability: "Water Absorb/Damp/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/061.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/061.png"
};

var poliwrath = {
    name: "Poliwrath",
    dex: 62,
    type: "Water/Fighting",
    ability: "Water Absorb/Damp/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/062.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/062.png"
};

var abra = {
    name: "Abra",
    dex: 63,
    type: "Psychic",
    ability: "Synchronize/Inner Focus/Magic Guard",
    wiki: "http://www.serebii.net/pokedex-sm/063.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/063.png"
};

var kadabra = {
    name: "Kadabra",
    dex: 64,
    type: "Psychic",
    ability: "Synchronize/Inner Focus/Magic Guard",
    wiki: "http://www.serebii.net/pokedex-sm/064.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/064.png"
};

var alakazam = {
    name: "Alakazam",
    dex: 65,
    type: "Psychic",
    ability: "Synchronize/Inner Focus/Magic Guard",
    wiki: "http://www.serebii.net/pokedex-sm/065.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/065.png"
};

var machop = {
    name: "Machop",
    dex: 66,
    type: "Fighting",
    ability: "Guts/No Guard/Steadfast",
    wiki: "http://www.serebii.net/pokedex-sm/066.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/066.png"
};

var machoke = {
    name: "Machoke",
    dex: 67,
    type: "Fighting",
    ability: "Guts/No Guard/Steadfast",
    wiki: "http://www.serebii.net/pokedex-sm/067.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/067.png"
};

var machamp = {
    name: "Machamp",
    dex: 68,
    type: "Fighting",
    ability: "Guts/No Guard/Steadfast",
    wiki: "http://www.serebii.net/pokedex-sm/068.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/068.png"
};

var bellsprout = {
    name: "Bellsprout",
    dex: 69,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/069.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/069.png"
};

var weepinbell = {
    name: "Weepinbell",
    dex: 70,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/070.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/070.png"
};

var victreebel = {
    name: "Victreebel",
    dex: 71,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/071.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/071.png"
};

var tentacool = {
    name: "Tentacool",
    dex: 72,
    type: "Water/Poison",
    ability: "Clear Body/Liquid Ooze/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/072.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/072.png"
};

var tentacruel = {
    name: "Tentacruel",
    dex: 73,
    type: "Water/Poison",
    ability: "Clear Body/Liquid Ooze/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/073.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/073.png"
};

var geodude = {
    name: "Geodude",
    dex: 74,
    type: "Rock/Ground",
    ability: "Rock Head/Sturdy/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/074.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/074.png"
};

var graveler = {
    name: "Graveler",
    dex: 75,
    type: "Rock/Ground",
    ability: "Rock Head/Sturdy/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/075.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/075.png"
};

var golem = {
    name: "Golem",
    dex: 76,
    type: "Rock/Ground",
    ability: "Rock Head/Sturdy/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/076.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/076.png"
};

var alolan_geodude = {
    name: "Alolan Geodude",
    dex: 74,
    type: "Rock/Electric",
    ability: "Magnet Pull/Sturdy/Galvanise",
    wiki: "http://www.serebii.net/pokedex-sm/074.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/074.png-a"
};

var alolan_graveler = {
    name: "Alolan Graveler",
    dex: 75,
    type: "Rock/Electric",
    ability: "Magnet Pull/Sturdy/Galvanise",
    wiki: "http://www.serebii.net/pokedex-sm/075.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/075-a.png"
};

var alolan_golem = {
    name: "Alolan Golem",
    dex: 76,
    type: "Rock/Electric",
    ability: "Magnet Pull/Sturdy/Galvanise",
    wiki: "http://www.serebii.net/pokedex-sm/076.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/076-a.png"
};

var ponyta = {
    name: "Ponyta",
    dex: 77,
    type: "Fire",
    ability: "Run Away/Flash Fire/Flame Body",
    wiki: "http://www.serebii.net/pokedex-sm/077.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/077.png"
};

var rapidash = {
    name: "Rapidash",
    dex: 78,
    type: "Fire",
    ability: "Run Away/Flash Fire/Flame Body",
    wiki: "http://www.serebii.net/pokedex-sm/078.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/078.png"
};

var slowpoke = {
    name: "Slowpoke",
    dex: 79,
    type: "Water/Psychic",
    ability: "Oblivious/Own Tempo/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/079.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/079.png"
};

var slowbro = {
    name: "Slowbro",
    dex: 80,
    type: "Water/Psychic",
    ability: "Oblivious/Own Tempo/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/080.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/080.png"
};

var magnemite = {
    name: "Magnemite",
    dex: 81,
    type: "Electric/Steel",
    ability: "Magnet Pull/Sturdy/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/081.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/081.png"
};

var magneton = {
    name: "Magneton",
    dex: 82,
    type: "Electric/Steel",
    ability: "Magnet Pull/Sturdy/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/082.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/082.png"
};

var farfetchd = {
    name: "Farfetch'd",
    dex: 83,
    type: "Normal/Flying",
    ability: "Keen Eye/Inner Focus/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/083.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/083.png"
};

var doduo = {
    name: "Doduo",
    dex: 84,
    type: "Normal/Flying",
    ability: "Run Away/Early Bird/Tangled Feet",
    wiki: "http://www.serebii.net/pokedex-sm/084.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/084.png"
};

var dodrio = {
    name: "Dodrio",
    dex: 85,
    type: "Normal/Flying",
    ability: "Run Away/Early Bird/Tangled Feet",
    wiki: "http://www.serebii.net/pokedex-sm/085.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/085.png"
};

var seel = {
    name: "Seel",
    dex: 86,
    type: "Water",
    ability: "Thick Fat/Hydration/Ice Body",
    wiki: "http://www.serebii.net/pokedex-sm/086.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/086.png"
};

var dewgong = {
    name: "Dewgong",
    dex: 87,
    type: "Water/Ice",
    ability: "Thick Fat/Hydration/Ice Body",
    wiki: "http://www.serebii.net/pokedex-sm/087.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/087.png"
};

var grimer = {
    name: "Grimer",
    dex: 88,
    type: "Poison",
    ability: "Stench/Sticky Hold/Poison Touch",
    wiki: "http://www.serebii.net/pokedex-sm/088.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/088.png"
};

var muk = {
    name: "Muk",
    dex: 89,
    type: "Poison",
    ability: "Stench/Sticky Hold/Poison Touch",
    wiki: "http://www.serebii.net/pokedex-sm/089.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/089.png"
};

var alolan_grimer = {
    name: "Alolan Grimer",
    dex: 88,
    type: "Poison/Dark",
    ability: "Poison Touch/Gluttony/Power of Alchemy",
    wiki: "http://www.serebii.net/pokedex-sm/088.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/088-a.png"
};

var alolan_muk = {
    name: "Alolan Muk",
    dex: 89,
    type: "Poison/Dark",
    ability: "Poison Touch/Gluttony/Power of Alchemy",
    wiki: "http://www.serebii.net/pokedex-sm/089.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/089-a.png"
};

var shellder = {
    name: "Shellder",
    dex: 90,
    type: "Water",
    ability: "Shell Armor/Skill Link/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/090.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/090.png"
};

var cloyster = {
    name: "Cloyster",
    dex: 91,
    type: "Water/Ice",
    ability: "Shell Armor/Skill Link/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/091.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/091.png"
};

var gastly = {
    name: "Gastly",
    dex: 92,
    type: "Ghost/Poison",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/092.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/092.png"
};

var haunter = {
    name: "Haunter",
    dex: 93,
    type: "Ghost/Poison",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/093.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/093.png"
};

var gengar = {
    name: "Gengar",
    dex: 94,
    type: "Ghost/Poison",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/094.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/094.png"
};

var onix = {
    name: "Onix",
    dex: 95,
    type: "Rock/Ground",
    ability: "Rock Head/Sturdy/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/095.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/095.png"
};

var drowzee = {
    name: "Drowzee",
    dex: 96,
    type: "Psychic",
    ability: "Insomnia/Forewarn/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/096.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/096.png"
};

var hypno = {
    name: "Hypno",
    dex: 97,
    type: "Psychic",
    ability: "Insomnia/Forewarn/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/097.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/097.png"
};

var krabby = {
    name: "Krabby",
    dex: 98,
    type: "Water",
    ability: "Hyper Cutter/Shell Armor/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/098.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/098.png"
};

var kingler = {
    name: "Kingler",
    dex: 99,
    type: "Water",
    ability: "Hyper Cutter/Shell Armor/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/099.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/099.png"
};

var voltorb = {
    name: "Voltorb",
    dex: 100,
    type: "Electric",
    ability: "Soundproof/Static/Aftermath",
    wiki: "http://www.serebii.net/pokedex-sm/100.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/100.png"
};

var electrode = {
    name: "Electrode",
    dex: 101,
    type: "Electric",
    ability: "Soundproof/Static/Aftermath",
    wiki: "http://www.serebii.net/pokedex-sm/101.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/101.png"
};

var exeggcute = {
    name: "Exeggcute",
    dex: 102,
    type: "Grass/Psychic",
    ability: "Chlorophyll/None/Harvest",
    wiki: "http://www.serebii.net/pokedex-sm/102.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/102.png"
};

var exeggutor = {
    name: "Exeggutor",
    dex: 103,
    type: "Grass/Psychic",
    ability: "Chlorophyll/None/Harvest",
    wiki: "http://www.serebii.net/pokedex-sm/103.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/103.png"
};

var alolan_exeggutor = {
    name: "Alolan Exeggutor",
    dex: 103,
    type: "Grass/Dragon",
    ability: "Frisk/None/Harvest",
    wiki: "http://www.serebii.net/pokedex-sm/103.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/103-a.png"
};

var cubone = {
    name: "Cubone",
    dex: 104,
    type: "Ground",
    ability: "Rock Head/Lightning Rod/Battle Armor",
    wiki: "http://www.serebii.net/pokedex-sm/104.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/104.png"
};

var marowak = {
    name: "Marowak",
    dex: 105,
    type: "Ground",
    ability: "Rock Head/Lightning Rod/Battle Armor",
    wiki: "http://www.serebii.net/pokedex-sm/105.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/105.png"
};

var alolan_marowak = {
    name: "Alolan Marowak",
    dex: 105,
    type: "Fire/Ghost",
    ability: "Rock Head/Lightning Rod/Battle Armor",
    wiki: "http://www.serebii.net/pokedex-sm/105.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/105-a.png"
};

var hitmonlee = {
    name: "Hitmonlee",
    dex: 106,
    type: "Fighting",
    ability: "Limber/Reckless/Unburden",
    wiki: "http://www.serebii.net/pokedex-sm/106.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/106.png"
};

var hitmonchan = {
    name: "Hitmonchan",
    dex: 107,
    type: "Fighting",
    ability: "Keen Eye/Iron Fist/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/107.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/107.png"
};

var lickitung = {
    name: "Lickitung",
    dex: 108,
    type: "Normal",
    ability: "Own Tempo/Oblivious/Cloud Nine",
    wiki: "http://www.serebii.net/pokedex-sm/108.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/108.png"
};

var koffing = {
    name: "Koffing",
    dex: 109,
    type: "Poison",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/109.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/109.png"
};

var weezing = {
    name: "Weezing",
    dex: 110,
    type: "Poison",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/110.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/110.png"
};

var rhyhorn = {
    name: "Rhyhorn",
    dex: 111,
    type: "Ground/Rock",
    ability: "Lightning Rod/Rock Head/Reckless",
    wiki: "http://www.serebii.net/pokedex-sm/111.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/111.png"
};

var rhydon = {
    name: "Rhydon",
    dex: 112,
    type: "Ground/Rock",
    ability: "Lightning Rod/Rock Head/Reckless",
    wiki: "http://www.serebii.net/pokedex-sm/112.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/112.png"
};

var chansey = {
    name: "Chansey",
    dex: 113,
    type: "Normal",
    ability: "Natural Cure/Serene Grace/Healer",
    wiki: "http://www.serebii.net/pokedex-sm/113.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/113.png"
};

var tangela = {
    name: "Tangela",
    dex: 114,
    type: "Grass",
    ability: "Chlorophyll/Leaf Guard/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/114.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/114.png"
};

var kangaskhan = {
    name: "Kangaskhan",
    dex: 115,
    type: "Normal",
    ability: "Early Bird/Scrappy/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/115.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/115.png"
};

var horsea = {
    name: "Horsea",
    dex: 116,
    type: "Water",
    ability: "Swift Swim/Sniper/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/116.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/116.png"
};

var seadra = {
    name: "Seadra",
    dex: 117,
    type: "Water",
    ability: "Poison Point/Sniper/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/117.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/117.png"
};

var goldeen = {
    name: "Goldeen",
    dex: 118,
    type: "Water",
    ability: "Swift Swim/Water Veil/Lightning Rod",
    wiki: "http://www.serebii.net/pokedex-sm/118.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/118.png"
};

var seaking = {
    name: "Seaking",
    dex: 119,
    type: "Water",
    ability: "Swift Swim/Water Veil/Lightning Rod",
    wiki: "http://www.serebii.net/pokedex-sm/119.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/119.png"
};

var staryu = {
    name: "Staryu",
    dex: 120,
    type: "Water",
    ability: "Illuminate/Natural Cure/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/120.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/120.png"
};

var starmie = {
    name: "Starmie",
    dex: 121,
    type: "Water/Psychic",
    ability: "Illuminate/Natural Cure/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/121.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/121.png"
};

var mr_mime = {
    name: "Mr. Mime",
    dex: 122,
    type: "Psychic/Fairy",
    ability: "Soundproof/Filter/Technician",
    wiki: "http://www.serebii.net/pokedex-sm/122.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/122.png"
};

var scyther = {
    name: "Scyther",
    dex: 123,
    type: "Bug/Flying",
    ability: "Swarm/Technician/Steadfast",
    wiki: "http://www.serebii.net/pokedex-sm/123.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/123.png"
};

var jynx = {
    name: "Jynx",
    dex: 124,
    type: "Ice/Psychic",
    ability: "Oblivious/Forewarn/Dry Skin",
    wiki: "http://www.serebii.net/pokedex-sm/124.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/124.png"
};

var electabuzz = {
    name: "Electabuzz",
    dex: 125,
    type: "Electric",
    ability: "Static/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-sm/125.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/125.png"
};

var magmar = {
    name: "Magmar",
    dex: 126,
    type: "Fire",
    ability: "Flame Body/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-sm/126.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/126.png"
};

var pinsir = {
    name: "Pinsir",
    dex: 127,
    type: "Bug",
    ability: "Hyper Cutter/Mold Breaker/Moxie",
    wiki: "http://www.serebii.net/pokedex-sm/127.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/127.png"
};

var tauros = {
    name: "Tauros",
    dex: 128,
    type: "Normal",
    ability: "Intimidate/Anger Point/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/128.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/128.png"
};

var magikarp = {
    name: "Magikarp",
    dex: 129,
    type: "Water",
    ability: "Swift Swim/None/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/129.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/129.png"
};

var gyarados = {
    name: "Gyarados",
    dex: 130,
    type: "Water/Flying",
    ability: "Intimidate/None/Moxie",
    wiki: "http://www.serebii.net/pokedex-sm/130.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/130.png"
};

var lapras = {
    name: "Lapras",
    dex: 131,
    type: "Water/Ice",
    ability: "Water Absorb/Shell Armor/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/131.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/131.png"
};

var ditto = {
    name: "Ditto",
    dex: 132,
    type: "Normal",
    ability: "Limber/None/Imposter",
    wiki: "http://www.serebii.net/pokedex-sm/132.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/132.png"
};

var eevee = {
    name: "Eevee",
    dex: 133,
    type: "Normal",
    ability: "Run Away/Adaptability/Anticipation",
    wiki: "http://www.serebii.net/pokedex-sm/133.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/133.png"
};

var vaporeon = {
    name: "Vaporeon",
    dex: 134,
    type: "Water",
    ability: "Water Absorb/None/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/134.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/134.png"
};

var jolteon = {
    name: "Jolteon",
    dex: 135,
    type: "Electric",
    ability: "Volt Absorb/None/Quick Feet",
    wiki: "http://www.serebii.net/pokedex-sm/135.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/135.png"
};

var flareon = {
    name: "Flareon",
    dex: 136,
    type: "Fire",
    ability: "Flash Fire/None/Guts",
    wiki: "http://www.serebii.net/pokedex-sm/136.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/136.png"
};

var porygon = {
    name: "Porygon",
    dex: 137,
    type: "Normal",
    ability: "Trace/Download/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/137.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/137.png"
};

var omanyte = {
    name: "Omanyte",
    dex: 138,
    type: "Rock/Water",
    ability: "Swift Swim/Shell Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/138.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/138.png"
};

var omastar = {
    name: "Omastar",
    dex: 139,
    type: "Rock/Water",
    ability: "Swift Swim/Shell Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/139.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/139.png"
};

var kabuto = {
    name: "Kabuto",
    dex: 140,
    type: "Rock/Water",
    ability: "Swift Swim/Battle Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/140.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/140.png"
};

var kabutops = {
    name: "Kabutops",
    dex: 141,
    type: "Rock/Water",
    ability: "Swift Swim/Battle Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/141.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/141.png"
};

var aerodactyl = {
    name: "Aerodactyl",
    dex: 142,
    type: "Rock/Flying",
    ability: "Rock Head/Pressure/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/142.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/142.png"
};

var snorlax = {
    name: "Snorlax",
    dex: 143,
    type: "Normal",
    ability: "Immunity/Thick Fat/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/143.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/143.png"
};

var articuno = {
    name: "Articuno",
    dex: 144,
    type: "Ice/Flying",
    ability: "Pressure/None/Snow Cloak",
    wiki: "http://www.serebii.net/pokedex-sm/144.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/144.png"
};

var zapdos = {
    name: "Zapdos",
    dex: 145,
    type: "Electric/Flying",
    ability: "Pressure/None/Static/",
    wiki: "http://www.serebii.net/pokedex-sm/145.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/145.png"
};

var moltres = {
    name: "Moltres",
    dex: 146,
    type: "Fire/Flying",
    ability: "Pressure/None/Flame Body",
    wiki: "http://www.serebii.net/pokedex-sm/146.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/146.png"
};

var dratini = {
    name: "Dratini",
    dex: 147,
    type: "Dragon",
    ability: "Shed Skin/None/Marvel Scale",
    wiki: "http://www.serebii.net/pokedex-sm/147.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/147.png"
};

var dragonair = {
    name: "Dragonair",
    dex: 148,
    type: "Dragon",
    ability: "Shed Skin/None/Marvel Scale",
    wiki: "http://www.serebii.net/pokedex-sm/148.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/148.png"
};

var dragonite = {
    name: "Dragonite",
    dex: 149,
    type: "Dragon/Flying",
    ability: "Inner Focus/None/Multiscale",
    wiki: "http://www.serebii.net/pokedex-sm/149.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/149.png"
};

var mewtwo = {
    name: "Mewtwo",
    dex: 150,
    type: "Psychic",
    ability: "Pressure/None/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/150.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/150.png"
};

var mew = {
    name: "Mew",
    dex: 151,
    type: "Psychic",
    ability: "Synchronize",
    wiki: "http://www.serebii.net/pokedex-sm/151.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/151.png"
};

var chikorita = {
    name: "Chikorita",
    dex: 152,
    type: "Grass",
    ability: "Overgrow/None/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-sm/152.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/152.png"
};

var bayleef = {
    name: "Bayleef",
    dex: 153,
    type: "Grass",
    ability: "Overgrow/None/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-sm/153.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/153.png"
};

var meganium = {
    name: "Meganium",
    dex: 154,
    type: "Grass",
    ability: "Overgrow/None/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-sm/154.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/154.png"
};

var cyndaquil = {
    name: "Cyndaquil",
    dex: 155,
    type: "Fire",
    ability: "Blaze/None/Flash Fire",
    wiki: "http://www.serebii.net/pokedex-sm/155.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/155.png"
};

var quilava = {
    name: "Quilava",
    dex: 156,
    type: "Fire",
    ability: "Blaze/None/Flash Fire",
    wiki: "http://www.serebii.net/pokedex-sm/156.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/156.png"
};

var typhlosion = {
    name: "Typhlosion",
    dex: 157,
    type: "Fire",
    ability: "Blaze/None/Flash Fire",
    wiki: "http://www.serebii.net/pokedex-sm/157.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/157.png"
};

var totodile = {
    name: "Totodile",
    dex: 158,
    type: "Water",
    ability: "Torrent/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/158.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/158.png"
};

var croconaw = {
    name: "Croconaw",
    dex: 159,
    type: "Water",
    ability: "Torrent/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/159.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/159.png"
};

var feraligatr = {
    name: "Feraligatr",
    dex: 160,
    type: "Water",
    ability: "Torrent/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/160.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/160.png"
};

var sentret = {
    name: "Sentret",
    dex: 161,
    type: "Normal",
    ability: "Run Away/Keen Eye/Frisk",
    wiki: "http://www.serebii.net/pokedex-sm/161.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/161.png"
};

var furret = {
    name: "Furret",
    dex: 162,
    type: "Normal",
    ability: "Run Away/Keen Eye/Frisk",
    wiki: "http://www.serebii.net/pokedex-sm/162.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/162.png"
};

var hoothoot = {
    name: "Hoothoot",
    dex: 163,
    type: "Normal/Flying",
    ability: "Insomnia/Keen Eye/Tinted Lens",
    wiki: "http://www.serebii.net/pokedex-sm/163.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/163.png"
};

var noctowl = {
    name: "Noctowl",
    dex: 164,
    type: "Normal/Flying",
    ability: "Insomnia/Keen Eye/Tinted Lens",
    wiki: "http://www.serebii.net/pokedex-sm/164.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/164.png"
};

var ledyba = {
    name: "Ledyba",
    dex: 165,
    type: "Bug/Flying",
    ability: "Swarm/Early Bird/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/165.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/165.png"
};

var ledian = {
    name: "Ledian",
    dex: 166,
    type: "Bug/Flying",
    ability: "Swarm/Early Bird/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-sm/166.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/166.png"
};

var spinarak = {
    name: "Spinarak",
    dex: 167,
    type: "Bug/Poison",
    ability: "Swarm/Insomnia/Sniper",
    wiki: "http://www.serebii.net/pokedex-sm/167.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/167.png"
};

var ariados = {
    name: "Ariados",
    dex: 168,
    type: "Bug/Poison",
    ability: "Swarm/Insomnia/Sniper",
    wiki: "http://www.serebii.net/pokedex-sm/168.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/168.png"
};

var crobat = {
    name: "Crobat",
    dex: 169,
    type: "Poison/Flying",
    ability: "Inner Focus/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/169.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/169.png"
};

var chinchou = {
    name: "Chinchou",
    dex: 170,
    type: "Water/Electric",
    ability: "Volt Absorb/Illuminate/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/170.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/170.png"
};

var lanturn = {
    name: "Lanturn",
    dex: 171,
    type: "Water/Electric",
    ability: "Volt Absorb/Illuminate/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/171.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/171.png"
};

var pichu = {
    name: "Pichu",
    dex: 172,
    type: "Electric",
    ability: "Static/None/Lightning Rod",
    wiki: "http://www.serebii.net/pokedex-sm/172.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/172.png"
};

var cleffa = {
    name: "Cleffa",
    dex: 173,
    type: "Fairy",
    ability: "Cute Charm/Magic Guard/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-sm/173.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/173.png"
};

var igglybuff = {
    name: "Igglybuff",
    dex: 174,
    type: "Normal/Fairy",
    ability: "Cute Charm/Competitive/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-sm/174.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/174.png"
};

var togepi = {
    name: "Togepi",
    dex: 175,
    type: "Fairy",
    ability: "Hustle/Serene Grace/Super Luck",
    wiki: "http://www.serebii.net/pokedex-sm/175.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/175.png"
};

var togetic = {
    name: "Togetic",
    dex: 176,
    type: "Fairy/Flying",
    ability: "Hustle/Serene Grace/Super Luck",
    wiki: "http://www.serebii.net/pokedex-sm/176.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/176.png"
};

var natu = {
    name: "Natu",
    dex: 177,
    type: "Psychic/Flying",
    ability: "Synchronize/Early Bird/Magic Bounce",
    wiki: "http://www.serebii.net/pokedex-sm/177.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/177.png"
};

var xatu = {
    name: "Xatu",
    dex: 178,
    type: "Psychic/Flying",
    ability: "Synchronize/Early Bird/Magic Bounce",
    wiki: "http://www.serebii.net/pokedex-sm/178.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/178.png"
};

var mareep = {
    name: "Mareep",
    dex: 179,
    type: "Electric",
    ability: "Static/None/Plus",
    wiki: "http://www.serebii.net/pokedex-sm/179.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/179.png"
};

var flaaffy = {
    name: "Flaaffy",
    dex: 180,
    type: "Electric",
    ability: "Static/None/Plus",
    wiki: "http://www.serebii.net/pokedex-sm/180.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/180.png"
};

var ampharos = {
    name: "Ampharos",
    dex: 181,
    type: "Electric",
    ability: "Static/None/Plus",
    wiki: "http://www.serebii.net/pokedex-sm/181.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/181.png"
};

var bellossom = {
    name: "Bellossom",
    dex: 182,
    type: "Grass",
    ability: "Chlorophyll/None/Healer",
    wiki: "http://www.serebii.net/pokedex-sm/182.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/182.png"
};

var marill = {
    name: "Marill",
    dex: 183,
    type: "Water/Fairy",
    ability: "Thick Fat/Huge Power/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-sm/183.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/183.png"
};

var azumarill = {
    name: "Azumarill",
    dex: 184,
    type: "Water/Fairy",
    ability: "Thick Fat/Huge Power/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-sm/184.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/184.png"
};

var sudowoodo = {
    name: "Sudowoodo",
    dex: 185,
    type: "Rock",
    ability: "Sturdy/Rock Head/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/185.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/185.png"
};

var politoed = {
    name: "Politoed",
    dex: 186,
    type: "Water",
    ability: "Water Absorb/Damp/Drizzle",
    wiki: "http://www.serebii.net/pokedex-sm/186.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/186.png"
};

var hoppip = {
    name: "Hoppip",
    dex: 187,
    type: "Grass/Flying",
    ability: "Chlorophyll/Leaf Guard/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/187.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/187.png"
};

var skiploom = {
    name: "Skiploom",
    dex: 188,
    type: "Grass/Flying",
    ability: "Chlorophyll/Leaf Guard/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/188.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/188.png"
};

var jumpluff = {
    name: "Jumpluff",
    dex: 189,
    type: "Grass/Flying",
    ability: "Chlorophyll/Leaf Guard/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/189.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/189.png"
};

var aipom = {
    name: "Aipom",
    dex: 190,
    type: "Normal",
    ability: "Run Away/Pickup/Skill Link",
    wiki: "http://www.serebii.net/pokedex-sm/190.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/190.png"
};

var sunkern = {
    name: "Sunkern",
    dex: 191,
    type: "Grass",
    ability: "Chlorophyll/Solar Power/Early Bird",
    wiki: "http://www.serebii.net/pokedex-sm/191.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/191.png"
};

var sunflora = {
    name: "Sunflora",
    dex: 192,
    type: "Grass",
    ability: "Chlorophyll/Solar Power/Early Bird",
    wiki: "http://www.serebii.net/pokedex-sm/192.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/192.png"
};

var yanma = {
    name: "Yanma",
    dex: 193,
    type: "Bug/Flying",
    ability: "Speed Boost/Compound Eyes/Frisk",
    wiki: "http://www.serebii.net/pokedex-sm/193.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/193.png"
};

var wooper = {
    name: "Wooper",
    dex: 194,
    type: "Water/Ground",
    ability: "Damp/Water Absorb/Unaware",
    wiki: "http://www.serebii.net/pokedex-sm/194.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/194.png"
};

var quagsire = {
    name: "Quagsire",
    dex: 195,
    type: "Water/Ground",
    ability: "Damp/Water Absorb/Unaware",
    wiki: "http://www.serebii.net/pokedex-sm/195.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/195.png"
};

var espeon = {
    name: "Espeon",
    dex: 196,
    type: "Psychic",
    ability: "Synchronize/None/Magic Bounce",
    wiki: "http://www.serebii.net/pokedex-sm/196.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/196.png"
};

var umbreon = {
    name: "Umbreon",
    dex: 197,
    type: "Dark",
    ability: "Synchronize/None/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/197.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/197.png"
};

var murkrow = {
    name: "Murkrow",
    dex: 198,
    type: "Dark/Flying",
    ability: "Insomnia/Super Luck/Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/198.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/198.png"
};

var slowking = {
    name: "Slowking",
    dex: 199,
    type: "Water/Psychic",
    ability: "Oblivious/Own Tempo/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/199.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/199.png"
};

var misdreavus = {
    name: "Misdreavus",
    dex: 200,
    type: "Ghost",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/200.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/200.png"
};

var unown = {
    name: "Unown",
    dex: 201,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/201.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/201.png"
};

var wobbuffet = {
    name: "Wobbuffet",
    dex: 202,
    type: "Psychic",
    ability: "Shadow Tag/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/202.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/202.png"
};

var girafarig = {
    name: "Girafarig",
    dex: 203,
    type: "Normal/Psychic",
    ability: "Inner Focus/Early Bird/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-sm/203.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/203.png"
};

var pineco = {
    name: "Pineco",
    dex: 204,
    type: "Bug",
    ability: "Sturdy/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/204.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/204.png"
};

var forretress = {
    name: "Forretress",
    dex: 205,
    type: "Bug/Steel",
    ability: "Sturdy/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/205.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/205.png"
};

var dunsparce = {
    name: "Dunsparce",
    dex: 206,
    type: "Normal",
    ability: "Serene Grace/Run Away/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/206.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/206.png"
};

var gligar = {
    name: "Gligar",
    dex: 207,
    type: "Ground/Flying",
    ability: "Hyper Cutter/Sand Veil/Immunity",
    wiki: "http://www.serebii.net/pokedex-sm/207.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/207.png"
};

var steelix = {
    name: "Steelix",
    dex: 208,
    type: "Steel/Ground",
    ability: "Rock Head/Sturdy/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/208.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/208.png"
};

var snubbull = {
    name: "Snubbull",
    dex: 209,
    type: "Fairy",
    ability: "Intimidate/Run Away/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/209.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/209.png"
};

var granbull = {
    name: "Granbull",
    dex: 210,
    type: "Fairy",
    ability: "Intimidate/Quick Feet/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/210.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/210.png"
};

var qwilfish = {
    name: "Qwilfish",
    dex: 211,
    type: "Water/Poison",
    ability: "Poison Point/Swift Swim/Intimidate",
    wiki: "http://www.serebii.net/pokedex-sm/211.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/211.png"
};

var scizor = {
    name: "Scizor",
    dex: 212,
    type: "Bug/Steel",
    ability: "Swarm/Technician/Light Metal",
    wiki: "http://www.serebii.net/pokedex-sm/212.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/212.png"
};

var shuckle = {
    name: "Shuckle",
    dex: 213,
    type: "Bug/Rock",
    ability: "Sturdy/Gluttony/Contrary",
    wiki: "http://www.serebii.net/pokedex-sm/213.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/213.png"
};

var heracross = {
    name: "Heracross",
    dex: 214,
    type: "Bug/Fighting",
    ability: "Swarm/Guts/Moxie",
    wiki: "http://www.serebii.net/pokedex-sm/214.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/214.png"
};

var sneasel = {
    name: "Sneasel",
    dex: 215,
    type: "Dark/Ice",
    ability: "Inner Focus/Keen Eye/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-sm/215.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/215.png"
};

var teddiursa = {
    name: "Teddiursa",
    dex: 216,
    type: "Normal",
    ability: "Pickup/Quick Feet/Honey Gather",
    wiki: "http://www.serebii.net/pokedex-sm/216.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/216.png"
};

var ursaring = {
    name: "Ursaring",
    dex: 217,
    type: "Normal",
    ability: "Guts/Quick Feet/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/217.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/217.png"
};

var slugma = {
    name: "Slugma",
    dex: 218,
    type: "Fire",
    ability: "Magma Armor/Flame Body/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/218.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/218.png"
};

var magcargo = {
    name: "Magcargo",
    dex: 219,
    type: "Fire/Rock",
    ability: "Magma Armor/Flame Body/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/219.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/219.png"
};

var swinub = {
    name: "Swinub",
    dex: 220,
    type: "Ice/Ground",
    ability: "Oblivious/Snow Cloak/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-sm/220.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/220.png"
};

var piloswine = {
    name: "Piloswine",
    dex: 221,
    type: "Ice/Ground",
    ability: "Oblivious/Snow Cloak/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-sm/221.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/221.png"
};

var corsola = {
    name: "Corsola",
    dex: 222,
    type: "Water/Rock",
    ability: "Hustle/Natural Cure/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/222.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/222.png"
};

var remoraid = {
    name: "Remoraid",
    dex: 223,
    type: "Water",
    ability: "Hustle/Sniper/Moody",
    wiki: "http://www.serebii.net/pokedex-sm/223.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/223.png"
};

var octillery = {
    name: "Octillery",
    dex: 224,
    type: "Water",
    ability: "Suction Cups/Sniper/Moody",
    wiki: "http://www.serebii.net/pokedex-sm/224.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/224.png"
};

var delibird = {
    name: "Delibird",
    dex: 225,
    type: "Ice/Flying",
    ability: "Vital Spirit/Hustle/Insomnia",
    wiki: "http://www.serebii.net/pokedex-sm/225.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/225.png"
};

var mantine = {
    name: "Mantine",
    dex: 226,
    type: "Water/Flying",
    ability: "Swift Swim/Water Absorb/Water Veil",
    wiki: "http://www.serebii.net/pokedex-sm/226.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/226.png"
};

var skarmory = {
    name: "Skarmory",
    dex: 227,
    type: "Steel/Flying",
    ability: "Keen Eye/Sturdy/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/227.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/227.png"
};

var houndour = {
    name: "Houndour",
    dex: 228,
    type: "Dark/Fire",
    ability: "Early Bird/Flash Fire/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/228.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/228.png"
};

var houndoom = {
    name: "Houndoom",
    dex: 229,
    type: "Dark/Fire",
    ability: "Early Bird/Flash Fire/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/229.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/229.png"
};

var kingdra = {
    name: "Kingdra",
    dex: 230,
    type: "Water/Dragon",
    ability: "Swift Swim/Sniper/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/230.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/230.png"
};

var phanpy = {
    name: "Phanpy",
    dex: 231,
    type: "Ground",
    ability: "Pickup/None/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/231.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/231.png"
};

var donphan = {
    name: "Donphan",
    dex: 232,
    type: "Ground",
    ability: "Sturdy/None/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/232.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/232.png"
};

var porygon2 = {
    name: "Porygon2",
    dex: 233,
    type: "Normal",
    ability: "Trace/Download/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/233.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/233.png"
};

var stantler = {
    name: "Stantler",
    dex: 234,
    type: "Normal",
    ability: "Intimidate/Frisk/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-sm/234.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/234.png"
};

var smeargle = {
    name: "Smeargle",
    dex: 235,
    type: "Normal",
    ability: "Own Tempo/Technician/Moody",
    wiki: "http://www.serebii.net/pokedex-sm/235.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/235.png"
};

var tyrogue = {
    name: "Tyrogue",
    dex: 236,
    type: "Fighting",
    ability: "Guts/Steadfast/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-sm/236.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/236.png"
};

var hitmontop = {
    name: "Hitmontop",
    dex: 237,
    type: "Fighting",
    ability: "Intimidate/Technician/Steadfast",
    wiki: "http://www.serebii.net/pokedex-sm/237.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/237.png"
};

var smoochum = {
    name: "Smoochum",
    dex: 238,
    type: "Ice/Psychic",
    ability: "Oblivious/Forewarn/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/238.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/238.png"
};

var elekid = {
    name: "Elekid",
    dex: 239,
    type: "Electric",
    ability: "Static/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-sm/239.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/239.png"
};

var magby = {
    name: "Magby",
    dex: 240,
    type: "Fire",
    ability: "Flame Body/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-sm/240.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/240.png"
};

var miltank = {
    name: "Miltank",
    dex: 241,
    type: "Normal",
    ability: "Thick Fat/Scrappy/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-sm/241.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/241.png"
};

var blissey = {
    name: "Blissey",
    dex: 242,
    type: "Normal",
    ability: "Natural Cure/Serene Grace/Healer",
    wiki: "http://www.serebii.net/pokedex-sm/242.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/242.png"
};

var raikou = {
    name: "Raikou",
    dex: 243,
    type: "Electric",
    ability: "Pressure/None/Volt Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/243.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/243.png"
};

var entei = {
    name: "Entei",
    dex: 244,
    type: "Fire",
    ability: "Pressure/None/Flash Fire",
    wiki: "http://www.serebii.net/pokedex-sm/244.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/244.png"
};

var suicune = {
    name: "Suicune",
    dex: 245,
    type: "Water",
    ability: "Pressure/None/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/245.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/245.png"
};

var larvitar = {
    name: "Larvitar",
    dex: 246,
    type: "Rock/Ground",
    ability: "Guts/None/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/246.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/246.png"
};

var pupitar = {
    name: "Pupitar",
    dex: 247,
    type: "Rock/Ground",
    ability: "Shed Skin",
    wiki: "http://www.serebii.net/pokedex-sm/247.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/247.png"
};

var tyranitar = {
    name: "Tyranitar",
    dex: 248,
    type: "Rock/Dark",
    ability: "Sand Stream/None/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/248.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/248.png"
};

var lugia = {
    name: "Lugia",
    dex: 249,
    type: "Psychic/Flying",
    ability: "Pressure/None/Multiscale",
    wiki: "http://www.serebii.net/pokedex-sm/249.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/249.png"
};

var ho_oh = {
    name: "Ho-oh",
    dex: 250,
    type: "Fire/Flying",
    ability: "Pressure/None/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/250.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/250.png"
};

var celebi = {
    name: "Celebi",
    dex: 251,
    type: "Psychic/Grass",
    ability: "Natural Cure",
    wiki: "http://www.serebii.net/pokedex-sm/251.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/251.png"
};

var treecko = {
    name: "Treecko",
    dex: 252,
    type: "Grass",
    ability: "Overgrow/None/Unburden",
    wiki: "http://www.serebii.net/pokedex-sm/252.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/252.png"
};

var grovyle = {
    name: "Grovyle",
    dex: 253,
    type: "Grass",
    ability: "Overgrow/None/Unburden",
    wiki: "http://www.serebii.net/pokedex-sm/253.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/253.png"
};

var sceptile = {
    name: "Sceptile",
    dex: 254,
    type: "Grass",
    ability: "Overgrow/None/Unburden",
    wiki: "http://www.serebii.net/pokedex-sm/254.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/254.png"
};

var torchic = {
    name: "Torchic",
    dex: 255,
    type: "Fire",
    ability: "Blaze/None/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/255.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/255.png"
};

var combusken = {
    name: "Combusken",
    dex: 256,
    type: "Fire/Fighting",
    ability: "Blaze/None/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/256.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/256.png"
};

var blaziken = {
    name: "Blaziken",
    dex: 257,
    type: "Fire/Fighting",
    ability: "Blaze/None/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/257.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/257.png"
};

var mudkip = {
    name: "Mudkip",
    dex: 258,
    type: "Water",
    ability: "Torrent/None/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/258.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/258.png"
};

var marshtomp = {
    name: "Marshtomp",
    dex: 259,
    type: "Water/Ground",
    ability: "Torrent/None/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/259.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/259.png"
};

var swampert = {
    name: "Swampert",
    dex: 260,
    type: "Water/Ground",
    ability: "Torrent/None/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/260.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/260.png"
};

var poochyena = {
    name: "Poochyena",
    dex: 261,
    type: "Dark",
    ability: "Run Away/Quick Feet/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/261.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/261.png"
};

var mightyena = {
    name: "Mightyena",
    dex: 262,
    type: "Dark",
    ability: "Intimidate/Quick Feet/Moxie",
    wiki: "http://www.serebii.net/pokedex-sm/262.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/262.png"
};

var zigzagoon = {
    name: "Zigzagoon",
    dex: 263,
    type: "Normal",
    ability: "Pickup/Gluttony/Quick Feet",
    wiki: "http://www.serebii.net/pokedex-sm/263.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/263.png"
};

var linoone = {
    name: "Linoone",
    dex: 264,
    type: "Normal",
    ability: "Pickup/Gluttony/Quick Feet",
    wiki: "http://www.serebii.net/pokedex-sm/264.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/264.png"
};

var wurmple = {
    name: "Wurmple",
    dex: 265,
    type: "Bug",
    ability: "Shield Dust/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-sm/265.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/265.png"
};

var silcoon = {
    name: "Silcoon",
    dex: 266,
    type: "Bug",
    ability: "Shed Skin",
    wiki: "http://www.serebii.net/pokedex-sm/266.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/266.png"
};

var beautifly = {
    name: "Beautifly",
    dex: 267,
    type: "Bug/Flying",
    ability: "Swarm/None/Rivalry",
    wiki: "http://www.serebii.net/pokedex-sm/267.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/267.png"
};

var cascoon = {
    name: "Cascoon",
    dex: 268,
    type: "Bug",
    ability: "Shed Skin",
    wiki: "http://www.serebii.net/pokedex-sm/268.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/268.png"
};

var dustox = {
    name: "Dustox",
    dex: 269,
    type: "Bug/Poison",
    ability: "Shield Dust/None/Compound Eyes",
    wiki: "http://www.serebii.net/pokedex-sm/269.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/269.png"
};

var lotad = {
    name: "Lotad",
    dex: 270,
    type: "Water/Grass",
    ability: "Swift Swim/Rain Dish/Own Tempo",
    wiki: "http://www.serebii.net/pokedex-sm/270.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/270.png"
};

var lombre = {
    name: "Lombre",
    dex: 271,
    type: "Water/Grass",
    ability: "Swift Swim/Rain Dish/Own Tempo",
    wiki: "http://www.serebii.net/pokedex-sm/271.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/271.png"
};

var ludicolo = {
    name: "Ludicolo",
    dex: 272,
    type: "Water/Grass",
    ability: "Swift Swim/Rain Dish/Own Tempo",
    wiki: "http://www.serebii.net/pokedex-sm/272.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/272.png"
};

var seedot = {
    name: "Seedot",
    dex: 273,
    type: "Grass",
    ability: "Chlorophyll/Early Bird/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-sm/273.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/273.png"
};

var nuzleaf = {
    name: "Nuzleaf",
    dex: 274,
    type: "Grass/Dark",
    ability: "Chlorophyll/Early Bird/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-sm/274.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/274.png"
};

var shiftry = {
    name: "Shiftry",
    dex: 275,
    type: "Grass/Dark",
    ability: "Chlorophyll/Early Bird/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-sm/275.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/275.png"
};

var taillow = {
    name: "Taillow",
    dex: 276,
    type: "Normal/Flying",
    ability: "Guts/None/Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/276.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/276.png"
};

var swellow = {
    name: "Swellow",
    dex: 277,
    type: "Normal/Flying",
    ability: "Guts/None/Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/277.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/277.png"
};

var wingull = {
    name: "Wingull",
    dex: 278,
    type: "Water/Flying",
    ability: "Keen Eye/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/278.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/278.png"
};

var pelipper = {
    name: "Pelipper",
    dex: 279,
    type: "Water/Flying",
    ability: "Keen Eye/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/279.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/279.png"
};

var ralts = {
    name: "Ralts",
    dex: 280,
    type: "Psychic/Fairy",
    ability: "Synchronize/Trace/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/280.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/280.png"
};

var kirlia = {
    name: "Kirlia",
    dex: 281,
    type: "Psychic/Fairy",
    ability: "Synchronize/Trace/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/281.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/281.png"
};

var gardevoir = {
    name: "Gardevoir",
    dex: 282,
    type: "Psychic/Fairy",
    ability: "Synchronize/Trace/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/282.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/282.png"
};

var surskit = {
    name: "Surskit",
    dex: 283,
    type: "Bug/Water",
    ability: "Swift Swim/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/283.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/283.png"
};

var masquerain = {
    name: "Masquerain",
    dex: 284,
    type: "Bug/Flying",
    ability: "Intimidate/None/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/284.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/284.png"
};

var shroomish = {
    name: "Shroomish",
    dex: 285,
    type: "Grass",
    ability: "Effect Spore/Poison Heal/Quick Feet",
    wiki: "http://www.serebii.net/pokedex-sm/285.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/285.png"
};

var breloom = {
    name: "Breloom",
    dex: 286,
    type: "Grass/Fighting",
    ability: "Effect Spore/Poison Heal/Technician",
    wiki: "http://www.serebii.net/pokedex-sm/286.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/286.png"
};

var slakoth = {
    name: "Slakoth",
    dex: 287,
    type: "Normal",
    ability: "Truant",
    wiki: "http://www.serebii.net/pokedex-sm/287.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/287.png"
};

var vigoroth = {
    name: "Vigoroth",
    dex: 288,
    type: "Normal",
    ability: "Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-sm/288.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/288.png"
};

var slaking = {
    name: "Slaking",
    dex: 289,
    type: "Normal",
    ability: "Truant",
    wiki: "http://www.serebii.net/pokedex-sm/289.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/289.png"
};

var nincada = {
    name: "Nincada",
    dex: 290,
    type: "Bug/Ground",
    ability: "Compound Eyes/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-sm/290.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/290.png"
};

var ninjask = {
    name: "Ninjask",
    dex: 291,
    type: "Bug/Flying",
    ability: "Speed Boost/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/291.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/291.png"
};

var shedinja = {
    name: "Shedinja",
    dex: 292,
    type: "Bug/Ghost",
    ability: "Wonder Guard",
    wiki: "http://www.serebii.net/pokedex-sm/292.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/292.png"
};

var whismur = {
    name: "Whismur",
    dex: 293,
    type: "Normal",
    ability: "Soundproof/None/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/293.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/293.png"
};

var loudred = {
    name: "Loudred",
    dex: 294,
    type: "Normal",
    ability: "Soundproof/None/Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/294.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/294.png"
};

var exploud = {
    name: "Exploud",
    dex: 295,
    type: "Normal",
    ability: "Soundproof/None/Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/295.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/295.png"
};

var makuhita = {
    name: "Makuhita",
    dex: 296,
    type: "Fighting",
    ability: "Thick Fat/Guts/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/296.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/296.png"
};

var hariyama = {
    name: "Hariyama",
    dex: 297,
    type: "Fighting",
    ability: "Thick Fat/Guts/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/297.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/297.png"
};

var azurill = {
    name: "Azurill",
    dex: 298,
    type: "Normal/Fairy",
    ability: "Thick Fat/Huge Power/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-sm/298.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/298.png"
};

var nosepass = {
    name: "Nosepass",
    dex: 299,
    type: "Rock",
    ability: "Sturdy/Magnet Pull/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/299.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/299.png"
};

var skitty = {
    name: "Skitty",
    dex: 300,
    type: "Normal",
    ability: "Cute Charm/Normalize/Wonder Skin",
    wiki: "http://www.serebii.net/pokedex-sm/300.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/300.png"
};

var delcatty = {
    name: "Delcatty",
    dex: 301,
    type: "Normal",
    ability: "Cute Charm/Normalize/Wonder Skin",
    wiki: "http://www.serebii.net/pokedex-sm/301.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/301.png"
};

var sableye = {
    name: "Sableye",
    dex: 302,
    type: "Dark/Ghost",
    ability: "Keen Eye/Stall/Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/302.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/302.png"
};

var mawile = {
    name: "Mawile",
    dex: 303,
    type: "Steel/Fairy",
    ability: "Hyper Cutter/Intimidate/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/303.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/303.png"
};

var aron = {
    name: "Aron",
    dex: 304,
    type: "Steel/Rock",
    ability: "Sturdy/Rock Head/Heavy Metal",
    wiki: "http://www.serebii.net/pokedex-sm/304.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/304.png"
};

var lairon = {
    name: "Lairon",
    dex: 305,
    type: "Steel/Rock",
    ability: "Sturdy/Rock Head/Heavy Metal",
    wiki: "http://www.serebii.net/pokedex-sm/305.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/305.png"
};

var aggron = {
    name: "Aggron",
    dex: 306,
    type: "Steel/Rock",
    ability: "Sturdy/Rock Head/Heavy Metal",
    wiki: "http://www.serebii.net/pokedex-sm/306.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/306.png"
};

var meditite = {
    name: "Meditite",
    dex: 307,
    type: "Fighting/Psychic",
    ability: "Pure Power/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/307.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/307.png"
};

var medicham = {
    name: "Medicham",
    dex: 308,
    type: "Fighting/Psychic",
    ability: "Pure Power/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/308.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/308.png"
};

var electrike = {
    name: "Electrike",
    dex: 309,
    type: "Electric",
    ability: "Static/Lightning Rod/Minus",
    wiki: "http://www.serebii.net/pokedex-sm/309.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/309.png"
};

var manectric = {
    name: "Manectric",
    dex: 310,
    type: "Electric",
    ability: "Static/Lightning Rod/Minus",
    wiki: "http://www.serebii.net/pokedex-sm/310.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/310.png"
};

var plusle = {
    name: "Plusle",
    dex: 311,
    type: "Electric",
    ability: "Plus/None/Lightning Rod/VI",
    wiki: "http://www.serebii.net/pokedex-sm/311.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/311.png"
};

var minun = {
    name: "Minun",
    dex: 312,
    type: "Electric",
    ability: "Minus/None/Volt Absorb/VI",
    wiki: "http://www.serebii.net/pokedex-sm/312.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/312.png"
};

var volbeat = {
    name: "Volbeat",
    dex: 313,
    type: "Bug",
    ability: "Illuminate/Swarm/Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/313.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/313.png"
};

var illumise = {
    name: "Illumise",
    dex: 314,
    type: "Bug",
    ability: "Oblivious/Tinted Lens/Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/314.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/314.png"
};

var roselia = {
    name: "Roselia",
    dex: 315,
    type: "Grass/Poison",
    ability: "Natural Cure/Poison Point/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-sm/315.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/315.png"
};

var gulpin = {
    name: "Gulpin",
    dex: 316,
    type: "Poison",
    ability: "Liquid Ooze/Sticky Hold/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/316.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/316.png"
};

var swalot = {
    name: "Swalot",
    dex: 317,
    type: "Poison",
    ability: "Liquid Ooze/Sticky Hold/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/317.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/317.png"
};

var carvanha = {
    name: "Carvanha",
    dex: 318,
    type: "Water/Dark",
    ability: "Rough Skin/None/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/318.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/318.png"
};

var sharpedo = {
    name: "Sharpedo",
    dex: 319,
    type: "Water/Dark",
    ability: "Rough Skin/None/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/319.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/319.png"
};

var wailmer = {
    name: "Wailmer",
    dex: 320,
    type: "Water",
    ability: "Water Veil/Oblivious/Pressure",
    wiki: "http://www.serebii.net/pokedex-sm/320.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/320.png"
};

var wailord = {
    name: "Wailord",
    dex: 321,
    type: "Water",
    ability: "Water Veil/Oblivious/Pressure",
    wiki: "http://www.serebii.net/pokedex-sm/321.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/321.png"
};

var numel = {
    name: "Numel",
    dex: 322,
    type: "Fire/Ground",
    ability: "Oblivious/Simple/Own Tempo",
    wiki: "http://www.serebii.net/pokedex-sm/322.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/322.png"
};

var camerupt = {
    name: "Camerupt",
    dex: 323,
    type: "Fire/Ground",
    ability: "Magma Armor/Solid Rock/Anger Point",
    wiki: "http://www.serebii.net/pokedex-sm/323.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/323.png"
};

var torkoal = {
    name: "Torkoal",
    dex: 324,
    type: "Fire",
    ability: "White Smoke/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/324.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/324.png"
};

var spoink = {
    name: "Spoink",
    dex: 325,
    type: "Psychic",
    ability: "Thick Fat/Own Tempo/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/325.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/325.png"
};

var grumpig = {
    name: "Grumpig",
    dex: 326,
    type: "Psychic",
    ability: "Thick Fat/Own Tempo/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/326.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/326.png"
};

var spinda = {
    name: "Spinda",
    dex: 327,
    type: "Normal",
    ability: "Own Tempo/Tangled Feet/Contrary",
    wiki: "http://www.serebii.net/pokedex-sm/327.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/327.png"
};

var trapinch = {
    name: "Trapinch",
    dex: 328,
    type: "Ground",
    ability: "Hyper Cutter/Arena Trap/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/328.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/328.png"
};

var vibrava = {
    name: "Vibrava",
    dex: 329,
    type: "Ground/Dragon",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/329.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/329.png"
};

var flygon = {
    name: "Flygon",
    dex: 330,
    type: "Ground/Dragon",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/330.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/330.png"
};

var cacnea = {
    name: "Cacnea",
    dex: 331,
    type: "Grass",
    ability: "Sand Veil/None/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/331.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/331.png"
};

var cacturne = {
    name: "Cacturne",
    dex: 332,
    type: "Grass/Dark",
    ability: "Sand Veil/None/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/332.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/332.png"
};

var swablu = {
    name: "Swablu",
    dex: 333,
    type: "Normal/Flying",
    ability: "Natural Cure/None/Cloud Nine",
    wiki: "http://www.serebii.net/pokedex-sm/333.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/333.png"
};

var altaria = {
    name: "Altaria",
    dex: 334,
    type: "Dragon/Flying",
    ability: "Natural Cure/None/Cloud Nine",
    wiki: "http://www.serebii.net/pokedex-sm/334.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/334.png"
};

var zangoose = {
    name: "Zangoose",
    dex: 335,
    type: "Normal",
    ability: "Immunity/None/Toxic Boost",
    wiki: "http://www.serebii.net/pokedex-sm/335.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/335.png"
};

var seviper = {
    name: "Seviper",
    dex: 336,
    type: "Poison",
    ability: "Shed Skin/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/336.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/336.png"
};

var lunatone = {
    name: "Lunatone",
    dex: 337,
    type: "Rock/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/337.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/337.png"
};

var solrock = {
    name: "Solrock",
    dex: 338,
    type: "Rock/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/338.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/338.png"
};

var barboach = {
    name: "Barboach",
    dex: 339,
    type: "Water/Ground",
    ability: "Oblivious/Anticipation/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/339.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/339.png"
};

var whiscash = {
    name: "Whiscash",
    dex: 340,
    type: "Water/Ground",
    ability: "Oblivious/Anticipation/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/340.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/340.png"
};

var corphish = {
    name: "Corphish",
    dex: 341,
    type: "Water",
    ability: "Hyper Cutter/Shell Armor/Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/341.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/341.png"
};

var crawdaunt = {
    name: "Crawdaunt",
    dex: 342,
    type: "Water/Dark",
    ability: "Hyper Cutter/Shell Armor/Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/342.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/342.png"
};

var baltoy = {
    name: "Baltoy",
    dex: 343,
    type: "Ground/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/343.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/343.png"
};

var claydol = {
    name: "Claydol",
    dex: 344,
    type: "Ground/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/344.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/344.png"
};

var lileep = {
    name: "Lileep",
    dex: 345,
    type: "Rock/Grass",
    ability: "Suction Cups/None/Storm Drain",
    wiki: "http://www.serebii.net/pokedex-sm/345.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/345.png"
};

var cradily = {
    name: "Cradily",
    dex: 346,
    type: "Rock/Grass",
    ability: "Suction Cups/None/Storm Drain",
    wiki: "http://www.serebii.net/pokedex-sm/346.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/346.png"
};

var anorith = {
    name: "Anorith",
    dex: 347,
    type: "Rock/Bug",
    ability: "Battle Armor/None/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/347.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/347.png"
};

var armaldo = {
    name: "Armaldo",
    dex: 348,
    type: "Rock/Bug",
    ability: "Battle Armor/None/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/348.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/348.png"
};

var feebas = {
    name: "Feebas",
    dex: 349,
    type: "Water",
    ability: "Swift Swim/Oblivious/Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/349.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/349.png"
};

var milotic = {
    name: "Milotic",
    dex: 350,
    type: "Water",
    ability: "Marvel Scale/Competitive/Cute Charm",
    wiki: "http://www.serebii.net/pokedex-sm/350.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/350.png"
};

var castform = {
    name: "Castform",
    dex: 351,
    type: "Normal",
    ability: "Forecast",
    wiki: "http://www.serebii.net/pokedex-sm/351.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/351.png"
};

var castform_sunny = {
    name: "Castform Sunny",
    dex: 351,
    type: "Fire",
    ability: "Forecast",
    wiki: "http://www.serebii.net/pokedex-sm/351.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/351-s.png"
};

var castform_rainy = {
    name: "Castform",
    dex: 351,
    type: "Water",
    ability: "Forecast",
    wiki: "http://www.serebii.net/pokedex-sm/351.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/351-r.png"
};

var castform_snowy = {
    name: "Castform Snowy",
    dex: 351,
    type: "Ice",
    ability: "Forecast",
    wiki: "http://www.serebii.net/pokedex-sm/351.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/351-i.png"
};

var kecleon = {
    name: "Kecleon",
    dex: 352,
    type: "Normal",
    ability: "Color Change/None/Protean/VI",
    wiki: "http://www.serebii.net/pokedex-sm/352.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/352.png"
};

var shuppet = {
    name: "Shuppet",
    dex: 353,
    type: "Ghost",
    ability: "Insomnia/Frisk/Cursed Body",
    wiki: "http://www.serebii.net/pokedex-sm/353.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/353.png"
};

var banette = {
    name: "Banette",
    dex: 354,
    type: "Ghost",
    ability: "Insomnia/Frisk/Cursed Body",
    wiki: "http://www.serebii.net/pokedex-sm/354.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/354.png"
};

var duskull = {
    name: "Duskull",
    dex: 355,
    type: "Ghost",
    ability: "Levitate/None/Frisk/VI",
    wiki: "http://www.serebii.net/pokedex-sm/355.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/355.png"
};

var dusclops = {
    name: "Dusclops",
    dex: 356,
    type: "Ghost",
    ability: "Pressure/None/Frisk/VI",
    wiki: "http://www.serebii.net/pokedex-sm/356.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/356.png"
};

var tropius = {
    name: "Tropius",
    dex: 357,
    type: "Grass/Flying",
    ability: "Chlorophyll/Solar Power/Harvest",
    wiki: "http://www.serebii.net/pokedex-sm/357.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/357.png"
};

var chimecho = {
    name: "Chimecho",
    dex: 358,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/358.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/358.png"
};

var absol = {
    name: "Absol",
    dex: 359,
    type: "Dark",
    ability: "Pressure/Super Luck/Justified",
    wiki: "http://www.serebii.net/pokedex-sm/359.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/359.png"
};

var wynaut = {
    name: "Wynaut",
    dex: 360,
    type: "Psychic",
    ability: "Shadow Tag/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/360.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/360.png"
};

var snorunt = {
    name: "Snorunt",
    dex: 361,
    type: "Ice",
    ability: "Inner Focus/Ice Body/Moody",
    wiki: "http://www.serebii.net/pokedex-sm/361.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/361.png"
};

var glalie = {
    name: "Glalie",
    dex: 362,
    type: "Ice",
    ability: "Inner Focus/Ice Body/Moody",
    wiki: "http://www.serebii.net/pokedex-sm/362.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/362.png"
};

var spheal = {
    name: "Spheal",
    dex: 363,
    type: "Ice/Water",
    ability: "Thick Fat/Ice Body/Oblivious",
    wiki: "http://www.serebii.net/pokedex-sm/363.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/363.png"
};

var sealeo = {
    name: "Sealeo",
    dex: 364,
    type: "Ice/Water",
    ability: "Thick Fat/Ice Body/Oblivious",
    wiki: "http://www.serebii.net/pokedex-sm/364.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/364.png"
};

var walrein = {
    name: "Walrein",
    dex: 365,
    type: "Ice/Water",
    ability: "Thick Fat/Ice Body/Oblivious",
    wiki: "http://www.serebii.net/pokedex-sm/365.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/365.png"
};

var clamperl = {
    name: "Clamperl",
    dex: 366,
    type: "Water",
    ability: "Shell Armor/None/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/366.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/366.png"
};

var huntail = {
    name: "Huntail",
    dex: 367,
    type: "Water",
    ability: "Swift Swim/None/Water Veil",
    wiki: "http://www.serebii.net/pokedex-sm/367.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/367.png"
};

var gorebyss = {
    name: "Gorebyss",
    dex: 368,
    type: "Water",
    ability: "Swift Swim/None/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/368.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/368.png"
};

var relicanth = {
    name: "Relicanth",
    dex: 369,
    type: "Water/Rock",
    ability: "Swift Swim/Rock Head/Sturdy",
    wiki: "http://www.serebii.net/pokedex-sm/369.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/369.png"
};

var luvdisc = {
    name: "Luvdisc",
    dex: 370,
    type: "Water",
    ability: "Swift Swim/None/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/370.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/370.png"
};

var bagon = {
    name: "Bagon",
    dex: 371,
    type: "Dragon",
    ability: "Rock Head/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/371.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/371.png"
};

var shelgon = {
    name: "Shelgon",
    dex: 372,
    type: "Dragon",
    ability: "Rock Head/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/372.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/372.png"
};

var salamence = {
    name: "Salamence",
    dex: 373,
    type: "Dragon/Flying",
    ability: "Intimidate/None/Moxie",
    wiki: "http://www.serebii.net/pokedex-sm/373.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/373.png"
};

var beldum = {
    name: "Beldum",
    dex: 374,
    type: "Steel/Psychic",
    ability: "Clear Body/None/Light Metal",
    wiki: "http://www.serebii.net/pokedex-sm/374.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/374.png"
};

var metang = {
    name: "Metang",
    dex: 375,
    type: "Steel/Psychic",
    ability: "Clear Body/None/Light Metal",
    wiki: "http://www.serebii.net/pokedex-sm/375.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/375.png"
};

var metagross = {
    name: "Metagross",
    dex: 376,
    type: "Steel/Psychic",
    ability: "Clear Body/None/Light Metal",
    wiki: "http://www.serebii.net/pokedex-sm/376.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/376.png"
};

var regirock = {
    name: "Regirock",
    dex: 377,
    type: "Rock",
    ability: "Clear Body/None/Sturdy",
    wiki: "http://www.serebii.net/pokedex-sm/377.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/377.png"
};

var regice = {
    name: "Regice",
    dex: 378,
    type: "Ice",
    ability: "Clear Body/None/Ice Body",
    wiki: "http://www.serebii.net/pokedex-sm/378.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/378.png"
};

var registeel = {
    name: "Registeel",
    dex: 379,
    type: "Steel",
    ability: "Clear Body/None/Light Metal",
    wiki: "http://www.serebii.net/pokedex-sm/379.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/379.png"
};

var latias = {
    name: "Latias",
    dex: 380,
    type: "Dragon/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/380.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/380.png"
};

var latios = {
    name: "Latios",
    dex: 381,
    type: "Dragon/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/381.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/381.png"
};

var kyogre = {
    name: "Kyogre",
    dex: 382,
    type: "Water",
    ability: "Drizzle",
    wiki: "http://www.serebii.net/pokedex-sm/382.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/382.png"
};

var groudon = {
    name: "Groudon",
    dex: 383,
    type: "Ground",
    ability: "Drought",
    wiki: "http://www.serebii.net/pokedex-sm/383.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/383.png"
};

var rayquaza = {
    name: "Rayquaza",
    dex: 384,
    type: "Dragon/Flying",
    ability: "Air Lock",
    wiki: "http://www.serebii.net/pokedex-sm/384.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/384.png"
};

var jirachi = {
    name: "Jirachi",
    dex: 385,
    type: "Steel/Psychic",
    ability: "Serene Grace",
    wiki: "http://www.serebii.net/pokedex-sm/385.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/385.png"
};

var deoxys = {
    name: "Deoxys",
    dex: 386,
    type: "Psychic",
    ability: "Pressure",
    wiki: "http://www.serebii.net/pokedex-sm/386.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/386.png"
};

var turtwig = {
    name: "Turtwig",
    dex: 387,
    type: "Grass",
    ability: "Overgrow/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/387.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/387.png"
};

var grotle = {
    name: "Grotle",
    dex: 388,
    type: "Grass",
    ability: "Overgrow/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/388.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/388.png"
};

var torterra = {
    name: "Torterra",
    dex: 389,
    type: "Grass/Ground",
    ability: "Overgrow/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/389.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/389.png"
};

var chimchar = {
    name: "Chimchar",
    dex: 390,
    type: "Fire",
    ability: "Blaze/None/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-sm/390.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/390.png"
};

var monferno = {
    name: "Monferno",
    dex: 391,
    type: "Fire/Fighting",
    ability: "Blaze/None/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-sm/391.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/391.png"
};

var infernape = {
    name: "Infernape",
    dex: 392,
    type: "Fire/Fighting",
    ability: "Blaze/None/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-sm/392.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/392.png"
};

var piplup = {
    name: "Piplup",
    dex: 393,
    type: "Water",
    ability: "Torrent/None/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/393.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/393.png"
};

var prinplup = {
    name: "Prinplup",
    dex: 394,
    type: "Water",
    ability: "Torrent/None/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/394.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/394.png"
};

var empoleon = {
    name: "Empoleon",
    dex: 395,
    type: "Water/Steel",
    ability: "Torrent/None/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/395.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/395.png"
};

var starly = {
    name: "Starly",
    dex: 396,
    type: "Normal/Flying",
    ability: "Keen Eye/None/Reckless/VI",
    wiki: "http://www.serebii.net/pokedex-sm/396.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/396.png"
};

var staravia = {
    name: "Staravia",
    dex: 397,
    type: "Normal/Flying",
    ability: "Intimidate/None/Reckless",
    wiki: "http://www.serebii.net/pokedex-sm/397.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/397.png"
};

var staraptor = {
    name: "Staraptor",
    dex: 398,
    type: "Normal/Flying",
    ability: "Intimidate/None/Reckless",
    wiki: "http://www.serebii.net/pokedex-sm/398.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/398.png"
};

var bidoof = {
    name: "Bidoof",
    dex: 399,
    type: "Normal",
    ability: "Simple/Unaware/Moody",
    wiki: "http://www.serebii.net/pokedex-sm/399.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/399.png"
};

var bibarel = {
    name: "Bibarel",
    dex: 400,
    type: "Normal/Water",
    ability: "Simple/Unaware/Moody",
    wiki: "http://www.serebii.net/pokedex-sm/400.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/400.png"
};

var kricketot = {
    name: "Kricketot",
    dex: 401,
    type: "Bug",
    ability: "Shed Skin/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-sm/401.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/401.png"
};

var kricketune = {
    name: "Kricketune",
    dex: 402,
    type: "Bug",
    ability: "Swarm/None/Technician",
    wiki: "http://www.serebii.net/pokedex-sm/402.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/402.png"
};

var shinx = {
    name: "Shinx",
    dex: 403,
    type: "Electric",
    ability: "Rivalry/Intimidate/Guts",
    wiki: "http://www.serebii.net/pokedex-sm/403.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/403.png"
};

var luxio = {
    name: "Luxio",
    dex: 404,
    type: "Electric",
    ability: "Rivalry/Intimidate/Guts",
    wiki: "http://www.serebii.net/pokedex-sm/404.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/404.png"
};

var luxray = {
    name: "Luxray",
    dex: 405,
    type: "Electric",
    ability: "Rivalry/Intimidate/Guts",
    wiki: "http://www.serebii.net/pokedex-sm/405.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/405.png"
};

var budew = {
    name: "Budew",
    dex: 406,
    type: "Grass/Poison",
    ability: "Natural Cure/Poison Point/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-sm/406.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/406.png"
};

var roserade = {
    name: "Roserade",
    dex: 407,
    type: "Grass/Poison",
    ability: "Natural Cure/Poison Point/Technician",
    wiki: "http://www.serebii.net/pokedex-sm/407.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/407.png"
};

var cranidos = {
    name: "Cranidos",
    dex: 408,
    type: "Rock",
    ability: "Mold Breaker/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/408.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/408.png"
};

var rampardos = {
    name: "Rampardos",
    dex: 409,
    type: "Rock",
    ability: "Mold Breaker/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/409.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/409.png"
};

var shieldon = {
    name: "Shieldon",
    dex: 410,
    type: "Rock/Steel",
    ability: "Sturdy/None/Soundproof",
    wiki: "http://www.serebii.net/pokedex-sm/410.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/410.png"
};

var bastiodon = {
    name: "Bastiodon",
    dex: 411,
    type: "Rock/Steel",
    ability: "Sturdy/None/Soundproof",
    wiki: "http://www.serebii.net/pokedex-sm/411.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/411.png"
};

var burmy = {
    name: "Burmy",
    dex: 412,
    type: "Bug",
    ability: "Shed Skin/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/412.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/412.png"
};

var wormadam = {
    name: "Wormadam",
    dex: 413,
    type: "Bug/Grass",
    ability: "Anticipation/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/413.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/413.png"
};

var wormadam_sandy = {
    name: "Wormadam Sandy",
    dex: 413,
    type: "Bug/Ground",
    ability: "Anticipation/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/413.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/413-c.png"
};

var wormadam_trash = {
    name: "Wormadam Trash",
    dex: 413,
    type: "Bug/Steel",
    ability: "Anticipation/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/413.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/413-s.png"
};

var mothim = {
    name: "Mothim",
    dex: 414,
    type: "Bug/Flying",
    ability: "Swarm/None/Tinted Lens",
    wiki: "http://www.serebii.net/pokedex-sm/414.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/414.png"
};

var combee = {
    name: "Combee",
    dex: 415,
    type: "Bug/Flying",
    ability: "Honey Gather/None/Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/415.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/415.png"
};

var vespiquen = {
    name: "Vespiquen",
    dex: 416,
    type: "Bug/Flying",
    ability: "Pressure/None/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/416.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/416.png"
};

var pachirisu = {
    name: "Pachirisu",
    dex: 417,
    type: "Electric",
    ability: "Run Away/Pickup/Volt Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/417.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/417.png"
};

var buizel = {
    name: "Buizel",
    dex: 418,
    type: "Water",
    ability: "Swift Swim/None/Water Veil",
    wiki: "http://www.serebii.net/pokedex-sm/418.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/418.png"
};

var floatzel = {
    name: "Floatzel",
    dex: 419,
    type: "Water",
    ability: "Swift Swim/None/Water Veil",
    wiki: "http://www.serebii.net/pokedex-sm/419.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/419.png"
};

var cherubi = {
    name: "Cherubi",
    dex: 420,
    type: "Grass",
    ability: "Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-sm/420.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/420.png"
};

var cherrim = {
    name: "Cherrim",
    dex: 421,
    type: "Grass",
    ability: "Flower Gift",
    wiki: "http://www.serebii.net/pokedex-sm/421.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/421.png"
};

var shellos = {
    name: "Shellos",
    dex: 422,
    type: "Water",
    ability: "Sticky Hold/Storm Drain/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/422.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/422.png"
};

var gastrodon = {
    name: "Gastrodon",
    dex: 423,
    type: "Water/Ground",
    ability: "Sticky Hold/Storm Drain/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/423.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/423.png"
};

var ambipom = {
    name: "Ambipom",
    dex: 424,
    type: "Normal",
    ability: "Technician/Pickup/Skill Link",
    wiki: "http://www.serebii.net/pokedex-sm/424.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/424.png"
};

var drifloon = {
    name: "Drifloon",
    dex: 425,
    type: "Ghost/Flying",
    ability: "Aftermath/Unburden/Flare Boost",
    wiki: "http://www.serebii.net/pokedex-sm/425.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/425.png"
};

var drifblim = {
    name: "Drifblim",
    dex: 426,
    type: "Ghost/Flying",
    ability: "Aftermath/Unburden/Flare Boost",
    wiki: "http://www.serebii.net/pokedex-sm/426.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/426.png"
};

var buneary = {
    name: "Buneary",
    dex: 427,
    type: "Normal",
    ability: "Run Away/Klutz/Limber",
    wiki: "http://www.serebii.net/pokedex-sm/427.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/427.png"
};

var lopunny = {
    name: "Lopunny",
    dex: 428,
    type: "Normal",
    ability: "Cute Charm/Klutz/Limber",
    wiki: "http://www.serebii.net/pokedex-sm/428.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/428.png"
};

var mismagius = {
    name: "Mismagius",
    dex: 429,
    type: "Ghost",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/429.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/429.png"
};

var honchkrow = {
    name: "Honchkrow",
    dex: 430,
    type: "Dark/Flying",
    ability: "Insomnia/Super Luck/Moxie",
    wiki: "http://www.serebii.net/pokedex-sm/430.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/430.png"
};

var glameow = {
    name: "Glameow",
    dex: 431,
    type: "Normal",
    ability: "Limber/Own Tempo/Keen Eye",
    wiki: "http://www.serebii.net/pokedex-sm/431.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/431.png"
};

var purugly = {
    name: "Purugly",
    dex: 432,
    type: "Normal",
    ability: "Thick Fat/Own Tempo/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/432.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/432.png"
};

var chingling = {
    name: "Chingling",
    dex: 433,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/433.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/433.png"
};

var stunky = {
    name: "Stunky",
    dex: 434,
    type: "Poison/Dark",
    ability: "Stench/Aftermath/Keen Eye",
    wiki: "http://www.serebii.net/pokedex-sm/434.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/434.png"
};

var skuntank = {
    name: "Skuntank",
    dex: 435,
    type: "Poison/Dark",
    ability: "Stench/Aftermath/Keen Eye",
    wiki: "http://www.serebii.net/pokedex-sm/435.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/435.png"
};

var bronzor = {
    name: "Bronzor",
    dex: 436,
    type: "Steel/Psychic",
    ability: "Levitate/Heatproof/Heavy Metal",
    wiki: "http://www.serebii.net/pokedex-sm/436.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/436.png"
};

var bronzong = {
    name: "Bronzong",
    dex: 437,
    type: "Steel/Psychic",
    ability: "Levitate/Heatproof/Heavy Metal",
    wiki: "http://www.serebii.net/pokedex-sm/437.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/437.png"
};

var bonsly = {
    name: "Bonsly",
    dex: 438,
    type: "Rock",
    ability: "Sturdy/Rock Head/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/438.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/438.png"
};

var mime_jr = {
    name: "Mime Jr.",
    dex: 439,
    type: "Psychic/Fairy",
    ability: "Soundproof/Filter/Technician",
    wiki: "http://www.serebii.net/pokedex-sm/439.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/439.png"
};

var happiny = {
    name: "Happiny",
    dex: 440,
    type: "Normal",
    ability: "Natural Cure/Serene Grace/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-sm/440.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/440.png"
};

var chatot = {
    name: "Chatot",
    dex: 441,
    type: "Normal/Flying",
    ability: "Keen Eye/Tangled Feet/Big Pecks",
    wiki: "http://www.serebii.net/pokedex-sm/441.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/441.png"
};

var spiritomb = {
    name: "Spiritomb",
    dex: 442,
    type: "Ghost/Dark",
    ability: "Pressure/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/442.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/442.png"
};

var gible = {
    name: "Gible",
    dex: 443,
    type: "Dragon/Ground",
    ability: "Sand Veil/None/Rough Skin",
    wiki: "http://www.serebii.net/pokedex-sm/443.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/443.png"
};

var gabite = {
    name: "Gabite",
    dex: 444,
    type: "Dragon/Ground",
    ability: "Sand Veil/None/Rough Skin",
    wiki: "http://www.serebii.net/pokedex-sm/444.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/444.png"
};

var garchomp = {
    name: "Garchomp",
    dex: 445,
    type: "Dragon/Ground",
    ability: "Sand Veil/None/Rough Skin",
    wiki: "http://www.serebii.net/pokedex-sm/445.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/445.png"
};

var munchlax = {
    name: "Munchlax",
    dex: 446,
    type: "Normal",
    ability: "Pickup/Thick Fat/Gluttony",
    wiki: "http://www.serebii.net/pokedex-sm/446.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/446.png"
};

var riolu = {
    name: "Riolu",
    dex: 447,
    type: "Fighting",
    ability: "Steadfast/Inner Focus/Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/447.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/447.png"
};

var lucario = {
    name: "Lucario",
    dex: 448,
    type: "Fighting/Steel",
    ability: "Steadfast/Inner Focus/Justified",
    wiki: "http://www.serebii.net/pokedex-sm/448.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/448.png"
};

var hippopotas = {
    name: "Hippopotas",
    dex: 449,
    type: "Ground",
    ability: "Sand Stream/None/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/449.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/449.png"
};

var hippowdon = {
    name: "Hippowdon",
    dex: 450,
    type: "Ground",
    ability: "Sand Stream/None/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/450.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/450.png"
};

var skorupi = {
    name: "Skorupi",
    dex: 451,
    type: "Poison/Bug",
    ability: "Battle Armor/Sniper/Keen Eye",
    wiki: "http://www.serebii.net/pokedex-sm/451.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/451.png"
};

var drapion = {
    name: "Drapion",
    dex: 452,
    type: "Poison/Dark",
    ability: "Battle Armor/Sniper/Keen Eye",
    wiki: "http://www.serebii.net/pokedex-sm/452.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/452.png"
};

var croagunk = {
    name: "Croagunk",
    dex: 453,
    type: "Poison/Fighting",
    ability: "Anticipation/Dry Skin/Poison Touch",
    wiki: "http://www.serebii.net/pokedex-sm/453.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/453.png"
};

var toxicroak = {
    name: "Toxicroak",
    dex: 454,
    type: "Poison/Fighting",
    ability: "Anticipation/Dry Skin/Poison Touch",
    wiki: "http://www.serebii.net/pokedex-sm/454.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/454.png"
};

var carnivine = {
    name: "Carnivine",
    dex: 455,
    type: "Grass",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/455.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/455.png"
};

var finneon = {
    name: "Finneon",
    dex: 456,
    type: "Water",
    ability: "Swift Swim/Storm Drain/Water Veil",
    wiki: "http://www.serebii.net/pokedex-sm/456.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/456.png"
};

var lumineon = {
    name: "Lumineon",
    dex: 457,
    type: "Water",
    ability: "Swift Swim/Storm Drain/Water Veil",
    wiki: "http://www.serebii.net/pokedex-sm/457.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/457.png"
};

var mantyke = {
    name: "Mantyke",
    dex: 458,
    type: "Water/Flying",
    ability: "Swift Swim/Water Absorb/Water Veil",
    wiki: "http://www.serebii.net/pokedex-sm/458.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/458.png"
};

var snover = {
    name: "Snover",
    dex: 459,
    type: "Grass/Ice",
    ability: "Snow Warning/None/Soundproof",
    wiki: "http://www.serebii.net/pokedex-sm/459.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/459.png"
};

var abomasnow = {
    name: "Abomasnow",
    dex: 460,
    type: "Grass/Ice",
    ability: "Snow Warning/None/Soundproof",
    wiki: "http://www.serebii.net/pokedex-sm/460.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/460.png"
};

var weavile = {
    name: "Weavile",
    dex: 461,
    type: "Dark/Ice",
    ability: "Pressure/None/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-sm/461.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/461.png"
};

var magnezone = {
    name: "Magnezone",
    dex: 462,
    type: "Electric/Steel",
    ability: "Magnet Pull/Sturdy/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/462.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/462.png"
};

var lickilicky = {
    name: "Lickilicky",
    dex: 463,
    type: "Normal",
    ability: "Own Tempo/Oblivious/Cloud Nine",
    wiki: "http://www.serebii.net/pokedex-sm/463.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/463.png"
};

var rhyperior = {
    name: "Rhyperior",
    dex: 464,
    type: "Ground/Rock",
    ability: "Lightning Rod/Solid Rock/Reckless",
    wiki: "http://www.serebii.net/pokedex-sm/464.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/464.png"
};

var tangrowth = {
    name: "Tangrowth",
    dex: 465,
    type: "Grass",
    ability: "Chlorophyll/Leaf Guard/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/465.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/465.png"
};

var electivire = {
    name: "Electivire",
    dex: 466,
    type: "Electric",
    ability: "Motor Drive/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-sm/466.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/466.png"
};

var magmortar = {
    name: "Magmortar",
    dex: 467,
    type: "Fire",
    ability: "Flame Body/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-sm/467.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/467.png"
};

var togekiss = {
    name: "Togekiss",
    dex: 468,
    type: "Fairy/Flying",
    ability: "Hustle/Serene Grace/Super Luck",
    wiki: "http://www.serebii.net/pokedex-sm/468.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/468.png"
};

var yanmega = {
    name: "Yanmega",
    dex: 469,
    type: "Bug/Flying",
    ability: "Speed Boost/Tinted Lens/Frisk",
    wiki: "http://www.serebii.net/pokedex-sm/469.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/469.png"
};

var leafeon = {
    name: "Leafeon",
    dex: 470,
    type: "Grass",
    ability: "Leaf Guard/None/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-sm/470.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/470.png"
};

var glaceon = {
    name: "Glaceon",
    dex: 471,
    type: "Ice",
    ability: "Snow Cloak/None/Ice Body",
    wiki: "http://www.serebii.net/pokedex-sm/471.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/471.png"
};

var gliscor = {
    name: "Gliscor",
    dex: 472,
    type: "Ground/Flying",
    ability: "Hyper Cutter/Sand Veil/Poison Heal",
    wiki: "http://www.serebii.net/pokedex-sm/472.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/472.png"
};

var mamoswine = {
    name: "Mamoswine",
    dex: 473,
    type: "Ice/Ground",
    ability: "Oblivious/Snow Cloak/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-sm/473.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/473.png"
};

var porygon_z = {
    name: "Porygon-Z",
    dex: 474,
    type: "Normal",
    ability: "Adaptability/Download/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/474.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/474.png"
};

var gallade = {
    name: "Gallade",
    dex: 475,
    type: "Psychic/Fighting",
    ability: "Steadfast/None/Justified",
    wiki: "http://www.serebii.net/pokedex-sm/475.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/475.png"
};

var probopass = {
    name: "Probopass",
    dex: 476,
    type: "Rock/Steel",
    ability: "Sturdy/Magnet Pull/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/476.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/476.png"
};

var dusknoir = {
    name: "Dusknoir",
    dex: 477,
    type: "Ghost",
    ability: "Pressure/None/Frisk/VI",
    wiki: "http://www.serebii.net/pokedex-sm/477.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/477.png"
};

var froslass = {
    name: "Froslass",
    dex: 478,
    type: "Ice/Ghost",
    ability: "Snow Cloak/None/Cursed Body",
    wiki: "http://www.serebii.net/pokedex-sm/478.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/478.png"
};

var rotom = {
    name: "Rotom",
    dex: 479,
    type: "Electric/Ghost",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/479.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/479.png"
};

var rotom_heat = {
    name: "Rotom Heat",
    dex: 479,
    type: "Electric/Fire",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/479.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/479-h.png"
};

var rotom_wash = {
    name: "Rotom Wash",
    dex: 479,
    type: "Electric/Water",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/479.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/479-w.png"
};

var rotom_frost = {
    name: "Rotom Frost",
    dex: 479,
    type: "Electric/Frost",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/479.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/479-f.png"
};

var rotom_fan = {
    name: "Rotom Fan",
    dex: 479,
    type: "Electric/Flying",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/479.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/479-s.png"
};

var rotom_mow = {
    name: "Rotom Mow",
    dex: 479,
    type: "Electric/Grass",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/479.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/479-m.png"
};

var uxie = {
    name: "Uxie",
    dex: 480,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/480.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/480.png"
};

var mesprit = {
    name: "Mesprit",
    dex: 481,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/481.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/481.png"
};

var azelf = {
    name: "Azelf",
    dex: 482,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/482.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/482.png"
};

var dialga = {
    name: "Dialga",
    dex: 483,
    type: "Steel/Dragon",
    ability: "Pressure/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/483.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/483.png"
};

var palkia = {
    name: "Palkia",
    dex: 484,
    type: "Water/Dragon",
    ability: "Pressure/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/484.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/484.png"
};

var heatran = {
    name: "Heatran",
    dex: 485,
    type: "Fire/Steel",
    ability: "Flash Fire/None/Flame Body",
    wiki: "http://www.serebii.net/pokedex-sm/485.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/485.png"
};

var regigigas = {
    name: "Regigigas",
    dex: 486,
    type: "Normal",
    ability: "Slow Start",
    wiki: "http://www.serebii.net/pokedex-sm/486.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/486.png"
};

var giratina = {
    name: "Giratina",
    dex: 487,
    type: "Ghost/Dragon",
    ability: "Pressure/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/487.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/487.png"
};

var giratina_origin = {
    name: "Giratina",
    dex: 487,
    type: "Ghost/Dragon",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/487.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/487-o.png"
};

var cresselia = {
    name: "Cresselia",
    dex: 488,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/488.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/488.png"
};

var phione = {
    name: "Phione",
    dex: 489,
    type: "Water",
    ability: "Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/489.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/489.png"
};

var manaphy = {
    name: "Manaphy",
    dex: 490,
    type: "Water",
    ability: "Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/490.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/490.png"
};

var darkrai = {
    name: "Darkrai",
    dex: 491,
    type: "Dark",
    ability: "Bad Dreams",
    wiki: "http://www.serebii.net/pokedex-sm/491.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/491.png"
};

var shaymin = {
    name: "Shaymin",
    dex: 492,
    type: "Grass",
    ability: "Natural Cure",
    wiki: "http://www.serebii.net/pokedex-sm/492.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/492.png"
};

var shaymin_sky = {
    name: "Shaymin Sky",
    dex: 492,
    type: "Grass/Flying",
    ability: "Serene Grace",
    wiki: "http://www.serebii.net/pokedex-sm/492.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/492-s.png"
};

var arceus = {
    name: "Arceus",
    dex: 493,
    type: "Normal",
    ability: "Multitype",
    wiki: "http://www.serebii.net/pokedex-sm/493.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/493.png"
};

var victini = {
    name: "Victini",
    dex: 494,
    type: "Psychic/Fire",
    ability: "Victory Star",
    wiki: "http://www.serebii.net/pokedex-sm/494.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/494.png"
};

var snivy = {
    name: "Snivy",
    dex: 495,
    type: "Grass",
    ability: "Overgrow/None/Contrary",
    wiki: "http://www.serebii.net/pokedex-sm/495.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/495.png"
};

var servine = {
    name: "Servine",
    dex: 496,
    type: "Grass",
    ability: "Overgrow/None/Contrary",
    wiki: "http://www.serebii.net/pokedex-sm/496.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/496.png"
};

var serperior = {
    name: "Serperior",
    dex: 497,
    type: "Grass",
    ability: "Overgrow/None/Contrary",
    wiki: "http://www.serebii.net/pokedex-sm/497.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/497.png"
};

var tepig = {
    name: "Tepig",
    dex: 498,
    type: "Fire",
    ability: "Blaze/None/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-sm/498.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/498.png"
};

var pignite = {
    name: "Pignite",
    dex: 499,
    type: "Fire/Fighting",
    ability: "Blaze/None/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-sm/499.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/499.png"
};

var emboar = {
    name: "Emboar",
    dex: 500,
    type: "Fire/Fighting",
    ability: "Blaze/None/Reckless",
    wiki: "http://www.serebii.net/pokedex-sm/500.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/500.png"
};

var oshawott = {
    name: "Oshawott",
    dex: 501,
    type: "Water",
    ability: "Torrent/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/501.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/501.png"
};

var dewott = {
    name: "Dewott",
    dex: 502,
    type: "Water",
    ability: "Torrent/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/502.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/502.png"
};

var samurott = {
    name: "Samurott",
    dex: 503,
    type: "Water",
    ability: "Torrent/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/503.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/503.png"
};

var patrat = {
    name: "Patrat",
    dex: 504,
    type: "Normal",
    ability: "Run Away/Keen Eye/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/504.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/504.png"
};

var watchog = {
    name: "Watchog",
    dex: 505,
    type: "Normal",
    ability: "Illuminate/Keen Eye/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/505.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/505.png"
};

var lillipup = {
    name: "Lillipup",
    dex: 506,
    type: "Normal",
    ability: "Vital Spirit/Pickup/Run Away",
    wiki: "http://www.serebii.net/pokedex-sm/506.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/506.png"
};

var herdier = {
    name: "Herdier",
    dex: 507,
    type: "Normal",
    ability: "Intimidate/Sand Rush/Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/507.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/507.png"
};

var stoutland = {
    name: "Stoutland",
    dex: 508,
    type: "Normal",
    ability: "Intimidate/Sand Rush/Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/508.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/508.png"
};

var purrloin = {
    name: "Purrloin",
    dex: 509,
    type: "Dark",
    ability: "Limber/Unburden/Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/509.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/509.png"
};

var liepard = {
    name: "Liepard",
    dex: 510,
    type: "Dark",
    ability: "Limber/Unburden/Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/510.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/510.png"
};

var pansage = {
    name: "Pansage",
    dex: 511,
    type: "Grass",
    ability: "Gluttony/None/Overgrow",
    wiki: "http://www.serebii.net/pokedex-sm/511.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/511.png"
};

var simisage = {
    name: "Simisage",
    dex: 512,
    type: "Grass",
    ability: "Gluttony/None/Overgrow",
    wiki: "http://www.serebii.net/pokedex-sm/512.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/512.png"
};

var pansear = {
    name: "Pansear",
    dex: 513,
    type: "Fire",
    ability: "Gluttony/None/Blaze",
    wiki: "http://www.serebii.net/pokedex-sm/513.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/513.png"
};

var simisear = {
    name: "Simisear",
    dex: 514,
    type: "Fire",
    ability: "Gluttony/None/Blaze",
    wiki: "http://www.serebii.net/pokedex-sm/514.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/514.png"
};

var panpour = {
    name: "Panpour",
    dex: 515,
    type: "Water",
    ability: "Gluttony/None/Torrent",
    wiki: "http://www.serebii.net/pokedex-sm/515.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/515.png"
};

var simipour = {
    name: "Simipour",
    dex: 516,
    type: "Water",
    ability: "Gluttony/None/Torrent",
    wiki: "http://www.serebii.net/pokedex-sm/516.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/516.png"
};

var munna = {
    name: "Munna",
    dex: 517,
    type: "Psychic",
    ability: "Forewarn/Synchronize/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/517.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/517.png"
};

var musharna = {
    name: "Musharna",
    dex: 518,
    type: "Psychic",
    ability: "Forewarn/Synchronize/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/518.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/518.png"
};

var pidove = {
    name: "Pidove",
    dex: 519,
    type: "Normal/Flying",
    ability: "Big Pecks/Super Luck/Rivalry",
    wiki: "http://www.serebii.net/pokedex-sm/519.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/519.png"
};

var tranquill = {
    name: "Tranquill",
    dex: 520,
    type: "Normal/Flying",
    ability: "Big Pecks/Super Luck/Rivalry",
    wiki: "http://www.serebii.net/pokedex-sm/520.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/520.png"
};

var unfezant = {
    name: "Unfezant",
    dex: 521,
    type: "Normal/Flying",
    ability: "Big Pecks/Super Luck/Rivalry",
    wiki: "http://www.serebii.net/pokedex-sm/521.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/521.png"
};

var blitzle = {
    name: "Blitzle",
    dex: 522,
    type: "Electric",
    ability: "Lightning Rod/Motor Drive/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-sm/522.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/522.png"
};

var zebstrika = {
    name: "Zebstrika",
    dex: 523,
    type: "Electric",
    ability: "Lightning Rod/Motor Drive/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-sm/523.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/523.png"
};

var roggenrola = {
    name: "Roggenrola",
    dex: 524,
    type: "Rock",
    ability: "Sturdy/None/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/524.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/524.png"
};

var boldore = {
    name: "Boldore",
    dex: 525,
    type: "Rock",
    ability: "Sturdy/None/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/525.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/525.png"
};

var gigalith = {
    name: "Gigalith",
    dex: 526,
    type: "Rock",
    ability: "Sturdy/None/Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/526.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/526.png"
};

var woobat = {
    name: "Woobat",
    dex: 527,
    type: "Psychic/Flying",
    ability: "Unaware/Klutz/Simple",
    wiki: "http://www.serebii.net/pokedex-sm/527.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/527.png"
};

var swoobat = {
    name: "Swoobat",
    dex: 528,
    type: "Psychic/Flying",
    ability: "Unaware/Klutz/Simple",
    wiki: "http://www.serebii.net/pokedex-sm/528.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/528.png"
};

var drilbur = {
    name: "Drilbur",
    dex: 529,
    type: "Ground",
    ability: "Sand Rush/Sand Force/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/529.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/529.png"
};

var excadrill = {
    name: "Excadrill",
    dex: 530,
    type: "Ground/Steel",
    ability: "Sand Rush/Sand Force/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/530.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/530.png"
};

var audino = {
    name: "Audino",
    dex: 531,
    type: "Normal",
    ability: "Healer/Regenerator/Klutz",
    wiki: "http://www.serebii.net/pokedex-sm/531.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/531.png"
};

var timburr = {
    name: "Timburr",
    dex: 532,
    type: "Fighting",
    ability: "Guts/Sheer Force/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-sm/532.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/532.png"
};

var gurdurr = {
    name: "Gurdurr",
    dex: 533,
    type: "Fighting",
    ability: "Guts/Sheer Force/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-sm/533.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/533.png"
};

var conkeldurr = {
    name: "Conkeldurr",
    dex: 534,
    type: "Fighting",
    ability: "Guts/Sheer Force/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-sm/534.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/534.png"
};

var tympole = {
    name: "Tympole",
    dex: 535,
    type: "Water",
    ability: "Swift Swim/Hydration/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/535.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/535.png"
};

var palpitoad = {
    name: "Palpitoad",
    dex: 536,
    type: "Water/Ground",
    ability: "Swift Swim/Hydration/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/536.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/536.png"
};

var seismitoad = {
    name: "Seismitoad",
    dex: 537,
    type: "Water/Ground",
    ability: "Swift Swim/Poison Touch/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/537.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/537.png"
};

var throh = {
    name: "Throh",
    dex: 538,
    type: "Fighting",
    ability: "Guts/Inner Focus/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/538.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/538.png"
};

var sawk = {
    name: "Sawk",
    dex: 539,
    type: "Fighting",
    ability: "Sturdy/Inner Focus/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/539.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/539.png"
};

var sewaddle = {
    name: "Sewaddle",
    dex: 540,
    type: "Bug/Grass",
    ability: "Swarm/Chlorophyll/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/540.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/540.png"
};

var swadloon = {
    name: "Swadloon",
    dex: 541,
    type: "Bug/Grass",
    ability: "Leaf Guard/Chlorophyll/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/541.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/541.png"
};

var leavanny = {
    name: "Leavanny",
    dex: 542,
    type: "Bug/Grass",
    ability: "Swarm/Chlorophyll/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/542.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/542.png"
};

var venipede = {
    name: "Venipede",
    dex: 543,
    type: "Bug/Poison",
    ability: "Poison Point/Swarm/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/543.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/543.png"
};

var whirlipede = {
    name: "Whirlipede",
    dex: 544,
    type: "Bug/Poison",
    ability: "Poison Point/Swarm/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/544.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/544.png"
};

var scolipede = {
    name: "Scolipede",
    dex: 545,
    type: "Bug/Poison",
    ability: "Poison Point/Swarm/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/545.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/545.png"
};

var cottonee = {
    name: "Cottonee",
    dex: 546,
    type: "Grass",
    ability: "Prankster/Infiltrator/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-sm/546.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/546.png"
};

var whimsicott = {
    name: "Whimsicott",
    dex: 547,
    type: "Grass/Fairy",
    ability: "Prankster/Infiltrator/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-sm/547.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/547.png"
};

var petilil = {
    name: "Petilil",
    dex: 548,
    type: "Grass",
    ability: "Chlorophyll/Own Tempo/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-sm/548.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/548.png"
};

var lilligant = {
    name: "Lilligant",
    dex: 549,
    type: "Grass",
    ability: "Chlorophyll/Own Tempo/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-sm/549.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/549.png"
};

var basculin = {
    name: "Basculin",
    dex: 550,
    type: "Water",
    ability: "Reckless/Adaptability/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/550.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/550.png"
};

var basculin_blue = {
    name: "Basculin Blue",
    dex: 550,
    type: "Water",
    ability: "Rock Head/Adaptability/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/550.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/550-b.png"
};

var sandile = {
    name: "Sandile",
    dex: 551,
    type: "Ground/Dark",
    ability: "Intimidate/Moxie/Anger Point",
    wiki: "http://www.serebii.net/pokedex-sm/551.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/551.png"
};

var krokorok = {
    name: "Krokorok",
    dex: 552,
    type: "Ground/Dark",
    ability: "Intimidate/Moxie/Anger Point",
    wiki: "http://www.serebii.net/pokedex-sm/552.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/552.png"
};

var krookodile = {
    name: "Krookodile",
    dex: 553,
    type: "Ground/Dark",
    ability: "Intimidate/Moxie/Anger Point",
    wiki: "http://www.serebii.net/pokedex-sm/553.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/553.png"
};

var darumaka = {
    name: "Darumaka",
    dex: 554,
    type: "Fire",
    ability: "Hustle/None/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/554.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/554.png"
};

var darmanitan = {
    name: "Darmanitan",
    dex: 555,
    type: "Fire",
    ability: "Sheer Force/None/Zen Mode",
    wiki: "http://www.serebii.net/pokedex-sm/555.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/555.png"
};

var darmanitan_zen = {
    name: "Darmanitan Zen",
    dex: 555,
    type: "Fire/Psychic",
    ability: "Zen Mode",
    wiki: "http://www.serebii.net/pokedex-sm/555.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/555-d.png"
};

var maractus = {
    name: "Maractus",
    dex: 556,
    type: "Grass",
    ability: "Water Absorb/Chlorophyll/Storm Drain",
    wiki: "http://www.serebii.net/pokedex-sm/556.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/556.png"
};

var dwebble = {
    name: "Dwebble",
    dex: 557,
    type: "Bug/Rock",
    ability: "Sturdy/Shell Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/557.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/557.png"
};

var crustle = {
    name: "Crustle",
    dex: 558,
    type: "Bug/Rock",
    ability: "Sturdy/Shell Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/558.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/558.png"
};

var scraggy = {
    name: "Scraggy",
    dex: 559,
    type: "Dark/Fighting",
    ability: "Shed Skin/Moxie/Intimidate",
    wiki: "http://www.serebii.net/pokedex-sm/559.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/559.png"
};

var scrafty = {
    name: "Scrafty",
    dex: 560,
    type: "Dark/Fighting",
    ability: "Shed Skin/Moxie/Intimidate",
    wiki: "http://www.serebii.net/pokedex-sm/560.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/560.png"
};

var sigilyph = {
    name: "Sigilyph",
    dex: 561,
    type: "Psychic/Flying",
    ability: "Wonder Skin/Magic Guard/Tinted Lens",
    wiki: "http://www.serebii.net/pokedex-sm/561.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/561.png"
};

var yamask = {
    name: "Yamask",
    dex: 562,
    type: "Ghost",
    ability: "Mummy",
    wiki: "http://www.serebii.net/pokedex-sm/562.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/562.png"
};

var cofagrigus = {
    name: "Cofagrigus",
    dex: 563,
    type: "Ghost",
    ability: "Mummy",
    wiki: "http://www.serebii.net/pokedex-sm/563.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/563.png"
};

var tirtouga = {
    name: "Tirtouga",
    dex: 564,
    type: "Water/Rock",
    ability: "Solid Rock/Sturdy/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/564.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/564.png"
};

var carracosta = {
    name: "Carracosta",
    dex: 565,
    type: "Water/Rock",
    ability: "Solid Rock/Sturdy/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/565.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/565.png"
};

var archen = {
    name: "Archen",
    dex: 566,
    type: "Rock/Flying",
    ability: "Defeatist",
    wiki: "http://www.serebii.net/pokedex-sm/566.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/566.png"
};

var archeops = {
    name: "Archeops",
    dex: 567,
    type: "Rock/Flying",
    ability: "Defeatist",
    wiki: "http://www.serebii.net/pokedex-sm/567.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/567.png"
};

var trubbish = {
    name: "Trubbish",
    dex: 568,
    type: "Poison",
    ability: "Stench/Sticky Hold/Aftermath",
    wiki: "http://www.serebii.net/pokedex-sm/568.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/568.png"
};

var garbodor = {
    name: "Garbodor",
    dex: 569,
    type: "Poison",
    ability: "Stench/Weak Armor/Aftermath",
    wiki: "http://www.serebii.net/pokedex-sm/569.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/569.png"
};

var zorua = {
    name: "Zorua",
    dex: 570,
    type: "Dark",
    ability: "Illusion",
    wiki: "http://www.serebii.net/pokedex-sm/570.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/570.png"
};

var zoroark = {
    name: "Zoroark",
    dex: 571,
    type: "Dark",
    ability: "Illusion",
    wiki: "http://www.serebii.net/pokedex-sm/571.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/571.png"
};

var minccino = {
    name: "Minccino",
    dex: 572,
    type: "Normal",
    ability: "Cute Charm/Technician/Skill Link",
    wiki: "http://www.serebii.net/pokedex-sm/572.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/572.png"
};

var cinccino = {
    name: "Cinccino",
    dex: 573,
    type: "Normal",
    ability: "Cute Charm/Technician/Skill Link",
    wiki: "http://www.serebii.net/pokedex-sm/573.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/573.png"
};

var gothita = {
    name: "Gothita",
    dex: 574,
    type: "Psychic",
    ability: "Frisk/Competitive/Shadow Tag",
    wiki: "http://www.serebii.net/pokedex-sm/574.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/574.png"
};

var gothorita = {
    name: "Gothorita",
    dex: 575,
    type: "Psychic",
    ability: "Frisk/Competitive/Shadow Tag",
    wiki: "http://www.serebii.net/pokedex-sm/575.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/575.png"
};

var gothitelle = {
    name: "Gothitelle",
    dex: 576,
    type: "Psychic",
    ability: "Frisk/Competitive/Shadow Tag",
    wiki: "http://www.serebii.net/pokedex-sm/576.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/576.png"
};

var solosis = {
    name: "Solosis",
    dex: 577,
    type: "Psychic",
    ability: "Overcoat/Magic Guard/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/577.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/577.png"
};

var duosion = {
    name: "Duosion",
    dex: 578,
    type: "Psychic",
    ability: "Overcoat/Magic Guard/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/578.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/578.png"
};

var reuniclus = {
    name: "Reuniclus",
    dex: 579,
    type: "Psychic",
    ability: "Overcoat/Magic Guard/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/579.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/579.png"
};

var ducklett = {
    name: "Ducklett",
    dex: 580,
    type: "Water/Flying",
    ability: "Keen Eye/Big Pecks/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/580.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/580.png"
};

var swanna = {
    name: "Swanna",
    dex: 581,
    type: "Water/Flying",
    ability: "Keen Eye/Big Pecks/Hydration",
    wiki: "http://www.serebii.net/pokedex-sm/581.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/581.png"
};

var vanillite = {
    name: "Vanillite",
    dex: 582,
    type: "Ice",
    ability: "Ice Body/None/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/582.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/582.png"
};

var vanillish = {
    name: "Vanillish",
    dex: 583,
    type: "Ice",
    ability: "Ice Body/None/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/583.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/583.png"
};

var vanilluxe = {
    name: "Vanilluxe",
    dex: 584,
    type: "Ice",
    ability: "Ice Body/None/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/584.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/584.png"
};

var deerling = {
    name: "Deerling",
    dex: 585,
    type: "Normal/Grass",
    ability: "Chlorophyll/Sap Sipper/Serene Grace",
    wiki: "http://www.serebii.net/pokedex-sm/585.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/585.png"
};

var sawsbuck = {
    name: "Sawsbuck",
    dex: 586,
    type: "Normal/Grass",
    ability: "Chlorophyll/Sap Sipper/Serene Grace",
    wiki: "http://www.serebii.net/pokedex-sm/586.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/586.png"
};

var emolga = {
    name: "Emolga",
    dex: 587,
    type: "Electric/Flying",
    ability: "Static/None/Motor Drive",
    wiki: "http://www.serebii.net/pokedex-sm/587.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/587.png"
};

var karrablast = {
    name: "Karrablast",
    dex: 588,
    type: "Bug",
    ability: "Swarm/Shed Skin/No Guard",
    wiki: "http://www.serebii.net/pokedex-sm/588.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/588.png"
};

var escavalier = {
    name: "Escavalier",
    dex: 589,
    type: "Bug/Steel",
    ability: "Swarm/Shell Armor/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/589.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/589.png"
};

var foongus = {
    name: "Foongus",
    dex: 590,
    type: "Grass/Poison",
    ability: "Effect Spore/None/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/590.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/590.png"
};

var amoonguss = {
    name: "Amoonguss",
    dex: 591,
    type: "Grass/Poison",
    ability: "Effect Spore/None/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/591.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/591.png"
};

var frillish = {
    name: "Frillish",
    dex: 592,
    type: "Water/Ghost",
    ability: "Water Absorb/Cursed Body/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/592.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/592.png"
};

var jellicent = {
    name: "Jellicent",
    dex: 593,
    type: "Water/Ghost",
    ability: "Water Absorb/Cursed Body/Damp",
    wiki: "http://www.serebii.net/pokedex-sm/593.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/593.png"
};

var alomomola = {
    name: "Alomomola",
    dex: 594,
    type: "Water",
    ability: "Healer/Hydration/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/594.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/594.png"
};

var joltik = {
    name: "Joltik",
    dex: 595,
    type: "Bug/Electric",
    ability: "Compound Eyes/Unnerve/Swarm",
    wiki: "http://www.serebii.net/pokedex-sm/595.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/595.png"
};

var galvantula = {
    name: "Galvantula",
    dex: 596,
    type: "Bug/Electric",
    ability: "Compound Eyes/Unnerve/Swarm",
    wiki: "http://www.serebii.net/pokedex-sm/596.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/596.png"
};

var ferroseed = {
    name: "Ferroseed",
    dex: 597,
    type: "Grass/Steel",
    ability: "Iron Barbs",
    wiki: "http://www.serebii.net/pokedex-sm/597.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/597.png"
};

var ferrothorn = {
    name: "Ferrothorn",
    dex: 598,
    type: "Grass/Steel",
    ability: "Iron Barbs/None/Anticipation/VI",
    wiki: "http://www.serebii.net/pokedex-sm/598.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/598.png"
};

var klink = {
    name: "Klink",
    dex: 599,
    type: "Steel",
    ability: "Plus/Minus/Clear Body",
    wiki: "http://www.serebii.net/pokedex-sm/599.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/599.png"
};

var klang = {
    name: "Klang",
    dex: 600,
    type: "Steel",
    ability: "Plus/Minus/Clear Body",
    wiki: "http://www.serebii.net/pokedex-sm/600.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/600.png"
};

var klinklang = {
    name: "Klinklang",
    dex: 601,
    type: "Steel",
    ability: "Plus/Minus/Clear Body",
    wiki: "http://www.serebii.net/pokedex-sm/601.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/601.png"
};

var tynamo = {
    name: "Tynamo",
    dex: 602,
    type: "Electric",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/602.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/602.png"
};

var eelektrik = {
    name: "Eelektrik",
    dex: 603,
    type: "Electric",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/603.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/603.png"
};

var eelektross = {
    name: "Eelektross",
    dex: 604,
    type: "Electric",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/604.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/604.png"
};

var elgyem = {
    name: "Elgyem",
    dex: 605,
    type: "Psychic",
    ability: "Telepathy/Synchronize/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/605.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/605.png"
};

var beheeyem = {
    name: "Beheeyem",
    dex: 606,
    type: "Psychic",
    ability: "Telepathy/Synchronize/Analytic",
    wiki: "http://www.serebii.net/pokedex-sm/606.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/606.png"
};

var litwick = {
    name: "Litwick",
    dex: 607,
    type: "Ghost/Fire",
    ability: "Flash Fire/Flame Body/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/607.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/607.png"
};

var lampent = {
    name: "Lampent",
    dex: 608,
    type: "Ghost/Fire",
    ability: "Flash Fire/Flame Body/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/608.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/608.png"
};

var chandelure = {
    name: "Chandelure",
    dex: 609,
    type: "Ghost/Fire",
    ability: "Flash Fire/Flame Body/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/609.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/609.png"
};

var axew = {
    name: "Axew",
    dex: 610,
    type: "Dragon",
    ability: "Rivalry/Mold Breaker/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/610.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/610.png"
};

var fraxure = {
    name: "Fraxure",
    dex: 611,
    type: "Dragon",
    ability: "Rivalry/Mold Breaker/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/611.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/611.png"
};

var haxorus = {
    name: "Haxorus",
    dex: 612,
    type: "Dragon",
    ability: "Rivalry/Mold Breaker/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/612.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/612.png"
};

var cubchoo = {
    name: "Cubchoo",
    dex: 613,
    type: "Ice",
    ability: "Snow Cloak/None/Rattled",
    wiki: "http://www.serebii.net/pokedex-sm/613.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/613.png"
};

var beartic = {
    name: "Beartic",
    dex: 614,
    type: "Ice",
    ability: "Snow Cloak/None/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/614.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/614.png"
};

var cryogonal = {
    name: "Cryogonal",
    dex: 615,
    type: "Ice",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/615.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/615.png"
};

var shelmet = {
    name: "Shelmet",
    dex: 616,
    type: "Bug",
    ability: "Hydration/Shell Armor/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/616.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/616.png"
};

var accelgor = {
    name: "Accelgor",
    dex: 617,
    type: "Bug",
    ability: "Hydration/Sticky Hold/Unburden",
    wiki: "http://www.serebii.net/pokedex-sm/617.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/617.png"
};

var stunfisk = {
    name: "Stunfisk",
    dex: 618,
    type: "Ground/Electric",
    ability: "Static/Limber/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/618.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/618.png"
};

var mienfoo = {
    name: "Mienfoo",
    dex: 619,
    type: "Fighting",
    ability: "Inner Focus/Regenerator/Reckless",
    wiki: "http://www.serebii.net/pokedex-sm/619.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/619.png"
};

var mienshao = {
    name: "Mienshao",
    dex: 620,
    type: "Fighting",
    ability: "Inner Focus/Regenerator/Reckless",
    wiki: "http://www.serebii.net/pokedex-sm/620.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/620.png"
};

var druddigon = {
    name: "Druddigon",
    dex: 621,
    type: "Dragon",
    ability: "Rough Skin/Sheer Force/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/621.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/621.png"
};

var golett = {
    name: "Golett",
    dex: 622,
    type: "Ground/Ghost",
    ability: "Iron Fist/Klutz/No Guard",
    wiki: "http://www.serebii.net/pokedex-sm/622.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/622.png"
};

var golurk = {
    name: "Golurk",
    dex: 623,
    type: "Ground/Ghost",
    ability: "Iron Fist/Klutz/No Guard",
    wiki: "http://www.serebii.net/pokedex-sm/623.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/623.png"
};

var pawniard = {
    name: "Pawniard",
    dex: 624,
    type: "Dark/Steel",
    ability: "Defiant/Inner Focus/Pressure",
    wiki: "http://www.serebii.net/pokedex-sm/624.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/624.png"
};

var bisharp = {
    name: "Bisharp",
    dex: 625,
    type: "Dark/Steel",
    ability: "Defiant/Inner Focus/Pressure",
    wiki: "http://www.serebii.net/pokedex-sm/625.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/625.png"
};

var bouffalant = {
    name: "Bouffalant",
    dex: 626,
    type: "Normal",
    ability: "Reckless/Sap Sipper/Soundproof",
    wiki: "http://www.serebii.net/pokedex-sm/626.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/626.png"
};

var rufflet = {
    name: "Rufflet",
    dex: 627,
    type: "Normal/Flying",
    ability: "Keen Eye/Sheer Force/Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/627.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/627.png"
};

var braviary = {
    name: "Braviary",
    dex: 628,
    type: "Normal/Flying",
    ability: "Keen Eye/Sheer Force/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/628.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/628.png"
};

var vullaby = {
    name: "Vullaby",
    dex: 629,
    type: "Dark/Flying",
    ability: "Big Pecks/Overcoat/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/629.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/629.png"
};

var mandibuzz = {
    name: "Mandibuzz",
    dex: 630,
    type: "Dark/Flying",
    ability: "Big Pecks/Overcoat/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-sm/630.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/630.png"
};

var heatmor = {
    name: "Heatmor",
    dex: 631,
    type: "Fire",
    ability: "Gluttony/Flash Fire/White Smoke",
    wiki: "http://www.serebii.net/pokedex-sm/631.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/631.png"
};

var durant = {
    name: "Durant",
    dex: 632,
    type: "Bug/Steel",
    ability: "Swarm/Hustle/Truant",
    wiki: "http://www.serebii.net/pokedex-sm/632.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/632.png"
};

var deino = {
    name: "Deino",
    dex: 633,
    type: "Dark/Dragon",
    ability: "Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/633.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/633.png"
};

var zweilous = {
    name: "Zweilous",
    dex: 634,
    type: "Dark/Dragon",
    ability: "Hustle",
    wiki: "http://www.serebii.net/pokedex-sm/634.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/634.png"
};

var hydreigon = {
    name: "Hydreigon",
    dex: 635,
    type: "Dark/Dragon",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/635.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/635.png"
};

var larvesta = {
    name: "Larvesta",
    dex: 636,
    type: "Bug/Fire",
    ability: "Flame Body/None/Swarm",
    wiki: "http://www.serebii.net/pokedex-sm/636.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/636.png"
};

var volcarona = {
    name: "Volcarona",
    dex: 637,
    type: "Bug/Fire",
    ability: "Flame Body/None/Swarm",
    wiki: "http://www.serebii.net/pokedex-sm/637.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/637.png"
};

var cobalion = {
    name: "Cobalion",
    dex: 638,
    type: "Steel/Fighting",
    ability: "Justified",
    wiki: "http://www.serebii.net/pokedex-sm/638.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/638.png"
};

var terrakion = {
    name: "Terrakion",
    dex: 639,
    type: "Rock/Fighting",
    ability: "Justified",
    wiki: "http://www.serebii.net/pokedex-sm/639.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/639.png"
};

var virizion = {
    name: "Virizion",
    dex: 640,
    type: "Grass/Fighting",
    ability: "Justified",
    wiki: "http://www.serebii.net/pokedex-sm/640.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/640.png"
};

var tornadus = {
    name: "Tornadus",
    dex: 641,
    type: "Flying",
    ability: "Prankster/None/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/641.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/641.png"
};

var tornadus_therian = {
    name: "Tornadus Therian",
    dex: 641,
    type: "Flying",
    ability: "Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/641.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/641-s.png"
};

var thundurus = {
    name: "Thundurus",
    dex: 642,
    type: "Electric/Flying",
    ability: "Prankster/None/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/642.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/642.png"
};

var thundurus_therian = {
    name: "Thundurus Therian",
    dex: 642,
    type: "Electric/Flying",
    ability: "Volt Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/642.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/642-s.png"
};

var reshiram = {
    name: "Reshiram",
    dex: 643,
    type: "Dragon/Fire",
    ability: "Turboblaze",
    wiki: "http://www.serebii.net/pokedex-sm/643.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/643.png"
};

var zekrom = {
    name: "Zekrom",
    dex: 644,
    type: "Dragon/Electric",
    ability: "Teravolt",
    wiki: "http://www.serebii.net/pokedex-sm/644.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/644.png"
};

var landorus = {
    name: "Landorus",
    dex: 645,
    type: "Ground/Flying",
    ability: "Sand Force/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/645.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/645.png"
};

var landorus_therian = {
    name: "Landorus Therian",
    dex: 645,
    type: "Ground/Flying",
    ability: "Intimidate",
    wiki: "http://www.serebii.net/pokedex-sm/645.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/645-s.png"
};

var kyurem = {
    name: "Kyurem",
    dex: 646,
    type: "Dragon/Ice",
    ability: "Pressure",
    wiki: "http://www.serebii.net/pokedex-sm/646.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/646.png"
};

var white_kyurem = {
    name: "White Kyurem",
    dex: 646,
    type: "Dragon/Ice",
    ability: "Turboblaze",
    wiki: "http://www.serebii.net/pokedex-sm/646.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/646-w.png"
};

var black_kyurem = {
    name: "Black Kyurem",
    dex: 646,
    type: "Dragon/Ice",
    ability: "Teravolt",
    wiki: "http://www.serebii.net/pokedex-sm/646.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/646-b.png"
};

var keldeo = {
    name: "Keldeo",
    dex: 647,
    type: "Water/Fighting",
    ability: "Justified",
    wiki: "http://www.serebii.net/pokedex-sm/647.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/647.png"
};

var meloetta = {
    name: "Meloetta",
    dex: 648,
    type: "Normal/Psychic",
    ability: "Serene Grace",
    wiki: "http://www.serebii.net/pokedex-sm/648.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/648.png"
};

var meloetta_pirouette = {
    name: "Meloetta Pirouette",
    dex: 648,
    type: "Normal/Fighting",
    ability: "Serene Grace",
    wiki: "http://www.serebii.net/pokedex-sm/648.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/648-s.png"
};

var genesect = {
    name: "Genesect",
    dex: 649,
    type: "Bug/Steel",
    ability: "Download",
    wiki: "http://www.serebii.net/pokedex-sm/649.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/649.png"
};

var chespin = {
    name: "Chespin",
    dex: 650,
    type: "Grass",
    ability: "Overgrow/None/Bulletproof",
    wiki: "http://www.serebii.net/pokedex-sm/650.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/650.png"
};

var quilladin = {
    name: "Quilladin",
    dex: 651,
    type: "Grass",
    ability: "Overgrow/None/Bulletproof",
    wiki: "http://www.serebii.net/pokedex-sm/651.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/651.png"
};

var chesnaught = {
    name: "Chesnaught",
    dex: 652,
    type: "Grass/Fighting",
    ability: "Overgrow/None/Bulletproof",
    wiki: "http://www.serebii.net/pokedex-sm/652.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/652.png"
};

var fennekin = {
    name: "Fennekin",
    dex: 653,
    type: "Fire",
    ability: "Blaze/None/Magician",
    wiki: "http://www.serebii.net/pokedex-sm/653.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/653.png"
};

var braixen = {
    name: "Braixen",
    dex: 654,
    type: "Fire",
    ability: "Blaze/None/Magician",
    wiki: "http://www.serebii.net/pokedex-sm/654.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/654.png"
};

var delphox = {
    name: "Delphox",
    dex: 655,
    type: "Fire/Psychic",
    ability: "Blaze/None/Magician",
    wiki: "http://www.serebii.net/pokedex-sm/655.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/655.png"
};

var froakie = {
    name: "Froakie",
    dex: 656,
    type: "Water",
    ability: "Torrent/None/Protean",
    wiki: "http://www.serebii.net/pokedex-sm/656.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/656.png"
};

var frogadier = {
    name: "Frogadier",
    dex: 657,
    type: "Water",
    ability: "Torrent/None/Protean",
    wiki: "http://www.serebii.net/pokedex-sm/657.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/657.png"
};

var greninja = {
    name: "Greninja",
    dex: 658,
    type: "Water/Dark",
    ability: "Torrent/None/Protean",
    wiki: "http://www.serebii.net/pokedex-sm/658.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/658.png"
};

var bunnelby = {
    name: "Bunnelby",
    dex: 659,
    type: "Normal",
    ability: "Pickup/Cheek Pouch/Huge Power",
    wiki: "http://www.serebii.net/pokedex-sm/659.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/659.png"
};

var diggersby = {
    name: "Diggersby",
    dex: 660,
    type: "Normal/Ground",
    ability: "Pickup/Cheek Pouch/Huge Power",
    wiki: "http://www.serebii.net/pokedex-sm/660.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/660.png"
};

var fletchling = {
    name: "Fletchling",
    dex: 661,
    type: "Normal/Flying",
    ability: "Big Pecks/None/Gale Wings",
    wiki: "http://www.serebii.net/pokedex-sm/661.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/661.png"
};

var fletchinder = {
    name: "Fletchinder",
    dex: 662,
    type: "Fire/Flying",
    ability: "Flame Body/None/Gale Wings",
    wiki: "http://www.serebii.net/pokedex-sm/662.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/662.png"
};

var talonflame = {
    name: "Talonflame",
    dex: 663,
    type: "Fire/Flying",
    ability: "Flame Body/None/ Gale Wings",
    wiki: "http://www.serebii.net/pokedex-sm/663.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/663.png"
};

var scatterbug = {
    name: "Scatterbug",
    dex: 664,
    type: "Bug",
    ability: "Shield Dust/Compound Eyes/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-sm/664.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/664.png"
};

var spewpa = {
    name: "Spewpa",
    dex: 665,
    type: "Bug",
    ability: "Shed Skin/None/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-sm/665.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/665.png"
};

var vivillon = {
    name: "Vivillon",
    dex: 666,
    type: "Bug/Flying",
    ability: "Shield Dust/Compound Eyes/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-sm/666.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/666.png"
};

var litleo = {
    name: "Litleo",
    dex: 667,
    type: "Fire/Normal",
    ability: "Rivalry/Unnerve/Moxie",
    wiki: "http://www.serebii.net/pokedex-sm/667.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/667.png"
};

var pyroar = {
    name: "Pyroar",
    dex: 668,
    type: "Fire/Normal",
    ability: "Rivalry/Unnerve/Moxie",
    wiki: "http://www.serebii.net/pokedex-sm/668.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/668.png"
};

var flabébé = {
    name: "Flabébé",
    dex: 669,
    type: "Fairy",
    ability: "Flower Veil/None/Symbiosis",
    wiki: "http://www.serebii.net/pokedex-sm/669.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/669.png"
};

var floette = {
    name: "Floette",
    dex: 670,
    type: "Fairy",
    ability: "Flower Veil/None/Symbiosis",
    wiki: "http://www.serebii.net/pokedex-sm/670.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/670.png"
};

var florges = {
    name: "Florges",
    dex: 671,
    type: "Fairy",
    ability: "Flower Veil/None/Symbiosis",
    wiki: "http://www.serebii.net/pokedex-sm/671.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/671.png"
};

var skiddo = {
    name: "Skiddo",
    dex: 672,
    type: "Grass",
    ability: "Sap Sipper/None/Grass Pelt",
    wiki: "http://www.serebii.net/pokedex-sm/672.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/672.png"
};

var gogoat = {
    name: "Gogoat",
    dex: 673,
    type: "Grass",
    ability: "Sap Sipper/None/Grass Pelt",
    wiki: "http://www.serebii.net/pokedex-sm/673.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/673.png"
};

var pancham = {
    name: "Pancham",
    dex: 674,
    type: "Fighting",
    ability: "Iron Fist/Mold Breaker/Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/674.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/674.png"
};

var pangoro = {
    name: "Pangoro",
    dex: 675,
    type: "Fighting/Dark",
    ability: "Iron Fist/Mold Breaker/Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/675.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/675.png"
};

var furfrou = {
    name: "Furfrou",
    dex: 676,
    type: "Normal",
    ability: "Fur Coat",
    wiki: "http://www.serebii.net/pokedex-sm/676.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/676.png"
};

var espurr = {
    name: "Espurr",
    dex: 677,
    type: "Psychic",
    ability: "Keen Eye/Infiltrator/Own Tempo",
    wiki: "http://www.serebii.net/pokedex-sm/677.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/677.png"
};

var meowstic = {
    name: "Meowstic",
    dex: 678,
    type: "Psychic",
    ability: "Keen Eye/Infiltrator/Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/678.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/678.png"
};

var honedge = {
    name: "Honedge",
    dex: 679,
    type: "Steel/Ghost",
    ability: "No Guard",
    wiki: "http://www.serebii.net/pokedex-sm/679.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/679.png"
};

var doublade = {
    name: "Doublade",
    dex: 680,
    type: "Steel/Ghost",
    ability: "No Guard",
    wiki: "http://www.serebii.net/pokedex-sm/680.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/680.png"
};

var aegislash = {
    name: "Aegislash",
    dex: 681,
    type: "Steel/Ghost",
    ability: "Stance Change",
    wiki: "http://www.serebii.net/pokedex-sm/681.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/681.png"
};

var spritzee = {
    name: "Spritzee",
    dex: 682,
    type: "Fairy",
    ability: "Healer/None/Aroma Veil",
    wiki: "http://www.serebii.net/pokedex-sm/682.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/682.png"
};

var aromatisse = {
    name: "Aromatisse",
    dex: 683,
    type: "Fairy",
    ability: "Healer/None/Aroma Veil",
    wiki: "http://www.serebii.net/pokedex-sm/683.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/683.png"
};

var swirlix = {
    name: "Swirlix",
    dex: 684,
    type: "Fairy",
    ability: "Sweet Veil/None/Unburden",
    wiki: "http://www.serebii.net/pokedex-sm/684.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/684.png"
};

var slurpuff = {
    name: "Slurpuff",
    dex: 685,
    type: "Fairy",
    ability: "Sweet Veil/None/Unburden",
    wiki: "http://www.serebii.net/pokedex-sm/685.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/685.png"
};

var inkay = {
    name: "Inkay",
    dex: 686,
    type: "Dark/Psychic",
    ability: "Contrary/Suction Cups/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/686.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/686.png"
};

var malamar = {
    name: "Malamar",
    dex: 687,
    type: "Dark/Psychic",
    ability: "Contrary/Suction Cups/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-sm/687.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/687.png"
};

var binacle = {
    name: "Binacle",
    dex: 688,
    type: "Rock/Water",
    ability: "Sniper/Tough Claws/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-sm/688.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/688.png"
};

var barbaracle = {
    name: "Barbaracle",
    dex: 689,
    type: "Rock/Water",
    ability: "Sniper/Tough Claws/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-sm/689.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/689.png"
};

var skrelp = {
    name: "Skrelp",
    dex: 690,
    type: "Poison/Water",
    ability: "Poison Point/Poison Touch/Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/690.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/690.png"
};

var dragalge = {
    name: "Dragalge",
    dex: 691,
    type: "Poison/Dragon",
    ability: "Poison Point/Poison Touch/Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/691.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/691.png"
};

var clauncher = {
    name: "Clauncher",
    dex: 692,
    type: "Water",
    ability: "Mega Launcher",
    wiki: "http://www.serebii.net/pokedex-sm/692.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/692.png"
};

var clawitzer = {
    name: "Clawitzer",
    dex: 693,
    type: "Water",
    ability: "Mega Launcher",
    wiki: "http://www.serebii.net/pokedex-sm/693.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/693.png"
};

var helioptile = {
    name: "Helioptile",
    dex: 694,
    type: "Electric/Normal",
    ability: "Dry Skin/Sand Veil/Solar Power",
    wiki: "http://www.serebii.net/pokedex-sm/694.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/694.png"
};

var heliolisk = {
    name: "Heliolisk",
    dex: 695,
    type: "Electric/Normal",
    ability: "Dry Skin/Sand Veil/Solar Power",
    wiki: "http://www.serebii.net/pokedex-sm/695.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/695.png"
};

var tyrunt = {
    name: "Tyrunt",
    dex: 696,
    type: "Rock/Dragon",
    ability: "Strong Jaw/None/Sturdy",
    wiki: "http://www.serebii.net/pokedex-sm/696.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/696.png"
};

var tyrantrum = {
    name: "Tyrantrum",
    dex: 697,
    type: "Rock/Dragon",
    ability: "Strong Jaw/None/Rock Head",
    wiki: "http://www.serebii.net/pokedex-sm/697.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/697.png"
};

var amaura = {
    name: "Amaura",
    dex: 698,
    type: "Rock/Ice",
    ability: "Refrigerate/None/Snow Warning",
    wiki: "http://www.serebii.net/pokedex-sm/698.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/698.png"
};

var aurorus = {
    name: "Aurorus",
    dex: 699,
    type: "Rock/Ice",
    ability: "Refrigerate/None/Snow Warning",
    wiki: "http://www.serebii.net/pokedex-sm/699.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/699.png"
};

var sylveon = {
    name: "Sylveon",
    dex: 700,
    type: "Fairy",
    ability: "Cute Charm/None/Pixilate",
    wiki: "http://www.serebii.net/pokedex-sm/700.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/700.png"
};

var hawlucha = {
    name: "Hawlucha",
    dex: 701,
    type: "Fighting/Flying",
    ability: "Limber/Unburden/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/701.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/701.png"
};

var dedenne = {
    name: "Dedenne",
    dex: 702,
    type: "Electric/Fairy",
    ability: "Cheek Pouch/Pickup/Plus",
    wiki: "http://www.serebii.net/pokedex-sm/702.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/702.png"
};

var carbink = {
    name: "Carbink",
    dex: 703,
    type: "Rock/Fairy",
    ability: "Clear Body/None/Sturdy",
    wiki: "http://www.serebii.net/pokedex-sm/703.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/703.png"
};

var goomy = {
    name: "Goomy",
    dex: 704,
    type: "Dragon",
    ability: "Sap Sipper/Hydration/Gooey",
    wiki: "http://www.serebii.net/pokedex-sm/704.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/704.png"
};

var sliggoo = {
    name: "Sliggoo",
    dex: 705,
    type: "Dragon",
    ability: "Sap Sipper/Hydration/Gooey",
    wiki: "http://www.serebii.net/pokedex-sm/705.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/705.png"
};

var goodra = {
    name: "Goodra",
    dex: 706,
    type: "Dragon",
    ability: "Sap Sipper/Hydration/Gooey",
    wiki: "http://www.serebii.net/pokedex-sm/706.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/706.png"
};

var klefki = {
    name: "Klefki",
    dex: 707,
    type: "Steel/Fairy",
    ability: "Prankster/None/Magician",
    wiki: "http://www.serebii.net/pokedex-sm/707.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/707.png"
};

var phantump = {
    name: "Phantump",
    dex: 708,
    type: "Ghost/Grass",
    ability: "Natural Cure/Frisk/Harvest",
    wiki: "http://www.serebii.net/pokedex-sm/708.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/708.png"
};

var trevenant = {
    name: "Trevenant",
    dex: 709,
    type: "Ghost/Grass",
    ability: "Natural Cure/Frisk/Harvest",
    wiki: "http://www.serebii.net/pokedex-sm/709.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/709.png"
};

var pumpkaboo = {
    name: "Pumpkaboo",
    dex: 710,
    type: "Ghost/Grass",
    ability: "Pickup/Frisk/Insomnia",
    wiki: "http://www.serebii.net/pokedex-sm/710.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/710.png"
};

var gourgeist = {
    name: "Gourgeist",
    dex: 711,
    type: "Ghost/Grass",
    ability: "Pickup/Frisk/Insomnia",
    wiki: "http://www.serebii.net/pokedex-sm/711.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/711.png"
};

var bergmite = {
    name: "Bergmite",
    dex: 712,
    type: "Ice",
    ability: "Own Tempo/Ice Body/Sturdy",
    wiki: "http://www.serebii.net/pokedex-sm/712.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/712.png"
};

var avalugg = {
    name: "Avalugg",
    dex: 713,
    type: "Ice",
    ability: "Own Tempo/Ice Body/Sturdy",
    wiki: "http://www.serebii.net/pokedex-sm/713.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/713.png"
};

var noibat = {
    name: "Noibat",
    dex: 714,
    type: "Flying/Dragon",
    ability: "Frisk/Infiltrator/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/714.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/714.png"
};

var noivern = {
    name: "Noivern",
    dex: 715,
    type: "Flying/Dragon",
    ability: "Frisk/Infiltrator/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/715.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/715.png"
};

var xerneas = {
    name: "Xerneas",
    dex: 716,
    type: "Fairy",
    ability: "Fairy Aura",
    wiki: "http://www.serebii.net/pokedex-sm/716.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/716.png"
};

var yveltal = {
    name: "Yveltal",
    dex: 717,
    type: "Dark/Flying",
    ability: "Dark Aura",
    wiki: "http://www.serebii.net/pokedex-sm/717.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/717.png"
};

var zygarde = {
    name: "Zygarde",
    dex: 718,
    type: "Dragon/Ground",
    ability: "Aura Break/Power Construct",
    wiki: "http://www.serebii.net/pokedex-sm/718.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/718.png"
};

var diancie = {
    name: "Diancie",
    dex: 719,
    type: "Rock/Fairy",
    ability: "Clear Body",
    wiki: "http://www.serebii.net/pokedex-sm/719.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/719.png"
};

var hoopa = {
    name: "Hoopa",
    dex: 720,
    type: "Psychic/Ghost",
    ability: "Magician",
    wiki: "http://www.serebii.net/pokedex-sm/720.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/720.png"
};

var hoopa_unbound = {
    name: "Hoopa Unbound",
    dex: 720,
    type: "Psychic/Dark",
    ability: "Magician",
    wiki: "http://www.serebii.net/pokedex-sm/720.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/720-u.png"
};

var volcanion = {
    name: "Volcanion",
    dex: 721,
    type: "Fire/Water",
    ability: "Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/721.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/721.png"
};

var rowlet = {
    name: "Rowlet",
    dex: 722,
    type: "Grass/Flying",
    ability: "Overgrow/None/Long Reach",
    wiki: "http://www.serebii.net/pokedex-sm/722.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/722.png"
};

var dartrix = {
    name: "Dartrix",
    dex: 723,
    type: "Grass/Flying",
    ability: "Overgrow/None/Long Reach",
    wiki: "http://www.serebii.net/pokedex-sm/723.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/723.png"
};

var decidueye = {
    name: "Decidueye",
    dex: 724,
    type: "Grass/Ghost",
    ability: "Overgrow/None/Long Reach",
    wiki: "http://www.serebii.net/pokedex-sm/724.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/724.png"
};

var litten = {
    name: "Litten",
    dex: 725,
    type: "Fire",
    ability: "Blaze/None/Intimidate",
    wiki: "http://www.serebii.net/pokedex-sm/725.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/725.png"
};

var torracat = {
    name: "Torracat",
    dex: 726,
    type: "Fire",
    ability: "Blaze/None/Intimidate",
    wiki: "http://www.serebii.net/pokedex-sm/726.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/726.png"
};

var incineroar = {
    name: "Incineroar",
    dex: 727,
    type: "Fire/Dark",
    ability: "Blaze/None/Intimidate",
    wiki: "http://www.serebii.net/pokedex-sm/727.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/727.png"
};

var popplio = {
    name: "Popplio",
    dex: 728,
    type: "Water",
    ability: "Torrent/None/Liquid Voice",
    wiki: "http://www.serebii.net/pokedex-sm/728.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/728.png"
};

var brionne = {
    name: "Brionne",
    dex: 729,
    type: "Water",
    ability: "Torrent/None/Liquid Voice",
    wiki: "http://www.serebii.net/pokedex-sm/729.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/729.png"
};

var primarina = {
    name: "Primarina",
    dex: 730,
    type: "Water/Fairy",
    ability: "Torrent/None/Liquid Voice",
    wiki: "http://www.serebii.net/pokedex-sm/730.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/730.png"
};

var pikipek = {
    name: "Pikipek",
    dex: 731,
    type: "Normal/Flying",
    ability: "Keen Eye/Skill Link/",
    wiki: "http://www.serebii.net/pokedex-sm/731.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/731.png"
};

var trumbeak = {
    name: "Trumbeak",
    dex: 732,
    type: "Normal/Flying",
    ability: "Keen Eye/Skill Link/",
    wiki: "http://www.serebii.net/pokedex-sm/732.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/732.png"
};

var toucannon = {
    name: "Toucannon",
    dex: 733,
    type: "Normal/Flying",
    ability: "Keen Eye/Skill Link/",
    wiki: "http://www.serebii.net/pokedex-sm/733.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/733.png"
};

var yungoos = {
    name: "Yungoos",
    dex: 734,
    type: "Normal",
    ability: "Stakeout/Strong Jaw/Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/734.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/734.png"
};

var gumshoos = {
    name: "Gumshoos",
    dex: 735,
    type: "Normal",
    ability: "Stakeout/Strong Jaw/Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/735.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/735.png"
};

var grubbin = {
    name: "Grubbin",
    dex: 736,
    type: "Bug",
    ability: "Swarm",
    wiki: "http://www.serebii.net/pokedex-sm/736.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/736.png"
};

var charjabug = {
    name: "Charjabug",
    dex: 737,
    type: "Bug/Electric",
    ability: "Battery",
    wiki: "http://www.serebii.net/pokedex-sm/737.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/737.png"
};

var vikavolt = {
    name: "Vikavolt",
    dex: 738,
    type: "Bug/Electric",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/738.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/738.png"
};

var crabrawler = {
    name: "Crabrawler",
    dex: 739,
    type: "Fighting",
    ability: "Hyper Cutter/Iron Fist/Anger Point",
    wiki: "http://www.serebii.net/pokedex-sm/739.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/739.png"
};

var crabominable = {
    name: "Crabominable",
    dex: 740,
    type: "Fighting/Ice",
    ability: "Hyper Cutter/Iron Fist/Anger Point",
    wiki: "http://www.serebii.net/pokedex-sm/740.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/740.png"
};

var oricorio = {
    name: "Oricorio",
    dex: 741,
    type: "Fire/Flying",
    ability: "Dancer",
    wiki: "http://www.serebii.net/pokedex-sm/741.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/741.png"
};

var cutiefly = {
    name: "Cutiefly",
    dex: 742,
    type: "Bug/Fairy",
    ability: "Honey Gather/Shield Dust/Sweet Veil",
    wiki: "http://www.serebii.net/pokedex-sm/742.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/742.png"
};

var ribombee = {
    name: "Ribombee",
    dex: 743,
    type: "Bug/Fairy",
    ability: "Honey Gather/Shield Dust/Sweet Veil",
    wiki: "http://www.serebii.net/pokedex-sm/743.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/743.png"
};

var rockruff = {
    name: "Rockruff",
    dex: 744,
    type: "Rock",
    ability: "Keen Eye/Vital Spirit/Steadfast",
    wiki: "http://www.serebii.net/pokedex-sm/744.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/744.png"
};

var lycanroc = {
    name: "Lycanroc",
    dex: 745,
    type: "Rock",
    ability: "Keen Eye/Sand Rush/Steadfast",
    wiki: "http://www.serebii.net/pokedex-sm/745.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/745.png"
};

var lycanroc_midnight = {
    name: "Lycanroc Midnight",
    dex: 745,
    type: "Rock",
    ability: "Keen Eye/Vital Spirit/No Guard",
    wiki: "http://www.serebii.net/pokedex-sm/745.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/745-m.png"
};


var wishiwashi = {
    name: "Wishiwashi",
    dex: 746,
    type: "Water",
    ability: "Schooling",
    wiki: "http://www.serebii.net/pokedex-sm/746.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/746.png"
};

var mareanie = {
    name: "Mareanie",
    dex: 747,
    type: "Poison/Water",
    ability: "Merciless/Limber/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/747.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/747.png"
};

var toxapex = {
    name: "Toxapex",
    dex: 748,
    type: "Poison/Water",
    ability: "Merciless/Limber/Regenerator",
    wiki: "http://www.serebii.net/pokedex-sm/748.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/748.png"
};

var mudbray = {
    name: "Mudbray",
    dex: 749,
    type: "Ground",
    ability: "Own Tempo/Stamina/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/749.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/749.png"
};

var mudsdale = {
    name: "Mudsdale",
    dex: 750,
    type: "Ground",
    ability: "Own Tempo/Stamina/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/750.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/750.png"
};

var dewpider = {
    name: "Dewpider",
    dex: 751,
    type: "Water/Bug",
    ability: "Water Bubble/None/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/751.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/751.png"
};

var araquanid = {
    name: "Araquanid",
    dex: 752,
    type: "Water/Bug",
    ability: "Water Bubble/None/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-sm/752.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/752.png"
};

var fomantis = {
    name: "Fomantis",
    dex: 753,
    type: "Grass",
    ability: "Leaf Guard/None/Contrary",
    wiki: "http://www.serebii.net/pokedex-sm/753.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/753.png"
};

var lurantis = {
    name: "Lurantis",
    dex: 754,
    type: "Grass",
    ability: "Leaf Guard/None/Contrary",
    wiki: "http://www.serebii.net/pokedex-sm/754.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/754.png"
};

var morelull = {
    name: "Morelull",
    dex: 755,
    type: "Grass/Fairy",
    ability: "Illuminate/Effect Spore/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/755.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/755.png"
};

var shiinotic = {
    name: "Shiinotic",
    dex: 756,
    type: "Grass/Fairy",
    ability: "Illuminate/Effect Spore/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-sm/756.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/756.png"
};

var salandit = {
    name: "Salandit",
    dex: 757,
    type: "Poison/Fire",
    ability: "Corrosion/None/Oblivious",
    wiki: "http://www.serebii.net/pokedex-sm/757.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/757.png"
};

var salazzle = {
    name: "Salazzle",
    dex: 758,
    type: "Poison/Fire",
    ability: "Corrosion/None/Oblivious",
    wiki: "http://www.serebii.net/pokedex-sm/758.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/758.png"
};

var stufful = {
    name: "Stufful",
    dex: 759,
    type: "Normal/Fighting",
    ability: "Fluffy/Klutz/Cute Charm",
    wiki: "http://www.serebii.net/pokedex-sm/759.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/759.png"
};

var bewear = {
    name: "Bewear",
    dex: 760,
    type: "Normal/Fighting",
    ability: "Fluffy/Klutz/Unnerve",
    wiki: "http://www.serebii.net/pokedex-sm/760.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/760.png"
};

var bounsweet = {
    name: "Bounsweet",
    dex: 761,
    type: "Grass",
    ability: "Leaf Guard/Oblivious/Sweet Veil",
    wiki: "http://www.serebii.net/pokedex-sm/761.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/761.png"
};

var steenee = {
    name: "Steenee",
    dex: 762,
    type: "Grass",
    ability: "Leaf Guard/Oblivious/Sweet Veil",
    wiki: "http://www.serebii.net/pokedex-sm/762.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/762.png"
};

var tsareena = {
    name: "Tsareena",
    dex: 763,
    type: "Grass",
    ability: "Leaf Guard/Queenly Majesty/Sweet Veil",
    wiki: "http://www.serebii.net/pokedex-sm/763.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/763.png"
};

var comfey = {
    name: "Comfey",
    dex: 764,
    type: "Fairy",
    ability: "Flower Veil/Triage/Natural Cure",
    wiki: "http://www.serebii.net/pokedex-sm/764.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/764.png"
};

var oranguru = {
    name: "Oranguru",
    dex: 765,
    type: "Normal/Psychic",
    ability: "Inner Focus/Telepathy/Symbiosis",
    wiki: "http://www.serebii.net/pokedex-sm/765.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/765.png"
};

var passimian = {
    name: "Passimian",
    dex: 766,
    type: "Fighting",
    ability: "Receiver/None/Defiant",
    wiki: "http://www.serebii.net/pokedex-sm/766.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/766.png"
};

var wimpod = {
    name: "Wimpod",
    dex: 767,
    type: "Bug/Water",
    ability: "Wimp Out",
    wiki: "http://www.serebii.net/pokedex-sm/767.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/767.png"
};

var golisopod = {
    name: "Golisopod",
    dex: 768,
    type: "Bug/Water",
    ability: "Emergency Exit",
    wiki: "http://www.serebii.net/pokedex-sm/768.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/768.png"
};

var sandygast = {
    name: "Sandygast",
    dex: 769,
    type: "Ghost/Ground",
    ability: "Water Compaction/None/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/769.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/769.png"
};

var palossand = {
    name: "Palossand",
    dex: 770,
    type: "Ghost/Ground",
    ability: "Water Compaction/None/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-sm/770.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/770.png"
};

var pyukumuku = {
    name: "Pyukumuku",
    dex: 771,
    type: "Water",
    ability: "Innards Out/None/Unaware",
    wiki: "http://www.serebii.net/pokedex-sm/771.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/771.png"
};

var type_null = {
    name: "Type: Null",
    dex: 772,
    type: "Normal",
    ability: "Battle Armor",
    wiki: "http://www.serebii.net/pokedex-sm/772.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/772.png"
};

var silvally = {
    name: "Silvally",
    dex: 773,
    type: "Normal",
    ability: "RKS System",
    wiki: "http://www.serebii.net/pokedex-sm/773.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/773.png"
};

var minior = {
    name: "Minior",
    dex: 774,
    type: "Rock/Flying",
    ability: "Shields Down",
    wiki: "http://www.serebii.net/pokedex-sm/774.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/774.png"
};

var komala = {
    name: "Komala",
    dex: 775,
    type: "Normal",
    ability: "Comatose",
    wiki: "http://www.serebii.net/pokedex-sm/775.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/775.png"
};

var turtonator = {
    name: "Turtonator",
    dex: 776,
    type: "Fire/Dragon",
    ability: "Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/776.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/776.png"
};

var togedemaru = {
    name: "Togedemaru",
    dex: 777,
    type: "Electric/Steel",
    ability: "Iron Barbs/Lightning Rod/Sturdy",
    wiki: "http://www.serebii.net/pokedex-sm/777.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/777.png"
};

var mimikyu = {
    name: "Mimikyu",
    dex: 778,
    type: "Ghost/Fairy",
    ability: "Disguise",
    wiki: "http://www.serebii.net/pokedex-sm/778.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/778.png"
};

var bruxish = {
    name: "Bruxish",
    dex: 779,
    type: "Water/Psychic",
    ability: "Dazzling/Strong Jaw/Wonder Skin",
    wiki: "http://www.serebii.net/pokedex-sm/779.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/779.png"
};

var drampa = {
    name: "Drampa",
    dex: 780,
    type: "Normal/Dragon",
    ability: "Berserk/Sap Sipper/Cloud Nine",
    wiki: "http://www.serebii.net/pokedex-sm/780.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/780.png"
};

var dhelmise = {
    name: "Dhelmise",
    dex: 781,
    type: "Ghost/Grass",
    ability: "Steelworker",
    wiki: "http://www.serebii.net/pokedex-sm/781.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/781.png"
};

var jangmo_o = {
    name: "Jangmo-o",
    dex: 782,
    type: "Dragon",
    ability: "Bulletproof/Soundproof/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/782.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/782.png"
};

var hakamo_o = {
    name: "Hakamo-o",
    dex: 783,
    type: "Dragon/Fighting",
    ability: "Bulletproof/Soundproof/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/783.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/783.png"
};

var kommo_o = {
    name: "Kommo-o",
    dex: 784,
    type: "Dragon/Fighting",
    ability: "Bulletproof/Soundproof/Overcoat",
    wiki: "http://www.serebii.net/pokedex-sm/784.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/784.png"
};

var tapu_koko = {
    name: "Tapu Koko",
    dex: 785,
    type: "Electric/Fairy",
    ability: "Electric Surge/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/785.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/785.png"
};

var tapu_lele = {
    name: "Tapu Lele",
    dex: 786,
    type: "Psychic/Fairy",
    ability: "Psychic Surge/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/786.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/786.png"
};

var tapu_bulu = {
    name: "Tapu Bulu",
    dex: 787,
    type: "Grass/Fairy",
    ability: "Grassy Surge/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/787.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/787.png"
};

var tapu_fini = {
    name: "Tapu Fini",
    dex: 788,
    type: "Water/Fairy",
    ability: "Misty Surge/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-sm/788.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/788.png"
};

var cosmog = {
    name: "Cosmog",
    dex: 789,
    type: "Psychic",
    ability: "Unaware",
    wiki: "http://www.serebii.net/pokedex-sm/789.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/789.png"
};

var cosmoem = {
    name: "Cosmoem",
    dex: 790,
    type: "Psychic",
    ability: "Sturdy",
    wiki: "http://www.serebii.net/pokedex-sm/790.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/790.png"
};

var solgaleo = {
    name: "Solgaleo",
    dex: 791,
    type: "Psychic/Steel",
    ability: "Full Metal Body",
    wiki: "http://www.serebii.net/pokedex-sm/791.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/791.png"
};

var lunala = {
    name: "Lunala",
    dex: 792,
    type: "Psychic/Ghost",
    ability: "Shadow Shield",
    wiki: "http://www.serebii.net/pokedex-sm/792.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/792.png"
};

var nihilego = {
    name: "Nihilego",
    dex: 793,
    type: "Rock/Poison",
    ability: "Beast Boost",
    wiki: "http://www.serebii.net/pokedex-sm/793.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/793.png"
};

var buzzwole = {
    name: "Buzzwole",
    dex: 794,
    type: "Bug/Fighting",
    ability: "Beast Boost",
    wiki: "http://www.serebii.net/pokedex-sm/794.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/794.png"
};

var pheromosa = {
    name: "Pheromosa",
    dex: 795,
    type: "Bug/Fighting",
    ability: "Beast Boost",
    wiki: "http://www.serebii.net/pokedex-sm/795.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/795.png"
};

var xurkitree = {
    name: "Xurkitree",
    dex: 796,
    type: "Electric",
    ability: "Beast Boost",
    wiki: "http://www.serebii.net/pokedex-sm/796.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/796.png"
};

var celesteela = {
    name: "Celesteela",
    dex: 797,
    type: "Steel/Flying",
    ability: "Beast Boost",
    wiki: "http://www.serebii.net/pokedex-sm/797.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/797.png"
};

var kartana = {
    name: "Kartana",
    dex: 798,
    type: "Grass/Steel",
    ability: "Beast Boost",
    wiki: "http://www.serebii.net/pokedex-sm/798.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/798.png"
};

var guzzlord = {
    name: "Guzzlord",
    dex: 799,
    type: "Dark/Dragon",
    ability: "Beast Boost",
    wiki: "http://www.serebii.net/pokedex-sm/799.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/799.png"
};

var necrozma = {
    name: "Necrozma",
    dex: 800,
    type: "Psychic",
    ability: "Prism Armor",
    wiki: "http://www.serebii.net/pokedex-sm/800.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/800.png"
};

var magearna = {
    name: "Magearna",
    dex: 801,
    type: "Steel/Fairy",
    ability: "Soul-Heart",
    wiki: "http://www.serebii.net/pokedex-sm/801.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/801.png"
};

var marshadow = {
    name: "Marshadow",
    dex: 802,
    type: "Fighting/Ghost",
    ability: "Technician",
    wiki: "http://www.serebii.net/pokedex-sm/802.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/802.png"
};

var mega_venusaur = {
    name: "Mega Venusaur",
    dex: 3,
    type: "Grass/Poison",
    ability: "Thick Fat",
    wiki: "http://www.serebii.net/pokedex-sm/003.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/003-m.png"
};

var mega_charizard_x = {
    name: "Mega Charizard X",
    dex: 6,
    type: "Fire/Dragon",
    ability: "Tough Claws",
    wiki: "http://www.serebii.net/pokedex-sm/006.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/006-mx.png"
};

var mega_charizard_y = {
    name: "Mega Charizard Y",
    dex: 6,
    type: "Fire/Flying",
    ability: "Drought",
    wiki: "http://www.serebii.net/pokedex-sm/006.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/006-my.png"
};

var mega_blastoise = {
    name: "Mega Blastoise",
    dex: 9,
    type: "Water",
    ability: "Mega Launcher",
    wiki: "http://www.serebii.net/pokedex-sm/009.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/009-m.png"
};

var mega_beedrill = {
    name: "Mega Beedrill",
    dex: 15,
    type: "Bug/Poison",
    ability: "Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/015.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/015-m.png"
};

var mega_pidgeot = {
    name: "Mega Pidgeot",
    dex: 18,
    type: "Normal/Flying",
    ability: "No Guard",
    wiki: "http://www.serebii.net/pokedex-sm/018.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/018-m.png"
};

var mega_alakazam = {
    name: "Mega Alakazam",
    dex: 65,
    type: "Psychic",
    ability: "Trace",
    wiki: "http://www.serebii.net/pokedex-sm/065.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/065-m.png"
};

var mega_slowbro = {
    name: "Mega Slowbro",
    dex: 80,
    type: "Water/Psychic",
    ability: "Shell Armor",
    wiki: "http://www.serebii.net/pokedex-sm/080.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/080-m.png"
};

var mega_gengar = {
    name: "Mega Gengar",
    dex: 94,
    type: "Ghost/Poison",
    ability: "Shadow Tag",
    wiki: "http://www.serebii.net/pokedex-sm/094.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/094-m.png"
};

var mega_kangaskhan = {
    name: "Mega Kangaskhan",
    dex: 115,
    type: "Normal",
    ability: "Parental Bond",
    wiki: "http://www.serebii.net/pokedex-sm/115.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/115-m.png"
};

var mega_pinsir = {
    name: "Mega Pinsir",
    dex: 127,
    type: "Bug/Flying",
    ability: "Aerilate",
    wiki: "http://www.serebii.net/pokedex-sm/127.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/127-m.png"
};

var mega_gyarados = {
    name: "Mega Gyarados",
    dex: 130,
    type: "Water/Dark",
    ability: "Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/130.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/130-m.png"
};

var mega_aerodactyl = {
    name: "Mega Aerodactyl",
    dex: 142,
    type: "Rock/Flying",
    ability: "Tough Claws",
    wiki: "http://www.serebii.net/pokedex-sm/142.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/142-m.png"
};

var mega_mewtwo_x = {
    name: "Mega Mewtwo X",
    dex: 150,
    type: "Psychic/Fighting",
    ability: "Steadfast",
    wiki: "http://www.serebii.net/pokedex-sm/150.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/150-mx.png"
};

var mega_mewtwo_y = {
    name: "Mega Mewtwo Y",
    dex: 150,
    type: "Psychic",
    ability: "Insomnia",
    wiki: "http://www.serebii.net/pokedex-sm/150.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/150-my.png"
};

var mega_ampharos = {
    name: "Mega Ampharos",
    dex: 181,
    type: "Electric/Dragon",
    ability: "Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-sm/181.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/181-m.png"
};

var mega_steelix = {
    name: "Mega Steelix",
    dex: 208,
    type: "Steel/Ground",
    ability: "Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/208.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/208-m.png"
};

var mega_scizor = {
    name: "Mega Scizor",
    dex: 212,
    type: "Bug/Steel",
    ability: "Technician",
    wiki: "http://www.serebii.net/pokedex-sm/212.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/212-m.png"
};

var mega_heracross = {
    name: "Mega Heracross",
    dex: 214,
    type: "Bug/Fighting",
    ability: "Skill Link",
    wiki: "http://www.serebii.net/pokedex-sm/214.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/214-m.png"
};

var mega_houndoom = {
    name: "Mega Houndoom",
    dex: 229,
    type: "Dark/Fire",
    ability: "Solar Power",
    wiki: "http://www.serebii.net/pokedex-sm/229.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/229-m.png"
};

var mega_tyranitar = {
    name: "Mega Tyranitar",
    dex: 248,
    type: "Rock/Dark",
    ability: "Sand Stream",
    wiki: "http://www.serebii.net/pokedex-sm/248.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/248-m.png"
};

var mega_sceptile = {
    name: "Mega Sceptile",
    dex: 254,
    type: "Grass/Dragon",
    ability: "Lightning Rod",
    wiki: "http://www.serebii.net/pokedex-sm/254.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/254-m.png"
};

var mega_blaziken = {
    name: "Mega Blaziken",
    dex: 257,
    type: "Fire/Fighting",
    ability: "Speed Boost",
    wiki: "http://www.serebii.net/pokedex-sm/257.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/257-m.png"
};

var mega_swampert = {
    name: "Mega Swampert",
    dex: 260,
    type: "Water/Ground",
    ability: "Swift Swim",
    wiki: "http://www.serebii.net/pokedex-sm/260.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/260-m.png"
};

var mega_gardevoir = {
    name: "Mega Gardevoir",
    dex: 282,
    type: "Psychic/Fairy",
    ability: "Pixilate",
    wiki: "http://www.serebii.net/pokedex-sm/282.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/282-m.png"
};

var mega_sableye = {
    name: "Mega Sableye",
    dex: 302,
    type: "Dark/Ghost",
    ability: "Magic Bounce",
    wiki: "http://www.serebii.net/pokedex-sm/302.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/302-m.png"
};

var mega_mawile = {
    name: "Mega Mawile",
    dex: 303,
    type: "Steel/Fairy",
    ability: "Huge Power",
    wiki: "http://www.serebii.net/pokedex-sm/303.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/303-m.png"
};

var mega_aggron = {
    name: "Mega Aggron",
    dex: 306,
    type: "Steel",
    ability: "Filter",
    wiki: "http://www.serebii.net/pokedex-sm/306.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/306-m.png"
};

var mega_medicham = {
    name: "Mega Medicham",
    dex: 308,
    type: "Fighting/Psychic",
    ability: "Pure Power",
    wiki: "http://www.serebii.net/pokedex-sm/308.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/308-m.png"
};

var mega_manectric = {
    name: "Mega Manectric",
    dex: 310,
    type: "Electric",
    ability: "Intimidate",
    wiki: "http://www.serebii.net/pokedex-sm/310.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/310-m.png"
};

var mega_sharpedo = {
    name: "Mega Sharpedo",
    dex: 319,
    type: "Water/Dark",
    ability: "Strong Jaw",
    wiki: "http://www.serebii.net/pokedex-sm/319.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/319-m.png"
};

var mega_camerupt = {
    name: "Mega Camerupt",
    dex: 323,
    type: "Fire/Ground",
    ability: "Sheer Force",
    wiki: "http://www.serebii.net/pokedex-sm/323.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/323-m.png"
};

var mega_altaria = {
    name: "Mega Altaria",
    dex: 334,
    type: "Dragon/Fairy",
    ability: "Pixilate",
    wiki: "http://www.serebii.net/pokedex-sm/334.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/334-m.png"
};

var mega_banette = {
    name: "Mega Banette",
    dex: 354,
    type: "Ghost",
    ability: "Prankster",
    wiki: "http://www.serebii.net/pokedex-sm/354.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/354-m.png"
};

var mega_absol = {
    name: "Mega Absol",
    dex: 359,
    type: "Dark",
    ability: "Magic Bounce",
    wiki: "http://www.serebii.net/pokedex-sm/359.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/359-m.png"
};

var mega_glalie = {
    name: "Mega Glalie",
    dex: 362,
    type: "Ice",
    ability: "Refrigerate",
    wiki: "http://www.serebii.net/pokedex-sm/362.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/362-m.png"
};

var mega_salamence = {
    name: "Mega Salamence",
    dex: 373,
    type: "Dragon/Flying",
    ability: "Aerilate",
    wiki: "http://www.serebii.net/pokedex-sm/373.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/373-m.png"
};

var mega_metagross = {
    name: "Mega Metagross",
    dex: 376,
    type: "Steel/Psychic",
    ability: "Tough Claws",
    wiki: "http://www.serebii.net/pokedex-sm/376.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/376-m.png"
};

var mega_latias = {
    name: "Mega Latias",
    dex: 380,
    type: "Dragon/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/380.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/380-m.png"
};

var mega_latios = {
    name: "Mega Latios",
    dex: 381,
    type: "Dragon/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-sm/381.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/381-m.png"
};

var mega_rayquaza = {
    name: "Mega Rayquaza",
    dex: 384,
    type: "Dragon/Flying",
    ability: "Delta Stream",
    wiki: "http://www.serebii.net/pokedex-sm/384.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/384-m.png"
};

var mega_lopunny = {
    name: "Mega Lopunny",
    dex: 428,
    type: "Normal/Fighting",
    ability: "Scrappy",
    wiki: "http://www.serebii.net/pokedex-sm/428.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/428-m.png"
};

var mega_garchomp = {
    name: "Mega Garchomp",
    dex: 445,
    type: "Dragon/Ground",
    ability: "Sand Force",
    wiki: "http://www.serebii.net/pokedex-sm/445.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/445-m.png"
};

var mega_lucario = {
    name: "Mega Lucario",
    dex: 448,
    type: "Fighting/Steel",
    ability: "Adaptability",
    wiki: "http://www.serebii.net/pokedex-sm/448.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/448-m.png"
};

var mega_abomasnow = {
    name: "Mega Abomasnow",
    dex: 460,
    type: "Grass/Ice",
    ability: "Snow Warning",
    wiki: "http://www.serebii.net/pokedex-sm/460.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/460-m.png"
};

var mega_gallade = {
    name: "Mega Gallade",
    dex: 475,
    type: "Psychic/Fighting",
    ability: "Inner Focus",
    wiki: "http://www.serebii.net/pokedex-sm/475.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/475-m.png"
};

var mega_audino = {
    name: "Mega Audino",
    dex: 531,
    type: "Normal/Fairy",
    ability: "Healer",
    wiki: "http://www.serebii.net/pokedex-sm/531.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/531-m.png"
};

var mega_diancie = {
    name: "Mega Diancie",
    dex: 719,
    type: "Rock/Fairy",
    ability: "Magic Bounce",
    wiki: "http://www.serebii.net/pokedex-sm/719.shtml",
    image: "http://www.serebii.net/sunmoon/pokemon/719-m.png"
};
