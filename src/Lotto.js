const { Console } = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE } = require('./Constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.result = {
      lotto: 0,
      bonus: false,
    };
  }

  // eslint-disable-next-line
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER);
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER);
    }
  }

  print() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  checkRank(winningNumbers, bonusNumber) {
    for (const number of this.#numbers) {
      if (winningNumbers.includes(number)) this.result.lotto += 1;
    }

    if (this.#numbers.includes(Number(bonusNumber))) this.result.bonus = true;

    return this.result;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
