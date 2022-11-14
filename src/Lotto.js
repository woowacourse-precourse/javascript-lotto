const { Console } = require("@woowacourse/mission-utils");
const checkValidation = require("./errors/checkValidation");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate() {
    checkValidation.checkLottoList(numbers);
  }

  printNumbers() {
    this.sortNumbers();

    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
