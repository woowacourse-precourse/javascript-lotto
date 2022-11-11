const { Random } = require('@woowacourse/mission-utils');

class LottoNumberPublishedFromComputer {
  return() {
    return this.sort(this.getLottoNumber());
  }

  sort(arr) {
    return arr.sort((a, b) => a - b);
  }

  getLottoNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = LottoNumberPublishedFromComputer;
