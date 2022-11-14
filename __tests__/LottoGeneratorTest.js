const LottoGenerator = require("../src/LottoGenerator");

describe("로또 생성기 예외 테스트", () => {
  test("구매금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const lottoGenerator = new LottoGenerator();
      lottoGenerator.generate("money");
    }).toThrow("[ERROR] 숫자를 입력해 주세요.");
  });

  test("구매금액이 1,000원 미만이면 예외가 발생한다.", () => {
    expect(() => {
      const lottoGenerator = new LottoGenerator();
      lottoGenerator.generate("900");
    }).toThrow("[ERROR] 돈이 부족합니다.");
  });

  test("구매금액이 1,000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const lottoGenerator = new LottoGenerator();
      lottoGenerator.generate("1234");
    }).toThrow("[ERROR] 1000으로 나누어 떨어지지 않습니다.");
  });
});
