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
}

module.exports = BonusNumber;
