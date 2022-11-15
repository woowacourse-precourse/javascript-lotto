const { Console, Random } = require('@woowacourse/mission-utils');
const { checkAppropriateUnit, checkAppropriateMoney } = require('../Utils/Validation');

class Consumer {
  #money;

  lotteryList = [];

  constructor(money) {
    this.validate(+money);
    this.#money = +money;
    this.createConsumer(money);
    this.printAmount();
    this.printConsumer();
  }

  validate(money) {
    checkAppropriateUnit(money);
    checkAppropriateMoney(money);
  }

  createConsumer(money) {
    const amount = money / 1000;

    for (let count = 0; count < amount; count += 1) {
      const number = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.sortArray(number);
      this.lotteryList.push(number);
    }
  }

  sortArray(array) {
    array.sort((a, b) => {
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    });
  }

  printAmount() {
    const amount = this.#money / 1000;
    Console.print(`${amount}개를 구매했습니다.`);
  }

  printConsumer() {
    this.lotteryList.forEach((lotto) => {
      Console.print(`[${lotto.join(', ').trim()}]`);
    });
    Console.print('\n');
  }

  getMoney() {
    const consumerMoney = this.#money;
    return consumerMoney;
  }
}

module.exports = Consumer;
