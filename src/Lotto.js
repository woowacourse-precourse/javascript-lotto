const MissionUtils = require('@woowacourse/mission-utils');
const { LottoConfig, Message } = require('./Config');

class Lotto {
  #numbers;

  constructor(numbers = Lotto.#randomLotto()) {
    Lotto.validateNumbers(numbers);
    numbers.sort((a, b) => a - b);
    this.#numbers = numbers;
  }

  static validateNumbers(numbers) {
    Lotto.#typeTest(numbers);
    Lotto.#duplicateTest(numbers);
    Lotto.#rangeTest(numbers);
  }

  static validateWinningNumbers(winningNumbers, bonusNumber) {
    Lotto.validateNumbers(winningNumbers);

    Lotto.#typeTest([bonusNumber]);
    Lotto.#rangeTest([bonusNumber]);
    if (new Set(winningNumbers).has(bonusNumber)) {
      throw new Error(Message.ERROR_DUPLICATE_BONUS_NUMBER);
    }
  }

  toString(separator = ' ') {
    return this.#numbers.join(separator);
  }

  static #randomLotto() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LottoConfig.MIN_NUMBER,
      LottoConfig.MAX_NUMBER,
      LottoConfig.NUMBERS,
    );
  }

  static #typeTest(numbers) {
    const success = numbers.reduce(
      (prevBool, number) => prevBool && (typeof number === 'number'),
      true,
    );
    if (!success) {
      throw new TypeError(Message.ERROR_NUMBER_TYPE);
    }
  }

  static #rangeTest(numbers) {
    const success = numbers.reduce(
      (prevBool, number) => (
        prevBool
        && LottoConfig.MIN_NUMBER <= number
        && number <= LottoConfig.MAX_NUMBER
      ),
      true,
    );
    if (!success) {
      throw new RangeError(Message.ERROR_LOTTO_RANGE);
    }
  }

  static #duplicateTest(numbers) {
    const set = new Set(numbers);
    if (set.size !== 6) {
      throw new Error(Message.ERROR_LOTTO_NUMBERS);
    }
  }
}

module.exports = Lotto;
