const Utils = require("../src/Utils");

describe("Utils 클래스 테스트", () => {
  test("isNumber에 문자로된 숫자가 입력됬을 경우", () => {
    expect(Utils.isNumber("123")).toBeFalsy();
  });
  test("isNumber에 숫자가 입력됬을 경우", () => {
    expect(Utils.isNumber(123)).toBeTruthy();
  });
  test("toFixedsecond) 3.123 -> 3.12", () => {
    expect(Utils.toFixedsecond(3.123)).toBe(3.12);
  });
  test("toFixedsecond) 3.1 -> 3.1", () => {
    expect(Utils.toFixedsecond(3.1)).toBe(3.1);
  });
  test("toFixedsecond) 3.189 -> 3.19", () => {
    expect(Utils.toFixedsecond(3.189)).toBe(3.19);
  });
});
