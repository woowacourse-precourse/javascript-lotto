const Exception = require("../src/error/exception");
const Purchase = require("../src/error/purchase");
const { ERROR } = require("../src/utils/constant");

describe("구입 금액 클래스 테스트", () => {
  test("1000원 단위 예외처리", () => {
    const input = "10001";
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new Purchase(input));

    expect(errorTest).toThrow(ERROR.PURCHASE_AMOUNT);
  });

  test("문자 포함 예외처리", () => {
    const input = "1000a";
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new Purchase(input));

    expect(errorTest).toThrow(ERROR.PURCHASE_AMOUNT);
  });

  test("음수 예외처리", () => {
    const input = "-1000";
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new Purchase(input));

    expect(errorTest).toThrow(ERROR.PURCHASE_AMOUNT);
  });

  test("공백 포함 예외처리", () => {
    const input = "100 1000";
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new Purchase(input));

    expect(errorTest).toThrow(ERROR.PURCHASE_AMOUNT);
  });
});
