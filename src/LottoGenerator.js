const MissionUtils = require('@woowacourse/mission-utils');

class LottoGenerator {
  createLottoNums() {
    const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return number.sort((a, b) => a - b);
  }
}

module.exports = LottoGenerator;
