const Profit = require("../src/controller/Profit");

describe("수익률 클래스 테스트", () => {
  test("수익률 계산 테스트", () => {
      const profit = new Profit({});
      const result = profit.calculateProfit(3000,50);

      expect(result).toEqual(1666.7)
    });

});