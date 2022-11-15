const { Random } = require('@woowacourse/mission-utils');

class MyLotto {
  generateRandom() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers.sort((a, b) => a - b);
  }
}

module.exports = MyLotto;
