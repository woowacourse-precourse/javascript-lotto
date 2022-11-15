const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const { RANGE } = require("./Constant");

class LottoMachine {
  constructor() {
    this.lottoArr = [];
  }

  makeLotto(number) {
    for (let i = 0; i < number; i++) {
      const lotto = new Lotto(this.makeRandomArr());
      this.lottoArr.push(lotto);
    }
    return this.lottoArr;
  }
  makeRandomArr() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      RANGE.MIN,
      RANGE.MAX,
      RANGE.PICK_COUNT
    );
  }

  sortLottoNum(randomNumArr) {
    return randomNumArr.sort();
  }
}

module.exports = LottoMachine;
