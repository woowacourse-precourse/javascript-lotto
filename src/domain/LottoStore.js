const { Random } = require('@woowacourse/mission-utils');
const { getAscending } = require('../utils/common');
const { LOTTO_PRICE, ERROR } = require('../utils/constants');

class LottoStore {
  constructor() {}

  static #generate() {
    let numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers = getAscending(numbers);

    return numbers;
  }

  static getGeneratedLottos(purchasedAmount) {
    const generatedLottos = [];

    if (purchasedAmount <= 0 || purchasedAmount % LOTTO_PRICE !== 0) throw new Error(ERROR.notThousandWonUnit);

    const number = purchasedAmount / LOTTO_PRICE;

    for (let i = 0; i < number; i++) {
      const lotto = this.#generate();
      generatedLottos.push(lotto);
    }

    return generatedLottos;
  }
}

module.exports = LottoStore;
