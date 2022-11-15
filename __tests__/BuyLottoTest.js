const BuyLotto = require("../src/BuyLotto");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("구매 금액 테스트", () => {
  test("구매 금액이 1000원 단위가 아닐 경우", () => {
    mockQuestions(["12500"]);
    expect(() => {
      const buy = new BuyLotto();
      buy.inputAmount();
    }).toThrow("[ERROR] 1,000원 단위로 구입 가능합니다.");
  });

  test("구매 금액이 1000원 미만일 경우", () => {
    mockQuestions(["500"]);
    expect(() => {
      const buy = new BuyLotto();
      buy.inputAmount();
    }).toThrow("[ERROR] 1,000원 단위로 구입 가능합니다.");
  });
});

