const { Random } = require('@woowacourse/mission-utils');

const random = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
};

module.exports = { random };
