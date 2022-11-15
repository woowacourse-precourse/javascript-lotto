const Bonus = require('../src/Bonus');

describe('Bonus 클래스 테스트', () => {
  test('보너스 번호에 숫자 외의 값이 들어오면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('.', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
  test('보너스 번호에 1~45 범위 외의 숫자가 들어오면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(50, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
  test('보너스 번호에 로또 번호와 중복 번호가 들어오면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
