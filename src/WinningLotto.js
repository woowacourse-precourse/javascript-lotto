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

  calculateLottoRanking(targetNumbers) {
    const numberOfMatch = this.calculateNumberOfMatch(targetNumbers);

    if (numberOfMatch === 6) return 1;
    if (numberOfMatch === 5) {
      if (targetNumbers.includes(this.#bonusNumber)) return 2;
      return 3;
    }
    if (numberOfMatch === 4) return 4;
    if (numberOfMatch === 3) return 5;
    return 0;
  }

  calculateNumberOfMatch(targetNumbers) {
    const winningNumbers = this.getNumbers();

    return targetNumbers.filter((number) => winningNumbers.includes(number))
      .length;
  }
}

module.exports = WinningLotto;
