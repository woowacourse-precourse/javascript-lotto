const { Random } = require("@woowacourse/mission-utils");
const { LOTTO } = require("./utils/string");
class LottoGenerator {
  static createLottoNumbers() {
    let lottoArr = Random.pickUniqueNumbersInRange(
      LOTTO.START,
      LOTTO.END,
      LOTTO.COUNT
    );
    lottoArr.sort((a, b) => a - b);
    return lottoArr;
  }
}

module.exports = LottoGenerator;
