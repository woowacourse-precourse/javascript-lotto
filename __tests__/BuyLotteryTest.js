const BuyLottery = require("../src/BuyLottery");
describe("로또 구입 테스트", () => {
  test("예외 - 1000단이로 나누어 떨어질때", () => {
    const buyLottery = new BuyLottery();

    expect(() => buyLottery.checkAmout(1000)).not.toThrow("[ERROR]");
  });
  test("예외 - 1000단이로 나누어 떨어지지 않을때", () => {
    const buyLottery = new BuyLottery();

    expect(() => buyLottery.checkAmout(1001)).toThrow("[ERROR]");
  });
  test("금액으로 살 수 있는 로또 수량", () => {
    const buyLottery = new BuyLottery();

    expect(buyLottery.numberOfpurchases(1000)).toBe(1);
  });
  test("금액에 맞는 로또발행", () => {
    const buyLottery = new BuyLottery();
    const lottoNumber = buyLottery.createRendomLotto(5).length;
    expect(lottoNumber).toBe(5);
  });
});
