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

test("로또 구매 금액이 1000원 단위인지 테스트", () => {
    mockQuestions(["1600"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 구입 금액은 1000원 단위로만 구매 가능합니다.");
  });

  test("로또 구매 금액이 숫자인지 테스트", () => {
    mockQuestions(["13000원"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 문자를 입력하셨습니다. 숫자를 입력하셔야 합니다.");
  });