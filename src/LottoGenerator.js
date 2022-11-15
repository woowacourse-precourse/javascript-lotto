const MissionUtils = require("@woowacourse/mission-utils");

class LottoGenerator {
  createLottoNumbers(lottoCount) {
    const lottoArr = [];
    while (lottoArr.length < lottoCount) {
      const RANGE_START = 1;
      const RANGE_END = 45;
      const LOTTO_LENGTH = 6;
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
        RANGE_START,
        RANGE_END,
        LOTTO_LENGTH
      );
      numbers.sort((a, b) => a - b);
      lottoArr.push(numbers);
    }
    return lottoArr;
  }
}

module.exports = LottoGenerator;
