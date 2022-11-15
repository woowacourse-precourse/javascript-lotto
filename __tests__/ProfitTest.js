/* eslint-disable max-lines-per-function */
const Computer = require('../src/Computer');

describe('수익율 기능 테스트', () => {
  test('미당첨 수익율 테스트', () => {
    const inputMoney = 50000;
    const rankResult = { First: 0, Second: 0, Third: 0, Fourth: 0, Fifth: 0 };
    const profit = Computer.getUserProfit(rankResult, inputMoney);
    expect(profit).toBe('0.0');
  });

  test('수익율 테스트', () => {
    const inputMoney = 60000;
    const rankResult = { First: 0, Second: 0, Third: 1, Fourth: 1, Fifth: 0 };
    const profit = Computer.getUserProfit(rankResult, inputMoney);
    expect(profit).toBe('2583.3');
  });
});
