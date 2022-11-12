const { ERROR_MASSAGE, NUMBER_LIMIT } = require('./constant');

const {
  MAX_PURCHASES_MESSAGE,
  POSSIBLE_AMOUNT_NUMBER_MESSAGE,
  LOTTO_NUMBER_LENGTH_MESSAGE,
  POSSIBLE_LOTTO_NUMBER_MESSAGE,
  DUPLICATE_NUMBER_MESSAGE,
  INCORRECT_INPUT_MESSAGE,
} = ERROR_MASSAGE;
const { MAX_PURCHASES, MAX_NUMBER, MIN_NUMBER, QUANTITY } = NUMBER_LIMIT;

class Validation {
  constructor(controller) {
    this.controller = controller;
  }

  static amountInputValidate(input) {
    if (Number(input) > MAX_PURCHASES) {
      throw new Error(MAX_PURCHASES_MESSAGE);
    }

    if (input[0] === '0') {
      throw new Error(INCORRECT_INPUT_MESSAGE);
    }

    input.split('').forEach((number) => {
      if (Number(number) >= 0 && Number(number) <= 9) {
        return;
      }

      throw new Error(POSSIBLE_AMOUNT_NUMBER_MESSAGE);
    });
  }

  static winningNumberValidate(input) {
    if (new Set(input).size !== QUANTITY) {
      throw new Error(LOTTO_NUMBER_LENGTH_MESSAGE);
    }

    input.forEach((number) => {
      if (Number(number) >= MIN_NUMBER && Number(number) <= MAX_NUMBER) {
        return;
      }

      throw new Error(POSSIBLE_LOTTO_NUMBER_MESSAGE);
    });
  }

  bonusNumberValidate(input) {
    const winningNumber = this.controller.winningNumber.getWinningNumber();

    if (winningNumber.includes(input)) {
      throw new Error(DUPLICATE_NUMBER_MESSAGE);
    }

    if (input.length > 2) {
      throw new Error(POSSIBLE_LOTTO_NUMBER_MESSAGE);
    }

    if (!(Number(input) >= MIN_NUMBER && Number(input) <= MAX_NUMBER)) {
      throw new Error(POSSIBLE_LOTTO_NUMBER_MESSAGE);
    }
  }
}

module.exports = Validation;
