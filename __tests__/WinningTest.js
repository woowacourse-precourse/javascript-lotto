const Validation = require("../src/Validation.js");

describe("당첨 번호 입력 예외 테스트", () => {
  test("숫자가 아닌 값이 들어오면 예외가 발생한다", () => {
    expect(() => {
      Validation.validWinning("1,2,q,4,5,6");
    }).toThrow("[ERROR]");
  });
  test("6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      Validation.validWinning("1,2,3,4,5,6,7");
    }).toThrow("[ERROR]");
  });
  test("중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      Validation.validWinning("1,1,2,3,4,5");
    }).toThrow("[ERROR]");
  });
});
