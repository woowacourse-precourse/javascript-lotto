const LottoArray = require("../src/LottoArray");

describe("로또 배열 테스트", () => {
  test("로또 수량 테스트", () => {
    const cash = 5678;
    const lottoArray = new LottoArray(cash);
    expect(lottoArray.amount).toBe(5);
  });
});
