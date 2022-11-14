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

  validatePrice(price) {
    if (price === "" || isNaN(price))
      throw new Error("[ERROR] 숫자를 입력해 주세요.");
    if (price % 1000 !== 0)
      throw new Error("[ERROR] 1000원 단위로 입력해 주세요.");
    if (price <= 0) throw new Error("[ERROR] 양의 정수를 입력해 주세요.");
  }
}

module.exports = Store;
