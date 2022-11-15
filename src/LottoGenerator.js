const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const {
  LOTTO_RANGE_MIX_NUMBER,
  LOTTO_RANGE_MAX_NUMBER,
  LOTTO_MAX_LENGTH,
} = require("./util/config");

class LottoGenerator {
  static generate() {
    return new Lotto(
      MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO_RANGE_MIX_NUMBER,
        LOTTO_RANGE_MAX_NUMBER,
        LOTTO_MAX_LENGTH
      ).sort((a, b) => a - b)
    );
  }
}

module.exports = LottoGenerator;
