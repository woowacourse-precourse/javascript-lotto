const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test('로또가 가진 번호를 반환한다.', () => {
    const lotto = new Lotto([2, 7, 12, 25, 35, 42]);

    expect(lotto.getNumbers()).toEqual([2, 7, 12, 25, 35, 42]);
  });

  test('당첨 번호와 로또 번호를 비교한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winNumbers = [2, 5, 6, 10, 12, 45];

    expect(lotto.getMatchCount(winNumbers)).toBe(3);
  });

  test('보너스 번호를 가지고 있는지 확인한다.', () => {
    const lotto = new Lotto([1,2,3,4,5,6]);

    expect(lotto.hasWinBonus(6)).toBe(true);
    expect(lotto.hasWinBonus(7)).toBe(false);
  })
});
