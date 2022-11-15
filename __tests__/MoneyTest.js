const Money = require("../src/Money");

describe("금액 클래스 테스트", () => {
  test("구입 금액에 숫자가 아닌 게 포함되어있으면 예외가 발생한다.", () => {
    expect(() => {
      new Money("1000다");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Money(13200);
    }).toThrow("[ERROR]");
  });
});
