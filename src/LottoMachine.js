const MissionUtils = require("@woowacourse/mission-utils");

class LottoMachine {
  #random = MissionUtils.Random;
  
  constructor() {
  }

  generate() {
    const numbers = this.#random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort()
  }
}

module.exports = LottoMachine;
