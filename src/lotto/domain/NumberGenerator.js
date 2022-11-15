const { Random } = require("@woowacourse/mission-utils");

class NumberGenerator {
  createRandomNumbers() {
    const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumber.sort(this.compareNumeric);
  }

  compareNumeric(numberA, numberB) {
    if (numberA > numberB) {
      return 1;
    }
    if (numberA == numberB) {
      return 0;
    }
    if (numberA < numberB) {
      return -1;
    }
  }
}

module.exports = NumberGenerator;
