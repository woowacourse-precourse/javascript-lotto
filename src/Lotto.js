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
}

module.exports = Lotto;
