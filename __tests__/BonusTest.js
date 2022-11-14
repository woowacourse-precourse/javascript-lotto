const Validation = require("../src/Validation.js");

describe("당첨 번호 입력 예외 테스트", () => {
  test("숫자가 아닌 값이 들어오면 예외가 발생한다", () => {
    expect(() => {
      Validation.validBonus("a");
    }).toThrow("[ERROR]");
  });
});
