const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {

  // validate
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 개수가 6개보다 적으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a']);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 특수문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, '@']);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1부터 45까지의 범위가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 50]);
    }).toThrow("[ERROR]");
  });

  // setBonus
  test("로또 번호에 보너스 번호를 추가한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.setBonus(7);

    expect(lotto.getLotto()).toContain(7);
  });

  // validateBonus
  test("보너스 번호에 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]).setBonus("a");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호에 특수문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]).setBonus("@");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1부터 45까지의 범위가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]).setBonus(50);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호는 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]).setBonus(6);
    }).toThrow("[ERROR]");
  });

  // getLotto
  test("로또 번호를 반환한다.", () => {
    const result = new Lotto([1, 2, 3, 4, 5, 6]).getLotto();
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

});
