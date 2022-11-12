const { Random } = require('@woowacourse/mission-utils');
const { DIVIDER } = require('../constants/basic number');
const { MIN, MAX, PICK } = require('../constants/lotto number');

class Functions {
  static getLottoCount(money) {
    return money / DIVIDER;
  }

  static generateLottos(count) {
    return Array.from({ length: count }, () =>
      Random.pickUniqueNumbersInRange(MIN, MAX, PICK).sort(
        (numA, numB) => numA - numB
      )
    );
  }
}

module.exports = Functions;
