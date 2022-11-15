const { CostValidator } = require("../../src/validators");

describe("CostValidator.validatePurchaseCost", () => {
  test("입력받은 비용이 숫자가 아니라면 예외가 발생해야 한다.", () => {
    // given
    const cost = Number("1000원");

    // when
    // then
    expect(() => {
      CostValidator.validatePurchaseCost(cost);
    }).toThrow();
  });

  test("입력받은 비용이 로또 가격보다 적다면 예외가 발생해야 한다.", () => {
    // given
    const cost = 0;

    // when
    // then
    expect(() => {
      CostValidator.validatePurchaseCost(cost);
    }).toThrow();
  });

  test("입력받은 비용이 음수라면 예외가 발생해야 한다.", () => {
    // given
    const cost = -1000;

    // when
    // then
    expect(() => {
      CostValidator.validatePurchaseCost(cost);
    }).toThrow();
  });

  test("입력받은 비용이 Number.MAX_SAFE_INTEGER보다 크다면 예외가 발생해야 한다.", () => {
    // given
    const cost = Number.MAX_SAFE_INTEGER + 9; // Number.MAX_SAFE_INTEGER보다 큰 1,000단위

    // when
    // then
    expect(() => {
      CostValidator.validatePurchaseCost(cost);
    }).toThrow();
  });

  test("입력받은 비용이 1,000 단위가 아니라면 예외가 발생해야 한다.", () => {
    // given
    const cost = 4674;

    // when
    // then
    expect(() => {
      CostValidator.validatePurchaseCost(cost);
    }).toThrow();
  });
});
