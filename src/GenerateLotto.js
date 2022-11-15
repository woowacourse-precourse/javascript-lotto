const MissionUtils = require('@woowacourse/mission-utils');
const { PRICE_PER_LOTTO, LOTTO_COUNT_MESSAGE } = require('./Const');
const { Console, Random } = MissionUtils;

class GenerateLotto {
  static carculateLottoCount(price) {
    return price / PRICE_PER_LOTTO;
  }

  static printLottoCount(lottoCount) {
    Console.print(lottoCount + LOTTO_COUNT_MESSAGE);
  }

  static generateLottoNumber(lottoCount) {
    let lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      let lotto = Random.pickUniqueNumbersInRange(LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, LOTTO_PICK_COUNT);
      lottos.push(lotto.sort((a, b) => (a > b ? 1 : -1)));
    }

    return lottos;
  }
}

module.exports = GenerateLotto;
