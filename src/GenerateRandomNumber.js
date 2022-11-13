const MissionUtils = require("@woowacourse/mission-utils");

function generate() {
  const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

  return numbers.sort();
}

module.exports = generate;
