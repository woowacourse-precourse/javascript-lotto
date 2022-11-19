const { Random } = require('@woowacourse/mission-utils');
const { LOTTO } = require('./constant');

class Lotto {
  #lottos;

  constructor(count) {
    this.#lottos = this.generateLottos(count);
  }

  getLottos() {
    return this.#lottos;
  }

  generateLottos(count) {
    const lottos = [];

    for (let i = 0; i < count; i += 1) {
      const lotto = Random.pickUniqueNumbersInRange(
        LOTTO.rangeStart,
        LOTTO.rangeEnd,
        LOTTO.count,
      ).sort((a, b) => a - b);

      lottos.push(lotto);
    }

    return lottos;
  }
}

module.exports = Lotto;
