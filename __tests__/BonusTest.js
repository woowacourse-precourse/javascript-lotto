const Bonus = require("../src/Bonus");

describe("보너스 클래스 테스트", () => {
  test("보너스 번호의 개수가 1개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus([1, 2]);
    }).toThrow("[ERROR] 보너스 번호는 1개여야 합니다.");
  });

  test("보너스 번호에 숫자가 아닌 다른 것이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(["e"]);
    }).toThrow("[ERROR] 보너스 번호는 숫자만 입력되어야 합니다.");
  });

  test("보너스 번호의 범위가 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus([46]);
    }).toThrow("[ERROR] 보너스 번호는 1부터 45까지의 숫자입니다.");
  });
});
