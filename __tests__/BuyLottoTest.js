const BuyLotto = require("../src/modules/BuyLotto");

describe("로또 구매 테스트", () => {
  test("로또 구매 개수가 8개", () => {
    const buyLotto = new BuyLotto();
    expect(buyLotto.nTimes(8000)).toBe(8);
  });
});
