const { Console } = require("@woowacourse/mission-utils");
const ErrorMsg = require("../src/message/Error");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) throw new Error(ErrorMsg.INVALID_LOTTO_COUNT);

    if (new Set(numbers).size !== numbers.length)
      throw new Error(ErrorMsg.INVALID_LOTTO_DUPLICATE);

    if (numbers.join("").replace(/[0-9]/g, "").length > 0)
      throw new Error(ErrorMsg.INVALID_LOTTO_NOT_NUM);
  }

  get objectName() {
    return "Lotto";
  }

  printNumbers() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  getNumbers() {
    return this.#numbers.map((number) => String(number));
  }
}

module.exports = Lotto;
