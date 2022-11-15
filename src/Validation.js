const { ERROR_MESSAGE } = require('./constants/constant');
const Lotto = require('./Lotto');

class Validation {
  constructor() {
    this.winningNumber = [];
  }

  isValidInputMoney(money) {
    this.isInputNumber(money);
    this.isMoneyDisvisible(money);
    this.isMoreThen1000(money);
  }

  isMoreThen1000(input) {
    if (input < 1000) {
      throw new Error(ERROR_MESSAGE.IS_LESS_THEN_1000);
    }
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
    this.winningNumber = input;
  }

  isValidBonusNumber(input) {
    this.isInputNumber(input);
    this.isBonusNumberInRange(input);
    this.isBonusNumberNotInWinningNumber(input);
  }

  isBonusNumberNotInWinningNumber(input) {
    if (this.winningNumber.includes(parseInt(input, 10))) {
      throw new Error(ERROR_MESSAGE.IS_ALREADY_WINNING_NUMBERS);
    }
  }

  isBonusNumberInRange(input) {
    if (!(input >= 1 && input <= 45)) {
      throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
    }
  }
}

module.exports = Validation;
