const Bonus = require("../src/Bonus");

describe("보너스 클래스 테스트", () => {
  test("보너스 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(["a"]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus([60]);
    }).toThrow("[ERROR]");
  });
});
