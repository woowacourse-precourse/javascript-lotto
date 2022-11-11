const MissionUtils = require('@woowacourse/mission-utils');

class NumberGenerator {
  constructor() {
    this.numbers = this.createRandomSixNumbers();
  }

  createRandomSixNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  getNumbers() {
    return this.numbers;
  }
}

module.exports = NumberGenerator;
