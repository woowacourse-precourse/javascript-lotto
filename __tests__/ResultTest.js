const Result = require("../src/Result");

describe("결과 테스트", () => {
  test("하나의 복권에 대한 점수 산정", () => {
    const result = new Result(
      1000,
      [[7, 13, 19, 22, 31, 45]],
      [1, 2, 3, 4, 5, 6],
      7
    );

    result.calculateOneLotto(result.lottoArray[0]);

    expect(result.score).toBe(0);
    expect(result.matchBonus).toBe(true);
  });

  test("맞춘 숫자 개수에 따라 등수 산정", () => {
    const result = new Result(
      1000,
      [[7, 13, 19, 22, 31, 45]],
      [1, 2, 3, 4, 5, 6],
      7
    );

    result.score = 3;

    result.getRanking();

    expect(result.rank).toStrictEqual([0, 0, 0, 0, 1]);
  });

  test("총 상금 산출", () => {
    const result = new Result(
      1000,
      [[1, 2, 3, 4, 5, 7]],
      [1, 2, 3, 4, 5, 6],
      7
    );

    const finalPrize = result.getPrize();

    expect(finalPrize).toBe(30000000);
  });

  test("수익률 산출", () => {
    const lottoArray = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];

    const result = new Result("8000", lottoArray, [1, 2, 3, 4, 5, 6], 7);

    const earningsRate = result.getEarningsRate();

    expect(earningsRate).toBe("62.5");
  });
});
