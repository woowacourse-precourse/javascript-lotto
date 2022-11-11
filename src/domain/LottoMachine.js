const { Random } = require("@woowacourse/mission-utils");
const { LOTTO } = require("../constants");

class LottoMachine {
  static generate() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      LOTTO.RANGE_MIN,
      LOTTO.RANGE_MAX,
      LOTTO.COUNT
    );
    return randomNumbers.sort((numA, numB) => numA - numB);
  }
}

module.exports = LottoMachine;
