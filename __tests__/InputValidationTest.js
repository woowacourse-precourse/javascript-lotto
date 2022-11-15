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

describe("Validation.isOnlyNumber", () => {
  test("input에 숫자가 아닌 문자가 포함되어있으면 false를 반환해야 한다.", () => {
    // given
    const input = ["가", "0", "0"];
    // when
    const result = Validation.isOnlyNumber(input);
    // then
    expect(result).toBe(false);
  });

  test("input이 모두 숫자라면 true를 반환해야 한다.", () => {
    // given
    const input = ["8", "0", "0", "0"];
    // when
    const result = Validation.isOnlyNumber(input);
    // then
    expect(result).toBe(true);
  });
});

describe("Validation.isNumberRange", () => {
  test("입력된 당첨 번호 6개가 1부터 45까지의 범위가 아니라면 false를 반환해야 한다.", () => {
    // given
    const input = [1, 2, 3, 4, 5, 46];
    // when
    const result = Validation.isNumberInRange(input);
    // then
    expect(result).toBe(false);
  });
});

describe("Validation.isUniqueBonusNumber", () => {
  test("보너스번호 입력이 당첨번호 입력과 중복된다면 false를 반환해야 한다.", () => {
    // given
    const bonusNumber = [45];
    const winnerNumber = [1, 2, 3, 4, 5, 45];
    // when
    const result = Validation.isUniqueBonusNumber(bonusNumber, winnerNumber);
    // then
    expect(result).toBe(false);
  });
});
