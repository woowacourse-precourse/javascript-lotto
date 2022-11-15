const Validation = require("../src/Validation");

describe("Validation 클래스 테스트", () => {
  test("validatePayment 메서드 테스트: 입력 값이 정수가 아닌경우", () => {
    expect(() => {
      Validation.validatePayment("1000원");
    }).toThrow("[ERROR]");
  });

  test("validatePayment 메서드 테스트: 입력 값이 1000원 미만인 경우", () => {
    expect(() => {
      Validation.validatePayment(500);
    }).toThrow("[ERROR]");
  });

  test("validatePayment 메서드 테스트: 입력 값이 1000으로 나누어 떨어지지 않는 경우", () => {
    expect(() => {
      Validation.validatePayment(1500);
    }).toThrow("[ERROR]");
  });

  test("validateNumbers 메서드 테스트: 입력이 정수가 아닌 경우", () => {
    expect(() => {
      Validation.validateNumbers(["일", 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("validateNumbers 메서드 테스트: 입력이 1~45 범위를 벗어난 경우", () => {
    expect(() => {
      Validation.validateNumbers([0, 1, 2, 3, 4, 1000]);
    }).toThrow("[ERROR]");
  });

  test("validateNumbers 메서드 테스트: 입력이 중복된 경우", () => {
    expect(() => {
      Validation.validateNumbers([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("validateWinningNumbers 메서드 테스트: 입력이 6개가 아닌 경우", () => {
    expect(() => {
      Validation.validateWinningNumbers([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("validateBonusNumber 메서드 테스트: 입력이 1개가 아닌 경우", () => {
    expect(() => {
      Validation.validateBonusNumber([1, 2, 3, 4, 5, 6], [1, 2]);
    }).toThrow("[ERROR]");
  });

  test("validateBonusNumber 메서드 테스트: 입력이 당첨번호와 중복된 경우", () => {
    expect(() => {
      Validation.validateBonusNumber([1, 2, 3, 4, 5, 6], 6);
    }).toThrow("[ERROR]");
  });
});
