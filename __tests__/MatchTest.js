const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

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

describe('로또 테스트', () => {
  test('3개 일치 개수 및 수익률 확인', () => {
    mockRandoms([
      [2, 14, 21, 31, 41, 43],
      [7, 11, 16, 35, 36, 44],
    ]);
    mockQuestions(['2000', '1,2,14,21,36,40', '43']);
    const logs = [
      '2개를 구매했습니다.',
      '[2, 14, 21, 31, 41, 43]',
      '[7, 11, 16, 35, 36, 44]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 250%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('4개 일치 개수 및 수익률 확인', () => {
    mockRandoms([
      [2, 14, 21, 31, 41, 43],
      [7, 11, 16, 35, 36, 44],
    ]);
    mockQuestions(['2000', '1,2,14,21,31,40', '43']);
    const logs = [
      '2개를 구매했습니다.',
      '[2, 14, 21, 31, 41, 43]',
      '[7, 11, 16, 35, 36, 44]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 2500%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('5개 일치 개수 및 수익률 확인', () => {
    mockRandoms([
      [2, 14, 21, 31, 41, 43],
      [7, 11, 16, 35, 36, 44],
    ]);
    mockQuestions(['2000', '1,2,14,21,31,41', '45']);
    const logs = [
      '2개를 구매했습니다.',
      '[2, 14, 21, 31, 41, 43]',
      '[7, 11, 16, 35, 36, 44]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 75000%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('5개 + 보너스 볼 일치 개수 및 수익률 확인', () => {
    mockRandoms([
      [2, 14, 21, 31, 41, 43],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
    ]);
    mockQuestions(['5000', '1,2,14,21,31,41', '43']);
    const logs = [
      '5개를 구매했습니다.',
      '[2, 14, 21, 31, 41, 43]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 600100%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('6개 일치 개수 및 수익률 확인', () => {
    mockRandoms([
      [2, 14, 21, 31, 41, 43],
      [7, 11, 16, 35, 36, 44],
    ]);
    mockQuestions(['2000', '2,14,21,31,41,43', '45']);
    const logs = [
      '2개를 구매했습니다.',
      '[2, 14, 21, 31, 41, 43]',
      '[7, 11, 16, 35, 36, 44]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 100000000%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
