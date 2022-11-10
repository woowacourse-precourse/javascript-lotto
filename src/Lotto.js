const { RULE } = require('./constants/lotto');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  static #validate(numbers) {
    if (numbers.some((number) => Number.isNaN(number))) {
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
    }

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (numbers.some((number) => number < RULE.RANGE_START || number > RULE.RANGE_END)) {
      throw new Error('[ERROR] 로또 번호는 1-45 사이의 수여야 합니다.');
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 중복된 수를 입력하였습니다.');
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
