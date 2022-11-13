const { Random } = require('@woowacourse/mission-utils');

const processRandomLottoNumber = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6);
};

module.exports = processRandomLottoNumber;
