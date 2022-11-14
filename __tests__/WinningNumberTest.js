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
    }).toThrow("[ERROR] 숫자를 입력해주세요.");
  });

  test("숫자 외 다른 문자가 있으면 예외가 발생한다. - 특수문자", () => {
    const input = ["1,!,3,4,5,6"];
    mockQuestions(input)

    expect(() => {
      const manager = new LottoManager();
      manager.inputWinningNumbers();
    }).toThrow("[ERROR] 숫자를 입력해주세요.");
  });

  test("6개를 입력하지 않으면 예외가 발생한다. - 6개 미만", () => {
    const input = ["1,2,3,4"];
    mockQuestions(input)

    expect(() => {
      const manager = new LottoManager();
      manager.inputWinningNumbers();
    }).toThrow("[ERROR] 6개의 당첨 번호를 입력해주세요.");
  });

  test("6개를 입력하지 않으면 예외가 발생한다. - 6개 초과", () => {
    const input = ["1,2,3,4,5,6,7"];
    mockQuestions(input)

    expect(() => {
      const manager = new LottoManager();
      manager.inputWinningNumbers();
    }).toThrow("[ERROR] 6개의 당첨 번호를 입력해주세요.");
  });

  test("중복이 있는 경우 예외가 발생한다.", () => {
    const input = ["1,2,3,3,4,5"];
    mockQuestions(input)

    expect(() => {
      const manager = new LottoManager();
      manager.inputWinningNumbers();
    }).toThrow("[ERROR] 당첨 번호를 중복 없이 입력해주세요.");
  });

  test("1부터 45사이의 값이 아닌 경우 예외가 발생한다.", () => {
    const input = ["0,2,3,4,5,46"];
    mockQuestions(input)

    expect(() => {
      const manager = new LottoManager();
      manager.inputWinningNumbers();
    }).toThrow("[ERROR] 1부터 45사이의 숫자를 입력해주세요.");
  });
  MissionUtils.Console.close();
});
