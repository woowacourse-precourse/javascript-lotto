const Validation = require("../src/Validation");

describe("Validation 단위 테스트", () => {
  test("1,000의 배수 여부 확인 테스트", () => {
    const validation = Validation;
    const result1 = validation.isDivisible(170000);
    const result2 = validation.isDivisible(170123);

    expect(result1).toEqual(true);
    expect(result2).toEqual(false);
  });
});
