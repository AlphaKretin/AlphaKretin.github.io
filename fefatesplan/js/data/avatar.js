data.characters.avatar = new data.Parent(
  'Avatar',
  ['Birthright', 'Conquest', 'Revelation'],
  ['Nohr Prince', 'Talent'],
  0,
  [45, 45, 30, 40, 45, 45, 35, 25],
  [0, 0, 0, 0, 0, 0, 0, 0],
  'Kana',
  ['Jakob', 'Kaze', 'Silas', 'Shura', 'Izana', 'Subaki', 'Saizo', 'Azama', 'Hayato', 'Hinata', 'Takumi', 'Kaden', 'Ryoma', 'Yukimura', 'Gunter', 'Leo', 'Arthur', 'Odin', 'Niles', 'Laslow', 'Benny', 'Keaton', 'Xander', 'Fuga', 'Azura', 'Felicia', 'Mozu', 'Rinkah', 'Sakura', 'Hana', 'Orochi', 'Hinoka', 'Setsuna', 'Oboro', 'Kagero', 'Reina', 'Scarlet', 'Elise', 'Effie', 'Nyx', 'Camilla', 'Selena', 'Beruka', 'Peri', 'Charlotte', 'Flora', 'Shigure', 'Dwyer', 'Sophie', 'Midori', 'Shiro', 'Kiragi', 'Asugi', 'Selkie', 'Hisame', 'Mitama', 'Caeldori', 'Rhajat', 'Siegbert', 'Forrest', 'Ignatius', 'Velouria', 'Percy', 'Ophelia', 'Soleil', 'Nina', 'Anna']
);

data.characters.avatar.image = 'images/characters/avatarm.jpg';

data.characters.avatar.changeGender = function (kanaGender) {
  var changed = false; // just a little hiccup control, in case

  var kana = data.characters.kana;

  if (!this.gender && kanaGender) { // if avatar was male and kana was female
    this.gender = 1, kana.gender = 0;
    this.classes[0] = 'Nohr Princess', kana.classes[0] = 'Nohr Prince';
    if (this.classes[1] == 'Shrine Maiden') {
      this.changeTalent('Monk');
    }
    kana.dad = '', kana.mom = this;
    this.image = 'images/characters/avatarf.jpg';
    kana.image = 'images/characters/kanam.jpg';
    kana.defaultImage = 'images/characters/kanam.jpg';

    if (kana.skillFromDad) {
      kana.skillFromMom = kana.skillFromDad;
      kana.skillFromDad = '';
    }
    changed = true;
  } else if (this.gender && !kanaGender) { // if avatar was female and kana was male
    this.gender = 0, kana.gender = 1;
    this.classes[0] = 'Nohr Prince', kana.classes[0] = 'Nohr Princess';
    if (this.classes[1] == 'Monk') {
      this.changeTalent('Shrine Maiden');
    }
    kana.mom = '', kana.dad = this;
    this.image = 'images/characters/avatarm.jpg';
    kana.image = 'images/characters/kanaf.jpg';
    kana.defaultImage = 'images/characters/kanaf.jpg';
    if (kana.skillFromMom) {
      kana.skillFromDad = kana.skillFromMom;
      kana.skillFromMom = '';
    }
    changed = true;
  }

  if (changed) {
    if (this.spouse) {
      var spouse = eval('data.characters.' + this.spouse.toLowerCase());
      this.spouse = '', spouse.spouse = '';
      if (spouse.kid) { // if they have a kid
        var sibling = eval('data.characters.' + spouse.kid.toLowerCase());
        sibling.newParent = ''; // removes reference to avatar
        if (!spouse.gender) { // male spouse
          sibling.mom = '';
        } else { // azura
          sibling.dad = '';
        }
        sibling.updateImage(), sibling.updateStats(), sibling.updateClasses();
      }
    }
    kana.addParent('');
    kana.updateImage(), kana.updateStats(), kana.updateClasses();
  }
}

data.characters.avatar.changeTalent = function (talent) {
  this.classes[1] = talent;
  data.characters.kana.classes[1] = talent;
  data.characters.kana.updateClasses();
}

data.characters.avatar.lastStat = 'boon';
data.characters.avatar.boon = '', data.characters.avatar.bane = '';

