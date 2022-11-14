const { ERROR_MESSAGE_WINNING_NUMBER, LOTTO_RULE } = require('./utils/constant');

class Lotto {
  #numbers;

  constructor(winnigNumbers) {
    this.validate(winnigNumbers, LOTTO_RULE.WINNING_NUMBERS_LENGTH);
    this.#numbers = this.castWinningNumbers(winnigNumbers);
  }

  getWinningNumbers() {
    return this.#numbers;
  }

  setWinningNumbers(bonusNumber) {
    this.validate([...this.#numbers, bonusNumber], LOTTO_RULE.WINNING_NUMBERS_LENGTH + 1);
    this.#numbers.push(Number(bonusNumber));
  }

  castWinningNumbers(winnigNumbers) {
    return winnigNumbers.map((number) => Number(number));
  }

  validate(winnigNumbers, length) {
    this.validateLength(winnigNumbers, length);
    this.validateDuplication(winnigNumbers);
    this.validateType(winnigNumbers);
    this.validateRange(winnigNumbers);
    this.validateBlank(winnigNumbers);
  }

  validateLength(winnigNumbers, length) {
    if (winnigNumbers.length !== length) {
      throw new Error(ERROR_MESSAGE_WINNING_NUMBER.NOT_VALID_LENGTH(length));
    }
  }

  validateType(winnigNumbers) {
    winnigNumbers.forEach((number) => {
      if (!Number(number)) {
        throw new Error(ERROR_MESSAGE_WINNING_NUMBER.NOT_VALID_TYPE);
      }
    });
  }

  validateDuplication(winnigNumbers) {
    const removedDuplicateWinningNumbers = new Set(this.castWinningNumbers(winnigNumbers));
    if (removedDuplicateWinningNumbers.size !== winnigNumbers.length) {
      throw new Error(ERROR_MESSAGE_WINNING_NUMBER.NOT_VALID_DUPLICATE);
    }
  }

  validateRange(winnigNumbers) {
    winnigNumbers.forEach((number) => {
      if (
        Number(number) < LOTTO_RULE.WINNING_NUMBERS_MIN_NUMBER ||
        Number(number) > LOTTO_RULE.WINNING_NUMBERS_MAX_NUMBER
      ) {
        throw new Error(ERROR_MESSAGE_WINNING_NUMBER.NOT_VALID_RANGE);
      }
    });
  }

  validateBlank(winnigNumbers) {
    winnigNumbers.forEach((number) => {
      if (String(number).includes(' ')) {
        throw new Error(ERROR_MESSAGE_WINNING_NUMBER.NOT_VALID_BLANK);
      }
    });
  }
}

module.exports = Lotto;
