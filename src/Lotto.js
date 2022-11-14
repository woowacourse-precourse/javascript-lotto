const { ERROR_MESSAGE } = require('./constant');
const LottoValidator = require('./validator/LottoValidator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    LottoValidator.validate(numbers);
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  compare(winning) {
    let count = 0;

    this.#numbers.forEach((number) => {
      if (winning.includes(number)) count++;
    });

    return count;
  }

  isContain(bonus) {
    return this.#numbers.includes(bonus);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
