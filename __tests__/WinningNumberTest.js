const LottoManager = require("../src/LottoManager");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("당첨 번호 입력 테스트", () => {
  test("숫자 외 다른 문자가 있으면 예외가 발생한다. - 알파벳", () => {
    const input = ["1,2,3,4,a,6"];
    mockQuestions(input)

    expect(() => {
      const manager = new LottoManager();
      manager.inputWinningNumbers();
    }).toThrow("[ERROR]");
  });

  test("숫자 외 다른 문자가 있으면 예외가 발생한다. - 특수문자", () => {
    const input = ["1,!,3,4,5,6"];
    mockQuestions(input)

    expect(() => {
      const manager = new LottoManager();
      manager.inputWinningNumbers();
    }).toThrow("[ERROR]");
  });
  
});
