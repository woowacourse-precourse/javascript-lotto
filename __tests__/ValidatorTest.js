const validator = require("../src/Validator");

describe("Validator 클래스 테스트", () => {
  test("당첨번호를 쉼표없이 입력하면 에러가 발생한다.", () => {
    expect(() => {
      validator.checkWinNumber("123456");
    }).toThrow("[ERROR]");
  });

  test("당첨번호에 숫자가 아닌 다른 값을 입력하면 에러가 발생한다.", () => {
    expect(() => {
      validator.checkWinNumber("t,e,s,t,1,2,3");
    }).toThrow("[ERROR]");
  });

  test("당첨번호에 중복된 값을 입력하면 에러가 발생한다.", () => {
    expect(() => {
      validator.checkWinNumber("1,2,2,3,4,5");
    }).toThrow("[ERROR]");
  });

  test("당첨번호에 1~45를 벗어난 숫자를 입력하면 에러가 발생한다.", () => {
    expect(() => {
      validator.checkWinNumber("1,56,3,4,5,6");
    }).toThrow("[ERROR]");
  });

  test("보너스번호에 입력된 숫자가 하나가 아니면 에러가 발생한다.", () => {
    expect(() => {
      validator.checkBonusNumber("12");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호에 중복된 숫자이면 에러가 발생한다.", () => {
    expect(() => {
      validator.checkBonusNumber("23", "1,23,3,4,5,6");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호에 숫자가 아닌 다른 값을 입력하면 에러가 발생한다", () => {
    expect(() => {
      validator.checkBonusNumber("김");
    }).toThrow("[ERROR]");
  });
});
