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
}

module.exports = GenerateLotto;
