const Validator = require("../src/Validator");

describe("로또 구입 입력 예외 테스트", () => {
  test("문자열이 포함되면 예외가 발생한다.", () => {
    expect(() => {
      const input = "8000원";
      Validator.purchaseInput(input);
    }).toThrow("[ERROR]");
  });
  test("1000 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const input = "1111";
      Validator.purchaseInput(input);
    }).toThrow("[ERROR]");
  });
});
