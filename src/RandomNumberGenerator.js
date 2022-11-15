const MissionUtils = require("@woowacourse/mission-utils");

module.exports = class RandomNumberGenerator {
  pickNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
  randomNumber() {
    const RANDOM_NUMBER_ARRAY = this.pickNumber();
    return RANDOM_NUMBER_ARRAY;
  }
};
