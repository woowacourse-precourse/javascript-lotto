const MissionUtils = require("@woowacourse/mission-utils");
const utils = require("./utils.js");
class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  validate(numbers) {
    utils.checkValidNumbers(numbers);
  }

  getLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
