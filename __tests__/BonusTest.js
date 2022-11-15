const Bonus = require("../src/Bonus");

describe("보너스 클래스 테스트", () => {
  test("보너스 번호의 숫자가 1 ~ 45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(50);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("다");
    }).toThrow("[ERROR]");
  });
});
