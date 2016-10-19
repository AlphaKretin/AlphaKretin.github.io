var data = data || {};

data.class = {};

data.CharacterClass = function CharacterClass (name, skills, growthRates) {
  this.name = name;
  this.skills = skills;
  this.growthRates = growthRates;
}

data.BaseClass = function BaseClass (name, skills, growthRates, masterClasses) {
  data.CharacterClass.call(this, name, skills, growthRates);
  this.masterClasses = masterClasses;
}

data.MasterClass = function MasterClass (name, skills, growthRates, baseClasses) {
  data.CharacterClass.call(this, name, skills, growthRates);
  this.baseClasses = baseClasses;
}

// Avatar
data.class.nohrprince = new data.BaseClass (
  'Nohr Prince',
  ['Nobility', 'Dragon Fang'],
  [15, 15, 10, 10, 10, 10, 10, 5],
  ['Hoshido Noble', 'Nohr Noble']
);
data.class.nohrprincess = new data.BaseClass (
  'Nohr Princess',
  ['Nobility', 'Dragon Fang'],
  [15, 15, 10, 10, 10, 10, 10, 5],
  ['Hoshido Noble', 'Nohr Noble']
);
data.class.hoshidonoble = new data.MasterClass (
  'Hoshido Noble',
  ['Dragon Ward', 'Hoshidan Unity'],
  [15, 15, 10, 10, 10, 10, 15, 0],
  ['Nohr Prince', 'Nohr Princess']
);
data.class.nohrnoble = new data.MasterClass (
  'Nohr Noble',
  ['Draconic Hex', 'Nohrian Trust'],
  [15, 10, 15, 5, 15, 5, 5, 15],
  ['Nohr Prince', 'Nohr Princess']
)

// Birthright
  // Base Classes
data.class.samurai = new data.BaseClass (
  'Samurai',
  ['Duelist’s Blow', 'Vantage'],
  [10, 10, 0, 15, 20, 15, 0, 10],
  ['Swordmaster', 'Master of Arms']
);

data.class.villager = new data.BaseClass (
  'Villager',
  ['Aptitude', 'Underdog'],
  [10, 10, 0, 10, 10, 20, 10, 0],
  ['Master of Arms', 'Merchant']
);

data.class.apothecary = new data.BaseClass (
  'Apothecary',
  ['Potent Potion', 'Quick Salve'],
  [20, 20, 0, 10, 10, 5, 10, 5],
  ['Merchant', 'Mechanist']
);

data.class.ninja = new data.BaseClass (
  'Ninja',
  ['Locktouch', 'Poison Strike'],
  [5, 5, 0, 20, 20, 0, 5, 15],
  ['Master Ninja', 'Mechanist']
);

data.class.onisavage = new data.BaseClass (
  'Oni Savage',
  ['Seal Resistance', 'Shove'],
  [20, 20, 10, 0, 10, 0, 20, 0],
  ['Oni Chieftain', 'Blacksmith']
);

data.class.spearfighter = new data.BaseClass (
  'Spear Fighter',
  ['Seal Defence', 'Swap'],
  [15, 15, 0, 15, 15, 5, 10, 5],
  ['Spear Master', 'Basara']
);

data.class.diviner = new data.BaseClass (
  'Diviner',
  ['Magic +2', 'Future Sight'],
  [0, 5, 15, 10, 15, 5, 0, 10],
  ['Basara', 'Onmyoji']
);

data.class.monk = new data.BaseClass (
  'Monk',
  ['Miracle', 'Rally Luck'],
  [0, 5, 10, 10, 15, 15, 0, 20],
  ['Onmyoji', 'Great Master']
);

data.class.shrinemaiden = new data.BaseClass (
  'Shrine Maiden',
  ['Miracle', 'Rally Luck'],
  [0, 5, 10, 10, 15, 15, 0, 20],
  ['Onmyoji', 'Priestess']
);

data.class.skyknight = new data.BaseClass (
  'Sky Knight',
  ['Darting Blow', 'Camaraderie'],
  [0, 10, 0, 10, 15, 20, 0, 20],
  ['Falcon Knight', 'Kinshi Knight']
);

data.class.archer = new data.BaseClass (
  'Archer',
  ['Skill +2', 'Quick Draw'],
  [10, 15, 0, 15, 15, 5, 10, 0],
  ['Sniper', 'Kinshi Knight']
);

data.class.kitsune = new data.BaseClass (
  'Kitsune',
  ['Evenhanded', 'Beastbane'],
  [10, 10, 0, 15, 20, 10, 0, 20],
  ['Nine-Tails']
);

