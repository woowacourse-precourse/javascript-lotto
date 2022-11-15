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
  test('기능 테스트1', () => {
    mockRandoms([
      [1, 3, 5, 14, 22, 45],
      [1, 2, 3, 4, 5, 45],
    ]);
    mockQuestions(['2000', '1,2,3,4,5,6', '7']);
    const logs = [
      '2개를 구매했습니다.',
      '[1, 3, 5, 14, 22, 45]',
      '[1, 2, 3, 4, 5, 45]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 75,250.0%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('기능 테스트2', () => {
    mockRandoms([
      [5, 12, 21, 23, 25, 34],
      [1, 2, 6, 8, 34, 42],
      [15, 18, 28, 41, 43, 44],
      [1, 8, 19, 20, 24, 29],
      [11, 17, 19, 31, 32, 45],
    ]);
    mockQuestions(['5000', '1,2,6,8,34,3', '42']);
    const logs = [
      '5개를 구매했습니다.',
      '[5, 12, 21, 23, 25, 34]',
      '[1, 2, 6, 8, 34, 42]',
      '[15, 18, 28, 41, 43, 44]',
      '[1, 8, 19, 20, 24, 29]',
      '[11, 17, 19, 31, 32, 45]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 600,000.0%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('기능 테스트3', () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 7, 8, 9],
      [7, 8, 9, 10, 11, 12],
    ]);
    mockQuestions(['3000', '1,2,3,7,10,11', '12']);
    const logs = [
      '3개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 6]',
      '[1, 2, 3, 7, 8, 9]',
      '[7, 8, 9, 10, 11, 12]',
      '3개 일치 (5,000원) - 2개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 2,000.0%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
