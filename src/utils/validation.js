const { ERROR_MASSAGE, NUMBER_LIMIT } = require('./constant');

class Validation {
  constructor(controller) {
    this.controller = controller;
  }

  static amountInputValidate(input) {
    if (Number(input) > NUMBER_LIMIT.MAX_PURCHASES) {
      throw new Error(ERROR_MASSAGE.MAX_PURCHASES);
    }

    if (input[0] === '0') {
      throw new Error(ERROR_MASSAGE.INCORRECT_INPUT);
    }

    input.split('').forEach((number) => {
      if (Number(number) >= 0 && Number(number) <= 9) {
        return;
      }

      throw new Error(ERROR_MASSAGE.POSSIBLE_AMOUNT_NUMBER);
    });
  }

  static winningNumberValidate(input) {
    if (new Set(input).size !== NUMBER_LIMIT.QUANTITY) {
      throw new Error(ERROR_MASSAGE.LOTTO_NUMBER_LENGTH);
    }

    input.forEach((number) => {
      if (Number(number) >= NUMBER_LIMIT.MIN_NUMBER && Number(number) <= NUMBER_LIMIT.MAX_NUMBER) {
        return;
      }

      throw new Error(ERROR_MASSAGE.POSSIBLE_LOTTO_NUMBER);
    });
  }

  bonusNumberValidate(input) {
    const winningNumber = this.controller.winningNumber.getWinningNumber();

    if (winningNumber.includes(input)) {
      throw new Error(ERROR_MASSAGE.DUPLICATE_NUMBER);
    }

    if (input.length > 2) {
      throw new Error(ERROR_MASSAGE.POSSIBLE_LOTTO_NUMBER);
    }

    if (!(Number(input) >= NUMBER_LIMIT.MIN_NUMBER && Number(input) <= NUMBER_LIMIT.MAX_NUMBER)) {
      throw new Error(ERROR_MASSAGE.POSSIBLE_LOTTO_NUMBER);
    }
  }
}

module.exports = Validation;
