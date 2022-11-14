const Bonus = require("../src/Bonus.js");

describe("보너스 클래스 테스트", () => {
  test("보너스 번호가 로또 번호에 범위에 맞지 않는 숫자가 있다면 발생한다.", () => {
    expect(() => {
      new Bonus(90, [1,2,3,4,5,6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 숫자가 아니면 발생한다.", () => {
    expect(() => {
      new Bonus('!', [1,2,3,4,5,6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 겹치면 발생한다.", () => {
    expect(() => {
      new Bonus(1, [1,2,3,4,5,6]);
    }).toThrow("[ERROR]");
  });
});
