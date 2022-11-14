const MissionUtils = require("@woowacourse/mission-utils");

class LottoNumberGenerator {
  constructor() {}

  createRandomNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }
}

module.exports = LottoNumberGenerator;
