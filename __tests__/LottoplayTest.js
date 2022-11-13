const MissionUtils = require("@woowacourse/mission-utils");
const LottoPlay = require("../src/Lottoplay");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("LottoplayTest", () => {
  test("구입 금액이 1000원으로 나누어떨어지지 않으면 예외가 발생한다.", () => {
    mockQuestions(["3400"]);
    expect(() => {
      const lottoplay = new LottoPlay();
      lottoplay;
    }).toThrow("[ERROR]");
  });
});
