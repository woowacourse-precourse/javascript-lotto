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

describe("로또 테스트", () => {
  test("기능 테스트 5등", () => {
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

  test("기능 테스트 4등", () => {
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
    mockQuestions(["8000", "8,21,23,41,44,45", "7"]);
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
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 625.0%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 3등", () => {
    mockRandoms([
      [5, 15, 29, 33, 39, 45],
      [3, 10, 21, 22, 36, 44],
      [3, 14, 20, 28, 31, 38],
      [8, 26, 28, 33, 37, 38],
      [7, 14, 27, 36, 38, 44],
      [13, 21, 27, 33, 38, 41],
      [1, 13, 20, 30, 34, 39],
      [3, 4, 6, 9, 15, 16],
    ]);
    mockQuestions(["8000", "5,15,29,33,39,44", "6"]);
    const logs = [
      "8개를 구매했습니다.",
      "[5, 15, 29, 33, 39, 45]",
      "[3, 10, 21, 22, 36, 44]",
      "[3, 14, 20, 28, 31, 38]",
      "[8, 26, 28, 33, 37, 38]",
      "[7, 14, 27, 36, 38, 44]",
      "[13, 21, 27, 33, 38, 41]",
      "[1, 13, 20, 30, 34, 39]",
      "[3, 4, 6, 9, 15, 16]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 18750.0%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 2등", () => {
    mockRandoms([
      [3, 8, 23, 37, 42, 44],
      [4, 5, 7, 24, 29, 42],
      [1, 3, 6, 15, 25, 41],
      [4, 10, 19, 36, 37, 39],
      [1, 2, 3, 7, 20, 42],
      [5, 15, 18, 28, 30, 31],
      [12, 13, 21, 24, 29, 38],
      [1, 8, 20, 29, 39, 41],
      [8, 26, 27, 31, 35, 37],
      [2, 3, 17, 19, 29, 44],
    ]);
    mockQuestions(["10000", "2,3,17,19,29,45", "44"]);
    const logs = [
      "10개를 구매했습니다.",
      "[3, 8, 23, 37, 42, 44]",
      "[4, 5, 7, 24, 29, 42]",
      "[1, 3, 6, 15, 25, 41]",
      "[4, 10, 19, 36, 37, 39]",
      "[1, 2, 3, 7, 20, 42]",
      "[5, 15, 18, 28, 30, 31]",
      "[12, 13, 21, 24, 29, 38]",
      "[1, 8, 20, 29, 39, 41]",
      "[8, 26, 27, 31, 35, 37]",
      "[2, 3, 17, 19, 29, 44]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 300000.0%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 1등", () => {
    mockRandoms([
      [2, 7, 9, 18, 19, 32],
      [2, 17, 23, 26, 39, 44],
    ]);
    mockQuestions(["2000", "2,7,9,18,19,32", "31"]);
    const logs = [
      "2개를 구매했습니다.",
      "[2, 7, 9, 18, 19, 32]",
      "[2, 17, 23, 26, 39, 44]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 1개",
      "총 수익률은 100000000.0%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("구매금액 입력 예외", () => {
    mockQuestions(["1000j"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("1000으로 나누어 떨어지지 않는 수", () => {
    mockQuestions(["100"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
});
