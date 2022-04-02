import Character from './Character';

export default class Undead extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}
