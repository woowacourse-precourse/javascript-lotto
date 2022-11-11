const {
  isValidateUserInput,
  isValidateBonusNumber,
} = require("../src/utils/validator");

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

describe("isValidateBonusNumber 함수 테스트", () => {
  test("보너스 번호 입력 값이 숫자가 아닌지 테스트", () => {
    let bonusNumber = "2,7";
    expect(() => {
      isValidateBonusNumber(bonusNumber);
    }).toThrow("[ERROR] 숫자가 아닙니다.");
  });

  test("보너스 번호 입력 값이 1-45 사이인지 테스트", () => {
    let bonusNumber = "-1";
    expect(() => {
      isValidateBonusNumber(bonusNumber);
    }).toThrow("[ERROR] 1-45 사이의 숫자가 아닙니다.");
  });

  test("공백 입력할 경우 테스트", () => {
    let bonusNumber = " ";
    expect(() => {
      isValidateBonusNumber(bonusNumber);
    }).toThrow("[ERROR] 아무 것도 입력하지 않았습니다.");
  });

  test("보너스 번호 입력 값이 숫자인지 테스트", () => {
    let bonusNumber = "1";
    expect(() => {
      isValidateBonusNumber(bonusNumber);
    }).toBeTruthy;
  });
});
