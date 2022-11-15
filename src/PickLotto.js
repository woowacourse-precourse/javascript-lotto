const MissionUtils = require('@woowacourse/mission-utils');

class PickLotto {
  pickRandomLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      6
    ).sort();
    return numbers;
  }
}

module.exports = PickLotto;
