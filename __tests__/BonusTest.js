const Bonus = require("../src/domain/Bonus");

describe("Bonus 클래스 테스트", () => {
  test("보너스 번호가 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => new Bonus("가")).toThrow(
      "[ERROR] 보너스 번호는 숫자여야 합니다."
    );

    expect(() => new Bonus("!")).toThrow(
      "[ERROR] 보너스 번호는 숫자여야 합니다."
    );

    expect(() => new Bonus("a")).toThrow(
      "[ERROR] 보너스 번호는 숫자여야 합니다."
    );

    expect(() => new Bonus(" ")).toThrow(
      "[ERROR] 보너스 번호는 숫자여야 합니다."
    );
  });

  test("보너스 번호가 당첨 번호와 중복일 경우 예외가 발생한다.", () => {
    expect(() => new Bonus("1", "1,2,3,4,5,6")).toThrow(
      "[ERROR] 보너스 번호가 당첨 번호와 중복되었습니다."
    );
  });

  test("당첨 번호가 1부터 45사이가 아니라면 예외가 발생한다.", () => {
    expect(() => new Bonus("90", "1,2,3,4,5,6")).toThrow(
      "[ERROR] 보너스 번호를 1부터 45사이의 숫자를 입력해주세요."
    );

    expect(() => new Bonus("0", "1,2,3,4,5,6")).toThrow(
      "[ERROR] 보너스 번호를 1부터 45사이의 숫자를 입력해주세요."
    );
  });
});
