import Character from './Character';

export default class Zombie extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}
