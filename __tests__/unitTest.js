const {
  validateBonusNum,
  validateMoney,
} = require("../src/CheckInputOfBonusAndMoney");

describe("로또게임 입력값 타당성검사 에러작동 테스트", () => {
  test("금액을 입력했을때_1000원 단위가 아닐 때", () => {
    expect(() => validateMoney(1100)).toThrow();
  });
  test("금액을 입력했을때_0원 미만일 때", () => {
    expect(() => validateMoney(0)).toThrow();
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
