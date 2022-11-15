const Vaildator = require('./Vaildator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!Vaildator.isRightLottoNumbers(numbers)) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  show() {
    return `[${this.#numbers.join(', ')}]`;
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
