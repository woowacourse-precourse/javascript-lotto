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
  test("로또 번호의 개수가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 범위가 1~45가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 50]);
    }).toThrow("[ERROR]");
  });

  test("당첨번호와 일치하는 번호 개수를 리턴한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(lotto.getMatchCount(winningNumbers)).toEqual(5);
  });

  test("보너스 번호를 가지고 있는지 여부를 리턴한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.hasBonusNumber(6)).toEqual(true);
    expect(lotto.hasBonusNumber(7)).toEqual(false);
  });
});
