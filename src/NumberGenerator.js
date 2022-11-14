const { Random } = require('@woowacourse/mission-utils');

class NumberGenerator {
  compareNumbers(a, b) {
    return a - b;
  }

  createLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort(this.compareNumbers);
  }
}

module.exports = NumberGenerator;
