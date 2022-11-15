const UserNumber = require("../src/model/UserNumber");

describe("UserNumber 유저 구입금액 관련 테스트", () => {
  const userNumber = new UserNumber();

  test("유저 구입금액이 1000원으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      userNumber.validatePurchasingAmount(1200);
    }).toThrow("[ERROR]");
  });

  test("유저 구입금액이 빈문자열이라면 예외가 발생한다.", () => {
    expect(() => {
      userNumber.validatePurchasingAmount("");
    }).toThrow("[ERROR]");
  });

  test("유저 구입금액이 정수가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      userNumber.validatePurchasingAmount("이승환");
    }).toThrow("[ERROR]");
  });
});
