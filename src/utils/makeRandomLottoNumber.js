const { Random } = require('@woowacourse/mission-utils');

const makeRandomLottoNumber = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6);
};

module.exports = makeRandomLottoNumber;
