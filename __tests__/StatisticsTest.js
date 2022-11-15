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
});
