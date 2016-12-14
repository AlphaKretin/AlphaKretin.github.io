var data = data || {};

// Shared

data.characters.jakob = new data.Parent(
  'Jakob',
  ['Birthright', 'Conquest', 'Revelation'],
  ['Troubadour', 'Cavalier'],
  0,
  [50, 30, 15, 40, 35, 45, 25, 25],
  [2, -2, 2, 0, -1, 0, -1],
  'Dwyer',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Rinkah', 'Sakura', 'Hana', 'Orochi', 'Hinoka', 'Setsuna', 'Oboro', 'Kagero', 'Elise', 'Effie', 'Nyx', 'Camilla', 'Selena', 'Beruka', 'Peri', 'Charlotte', 'Xander', 'Ryoma', 'Leo', 'Takumi', 'Flora', 'Silas', 'Anna', 'Scarlet', 'Izana', 'Keaton', 'Laslow', 'Odin', 'Subaki', 'Azama', 'Saizo', 'Shura', 'Hinata', 'Kaden']
);

data.characters.kaze = new data.Parent(
  'Kaze',
  ['Birthright', 'Conquest', 'Revelation'],
  ['Ninja', 'Samurai'],
  0,
  [55, 40, 0, 45, 65, 20, 20, 35],
  [-2, 0, 2, 3, -2, -1, 1],
  'Midori',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Rinkah', 'Sakura', 'Hana', 'Orochi', 'Hinoka', 'Setsuna', 'Oboro', 'Kagero', 'Elise', 'Effie', 'Nyx', 'Camilla', 'Selena', 'Beruka', 'Peri', 'Charlotte', 'Xander', 'Flora', 'Silas', 'Scarlet', 'Anna', 'Shura', 'Niles', 'Arthur', 'Subaki', 'Ryoma', 'Leo', 'Odin', 'Kaden']
);

data.characters.silas = new data.Parent(
  'Silas',
  ['Birthright', 'Conquest', 'Revelation'],
  ['Cavalier', 'Mercenary'],
  0,
  [40, 45, 5, 50, 40, 40, 40, 25],
  [1, 0, 2, 0, -1, 0, -1],
  'Sophie',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Rinkah', 'Sakura', 'Hana', 'Orochi', 'Hinoka', 'Setsuna', 'Oboro', 'Kagero', 'Elise', 'Effie', 'Nyx', 'Camilla', 'Selena', 'Beruka', 'Peri', 'Charlotte', 'Scarlet', 'Jakob', 'Ryoma', 'Kaze', 'Anna', 'Flora', 'Hinata', 'Arthur']
);

data.characters.shura = new data.Parent(
  'Shura',
  ['Birthright', 'Conquest', 'Revelation'],
  ['Outlaw', 'Ninja', 'Fighter'],
  0,
  [30, 25, 10, 20, 35, 30, 15, 35],
  [-1, 0, -1, 3, -1, -2, 2],
  '',
  ['Avatar', 'Ryoma', 'Xander', 'Niles', 'Saizo', 'Kaze', 'Benny', 'Jakob', 'Keaton', 'Nyx']
);

data.characters.izana = new data.Parent(
  'Izana',
  ['Revelation'],
  ['Monk', 'Samurai', 'Apothecary'],
  0,
  [45, 15, 35, 55, 30, 45, 35, 35],
  [0, 1, 1, -2, 0, 0, 1],
  '',
  ['Avatar', 'Saizo', 'Azama', 'Jakob', 'Charlotte']
);

// Birthright

data.characters.subaki = new data.Parent(
  'Subaki',
  ['Birthright', 'Revelation'],
  ['Sky Knight', 'Samurai'],
  0,
  [55, 30, 20, 50, 20, 25, 45, 5],
  [-1, 0, 2, -2, -1, 3, -1],
  'Caeldori',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Rinkah', 'Sakura', 'Hana', 'Orochi', 'Hinoka', 'Setsuna', 'Oboro', 'Kagero', 'Nyx', 'Selena', 'Scarlet', 'Saizo', 'Niles', 'Azama', 'Flora', 'Hinata', 'Anna', 'Kaden', 'Arthur', 'Beruka', 'Charlotte', 'Kaze', 'Jakob', 'Laslow', 'Benny', 'Leo', 'Ryoma', 'Odin', 'Keaton']
);

