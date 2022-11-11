const { RULE } = require('./constants/lotto');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validateNumbers(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  setBonusNumber(number) {
    this.#validateBonusNumber(number);
    this.bonusNumber = number;
  }

  static #isNumberInRange(number) {
    return number < RULE.RANGE_START || number > RULE.RANGE_END;
  }

  static #validateNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (numbers.some((number) => Lotto.#isNumberInRange(number))) {
      throw new Error('[ERROR] 로또 번호는 1-45 사이의 수여야 합니다.');
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 중복된 수를 입력하였습니다.');
    }
  }

  #validateBonusNumber(number) {
    if (this.#numbers.includes(number)) {
      throw new Error('[ERROR] 로또 번호와 중복된 번호를 입력하였습니다.');
    }

    if (Lotto.#isNumberInRange(number)) {
      throw new Error('[ERROR] 보너스 번호는 1-45 사이의 수여야 합니다.');
    }
  }
}

module.exports = Lotto;
