const { USER_OUTPUT_PHRASE } = require('../src/config.js');
const { Console } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
