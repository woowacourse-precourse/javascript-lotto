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

  test("기능 테스트2", () => {
    mockRandoms([
      [1, 3, 9, 16, 34, 36],
      [3, 9, 16, 25, 39, 42],
      [3, 9, 16, 34, 39, 42],
      [1, 8, 12, 34, 39, 42], 
      [1, 9, 16, 34, 39, 42],
    ]);
    mockQuestions(["5000", "3,9,16,34,39,42", "25"]);
    const logs = [
      "5개를 구매했습니다.",
      "[1, 3, 9, 16, 34, 36]",
      "[3, 9, 16, 25, 39, 42]",
      "[3, 9, 16, 34, 39, 42]",
      "[1, 8, 12, 34, 39, 42]",
      "[1, 9, 16, 34, 39, 42]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 1개",
      "총 수익률은 40631100%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트", () => {
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
    mockQuestions(["1000j"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 숫자만 입력하세요.");
  });

  test("예외 테스트2", () => {
    mockQuestions(["135031"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 구입 금액은 1000원 단위만 가능합니다.");
  });

  test("예외 테스트3", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
      [2, 7, 10, 13, 36, 40],
    ]);
    mockQuestions(["9000", "0,6,7,17,28,32"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 1 ~ 45 사이의 숫자만 입력하세요.");
  });

  test("예외 테스트4", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);
    mockQuestions(["3000", "6,6,8,10,30,37"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 중복된 숫자가 있습니다.");
  });

  test("예외 테스트5", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);
    mockQuestions(["3000", "6,7,8,10,20,30,37"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("보너스 번호 예외 테스트", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);
    mockQuestions(["3000", "6,7,8,10,20,30", "1z"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 숫자만 입력하세요.");
  });

  test("보너스 번호 예외 테스트2", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);
    mockQuestions(["3000", "6,7,8,10,20,30", "63"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 1 ~ 45 사이의 숫자만 입력하세요.");
  });

  test("보너스 번호 예외 테스트3", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);
    mockQuestions(["3000", "6,7,8,10,20,30", "10"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 당첨 번호에 보너스 숫자가 존재합니다.");
  });
});
