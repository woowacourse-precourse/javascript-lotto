const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((question, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine
  );
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange
  );
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

  test("getCorrectInfo에 2등 로또 번호를 넣어 호출하였을 때, 맞은 번호의 정보(2등)을 반환한다", () => {
    const app = new App();
    app.winningNumbers.addWinningNumbers([1, 2, 3, 4, 5, 6]);
    app.winningNumbers.addBonusNumber(7);
    const result = app.getCorrectInfo([1, 2, 3, 4, 5, 7]);
    expect(result).toEqual({ collectNumber: 5, bonusNumber: true });
  });

  test("plusWinnerCount에 2등 결과를 넣어 호출하였을 때, app의 lottoResults의 2등 카운트(index: 5)를 증가시킨다", () => {
    const app = new App();
    app.plusWinnerCount({ collectNumber: 5, bonusNumber: true });
    const result = app.lottoResults;
    expect(result).toEqual([0, 0, 0, 0, 1]);
  });

  test("getTotalProceed 2등 결과를 넣어 호출하였을 때, 총 수익금을 반환한다", () => {
    const app = new App();
    const result = app.getTotalProceeds([0, 0, 0, 0, 1]);
    expect(result).toEqual(30000000);
  });

  test("changeProceedFormat 총 수입금을 넣어 호출하였을 때, 소숫점 첫번째 까지를 백분률로 표시하는 수익률을 반환한다", () => {
    const app = new App();
    app.user.changeMoney(10000);
    const result = app.changeProceedFormat(5000);
    expect(result).toEqual("50.0");
  });
});
