const MissionUtils = require("@woowacourse/mission-utils");

class LottoMachine {
  #random = MissionUtils.Random;
  
  constructor() {
  }

  generate() {
    let numbers = this.#random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => {
      return a - b;
    });
  }
}

module.exports = LottoMachine;
