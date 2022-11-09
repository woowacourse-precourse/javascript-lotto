const { LOTTO } = require('./constructor.js');
const { Random, Console } = require("@woowacourse/mission-utils");

const createRandomLottoNumbers = () => {
  return Random.pickUniqueNumbersInRange(LOTTO.MIN, LOTTO.MAX, LOTTO.LENGTH);
}

module.exports = {
  createRandomLottoNumbers,
}