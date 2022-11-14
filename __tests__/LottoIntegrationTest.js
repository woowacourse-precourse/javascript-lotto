const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

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

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 integration 테스트', () => {
  test('사용자가 구매 금액을 입력하면 해당 매수만큼의 로또를 구매하여 출력한다.', () => {
    mockRandoms([
      [5, 7, 22, 28, 29, 44],
      [1, 5, 6, 19, 22, 31],
      [1, 2, 16, 21, 37, 39],
      [4, 8, 20, 23, 27, 35],
      [15, 18, 19, 20, 27, 45],
      [6, 7, 18, 30, 39, 44],
      [1, 4, 8, 23, 27, 44],
      [1, 7, 22, 24, 32, 44],
      [1, 7, 12, 16, 21, 43],
      [8, 14, 18, 20, 37, 42]
    ]);
    mockQuestions(['10000']);
    const logs = [
      '10개를 구매했습니다.',
      '[5, 7, 22, 28, 29, 44]',
      '[1, 5, 6, 19, 22, 31]',
      '[1, 2, 16, 21, 37, 39]',
      '[4, 8, 20, 23, 27, 35]',
      '[15, 18, 19, 20, 27, 45]',
      '[6, 7, 18, 30, 39, 44]',
      '[1, 4, 8, 23, 27, 44]',
      '[1, 7, 22, 24, 32, 44]',
      '[1, 7, 12, 16, 21, 43]',
      '[8, 14, 18, 20, 37, 42]'
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('사용자가 당첨 번호와 보너스 번호를 입력 시, 구매한 로또의 당첨 통계를 출력한다.', () => {
    mockRandoms([
      [3, 5, 13, 14, 37, 45],
      [9, 11, 24, 29, 37, 45],
      [4, 5, 6, 19, 26, 36],
      [3, 15, 16, 20, 22, 44],
      [14, 15, 22, 29, 35, 42],
      [6, 10, 39, 43, 44, 45],
      [1, 4, 26, 29, 34, 43],
      [14, 22, 27, 35, 38, 44]
    ]);
    mockQuestions(['8000', '3,5,37,45,35,43', '44']);
    const logs = [
      '8개를 구매했습니다.',
      '[3, 5, 13, 14, 37, 45]',
      '[9, 11, 24, 29, 37, 45]',
      '[4, 5, 6, 19, 26, 36]',
      '[3, 15, 16, 20, 22, 44]',
      '[14, 15, 22, 29, 35, 42]',
      '[6, 10, 39, 43, 44, 45]',
      '[1, 4, 26, 29, 34, 43]',
      '[14, 22, 27, 35, 38, 44]',
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 625.0%입니다.'
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
