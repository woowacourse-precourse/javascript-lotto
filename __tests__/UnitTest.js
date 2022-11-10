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

describe("구입 금액 테스트", () => {
  mockQuestions(["8000", "8500", "12300", "Not Number"]);

  test("정상 입력 (8000).", () => {
    const app = new App();
    expect(() => {
      app.askHowMuchBuy();
    }).not.toThrow("[ERROR]");
    expect(app.amountBought).toBe(8000);
  });

  test("비정상 입력 (8500).", () => {
    expect(() => {
      const app = new App();
      app.askHowMuchBuy();
    }).toThrow("[ERROR]");
  });

  test("비정상 입력 (12300).", () => {
    expect(() => {
      const app = new App();
      app.askHowMuchBuy();
    }).toThrow("[ERROR]");
  });

  test("비정상 입력 (Not Number).", () => {
    expect(() => {
      const app = new App();
      app.askHowMuchBuy();
    }).toThrow("[ERROR]");
  });

  MissionUtils.Console.close();
});
