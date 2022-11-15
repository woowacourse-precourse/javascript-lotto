const Statistics = require("../src/model/Statistics");

describe("통계 관련 테스트", () => {
  const statistics = new Statistics();

  test("번호 일치 개수 테스트", () => {
    expect(
      statistics.getCorrectNumberFromSingleLotto(
        [3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6],
      ),
    ).toEqual(4);
  });

  test("등수 반환 테스트", () => {
    expect(statistics.getFinalRank(6, [1, 2, 3, 4, 5, 6], 7)).toEqual("first");
    expect(statistics.getFinalRank(5, [1, 2, 3, 4, 5, 7], 7)).toEqual("second");
    expect(statistics.getFinalRank(5, [1, 2, 3, 4, 5, 6], 7)).toEqual("third");
    expect(statistics.getFinalRank(2, [1, 2, 3, 4, 5, 6], 7)).toEqual(null);
  });
});
