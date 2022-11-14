const { Random, Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constant/constant');

class Lottos {
  constructor(amount) {
    this.amount = amount;
    this.values = [];
  }

  showLottosAmount() {
    Console.print(`\n${this.amount}${MESSAGE.NUMBER_OF_LOTTOS_AMOUNT}`);
    this.setLottosNumber(this.amount);
  }

  setLottosNumber(amount) {
    for (let count = 0; count < amount; count += 1) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (num1, num2) => num1 - num2
      );
      this.values.push(lotto);
    }
  }

  showLottosNumber() {
    Console.print(this.values);
  }
}

module.exports = Lottos;
