const UserInputNumber = require("../src/UserInputNumber");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
    MissionUtils.Console.readLine = jest.fn();
    answers.reduce((acc, input) => {
      return acc.mockImplementationOnce((question, callback) => {
        callback(input);
      });
    }, MissionUtils.Console.readLine);
  };

describe("로또 금액 값 테스트", () => {
    test("로또 구입 금액 빈칸 시 에러 발생", () => {
        mockQuestions([""]);
        const userInputNumber = new UserInputNumber();
        expect(() => {
            userInputNumber.userLottoPaymentAmount();
            }).toThrow("[ERROR]");
    });

    test("로또 구입 금액이 1000원 단위가 아닐 경우 에러 발생", () => {
        mockQuestions(["8500"]);
        const userInputNumber = new UserInputNumber();
        expect(() => {
            userInputNumber.userLottoPaymentAmount();
            }).toThrow("[ERROR]");
    });
});