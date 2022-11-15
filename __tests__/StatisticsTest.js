const Statistics = require("../src/model/Statistics");

describe("통계 관련 테스트", () => {
  const statistics = new Statistics();

  test("번호 일치 개수 테스트", () => {
    expect(
      statistics.getCorrectNumberFromSingleLotto(
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
      ),
    ).toEqual(6);
    expect(
      statistics.getCorrectNumberFromSingleLotto(
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 7],
      ),
    ).toEqual(5);
    expect(
      statistics.getCorrectNumberFromSingleLotto(
        [3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6],
      ),
    ).toEqual(4);
    expect(
      statistics.getCorrectNumberFromSingleLotto(
        [1, 2, 3, 4, 5, 6],
        [1, 2, 7, 8, 8, 6],
      ),
    ).toEqual(3);
  });

  test("등수 반환 테스트", () => {
    expect(statistics.getFinalRank(6, [1, 2, 3, 4, 5, 6], 7)).toEqual("first");
    expect(statistics.getFinalRank(5, [1, 2, 3, 4, 5, 7], 7)).toEqual("second");
    expect(statistics.getFinalRank(5, [1, 2, 3, 4, 5, 6], 7)).toEqual("third");
    expect(statistics.getFinalRank(2, [1, 2, 3, 4, 5, 6], 7)).toEqual(null);
  });

  test("수익률 판단 테스트", () => {
    statistics.setRanks("fifth", 1);
    expect(statistics.getMoneyEarned()).toEqual(5000);
    statistics.setRanks("fourth", 1);
    expect(statistics.getMoneyEarned()).toEqual(55000);
    statistics.updateRateOfReturn(8000, 5000);
    expect(statistics.getRateOfReturn()).toEqual(62.5);
    statistics.updateRateOfReturn(5, 1560000);
    expect(statistics.getRateOfReturn()).toEqual(31200000.0);
  });
});
