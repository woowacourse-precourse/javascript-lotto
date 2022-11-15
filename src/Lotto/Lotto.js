const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  constructor() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 46, 6).sort(
      (a, b) => a - b
    );
    this.#numbers = numbers;
  }
}

module.exports = Lotto;
