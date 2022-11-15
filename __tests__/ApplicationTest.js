/* eslint-disable */
const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const { ERROR_MESSAGES } = require("../src/Constants");

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

describe("로또 테스트", () => {
  test("기능 테스트1", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(["8000", "1,2,3,4,5,6", "7"]);
    const logs = [
      "8개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "[13, 14, 16, 38, 42, 45]",
      "[7, 11, 30, 40, 42, 43]",
      "[2, 13, 22, 32, 38, 45]",
      "[1, 3, 5, 14, 22, 45]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 62.5%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트2", () => {
    mockRandoms([
      [11, 19, 28, 34, 39, 40],
      [23, 26, 30, 31, 37, 39],
      [14, 19, 28, 41, 43, 44],
      [1, 11, 13, 23, 28, 43],
      [4, 6, 11, 12, 24, 38],
      [7, 21, 24, 31, 32, 41],
      [20, 32, 35, 39, 43, 44],
      [2, 10, 20, 26, 27, 42],
      [4, 5, 12, 21, 27, 41],
      [9, 14, 28, 29, 38, 42],
      [9, 10, 11, 15, 32, 38],
    ]);
    mockQuestions(["11000", "8,11,19,25,37,43", "33"]);
    const logs = [
      "11개를 구매했습니다.",
      "[11, 19, 28, 34, 39, 40]",
      "[23, 26, 30, 31, 37, 39]",
      "[14, 19, 28, 41, 43, 44]",
      "[1, 11, 13, 23, 28, 43]",
      "[4, 6, 11, 12, 24, 38]",
      "[7, 21, 24, 31, 32, 41]",
      "[20, 32, 35, 39, 43, 44]",
      "[2, 10, 20, 26, 27, 42]",
      "[4, 5, 12, 21, 27, 41]",
      "[9, 14, 28, 29, 38, 42]",
      "[9, 10, 11, 15, 32, 38]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 0.0%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트3", () => {
    mockRandoms([[40, 41, 42, 43, 44, 45]]);
    mockQuestions(["1000", "40,41,42,43,44,45", "1"]);
    const logs = [
      "1개를 구매했습니다.",
      "[40, 41, 42, 43, 44, 45]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 1개",
      "총 수익률은 200000000.0%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트1 - PurChase", () => {
    mockQuestions(["1000j"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(ERROR_MESSAGES.INVALID_COST_TYPE);
  });
});
