const Lotto = require("../src/Lotto");
const Comparison = require("../src/ComparisonOfWinningNumbers");

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

  // 아래에 추가 테스트 작성 가능
  test("사용자가 구매한 로또 번호와 당첨 번호를 비교", () => {
    const comparison = new Comparison([2, 4, 6, 8, 10, 12], [1, 2, 3, 4, 5, 6]);
    expect(comparison.Comparison()).toEqual([2, 4, 6]);
  });
});
