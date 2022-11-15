const { ERROR } = require('./constants');
const { error } = require('./util');
const { checkBonusLottoNumber } = require('./validation');

class Bonus {
  #bonusNumber;
  #winningNumber;

  constructor(bonusNumber, winningNumber) {
    this.#winningNumber = winningNumber;
    checkBonusLottoNumber(bonusNumber);
    this.isBonusInLotto(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  isBonusInLotto(bonusNumber) {
    if (this.#winningNumber.includes(Number(bonusNumber))) {
      error(ERROR.DUPLICATE);
    }
  }

  getBonusNumer() {
    return Number(this.#bonusNumber);
  }

  compareUserAndBonus(publishedLotto) {
    let fiveWinningNumber = [];
    fiveWinningNumber = publishedLotto.filter(
      (eachUserLottoNumber) => this.getFiveMatchNumberArray(eachUserLottoNumber).length === 5
    );
  }

  getFiveMatchNumberArray(eachUserLottoNumber) {
    return eachUserLottoNumber.filter((number) => this.#winningNumber.includes(number));
  }
}

module.exports = Bonus;
