const MissionUtils = require('@woowacourse/mission-utils');

const LottoGame = require('../src/LottoGame');
const LottoNumberUtil = require('../src/LottoNumberUtil');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('LottoGame 테스트', () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test('setInputMoney', () => {
    const inputMoney = 3000;
    const lottoGame = new LottoGame();

    LottoNumberUtil.validateMoney = jest.fn();
    lottoGame.setInputMoney(inputMoney);

    expect(LottoNumberUtil.validateMoney).toHaveBeenCalled();
    expect(lottoGame.getInputMoney()).toEqual(inputMoney);
  });

  test('setLottoGames', () => {
    const inputMoney = 3000;
    const lottoGame = new LottoGame();

    lottoGame.setInputMoney(inputMoney);
    lottoGame.setLottoGames();

    expect(lottoGame.getLottoGames().length).toEqual(inputMoney / 1000);
  });

  test('setWinningNumbers', () => {
    LottoNumberUtil.validateLength = jest.fn();
    LottoNumberUtil.validateDuplication = jest.fn();
    LottoNumberUtil.validateRange = jest.fn();

    const lottoGame = new LottoGame();

    const winningNumbers = [1, 2, 3, 4, 5, 6];
    lottoGame.setWinningNumbers(winningNumbers);

    expect(LottoNumberUtil.validateLength).toHaveBeenCalled();
    expect(LottoNumberUtil.validateDuplication).toHaveBeenCalled();
    expect(LottoNumberUtil.validateRange).toHaveBeenCalledTimes(6);

    expect(lottoGame.getWinningNumbers()).toEqual(winningNumbers);
  });

  test('setBonusNumbers', () => {
    LottoNumberUtil.validateDuplication = jest.fn();
    LottoNumberUtil.validateRange = jest.fn();

    const lottoGame = new LottoGame();

    const bonusNumber = 7;
    lottoGame.setBonusNumbers(bonusNumber);

    expect(LottoNumberUtil.validateRange).toHaveBeenCalled();
    expect(LottoNumberUtil.validateDuplication).toHaveBeenCalled();

    expect(lottoGame.getBonusNumbers()).toEqual(bonusNumber);
  });

  test('getStatistics', () => {
    LottoNumberUtil.validateDuplication = jest.fn();
    LottoNumberUtil.validateRange = jest.fn();

    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 7, 8],
      [1, 2, 3, 7, 8, 9],
    ]);

    const inputMoney = 5000;
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottoGame = new LottoGame();

    lottoGame.setInputMoney(inputMoney);
    lottoGame.setLottoGames();
    lottoGame.setWinningNumbers(winningNumbers);
    lottoGame.setBonusNumbers(bonusNumber);

    expect(lottoGame.getStatistics()).toEqual([1, 1, 1, 1, 1, 4631100]);
  });

  test('convertToIndex', () => {
    const lottoGame = new LottoGame();
    // 5등 미만
    expect(lottoGame.convertToIndex(2)).toEqual(-1);
    // 5등
    expect(lottoGame.convertToIndex(3)).toEqual(0);
    // 4등
    expect(lottoGame.convertToIndex(4)).toEqual(1);
    // 3등
    expect(lottoGame.convertToIndex(5)).toEqual(2);
    // 2등
    expect(lottoGame.convertToIndex(5.5)).toEqual(3);
    // 1등
    expect(lottoGame.convertToIndex(6)).toEqual(4);
  });

  test('getRatio', () => {
    const lottoGame = new LottoGame();

    lottoGame.setInputMoney(1000);

    // 5등
    expect(lottoGame.getRatio([1, 0, 0, 0, 0])).toEqual(500);
    // 4등
    expect(lottoGame.getRatio([0, 1, 0, 0, 0])).toEqual(5000);
    // 3등
    expect(lottoGame.getRatio([0, 0, 1, 0, 0])).toEqual(150000);
    // 2등
    expect(lottoGame.getRatio([0, 0, 0, 1, 0])).toEqual(3000000);
    // 1등
    expect(lottoGame.getRatio([1, 0, 0, 0, 1])).toEqual(20000500);
  });

  test('getTotalPrize', () => {
    const lottoGame = new LottoGame();
    // 5등
    expect(lottoGame.getTotalPrize([1, 0, 0, 0, 0])).toEqual(5000);
    // 4등
    expect(lottoGame.getTotalPrize([0, 1, 0, 0, 0])).toEqual(50000);
    // 3등
    expect(lottoGame.getTotalPrize([0, 0, 1, 0, 0])).toEqual(1500000);
    // 2등
    expect(lottoGame.getTotalPrize([0, 0, 0, 1, 0])).toEqual(30000000);
    // 1등
    expect(lottoGame.getTotalPrize([0, 0, 0, 0, 1])).toEqual(200000000);
  });
});
