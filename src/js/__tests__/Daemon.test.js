import Daemon from '../Daemon';

test('Character', () => {
  const result = new Daemon('Daemon1', 93, 1);
  const tobe = {
    name: 'Daemon1',
    health: 93,
    level: 1,
    type: 'Daemon',
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(tobe);
});
