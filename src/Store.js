const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { MATCHES } = require("./LottoAnswer");

class Store {
  constructor() {
    this.price = 0;
    this.candidates = [];
    this.result = new Map([
      [MATCHES[3], [5000, 0]],
      [MATCHES[4], [50000, 0]],
      [MATCHES[5], [1500000, 0]],
      [MATCHES["5+"], [3000000, 0]],
      [MATCHES[6], [20000000, 0]],
    ]);
  }

  issue() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort((a, b) => a - b);
    const lotto = new Lotto(numbers);
    this.candidates.push(lotto);
  }
}

module.exports = Store;
