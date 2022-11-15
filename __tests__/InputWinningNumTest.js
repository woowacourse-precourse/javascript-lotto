const InputWinningNum = require("../src/InputWinningNum");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
    MissionUtils.Console.readLine = jest.fn();
    answers.reduce((acc, input) => {
      return acc.mockImplementationOnce((question, callback) => {
        callback(input);
      });
    }, MissionUtils.Console.readLine);
  };

describe("보너스 번호 값 테스트", () => {
    test("보너스 번호가 1개가 아닌 경우 예외 처리 ", () => {
        mockQuestions(["1,2"]);
        const inputWinningNum = new InputWinningNum();
        expect(() => {
            inputWinningNum.bonusNumber();
        }).toThrow("[ERROR]");
    });

    test("보너스 번호가 빈칸인 경우 예외 처리", () => {
        mockQuestions([""]);
        const inputWinningNum = new InputWinningNum();
        expect(() => {
            inputWinningNum.bonusNumber();
        }).toThrow("[ERROR]");
    });
});