const LottoMachine = require("../src/LottoMachine");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe('구입 금액 입력 테스트', () => {
  test('1,000원 단위로 입력하지 않으면 에러가 발생한다.', () => {
    const input = ['10100'];
    mockQuestions(input)

    expect(() => {
      const machine = new LottoMachine();
      machine.inputMoney();
    }).toThrow('[ERROR] 1,000원 단위의 금액을 투입해주세요.');
  });
  MissionUtils.Console.close();
});
