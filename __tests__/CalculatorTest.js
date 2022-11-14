const { calcProfit, calcQuotient } = require('../src/Calculator');

describe('계산기 클래스 테스트', () => {
  test('비용 대비 소득, 수익률을 계산한다.', () => {
    const cost1 = 8000;
    const cost2 = 7000;
    const income1 = 5000;
    const income2 = 1500000;
    expect(calcProfit(cost1, income1)).toEqual(62.5);
    expect(calcProfit(cost2, income2)).toEqual(21428.6);
  });

  test('입력한 금액을 1,000으로 나눈 몫을 계산한다.', () => {
    const numerator = 8000;
    expect(calcQuotient(numerator)).toEqual(8);
  });
});
