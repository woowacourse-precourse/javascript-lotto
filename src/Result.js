const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT } = require("./constants/messges");

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
    Console.print(OUTPUT.RESULT(this.#number, reward, this.#quantity));

    this.countTotalReward();
  }

  countTotalReward() {
    this.totalReward += this.#reward * this.#quantity;
  }
}

module.exports = Result;
