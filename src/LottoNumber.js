const MissionUtils = require('@woowacourse/mission-utils');
const { Random } = MissionUtils;
const {
  LOTTO_NUMBER_MIN,
  LOTTO_NUMBER_MAX,
  LOTTO_LENGTH,
} = require('./Constants');

class LottoNumber {
  createLottoNumber() {
    const lottoNumber = Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER_MIN,
      LOTTO_NUMBER_MAX,
      LOTTO_LENGTH
    );
    this.lottoNumber = lottoNumber.sort((a, b) => a - b);
    return this.lottoNumber;
  }
}

const lottoNumber = new LottoNumber();
exports.lottoNumber = lottoNumber;
