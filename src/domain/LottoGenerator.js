const { LOTTO } = require('../constants');
const { RandomAdapter } = require('../adapters');
const Lotto = require('./Lotto');

class LottoGenerator {
  createMultipleLotto(count) {
    const lottoArray = new Array(count).fill(null);

    return lottoArray.map(() => this.createLotto());
  }

  createLotto() {
    const numbers = this.#createLottoNumbers();

    return new Lotto(numbers);
  }

  #createLottoNumbers() {
    const random = new RandomAdapter();
    const numbers = random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.NUMBER_COUNT,
    );

    return this.#sortAscending(numbers);
  }

  #sortAscending(numbers) {
    return [...numbers].sort((a, b) => a - b);
  }
}

module.exports = LottoGenerator;
