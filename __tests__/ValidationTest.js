const { validateBonusNumber, validatePurchase } = require("../src/Validate");

describe("입력값 유효성 검사 테스트", () => {
  test("구매 금액에 숫자 이외의 입력이 발생하면 예외가 발생한다.", () => {
    expect(() => {
      validatePurchase("1000원");
    }).toThrow("[ERROR]");
  });

  test("구매 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      validatePurchase("2300");
    }).toThrow("[ERROR]");
  });

  test("구매 금액이 0 이하이면 예외가 발생한다.", () => {
    expect(() => {
      validatePurchase("0");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호에 숫자 이외의 입력이 발생하면 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber(["1", "2", "3", "4", "5", "6"], "8번");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber(["1", "2", "3", "4", "5", "6"], "3");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1~45의 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber(["1", "2", "3", "4", "5", "6"], "47");
    }).toThrow("[ERROR]");
  });
});
