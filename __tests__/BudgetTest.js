const Budget = require("../src/Budget");

describe("Budget 클래스 테스트", () => {
  test("숫자가 아닌 문자열 입력시 예외 발생.", () => {
    expect(() => {
      new Budget("asdasd");
    }).toThrow("[ERROR]");
  });

  test("1000원 단위가 아닌 금액 입력시 예외 발생.", () => {
    expect(() => {
      new Budget(18500);
    }).toThrow("[ERROR]");
    expect(() => {
      new Budget(500);
    }).toThrow("[ERROR]");
  });
});
