const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
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

  test("로또 번호가 1~45 범위 밖의 수로 입력되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 333, 4, 5, 6]);
    }).toThrow("[ERROR]");
    expect(() => {
      new Lotto([-1, 0, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});

describe("로또 클래스 테스트 - 보너스 번호" ,() => {
  test("보너스 번호가 1~45 범위 밖의 수로 입력되면 예외가 발생한다.", () => {
    expect(() => {
      Lotto.prototype.setBonusNum(-1);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.setBonusNum(1);
    }).toThrow("[ERROR]");
  })
});