data.characters.saizo = new data.Parent(
  'Saizo',
  ['Birthright', 'Revelation'],
  ['Ninja', 'Samurai'],
  0,
  [40, 50, 45, 60, 30, 55, 45, 10],
  [1, 0, 3, -2, 0, 1, -2],
  'Asugi',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Rinkah', 'Sakura', 'Hana', 'Orochi', 'Hinoka', 'Setsuna', 'Oboro', 'Kagero', 'Beruka', 'Charlotte', 'Laslow', 'Ryoma', 'Flora', 'Subaki', 'Anna', 'Scarlet', 'Reina', 'Shura', 'Gunter', 'Izana', 'Fuga', 'Kaden', 'Benny', 'Takumi', 'Camilla', 'Xander', 'Jakob', 'Peri', 'Selena', 'Odin', 'Niles']
);

data.characters.azama = new data.Parent(
  'Azama',
  ['Birthright', 'Revelation'],
  ['Monk', 'Apothecary'],
  0,
  [55, 50, 20, 40, 45, 40, 40, 20],
  [2, -3, 0, 1, 0, 1, 0],
  'Mitama',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Rinkah', 'Sakura', 'Hana', 'Orochi', 'Hinoka', 'Setsuna', 'Oboro', 'Kagero', 'Effie', 'Beruka', 'Arthur', 'Subaki', 'Scarlet', 'Kaden', 'Anna', 'Reina', 'Izana', 'Fuga', 'Odin', 'Ryoma', 'Benny', 'Jakob', 'Yukimura', 'Azama']
);

data.characters.hayato = new data.Parent(
  'Hayato',
  ['Birthright', 'Revelation'],
  ['Diviner', 'Oni Savage'],
  0,
  [50, 30, 40, 30, 45, 60, 40, 20],
  [0, 1, -1, 2, 1, -1, -1],
  'Rhajat',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Rinkah', 'Sakura', 'Hana', 'Orochi', 'Hinoka', 'Setsuna', 'Oboro', 'Kagero', 'Effie', 'Nyx', 'Elise', 'Scarlet', 'Anna']
);

data.characters.hinata = new data.Parent(
  'Hinata',
  ['Birthright', 'Revelation'],
  ['Samurai', 'Oni Savage'],
  0,
  [55, 35, 0, 25, 15, 45, 45, 15],
  [1, 0, -1, -2, 0, 2, 0],
  'Hisame',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Rinkah', 'Sakura', 'Hana', 'Orochi', 'Hinoka', 'Setsuna', 'Oboro', 'Kagero', 'Selena', 'Peri', 'Scarlet', 'Takumi', 'Subaki', 'Anna', 'Kaden', 'Silas', 'Keaton', 'Niles', 'Ryoma', 'Jakob']
);

data.characters.takumi = new data.Parent(
  'Takumi',
  ['Birthright', 'Revelation'],
  ['Archer', 'Spear Fighter'],
  0,
  [50, 35, 0, 60, 40, 45, 35, 20],
  [1, 0, 3, -2, 1, 0, -2],
  'Kiragi',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Rinkah', 'Hana', 'Orochi', 'Setsuna', 'Oboro', 'Kagero', 'Elise', 'Camilla', 'Xander', 'Jakob', 'Leo', 'Hinata', 'Flora', 'Scarlet', 'Anna', 'Reina', 'Kaden', 'Keaton', 'Laslow', 'Saizo', 'Nyx']
);

