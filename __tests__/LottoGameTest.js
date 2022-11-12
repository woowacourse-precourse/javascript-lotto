const LottoGame = require("../src/LottoGame");

describe("LottoGame 클래스 isPurchaseAmountValid 함수 테스트", () => {
  test("문자를 입력하면 예외가 발생한다.", () => {
    expect(() => {
      new LottoGame().isPurchaseAmountValid("abc");
    }).toThrow("[ERROR] 숫자를 입력해주세요.");
  });

  test("1,000으로 나누어 떨어지지 않는 경우 예외가 발생한다.", () => {
    expect(() => {
      new LottoGame().isPurchaseAmountValid(8750);
    }).toThrow("[ERROR] 1,000으로 나누어 떨어지는 금액을 입력해주세요.");
  });
});
