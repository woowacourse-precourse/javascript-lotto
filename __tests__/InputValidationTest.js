const Validation = require("../src/Validation.js");

describe("Validation.isDivided", () => {
  test("구입 가격인 input이 로또 가격으로 나누어 떨어지면 true를 반환해야 한다.", () => {
    // given
    const input = "8000";
    // when
    const result = Validation.isDivided(input);
    // then
    expect(result).toBe(true);
  });

  test("구입 가격인 input이 로또 가격으로 나누어 떨어지지 않으면 false를 반환해야 한다.", () => {
    // given
    const input = "8100";
    // when
    const result = Validation.isDivided(input);
    // then
    expect(result).toBe(false);
  });
});
