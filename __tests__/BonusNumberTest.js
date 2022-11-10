const BonusNumber = require("../src/BonusNumber");

describe("보너스 번호 클래스 테스트", () => {
  test("보너스 번호는 숫자만이 입력될 수 있다.", () => {
    expect(() => {
      new BonusNumber([1, 2, 3, 4, 5, 6], "7 8");
    }).toThrow("[ERROR] 숫자만이 입력 가능합니다.");
  });

  test("보너스 번호는 1에서 45 사이의 값만 입력 가능하다.", () => {
    expect(() => {
      new BonusNumber([1, 2, 3, 4, 5, 6], "78");
    }).toThrow("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  test("당첨 번호에 사용된 값은 보너스 번호에 사용 할 수 없다.", () => {
    expect(() => {
      new BonusNumber([1, 2, 3, 4, 5, 6], "2");
    }).toThrow(
      "[ERROR] 6개의 당첨 번호로 입력한 숫자는 보너스 번호로 사용 할 수 없습니다."
    );
  });
});
