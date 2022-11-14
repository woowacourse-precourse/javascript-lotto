const Budget = require("../src/input/Budget");

describe("금액 클래스 테스트", () => {
  test("금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Budget('abc');
    }).toThrow("[ERROR]");
  });

  test("금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Budget('3000a');
    }).toThrow("[ERROR]");
  });

  test("금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Budget(3700);
    }).toThrow("[ERROR]");
  });
  
  test("금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Budget(370.0);
    }).toThrow("[ERROR]");
  });

  test("금액이 음수일 경우 예외가 발생한다.", () => {
    expect(() => {
      new Budget(-1000);
    }).toThrow("[ERROR]");
  });


});
