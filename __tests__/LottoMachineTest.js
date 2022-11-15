const LottoMachine = require("../src/controller/LottoMachine");

describe("로또머신 클래스 테스트", () => {
  test("6개의 로또를 발행한다.", () => {
    const lottoMachine = new LottoMachine();
    const result = lottoMachine.makeLotto();
    expect(result).toHaveLength(6);
  });

  test("구매금액 만큼 로또를 발행한다.", () => {
    const lottoMachine = new LottoMachine();
    const result = lottoMachine.purchaseLotto(7700);
    expect(result).toHaveLength(7);
  });
});
