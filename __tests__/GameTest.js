const Game = require('../src/Game');
const MissionUtils = require('@woowacourse/mission-utils');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('게임 클래스 테스트', () => {
  test('주어진 수만큼 로또를 발행한다.', () => {
    const game = new Game();
    const num = 5;
    const lottoList = game.issueLotto(num);
    expect(lottoList.length).toBe(num);
  });

  test('발행한 로또 수량과 로또 번호를 출력한다.', () => {
    const lottoList = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44]
    ];
    const logs = [
      '3개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]'
    ];
    const logSpy = getLogSpy();
    const game = new Game();
    game.printPurchaseResult(lottoList);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
