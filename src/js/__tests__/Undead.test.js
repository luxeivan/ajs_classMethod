import Undead from '../Undead';

test('Undead', () => {
  const result = new Undead('Undead1', 34, 5);
  const tobe = {
    name: 'Undead1',
    health: 34,
    level: 5,
    type: 'Undead',
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(tobe);
});
