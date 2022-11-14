const { RULE, ERROR_MESSAGE } = require('./constants/lotto');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validateNumbers(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  setBonusNumber(number) {
    this.#validateBonusNumber(number);
    this.bonusNumber = number;
  }

  static #isNumberOutOfRange(number) {
    return number < RULE.RANGE_START || number > RULE.RANGE_END;
  }

  static #validateNumbers(numbers) {
    if (numbers.length !== RULE.LENGTH) {
      throw new Error(ERROR_MESSAGE.RULE_LENGTH);
    }

    if (numbers.some((number) => Lotto.#isNumberOutOfRange(number))) {
      throw new Error(ERROR_MESSAGE.RULE_RANGE);
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  }

  #validateBonusNumber(number) {
    if (this.#numbers.includes(number)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_BONUS);
    }

    if (Lotto.#isNumberOutOfRange(number)) {
      throw new Error(ERROR_MESSAGE.RULE_RANGE);
    }
  }
}

module.exports = Lotto;
