const { ERROR_MESSAGES } = require('./constant');
const Utils = require('./Utils');

class Bonus {
  #bonusNumber;

  constructor(bonusNumber, winningLottoNumberArray) {
    this.validate(bonusNumber, winningLottoNumberArray);
    this.#bonusNumber = bonusNumber;
  }

  validate(bonusNumber, winningLottoNumberArray) {
    Utils.validateLottoSingleNumber(bonusNumber);

    if (winningLottoNumberArray.includes(bonusNumber)) {
      throw new Error(`${ERROR_MESSAGES.LOTTO_REDUPLICATION}`);
    }
  }

  getValue() {
    return this.#bonusNumber;
  }
}

module.exports = Bonus;
