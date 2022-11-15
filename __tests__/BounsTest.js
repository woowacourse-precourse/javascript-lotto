const Bonus = require("../src/Bonus");

describe("보너스 클래스 테스트", () => {
  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("문자");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 숫자가 1~45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(46);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호에 당첨 번호와 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus([1, 2, 3, 4, 5, 6], 5);
    }).toThrow("[ERROR]");
  });
});
