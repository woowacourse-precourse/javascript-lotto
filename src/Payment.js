const { Console } = require("@woowacourse/mission-utils");
const {
  PAYMEMT_QUERY,
  PAYMEMT_TYPE_ERROR,
  PAYMEMT_UNIT_ERROR,
  PAYMEMT_ZERO_ERROR,
} = require("./Constant");

class Payment {
  #count;
  #money;

  query(next) {
    Console.readLine(`${PAYMEMT_QUERY}\n`, (answer) => {
      this.vaildation(answer);
      this.#money = Number(answer);
      this.#count = Number(answer) / 1000;
      next(this.#count);
    });
  }

  vaildation(input) {
    if (Number(input) === 0) {
      throw new Error(PAYMEMT_ZERO_ERROR);
    }
    if (isNaN(Number(input))) {
      throw new Error(PAYMEMT_TYPE_ERROR);
    }
    if (Number(input) % 1000 !== 0) {
      throw new Error(PAYMEMT_UNIT_ERROR);
    }
  }

  getMoney() {
    return this.#money;
  }

  getCount() {
    return this.#count;
  }
}

module.exports = Payment;
