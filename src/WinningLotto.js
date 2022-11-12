const { LOTTO_ERROR_MESSAGE } = require("./Constant");
const Lotto = require("./Lotto");
const { existNumberOutOfRange, existDuplicateNumber } = require("./Validate");

class WinningLotto extends Lotto {
  #bonusNumber;

  getBonusNumber() {
    return this.#bonusNumber;
  }

  setBonusNumber(bonusNumber) {
    this.validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  validateBonusNumber(bonusNumber) {
    if (existDuplicateNumber([...this.getNumbers(), bonusNumber])) {
      throw new Error(LOTTO_ERROR_MESSAGE.DUPLICATE_NUMBER);
    }

    if (existNumberOutOfRange([bonusNumber], 1, 45)) {
      throw new Error(LOTTO_ERROR_MESSAGE.RANGE_FROM_1_TO_45);
    }
  }
}

module.exports = WinningLotto;
