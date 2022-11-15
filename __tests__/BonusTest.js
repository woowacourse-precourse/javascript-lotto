/* eslint-disable */
const Bonus = require("../src/Bonus");
const { ERROR_MESSAGES } = require("../src/Constants");

describe("보너스 클래스 테스트", () => {
  const exampleWinningNumbers = [1, 2, 3, 4, 5, 6];

  test("보너스 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("a", exampleWinningNumbers);
    }).toThrow(ERROR_MESSAGES.INVALID_BONUS_TYPE);

    expect(() => {
      new Bonus("ㄱ", exampleWinningNumbers);
    }).toThrow(ERROR_MESSAGES.INVALID_BONUS_TYPE);
  });

  test("보너스 번호가 1 ~ 45이 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("100", exampleWinningNumbers);
    }).toThrow(ERROR_MESSAGES.INVALID_BONUS_RANGE);

    expect(() => {
      new Bonus("0", exampleWinningNumbers);
    }).toThrow(ERROR_MESSAGES.INVALID_BONUS_RANGE);
  });

  test("보너스 번호가 당첨 번호와 중복된 경우 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("1", exampleWinningNumbers);
    }).toThrow(ERROR_MESSAGES.DUPLICATED_BONUS_NUM);

    expect(() => {
      new Bonus("5", exampleWinningNumbers);
    }).toThrow(ERROR_MESSAGES.DUPLICATED_BONUS_NUM);
  });

  test("보너스 클래스 정상 작동 테스트", () => {
    const exampleOne = 1;
    const exampleTwo = 45;
    const winningNumbersExample = [2, 3, 4, 5, 6, 7];
    const normalOperationOne = new Bonus(exampleOne, winningNumbersExample);
    const normalOperationTwo = new Bonus(exampleTwo, winningNumbersExample);

    expect(normalOperationOne.getBonusNumber()).toEqual(exampleOne);
    expect(normalOperationTwo.getBonusNumber()).toEqual(exampleTwo);
  });
});
