export default class Character {
  constructor(name, health, level) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть от 2 до 10 символов');
    }
    this.name = name;
    this.health = health;
    this.level = level;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack *= 0.2;
    this.defence *= 0.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100)
    }
  }
}
