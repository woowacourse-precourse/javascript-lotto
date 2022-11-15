const { Console } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }

    for (const number of numbers) {
      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 로또 번호는 1~45 사이여야 합니다.');
      }
    }
  }

  setLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
