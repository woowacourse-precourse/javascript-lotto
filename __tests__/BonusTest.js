const Bonus = require("../src/Bonus");

describe("보너스 클래스 테스트", () => {
  test("보너스 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      const bonus = new Bonus();
      bonus.changeIntoNumber(0, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      const bonus = new Bonus();
      bonus.changeIntoNumber(60, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      const bonus = new Bonus();
      bonus.changeIntoNumber(10, [1, 2, 3, 4, 5, 10]);
    }).toThrow("[ERROR]");
  });
});
