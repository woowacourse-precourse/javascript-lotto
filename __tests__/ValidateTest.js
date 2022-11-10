const { isValidateUserInput } = require("../src/utils/validator");

describe("isValidateUserInput 함수 테스트", () => {
  test("공백 입력 테스트", () => {
    let amount = "    ";
    expect(() => {
      isValidateUserInput(amount);
    }).toThrow("[ERROR] 입력 내용이 없습니다.");
  });

  test("0입력 테스트", () => {
    let amount = "0";
    expect(() => {
      isValidateUserInput(amount);
    }).toThrow("[ERROR] 0을 입력하셨습니다.");
  });

  test("1000으로 나누어 떨어지지 않는 값 입력 테스트", () => {
    let amount = "1234";
    expect(() => {
      isValidateUserInput(amount);
    }).toThrow();
  });
});
