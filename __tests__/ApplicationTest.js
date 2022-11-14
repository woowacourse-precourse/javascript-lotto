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

describe("[ 정상 기능 테스트 ]", () => {
  test("정상 테스트 1 : 수익률이 중간 값 정도 일때", () => {
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

  test("정상 테스트 2 : 수익률이 높을 때", () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30],
      [31, 32, 33, 34, 35, 36],
      [37, 38, 39, 40, 41, 42],
      [43, 44, 45, 1, 2, 3],
    ]);
    mockQuestions(["8000", "1,2,3,4,5,6", "45"]);
    const logs = [
      "8개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "[7, 8, 9, 10, 11, 12]",
      "[13, 14, 15, 16, 17, 18]",
      "[19, 20, 21, 22, 23, 24]",
      "[25, 26, 27, 28, 29, 30]",
      "[31, 32, 33, 34, 35, 36]",
      "[37, 38, 39, 40, 41, 42]",
      "[43, 44, 45, 1, 2, 3]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 1개",
      "총 수익률은 25,000,625.0%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("정상 테스트 3 : 수익률이 0.0% 일때", () => {
    mockRandoms([
      [5, 9, 10, 15, 23, 40],
      [3, 4, 9, 32, 35, 42],
      [13, 14, 19, 20, 21, 29],
    ]);
    mockQuestions(["3000", "7,9,11,16,30,39", "41"]);
    const logs = [
      "3개를 구매했습니다.",
      "[5, 9, 10, 15, 23, 40]",
      "[3, 4, 9, 32, 35, 42]",
      "[13, 14, 19, 20, 21, 29]",
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

  test("정상 테스트 4 : 수익률이 100.0% 일때", () => {
    mockRandoms([
      [5, 9, 10, 21, 23, 40],
      [3, 4, 9, 32, 35, 42],
      [13, 14, 19, 20, 21, 29],
      [13, 24, 30, 33, 43, 45],
      [1, 2, 6, 15, 30, 41],
    ]);
    mockQuestions(["5000", "5,9,10,20,30,39", "41"]);
    const logs = [
      "5개를 구매했습니다.",
      "[5, 9, 10, 21, 23, 40]",
      "[3, 4, 9, 32, 35, 42]",
      "[13, 14, 19, 20, 21, 29]",
      "[13, 24, 30, 33, 43, 45]",
      "[1, 2, 6, 15, 30, 41]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 100.0%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
