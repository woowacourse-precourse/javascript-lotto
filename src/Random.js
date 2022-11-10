const MissionUtils = require("@woowacourse/mission-utils");

const Random = {
  pickUniqueNumbersInRange(startInclusive, endInclusive, count) {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      startInclusive,
      endInclusive,
      count,
    );
  },
};

module.exports = Random;
