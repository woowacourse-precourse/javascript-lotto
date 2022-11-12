const { ERROR, LOTTO } = require('./utiles/Constant');

// 로또회사

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (this.#invalidLength(numbers))
      throw new Error(`${ERROR.PREFIX} ${ERROR.COUNT}`);
    if (this.#duplication(numbers))
      throw new Error(`${ERROR.PREFIX} ${ERROR.DUPLICATION}`);
    if (isNaN(numbers.join('')))
      throw new Error(`${ERROR.PREFIX} ${ERROR.NUMBER_ONLY}`);
    if (this.#invalidRange(numbers))
      throw new Error(`${ERROR.PREFIX} ${ERROR.RANGE}`);
  }

  #invalidLength(numbers) {
    return numbers.length !== LOTTO.COUNT;
  }

  #duplication(numbers) {
    return new Set(numbers).size !== numbers.length;
  }

  #invalidRange(numbers) {
    const filteredNumbers = numbers.filter(
      (number) => LOTTO.RANGE_MIN <= number && LOTTO.RANGE_MAX >= number
    ).length;

    return filteredNumbers !== numbers.length;
  }
}

module.exports = Lotto;
