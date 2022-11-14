const {
  validateBonusNum,
  validateMoney,
} = require("../src/CheckInputOfBonusAndMoney");
const Lotto = require("../src/Lotto");

describe("로또게임 입력값 타당성검사 에러작동 테스트", () => {
  test("금액을 입력했을 때_1000원 단위가 아닐 때", () => {
    expect(() => validateMoney(1100)).toThrow();
  });
  test("금액을 입력했을 때_0원 미만일 때", () => {
    expect(() => validateMoney(0)).toThrow();
  });

  test("당첨 번호를 입력했을 때_숫자가 아닌 다른걸 입력 했을 때", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, "a"])).toThrow();
  });

  test("당첨 번호를 입력했을 때_콤마(,)가 연속으로 입력됐을 때", () => {
    expect(() => new Lotto([1, 2, ",", 3, 4, 5])).toThrow();
  });
  test("당첨 번호를 입력했을 때_입력값이 1미만 45초과 일때", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 56])).toThrow();
  });

  test("당첨 번호를 입력했을 때_6개가 입력되지 않았을 때", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 6, 7])).toThrow();
  });

  test("당첨 번호를 입력했을 때_중복되는 값이 있을 때", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 5])).toThrow();
  });

  test("보너스 번호를 입력했을 때_1미만 45초과 일때", () => {
    const bonusNum = 46;
    const winningNum = [1, 2, 3, 4, 5, 6];

    expect(() => validateBonusNum(bonusNum, winningNum)).toThrow();
  });

  test("보너스 번호를 입력했을 때_숫자가 아닌 다른걸 입력 했을 때", () => {
    const bonusNum = 0;
    const winningNum = [1, 2, 3, 4, 5, 6];

    expect(() => validateBonusNum(bonusNum, winningNum)).toThrow();
  });

  test("보너스 번호를 입력했을 때_당첨 번호와 중복되는 보너스 번호를 입력 했을 때", () => {
    const bonusNum = 1;
    const winningNum = [1, 2, 3, 4, 5, 6];

    expect(() => validateBonusNum(bonusNum, winningNum)).toThrow();
  });
});
