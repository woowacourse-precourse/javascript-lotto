const { Console } = require("@woowacourse/mission-utils");

class Result {
  #quantity;
  #number;
  #reward;

  constructor(quantity, number, reward) {
    this.#quantity = quantity;
    this.#number = number;
    this.#reward = reward;
    this.totalReward = 0;
    this.print();
  }

  print() {
    const reward = this.#reward.toLocaleString();
    Console.print(`${this.#number} (${reward}원) - ${this.#quantity}개`);
    this.countTotalReward();
  }

  countTotalReward() {
    this.totalReward += this.#reward * this.#quantity;
  }
}

module.exports = Result;
