const { Random } = require('@woowacourse/mission-utils');
const { MESSAGES, ERROR_MESSAGES } = require('./constants/index');

const MAX_COUNT = 6;
const RANGE = {
  START: 1,
  END: 45,
};
class Lotto {
  #numbers = [];
  #bonus = 1;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  setBonus(number) {
    this.#validateBonus(number);
    this.#bonus = number;
  }

  getLotto() {
    return {
      winningNumbers: this.#numbers,
      bonus: this.#bonus,
    };
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

  static createRandomNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(
      RANGE.START,
      RANGE.END,
      MAX_COUNT
    );
    if (!numbers) throw new Error(ERROR_MESSAGES.EMPTY_NUMBERS);
    return numbers.sort((a, b) => a - b);
  }
}

module.exports = Lotto;
