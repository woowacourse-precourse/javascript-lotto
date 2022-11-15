const { ERROR_INPUT, VALUE_NUMBER } = require("../utils/constants");

class ValidationCheck {
  isMoneyValid(money) {
    if (isNaN(money)) throw new Error(ERROR_INPUT.NOT_NUMBER);
    if (/[^0-9]/g.test(money)) throw new Error(ERROR_INPUT.NOT_NUMBER);
    if (!/[0-9]{4,}/.test(money)) throw new Error(ERROR_INPUT.UNDER_FOUR_LETTERS);
    if (parseInt(money) % VALUE_NUMBER.MONEY_FOR_ONE_GAME !== 0) throw new Error(ERROR_INPUT.NOT_THOUSAND_UNIT);
    return true;
  }

  isBonusNumberValid(winningNumbers, bonusNumber) {
    if (isNaN(bonusNumber)) throw new Error(ERROR_INPUT.NOT_NUMBER);
    if (/[^0-9]/.test(bonusNumber)) throw new Error(ERROR_INPUT.BONUS_NUMBER_NOT_NATURAL_NUMBER);
    if (+bonusNumber < VALUE_NUMBER.FIRST_LOTTO_NUMBER || +bonusNumber > VALUE_NUMBER.LAST_LOTTO_NUMBER)
      throw new Error(ERROR_INPUT.BONUS_NUMBER_OUT_OF_RANGE);
    if (winningNumbers.includes(parseInt(bonusNumber))) throw new Error(ERROR_INPUT.BONUS_NUMBER_DUPLICATE);
    return true;
  }

  isWinningNumberValid(winningNumber) {
    if (!/\d{1,},\d{1,},\d{1,},\d{1,},\d{1,},\d{1,}/g.test(winningNumber))
      throw new Error(ERROR_INPUT.WINNING_NUMBER_IS_NOT_VALID);
  }
}

module.exports = ValidationCheck;
