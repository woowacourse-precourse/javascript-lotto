const Statistic = require("../src/Statistic");
const { LOTTO_RANK } = require("../src/constants/index");

describe("Statistic 클래스 테스트", () => {
  const lottos = [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 7],
    [1, 2, 3, 4, 5, 10],
    [1, 2, 3, 4, 9, 10],
    [1, 2, 3, 8, 9, 10],
    [34, 35, 36, 37, 38, 39],
    [34, 35, 36, 37, 38, 39],
    [34, 35, 36, 37, 38, 39],
  ];
  const winNumber = "1,2,3,4,5,6";
  const bonusNumber = 7;
  const ranks = Object.values(LOTTO_RANK.NAME);
  const matchCounts = [6, 5, 5, 4, 3];

  test("등수와 당첨 수에 따라 수익 금액을 리턴하는 기능", () => {
    const calcYields = Object.values(LOTTO_RANK.AMOUNT);
    const matchCount = 1;

    const statistic = new Statistic();

    calcYields.forEach((calcYield, index) => {
      expect(statistic.calculateYield(ranks[index], matchCount)).toBe(calcYield);
    });
  });

  test("당첨 된 번호 수에 따라 해쉬맵에 저장할 키 값을 리턴하는 기능", () => {
    const statistic = new Statistic();
    ranks.forEach((rank, index) => {
      expect(statistic.calculateRank({ matchCount: matchCounts[index], lotto: lottos[index], bonusNumber })).toBe(rank);
    });
  });

  test("구매한 로또 번호를 당첨 번호와 비교해서 맞춘 갯수를 리턴하는 기능", () => {
    const lotto = [1, 2, 3, 4, 5, 6];
    const count = 6;

    const statistic = new Statistic();

    expect(statistic.getMatchingCount({ lotto, winNumber })).toBe(count);
  });

  test("당첨 결과를 해쉬맵으로 저장하여 리턴하는 기능", () => {
    const statistic = new Statistic();
    const rankResult = statistic.getRankResult({ lottos, winNumber, bonusNumber });

    ranks
      .map((rank) => [rank, 1])
      .forEach(([key, count]) => {
        expect(rankResult.has(key)).toBeTruthy();
        expect(rankResult.get(key)).toBe(count);
      });
  });

  test("당첨 결과에 따른 수익률을 리턴하는 기능", () => {
    const rank = new Map();
    rank.set(LOTTO_RANK.NAME.RANK_FIVE, 1);
    const totalYield = "62.5";

    const statistic = new Statistic();

    expect(statistic.getYield({ rank, lottos })).toBe(totalYield);
  });
});
