const { VARIABLE_FACTORY } = require('../../utils/constants');

class LottoDrawFactory {
  #lotto;

  #bonus;

  #lottoStore;

  constructor({ lotto, bonus, lottoStore }) {
    this.#lotto = lotto;
    this.#bonus = bonus;
    this.#lottoStore = lottoStore;
  }

  getInstance(type) {
    switch (type) {
      case VARIABLE_FACTORY.lotto:
        return this.#lotto;
      case VARIABLE_FACTORY.bonus:
        return this.#bonus;
      case VARIABLE_FACTORY.lottoStore:
        return this.#lottoStore;
      default:
        throw new Error(VARIABLE_FACTORY.factoryTypeError);
    }
  }
}

module.exports = LottoDrawFactory;