data.characters.avatar.changeStats = function (stat) {
  if (this.boon == stat) {
    this.boon = '';
  } else if (this.bane == stat) {
    this.bane = '';
  } else if (!this.boon) {
    this.boon = stat;
    this.lastStat = 'boon';
  } else if (!this.bane) {
    this.bane = stat;
    this.lastStat = 'bane';
  } else if (this.boon && this.bane) {
    if (this.lastStat == 'bane') {
      this.boon = stat;
      this.lastStat = 'boon';
    } else {
      this.bane = stat;
      this.lastStat = 'bane';
    }
  }

  if (!this.boon && !this.bane) {
    // reset lastStat if neither exist
    this.lastStat = 'boon';
  }

  this.updateAvatarStats();
}

data.characters.avatar.updateAvatarStats = function () {
  var hpGrowth = 0, strGrowth = 0, magGrowth = 0, sklGrowth = 0, spdGrowth = 0, lckGrowth = 0, defGrowth = 0, resGrowth = 0;
  var strCap = 0, magCap = 0, sklCap = 0, spdCap = 0, lckCap = 0, defCap = 0, resCap = 0;

  switch (this.boon) {
    case 'HP':
      hpGrowth += 15, defGrowth += 5, resGrowth += 5;
      strCap += 1, magCap += 1, lckCap += 2, defCap += 2, resCap += 2;
      break;
    case 'Str':
      strGrowth += 15, sklGrowth += 5, defGrowth += 5;
      strCap += 4, sklCap += 2, defCap += 2;
      break;
    case 'Mag':
      magGrowth += 20, spdGrowth += 5, resGrowth += 5;
      magCap += 4, spdCap += 2, resCap += 2;
      break;
    case 'Skl':
      strGrowth += 5, sklGrowth += 25, defGrowth += 5;
      strCap += 2, sklCap += 4, defCap += 2;
      break;
    case 'Spd':
      sklGrowth += 5, spdGrowth += 15, lckGrowth += 5;
      sklCap += 2, spdCap += 4, lckCap += 2;
      break;
    case 'Lck':
      strGrowth += 5, magGrowth += 5, lckGrowth += 25;
      strCap += 2, magCap += 2, lckCap += 4;
      break;
    case 'Def':
      lckGrowth += 5, defGrowth += 10, resGrowth += 5;
      lckCap += 2, defCap += 4, resCap += 2;
      break;
    case 'Res':
      magGrowth += 5, spdGrowth += 5, resGrowth += 10;
      magCap += 2, spdCap += 2, resCap += 4;
      break;
    default:
      break;
  }

  switch (this.bane) {
    case 'HP':
      hpGrowth -= 10, defGrowth -= 5, resGrowth -= 5;
      strCap -= 1, magCap -= 1, lckCap -= 1, defCap -= 1, resCap -= 1;
      break;
    case 'Str':
      strGrowth -= 10, sklGrowth -= 5, defGrowth -= 5;
      strCap -= 3, sklCap -= 1, defCap -= 1;
      break;
    case 'Mag':
      magGrowth -= 15, spdGrowth -= 5, resGrowth -= 5;
      magCap -= 3, spdCap -= 1, resCap -= 1;
      break;
    case 'Skl':
      strGrowth -= 5, sklGrowth -= 20, defGrowth -= 5;
      strCap -= 1, sklCap -= 3, defCap -= 1;
      break;
    case 'Spd':
      sklGrowth -= 5, spdGrowth -= 10, lckGrowth -= 5;
      sklCap -= 1, spdCap -= 3, lckCap -= 1;
      break;
    case 'Lck':
      strGrowth -= 5, magGrowth -= 5, lckGrowth -= 20;
      strCap -= 1, magCap -= 1, lckCap -= 3;
      break;
    case 'Def':
      lckGrowth -= 5, defGrowth -= 10, resGrowth -= 5;
      lckCap -= 1, defCap -= 3, resCap -= 1;
      break;
    case 'Res':
      magGrowth -= 5, spdGrowth -= 5, resGrowth -= 10;
      magCap -= 1, spdCap -= 1, resCap -= 3;
      break;
    default:
      break;
  }

  var newGrowths = [hpGrowth, strGrowth, magGrowth, sklGrowth, spdGrowth, lckGrowth, defGrowth, resGrowth];
  var newCaps = [strCap, magCap, sklCap, spdCap, lckCap, defCap, resCap];

  for (var i = 0; i < this.defaultGrowthRates.length; i++) {
    this.growthRates[i] = this.defaultGrowthRates[i] + newGrowths[i];
  }

  for (var i = 0; i < this.maxStats.length; i++) {
    this.maxStats[i] = newCaps[i];
  }

  data.characters.kana.updateStats();
  if (this.spouse) {
    var spouse = eval('data.characters.' + this.spouse.toLowerCase());
    eval('data.characters.' + spouse.kid.toLowerCase()).updateStats();
  }
}
