const { ERROR_MESSAGES } = require('../constants/index');
const { RANGE, MAX_COUNT } = require('../constants/Lotto');

class Lotto {
  #numbers = [];

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  setBonus(number) {
    this.#validateBonus(number);
    this.#numbers.push(number);
  }
  getBonusIndex() {
    const numberLength = this.#numbers.length;
    return numberLength - 1;
  }

  get numbers() {
    return this.#numbers.splice(0, this.getBonusIndex());
  }
  get bonus() {
    return this.#numbers[this.getBonusIndex()];
  }

  #validate(numbers = []) {
    if (numbers.length !== MAX_COUNT) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_LENGTH);
    }

    if (
      numbers.find((number) => number < RANGE.START || number > RANGE.END) !==
      undefined
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_RANGE);
    }

    const numberSet = new Set(numbers);
    if (numberSet.size !== MAX_COUNT) {
      throw new Error(ERROR_MESSAGES.NOT_DUPLICATE_NUMBER);
    }
  }

  #validateBonus(bonus) {
    if (!bonus) {
      throw new Error(ERROR_MESSAGES.NOT_INPUT_BONUS);
    }

    if (bonus < RANGE.START || bonus > RANGE.END) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_RANGE);
    }

    if (this.#numbers.includes(bonus))
      throw new Error(ERROR_MESSAGES.NOT_DUPLICATE_NUMBER);
  }
}

module.exports = Lotto;
