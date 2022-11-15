const InputMoney = require("../src/InputMoney");

describe("InputMoney 클래스 테스트", () => {
  test("구입 금액이 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new InputMoney(["5000won"]);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 천원 단위가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new InputMoney(["4500"]);
    }).toThrow("[ERROR]");
  });
});