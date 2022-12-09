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

  test("기능 테스트 - 6개 일치 1개, 5개 일치 보너스 볼 일치 1개 ", () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 6, 4, 2, 7],
    ]);
    mockQuestions(["4000", "1,2,3,4,5,6", "7"]);
    const logs = [
      "4개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "[7, 11, 30, 40, 42, 43]",
      "[2, 13, 22, 32, 38, 45]",
      "[1, 3, 6, 4, 2, 7]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 1개",
      "총 수익률은 50750000.0%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 - 3개 이상 일치하는 게 없는 경우, 그러나 보너스 볼은 2개 일치", () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 6, 4, 2, 7],
    ]);
    mockQuestions(["4000", "41,8,9,10,20,16", "6"]);
    const logs = [
      "4개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "[7, 11, 30, 40, 42, 43]",
      "[2, 13, 22, 32, 38, 45]",
      "[1, 3, 6, 4, 2, 7]",
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

  test("기능 테스트 - 5개 일치 보너스 볼 일치 4개 ", () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 6, 4, 5, 3],
      [2, 1, 3, 4, 5, 6],
      [1, 2, 4, 3, 5, 6],
    ]);
    mockQuestions(["4000", "1,2,3,4,5,7", "6"]);
    const logs = [
      "4개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 6, 4, 5, 3]",
      "[2, 1, 3, 4, 5, 6]",
      "[1, 2, 4, 3, 5, 6]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 4개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 3000000.0%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트 - 1000으로 나누어지는 숫자가 아닌 경우", () => {
    mockQuestions(["1000j"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("예외 테스트 - 보너스볼이 정답에 포함 되어있는 경우", () => {
    mockQuestions(["4000", "1,40,45,23,41,10", "10"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("예외 테스트 - 길이가 6이 아닌 경우", () => {
    mockQuestions(["6000", "1,40,45,23,41,10,6"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("예외 테스트 - 중복된 숫자가 들어온 경우", () => {
    mockQuestions(["6000", "1,40,45,45,41,10"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("예외 테스트 - 유효 범위가 아닌 숫자가 들어온 경우", () => {
    mockQuestions(["6000", "1,40,46,0,10,6"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });


});
