const { LOTTO, ERROR } = require('./Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== LOTTO.NUMBER_SELECT) {
      throw new Error(ERROR.SELECT);
    }
    for (let i = 0; i < numbers.length; i++) {
      if (numbers.indexOf(numbers[i]) !== numbers.lastIndexOf(numbers[i])) {
        throw new Error(ERROR.NUMBER);
      }
    }
  }

  checkLotto(numbers, winningNumber, bonusNumber) {
    let winning = 0;
    let bonus = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (winningNumber.includes(numbers[i])) {
        winning += 1;
      }
      if (numbers[i] === bonusNumber) {
        bonus += 1;
      }
    }
    return this.lottoResult(winning, bonus);
  }

  lottoResult(winning, bonus) {
    if (winning === 6) {
      return 0;
    }
    if (winning === 5 && bonus === 1) {
      return 1;
    }
    if (winning === 5 && bonus === 0) {
      return 2;
    }
    if (winning === 4) {
      return 3;
    }
    if (winning === 3) {
      return 4;
    }
  }
}

module.exports = Lotto;
