const MissionUtils = require('@woowacourse/mission-utils');
const { PRICE_PER_LOTTO } = require('./Const');
const { Console, Random } = MissionUtils;

class GenerateLotto {
  static carculateLottoCount(price) {
    return price / PRICE_PER_LOTTO;
  }
}

module.exports = GenerateLotto;
