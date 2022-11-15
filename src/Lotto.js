const { checkValidLotto } = require('./utils/validator');
const { Console } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    checkValidLotto(numbers);
    this.#numbers = this.sortLotto(numbers);
  }

  sortLotto(numbers) {
    return numbers.sort((a, b) => {
      return a - b;
    });
  }

  printLotto() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  check(winNumber, bonusNumber) {
    let right = 0;
    let bonus = false;
    winNumber.forEach((winNum) => {
      if (this.#numbers.includes(winNum)) right += 1;
    });
    if (this.#numbers.includes(bonusNumber)) bonus = true;
    return this.checkRank(right, bonus);
  }

  checkRank(right, bonus) {
    let rank = 8 - right;
    if (right === 5) {
      rank = 2;
      if (!bonus) rank = 3;
    }
    if (right === 6) {
      rank = 1;
    }
    return rank;
  }
}

module.exports = Lotto;
