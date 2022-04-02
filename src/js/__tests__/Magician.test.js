import Magician from '../Magician';

test('Character', () => {
  const result = new Magician('Magician1', 10, 10);
  const tobe = {
    name: 'Magician1',
    health: 10,
    level: 10,
    type: 'Magician',
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(tobe);
});
