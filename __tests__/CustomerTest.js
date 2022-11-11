const Customer = require("../src/Customer");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answer) => {
  MissionUtils.Console.readLine = jest.fn().mockReturnValue(answer);
};

describe("Feat 1. Customer.buyLotto", () => {
  test("입력된 금액이 천원으로 나누어 떨어진다.", () => {
    mockQuestions("8000");
    const customer = new Customer();
    expect(customer.payMoney()).toBe(8000);
  });

  test("입력된 금액이 천원으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    mockQuestions("8001");
    const customer = new Customer();
    expect(customer.payMoney).toThrow("[ERROR]");
  });
});
