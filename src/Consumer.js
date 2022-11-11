const { Console, Random } = require('@woowacourse/mission-utils');

class Consumer {
  #money;

  lotteryList = [];

  constructor(money) {
    // this.validate(money);
    this.#money = +money;
    this.createConsumer(money);
    this.printConsumer();
  }

  validate(money) {}

  createConsumer(money) {
    // 천원 당 1장
    const amount = money / 1000;

    // 추후 반복문 수정 할 것
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

  printConsumer() {
    const amount = this.#money / 1000;
    Console.print(`\n${amount}개를 구매했습니다`);
    this.lotteryList.forEach((lotto) => {
      Console.print(lotto);
    });
    Console.print('\n');
  }

  getMoney() {
    const consumerMoney = this.#money;
    return consumerMoney;
  }
}

module.exports = Consumer;
