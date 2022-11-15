const CalculateLotto = require("../src/game-machine/CalculateLotto");

describe("로또 계산 테스트", () => {
  test("구입 금액을 받으면 로또 수량을 계산한다.", () => {
    const cal_lotto =new CalculateLotto();
    const result  = cal_lotto.calculateLottoQuantity(8000);
    expect(result).toEqual(8);
  });
});
