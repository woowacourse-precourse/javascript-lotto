const App = require("../src/App");
const Buy = require("../src/Buy");
const Match = require("../src/Match");
const Result = require("../src/Result");

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

  test("로또 발행 횟수 테스트", () => {
    mockQuestions(["5000"]);
    const logs = [
      "5개를 구매했습니다.",
    ];
    const logSpy = getLogSpy();
    const buy = new Buy();
    buy.countCalculate();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("랜덤 넘버 생성 테스트", () => {
    mockRandoms([
      [3, 5, 11, 19, 22, 37],
    ]);
    mockQuestions(["1000"]);
    const logs = [
      "1개를 구매했습니다.",
      "[3, 5, 11, 19, 22, 37]",
    ];
    const logSpy = getLogSpy();
    const buy = new Buy();
    buy.countCalculate();
    buy.randomNumbers();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("당첨 번호 및 보너스 매칭 테스트", () => {
    mockQuestions(["1,2,3,4,5,6", "7"]); 
    const games = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
    ];
    const match = new Match();
    match.countMatchingNumbers(games);
    expect(match.matchRecord).toEqual([0, 0, 1, 1]);
    expect(match.bonusFlag).toBe(1);
  });

  test("랭킹 결과 테스트", () => {
    const record = [0, 0, 1, 1];
    const bonus = 1;
    const logs = [
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];
    const logSpy = getLogSpy();
    const result = new Result;
    result.rankingCalculate(record, bonus);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("수익률 계산 테스트", () => {
    const record = [0, 0, 1, 1];
    const bonus = 1;
    const count = 5;
    const result = new Result();
    result.rankingCalculate(record, bonus);
    result.profitCalculate(count);
    expect(result.profit).toBe(40600000);
  });

});
