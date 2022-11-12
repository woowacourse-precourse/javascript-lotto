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
      return 'Ranking1';
    }
    if (winning === 5 && bonus === 1) {
      return 'Ranking2';
    }
    if (winning === 5 && bonus === 0) {
      return 'Ranking3';
    }
    if (winning === 4) {
      return 'Ranking4';
    }
    if (winning === 3) {
      return 'Ranking5';
    }
  }
}

module.exports = Lotto;
