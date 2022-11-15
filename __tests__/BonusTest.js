const Bonus = require('../src/Bonus');

describe('보너스 클래스 테스트', () => {
  test('보너스 번호에 문자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('1,2,3', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 범위에서 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(100, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 로또 번호와 중복이 발생하면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(4, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
