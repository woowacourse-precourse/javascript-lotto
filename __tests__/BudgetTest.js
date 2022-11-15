const Budget = require("../src/Budget");

describe("입력한 금액 예외 처리 테스트", () => {
  test("입력한 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Budget('i000');
    }).toThrow("[ERROR]");
    expect(() => {
      new Budget('가나다');
    }).toThrow("[ERROR]");
  });

  test("입력한 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Budget(1001);
    }).toThrow("[ERROR]");
  });

  test("입력한 금액이 소수일 경우 예외가 발생한다.", () => {
    expect(() => {
      new Budget(1000.1);
    }).toThrow("[ERROR]");
  });

});