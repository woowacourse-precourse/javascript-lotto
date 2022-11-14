const Profit = require("../src/Profit");

describe("수익율 계산 클래스 테스트", () => {
  test("미당첨 수익율 확인", () => {
    const purchase = 50000;
    const result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    const profit = new Profit(purchase, result).calculate();

    expect(profit).toBe("0.0");
  });

  test("수익율 100% 이내 확인", () => {
    const purchase = 50000;
    const result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 };
    const profit = new Profit(purchase, result).calculate();

    expect(profit).toBe("10.0");
  });

  test("수익율 100% 이상 확인", () => {
    const purchase = 50000;
    const result = { 1: 1, 2: 0, 3: 0, 4: 0, 5: 0 };
    const profit = new Profit(purchase, result).calculate();

    expect(profit).toBe("4000000.0");
  });

  test("수익율 소수점 반올림 확인", () => {
    const purchase = 7632000;
    const result = { 1: 0, 2: 0, 3: 1, 4: 1, 5: 1 };
    const profit = new Profit(purchase, result).calculate();

    expect(profit).toBe("20.4");
  });
});
