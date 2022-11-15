const Amount = require("../src/Amount");

describe("구매 금액 테스트", () => {
  test("구매 금액이 1000원 단위가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Amount(1100);
    }).toThrow("[ERROR]");
  });
  test("구매 금액이 숫자가 아닐경우 예외가 발생한다.", () => {
    expect(() => {
      new Amount("I000");
    }).toThrow("[ERROR]");
  });
});
