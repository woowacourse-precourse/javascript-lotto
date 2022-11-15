const Lotto = require("../src/Lotto");

// TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
describe("로또 클래스 테스트", () => {
  test("로또 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["a", 3, "b", 5, 6, 7]);
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

  test("로또 번호가 1 ~ 45 범위에 해당하지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 50, 3, 64, 0, 5]);
    }).toThrow("[ERROR]");
  });
});
