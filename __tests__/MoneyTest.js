const Money = require("../src/Money");

describe("Money 클래스 테스트", () => {
  test("구입 금액이 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new Money(["5000won"]);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 천원 단위가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new Money([["4500"]]);
    }).toThrow("[ERROR]");
  });
});
