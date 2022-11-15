const LottoMachine = require("../../src/domain/LottoMachine");

const repeat = (cb, trial = 100) => {
  for (let i = 0; i < trial; i += 1) {
    cb();
  }
};

describe("로또머신 클래스 테스트", () => {
  test("겹치지 않는 6개의 로또 번호를 생성했는지 100회 테스트", () => {
    const lottoMachine = new LottoMachine();

    repeat(() => {
      const lottos = new Set(lottoMachine.generate());
      expect([...lottos].length).toEqual(6);
    });
  });

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
