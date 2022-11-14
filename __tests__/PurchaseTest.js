const Validation = require("../src/Validation.js");

describe("로또 구입 입력 예외 테스트", () => {
  test("문자열이 포함되면 예외가 발생한다.", () => {
    expect(() => {
      const input = "8000원";
      Validation.validPurchase(input);
    }).toThrow("[ERROR]");
  });
  test("1000 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const input = "8200";
      Validation.validPurchase(input);
    }).toThrow("[ERROR]");
  });
});
