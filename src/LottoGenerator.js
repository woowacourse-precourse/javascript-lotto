const MissionUtils = require('@woowacourse/mission-utils');

class LottoGenerator {
  createLottoNums() {
    const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return number.sort((a, b) => a - b);
  }

  publishLotto(lottoCost) {
    const lottoArr = [];
    const lottoCount = +lottoCost / 1000;
    for (let i = 0; i < lottoCount; i++) {
      lottoArr.push(this.createLottoNums());
    }
    return [lottoCount, lottoArr];
  }
}

module.exports = LottoGenerator;
