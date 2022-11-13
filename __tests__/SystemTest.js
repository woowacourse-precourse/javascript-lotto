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


describe("시스템 테스트", () => {
    test("사용자 입력 금액이 숫자가 아니면 예외가 발생한다.", () => {
        mockQuestions(["1000e"]);
        expect(() => {
            const app = new App();
            app.play();
        }).toThrow("[ERROR] 숫자를 입력해주세요.");
    });
    test("사용자 입력 금액이 실수이면 예외가 발생한다.", () => {
        mockQuestions(["1000.1"]);
        expect(() => {
            const app = new App();
            app.play();
        }).toThrow("[ERROR] 실수가 아닌 금액을 입력해주세요.");
    });
    test("사용자 입력 금액이 1000원으로 나누어 나머지가 발생한다면 예외가 발생한다.", () => {
        mockQuestions(["1001"]);
        expect(() => {
            const app = new App();
            app.play();
        }).toThrow("[ERROR] 천원 단위의 금액으로 입력해주세요.");
    });
    test("사용자 입력 금액이 1000원 미만이면 예외가 발생한다.", () =>{
        mockQuestions(["500"]);
        expect(() => {
            const app = new App();
            app.play();
        }).toThrow("[ERROR] 천원 이상의 금액을 입력해주세요.");
    });
});