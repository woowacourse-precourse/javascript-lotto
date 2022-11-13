const { Random } = require("@woowacourse/mission-utils");
const { LOTTO_SPEC } = require("../constants");

class LottoGenerator {
  static generate() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      LOTTO_SPEC.MIN_NUMBER,
      LOTTO_SPEC.MAX_NUMBER,
      LOTTO_SPEC.LENGTH,
    );
    return randomNumbers.sort((numA, numB) => numA - numB);
  }
}

module.exports = LottoGenerator;
