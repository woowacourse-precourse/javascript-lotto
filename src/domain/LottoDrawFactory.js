const {
  VARIABLE_FACTORY,
  LOTTO_ERROR_MESSAGE,
  VARIABLE_LOTTO,
} = require('../../utils/constants');

class LottoDrawFactory {
  #lotto;

  #bonus;

  #lottoStore;

  constructor({ lotto, bonus, lottoStore }) {
    this.#lotto = lotto;
    this.#bonus = bonus;
    this.#lottoStore = lottoStore;

    this.#validate();
  }

  getNumber(type) {
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

  #validate() {
    if (this.#validateOverlap()) {
      throw new Error(LOTTO_ERROR_MESSAGE.overlap);
    }

    return this;
  }

  #validateOverlap() {
    return (
      new Set([...this.#lotto.getNumber(), this.#bonus.getNumber()]).size ===
      VARIABLE_LOTTO.len
    );
  }
}

module.exports = LottoDrawFactory;
