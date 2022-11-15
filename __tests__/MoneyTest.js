const Money = require("../src/Money");

describe("Money 클래스 테스트", () => {
  test("구매금액이 1,000원으로 나누어 떨어지지 않는 경우 예외가 발생한다.", () => {
    expect(() => {
      new Money("1001");
    }).toThrow("[ERROR]");
  });

  test("구매금액이 숫자 외의 문자인 경우 예외가 발생한다.", () => {
    expect(() => {
      new Money("12ap8");
    }).toThrow("[ERROR]");
  });
});
