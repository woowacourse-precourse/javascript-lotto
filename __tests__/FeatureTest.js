const App = require("../src/App");

describe("상금 계산과 수익률 계산", () => {
  test("결과에 해당하는 총 합을 반환한다.", () => {
    expect(new App().getTotalPrize({ 3: 1, 4: 2, 5: 0, 5.5: 0, 6: 1 })).toBe(
      2000105000
    );

    expect(new App().getTotalPrize({ 3: 0, 4: 4, 5: 1, 5.5: 1, 6: 0 })).toBe(
      31700000
    );
  });

  test("금액과 상금을 계산해 수익률을 낸다.", () => {
    expect(new App().caculateProfitRatio(2000, 50000)).toBe("2500.0");
    expect(new App().caculateProfitRatio(79000, 15000)).toBe("19.0");
  });
});
