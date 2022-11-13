const LottoStatistics = require("../../src/domain/LottoStatistics");

describe("로또 통계 클래스 테스트", () => {
  test("번호를 몇 개 맞췄는지 알려준다.", () => {
    const lottoStatistics = new LottoStatistics();
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const TEST_CASE = [
      {
        numbers: [1, 2, 3, 4, 5, 6],
        result: 6,
      },
      {
        numbers: [11, 12, 13, 14, 15, 16],
        result: 0,
      },
      {
        numbers: [1, 3, 4, 5, 6, 7],
        result: 5,
      },
    ];

    TEST_CASE.forEach(({ numbers, result }) => {
      const expectedResult = lottoStatistics.match(numbers, winningNumbers);
      expect(expectedResult).toEqual(result);
    });
  });
});
