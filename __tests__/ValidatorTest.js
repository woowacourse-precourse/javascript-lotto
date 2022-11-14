const Validator = require("../src/Validator");

describe("벨리데이터 클래스 테스트", () => {
  test("구입 금액이 숫자가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      const validator = new Validator();
      validator.checkMoneyValid("돈");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 0원이면 예외가 발생한다.", () => {
    expect(() => {
      const validator = new Validator();
      validator.checkMoneyValid(0);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1,000원 단위가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      const validator = new Validator();
      validator.checkMoneyValid(1001);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 입력한 당첨 번호에 포함된다면 예외가 발생한다.", () => {
    expect(() => {
      const validator = new Validator();
      validator.checkBonusNumberValid(6, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});
