const UserValidation = require("../../src/Validation/UserValidation");
const MAX_INTEGER = Number.MAX_SAFE_INTEGER;

describe("Validation 단위 테스트", () => {
  test("1,000의 배수 여부 확인 테스트", () => {
    const validation = UserValidation;
    expect(() => {
      validation.isDivisible(170123);
    }).toThrow("[ERROR]");
  });

  test("최대 정수 범위 벗어난 구입 금액 테스트", () => {
    const validation = UserValidation;
    expect(() => {
      validation.isUnderMaxPurchase(MAX_INTEGER + 1);
    }).toThrow("[ERROR]");
  });

  test("양의 정수 판별 테스트", () => {
    const validation = UserValidation;
    expect(() => {
      validation.isPositiveInteger(3750.935);
    }).toThrow("[ERROR]");
  });
});
