const LottoGame = require('../src/LottoGame');

describe('로또 번호 비교', () => {
  test('일치하는 번호 개수 확인하는 테스트.', () => {
    const lottoGame = new LottoGame();
    lottoGame.winningNumbers = [1, 4, 6, 8, 10, 12];
    const result = lottoGame.countCorrectNumbers([1, 6, 12, 14, 19, 21]);

    expect(result).toEqual(3);
  });

  test('로또 등수 확인하는 테스트1.', () => {
    const lottoGame = new LottoGame();
    lottoGame.winningNumbers = [1, 2, 3, 4, 5, 6];
    lottoGame.bonusNumber = 7;
    const result = lottoGame.getLottoRank(5);

    expect(result).toEqual(3);
  });

  test('로또 등수 확인하는 테스트2.', () => {
    const lottoGame = new LottoGame();
    lottoGame.winningNumbers = [1, 2, 3, 4, 5, 6];
    lottoGame.bonusNumber = 3;
    const result = lottoGame.getLottoRank(5);

    expect(result).toEqual(2);
  });

  test('총 당첨 금액 확인하는 테스트1', () => {
    const lottoGame = new LottoGame();
    const result = lottoGame.calcTotalPrize([0, 1, 0, 0, 0, 1, 6]);

    expect(result).toEqual(2000005000);
  });

  test('총 당첨 금액 확인하는 테스트2', () => {
    const lottoGame = new LottoGame();
    const result = lottoGame.calcTotalPrize([0, 0, 0, 0, 0, 0, 6]);

    expect(result).toEqual(0);
  });

  test('수익률 계산하는 테스트1', () => {
    const lottoGame = new LottoGame();
    lottoGame.purchaseAmount = 8000;
    const result = lottoGame.calcRateOfReturn(5000);

    expect(result).toEqual('62.5');
  });

  test('수익률 계산하는 테스트2', () => {
    const lottoGame = new LottoGame();
    lottoGame.purchaseAmount = 3000;
    const result = lottoGame.calcRateOfReturn(55000);

    expect(result).toEqual('1833.3');
  });
});
