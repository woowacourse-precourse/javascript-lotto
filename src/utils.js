const { LOTTO } = require('./constructor.js');
const { Random, Console } = require("@woowacourse/mission-utils");

const createRandomLottoNumbers = () => {
  const randoms = Random.pickUniqueNumbersInRange(LOTTO.MIN, LOTTO.MAX, LOTTO.LENGTH)
  return randoms.sort((num1, num2) => num1 - num2);
}

module.exports = {
  createRandomLottoNumbers,
}