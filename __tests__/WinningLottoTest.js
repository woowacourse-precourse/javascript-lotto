const WinningLotto = require("../src/domain/WinningLotto");

describe("당첨 로또 클래스 테스트", () => {
  test("보너스 번호의 범위가 1~45 사이가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 50);
    }).toThrow("[ERROR] 보너스 번호의 범위는 1~45 사이여야 합니다.");
  });
});
