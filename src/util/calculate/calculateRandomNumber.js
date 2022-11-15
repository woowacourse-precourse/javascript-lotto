const { Random } = require('@woowacourse/mission-utils');

const calculateRandomNumber = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6);
};

module.exports = calculateRandomNumber;
