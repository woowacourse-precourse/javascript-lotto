const Game = require('../src/Game');
const { LOTTO } = require('../src/constant/Lotto');
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

  test('주어진 문자열에서 공백을 제거하고 콤마를 기준으로 나눈 배열을 반환한다.', () => {
    const input = '1 , 2, 3, 4, 5, 6';
    const expectedOutput = ['1', '2', '3', '4', '5', '6'];
    const game = new Game();
    const output = game.parseInput(input);
    expect(output).toStrictEqual(expectedOutput);
  });

  test('로또 번호와 당첨 번호가 몇 개 일치하는지 확인한다.', () => {
    const lottoList = [
      ['1', '2', '3', '4', '5', '6'],
      ['1', '2', '3', '4', '5', '7'],
      ['1', '2', '3', '4', '7', '8']
    ];
    const winningNumber = ['1', '2', '3', '4', '5', '6'];
    const expectedOutput = [6, 5, 4];
    const game = new Game();
    lottoList.forEach((lottoNumber, index) => {
      const output = game.countMatch(lottoNumber, winningNumber);
      expect(output).toStrictEqual(expectedOutput[index]);
    });
  });

  test('등수를 반환한다.', () => {
    const lottoList = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8]
    ];
    const match = [6, 5, 5];
    const bonusNumber = 7;
    const expectedOutput = [LOTTO.RANK.FIRST, LOTTO.RANK.SECOND, LOTTO.RANK.THIRD];
    const game = new Game();
    lottoList.forEach((lottoNumber, index) => {
      const output = game.getRank(lottoNumber, bonusNumber, match[index]);
      expect(output).toStrictEqual(expectedOutput[index]);
    });
  });
});
