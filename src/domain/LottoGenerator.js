const { Random } = require('@woowacourse/mission-utils');

class LottoGenerator {
  createLotto() {}

  createLottoNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);

    return this.#sortAscending(numbers);
  }

  #sortAscending(numbers) {
    return [...numbers].sort((a, b) => a - b);
  }
}

module.exports = LottoGenerator;
