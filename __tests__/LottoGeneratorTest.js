const LottoGenerator = require("../src/LottoGenerator");

describe("LottoGenerator 클래스 테스트", () => {
  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoGenerator("1,000");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 천원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoGenerator("3300");
    }).toThrow("[ERROR]");
  });
});
