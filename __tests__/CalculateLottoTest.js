const CalculateLotto = require("../src/game-machine/CalculateLotto");

describe("로또 수량 및 번호 계산 테스트", () => {
  test("구입 금액을 받으면 로또 수량을 계산한다.", () => {
    expect(() => {
        const cal_lotto = new CalculateLotto();
        const result= 8000;
        cal_lotto.calculateLottoQuantity(result);
        expect(result).toEqual(8);
    });
  });

});
