const { ERROR } = require("../src/constants/constants");
const Game = require("../src/Lotto");
const validate = require("../src/validation/validation");

describe("Game 클래스 실행 테스트", () => {
  test("사용자 입력값(구입금액)이 1000으로 나누어 떨이지지 않을 경우 throw 예외 처리", () => {
    const input = 10;
    const result = () => validate.moneyInput(input);

    expect(result).toThrowError(new Error(ERROR.INVALID_MONEY_INPUT));
  });

  test("사용자 입력값(구입금액)이 1000으로 나누어 떨이지지 않을 경우 throw 예외 처리", () => {
    const input = 100;
    const result = () => validate.moneyInput(input);

    expect(result).toThrowError(new Error(ERROR.INVALID_MONEY_INPUT));
  });

  test("사용자 입력값(구입금액)이 1000으로 나누어 떨이지지 않을 경우 throw 예외 처리", () => {
    const input = 1500;
    const result = () => validate.moneyInput(input);

    expect(result).toThrowError(new Error(ERROR.INVALID_MONEY_INPUT));
  });

  test("사용자 입력값(구입금액)이 1000으로 나누어 떨이지지 않을 경우 throw 예외 처리", () => {
    const input = "aaa";
    const result = () => validate.moneyInput(input);

    expect(result).toThrowError(new Error(ERROR.INVALID_MONEY_INPUT));
  });
});
