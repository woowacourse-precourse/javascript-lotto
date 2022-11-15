const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const { ERROR } = require("../src/utils/constants");

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
      [1, 5, 9, 15, 29, 32],
      [8, 12, 19, 26, 29, 40],
      [7, 11, 16, 35, 40, 44],
      [1, 10, 11, 29, 40, 42],
      [13, 14, 16, 28, 42, 45],
    ]);
    mockQuestions(["5000", "1,5,8,11,29,40", "7"]);
    const logs = [
      "5개를 구매했습니다.",
      "[1, 5, 9, 15, 29, 32]", 
      "[8, 12, 19, 26, 29, 40]", 
      "[7, 11, 16, 35, 40, 44]",
      "[1, 10, 11, 29, 40, 42]", 
      "[13, 14, 16, 28, 42, 45]",
      "3개 일치 (5,000원) - 2개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 1200.0%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("[예외 테스트]", () => {
    mockQuestions(["1000j"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(ERROR.ISNAN);
  });
});

describe("당첨 번호 입력 테스트", () => {
  test("당첨 번호가 6개가 아닌 경우]", () => {
    mockQuestions(["1,3,4,5"]);
    expect(() => {
      const app = new App();
      app.askWinningNumber();
    }).toThrow(ERROR.COUNT);
  });

  test("당첨 번호에 문자를 입력한 경우]", () => {
    mockQuestions(["1,3,4,5,40,+"]);
    expect(() => {
      const app = new App();
      app.askWinningNumber();
    }).toThrow(ERROR.ISNAN);
  });

  test("당첨 번호에 중복이 존재하는 경우]", () => {
    mockQuestions(["1,3,4,5,40,40"]);
    expect(() => {
      const app = new App();
      app.askWinningNumber();
    }).toThrow(ERROR.DUPLICATED);
  });

  test("당첨 번호가 범위가 1~45를 벗어난 경우]", () => {
    mockQuestions(["1,3,4,5,48,40"]);
    expect(() => {
      const app = new App();
      app.askWinningNumber();
    }).toThrow(ERROR.RANGE);
  });
});

describe("보너스 번호 입력 테스트", () => {
  test("보너스 번호가 문자인 경우", () => {
    mockQuestions(["one"]);
    expect(() => {
      const app = new App();
      app.askBonusNumber();
    }).toThrow(ERROR.ISNANS);
  });

  test("보너스 번호의 범위가 1~45를 벗어난 경우", () => {
    mockQuestions(["65"]);
    expect(() => {
      const app = new App();
      app.askBonusNumber();
    }).toThrow(ERROR.RANGE);
  });
});
