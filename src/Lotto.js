const { RULES, ERROR } = require("./constants");

class Lotto {
  #winningNumber;

  constructor(winningNumber) {
    this.validate(winningNumber);
    this.#winningNumber = winningNumber;
  }

  validate(winningNumber) {
    if (winningNumber.length !== RULES.LENGTH) {
      throw new Error(ERROR.WINNING_NUMBER_COUNT_CHECK);
    }

    if (new Set(winningNumber).size !== RULES.LENGTH) {
      throw new Error(ERROR.DUPLICATE_CHECK);
    }

    winningNumber.forEach((number) => {
      if (number < RULES.START_RANGE || number > RULES.END_RANGE) {
        throw new Error(ERROR.WINNING_NUMBER_RANGE_CHECK);
      }

      if (isNaN(number)) {
        throw new Error(ERROR.INPUT_NUMBER_CHECK);
      }
    });

    return this.#winningNumber;
  }
}

module.exports = Lotto;
