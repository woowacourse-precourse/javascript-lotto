const { Random } = require('@woowacourse/mission-utils');

const random = {
  pickUniqueNumbersInRange(startInclusive, endInclusive, count) {
    return Random.pickUniqueNumbersInRange(startInclusive, endInclusive, count);
  },
};

module.exports = random;
