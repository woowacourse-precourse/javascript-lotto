const PrizeCalculator = require("../src/domain/PrizeCalculator");

describe("상금 계산기 클래스 테스트", () => {
  test("5등 당첨금은 5,000원이다.", () => {
    const prizeCalculator = new PrizeCalculator();
    const prizeMoney = prizeCalculator.getPrizeMoney([0, 0, 0, 0, 1]);

    expect(prizeMoney).toEqual(5000);
  });

  test("1등 당첨금은 2,000,000,000원이다.", () => {
    const prizeCalculator = new PrizeCalculator();
    const prizeMoney = prizeCalculator.getPrizeMoney([1, 0, 0, 0, 0]);

    expect(prizeMoney).toEqual(2000000000);
  });

  test("8000원치 구매 하고 5등(5,000) 하나 당첨될 경우 수익률은 62.5", () => {
    const prizeCalculator = new PrizeCalculator();
    const rateOfReturn = prizeCalculator.getRateOfReturn("8000", "5000");

    expect(rateOfReturn).toEqual(62.5);
  });

  test("1000원치 구매하고 1등(2,000,000,000) 하나 당첨될 경우 수익률은 200,000,000", () => {
    const prizeCalculator = new PrizeCalculator();
    const rateOfReturn = prizeCalculator.getRateOfReturn("1000", "2000000000");

    expect(rateOfReturn).toEqual(200000000);
  });
});
