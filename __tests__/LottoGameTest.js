const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('../src/Lotto');
const LottoGame = require('../src/LottoGame');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('LottoGame class test', () => {
  test('countWinningNumber', () => {
    const game = new LottoGame();
    expect(
      game.countWinningNumber([1, 6, 3, 10, 21, 23], [1, 2, 3, 4, 5, 6]),
    ).toBe(3);
    game.exitGame();
  });
  test('hasBonusNumber_hasBonusNumber', () => {
    const game = new LottoGame();
    expect(game.hasBonusNumber([1, 6, 3, 10, 21, 7], 3)).toBe(true);
  });
  test('hasBonusNumber_hasNotBonusNumber', () => {
    const game = new LottoGame();
    expect(game.hasBonusNumber([1, 6, 3, 10, 21, 7], 8)).toBe(false);
  });
  test('calcRateOfReturn', () => {
    const game = new LottoGame();
    expect(game.calcRateOfReturn(1000, 10000)).toBe('1000.0');
  });
});
