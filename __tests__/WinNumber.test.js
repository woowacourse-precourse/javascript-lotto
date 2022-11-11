const BonusNumber = require("../src/error/bonusNumber");
const Exception = require("../src/error/exception");
const WinNumberError = require("../src/error/winNumber");
const { ERROR } = require("../src/utils/constant");

describe("당첨 번호 예외 처리 클래스 테스트", () => {
  test("당첨 번호 문자 길이 예외처리", () => {
    const input = "1";
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new WinNumberError(input));

    expect(errorTest).toThrow(ERROR.WIN_NUMBER);
  });

  test("당첨 번호 개수 예외처리", () => {
    const input = "1,2,3,4,5,6,7";
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new WinNumberError(input));

    expect(errorTest).toThrow(ERROR.WIN_NUMBER);
  });

  test("당첨 번호 유효 숫자 범위 예외처리", () => {
    const input = "2,4,8,16,32,64";
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new WinNumberError(input));

    expect(errorTest).toThrow(ERROR.WIN_NUMBER);
  });
});
