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

  test("아무것도 입력되지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 범위를 벗어나는 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("숫자 이외의 값이 입력되면 예외가 발생한다. [문자]", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "e"]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호 입력 예외 Test", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(() => {
      lotto.bonusNumberException("46");
    }).toThrow("[ERROR]");
    expect(() => {
      lotto.bonusNumberException("e");
    }).toThrow("[ERROR]");
    expect(() => {
      lotto.bonusNumberException("1");
    }).toThrow("[ERROR]");
  });
});
