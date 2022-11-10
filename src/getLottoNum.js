const { Random } = require('@woowacourse/mission-utils');

function getLottoNum() {
  return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
}

module.exports = getLottoNum;
