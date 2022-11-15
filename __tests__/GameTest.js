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

describe('로또게임 당첨 경우의 수 테스트', () => {
  test('3개 일치 경우 (5등)', () => {
    mockRandoms([
      [3, 1, 4, 5, 10, 12],
      [3, 1, 4, 5, 10, 12],
      [3, 1, 4, 5, 10, 12],
    ]);
    mockQuestions(['3000', '3, 1, 4, 7, 16, 17', '20']);
    const logs = [
      '3개를 구매했습니다.',
      '[1, 3, 4, 5, 10, 12]',
      '[1, 3, 4, 5, 10, 12]',
      '[1, 3, 4, 5, 10, 12]',
      '3개 일치 (5,000원) - 3개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 500%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('4개 일치 경우 (4등)', () => {
    mockRandoms([
      [3, 1, 4, 5, 10, 12],
      [3, 1, 4, 5, 10, 12],
      [3, 1, 4, 5, 10, 12],
    ]);
    mockQuestions(['3000', '3, 1, 4, 5, 11, 17', '20']);
    const logs = [
      '3개를 구매했습니다.',
      '[1, 3, 4, 5, 10, 12]',
      '[1, 3, 4, 5, 10, 12]',
      '[1, 3, 4, 5, 10, 12]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 3개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 5000%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('5개 일치 경우 (3등)', () => {
    mockRandoms([
      [3, 1, 4, 5, 10, 12],
      [3, 1, 4, 5, 10, 12],
      [3, 1, 4, 5, 10, 12],
    ]);
    mockQuestions(['3000', '3, 1, 4, 5, 10, 17', '20']);
    const logs = [
      '3개를 구매했습니다.',
      '[1, 3, 4, 5, 10, 12]',
      '[1, 3, 4, 5, 10, 12]',
      '[1, 3, 4, 5, 10, 12]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 3개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 150000%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('5개 일치 + 보너스 일치 경우 (2등)', () => {
    mockRandoms([
      [3, 1, 4, 5, 10, 12],
      [3, 1, 4, 5, 10, 12],
      [3, 1, 4, 5, 10, 12],
    ]);
    mockQuestions(['3000', '3, 1, 4, 5, 10, 17', '12']);
    const logs = [
      '3개를 구매했습니다.',
      '[1, 3, 4, 5, 10, 12]',
      '[1, 3, 4, 5, 10, 12]',
      '[1, 3, 4, 5, 10, 12]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 3개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 3000000%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('6개 일치 경우 (1등)', () => {
    mockRandoms([
      [3, 1, 4, 5, 10, 12],
      [3, 1, 4, 5, 10, 12],
      [3, 1, 4, 5, 10, 12],
    ]);
    mockQuestions(['3000', '3, 1, 4, 5, 10, 12', '20']);
    const logs = [
      '3개를 구매했습니다.',
      '[1, 3, 4, 5, 10, 12]',
      '[1, 3, 4, 5, 10, 12]',
      '[1, 3, 4, 5, 10, 12]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 3개',
      '총 수익률은 200000000%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    logs.forEach((log) => {
      app.play();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
