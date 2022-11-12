const LottoGame = require("../src/LottoGame");

describe("LottoGame 클래스 - isPurchaseAmountValid", () => {
  test("문자 입력 예외처리", () => {
    expect(() => {
      new LottoGame().isPurchaseAmountValid("abc");
    }).toThrow("[ERROR] 숫자를 입력해주세요.");
  });
});
