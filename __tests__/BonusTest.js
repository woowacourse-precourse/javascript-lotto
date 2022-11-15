const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("보너스 테스트", () => {
  test("보너스 번호에 숫자가 아닌 다른 문자가 들어오면 예외가 발생한다.", () => {
    expect(() => {
      mockQuestions(["8000", "1,2,3,4,5,6", "r"]);
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      mockQuestions(["8000", "1,2,3,4,5,6", "6"]);
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("보너스 번호에 숫자가 2개 이상 들어가면 예외가 발생한다.", () => {
    expect(() => {
      mockQuestions(["8000", "1,2,3,4,5,6", "1,2"]);
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  MissionUtils.Console.close();
});
