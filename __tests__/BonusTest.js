const Bonus = require("../src/Bonus");

describe("보너스 클래스 테스트", () => {
  test("보너스 번호의 개수가 1개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus([1, 2]);
    }).toThrow("[ERROR]");
  });
});
