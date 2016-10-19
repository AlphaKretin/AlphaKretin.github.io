// Shared

data.characters.kana = new data.Child(
  'Kana',
  ['Birthright', 'Conquest', 'Revelation'],
  ['Nohr Princess', 'Talent'],
  1,
  [30, 35, 30, 40, 45, 45, 25, 25],
  data.characters.avatar,
  {name: 'Draconic Heir', description: 'When user is equipped with a Dragonstone, they recover 15% HP at the start of their Turn'}
);

data.characters.kana.image = 'images/characters/kanaf.jpg';
data.characters.kana.defaultImage = 'images/characters/kanaf.jpg';

data.characters.shigure = new data.Child(
  'Shigure',
  ['Birthright', 'Conquest', 'Revelation'],
  ['Sky Knight', 'Troubadour'],
  0,
  [35, 45, 5, 45, 35, 25, 35, 25],
  data.characters.azura,
  {name: 'Perfect Pitch', description: 'Allies within a 2 tile radius who have lower HP than the user recover 10% HP when the “Rally” command is used'}
);

data.characters.dwyer = new data.Child(
  'Dwyer',
  ['Birthright', 'Conquest', 'Revelation'],
  ['Troubadour', 'Cavalier'],
  0,
  [45, 45, 30, 20, 30, 30, 30, 35],
  data.characters.jakob,
  {name: 'Born Steward', description: 'When fighting in My Castle, Hit rate and Avoid +20, damage +2 and damage received -2'}
);

data.characters.sophie = new data.Child(
  'Sophie',
  ['Birthright', 'Conquest', 'Revelation'],
  ['Cavalier', 'Mercenary'],
  1,
  [35, 35, 10, 55, 50, 35, 25, 35],
  data.characters.silas,
  {name: 'Mischievous', description: 'When user triggers the battle and their attack connects with the enemy, enemy’s Defence -3 and enemy is stripped'}
);

data.characters.midori = new data.Child(
  'Midori',
  ['Birthright', 'Conquest', 'Revelation'],
  ['Apothecary', 'Ninja'],
  1,
  [45, 35, 5, 55, 35, 50, 30, 20],
  data.characters.kaze,
  {name: 'Lucky Charm', description: 'Skills with an activation rate dependent on the Luck stat have their rate increased by 20%'}
);

// Birthright

data.characters.shiro = new data.Child(
  'Shiro',
  ['Birthright', 'Revelation'],
  ['Spear Fighter', 'Samurai'],
  0,
  [50, 50, 0, 40, 35, 35, 45, 30],
  data.characters.ryoma,
  {name: 'Noble Cause', description: 'When user is the lead unit, if their support unit doesn’t have full HP, damage +3 and damage received -1'}
);

data.characters.kiragi = new data.Child(
  'Kiragi',
  ['Birthright', 'Revelation'],
  ['Archer', 'Spear Fighter'],
  0,
  [45, 40, 0, 45, 50, 45, 40, 15],
  data.characters.takumi,
  {name: 'Optimistic', description: 'After choosing to Wait, Speed +4 and Luck +8 for one Turn'}
);

data.characters.asugi = new data.Child(
  'Asugi',
  ['Birthright', 'Revelation'],
  ['Ninja', 'Samurai'],
  0,
  [40, 45, 50, 55, 45, 50, 30, 20],
  data.characters.saizo,
  {name: 'Sweet Tooth', description: 'After choosing to Wait, user recovers 4 HP by eating hidden treats'}
);

data.characters.selkie = new data.Child(
  'Selkie',
  ['Birthright', 'Revelation'],
  ['Kitsune', 'Diviner'],
  1,
  [35, 30, 15, 35, 55, 60, 30, 50],
  data.characters.kaden,
  {name: 'Playthings', description: 'After the start of the user’s Turn, all enemies that are adjacent to the user have their HP reduced by 5'}
);

data.characters.hisame = new data.Child(
  'Hisame',
  ['Birthright', 'Revelation'],
  ['Samurai', 'Oni Savage'],
  0,
  [50, 40, 0, 40, 40, 25, 30, 20],
  data.characters.hinata,
  {name: 'Calm', description: 'After choosing to Wait, Skill and Resistance +4 for one Turn'}
);

