const App = require("../src/App");
const User = require('../src/User');
const Lotto = require('../src/Lotto');
const Raffle = require('../src/Raffle');
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
  test("예외 테스트1(1000으로 나눠지는 음수의 금액)", () => {
    mockQuestions(["-1000"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("예외 테스트2(1000으로 나누었을 때 0이 되는 금액)", () => {
    mockQuestions(["0"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("예외 테스트3(범주를 벗어난 당첨 번호)", () => {
    mockQuestions(["1000", "1,2,3,4,5,46"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("예외 테스트4(범주를 벗어난 당첨 번호)", () => {
    mockQuestions(["1000", "1,2,3,4,5,0"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("예외 테스트5(당첨 번호에 이미 존재하는 보너스 번호)", () => {
    mockQuestions(["1000", "1,2,3,4,5,0", "2"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("로또 번호 오름차순 정렬 테스트", () => {
    mockRandoms([
      [8, 21, 23, 4, 42, 43],
      [1, 2, 11, 16, 3, 38],
      [7, 11, 39, 35, 36, 44]
    ]);
    mockQuestions(["3000", "1,2,3,4,5,6", "7"]);
    const logs = [
      "[4, 8, 21, 23, 42, 43]",
      "[1, 2, 3, 11, 16, 38]",
      "[7, 11, 35, 36, 39, 44]"
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("당첨 통계 테스트1", () => {
    mockRandoms([
      [4, 8, 21, 23, 42, 43],
      [1, 2, 3, 11, 16, 38],
      [7, 11, 35, 36, 39, 44]
    ]);
    mockQuestions(["3000", "39,4,11,35,36,7", "44"]);
    const logs = [
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 1000000%입니다."
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("당첨 통계 테스트2", () => {
    mockRandoms([
      [4, 8, 21, 23, 42, 43],
      [1, 2, 3, 11, 16, 45],
      [2, 11, 35, 36, 39, 44]
    ]);
    mockQuestions(["3000", "1,2,11,16,44,45", "9"]);
    const logs = [
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 50166.67%입니다."
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [2, 5, 8, 10, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [1, 2, 3, 30, 40, 45]
    ]);
    mockQuestions(["5000", "2,3,11,31,41,45", "42"]);
    const logs = [
      "5개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[2, 5, 8, 10, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "[1, 2, 3, 30, 40, 45]",
      "3개 일치 (5,000원) - 2개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 200%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
