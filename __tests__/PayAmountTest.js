const PayAmount = require("../src/controller/PayAmount")

describe("지불금액 클래스 테스트", () => {
  test("지불 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const payAmount = new PayAmount({});
      payAmount.validInput('a100')
    }).toThrow("[ERROR]");
  });

  test("지불 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const payAmount = new PayAmount({});
      payAmount.validPaid(100)
    }).toThrow("[ERROR]");
  });
});