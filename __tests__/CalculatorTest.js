const Calculator = require("../src/Calculator");

describe("계산기 클래스 테스트", () => {
  test("구매 수량 테스트", () => {
    const calculator = new Calculator();
    const result = calculator.calculateAmountOfLotto(9000);
    expect(result).toBe(9);
  });

  test("수익률 테스트", () => {
    const calculator = new Calculator();
    const result = calculator.calculateRateOfReturn(8000, 5000);
    expect(result).toBe(62.5);
  });
});
