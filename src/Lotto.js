const { ERROR, LOTTO } = require('./constants');
const ScoreMachine = require('./ScoreMachine');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
  }

  static validate(numbers) {
    if (numbers.length !== LOTTO.NUMBERS_COUNT) throw new Error(ERROR.LOTTO_NUMBER_COUNT);
    if ([...new Set(numbers)].length !== numbers.length) {
      throw new Error(ERROR.LOTTO_NUMBER_OVERLAP);
    }
    numbers.forEach((number) => {
      if (number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER)
        throw new Error(ERROR.LOTTO_NUMBER_RANGE);
    });
  }

  getLottoNumber() {
    return this.#numbers;
  }
}

module.exports = Lotto;
