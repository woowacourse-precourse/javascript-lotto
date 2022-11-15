const { isValidLottoNumbers } = require('./util/utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = [];
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }
  
  #validate(numbers) {
    isValidLottoNumbers(numbers);
  }
}

module.exports = Lotto;
