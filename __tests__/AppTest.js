const MissionUtils = require("@woowacourse/mission-utils");

const App = require("../src/App");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("App 클래스 도메인 기능 테스트", () => {
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

  const app = new App();

  test("구매자의 로또 1개의 번호가 당첨 번호와 일치하는 확인하는 테스트", () => {
    expect(app.checkWinningNumber([1, 3, 5, 14, 22, 45])).toBe(3);
  });

  test("구매자의 전체 로또 번호와 보너스 번호가 당첨 번호와 일치하는 확인하는 테스트", () => {
    app.compareLottos();

    expect(app.winningResults[7].winningNumbers).toBe(3);
  });

  test("로또 당첨 통계를 모으는 테스트", () => {
    const [winThree] = app.gatherWinningResult();
    expect(winThree).toBe(1);
  });
});
