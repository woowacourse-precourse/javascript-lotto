const { ERROR_MESSAGE } = require('./constants/constant');
const Lotto = require('./Lotto');

class Validation {
  isValidInputMoney(money) {
    this.isInputNumber(money);
    this.isMoneyDisvisible(money);
  }

  isInputNumber(input) {
    if (Number.isNaN(parseInt(input, 10))) {
      throw new Error(ERROR_MESSAGE.NAN_ERROR);
    }
  }

  isMoneyDisvisible(input) {
    if (input % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_DISVISIBLE);
    }
  }

  isValidWinningNumber(input) {
    const lotto = new Lotto(input);
  }

  isValidBonusNumber(input) {
    this.isInputNumber(input);
    this.isBonusNumberInRange(input);
  }

  isBonusNumberInRange(input) {
    if (!(input >= 1 && input <= 45)) {
      throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
    }
  }
}

module.exports = Validation;
