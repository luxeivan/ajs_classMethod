import Swordsman from '../Swordsman';

test('Character', () => {
  const result = new Swordsman('Swordsman1', 74, 4);
  const tobe = {
    name: 'Swordsman1',
    health: 74,
    level: 4,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(tobe);
});
