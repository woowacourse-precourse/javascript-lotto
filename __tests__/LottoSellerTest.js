const LottoSeller = require("../src/LottoSeller");

describe("로또 생성기 클래스 테스트", () => {
  test("금액이 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      const lottoSeller = new LottoSeller();
      lottoSeller.getPurchaseCount("천원");
    }).toThrow("[ERROR] 금액은 숫자만 입력해야 합니다.");
  });

  test("금액이 1,000원 단위로 입력되지 않을 경우 예외가 발생한다.", () => {
    expect(() => {
      const lottoSeller = new LottoSeller();
      lottoSeller.getPurchaseCount("1500");
    }).toThrow("[ERROR] 금액은 1,000원 단위만 입력 가능합니다.");
  });
});
