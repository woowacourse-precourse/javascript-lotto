const { Random } = require('@woowacourse/mission-utils');

function makeLotto() {
  const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  return lottoNumber;
}

module.exports = makeLotto;