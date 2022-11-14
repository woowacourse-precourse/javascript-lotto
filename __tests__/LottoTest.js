const App = require("../src/App");
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
  test("로또 번호는 1부터 45까지의 숫자다", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0]);
    }).toThrow("[ERROR]");
  });
  test("compare-보너스번호 중복 체크", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(() => lotto.compare([[1, 2, 3, 4, 5, 6]], 6)).toThrow("[ERROR]");
  });
  test("compare테스트-totalRankCount", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const { totalRankCount, statistics } = lotto.compare([[1, 2, 3, 4, 5, 6]]);
    expect(totalRankCount).toEqual({ 1: 1, 2: 0, 3: 0, 4: 0, 5: 0 });
  });
  test("compare테스트-statistics", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const { totalRankCount, statistics } = lotto.compare([[1, 2, 3, 4, 5, 6]]);
    expect(statistics).toEqual(2000000000);
  });

  // 아래에 추가 테스트 작성 가능
});
