export default class Character {
  constructor(name, health, level) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть от 2 до 10 символов');
    }
    this.name = name;
    this.health = health;
    this.level = level;
  }
}
