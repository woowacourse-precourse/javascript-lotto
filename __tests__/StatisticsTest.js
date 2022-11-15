const Statistics = require("../src/domain/Statistics.js");

describe("Statistics.makePrizeStatistics", () => {
  test("각 로또 등수가 주어지면 등수를 통계하여 객체를 return 해야 한다.", () => {
    const statistics = new Statistics();
    const eachLottoPrize = ["fifthPrize", "fifthPrize", "fail"];

    const result = statistics.makePrizeStatistics(eachLottoPrize);

    expect(result).toStrictEqual({
      fifthPrize: 2,
      fourthPrize: 0,
      thirdPrize: 0,
      secondPrize: 0,
      firstPrize: 0,
      fail: 1,
    });
  });
});

describe("Statistics.calculateTotalPrizeMoney", () => {
  test("등수 통계가 주어지면, 총 상금을 return 해야 한다.", () => {
    const statistics = new Statistics();
    const prizeStatistics = {
      fifthPrize: 2,
      fourthPrize: 0,
      thirdPrize: 0,
      secondPrize: 0,
      firstPrize: 0,
      fail: 1,
    };

    const result = statistics.calculateTotalPrizeMoney(prizeStatistics);

    expect(result).toStrictEqual(10000);
  });
});

describe("Statistics.calculateYieldRatio", () => {
  test("수익금과 초기투입금이 주어지면 수익률을 return 해야 한다.", () => {
    const statistics = new Statistics();
    const totalPrizeMoney = 10000;
    const purchaseAmount = 5000;

    const result = statistics.calculateYieldRatio(totalPrizeMoney, purchaseAmount);

    expect(result).toStrictEqual("200.0");
  });

  test("수익금이 없을 시 '0.0'을 return 해야 한다.", () => {
    const statistics = new Statistics();
    const totalPrizeMoney = 0;
    const purchaseAmount = 5000;

    const result = statistics.calculateYieldRatio(totalPrizeMoney, purchaseAmount);

    expect(result).toStrictEqual("0.0");
  });
});

describe("Statistics.calculatePrizeStatisticsTemplates", () => {
  test("등수 통계가 주어지면, 등수 통계 템플릿을 return 해야 한다.", () => {
    const statistics = new Statistics();
    const prizeStatistics = {
      fifthPrize: 2,
      fourthPrize: 0,
      thirdPrize: 0,
      secondPrize: 0,
      firstPrize: 0,
      fail: 0,
    };

    const result = statistics.calculatePrizeStatisticsTemplates(prizeStatistics);
    const outputTemplates = [
      "3개 일치 (5,000원) - 2개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
    ];

    console.log(result);
    expect(result).toStrictEqual(outputTemplates);
  });
});

describe("Statistics.makeStatisticsData", () => {
  test("makeStatisticsData메서드가 실행되면 총 상금, 수익률, 등수 통계 템플릿 값이 생성되어야 한다.", () => {
    const statistics = new Statistics();
    const eachLottoPrize = ["fifthPrize", "fifthPrize", "fail"];
    const purchaseAmount = 3000;

    statistics.makeStatisticsData(eachLottoPrize, purchaseAmount);
    const totalPrizeMoney = statistics.totalPrizeMoney;
    const yieldRatio = statistics.yieldRatio;
    const prizeStatisticsTemplates = statistics.prizeStatisticsTemplates;

    expect(totalPrizeMoney).toBeDefined();
    expect(yieldRatio).toBeDefined();
    expect(prizeStatisticsTemplates).toBeDefined();
  });
});
