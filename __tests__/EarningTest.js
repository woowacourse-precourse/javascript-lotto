const Earning = require("../src/controller/Earning.js");

describe("통계 수익 클래스 테스트", () => {
  test("당첨되지 않았을 때 수익률 확인", () => {
    const lottoResult = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
    };
    const purchaseAmount = 5000;
    const earning = new Earning(lottoResult);
    const totalEarning = earning.getTotalLottoEarning();
    const earningRate = earning.getEarningRate(totalEarning, purchaseAmount);
    expect(earningRate).toBe("0.0");
  });

  test("수익률 맞는지 확인", () => {
    const lottoResult = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 1,
    };
    const purchaseAmount = 8000;
    const earning = new Earning(lottoResult);
    const totalEarning = earning.getTotalLottoEarning();
    const earningRate = earning.getEarningRate(totalEarning, purchaseAmount);
    expect(earningRate).toBe("62.5");
  });

  test("소수점 반올림 확인", () => {
    const lottoResult = {
      FIRST: 0,
      SECOND: 1,
      THIRD: 0,
      FOURTH: 2,
      FIFTH: 0,
    };
    const purchaseAmount = 45000;
    const earning = new Earning(lottoResult);
    const totalEarning = earning.getTotalLottoEarning();
    const earningRate = earning.getEarningRate(totalEarning, purchaseAmount);
    expect(earningRate).toBe("66888.9");
  });
});
