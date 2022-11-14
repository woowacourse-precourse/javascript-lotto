const MissionUtils = require('@woowacourse/mission-utils');
const { LOTTO } = require('./constants');

class RandomNums {
  constructor(amount) {
    this.amount = amount;
    this.randomNumUnits = [];
    this.getRandomNums();
  }

  getRandomNums() {
    if (this.randomNumUnits.length === this.amount) {
      this.printRandomNums();
      return this.randomNumUnits;
    }
    this.randomNumUnits.push(this.makeRandomNums());
    this.getRandomNums();
  }

  makeRandomNums() {
    const randomNums = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUM,
      LOTTO.MAX_NUM,
      LOTTO.NUM
    );
    this.sortNums(randomNums);
    return randomNums;
  }

  sortNums(randomNums) {
    randomNums.sort((firstInput, secondInput) => {
      return firstInput - secondInput;
    });
  }

  printRandomNums() {
    MissionUtils.Console.print(`${this.amount}개를 구매했습니다.`);
    this.randomNumUnits.forEach((randomNums) => {
      MissionUtils.Console.print(randomNums);
    });
  }
}

module.exports = RandomNums;
