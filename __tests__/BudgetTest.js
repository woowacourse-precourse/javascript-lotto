const Budget = require("../src/Budget");

describe("입력한 금액 예외 처리 테스트", () => {
  test("입력한 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Budget('abc');
    }).toThrow("[ERROR]");
  });

  test("입력한 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Budget('3000a');
    }).toThrow("[ERROR]");
  });

  test("입력한 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Budget(3700);
    }).toThrow("[ERROR]");
  });

  test("입력한 금액이 소수일 경우 예외가 발생한다.", () => {
    expect(() => {
      new Budget(370.0);
    }).toThrow("[ERROR]");
  });

});