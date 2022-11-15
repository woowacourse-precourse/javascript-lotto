const Statistic = require("../src/Statistic");
const { LOTTO_RANK, LOTTO_RANK_HASH } = require("../src/constants/index");

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
    const calcYields = Object.values(LOTTO_RANK_HASH.AMOUNT);

    const statistic = new Statistic();

    calcYields.forEach((calcYield, index) => {
      expect(statistic.calculateYield(ranks[index])).toBe(calcYield);
    });
  });

  test("당첨 된 번호 수에 따라 해쉬맵에 저장할 키 값을 리턴하는 기능", () => {
    const statistic = new Statistic();
    ["RANK_ONE", "RANK_TREE", "RANK_TREE", "RANK_FOUR", "RANK_FIVE"].forEach(
      (rank, index) => {
        expect(statistic.calculateRank(matchCounts[index])).toBe(rank);
      }
    );
  });

  test("구매한 로또 번호를 당첨 번호와 비교해서 맞춘 갯수를 리턴하는 기능", () => {
    const lotto = [1, 2, 3, 4, 5, 6];
    const count = 6;

    const statistic = new Statistic();

    expect(statistic.getMatchingCount({ lotto, winNumber })).toBe(count);
  });

  test("당첨 결과를 해쉬맵으로 저장하여 리턴하는 기능", () => {
    const statistic = new Statistic();
    const rankResult = statistic.getRankResult({
      lottos,
      winNumber,
      bonusNumber,
    });

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

  test("", () => {
    const percent = "62.5";
    const outputs = [
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      `총 수익률은 62.5%입니다.`,
    ];
    const hashMap = new Map();
    Object.values(LOTTO_RANK.NAME).forEach((rank) => hashMap.set(rank, 0));
    hashMap.set(LOTTO_RANK.NAME.RANK_FIVE, 1);

    const statistic = new Statistic();

    const messages = statistic.generateMessage({
      rank: hashMap,
      totalYield: percent,
    });

    messages.forEach((message, index) => {
      expect(message).toBe(outputs[index]);
    });
  });
});
