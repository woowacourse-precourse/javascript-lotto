const { Console } = require("@woowacourse/mission-utils");
const {
  STATUS_RESULT_TITLE,
  STATUS_FIFTH_PLACE,
  STATUS_RESULT_UNIT,
  STATUS_FOURTH_PLACE,
  STATUS_THIRD_PLACE,
  STATUS_SECOND_PLACE,
  STATUS_FIRST_PLACE,
  STATUS_YIELD_END,
  STATUS_YIELD_START,
} = require("./Constant");

class Status {
  #result;
  #reward;
  #yield;

  constructor() {
    this.#result = [0, 0, 0, 0, 0];
    this.#reward = [5000, 50000, 1500000, 30000000, 2000000000];
  }

  add({ realnum, bonusnum }) {
    switch (realnum) {
      case 3:
        this.#result[0] += 1;
        break;
      case 4:
        this.#result[1] += 1;
        break;
      case 5:
        this.#result[2 + bonusnum] += 1;
        break;
      case 6:
        this.#result[4] += 1;
        break;
    }
  }

  print() {
    const messages = [
      STATUS_FIFTH_PLACE,
      STATUS_FOURTH_PLACE,
      STATUS_THIRD_PLACE,
      STATUS_SECOND_PLACE,
      STATUS_FIRST_PLACE,
    ];
    Console.print(`\n${STATUS_RESULT_TITLE}\n---`);
    messages.forEach((message, index) => {
      Console.print(`${message} - ${this.#result[index]}${STATUS_RESULT_UNIT}`);
    });
    Console.print(`${STATUS_YIELD_START} ${this.#yield}${STATUS_YIELD_END}.`);
  }

  countYield(buyMoney) {
    this.#yield =
      Math.round(
        (this.#result
          .map((count, idx) => count * this.#reward[idx])
          .reduce((prev, cur) => prev + cur) /
          buyMoney) *
          1000
      ) / 10;
  }

  getResult() {
    return this.#result;
  }

  setResult(result) {
    return (this.#result = result);
  }

  getYield() {
    return this.#yield;
  }
}

module.exports = Status;
