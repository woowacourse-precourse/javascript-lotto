const { Random } = require("@woowacourse/mission-utils");

const LOTTO = Object.freeze({
  RANGE_MIN: 1,
  RANGE_MAX: 45,
  COUNT: 6,
});

class LottoGenerator {
  static generate() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      LOTTO.RANGE_MIN,
      LOTTO.RANGE_MAX,
      LOTTO.COUNT
    );
    return randomNumbers.sort((numA, numB) => numA - numB);
  }
}

module.exports = LottoGenerator;
