const Bonus = require('../src/Bonus');

describe('Bonus 클래스 테스트', () => {
  test('보너스 번호가 범위밖에 있는 숫자면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(100);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(NaN);
    }).toThrow('[ERROR]');
  });

  test('아무 값도 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 있는 번호면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(5).isBelong([1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
