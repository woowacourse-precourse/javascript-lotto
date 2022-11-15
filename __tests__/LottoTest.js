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

  test("로또 번호가 숫자가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      let numbers = ['a','b','c','d','e','f'];
      new Lotto(numbers);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 숫자가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      let numbers = [1, ' ', 3, 4, 5, 6];
      new Lotto(numbers);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 범위 밖일때 예외가 발생한다.", () => {
    expect(() => {
      let numbers = [-1, 0, 46, 47, 48, 48];
      new Lotto(numbers);
    }).toThrow("[ERROR]");
  });
});