data.characters.mitama = new data.Child(
  'Mitama',
  ['Birthright', 'Revelation'],
  ['Shrine Maiden', 'Apothecary'],
  1,
  [45, 40, 35, 45, 50, 50, 30, 20],
  data.characters.azama,
  {name: 'Haiku', description: 'At the start of the Turn, when two allies are directly above and below Mitama, Mitama recovers 7 HP, while the the two allies recover 5 HP'}
);

data.characters.caeldori = new data.Child(
  'Caeldori',
  ['Birthright', 'Revelation'],
  ['Sky Knight', 'Samurai'],
  1,
  [55, 35, 15, 40, 40, 45, 35, 20],
  data.characters.subaki,
  {name: 'Prodigy', description: 'At the start of the battle, if the enemy’s Strength or Magic (whichever is highest) is higher than Caeldori’s corresponding stat, damage +4'}
);

data.characters.rhajat = new data.Child(
  'Rhajat',
  ['Birthright', 'Revelation'],
  ['Diviner', 'Oni Savage'],
  1,
  [40, 15, 60, 10, 50, 30, 25, 35],
  data.characters.hayato,
  {name: 'Vendetta', description: 'When user triggers the battle, if they’ve already fought the enemy in the same map, damage +4'}
);

// Conquest

data.characters.siegbert = new data.Child(
  'Siegbert',
  ['Conquest', 'Revelation'],
  ['Cavalier', 'Wyvern Rider'],
  0,
  [40, 45, 5, 45, 45, 45, 35, 20],
  data.characters.xander,
  {name: 'Gallant', description: 'When user is the support unit, if the lead unit is female, the lead unit’s damage +2'}
);

data.characters.forrest = new data.Child(
  'Forrest',
  ['Conquest', 'Revelation'],
  ['Troubadour', 'Dark Mage'],
  0,
  [55, 15, 65, 20, 35, 25, 25, 55],
  data.characters.leo,
  {name: 'Guarded Bravery', description: 'When a male enemy triggers the battle, damage +2'}
);

data.characters.ignatius = new data.Child(
  'Ignatius',
  ['Conquest', 'Revelation'],
  ['Knight', 'Fighter'],
  0,
  [40, 50, 0, 40, 30, 55, 45, 35],
  data.characters.benny,
  {name: 'Fierce Counter', description: 'When user is the lead unit, damage received -2. If no support unit available, damage received +2'}
);

data.characters.velouria = new data.Child(
  'Velouria',
  ['Conquest', 'Revelation'],
  ['Wolfskin', 'Fighter'],
  1,
  [50, 50, 0, 40, 40, 35, 45, 30],
  data.characters.keaton,
  {name: 'Scavenge', description: 'At the start of the Turn, Luck% chance of recovering 10% HP'}
);

data.characters.percy = new data.Child(
  'Percy',
  ['Conquest', 'Revelation'],
  ['Wyvern Rider', 'Fighter'],
  0,
  [30, 30, 5, 45, 40, 75, 55, 15],
  data.characters.arthur,
  {name: 'Fortunate Son', description: 'Allies within a 2 tile radius have their Critical Evade increased by 15, while the user’s Critical Evade is increased by 5'}
);

data.characters.ophelia = new data.Child(
  'Ophelia',
  ['Conquest', 'Revelation'],
  ['Dark Mage', 'Samurai'],
  1,
  [45, 15, 45, 40, 45, 65, 20, 30],
  data.characters.odin,
  {name: 'Bibliophile', description: 'When user is carrying 3 or more Tomes, Critical rate +10'}
);

data.characters.soleil = new data.Child(
  'Soleil',
  ['Conquest', 'Revelation'],
  ['Mercenary', 'Ninja'],
  1,
  [25, 60, 0, 35, 35, 45, 35, 40],
  data.characters.laslow,
  {name: 'Sisterhood', description: 'When user is the lead unit, if their support unit is female, damage +2 and damage received -2'}
);

data.characters.nina = new data.Child(
  'Nina',
  ['Conquest', 'Revelation'],
  ['Outlaw', 'Dark Mage'],
  1,
  [30, 45, 30, 35, 40, 50, 25, 45],
  data.characters.niles,
  {name: 'Daydream', description: 'When user is adjacent to two male units paired up, damage +2 and damage received -2'}
);
