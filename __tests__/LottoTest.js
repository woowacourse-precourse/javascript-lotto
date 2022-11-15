const Lotto = require("../src/Lotto");

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

  test("로또 번호가 범위를 벗어나면 예외가 발생한다._1", () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 범위를 벗어나면 예외가 발생한다._2", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("랜덤번호와 당첨번호가 4개 일치할때 등수 index = 1", () => {
    let lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.setSizeCount(new Set([1, 2, 3, 4, 5, 6, 7, 8]), 9)).toEqual(1);
  });

  test("랜덤번호와 당첨번호가 6개 일치할때 등수 index = 4", () => {
    let lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.setSizeCount(new Set([1, 2, 3, 4, 5, 6]), 9)).toEqual(4);
  });

});