const { Random } = require('@woowacourse/mission-utils');

const Lotto = require('./Lotto');

class LottoManager {
  #lottos = [];
  #winningNumbers;
  #earningsRate = 0;

  validatePurchaseAmount(purchaseAmount) {
    if (this.isInvalidPurchaseAmount(purchaseAmount)) {
      throw new Error(
        '[ERROR] 구입 금액은 1,000으로 나누어 떨어지는 숫자여야 합니다.',
      );
    }
  }

  isInvalidPurchaseAmount(purchaseAmount) {
    return (
      !/^\d+$/g.test(purchaseAmount) ||
      parseInt(purchaseAmount, 10) % 1000 !== 0
    );
  }

  issueLottos(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000;

    for (let i = 0; i < lottoCount; i++) {
      this.lottos.push(new Lotto(this.createLottoNumbers()));
    }
  }

  createLottoNumbers() {
    const numberSet = new Set();

    while (numberSet.size < 6) {
      numberSet.add(Random.pickNumberInRange(1, 45));
    }

    return [...numberSet].sort((a, b) => a - b);
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
