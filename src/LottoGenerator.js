const MissionUtils = require("@woowacourse/mission-utils");

class LottoGenerator {
  createLottoNumbers(lottoCount) {
    const lottoArr = [];
    while (lottoArr.length < lottoCount) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      lottoArr.push(numbers);
    }
    return lottoArr;
  }
}

module.exports = LottoGenerator;
