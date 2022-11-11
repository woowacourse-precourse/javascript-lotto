const { Random } = require('@woowacourse/mission-utils');

class LottoNumberPublishedFromComputer {
  getLottoNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  sort(arr) {
    return arr.sort((a, b) => a - b);
  }

  return() {
    return this.sort(this.getLottoNumber());
  }
}

module.exports = LottoNumberPublishedFromComputer;
