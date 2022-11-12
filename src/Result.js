const { Console } = require("@woowacourse/mission-utils");

class Result {
  #quantity;
  #number;
  #reward;

  constructor([number, quantity]) {
    this.#quantity = quantity;
    this.#number = 0;
    this.#reward = 0;
    this.totalReward = 0;
    this.check(number);
  }

  check(number) {
    if (number === "three") {
      this.#number = 3;
      this.#reward = 5000;
    }
    if (number === "four") {
      this.#number = 4;
      this.#reward = 50000;
    }
    if (number === "five") {
      this.#number = 5;
      this.#reward = 1500000;
    }
    if (number === "bonus") {
      this.#number = 5;
      this.#reward = 30000000;

      this.printBonus(this.#number, this.#reward, this.#quantity);
      this.countTotalReward(this.#reward, this.#quantity);
      return;
    }
    if (number === "six") {
      this.#number = 6;
      this.#reward = 2000000000;
    }

    this.print(this.#number, this.#reward, this.#quantity);
    this.countTotalReward(this.#reward, this.#quantity);
  }

  print(number, reward, quantity) {
    reward = reward.toLocaleString();
    Console.print(`${number}개 일치 (${reward}원) - ${quantity}개`);
  }

  printBonus(number, reward, quantity) {
    reward = reward.toLocaleString();
    Console.print(
      `${number}개 일치, 보너스 볼 일치 (${reward}원) - ${quantity}개`
    );
  }

  countTotalReward(reward, quantity) {
    this.totalReward += reward * quantity;
  }
}

module.exports = Result;
