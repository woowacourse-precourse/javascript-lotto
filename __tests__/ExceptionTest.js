const { MoneyExceptions, BonusExceptions } = require('../src/Exceptions');
const WINNING = [1, 2, 3, 4, 5, 6];

describe('예외처리 클래스 테스트', () => {
  test('구입 금액이 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new MoneyExceptions('30a0').check();
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 1,000원으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new MoneyExceptions('3050').check();
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BonusExceptions('3.5').check(WINNING);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1 - 45 사이의 수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BonusExceptions('65').check(WINNING);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨번호와 중복되면 예외가 발생한다.', () => {
    expect(() => {
      new BonusExceptions('1').check(WINNING);
    }).toThrow('[ERROR]');
  });
});
