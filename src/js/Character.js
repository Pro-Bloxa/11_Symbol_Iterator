export default class Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Некорректная длина имени');
    }
    const types = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Некорректный тип');
    }
    this.health = 100;
    this.level = 1;
  }
}

// export default class Character {
//   constructor(name, type, health, level, attack, defence) {
//     this.name = name;
//     this.type = type;
//     this.health = health;
//     this.level = level;
//     this.attack = attack;
//     this.defence = defence;
//   }
// }
