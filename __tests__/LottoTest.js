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

  test("숫자 외의 다른 문자를 입력하면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 5, 6, "A"]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호의 숫자가 1~45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 45, 5]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호를 쉼표로 구분하지 않고 입력하면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1, 2, 3/4, 5 6");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호와 중복되는 보너스 번호를 입력하면 예외가 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.validateBonus("3");
    }).toThrow("[ERROR]");
  });
});
