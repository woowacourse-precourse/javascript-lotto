const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1,2,3,4,5,6,7");
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1,2,3,4,5,5");
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1,2,3,4,a,5");
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1a,2,3,4,a,5");
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1,52,3,4,5,6");
    }).toThrow("[ERROR]");
  });
});
