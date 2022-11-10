const { Console } = require("@woowacourse/mission-utils");

class Statistic {
  #result;
  constructor(result) {
    this.#result = result;
    this.print();
  }

  print() {
    Console.print(this.#result);
    Console.close();
  }
}

module.exports = Statistic;
