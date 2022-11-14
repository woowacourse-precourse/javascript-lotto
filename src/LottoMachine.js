const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const { RANGE } = require("./Constant");

class LottoMachine {
  constructor() {
    this.lottoArr = [];
  }

  makeLotto(number) {
    for (let i = 0; i < number; i++) {
      const lotto = new Lotto(
        MissionUtils.Random.pickUniqueNumbersInRange(
          RANGE.MIN,
          RANGE.MAX,
          RANGE.PICK_COUNT
        )
      );
      this.lottoArr.push(lotto);
    }
    return this.lottoArr;
  }
}

module.exports = LottoMachine;
