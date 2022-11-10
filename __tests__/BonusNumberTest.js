const BonusNumber = require("../src/BonusNumber");

describe("보너스 번호 클래스 테스트", () => {
  test("보너스 번호는 숫자만이 입력될 수 있다.", () => {
    expect(() => {
      new BonusNumber("1 2");
    }).toThrow("[ERROR] 숫자만이 입력 가능합니다.");
  });

  test("보너스 번호는 1에서 45 사이의 값만 입력 가능하다.", () => {
    expect(() => {
      new BonusNumber("451");
    }).toThrow("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  });
});
