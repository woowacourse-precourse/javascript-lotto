const { Random } = require("@woowacourse/mission-utils");
const { LOTTO_NUMBER } = require("./../utils/Constant");

class LottoNumber {
  static generate() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER.START,
      LOTTO_NUMBER.END,
      LOTTO_NUMBER.COUNT
    );

    return LottoNumber.sort(randomNumbers);
  }

  static sort(lottoNumbers) {
    return lottoNumbers.sort((lottoNum1, lottoNum2) => lottoNum1 - lottoNum2);
  }
}

module.exports = LottoNumber;
