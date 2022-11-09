const { Random } = require('@woowacourse/mission-utils');

const Lotto = require('./Lotto');

class LottoManager {
  #lottos = [];
  #winningNumbers;
  #earningsRate;

  createLottoNumbers() {
    const numberSet = new Set();

    while (numberSet.size < 6) {
      numberSet.add(Random.pickNumberInRange(1, 45));
    }

    return [...numberSet].sort((a, b) => a - b);
  }

  issueLottos(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000;

    for (let i = 0; i < lottoCount; i++) {
      this.lottos.push(new Lotto(this.createLottoNumbers()));
    }
  }

  get lottos() {
    return this.#lottos;
  }

  get winningNumbers() {
    return this.#winningNumbers;
  }

  get earningsRate() {
    return this.#earningsRate;
  }
}

module.exports = LottoManager;
