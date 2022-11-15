const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호에 숫자가 아닌 문자가 들어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([NaN, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

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

  test("로또 번호에 0보다 작은 수가 들어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([-1, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 45보다 큰 수가 들어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([46, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 소수가 들어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([5.5, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });
});
