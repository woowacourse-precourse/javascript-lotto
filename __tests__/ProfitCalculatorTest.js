const ProfitCalculator = require('../src/services/ProfitCalculator');

describe('ProfitCalculator 클래스 테스트', () => {
  test('1000원을 투자해서 5000원이 당첨되면 수익률은 500.0이다.', () => {
    expect(
      ProfitCalculator.calculate({
        result: [0, 0, 0, 0, 1],
        purchaseAmount: 1000,
      })
    ).toEqual('500.0');
  });

  test('1000원을 투자해서 50000원이 당첨되면 수익률은 5,000.0이다.', () => {
    expect(
      ProfitCalculator.calculate({
        result: [0, 0, 0, 1, 0],
        purchaseAmount: 1000,
      })
    ).toEqual('5,000.0');
  });

  test('1000원을 투자해서 1,500,000원이 당첨되면 수익률은 150,000.0이다.', () => {
    expect(
      ProfitCalculator.calculate({
        result: [0, 0, 1, 0, 0],
        purchaseAmount: 1000,
      })
    ).toEqual('150,000.0');
  });

  test('1000원을 투자해서 30,000,000원이 당첨되면 수익률은 3,000,000.0이다.', () => {
    expect(
      ProfitCalculator.calculate({
        result: [0, 1, 0, 0, 0],
        purchaseAmount: 1000,
      })
    ).toEqual('3,000,000.0');
  });

  test('1000원을 투자해서 2,000,000,000원이 당첨되면 수익률은 200,000,000.0이다.', () => {
    expect(
      ProfitCalculator.calculate({
        result: [1, 0, 0, 0, 0],
        purchaseAmount: 1000,
      })
    ).toEqual('200,000,000.0');
  });
});
