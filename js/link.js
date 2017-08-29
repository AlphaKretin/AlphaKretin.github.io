const mainButton = document.getElementById("mainButton");
const output = document.getElementById("output");
const templates = ["I think foo decks will do really well in Links.", "My foo deck is completely untouched by Links!", "How do you think foo decks will do in Links?", "Hot Link format tech: play a foo deck.", "What are you planning to play for Link format? I think foo decks will dominate.", "Now that Links are here, it's foo decks' time to shine again!", "foo decks will be good in Links, right?", "Do you think foo decks will be good in Links?"];
const themes = ["Assault Mode", "Abyss Actor", "Abyss Script", "Abyss", "Aesir", "Aether", "Alien", "Allure Queen", "Ally of Justice", "Altergeist", "Amazoness", "Amorphage", "Ancient Gear", "Apoqliphort", "Aquaactress", "Aquarium", "Arcana Force", "Archfiend", "Aroma", "Artifact", "Assault Blackwing", "Atlantean", "B.E.S.", "Bamboo Sword", "Batteryman", "Battlin' Boxer", "Beast's Battle", "Black Luster Soldier", "Blackwing", "Blaze Accelerator", "Blue-Eyes", "Bonding", "Bounzer", "Bujin", "Burning Abyss", "Buster Blader", "Butterspy", "Celtic Guard", "Change", "Chaos", "Chemicritter", "Chronomaly", "Chrysalis", "Cipher", "Clear Wing", "Cloudian", "Code Talker", "Constellar", "Crawler", "Crystal", "Crystal Beast", "Crystron", "Cubic", "CXyz", "Cyber", "Cyber Angel", "Cyber Dragon", "Cybernetic", "D/D", "Dark Contract", "Dark Magician", "Dark Magician Girl", "Dark Scorpion", "Dark World", "Darkness", "D/D/D", "Deskbot", "Destiny HERO", "Destruction Sword", "Dinomist", "Djinn", "Dododo", "Dracoslayer", "Dracoverlord", "Dragunity", "Duston", "Earthbound Immortal", "Edge Imp", "Elder Entity", "Elemental HERO", "Empowered Warrior", "Evolsaur", "Evoltile", "Evolzar", "Exodia", "F.A.", "Fabled", "Familiar-Possessed", "Fire Fist", "Fire Formation", "Fire King", "Fire King Avatar", "Fishborg", "Flamvell", "Fluffal", "Forbidden One", "Fortune Lady", "Frog", "Fusion", "Fusion Dragon", "Gadget", "Gagaga", "Gaia The Fierce Knight", "Galaxy", "Galaxy-Eyes", "Galaxy-Eyes Tachyon Dragon", "Geargia", "Geargiano", "Gem", "Gem-Knight", "Genex", "Ghostrick", "Gimmick Puppet", "Gishki", "Gladiator Beast", "Gogogo", "Gouki", "Gravekeeper's", "Graydle", "Guardian", "Gusto", "Harpie", "Hazy", "Hazy Flame", "Heraldic Beast", "Heraldry", "HERO", "Heroic", "Heroic Challenger", "Hieratic", "Hole", "Horus the Black Flame Dragon", "Ice Barrier", "Infernity", "Inmato", "Invoked", "Inzektor", "Iron Chain", "Junk", "Jurrac", "Kaiju", "Karakuri", "Koa'ki Meiru", "Kozmo", "Kuriboh", "Laval", "Legendary Dragon", "Legendary Knight", "Lightsworn", "Lswarm", "Lunalight", "M", "Machina", "Madolche", "Magibullet", "Magician", "Magician Girl", "Magna Warrior", "Majespecter", "Majestic", "Malefic", "Malicevorous", "Masked HERO", "Mecha Phantom Beast", "Meklord", "Meklord Army", "Meklord Emperor", "Melodious", "Melodious Maestra", "Mermail", "Metaphys", "Mist Valley", "Monarch", "Morphtronic", "Mythical Beast", "Naturia", "Nekroz", "Neo-Spacian", "Neos", "Nimble", "Ninja", "Ninjitsu Art", "Nitro", "Noble Arms", "Noble Knight", "Nordic", "Nordic Alfar", "Nordic Ascendant", "Nordic Beast", "Number", "Number C", "Odd-Eyes", "Ojama", "Old Entity", "Outer Entity", "Paleozoic", "Parshath", "Pendulum", "Pendulum Dragon", "Pendulumgraph", "Penguin", "Performage", "Performapal", "Phantom Beast", "Phantom Knights", "Photon", "Polymerization", "Power Tool", "Prediction Princess", "Prophecy", "PSY-Frame", "Qli", "R-Genex", "Raidraptor", "Rank-Up-Magic", "Reactor", "Red Dragon Archfiend", "Red-Eyes", "Reptilianne", "Resonator", "Ritual Beast", "Ritual Beast Tamer", "Roid", "Rokket", "Saber", "Scrap", "Shaddoll", "Shien", "Shiranui", "Six Samurai", "Skyblaster", "Skyscraper", "Speedroid", "Spellbook", "Sphinx", "Spirit Message", "Spiritual Beast", "Sprout", "SPYRAL", "Star Seraph", "Stardust", "Starving Venom", "Steelswarm", "Stellarknight", "Subterror Behemoth", "Super Defense Robot", "Super Quant", "Super Quantum", "Superheavy Samurai", "Superheavy Samurai Soul", "Sylvan", "Symphonic Warrior", "Synchro Dragon", "Synchron", "T.G.", "Tellarknight", "The Agent", "The Phantom Knights", "Timelord", "Toon", "Trap Hole", "Traptrix", "Triamid", "Trickstar", "U.A.", "Ultimate Gem God", "Umbral Horror", "Utopia", "Utopic", "Vampire", "Vehicroid", "Vendread", "Venom", "Volcanic", "Vylon", "Warrior", "Watt", "Weathery", "Wind-Up", "Windwitch", "Winged Kuriboh", "World Chalice", "World Legacy", "Worm", "X-Saber", "Xyz", "Xyz Dragon", "Yang Zing", "Yosenju", "Zefra", "Zoodiac", "ZW", "LIGHT", "DARK", "WATER", "FIRE", "WIND", "EARTH", "\"C\"", "A-to-Z", "Aged counterpart", "Ancient Treasure", "Ape", "Armed Dragon", "Armor Ninja", "Attribute Booster", "Attribute Knight", "Attribute Reptile", "Attribute Spirit", "Attribute Summoner", "Baboon of the Forest", "Barrier Statue", "Beetron ", "Bugroth", "Burning Skull", "C/C", "Captain", "Cataclysmic Charmer", "Chemical", "Chimeratech", "Chthonian", "Coach", "Code Talker ", "Corn", "Cosmic Synchro Monster", "Counter Fairy", "Crashbug", "Cular", "Cup", "Cyber Girl", "D.D.", "Dark Blade ", "Dark counterpart", "Dark Lucius", "Debugger", "Designator", "Digital Bug", "Dimension ", "Divine Dragon", "Djinn of Rituals", "DNA", "Dog Marron", "Draconia", "Dragon Ninja", "Dragon Ruler", "Drain", "Effigy", "Egyptian God", "Element", "Elemental Lord", "Empower", "Endymion", "Entity", "Evigishki", "Evil HERO", "Evol", "Evolution Pill", "Fairy Tail", "Felgrand", "Fleur", "Forbidden ", "Force", "Forest ", "Four Dimension Dragons", "Freed", "Full Armor", "Gaia Knight", "Gearfried", "Gearspring", "Gem Dragon", "Genex Ally", "Geometric Knight", "Ghost Girl", "Gigo", "Greed ", "Grepher", "Gun Dragon", "Gun Ogre", "Helios", "Herald", "Hex-Sealed Fusion", "Huge Revolution ", "Inca", "Infection", "Inpachi ", "Itsu", "Jar", "Keeper", "Konami Arcade Games", "Legendary Planet", "Legendary Six Samurai", "Lightray", "Machine King ", "Majestic Mech", "Maju", "Mask", "Masked Knight", "Material ", "Metal counterpart", "Mirror Trap ", "Mokey Mokey ", "Monk", "Moth", "Mystic", "Mystic Swordsman", "Mystical Beast of the Forest", "Neo Flamvell", "New Order", "Orichalcos", "Overlay ", "Paladins of Dragons", "Piece Golem", "Plant Princess", "Protective Seal", "Railway", "Rescue Squad", "Rider", "Risebell", "Robo", "Royal", "Ryu-Kishin ", "Sacred Beast", "Sasuke Samurai ", "Satellite ", "Scrap-Iron", "Sealing Ceremony", "Senet", "Shinobird", "Signer Dragon", "Simorgh", "Skilled Magician", "Sky Scourge", "Smile", "Snow", "Solemn", "Sparrow Family", "Spider", "Spiritual Art", "Stygian", "Summoner", "Supercolossal", "Synchro ", "The Fabled", "Thousand Needles ", "Three Musketeers of Face Cards", "Token Celebration", "Tomato", "Treasure Cards", "Turbo", "Twilightsworn", "Ultimate Insect", "Umi ", "Unicorn", "Vanity's", "Vassal", "Virus", "White Night", "White Warrior", "Wicked God", "Wight", "With Chain", "With Eyes of Blue", "XX-Saber", "Zera", "Arkana character", "Pharaoh Atem character", "Bandit King Bakura character", "Bobasa character", "Bonz character", "Crump character", "Dartz character", "Duke Devlin character", "Dox character", "Téa Gardner character", "Gurimo character", "Rebecca Hawkins character", "Ironheart character", "Ishizu Ishtar character", "Gozaburo Kaiba character", "Mokuba Kaiba character", "Noah Kaiba character", "Seto Kaiba character", "Jean-Claude Magnum character", "Solomon Muto character", "Yugi Muto character", "Zorc Necrophades character", "PaniK character", "Para character", "Paradox character", "Maximillion Pegasus character", "Rafael character", "Rex Raptor character", "Espa Roba character", "Roland character", "Bakura Ryou character", "Leon von Schroeder character", "Zigfried von Schroeder character", "Shadi character", "Johnny Steps character", "Strings character", "Tristan Taylor character", "Tetsu Trudge character", "Mako Tsunami character", "Umbra character", "Weevil Underwood character", "Mai Valentine character", "Valon character", "Joey Wheeler character", "Serenity Wheeler character", "Yami Bakura character", "Yami Yugi character", "Jesse Anderson character", "Lyman Banner character", "Axel Brodie character", "Camula character", "Doctor Collector character", "Jim Crocodile Cook character", "Vellian Crowler character", "Damon character", "Dimitri character", "Don Zaloog character", "Dr. Eisenstein character", "Blair Flannigan character", "Franz character", "Adrian Gecko character", "Tyranno Hassleberry character", "Chumley Huffington character", "Kagemaru character", "Lorenzo character", "Bastion Misawa character", "Nightshroud character", "Prince Ojin character", "Aster Phoenix character", "Chazz Princeton character", "Alexis Rhodes character", "Atticus Rhodes character", "Sartorius character", "Chancellor Sheppard character", "Tania character", "Trueman character", "Syrus Truesdale character", "Zane Truesdale character", "Thelonious Viper character", "Wheeler the Monkey character", "Yubel character", "Aporia character", "Jack Atlas character", "Bruno character", "Carly Carmine character", "Yusei Fudo character", "Rex Goodwin character", "Roman Goodwin character", "Grady character", "Greiger character", "Crow Hogan character", "Sect Ijuin character", "Akiza Izinski character", "Kalin Kessler character", "Lazar character", "Sherry LeBlanc character", "Leo character", "Luna  character", "Hunter Pace character", "Paradox character", "Sayer character", "Skeleton Knight character", "Z-one character", "Astral character", "Mr. Heartland character", "Reginald Kastle character", "Rio Kastle character", "Tori Meadows character", "Mizar character", "Orbital 7 character", "Quattro character", "Kite Tenjo character", "Don Thousand character", "Yuma Tsukumo character", "Vector character", "Declan Akaba character", "Leo Akaba character", "Riley Akaba character", "Barrett character", "Battle Beast character", "Zuzu Boyle character", "Celina character", "Allen Kozuki character", "Dennis McField character", "Dipper O'rion character", "Lulu Obsidian character", "Shay Obsidian character", "Sora Perse character", "Rin character", "Jean-Michel Roget character", "Yoko Sakaki character", "Yusho Sakaki character", "Yuya Sakaki character", "Sylvio Sawatari character", "Aura Sentia character", "Moon Shadow character", "Gong Strong character", "Chojiro Tokumatsu character", "Gloria Tyler character", "Grace Tyler character", "Sergey Volkov character", "Shinji Weber character", "Yugo character", "Yuri character", "Yuto character", "Aqua", "Beast", "Beast-Warrior", "Cyberse", "Dinosaur", "Dragon", "Fairy", "Fiend", "Fish", "Insect", "Machine", "Plant", "Psychic", "Pyro", "Reptile", "Rock", "Sea Serpent", "Spellcaster", "Thunder", "Warrior", "Winged Beast", "Wyrm", "Zombie"];

mainButton.addEventListener('click', function() {
    generate();
});

function generate() {
    let template = templates[getRandInt(0, templates.length - 1)];
    let theme = themes[getRandInt(0, themes.length - 1)];
    if (template.indexOf("a foo") > -1) {
        template = aAn(template, theme);
    }
    output.innerHTML = template.replace("foo", theme);
}

function aAn(template, theme) {
    if (template.indexOf("a foo") === -1) {
        return template;
    }
    let firstLetter = theme.slice(0, 1);
    if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
        return template.replace("a foo", "an foo");
    } else {
        return template;
    }
}

function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

window.addEventListener('load', function() {
    console.log("Loaded ver. vowel check");
});
