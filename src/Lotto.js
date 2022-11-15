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

  // TODO: 추가 기능 구현

  print() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  checkRank(winningNumbers, bonusNumber) {
    this.setLottoResult(winningNumbers);
    this.setBonusResult(bonusNumber);
    return this.result;
  }

  setLottoResult(winningNumbers) {
    for (const number of this.#numbers) {
      if (winningNumbers.includes(number)) this.result.lotto += 1;
    }
  }

  setBonusResult(bonusNumber) {
    if (this.#numbers.includes(Number(bonusNumber))) this.result.bonus = true;
  }
}

module.exports = Lotto;
