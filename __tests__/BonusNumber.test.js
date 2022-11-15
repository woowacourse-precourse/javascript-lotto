const BonusNumber = require("../src/error/bonusNumber");
const Exception = require("../src/error/exception");
const { ERROR } = require("../src/utils/constant");

describe("보너스 번호 예외처리 클래스 테스트", () => {
  test("보너스 번호 미입력 예외 처리", () => {
    const input = "";
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new BonusNumber(input));

    expect(errorTest).toThrow(ERROR.BONUS_NUMBER);
  });

  test("보너스 번호 유효 숫자 범위 예외 처리", () => {
    const input = 46;
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new BonusNumber(input));

    expect(errorTest).toThrow(ERROR.BONUS_NUMBER);
  });

  test("보너스 번호 문자 예외 처리", () => {
    const input = "a";
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new BonusNumber(input));

    expect(errorTest).toThrow(ERROR.BONUS_NUMBER);
  });

  test("보너스 번호 중복 예외 처리", () => {
    const input = 5;
    const comparison = [1, 2, 3, 4, 5, 6];
    const exception = new Exception();
    const errorTest = () =>
      exception.isAllow(new BonusNumber(input), comparison);

    expect(errorTest).toThrow(ERROR.BONUS_NUMBER_DUPLICATE);
  });
});
