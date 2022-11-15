const MissionUtils = require('@woowacourse/mission-utils');
const Game = require('../src/Game');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Game클래스 테스트', () => {
  test('유저 로또 자동생성 테스트', () => {
    const mockLottos = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    mockRandoms(mockLottos);

    const game = new Game();
    game.generateUserLotto(8);
    const userLottoBundle = game.userLottoBundle;

    mockLottos.forEach((mockLotto, index) => {
      expect(userLottoBundle[index]).toEqual(expect.arrayContaining(mockLotto));
    });
  });
});
