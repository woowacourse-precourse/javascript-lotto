const Bonus = require('../src/Bonus');

describe('보너스 번호 예외 테스트', () => {
  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('a', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR] 보너스 번호는 숫자여야 합니다.');
  });

  test('보너스 번호가 1과 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(46, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR] 보너스 번호는 1과 45 사이의 숫자여야 합니다.');
  });

  test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(3, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR] 보너스 번호는 당첨 번호와 중복되지 않습니다.');
  });
});
