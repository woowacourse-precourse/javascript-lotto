const { ERROR, LOTTO } = require('./utiles/Constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (this.#invalidLength(numbers)) {
      throw new Error(`${ERROR.PREFIX} ${ERROR.COUNT}`);
    }
    return true;
  }

  #invalidLength(numbers) {
    return numbers.length !== LOTTO.COUNT;
  }
}

module.exports = Lotto;
