const Lotto = require("../src/Lotto");

const bonus = new Lotto([1, 2, 3, 4, 5, 6]);

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 개수가 6개 이하이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 범위가 1 ~ 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 범위가 1 ~ 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([-1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 숫자 이외의 문자가 들어오면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "a"]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호의 범위가 1 ~ 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      bonus.validateBonus(-1);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호의 범위가 1 ~ 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      bonus.validateBonus(46);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 로또 번호에 속하면 예외가 발생한다.", () => {
    expect(() => {
      bonus.validateBonus(1);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      bonus.validateBonus("a");
    }).toThrow("[ERROR]");
  });
  // 아래에 추가 테스트 작성 가능
});
