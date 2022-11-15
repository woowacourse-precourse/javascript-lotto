const LottoCalculator = require("../src/LottoCalculator");

describe("LottoCalculator 클래스 테스트", () => {
  test("당첨된 로또들의 상금의 합을 구할 수 있다.", () => {
    const lottoCalculator = new LottoCalculator();
    const input = {
      rank1: 0,
      rank2: 0,
      rank3: 0,
      rank4: 2,
      rank5: 1,
    };

    lottoCalculator.sumRewards(input);

    expect(lottoCalculator.totalProfit).toBe(105000);
  });
});
