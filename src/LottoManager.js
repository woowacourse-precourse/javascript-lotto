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

    return [...numberSet];
  }

  issueLottos(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000;
    /**
     * TODO: 랜덤 번호 6개 생성하여 lottoCount 만큼의 로또 발행
     */
    for (let i = 0; i < lottoCount; i++) {
      this.lottos.push(new Lotto([1, 2, 3, 4, 5, 6]));
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
