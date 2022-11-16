const MakeWinResult = require("../src/components/MakeWinResult");

describe("보너스 클래스 테스트", () => {
  test("보너스 번호의 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new MakeWinResult([1, 2, 3, 4, 5, 6], 46);
    }).toThrow("[ERROR]");
  });

  test("숫자 이외의 입력이 들어오면 예외가 발생한다. #1", () => {
    expect(() => {
      new MakeWinResult([3, 4, 5, 6, 7, 8], "1, 2");
    }).toThrow("[ERROR]");
  });

  test("숫자 이외의 입력이 들어오면 예외가 발생한다. #2", () => {
    expect(() => {
      new MakeWinResult([1, 2, 3, 4, 5, 6], "ab");
    }).toThrow("[ERROR]");
  });
});