data.characters.kaden = new data.Parent(
  'Kaden',
  ['Birthright', 'Revelation'],
  ['Kitsune', 'Diviner'],
  0,
  [45, 40, 10, 25, 45, 50, 35, 40],
  [1, 0, -3, 2, 1, -2, 2],
  'Selkie',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Rinkah', 'Sakura', 'Hana', 'Orochi', 'Hinoka', 'Setsuna', 'Oboro', 'Kagero', 'Peri', 'Charlotte', 'Scarlet', 'Hinata', 'Keaton', 'Azama', 'Anna', 'Ryoma', 'Takumi', 'Subaki', 'Saizo', 'Benny', 'Arthur', 'Laslow', 'Jakob', 'Odin', 'Kaze']
);

data.characters.ryoma = new data.Parent(
  'Ryoma',
  ['Birthright', 'Revelation'],
  ['Samurai', 'Sky Knight'],
  0,
  [50, 45, 0, 50, 45, 40, 35, 25],
  [1, 0, 2, 1, 1, -2, -2],
  'Shiro',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Rinkah', 'Hana', 'Orochi', 'Setsuna', 'Oboro', 'Kagero', 'Elise', 'Camilla', 'Saizo', 'Xander', 'Scarlet', 'Leo', 'Reina', 'Jakob', 'Flora', 'Silas', 'Anna', 'Shura', 'Azama', 'Kaden', 'Kaze', 'Keaton', 'Nyx', 'Hinata', 'Subaki']
);

data.characters.yukimura = new data.Parent(
  'Yukimura',
  ['Birthright', 'Revelation'],
  ['Apothecary', 'Samurai'],
  0,
  [25, 25, 5, 40, 15, 30, 25, 30],
  [-1, 0, 3, -1, 0, -1, 0],
  '',
  ['Avatar', 'Leo', 'Azama']
);

// Conquest

data.characters.gunter = new data.Parent(
  'Gunter',
  ['Conquest', 'Revelation'],
  ['Cavalier', 'Mercenary', 'Wyvern Rider'],
  0,
  [15, 5, 0, 5, 0, 15, 5, 5],
  [2, 0, 1, -2, 0, 2, -2],
  '',
  ['Avatar', 'Saizo', 'Niles']
);

data.characters.leo = new data.Parent(
  'Leo',
  ['Conquest', 'Revelation'],
  ['Dark Mage', 'Troubadour'],
  0,
  [45, 25, 55, 35, 45, 45, 30, 45],
  [-2, 2, 0, -2, 0, 0, 2],
  'Forrest',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Sakura', 'Hinoka', 'Effie', 'Nyx', 'Selena', 'Beruka', 'Peri', 'Charlotte', 'Odin', 'Ryoma', 'Niles', 'Takumi', 'Flora', 'Jakob', 'Anna', 'Oboro', 'Yukimura', 'Orochi', 'Kaze', 'Subaki']
);

data.characters.arthur = new data.Parent(
  'Arthur',
  ['Conquest', 'Revelation'],
  ['Fighter', 'Cavalier'],
  0,
  [50, 45, 0, 55, 35, 5, 45, 20],
  [1, 0, 3, 0, -3, 1, -1],
  'Percy',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Setsuna', 'Kagero', 'Elise', 'Effie', 'Nyx', 'Camilla', 'Selena', 'Beruka', 'Peri', 'Charlotte', 'Odin', 'Benny', 'Azama', 'Keaton', 'Anna', 'Niles', 'Flora', 'Reina', 'Kaze', 'Subaki', 'Orochi', 'Oboro', 'Kaden', 'Hana', 'Silas']
);

data.characters.odin = new data.Parent(
  'Odin',
  ['Conquest', 'Revelation'],
  ['Dark Mage', 'Samurai'],
  0,
  [55, 35, 30, 55, 35, 60, 40, 20],
  [0, 1, 1, -1, 1, 0, -1],
  'Ophelia',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Orochi', 'Kagero', 'Elise', 'Effie', 'Nyx', 'Camilla', 'Selena', 'Beruka', 'Peri', 'Charlotte', 'Niles', 'Laslow', 'Leo', 'Hinata', 'Flora', 'Arthur', 'Anna', 'Azama', 'Keaton', 'Kaze', 'Jakob', 'Rinkah', 'Oboro', 'Saizo', 'Subaki', 'Kaden']
);

