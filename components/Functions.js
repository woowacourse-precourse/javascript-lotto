const { Random, Console } = require('@woowacourse/mission-utils');
const { INIT, FIVE, ONE } = require('../constants/basic number');
const { MATCH, RANK, PRIZE } = require('../constants/winning number');
const { DIVIDER } = require('../constants/basic number');
const { MIN, MAX, PICK } = require('../constants/lotto number');
const MESSAGE = require('../constants/message');

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

  static digitize(inputNumber) {
    return new Set(inputNumber.split(',').map((num) => +num));
  }
}

module.exports = Functions;
