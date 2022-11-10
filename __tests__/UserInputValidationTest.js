const Validation = require("../src/Validation.js");

describe("Validation.hasOnlyNumber", () => {
  test("input에 숫자외에 문자가 포함된 경우, false를 반환해야 한다.", () => {
    // given
    const input = "팔천원";
    // when
    const result = Validation.hasOnlyNumber(input);
    // then
    expect(result).toBe(false);
  });

  test("input에 공백이 포함된 경우, false를 반환해야 한다.", () => {
    // given
    const input = "  8000  ";
    // when
    const result = Validation.hasOnlyNumber(input);
    // then
    expect(result).toBe(false);
  });

  test("input이 모두 숫자일 경우, true를 반환해야 한다.", () => {
    // given
    const input = "8000";
    // when
    const result = Validation.hasOnlyNumber(input);
    // then
    expect(result).toBe(true);
  });
});
