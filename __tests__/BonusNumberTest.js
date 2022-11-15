const BonusNumber = require("../src/BonusNumber");

describe("보너스 번호 예외 테스트", () => {
  test("보너스 번호의 개수가 1개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber("1, 2", ["1", "2", "3", "4", "5", "6"]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 로또 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber("1", ["1", "2", "3", "4", "5", "6"]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호는 1~45 사이의 정수여야 한다.", () => {
    expect(() => {
      new BonusNumber("46", ["1", "2", "3", "4", "5", "6"]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호는 1~45 사이의 정수여야 한다.", () => {
    expect(() => {
      new BonusNumber("-10", ["1", "2", "3", "4", "5", "6"]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호는 숫자여야 한다.", () => {
    expect(() => {
      new BonusNumber("100a", ["1", "2", "3", "4", "5", "6"]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호는 숫자여야 한다.", () => {
    expect(() => {
      new BonusNumber(" ", ["1", "2", "3", "4", "5", "6"]);
    }).toThrow("[ERROR]");
  });
});
