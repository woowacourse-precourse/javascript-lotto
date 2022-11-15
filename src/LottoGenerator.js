const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const {
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
  COUNT_OF_LOTTO_NUMBERS,
} = require('./constants/gameSetting');

class LottoGenerator {
  static generateRandomLottoNumbers() {
    const randomLottoNumbers = Random.pickUniqueNumbersInRange(
      MIN_LOTTO_NUMBER,
      MAX_LOTTO_NUMBER,
      COUNT_OF_LOTTO_NUMBERS
    );

    return randomLottoNumbers.sort((a, b) => a - b);
  }

  static getLottos(totalLottosCount) {
    const lottos = new Map();
    let count = 0;
    while (count < totalLottosCount) {
      count += 1;
      lottos.set(`로또${count}`, new Lotto(this.generateRandomLottoNumbers()));
    }

    return lottos;
  }
}

module.exports = LottoGenerator;
