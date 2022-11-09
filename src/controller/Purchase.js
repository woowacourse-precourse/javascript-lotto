const { Random } = require('@woowacourse/mission-utils');

class Purchase {
  getLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = Purchase;
