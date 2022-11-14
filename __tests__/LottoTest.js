const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 번호에 1~45 이외의 수가 포함되어 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 555]);
    }).toThrow("[ERROR]");
  });

  test("countMatch 메서드 테스트", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto([10, 20, 30, 40, 5, 6]);

    expect(lotto.countMatch(winningNumbers)).toBe(2);
  });

  test("hasBonusNumber 메서드 테스트", () => {
    const bonusNumber = 7;
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.hasBonusNumber(bonusNumber)).toBe(false);
  });

  test("hasBonusNumber 메서드 테스트2", () => {
    const bonusNumber = 1;
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.hasBonusNumber(bonusNumber)).toBe(true);
  });
});
