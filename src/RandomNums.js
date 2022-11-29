const MissionUtils = require('@woowacourse/mission-utils');
const { sortAscending } = require('./util');
const { LOTTO } = require('./constants');

class RandomNums {
  #amount;
  #randomNumUnits = [];

  constructor(amount) {
    this.#amount = amount;
    this.makeRandomNums();
  }

  getRandomNums() {
    return this.#randomNumUnits;
  }

  makeRandomNums() {
    if (this.#randomNumUnits.length === this.#amount) {
      this.print();
      return;
    }
    this.#randomNumUnits.push(this.generate());
    this.makeRandomNums();
  }

  generate() {
    const randomNums = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUM,
      LOTTO.MAX_NUM,
      LOTTO.NUM
    );
    sortAscending(randomNums);
    return randomNums;
  }

  print() {
    MissionUtils.Console.print('');
    MissionUtils.Console.print(`${this.#amount}개를 구매했습니다.`);
    this.#randomNumUnits.forEach((randomNums) => {
      this.printNum(randomNums);
    });
  }

  printNum(randomNums) {
    const print = `[${randomNums.join(', ')}]`;
    MissionUtils.Console.print(print);
  }
}

module.exports = RandomNums;
