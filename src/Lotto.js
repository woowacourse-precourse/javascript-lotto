const { checkValidLotto } = require('./utils/validator');
const { Console } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    checkValidLotto(numbers);
    this.#numbers = numbers;
  }

  printLotto() {
    Console.print(this.#numbers);
  }
}

module.exports = Lotto;
