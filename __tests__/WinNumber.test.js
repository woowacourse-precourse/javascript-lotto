const Exception = require("../src/error/exception");
const PerchaseError = require("../src/error/purchase");

describe("구입 금액 클래스 테스트", () => {
  test("1000 단위 아닌 금액 예외처리 확인", () => {
    const input = "10010";
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new PerchaseError(input));

    expect(errorTest).toThrow();
  });

  test("문자 입력 예외처리 확인", () => {
    const input = "abcde";
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new PerchaseError(input));

    expect(errorTest).toThrow();
  });
});
