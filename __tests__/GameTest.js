const Game = require("../src/Game");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("유틸 함수 테스트", () => {
  const game = new Game();
  test("로또 구입 금액이 1,000으로 나누어 떨어지지 않는 경우 예외가 발생한다.", () => {
    mockQuestions(["3"]);
    expect(() => {
      game.inputMoney();
    }).toThrow("[ERROR]");
  });

  test("로또 구입 금액이 1,000으로 나누어 떨어지지 않는 경우 예외가 발생한다.", () => {
    mockQuestions(["2jk0"]);
    expect(() => {
      game.inputMoney();
    }).toThrow("[ERROR]");
  });
});
