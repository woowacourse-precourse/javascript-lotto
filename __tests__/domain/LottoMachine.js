const LottoMachine = require("../../src/domain/LottoMachine");

describe("로또머신 클래스 테스트", () => {
  test("돈이 1000원 단위가 아니라면 예외가 발생한다.", () => {
    const lottoMachine = new LottoMachine();
    expect(() => {
      lottoMachine.buy(1234);
    }).toThrow("[ERROR]");
    expect(() => {
      lottoMachine.buy(500);
    }).toThrow("[ERROR]");
    expect(() => {
      lottoMachine.buy(1500);
    }).toThrow("[ERROR]");
    expect(() => {
      lottoMachine.buy(0);
    }).toThrow("[ERROR]");
  });

  test("돈을 넣은 만큼 로또를 구매한다.", () => {
    const lottoMachine = new LottoMachine();
    expect(lottoMachine.buy(1000).length).toEqual(1);
    expect(lottoMachine.buy(10000).length).toEqual(10);
  });
});
