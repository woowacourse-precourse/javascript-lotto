const { checkValidLotto } = require('./utils/validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    checkValidLotto(numbers);
    this.#numbers = numbers;
  }
}

module.exports = Lotto;
