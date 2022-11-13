const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {}

  printLotto() {
    MissionUtils.Console.print(`[${this.#numbers.join(", ")}]`);
  }
}

module.exports = Lotto;
