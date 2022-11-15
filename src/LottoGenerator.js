const { Random } = require('@woowacourse/mission-utils');

const { LOTTO } = require('./constants');

class LottoGenerator {
  static issueLottoAsManyAsCount(count) {
    const lottos = [];
    while (lottos.length < count) {
      const randomNumbers = Random.pickUniqueNumbersInRange(
        LOTTO.MIN_NUMBER,
        LOTTO.MAX_NUMBER,
        LOTTO.LENGTH
      ).sort((a, b) => a - b);
      lottos.push(randomNumbers);
    }

    return lottos;
  }
}

module.exports = LottoGenerator;
