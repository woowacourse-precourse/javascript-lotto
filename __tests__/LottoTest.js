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
  test("로또와 당첨번호를 비교해 같은 숫자의 개수를 셀 수 있다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.compareWith("1,2,3,5,7,8");
    expect(lotto.matchedNumberCount).toBe(4);
  });

  test("로또에서 보너스 번호와 일치하는 숫자가 있는지 확인할 수 있다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.compareWith("1,2,3,5,6,8");
    lotto.checkMatching(4);

    expect(lotto.hasBonusNumber).toBe(true);
  });

  test("로또가 몇 등에 당첨되었는지 알 수 있는 문자열을 리턴한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.compareWith("1,2,3,5,6,8");
    lotto.checkMatching(10);

    expect(lotto.setRank()).toBe("rank3");
  });
});
