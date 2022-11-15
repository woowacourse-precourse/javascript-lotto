const { LOTTO_ERROR_MESSAGE, RANKING } = require("./Constant");
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

    if (numberOfMatch === 6) return RANKING.FIRST;
    if (numberOfMatch === 5) {
      if (targetNumbers.includes(this.#bonusNumber)) return RANKING.SECOND;
      return RANKING.THIRD;
    }
    if (numberOfMatch === 4) return RANKING.FOURTH;
    if (numberOfMatch === 3) return RANKING.FIFTH;
    return null;
  }

  calculateNumberOfMatch(targetNumbers) {
    const winningNumbers = this.getNumbers();

    return targetNumbers.filter((number) => winningNumbers.includes(number))
      .length;
  }
}

module.exports = WinningLotto;
