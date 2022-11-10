const BuyLotto = require("../src/modules/BuyLotto");

describe("로또 구매 테스트", () => {
  test("로또 구매 개수가 8개", () => {
    const buyLotto = new BuyLotto(8000);
    expect(buyLotto.nTimes()).toBe(8);
  });

  test("에러 : 나누어 떨어지지 않는 금액", () => {
    expect(() => {
      new BuyLotto(8100);
    }).toThrow("[ERROR]");
  });
});
