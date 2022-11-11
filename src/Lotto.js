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
      throw new Error('[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.');
    }
    if (numbers.map(Number).includes(NaN) || numbers.find(number => number < 1 || number > 45)) {
      throw new Error('[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.');
    }
  }

  print() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
