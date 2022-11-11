const Money = require("./Money");

describe("Money 클래스 테스트", () => {
  test("money 금액을 곱한다.", () => {
    const money = new Money(10000);

    expect(money.multiply(7)).toBe(70000);
  });

  test("3자리씩 쉼표로 구분한 문자열을 반환한다.", () => {
    const money = new Money(10000);

    expect(money.addSeperator()).toBe("10,000");
  });
});
