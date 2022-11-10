const { Random } = require('@woowacourse/mission-utils');

const createLottoNumbers = () => {
  const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
  return lotto;
};

module.exports = { createLottoNumbers };
