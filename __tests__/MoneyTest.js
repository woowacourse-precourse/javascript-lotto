const Money = require("../src/Money");

describe("Money 클래스 테스트", () => {
  test("1,000원보다 작은 값을 입력하면 예외가 발생한다.", () => {
    expect(() => {
      new Money(500);
    }).toThrow("[ERROR]");
  });

  test("1,000원 단위로 입력하지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Money(65800);
    }).toThrow("[ERROR]");
  });
});
