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

  test("로또 번호숫자가 1보다 작을 경우 예외 발생", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호숫자가 45보다 클 경우 예외 발생", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호는 숫자만 가능", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "6"]);
    }).toThrow("[ERROR]");
  });

  // 로또 등수 확인
  test("로또 1등.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.compare([1, 2, 3, 4, 5, 6], 7)).toBe(1);
  });

  test("로또 2등.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
    expect(lotto.compare([1, 2, 3, 4, 5, 6], 7)).toBe(2);
  });

  test("로또 3등.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 6, 8]);
    expect(lotto.compare([1, 2, 3, 4, 5, 6], 7)).toBe(3);
  });

  test("로또 4등.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 7, 8]);
    expect(lotto.compare([1, 2, 3, 4, 5, 6], 7)).toBe(4);
  });

  test("로또 5등.", () => {
    const lotto = new Lotto([1, 2, 3, 7, 8, 9]);
    expect(lotto.compare([1, 2, 3, 4, 5, 6], 7)).toBe(5);
  });

  test("당첨되지 못한 경우", () => {
    const lotto = new Lotto([1, 2, 7, 8, 9, 10]);
    expect(lotto.compare([1, 2, 3, 4, 5, 6], 7)).toBe(0);
  });
});
