const Validation = require("../src/Validation");

describe("Validation 클래스 테스트", () => {
  test("구입 금액이 0원보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      Validation.isValidPurchaseAmount(-1000);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      Validation.isValidPurchaseAmount("1000");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      Validation.isValidPurchaseAmount(500);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 0원보다 크고 1000원 단위이면 true를 반환한다.", () => {
    expect(Validation.isValidPurchaseAmount(1000)).toBe(true);
  });

  test("구입 금액이 0원이면 true를 반환한다.", () => {
    expect(Validation.isValidPurchaseAmount(0)).toBe(true);
  });

  test("당첨 번호가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      Validation.isValidWinningNumber("1,2,3,4,5");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      Validation.isValidWinningNumber("1,2,3,4,5,5");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호에 1~45가 아닌 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      Validation.isValidWinningNumber("1,2,3,4,5,46");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 6개이고 중복된 숫자가 없으면 true를 반환한다.", () => {
    expect(Validation.isValidWinningNumber("1,2,3,4,5,6")).toBe(true);
  });

  test("당첨 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      Validation.isValidWinningNumber("1,2,3,4,5,6a");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1~45가 아니면 예외가 발생한다.", () => {
    expect(() => {
      Validation.isValidBonusNumber("46");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1~45이면 true를 반환한다.", () => {
    expect(Validation.isValidBonusNumber("45")).toBe(true);
  });

  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      Validation.isValidBonusNumber("45a");
    }).toThrow("[ERROR]");
  });
});
