const WinNumber = require("../src/domain/WinNumber");

describe("WinNumber 클래스 테스트", () => {
  test("당첨 번호가 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => new WinNumber("1,가, ,as,")).toThrow(
      "[ERROR] 당첨 번호는 숫자여야 합니다."
    );

    expect(() => new WinNumber("!,,1!,$#@ ,a")).toThrow(
      "[ERROR] 당첨 번호는 숫자여야 합니다."
    );
  });

  test("당첨 번호가 6개가 아닌 예외가 발생한다.", () => {
    expect(() => new WinNumber("1,2,3,4,5,6,7")).toThrow(
      "[ERROR] 당첨 번호를 6개 입력해주세요."
    );

    expect(() => new WinNumber("1,2")).toThrow(
      "[ERROR] 당첨 번호를 6개 입력해주세요."
    );
  });

  test("당첨 번호가 중복된 예외가 발생한다.", () => {
    expect(() => new WinNumber("1,2,2,2,2,2")).toThrow(
      "[ERROR] 당첨 번호가 중복되었습니다."
    );

    expect(() => new WinNumber("1,2,3,4,5,5")).toThrow(
      "[ERROR] 당첨 번호가 중복되었습니다."
    );
  });

  test("당첨 번호가 1부터 45사이가 아니라면 예외가 발생한다.", () => {
    expect(() => new WinNumber("32,43,76,12,47,13")).toThrow(
      "[ERROR] 당첨번호는 1부터 45사이의 숫자를 입력해주세요."
    );

    expect(() => new WinNumber("0,1,2,3,4,5")).toThrow(
      "[ERROR] 당첨번호는 1부터 45사이의 숫자를 입력해주세요."
    );
  });
});
