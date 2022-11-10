const { Console } = require("@woowacourse/mission-utils");
const LottoNumber = require("./LottoNumber");
const Exception = require("./error/exception");
const PurchaseError = require("./error/purchase");

const { COMMAND } = require("./utils/constant");

class Lotto {
  #numbers;
  #exception;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#exception = new Exception();
    this.LottoNumber = new LottoNumber();
  }

  print(message) {
    Console.print(message);
  }

  start() {
    Console.readLine(`${COMMAND.BUY}\n`, (input) => {
      this.#exception.isAllow(new PurchaseError(input));
    });
  }
}

module.exports = Lotto;
