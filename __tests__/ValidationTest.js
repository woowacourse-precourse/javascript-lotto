const Validation = require("../src/Validation");
const MAX_INTEGER = Number.MAX_SAFE_INTEGER;

describe("Validation 단위 테스트", () => {
  test("1,000의 배수 여부 확인 테스트", () => {
    const validation = Validation;
    const result1 = validation.isDivisible(170000);
    const result2 = validation.isDivisible(170123);

    expect(result1).toEqual(true);
    expect(result2).toEqual(false);
  });

  test("정수 범위 벗어난 구입 금액 테스트", () => {
    const validation = Validation;
    const result1 = validation.isAvailablePurchase(MAX_INTEGER);
    const result2 = validation.isAvailablePurchase(MAX_INTEGER + 1);

    expect(result1).toEqual(true);
    expect(result2).toEqual(false);
  });
});
