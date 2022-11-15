const Validate = require("../src/Validate");

describe("ValidateTest", () => {
  test("구입 금액이 1000원으로 나누어떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      const validate = new Validate();
      validate.validateAmount(3400);
    }).toThrow("[ERROR]");
  });
  test("구입 금액에 공백이 포함되면 예외가 발생한다.", () => {
    expect(() => {
      const validate = new Validate();
      validate.validateAmount(" ");
    }).toThrow("[ERROR]");
  });
  test("구입 금액을 입력하지 않고 enter를 치면 예외가 발생한다", () => {
    expect(() => {
      const validate = new Validate();
      validate.validateAmount("");
    }).toThrow("[ERROR]");
  });
  test("구입 금액이 0이면 예외가 발생한다", () => {
    expect(() => {
      const validate = new Validate();
      validate.validateAmount(0);
    }).toThrow("[ERROR]");
  });
  test("구입 금액이 음수이면 예외가 발생한다", () => {
    expect(() => {
      const validate = new Validate();
      validate.validateAmount(-3000);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호의 범위가 유효하지 않으면 예외가 발생한다.", () => {
    expect(() => {
      const validate = new Validate();
      validate.validateBonusNumber(46);
    }).toThrow("[ERROR]");
  });
});
