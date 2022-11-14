const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

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
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('당첨 결과 테스트', () => {
  test('결과 테스트 1 (5개 => 1등 1개, 3등 1개 5등 2개)', () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 43],
      [1, 3, 5, 13, 33, 38],
      [1, 3, 5, 14, 22, 45],
      [8, 9, 10, 11, 12, 13]
    ]);
    mockQuestions(['5000', '1,2,3,4,5,6', '7']);
    const logs = [
      '3개 일치 (5,000원) - 2개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('결과 테스트 2 (8개 => 2등 1개, 4등 1개)', () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 7],
      [11, 12, 13, 14, 15, 16],
      [1, 3, 4, 5, 33, 38],
      [31, 33, 35, 37, 42, 45],
      [21, 23, 25, 26, 30, 31],
      [22, 23, 24, 26, 33, 39],
      [30, 31, 34, 38, 39, 43],
      [11, 23, 25, 30, 44, 45],
    ]);
    mockQuestions(['8000', '1,2,3,4,5,6', '7']);
    const logs = [
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
