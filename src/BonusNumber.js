const { errorIfBonusLottoInvalidFormat } = require('./lib/Validator');

class BonusNumber {
  #bonusNumber;

  constructor(bonusNumber) {
    this.#validate(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  #validate(bonusNumber) {
    errorIfBonusLottoInvalidFormat(bonusNumber);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = BonusNumber;
