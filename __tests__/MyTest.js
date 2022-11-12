const Lotto = require('../src/Lotto');

describe('Lotto 클래스 테스트', () => {
  test('로또 번호 개수 예외 발생', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });
});
