import Bowman from '../Bowman';

test('Character', () => {
  const result = new Bowman('Bowman1', 70, 9);
  const tobe = {
    name: 'Bowman1',
    health: 70,
    level: 9,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(tobe);
});
