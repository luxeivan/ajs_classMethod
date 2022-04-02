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
     new Character('D', 90, 3) 
};
  expect(result).toThrow('Имя должно быть от 2 до 10 символов');
});
