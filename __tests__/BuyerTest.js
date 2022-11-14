const Buyer = require("../src/Buyer");

describe("구매자 클래스 테스트", () => {
  test("금액 입력을 확인한다.", () => {
    const buyer = new Buyer(5000);
    expect(buyer.money).toBe(5000);
  });

  test("입력된 금액이 정수가 아닐경우 예외처리한다.", () => {
    expect(() => {
      new Buyer('string');
    }).toThrowError("[ERROR] 금액은 정수로 입력해야 합니다.");
  });

  test("입력된 금액이 1000으로 나누어 떨어지지 않을 경우 예외처리한다.", () => {
    expect(() => {
      new Buyer(1234);
    }).toThrowError("[ERROR] 금액은 1000으로 나누어떨어져야 합니다.");
  });

  test("입력된 금액에 맞게 로또 개수를 정한다.", () => {
    const buyer = new Buyer(4000);
    buyer.countLotto();

    expect(buyer.lottoNumbers).toBe(4);
  });

  test("로또 개수에 맞게 6개의 난수를 담은 리스트를 생성한다.", () => {
    const buyer = new Buyer(4000);
    buyer.countLotto();
    buyer.createLottos();
    const testPurchaseLottos = buyer.purchaseLottos;

    expect(testPurchaseLottos.length).toBe(4);

    for (let purchaseLotto of testPurchaseLottos) {
      expect(purchaseLotto.length).toBe(6);
    }
  });
});
