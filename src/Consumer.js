const { Console, Random } = require('@woowacourse/mission-utils');

class Consumer {
  LotteryList = [];

  constructor(money) {
    // this.validate(money);
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
      this.LotteryList.push(number);
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
    this.LotteryList.forEach((lotto) => {
      Console.print(lotto);
    });
  }
}

module.exports = Consumer;
