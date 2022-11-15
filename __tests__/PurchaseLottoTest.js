const PurchaseLotto = require("../src/PurchaseLotto");

describe("PurchaseLotto 클래스 테스트", () => {
  test("로또 구매 금액이 1000 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new PurchaseLotto(950);
    }).toThrow("[ERROR]");
  });

  test("로또 구매 금액이 0원이면 예외가 발생한다.", () => {
    expect(() => {
      new PurchaseLotto(0);
    }).toThrow("[ERROR]");
  });

  test("로또 구매 금액이 소수점이면 예외가 발생한다.", () => {
    expect(() => {
      new PurchaseLotto(1000.5);
    }).toThrow("[ERROR]");
  });

  test("getPayment 메서드가 정상 동작한다.", () => {
    const purchaseLotto = new PurchaseLotto(9000);

    purchaseLotto.setPayment();

    const payment = purchaseLotto.getPayment();
    expect(payment).toEqual(9000);
  });

  test("getTotalLotto 메서드가 정상 동작한다.", () => {
    const purchaseLotto = new PurchaseLotto(10000);

    purchaseLotto.setTotalLotto();

    const payment = purchaseLotto.getTotalLotto();
    expect(payment).toEqual(10);
  });
});
