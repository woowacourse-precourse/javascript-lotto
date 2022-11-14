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

describe('My Acceptance test', () => {
  test('오류없이 정상 종료되는 시나리오', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [1, 2, 4, 5, 6, 7],
      [7, 11, 16, 35, 36, 44],
      [1, 2, 3, 4, 5, 6],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['5000', '1,2,3,4,5,6', '7']);
    const logs = [
      '5개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[1, 2, 4, 5, 6, 7]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 2, 3, 4, 5, 6]',
      '[1, 3, 5, 14, 22, 45]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 40600100.0%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