data.class.songstress = new data.BaseClass (
  'Songstress',
  ['Luck +4', 'Inspiring Song', 'Voice of Peace', 'Foreign Princess'],
  [0, 10, 0, 20, 20, 20, 0, 0],
  []
);

  // Master Classes

data.class.swordmaster = new data.MasterClass (
  'Swordmaster',
  ['Astra', 'Swordfaire'],
  [10, 10, 5, 15, 20, 15, 0, 10],
  ['Samurai']
);
data.class.masterofarms = new data.MasterClass (
  'Master of Arms',
  ['Seal Strength', 'Life or Death'],
  [20, 15, 0, 10, 10, 10, 10, 0],
  ['Samurai', 'Villager']
);

data.class.merchant = new data.MasterClass (
  'Merchant',
  ['Profiteer', 'Spendthrift'],
  [20, 20, 0, 10, 5, 15, 10, 5],
  ['Villager', 'Apothecary']
);

data.class.mechanist = new data.MasterClass (
  'Mechanist',
  ['Golembane', 'Replicate'],
  [10, 10, 0, 15, 10, 5, 5, 15],
  ['Apothecary', 'Ninja']
);

data.class.masterninja = new data.MasterClass (
  'Master Ninja',
  ['Lethality', 'Shurikenfaire'],
  [5, 5, 0, 20, 20, 0, 5, 20],
  ['Ninja']
);

data.class.onichieftain = new data.MasterClass (
  'Oni Chieftain',
  ['Death Blow', 'Counter'],
  [10, 20, 15, 0, 10, 0, 20, 5],
  ['Oni Savage']
);

data.class.blacksmith = new data.MasterClass (
  'Blacksmith',
  ['Salvage Blow', 'Lancebreaker'],
  [20, 15, 0, 15, 10, 5, 15, 0],
  ['Oni Savage']
);

data.class.spearmaster = new data.MasterClass (
  'Spear Master',
  ['Seal Speed', 'Lancefaire'],
  [15, 15, 0, 15, 15, 5, 10, 5],
  ['Spear Fighter']
);

data.class.basara = new data.MasterClass (
  'Basara',
  ['Rend Heaven', 'Quixotic'],
  [20, 10, 10, 10, 10, 15, 5, 10],
  ['Diviner', 'Spear Fighter']
);

data.class.onmyoji = new data.MasterClass (
  'Onmyoji',
  ['Rally Magic', 'Tomefaire'],
  [0, 0, 20, 10, 15, 0, 0, 15],
  ['Diviner', 'Monk', 'Shrine Maiden']
);

data.class.greatmaster = new data.MasterClass (
  'Great Master',
  ['Renewal', 'Countermagic'],
  [10, 15, 5, 5, 15, 15, 10, 10],
  ['Monk']
);

data.class.priestess = new data.MasterClass (
  'Priestess',
  ['Renewal', 'Countermagic'],
  [10, 10, 10, 5, 15, 15, 0, 20],
  ['Shrine Maiden']
);

data.class.falconknight = new data.MasterClass (
  'Falcon Knight',
  ['Rally Speed', 'Warding Blow'],
  [0, 10, 10, 10, 15, 20, 0, 20],
  ['Sky Knight']
);

data.class.kinshiknight = new data.MasterClass (
  'Kinshi Knight',
  ['Air Superiority', 'Amaterasu'],
  [0, 5, 0, 15, 15, 15, 0, 15],
  ['Sky Knight', 'Archer']
);

data.class.sniper = new data.MasterClass (
  'Sniper',
  ['Certain Blow', 'Bowfaire'],
  [10, 15, 0, 20, 15, 5, 10, 0],
  ['Archer']
);

data.class.ninetails = new data.MasterClass (
  'Nine-Tails',
  ['Even Better', 'Grisly Wound'],
  [10, 10, 0, 15, 20, 10, 0, 20],
  ['Kitsune']
);

// Conquest
  // Base Classes

data.class.cavalier = new data.BaseClass (
  'Cavalier',
  ['Elbow Room', 'Shelter'],
  [10, 15, 0, 10, 10, 15, 10, 5],
  ['Paladin', 'Great Knight']
);
data.class.knight = new data.BaseClass (
  'Knight',
  ['Defence +2', 'Natural Cover'],
  [20, 20, 0, 15, 5, 10, 20, 0],
  ['Great Knight', 'General']
);
data.class.fighter = new data.BaseClass (
  'Fighter',
  ['HP +5', 'Gamble'],
  [20, 20, 0, 15, 15, 5, 5, 0],
  ['Berserker', 'Hero']
);
data.class.mercenary = new data.BaseClass (
  'Mercenary',
  ['Good Fortune', 'Strong Riposte'],
  [10, 15, 0, 20, 15, 5, 10, 5],
  ['Hero', 'Bow Knight']
);
data.class.outlaw = new data.BaseClass (
  'Outlaw',
  ['Locktouch', 'Movement +1'],
  [0, 10, 5, 10, 20, 0, 0, 20],
  ['Adventurer', 'Bow Knight']
);
data.class.wyvernrider = new data.BaseClass (
  'Wyvern Rider',
  ['Strength +2', 'Lunge'],
  [10, 15, 5, 10, 10, 5, 20, 0],
  ['Wyvern Lord', 'Malig Knight']
);
data.class.darkmage = new data.BaseClass (
  'Dark Mage',
  ['Heartseeker', 'Malefic Aura'],
  [0, 10, 20, 0, 10, 0, 5, 10],
  ['Sorcerer', 'Dark Knight']
);

