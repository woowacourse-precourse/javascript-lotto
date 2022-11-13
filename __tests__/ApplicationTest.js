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
  test("기능 테스트", () => {
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

  test("예외 테스트", () => {
    mockQuestions(["1000j"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("로또 수량 및 발행 테스트", () => {
    mockRandoms([
      [1, 2, 3, 10, 15, 42],
      [4, 11, 17, 24, 29, 44],
      [1, 13, 17, 29, 32, 40],
      [1, 3, 5, 13, 23, 40],
      [5, 6, 11, 31, 32, 33],
    ]);
    mockQuestions(["5000"]);
    const logs = [
      "5개를 구매했습니다.",
      "[1, 2, 3, 10, 15, 42]",
      "[4, 11, 17, 24, 29, 44]",
      "[1, 13, 17, 29, 32, 40]",
      "[1, 3, 5, 13, 23, 40]",
      "[5, 6, 11, 31, 32, 33]",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("로또 수량 및 발행 테스트2", () => {
    mockRandoms([
      [3, 16, 23, 29, 35, 44],
      [13, 18, 28, 32, 34, 43],
      [13, 14, 17, 36, 37, 44],
      [14, 15, 19, 23, 25, 27],
      [6, 8, 9, 16, 29, 39],
      [1, 2, 13, 31, 33, 35],
      [11, 14, 25, 27, 32, 42],
      [1, 2, 6, 13, 21, 44],
      [1, 23, 32, 35, 41, 43],
      [8, 15, 18, 19, 28, 39],
    ]);
    mockQuestions(["10000"]);
    const logs = [
      "10개를 구매했습니다.",
      "[3, 16, 23, 29, 35, 44]",
      "[13, 18, 28, 32, 34, 43]",
      "[13, 14, 17, 36, 37, 44]",
      "[14, 15, 19, 23, 25, 27]",
      "[6, 8, 9, 16, 29, 39]",
      "[1, 2, 13, 31, 33, 35]",
      "[11, 14, 25, 27, 32, 42]",
      "[1, 2, 6, 13, 21, 44]",
      "[1, 23, 32, 35, 41, 43]",
      "[8, 15, 18, 19, 28, 39]",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외 발생", () => {
    const ERROR_MESSAGE = "[ERROR] 당첨 번호와 중복되지 않는 번호를 입력해주세요.";
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);
    mockQuestions(["3000", "11,12,13,14,15,16", "12"]);
    const logs = [
      "3개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
    ];
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
});
