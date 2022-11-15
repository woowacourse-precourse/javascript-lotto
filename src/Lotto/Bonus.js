const { ERROR, prizeCount, NUMBER } = require('../common/constants');
const { error } = require('../common/util');
const { checkBonusNumber } = require('../common/Validation');

class Bonus {
  #bonusNumber;
  #winningNumber;

  constructor(bonusNumber, winningNumber) {
    this.#winningNumber = winningNumber;
    checkBonusNumber(bonusNumber);
    this.isBonusInWinningNumber(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  isBonusInWinningNumber(bonusNumber) {
    if (this.#winningNumber.includes(Number(bonusNumber))) {
      error(ERROR.DUPLICATE);
    }
  }

  compareUserAndBonus(publishedLotto) {
    let fiveMatchLotto = [];
    fiveMatchLotto = publishedLotto.filter(
      (eachUserLottoNumber) => this.getFiveMatchNumberArray(eachUserLottoNumber).length === NUMBER.FIVE_MATCHED
    );
    this.isBonusInFiveMatchLotto(fiveMatchLotto);
  }

  getFiveMatchNumberArray(eachUserLottoNumber) {
    return eachUserLottoNumber.filter((number) => this.#winningNumber.includes(number));
  }

  isBonusInFiveMatchLotto(fiveMatchLotto) {
    fiveMatchLotto.forEach((eachUserLottoNumber) => {
      if (eachUserLottoNumber.includes(this.#bonusNumber)) {
        return (prizeCount.second += NUMBER.INCREASED_COUNT);
      }
      prizeCount.third += NUMBER.INCREASED_COUNT;
    });
  }
}

module.exports = Bonus;
