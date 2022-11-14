const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");

class LottoMachine {
  constructor() {
    this.lottoArr = [];
  }

  makeLotto(number) {
    for (let i = 0; i < number; i++) {
      const lotto = new Lotto(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
      );
      this.lottoArr.push(lotto);
    }
    return this.lottoArr;
  }
}

module.exports = LottoMachine;
