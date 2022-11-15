const { Random } = require('@woowacourse/mission-utils');

class RandomWork {
  static makeRandom(start, end, count) {
    const result = Random.pickUniqueNumbersInRange(start, end, count);
    return result;
  }
}

module.exports = RandomWork;
