const MissionUtils = require("@woowacourse/mission-utils");
const LottoCost = require("../validation/LottoCost");
const {
  START_NUM,
  END_NUM,
  THOUSAND,
  LOTTO_CORRECT_COUNT,
} = require("../constant/number");

class LottoGenerator {
  static createLottoNums() {
    const number = MissionUtils.Random.pickUniqueNumbersInRange(START_NUM, END_NUM, LOTTO_CORRECT_COUNT);
    return number.sort((a, b) => a - b);
  }

  static publishLotto(lottoCost) {
    new LottoCost(lottoCost);
    const lottoArr = [];
    const lottoCount = +lottoCost / THOUSAND;
    for (let i = 0; i < lottoCount; i++) {
      lottoArr.push(this.createLottoNums());
    }
    return [lottoCount, lottoArr];
  }
}

module.exports = LottoGenerator;
