const Lotto = require("../src/Lotto");
const Comparison = require("../src/ComparisonOfWinningNumbers");
const ComparisonOfWinningNumbers = require("../src/ComparisonOfWinningNumbers");

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

  test("사용자가 구매한 로또 번호들과 당첨 번호 비교", () => {
    let userLottoNumber = [[1, 8, 12, 22, 26, 28], [3, 6, 9, 13, 16, 19], [21, 26, 38, 41, 42, 44]];
    let winningNumber = [12, 16, 21, 22, 26, 44];
    let answer = [];
    let result = [3, 0, 3];
    for (let i of userLottoNumber) {
      const comparison = new Comparison(i, winningNumber);
      answer.push(comparison.countAndSave(comparison.checkTheNumber(comparison.Comparison())));
    }
    expect(answer).toEqual(result);
  });

  test("당첨 내역", () => {
    const comparison = new Comparison();
    expect(comparison.checkTheRank([4, 5, 6])).toEqual(undefined);
  });
});
