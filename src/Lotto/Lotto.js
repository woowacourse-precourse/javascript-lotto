const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  constructor() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 46, 6);
    this.#numbers = numbers;
  }
}

module.exports = Lotto;
