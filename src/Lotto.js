const Messages = require('./Messages');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const numbersInRange = numbers.filter((el) => Number(el) >= 1 && Number(el) <= 45);

    if (numbers.length !== 6) throw new Error(Messages.SIX_NUMBERS);
    if (numbers.length !== new Set(numbers).size) throw new Error(Messages.NOT_DUPLICATE);
    if (numbers.length !== numbersInRange.length) throw new Error(Messages.NUMBERS_IN_RANGE);
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  countSameNumber(winning) {
    return this.#numbers.filter((lotto) => winning.hasNumber(lotto)).length;
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }
}

module.exports = Lotto;
