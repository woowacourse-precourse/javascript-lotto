const { ERROR_MESSAGE } = require("../src/constant/constant");
const Validation = require("../src/Validation");

describe("예외 발생", () => {
  test("1000원 단위 이외의 수가 들어오면 예외가 발생한다.", () => {
    expect(() => {
      Validation.validateMoney(123);
    }).toThrow(ERROR_MESSAGE.wrongUnit);

    expect(() => {
      Validation.validateMoney("오천원");
    }).toThrow(ERROR_MESSAGE.wrongUnit);
  });

  test("winning Number 예외 발생", () => {
    expect(() => {
      Validation.validateWinningNumbers([1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGE.wrongQuantity);

    expect(() => {
      Validation.validateWinningNumbers([1, 1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGE.hasRepeat);

    expect(() => {
      Validation.validateWinningNumbers([1, 2, 3, 4, 5, 55]);
    }).toThrow(ERROR_MESSAGE.notInRange);
  });

  test("bonus number 예외 발생", () => {
    expect(() => {
      Validation.validateBonusNumber([1, 2, 3, 4, 5, 6], 1);
    }).toThrow(ERROR_MESSAGE.hasRepeat);

    expect(() => {
      Validation.validateBonusNumber([1, 2, 3, 4, 5, 6], 66);
    }).toThrow(ERROR_MESSAGE.notInRange);
  });
});
