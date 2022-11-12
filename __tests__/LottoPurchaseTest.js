const LottoPurchase = require("../src/LottoPurchaseTest");

describe("LottoPurchase 클래스 테스트", () => {
  test("로또 구입 금액이 1,000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoPurchase(1100);
    }).toThrow("[ERROR]");
  });
});