// lots of gender checking on this one
data.class.troubadour = new data.BaseClass (
  'Troubadour',
  ['Resistance +2', 'Gentilhomme', 'Demoiselle'],
  [0, 0, 10, 20, 10, 15, 0, 15],
  ['Strategist', 'Butler', 'Maid']
);
data.class.wolfskin = new data.BaseClass (
  'Wolfskin',
  ['Odd Shaped', 'Beastbane'],
  [20, 20, 0, 5, 15, 5, 10, 0],
  ['Wolfssegner']
);

  // Master Classes

data.class.paladin = new data.MasterClass (
  'Paladin',
  ['Defender', 'Aegis'],
  [10, 15, 0, 10, 10, 15, 10, 10],
  ['Cavalier']
);
data.class.greatknight = new data.MasterClass (
  'Great Knight',
  ['Luna', 'Armored Blow'],
  [20, 20, 0, 10, 5, 5, 20, 0],
  ['Cavalier', 'Knight']
);
data.class.general = new data.MasterClass (
  'General',
  ['Wary Fighter', 'Pavise'],
  [25, 20, 0, 15, 0, 10, 20, 5],
  ['Knight']
);
data.class.berserker = new data.MasterClass (
  'Berserker',
  ['Rally Strength', 'Axefaire'],
  [30, 25, 0, 15, 15, 0, 0, 0],
  ['Fighter']
);
data.class.hero = new data.MasterClass (
  'Hero',
  ['Sol', 'Axebreaker'],
  [20, 15, 0, 20, 15, 5, 10, 0],
  ['Fighter', 'Mercenary']
);
data.class.bowknight = new data.MasterClass (
  'Bow Knight',
  ['Rally Skill', 'Shurikenbreaker'],
  [10, 10, 0, 15, 15, 10, 0, 10],
  ['Outlaw', 'Mercenary']
);
data.class.adventurer = new data.MasterClass (
  'Adventurer',
  ['Lucky Seven', 'Pass'],
  [0, 10, 5, 10, 20, 0, 0, 20],
  ['Outlaw']
);
data.class.wyvernlord = new data.MasterClass (
  'Wyvern Lord',
  ['Rally Defence', 'Swordbreaker'],
  [10, 15, 0, 15, 10, 5, 20, 0],
  ['Wyvern Rider']
);
data.class.maligknight = new data.MasterClass (
  'Malig Knight',
  ['Savage Blow', 'Trample'],
  [0, 15, 15, 10, 5, 0, 10, 15],
  ['Wyvern Rider']
);
data.class.sorcerer = new data.MasterClass (
  'Sorcerer',
  ['Vengeance', 'Bowbreaker'],
  [0, 0, 25, 0, 10, 0, 5, 15],
  ['Dark Mage']
);
data.class.darkknight = new data.MasterClass (
  'Dark Knight',
  ['Seal Magic', 'Lifetaker'],
  [15, 20, 10, 5, 5, 5, 15, 5],
  ['Dark Mage']
);
data.class.strategist = new data.MasterClass (
  'Strategist',
  ['Rally Resistance', 'Inspiration'],
  [0, 0, 15, 5, 10, 20, 0, 15],
  ['Troubadour']
);
data.class.butler = new data.MasterClass (
  'Butler',
  ['Live to Serve', 'Tomebreaker'],
  [0, 10, 10, 15, 15, 10, 5, 10],
  ['Troubadour']
);
data.class.maid = new data.MasterClass (
  'Maid',
  ['Live to Serve', 'Tomebreaker'],
  [0, 10, 10, 15, 15, 10, 5, 10],
  ['Troubadour']
);
data.class.wolfssegner = new data.MasterClass (
  'Wolfssegner',
  ['Better Odds', 'Grisly Wound'],
  [20, 20, 0, 5, 15, 5, 10, 0],
  ['Wolfskin']
);

// might add DLC classes later
