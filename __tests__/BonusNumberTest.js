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

describe('보너스 번호 입력 테스트', () => {
  test('숫자가 아닌 경우 예외가 발생한다. - 알파벳', () => {
    mockQuestions(["1,2,3,4,5,6", 'a']);

    expect(() => {
      const manager = new LottoManager();
      manager.inputWinningNumbers();
    }).toThrow('[ERROR] 숫자를 입력해주세요.');
  });

  test('숫자가 아닌 경우 예외가 발생한다. - 특수문자', () => {
    mockQuestions(["1,2,3,4,5,6", '!']);

    expect(() => {
      const manager = new LottoManager();
      manager.inputWinningNumbers();
    }).toThrow('[ERROR] 숫자를 입력해주세요.');
  });

  test('1부터 45사이의 값이 아닌 경우 예외가 발생한다. - 1미만', () => {
    mockQuestions(["1,2,3,4,5,6", 0]);

    expect(() => {
      const manager = new LottoManager();
      manager.inputWinningNumbers();
    }).toThrow('[ERROR] 1부터 45사이의 숫자를 입력해주세요.');
  });

  test('1부터 45사이의 값이 아닌 경우 예외가 발생한다. - 45초과', () => {
    mockQuestions(["1,2,3,4,5,6", 46]);

    expect(() => {
      const manager = new LottoManager();
      manager.inputWinningNumbers();
    }).toThrow('[ERROR] 1부터 45사이의 숫자를 입력해주세요.');
  });

  test('당첨 번호와 중복인 경우 예외가 발생한다.', () => {
    mockQuestions(["1,2,3,4,5,6", 3]);

    expect(() => {
      const manager = new LottoManager();
      manager.inputWinningNumbers();
    }).toThrow('[ERROR] 당첨 번호와 중복되지 않게 입력해주세요.');
  });
  MissionUtils.Console.close();
});
