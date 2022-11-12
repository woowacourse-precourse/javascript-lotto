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

  test("로또 번호가 1부터 45가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto([1, NaN, 3, 4, 5, 45]);
    }).toThrow("[ERROR]");
  });

  test("등록한 보너스 번호를 가져오는 기능", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.addBonusNumber(7);
    expect(lotto.bonusNumber).toEqual(7);
  });

  test("보너스 번호를 등록하지 않았다면 null을 반환", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.bonusNumber).toEqual(null);
  });

  test("보너스 번호가 1부터 45까지의 숫자가 아니라면 예외가 발생한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(() => {
      lotto.addBonusNumber("7");
    }).toThrow("[ERROR]");

    expect(() => {
      lotto.addBonusNumber(NaN);
    }).toThrow("[ERROR]");

    expect(() => {
      lotto.addBonusNumber(46);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 중복된 번호라면 예외가 발생한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(() => {
      lotto.addBonusNumber(6);
    }).toThrow("[ERROR]");
  });
});
