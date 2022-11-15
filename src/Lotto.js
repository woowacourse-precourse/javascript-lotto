const { checkValidLotto } = require('./utils/validator');
const { Console } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;
  #rank;
  #right;
  #bonus;

  constructor(numbers) {
    checkValidLotto(numbers);
    this.#numbers = this.sortLotto(numbers);
    this.#rank = 0;
    this.#right = 0;
    this.#bonus = false;
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
    winNumber.forEach((winNum) => {
      if (this.#numbers.includes(winNum)) this.#right += 1;
    });
    if (this.#numbers.includes(bonusNumber)) this.#bonus == true;
    return this.checkRank();
  }

  checkRank() {
    this.#rank = 8 - this.#right;
    if (this.#right === 5) {
      if (!this.#bonus) this.#rank = 3;
      this.#rank = 2;
    }
    if (this.#right === 6) {
      this.#rank = 1;
    }
    return this.#rank;
  }
}

module.exports = Lotto;
