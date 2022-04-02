import Zombie from '../Zombie';

test('Character', () => {
  const result = new Zombie('Artur', 80, 4);
  const tobe = {
    name: 'Artur',
    health: 80,
    level: 4,
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(tobe);
});
