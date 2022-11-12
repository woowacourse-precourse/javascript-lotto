const {
  VARIABLE_LOTTO,
  LOTTO_ERROR_MESSAGE,
} = require('../../utils/constants');

class LottoDrawFactory {
  constructor({ lotto, bonus }) {
    this.lotto = lotto;
    this.bonus = bonus;

    this.#validate();
  }

  getNumber(type) {
    switch (type) {
      case VARIABLE_LOTTO.lotto:
        return this.lotto.getNumber();
      case VARIABLE_LOTTO.bonus:
        return this.bonus.getNumber();
      default:
        throw new Error(LOTTO_ERROR_MESSAGE.factoryTypeError);
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
      new Set([...this.lotto.getNumber(), this.bonus.getNumber()]).size ===
      VARIABLE_LOTTO.len
    );
  }
}

module.exports = LottoDrawFactory;
