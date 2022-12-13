const { LOTTO_INFO } = require('./constants/lottoSetting');
const Validator = require('./utils/Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = Validator.validateLotto(numbers);
  }

  getLotto() {
    return this.#numbers;
  }

  hasDigit(digits) {
    return this.#numbers.includes(digits);
  }

  countMatchDigit(winningLotto) {
    return (LOTTO_INFO.digitLength * 2)
      - this.#sizeRemoveDuplicateDigit(winningLotto);
  }

  #sizeRemoveDuplicateDigit(winningLotto) {
    return new Set([...winningLotto, ...this.#numbers]).size;
  }
}

module.exports = Lotto;
