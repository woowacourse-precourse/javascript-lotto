const { Random } = require('@woowacourse/mission-utils');
const { LOTTO_NUMBER } = require('../constants');

function makeRandomNumberArr() {
  return Random.pickUniqueNumbersInRange(
    LOTTO_NUMBER.START,
    LOTTO_NUMBER.END,
    LOTTO_NUMBER.LENGTH,
  ).sort((a, b) => a - b);
}

function isSame(count, set) {
  return set.size === count;
}

function makeLottoSet(count) {
  let lottoSet = new Set();
  for (let i = 0; i < count; i++) {
    const numbers = makeRandomNumberArr();
    lottoSet.add(JSON.stringify(numbers));
  }

  let lottoSetSize = lottoSet.size;

  if (!isSame(count, lottoSet)) {
    return this.makeLottoSet(count - lottoSetSize);
  }

  return lottoSet;
}

module.exports = { isSame, makeLottoSet };
