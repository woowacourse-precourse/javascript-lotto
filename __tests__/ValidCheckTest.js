const ValidCheckUtils = require("../src/utils/ValidCheckUtils");

describe("입력값 유효성 테스트", () => {
  test("구입 금액에 숫자가 아닌 값이 입력되면 에러를 발생시킨다.", () => {
    expect(() => {
      ValidCheckUtils.checkPay("100j");
    }).toThrow();
  });

  test("구입 금액에 1000원 단위가 아닌 값이 입력되면 에러를 발생시킨다.", () => {
    expect(() => {
      ValidCheckUtils.checkPay("100");
    }).toThrow();
  });
});
