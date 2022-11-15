/* eslint-disable */

const LottoScoreBoard = require('../src/LottoScoreBoard');

describe('스코어보드 반환 테스트', () => {
  test('스코어보드의 반환값이 올바른가?', () => {
    const lottoScoreBoard = new LottoScoreBoard();
    lottoScoreBoard.addLottoDrawResult(3, 0);
    lottoScoreBoard.addLottoDrawResult(4, 0);
    lottoScoreBoard.addLottoDrawResult(5, 0);
    lottoScoreBoard.addLottoDrawResult(5, 1);
    lottoScoreBoard.addLottoDrawResult(6, 0);
    lottoScoreBoard.addLottoDrawResult(3, 0);
    lottoScoreBoard.addLottoDrawResult(3, 0);
    lottoScoreBoard.addLottoDrawResult(3, 0);
    expect(lottoScoreBoard.getLottosDrawResult()).toEqual({
      threeSame: 4,
      fourSame: 1,
      fiveSame: 1,
      fiveSameWithBonus: 1,
      allSame: 1,
      profitRate: '25394625.0',
    });
  });

  test('스코어보드의 반환값이 올바른가?', () => {
    const lottoScoreBoard = new LottoScoreBoard();
    lottoScoreBoard.addLottoDrawResult(1, 0);
    lottoScoreBoard.addLottoDrawResult(2, 0);
    lottoScoreBoard.addLottoDrawResult(3, 0);
    expect(lottoScoreBoard.getLottosDrawResult()).toEqual({
      threeSame: 1,
      fourSame: 0,
      fiveSame: 0,
      fiveSameWithBonus: 0,
      allSame: 0,
      profitRate: '166.7',
    });
  });
});
