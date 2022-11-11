const { VARIABLE_LOTTO } = require('../utils/constants');

class LottoDrawFactory {
  constructor({ lotto, bonus }) {
    this.lotto = lotto;
    this.bonus = bonus;

    this.#validate();
  }

  getNumber(type) {
    switch (type) {
      case 'lotto':
        return this.lotto.getNumber();
      case 'bonus':
        return this.bonus.getNumber();
      default:
        throw new Error('type을 명시해야합나디.');
    }
  }

  #validate() {
    if (this.#validateOverlap()) {
      throw new Error('[ERROR] 보너스 번호와 로또 번호가 중복입니다!!');
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
