const { Random } = require("@woowacourse/mission-utils");
const { LOTTO } = require("../constants");

class LottoGenerator {
  static generate() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      LOTTO.RANGE_MIN,
      LOTTO.RANGE_MAX,
      LOTTO.LENGTH
    );
    return randomNumbers.sort((numA, numB) => numA - numB);
  }
}

module.exports = LottoGenerator;
