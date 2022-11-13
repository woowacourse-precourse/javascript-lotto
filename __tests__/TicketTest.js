const Bonus = require('../src/Bonus');

describe('로또 클래스 테스트', () => {
  test('보너스 번호는 로또 번호와 중복되는 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus([1, 2, 3, 4, 5, 6], 5);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 숫자 범위가 1~45 사이가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus([1, 2, 3, 4, 5, 6], 50);
    }).toThrow('[ERROR]');
  });
});
