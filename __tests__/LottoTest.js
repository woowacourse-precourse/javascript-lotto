const Lotto = require("../src/validation/Lotto");

describe("로또 클래스 테스트", () => {
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

  test("로또 번호가 오름차순이 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([2, 4, 1, 3, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 1에서 45의 수가 아닌 번호가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
    expect(() => {
      new Lotto([46, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  })
});
