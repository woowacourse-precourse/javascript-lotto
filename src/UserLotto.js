const MissionUtils = require("@woowacourse/mission-utils");

class UserLotto {
  #lottoCount;
  constructor() {
    this.userLottoList = [];
  }
  createUserLotto(amount) {
    this.#lottoCount = amount / 1000;
    for (let make = 0; make < this.#lottoCount; make++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.userLottoList.push(numbers);
    }
  }
}

module.exports = UserLotto;
