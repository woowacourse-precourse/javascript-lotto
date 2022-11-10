const { Console, Random } = require('@woowacourse/mission-utils');

class Consumer {
  #LotteryList = [];

  constructor(money) {
    // this.validate(money);
    this.createConsumer(money);
  }

  validate(money) {}

  createConsumer(money) {
    // 천원 당 1장
    const amount = money / 1000;

    // 추후 반복문 수정 할 것
    for (let count = 1; count < amount; count += 1) {
      const number = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#LotteryList.push(number);
    }
  }

  printConsumer() {
    this.#LotteryList.forEach((lotto) => {
      Console.print(lotto);
    });
  }
}

module.exports = Consumer;
