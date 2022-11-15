const Bonus = require("../src/Bonus");

describe("보너스 번호 테스트", () => {
  test("보너스 번호가 로또 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus([1, 2, 3, 4, 5, 6], 3);
    }).toThrow("[ERROR]");
  });
  test("보너스 번호가 최대 번호보다 크면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus([1, 2, 3, 4, 5, 6], 46);
    }).toThrow("[ERROR]");
  });
  test("보너스 번호가 최소 번호보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus([1, 2, 3, 4, 5, 6], 0);
    }).toThrow("[ERROR]");
  });
  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus([1, 14, "1S", 16, 21, 44]);
    }).toThrow("[ERROR]");
  });
});
