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

  test("input이 없는 경우, false를 반환해야 한다.", () => {
    // given
    const input = "";
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

describe("Validation.isStartedZero", () => {
  test("input이 0으로 시작하면, true를 반환해야 한다.", () => {
    // given
    const input = "0";
    // when
    const result = Validation.isStartedZero(input);
    // then
    expect(result).toBe(true);
  });

  test("input이 0이 아닌 수로 시작하면, false를 반환해야 한다.", () => {
    // given
    const input = "8000";
    // when
    const result = Validation.isStartedZero(input);
    // then
    expect(result).toBe(false);
  });
});

describe("Validation.isDivisibleByLottoPrice", () => {
  test("input이 로또가격으로 나누어 떨어지지 않는 경우, false를 반환해야 한다.", () => {
    // given
    const input = "8800";
    // when
    const result = Validation.isDivisibleByLottoPrice(input);
    // then
    expect(result).toBe(false);
  });

  test("input이 로또가격으로 나누어 떨어지는 경우, true를 반환해야 한다.", () => {
    // given
    const input = "8000";
    // when
    const result = Validation.isDivisibleByLottoPrice(input);
    // then
    expect(result).toBe(true);
  });
});
