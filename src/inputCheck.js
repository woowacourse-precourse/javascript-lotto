const { ERROR_INPUT } = require("./constants");

class ValidationCheck {
  isMoneyValid(money) {
    if (isNaN(money)) throw new Error(ERROR_INPUT.NOT_NUMBER);
    if (!/[0-9]{4,}/.test(money)) throw new Error(ERROR_INPUT.UNDER_FOUR_LETTERS);
    if (parseInt(money) % 1000 !== 0) throw new Error(ERROR_INPUT.NOT_THOUSAND_UNIT);
    return true;
  }

  isBonusNumberValid(bonusNumber) {
    if (+bonusNumber < 1 || +bonusNumber > 45) throw new Error(ERROR_INPUT.BONUS_NUMBER_OUT_OF_RANGE);
    if (numbers.includes(bonusNumber)) throw new Error(ERROR_INPUT.BONUS_NUMBER_DUPLICATE);
    return true;
  }

  isWinningNumberValid(winningNumber) {
    if (/\d{1,},\d{1,},\d{1,},\d{1,},\d{1,},\d{1,}/g.test(winningNumber))
      throw new Error(ERROR_INPUT.WINNING_NUMBER_IS_NOT_VALID);
  }
}
