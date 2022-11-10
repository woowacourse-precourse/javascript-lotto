const BonusNumber = require("../src/BonusNumber");

describe("보너스 번호 클래스 테스트", () => {
  test("보너스 번호는 숫자만이 입력될 수 있다.", () => {
    expect(() => {
      new BonusNumber("1 2");
    }).toThrow("[ERROR] 숫자만이 입력 가능합니다.");
  });
});
