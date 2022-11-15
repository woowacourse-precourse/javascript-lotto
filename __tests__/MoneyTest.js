const Money = require("../src/Money");

describe("금액 클래스 테스트", () => {
  test("금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Money("abc");
    }).toThrow("[ERROR]");
  });

  test("금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Money("1000dfd");
    }).toThrow("[ERROR]");
  });

  test("금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Money(4300);
    }).toThrow("[ERROR]");
  });

  test("금액이 음수일 경우 예외가 발생한다.", () => {
    expect(() => {
      new Money(-8000);
    }).toThrow("[ERROR]");
  });
});
