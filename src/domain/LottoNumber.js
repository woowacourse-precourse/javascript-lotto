const { Random } = require("@woowacourse/mission-utils");
const { LOTTO_NUMBER } = require("../constants/gameCondition");

class LottoNumber {
  static generate() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER.START_NUMBER,
      LOTTO_NUMBER.END_NUMBER,
      LOTTO_NUMBER.COUNT_NUMBER
    );

    return LottoNumber.sort(randomNumbers);
  }

  static sort(lottoNumbers) {
    return lottoNumbers.sort((lottoNum1, lottoNum2) => lottoNum1 - lottoNum2);
  }
}

module.exports = LottoNumber;
