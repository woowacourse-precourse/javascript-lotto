const Bonus = require("../src/Bonus");

describe("보너스 클래스 테스트", () => {
  test("보너스 번호의 개수가 1개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus([1, 2]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 범위를 벗어나면 예외가 발생한다.[1]", () => {
    expect(() => {
      new Bonus(["a"]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 범위를 벗어나면 예외가 발생한다.[2]", () => {
    expect(() => {
      new Bonus([-1]);
    }).toThrow("[ERROR]");
  });
});
