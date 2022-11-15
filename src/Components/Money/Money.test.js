const { getLogSpy } = require('../../testFunction');
const Money = require('./Money');

describe('Money 클래스 테스트', () => {
  test('금액을 곱한다.', () => {
    const amount = new Money(10000).multiply(7).getAmount();

    expect(amount).toBe(70000);
  });

  test('금액을 금액으로 나눈 값을 구한다.', () => {
    const quotient = new Money(10000).divide(new Money(1000));

    expect(quotient).toBe(10);
  });

  test('금액을 더한다.', () => {
    const money = new Money(10000);
    money.addMoney(new Money(10000));
    const amount = money.getAmount();

    expect(amount).toBe(20000);
  });

  test('금액을 3자리씩 쉼표로 구분한 문자열로 반환한다.', () => {
    const money = new Money(10000);

    expect(money.addSeperator()).toBe('10,000');
  });

  test('수익률을 계산한다.', () => {
    const money = new Money(8000);
    const earning = new Money(5000);
    const earningRate = money.calculateEarningRate(earning);

    expect(earningRate).toBe('62.5%');
  });

  test('숫자가 아닌값으로 초기화하면 에러가 발생한다.', () => {
    expect(() => new Money('a')).toThrow();
  });
});
