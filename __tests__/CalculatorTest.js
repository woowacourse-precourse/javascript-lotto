const Calculator = require('../src/Calculator');

describe('계산기 클래스 테스트', () => {
  const cost1 = 8000;
  const cost2 = 7000;
  const income1 = 5000;
  const income2 = 1500000;
  test('비용 대비 소득, 수익률을 계산한다.', () => {
    expect(Calculator.calcProfit(cost1, income1)).toEqual(62.5);
    expect(Calculator.calcProfit(cost2, income2)).toEqual(21428.6);
  });
});
