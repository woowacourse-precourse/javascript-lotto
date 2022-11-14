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

  test("로또 번호의 개수가 6개 미만이라면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("콤마 사이에 번호를 입력 안 할 시 예외가 발생한다", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, " ", 6]);
    }).toThrow("[ERROR]");
  });
  test("문자를 입력할 시 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 6, "a"]);
    }).toThrow("[ERROR]");
  });
});
