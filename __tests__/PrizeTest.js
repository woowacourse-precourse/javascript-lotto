const { Console } = require('@woowacourse/mission-utils');
const Prize = require('../src/Prize');

describe('Prize 클래스 테스트', () => {
  test('당첨 내역 테스트', () => {
    const purchases = [
      [1, 4, 5, 9, 20, 45],
      [2, 4, 5, 9, 21, 45],
      [2, 6, 9, 23, 38, 44],
      [2, 4, 23, 30, 33, 45],
      [1, 4, 5, 6, 20, 41],
      [3, 4, 5, 6, 20, 40],
      [13, 14, 17, 19, 40, 43],
      [1, 16, 21, 28, 32, 36],
      [2, 8, 9, 6, 20, 40],
      [1, 4, 5, 6, 20, 40],
      [2, 4, 5, 6, 20, 40],
    ];
    const winningNumbers = [2, 4, 5, 6, 20, 40];
    const bonusNumber = 1;
    const result = Prize.compareAllPurchasesWithWinningNumbers(
      purchases,
      winningNumbers,
      bonusNumber,
    ).map(({ count }) => count);

    expect(result).toEqual([2, 2, 1, 1, 1]);
  });

  test('수익률 테스트', () => {
    const expense = 5000;
    const rankings = [
      { criteria: 3, money: 5000, hasBonus: false, count: 1 },
      { criteria: 4, money: 50000, hasBonus: false, count: 0 },
      { criteria: 5, money: 1500000, hasBonus: false, count: 0 },
      { criteria: 5, money: 30000000, hasBonus: true, count: 1 },
      { criteria: 6, money: 2000000000, hasBonus: false, count: 0 },
    ];
    const returnRate = Prize.getReturnRate(expense, rankings);

    expect(returnRate).toEqual(600100);
  });
});

afterAll((done) => {
  Console.close();
  done();
});
