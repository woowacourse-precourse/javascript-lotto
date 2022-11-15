const Calculator = require('../src/Calculator');

describe('도메인 로직 테스트', () => {
  test('정해진 로또 매칭 규칙에 따라 등수 계산 결정', () => {
    const userLottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 10],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 12, 13],
      [1, 2, 3, 10, 12, 14],
    ];
    const winningArray = [1, 2, 3, 4, 5, 6];

    const bonusNumber = 10;
    const answer = [1, 2, 3, 4, 5];

    userLottos.forEach((userLotto, i) => {
      expect(Calculator.calWinningCount(userLotto, winningArray, bonusNumber)).toEqual(answer[i]);
    });
  });

  test('정해진 기준 에따른(소수점) 수익률 계산', () => {
    const totalWinning = [15000];
    const purchaseAmount = [5, 20, 40, 28];
    const answer = [300, 75, 37.5, 53.6];

    purchaseAmount.forEach((amount, i) => {
      expect(Calculator.getstatistics(totalWinning, amount)).toEqual(answer[i]);
    });
  });
});
