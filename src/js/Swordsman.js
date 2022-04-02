import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
