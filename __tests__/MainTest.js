const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

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
      [1, 21, 31, 41, 43, 10],
      [1, 21, 31, 41, 43, 15],
      [1, 21, 31, 41, 43, 3],
      [1, 20, 12, 41, 43, 10],
      [17, 26, 33, 41, 43, 10],
      [1, 2, 31, 4, 43, 29],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(["8000", "1, 21, 31, 41, 43, 10", "15"]);
    const logs = [
      "8개를 구매했습니다.",
      "[1, 10, 21, 31, 41, 43]",
      "[1, 15, 21, 31, 41, 43]",
      "[1, 3, 21, 31, 41, 43]",
      "[1, 10, 12, 20, 41, 43]",
      "[10, 17, 26, 33, 41, 43]",
      "[1, 2, 4, 29, 31, 43]",
      "[2, 13, 22, 32, 38, 45]",
      "[1, 3, 5, 14, 22, 45]",
      "3개 일치 (5,000원) - 2개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 1개",
      "총 수익률은 25394500.0%입니다.",
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
      [1, 3, 5, 14, 22, 45],
      [1, 3, 5, 14, 22, 45],
      [1, 3, 5, 14, 22, 45],
      [1, 3, 5, 11, 23, 33],
      [1, 3, 5, 11, 23, 33],
    ]);
    mockQuestions(["5000", "1, 3, 5, 14, 22, 45", "15"]);
    const logs = [
      "5개를 구매했습니다.",
      "[1, 3, 5, 14, 22, 45]",
      "[1, 3, 5, 14, 22, 45]",
      "[1, 3, 5, 14, 22, 45]",
      "[1, 3, 5, 11, 23, 33]",
      "[1, 3, 5, 11, 23, 33]",
      "3개 일치 (5,000원) - 2개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 3개",
      "총 수익률은 120000200.0%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  test("기능 테스트3", () => {
    mockRandoms([
      [1, 3, 5, 14, 22, 45],
      [1, 3, 5, 14, 22, 45],
      [1, 3, 5, 14, 23, 33],
      [1, 3, 5, 14, 23, 33],
      [1, 3, 5, 14, 23, 33],
    ]);
    mockQuestions(["5000", "1, 2, 3, 4, 6, 7", "15"]);
    const logs = [
      "5개를 구매했습니다.",
      "[1, 3, 5, 14, 22, 45]",
      "[1, 3, 5, 14, 22, 45]",
      "[1, 3, 5, 14, 22, 45]",
      "[1, 3, 5, 14, 23, 33]",
      "[1, 3, 5, 14, 23, 33]",
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
});
