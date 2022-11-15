const MoneyValidator = require("../src/components/MoneyValidator");

describe("구입 금액 예외 확인", () => {
  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new MoneyValidator("가나다라");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new MoneyValidator("");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new MoneyValidator(" ");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new MoneyValidator("99999");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 음수이면 예외가 발생한다.", () => {
    expect(() => {
      new MoneyValidator("-12000");
    }).toThrow("[ERROR]");
  });
});
