const { WINNER_RULE, PRICE } = require('../src/lottoOptions');
const WinnerSelector = require('../src/WinnerSelector');

const winnerSelector = new WinnerSelector(PRICE, WINNER_RULE);
winnerSelector.setPurchasedLottos([[1, 2, 3, 4, 5, 11], [1, 2, 3, 4, 5, 7], [1, 2, 3, 11, 12, 13]]);

describe('WinnerSeletor 클래스 테스트', () => {
  test('당첨 정보 저장', () => {
    const winner = { numbers: [1, 2, 3, 4, 5, 6], bonus: 7 };

    winnerSelector.setWinnerNumber(winner);
    expect(winnerSelector.winnerNumber).toEqual(expect.objectContaining(winner));
  });

  test('당첨 결과 저장', () => {
    const result = {
      bonus: [[1, 2, 3, 4, 5, 7]],
      winner: {
        3: [[1, 2, 3, 11, 12, 13]], 4: [], 5: [[1, 2, 3, 4, 5, 11]], 6: [],
      },
    };

    winnerSelector.setLottoResult();

    expect(winnerSelector.prizeResult).toEqual(expect.objectContaining(result));
  });

  test('당첨금 계산', () => {
    winnerSelector.calcPrizeMoney();
    expect(winnerSelector.prizeMoney).toBe(31505000);
  });

  test('수익률 계산', () => {
    const earningRate = '1,050,166.7';

    winnerSelector.calcEarningRate();
    expect(winnerSelector.earningRate).toBe(earningRate);
  });
});
