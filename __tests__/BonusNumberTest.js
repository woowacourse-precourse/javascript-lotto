const BonusNumber = require("../src/BonusNumber");
describe("보너스 넘버 클래스 테스트", () => {
  test("보너스 번호가 로또 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(2, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(-3, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
  test("보너스 번호가 45보다 크면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(90, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
  test("보너스 번호에 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber("A", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});
