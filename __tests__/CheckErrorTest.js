const CheckError = require("../src/CheckError.js");

describe("CheckError 클래스 테스트", () => {
  test("구입 금액이 1,000원으로 나누어 떨어지지 않는 경우 예외 처리.", () => {
    expect(() => {
      CheckError.checkPurchaseAmount(1100);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 숫자가 아닌 경우 예외 처리 - 문자", () => {
    expect(() => {
      CheckError.checkPurchaseAmount("aa");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 숫자가 아닌 경우 예외 처리 - 공백", () => {
    expect(() => {
      CheckError.checkPurchaseAmount("");
    }).toThrow("[ERROR]");
  });
});
