const Vaildator = require('./Vaildator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.vaildator = new Vaildator(numbers).lottoNumber();
    this.#numbers = numbers;
  }

  getWinningNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
