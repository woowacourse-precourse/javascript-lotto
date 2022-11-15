const Money = require("../src/Money");

describe("Money 클래스 테스트", () => {
  test("구입 금액이 숫자가 아닌 경우 예외가 발생한다.[1]", () => {
    expect(() => {
      new Money("5만원");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 숫자가 아닌 경우 예외가 발생한다.[2]", () => {
    expect(() => {
      new Money("5000won");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1,000원 단위가 아닌 경우 경우 예외가 발생한다.[1]", () => {
    expect(() => {
      new Money("1300");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1,000원 단위가 아닌 경우 경우 예외가 발생한다.[2]", () => {
    expect(() => {
      new Money("40");
    }).toThrow("[ERROR]");
  });
});
