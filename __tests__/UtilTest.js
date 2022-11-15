const calcCount = require("../src/utils/calcCount");
const calcResult = require("../src/utils/calcResult");
const calcRevenueRate = require("../src/utils/calcRevenueRate");
const calcRevenue = require("../src/utils/calcRevenue");

describe("유틸 함수 기능 테스트", () => {
  test("구매한 로또의 개수를 리턴하는 함수", () => {
    expect(calcCount("100")).toBe(0);
    expect(calcCount("1000")).toBe(1);
    expect(calcCount("10000")).toBe(10);
  });

  test("등수별 개수를 리턴하는 함수", () => {
    expect(
      calcResult(
        [
          [8, 21, 23, 41, 42, 43],
          [3, 5, 11, 16, 32, 38],
          [7, 11, 16, 35, 36, 44],
          [1, 8, 11, 31, 41, 42],
          [13, 14, 16, 38, 42, 45],
          [7, 11, 30, 40, 42, 43],
          [2, 13, 22, 32, 38, 45],
          [1, 3, 5, 14, 22, 45],
        ],
        [1, 2, 3, 4, 5, 6],
        7
      )
    ).toStrictEqual([7, 1, 0, 0, 0, 0]);
  });

  test("총 수익을 계산하는 함수", () => {
    expect(calcRevenue([7, 1, 0, 0, 0, 0])).toBe(5000);
  });

  test("수익률을 계산하는 함수", () => {
    expect(calcRevenueRate(5000, 8000)).toBe("62.5");
  });
});
