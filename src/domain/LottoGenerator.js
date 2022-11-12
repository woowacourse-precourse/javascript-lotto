const { Random } = require('@woowacourse/mission-utils');

const Lotto = require('./Lotto');

class LottoGenerator {
  createLotto() {
    const numbers = this.#createLottoNumbers();
    return new Lotto(numbers);
  }

  #createLottoNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);

    return this.#sortAscending(numbers);
  }

  #sortAscending(numbers) {
    return [...numbers].sort((a, b) => a - b);
  }
}

module.exports = LottoGenerator;
