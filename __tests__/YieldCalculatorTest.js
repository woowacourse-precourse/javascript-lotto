const YieldCalculator = require("../src/domain/YieldCalculator");

describe("수익률 계산기 클래스 테스트", () => {
  test("8000원치 구매 하고 5등(5,000) 하나 당첨될 경우 수익률은 62.5", () => {
    const prizeCalculator = new YieldCalculator("8000", [0, 0, 0, 0, 1]);
    const prizeYield = prizeCalculator.getPrizeYield();

    expect(prizeYield).toEqual(62.5);
  });

  test("1000원치 구매하고 1등(2,000,000,000) 하나 당첨될 경우 수익률은 200,000,000", () => {
    const prizeCalculator = new YieldCalculator("1000", [1, 0, 0, 0, 0]);
    const prizeYield = prizeCalculator.getPrizeYield();

    expect(prizeYield).toEqual(200000000);
  });
});
