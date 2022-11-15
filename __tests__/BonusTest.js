const Bonus = require("../src/Bonus");

describe("보너스 클래스 테스트", () => {
  test("보너스 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
    const bonus = 'a';
    const lotto = [1, 2, 3, 4, 5, 6];

    expect(() => new Bonus(bonus, lotto)).toThrow("[ERROR]");
  });

  test("보너스 번호의 범위가 1 ~ 45 사이가 아닌 경우 예외가 발생한다.", () => {
    const bonus = 46;
    const lotto = [1, 2, 3, 4, 5, 6];

    expect(() => new Bonus(bonus, lotto)).toThrow("[ERROR]");
  });

  test("보너스 번호가 로또 번호와 중복되는 경우 예외가 발생한다.", () => {
    const bonus =  2;
    const lotto = [1, 2, 3, 4, 5, 6];

    expect(() => new Bonus(bonus, lotto)).toThrow("[ERROR]");
  });
});