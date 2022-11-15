const BonusNumber = require("../src/BonusNumber");

describe("보너스 번호 클래스 테스트", () => {
  test("보너스 번호에 숫자가 아닌 문자가 들어가면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber("a", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 0보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(-1, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 45보다 크면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(46, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 소수이면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(7.1, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});