data.characters.niles = new data.Parent(
  'Niles',
  ['Conquest', 'Revelation'],
  ['Outlaw', 'Dark Mage'],
  0,
  [40, 35, 20, 40, 50, 30, 30, 40],
  [-2, 0, -1, 3, 0, 0, 1],
  'Nina',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Setsuna', 'Oboro', 'Elise', 'Effie', 'Nyx', 'Camilla', 'Selena', 'Beruka', 'Peri', 'Charlotte', 'Leo', 'Arthur', 'Anna', 'Subaki', 'Laslow', 'Flora', 'Odin', 'Xander', 'Shura', 'Gunter', 'Keaton', 'Kaze', 'Orochi', 'Hinata', 'Saizo']
);

data.characters.laslow = new data.Parent(
  'Laslow',
  ['Conquest', 'Revelation'],
  ['Mercenary', 'Ninja'],
  0,
  [50, 45, 0, 45, 30, 55, 35, 25],
  [1, 0, 2, -1, 1, -1, -1],
  'Soleil',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Hana', 'Orochi', 'Elise', 'Effie', 'Nyx', 'Camilla', 'Selena', 'Beruka', 'Peri', 'Charlotte', 'Keaton', 'Xander', 'Saizo', 'Odin', 'Flora', 'Niles', 'Anna', 'Kagero', 'Takumi', 'Jakob', 'Subaki', 'Rinkah', 'Kaden', 'Oboro']
);

data.characters.benny = new data.Parent(
  'Benny',
  ['Conquest', 'Revelation'],
  ['Knight', 'Fighter'],
  0,
  [50, 40, 0, 50, 10, 35, 55, 45],
  [0, 0, 0, -3, 0, 3, 1],
  'Ignatius',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Rinkah', 'Oboro', 'Elise', 'Effie', 'Nyx', 'Camilla', 'Selena', 'Beruka', 'Peri', 'Charlotte', 'Keaton', 'Arthur', 'Anna', 'Flora', 'Reina', 'Saizo', 'Azama', 'Shura', 'Subaki', 'Xander', 'Hinoka']
);

data.characters.keaton = new data.Parent(
  'Keaton',
  ['Conquest', 'Revelation'],
  ['Wolfskin', 'Fighter'],
  0,
  [60, 60, 0, 20, 35, 30, 50, 25],
  [3, 0, -2, -1, 0, 2, -1],
  'Velouria',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Rinkah', 'Hana', 'Elise', 'Effie', 'Nyx', 'Camilla', 'Selena', 'Beruka', 'Peri', 'Charlotte', 'Kaden', 'Benny', 'Flora', 'Laslow', 'Anna', 'Arthur', 'Xander', 'Niles', 'Jakob', 'Hinata', 'Odin', 'Takumi', 'Ryoma', 'Shura', 'Oboro', 'Subaki']
);

data.characters.xander = new data.Parent(
  'Xander',
  ['Conquest', 'Revelation'],
  ['Cavalier', 'Wyvern Rider'],
  0,
  [45, 50, 5, 40, 35, 60, 40, 15],
  [2, -1, -1, -1, 2, 1, -2],
  'Siegbert',
  ['Avatar', 'Azura', 'Felicia', 'Mozu', 'Sakura', 'Hinoka', 'Effie', 'Nyx', 'Selena', 'Beruka', 'Peri', 'Charlotte', 'Jakob', 'Laslow', 'Niles', 'Kaze', 'Flora', 'Ryoma', 'Anna', 'Takumi', 'Shura', 'Keaton', 'Saizo', 'Oboro', 'Benny']
);

// Other

data.characters.fuga = new data.Parent(
  'Fuga',
  'Revelation',
  ['Samurai', 'Oni Savage', 'Monk'],
  0,
  [20, 20, 0, 15, 5, 20, 10, 10],
  [2, -1, 1, 0, -1, 2, -2],
  '',
  ['Avatar', 'Saizo', 'Azama']
)
