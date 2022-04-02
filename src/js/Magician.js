import Character from './Character';

export default class Magician extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}
