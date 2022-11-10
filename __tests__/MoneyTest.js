const Money = require("../src/Money");

describe("금액 클래스 테스트", () => {
  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Money("가나다");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Money(13200);
    }).toThrow("[ERROR]");
  });
});
