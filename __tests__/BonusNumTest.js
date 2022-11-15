const BonusNum = require("../src/BonusNum");

describe("보너스번호 클래스 테스트", () => {
  test("예외테스트: 로또 보너스 번호가 로또 번호와 겹치면 에러 발생.", () => {
    expect(() => {
      new BonusNum(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("예외테스트: 로또 보너스 번호가 숫자가 아니라면 에러 발생.", () => {
    expect(() => {
      new BonusNum("a", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("예외테스트: 로또 보너스 번호가 로또 번호범위에 없다면 에러 발생.", () => {
    expect(() => {
      new BonusNum(156, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
  test("예외테스트: 로또 보너스 번호가 하나 이상이라면 에러 발생.", () => {
    expect(() => {
      new BonusNum([15, 16], [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});
