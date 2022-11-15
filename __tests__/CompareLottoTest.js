const CompareLotto = require("../src/CompareLotto");

describe("CompareLotto 클래스 테스트", () => {
  test("몇개 당첨됐는지 검사하는 함수 테스트", () => {
    const lotto = [1,2,3,4,5,6];
    const winNumber = [1,2,3,4,5,7];

    expect(CompareLotto.countPrize(lotto, winNumber)).toBe(5);
  });

  test("보너스 번호가 당첨됐는지 검사하는 함수 테스트", () => {
    const winNumber = [1,2,3,4,5,7];
    const bonus = 3;

    expect(CompareLotto.countBonus(winNumber, bonus)).toBe(true);
  });
});