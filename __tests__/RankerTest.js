const Ranker = require("../src/Ranker");

describe("순위 계산 단위 테스트", () => {
  const lottos = [
    [8, 21, 23, 41, 42, 43],
    [3, 5, 11, 16, 32, 38],
    [7, 11, 16, 35, 36, 44],
    [1, 8, 11, 31, 41, 42],
    [13, 14, 16, 38, 42, 45],
    [7, 11, 30, 40, 42, 43],
    [2, 13, 22, 32, 38, 45],
    [1, 3, 5, 14, 22, 45],
  ];
  const win1 = [8, 21, 23, 30, 40, 42];
  const bonus1 = 43;
  test("4, 5등 당첨 개수 계산", () => {
    expect(Ranker.getPriceRank(lottos, [win1, bonus1])).toEqual([
      1, 1, 0, 0, 0,
    ]);
  });

  const win2 = [8, 21, 23, 30, 40, 45];
  const bonus2 = 43;
  test("5등 당첨 개수 계산", () => {
    expect(Ranker.getPriceRank(lottos, [win2, bonus2])).toEqual([
      1, 0, 0, 0, 0,
    ]);
  });

  const win3 = [8, 21, 23, 41, 42, 45];
  const bonus3 = 43;
  test("2, 5등 당첨 개수 계산", () => {
    expect(Ranker.getPriceRank(lottos, [win3, bonus3])).toEqual([
      1, 0, 0, 1, 0,
    ]);
  });
});
