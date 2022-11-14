const validate = require("../src/validation/validation");
const { ERROR } = require("../src/constants/constants");

describe("사용자 입력값(구입금액) 유효성 테스트", () => {
  test("구입금액이 1,000으로 나누어 떨어지지 않을 경우 throw 예외 처리", () => {
    const input = "10";
    const result = () => validate.moneyInput(input);

    expect(result).toThrowError(new Error(ERROR.INVALID_MONEY_INPUT));
  });

  test("구입금액이 1,000으로 나누어 떨어지지 않을 경우 throw 예외 처리", () => {
    const input = "500";
    const result = () => validate.moneyInput(input);

    expect(result).toThrowError(new Error(ERROR.INVALID_MONEY_INPUT));
  });

  test("구입금액이 1,000으로 나누어 떨어지지 않을 경우 throw 예외 처리", () => {
    const input = "1500";
    const result = () => validate.moneyInput(input);

    expect(result).toThrowError(new Error(ERROR.INVALID_MONEY_INPUT));
  });
});
