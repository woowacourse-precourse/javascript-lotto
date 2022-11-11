const LottoGenerator = require("../../src/domain/LottoGenerator");

const repeat = (cb, trial = 100) => {
  for (let i = 0; i < trial; i += 1) {
    cb();
  }
};

describe("로또 생성기 클래스 테스트", () => {
  test("겹치지 않는 6개의 로또 번호를 생성했는지 100회 테스트", () => {
    repeat(() => {
      const lottos = new Set(LottoGenerator.generate());
      expect([...lottos].length).toEqual(6);
    });
  });
});
