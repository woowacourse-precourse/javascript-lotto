const { ERROR, prizeCount } = require('./constants');
const { error } = require('./util');
const { checkBonusLottoNumber } = require('./validation');

class Bonus {
  #bonusNumber;
  #winningNumber;

  constructor(bonusNumber, winningNumber) {
    this.#winningNumber = winningNumber;
    checkBonusLottoNumber(bonusNumber);
    this.isBonusInLotto(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  isBonusInLotto(bonusNumber) {
    if (this.#winningNumber.includes(Number(bonusNumber))) {
      error(ERROR.DUPLICATE);
    }
  }

  compareUserAndBonus(publishedLotto) {
    let fiveWinningNumber = [];
    fiveWinningNumber = publishedLotto.filter(
      (eachUserLottoNumber) => this.getFiveMatchNumberArray(eachUserLottoNumber).length === 5
    );
    this.isBonusInFiveMatchLotto(fiveWinningNumber);
  }

  getFiveMatchNumberArray(eachUserLottoNumber) {
    return eachUserLottoNumber.filter((number) => this.#winningNumber.includes(number));
  }

  isBonusInFiveMatchLotto(fiveWinningNumber) {
    fiveWinningNumber.forEach((eachUserLottoNumber) => {
      if (eachUserLottoNumber.includes(this.#bonusNumber)) {
        return (prizeCount.second += 1);
      }
      prizeCount.third += 1;
    });
  }
}

module.exports = Bonus;
