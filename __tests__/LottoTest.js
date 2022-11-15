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

  test("로또 번호가 1~45의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 45]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 자연수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1.5, 2, 3, 4, 5, 45]);
    }).toThrow("[ERROR]");
  });

  test("getBonus 메서드가 정상 동작한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    lotto.setBonus(7);

    const bonusNumber = lotto.getBonus();
    expect(bonusNumber).toEqual(7);
  });

  test("getWonLotto 메서드가 정상 동작한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.setWonLotto([1, 2, 3, 4, 5, 6]);

    const wonLotto = lotto.getWonLotto();
    expect(wonLotto).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
