const LottoCompany = require("../src/LottoCompany");

describe("로또 발행 회사 테스트", () => {
  test("금액에 맞는 개수만큼 로또를 발행한다.", () => {
    const lottos = LottoCompany.publishLottos(2000);
    const lottos2 = LottoCompany.publishLottos(5000);
    expect(lottos.length).toBe(2);
    expect(lottos2.length).toBe(5);
  });
});
