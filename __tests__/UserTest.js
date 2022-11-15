const User = require("../src/User");

describe("유저 클래스 에러 테스트", () => {
  const user = new User();

  test("입력 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => user.validatePurchaseAmount("100")).toThrow(
      "[ERROR] 입력 금액은 1000원 단위여야 합니다."
    );
  });

  test("입력 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => user.validatePurchaseAmount("10000k")).toThrow(
      "[ERROR] 입력 금액은 숫자여야 합니다."
    );
  });
});

describe("유저 클래스 로또 구매 기능 테스트", () => {
  const user = new User();

  user.purchaseAmount = 10000;

  test("로또를 구매하는 테스트", () => {
    user.purchaseLottos();
    expect(user.lottos.length).toBe(10);
  });
});
