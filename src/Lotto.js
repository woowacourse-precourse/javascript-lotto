const { Console } = require("@woowacourse/mission-utils");

const LottoNumber = require("./LottoNumber");

const { COMMAND } = require("./utils/constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.LottoNumber = new LottoNumber();
    this.#numbers = numbers;
  }

  print(message) {
    Console.print(message);
  }

  start() {
    this.print(COMMAND.BUY);
  }
}

module.exports = Lotto;
