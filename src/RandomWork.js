const { Random } = require('@woowacourse/mission-utils');

class RandomWork {
  static makeRandom(start, end) {
    const result = Random.pickNumberInRange(start, end);
    return result;
  }
}

module.exports = RandomWork;
