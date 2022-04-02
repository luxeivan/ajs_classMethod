import Character from '../Character';

test('Character norm', () => {
  const result = new Character('Devil', 90, 3);
  const tobe = {
    name: 'Devil',
    health: 90,
    level: 3,
  };
  expect(result).toEqual(tobe);
});

test('Character not norm', () => {
  const result = () => {
    const character = new Character('D', 90, 3);
    character.damage = 25;
  };
  expect(result).toThrow('Имя должно быть от 2 до 10 символов');
});

test('Character function levelUp', () => {
  const result = new Character('Devil', 90, 3);
  result.attack = 25;
  result.defence = 25;
  const tobe = {
    name: 'Devil',
    health: 100,
    level: 4,
    defence: 25 * 0.2,
    attack: 25 * 0.2,
  };
  result.levelUp();
  expect(result).toEqual(tobe);
});

test('Character function levelUp not norm', () => {
  const result = () => {
    const character = new Character('Devil', 0, 3);
    character.levelUp();
  };
  expect(result).toThrow('нельзя повысить левел умершего');
});

test('Character function damage', () => {
  const result = new Character('Devil', 90, 3);
  result.attack = 25;
  result.defence = 25;
  const tobe = {
    name: 'Devil',
    health: 90 - 20 * (1 - 25 / 100),
    level: 3,
    defence: 25,
    attack: 25,
  };
  result.damage(20);
  expect(result).toEqual(tobe);
});

test('Character function damage', () => {
  const result = new Character('Devil', -1, 3);
  result.attack = 25;
  result.defence = 25;
  const tobe = {
    name: 'Devil',
    health: -1,
    level: 3,
    defence: 25,
    attack: 25,
  };
  result.damage(20);
  expect(result).toEqual(tobe);
});
