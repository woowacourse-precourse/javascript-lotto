const PurchaseAmount = require("../src/PurchaseAmount");

describe("구매금액 클래스 테스트", () => {
  test("구매금액이 숫자가 아닐 경우 예외가 발생한다.", () => {
    const input = 'adsd'

    expect(() => new PurchaseAmount(input)).toThrow("[ERROR]");
  });

  test("구매금액이 1000으로 나누어 떨어지지 않는 경우 예외가 발생한다.", () => {
    const input = 4500;

    expect(() => new PurchaseAmount(input)).toThrow("[ERROR]");
  });

  test("보너스 번호가 로또 번호와 중복되는 경우 예외가 발생한다.", () => {
    const input = '';

    expect(() => new PurchaseAmount(input)).toThrow("[ERROR]");
  });
});