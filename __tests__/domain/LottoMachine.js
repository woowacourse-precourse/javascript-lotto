const LottoMachine = require("../../src/domain/LottoMachine");

const repeat = (cb, trial = 100) => {
  for (let i = 0; i < trial; i += 1) {
    cb();
  }
};

describe("로또머신 클래스 테스트", () => {
  test("겹치지 않는 6개의 로또 번호를 생성했는지 100회 테스트", () => {
    repeat(() => {
      const lottos = new Set(LottoMachine.generate());
      expect([...lottos].length).toEqual(6);
    });
  });
});
