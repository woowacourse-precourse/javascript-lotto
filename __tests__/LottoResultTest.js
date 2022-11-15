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
  test("출력 내용 테스트", () => {
    mockRandoms([
      [1, 6, 10, 32, 41, 45],
      [2, 3, 5, 9, 22, 30],
      [3, 6, 10, 32, 34, 35],
      [2, 5, 11, 20, 31, 42],
      [8, 15, 17, 31, 34, 38],
      [4, 10, 11, 22, 23, 35],
      [1, 6, 10, 32, 41, 39],
      [8, 16, 25, 31, 33, 41],
      [1, 2, 3, 27, 30, 38],
      [6, 16, 20, 41, 43, 45],
      [4, 7, 9, 10, 15, 29],
      [6, 9, 14, 15, 19, 30],
      [4, 5, 6, 23, 35, 44],
    ]);
    mockQuestions(["13000", "2,3,9,22,30,45", "34"]);
    const logs = [
      "13개를 구매했습니다.",
      "[1, 6, 10, 32, 41, 45]",
      "[2, 3, 5, 9, 22, 30]",
      "[3, 6, 10, 32, 34, 35]",
      "[2, 5, 11, 20, 31, 42]",
      "[8, 15, 17, 31, 34, 38]",
      "[4, 10, 11, 22, 23, 35]",
      "[1, 6, 10, 32, 41, 39]",
      "[8, 16, 25, 31, 33, 41]",
      "[1, 2, 3, 27, 30, 38]",
      "[6, 16, 20, 41, 43, 45]",
      "[4, 7, 9, 10, 15, 29]",
      "[6, 9, 14, 15, 19, 30]",
      "[4, 5, 6, 23, 35, 44]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 11576.923076923078%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

});
