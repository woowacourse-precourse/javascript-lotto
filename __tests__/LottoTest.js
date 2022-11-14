const Lotto = require("../src/Lotto");

describe("당첨 번호 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 0이 포함되어 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 음수가 포함되어 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, -2, 3, 4, 5, 0]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 45를 넘으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 60]);
    }).toThrow("[ERROR]");
  });
});
