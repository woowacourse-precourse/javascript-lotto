const { getLogSpy } = require('../../testFunction');
const Money = require('./Money');

describe('Money 클래스 테스트', () => {
  test('money 금액을 곱한다.', () => {
    const money = new Money(10000);

    expect(money.multiply(7).getMoney()).toBe(70000);
  });

  test('3자리씩 쉼표로 구분한 문자열을 반환한다.', () => {
    const money = new Money(10000);

    expect(money.addSeperator()).toBe('10,000');
  });

  test('수익률을 출력한다.', () => {
    const money = new Money(8000);
    const earning = new Money(5000);
    const logSpy = getLogSpy();

    money.printEarningRate(earning);

    expect(logSpy).toHaveBeenCalledWith('총 수익률은 62.5%입니다.');
  });
});
