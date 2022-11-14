const { ERROR } = require("./constants");
const { error } = require("./util");
const { checkBonusLottoNumber } = require("./validation");

class Bonus {
  #bonusNumber;

  constructor(bonusNumber, winningNumber){
    checkBonusLottoNumber(bonusNumber);
    this.isBonusInLotto(bonusNumber, winningNumber);    
    this.#bonusNumber = bonusNumber;
  }

  isBonusInLotto(bonusNumber, winningNumber) {
    if (winningNumber.includes(Number(bonusNumber))) {
      error(ERROR.DUPLICATE);
    }
  }

  getBonusNumer () {
    return Number(this.#bonusNumber);
  }
}

module.exports = Bonus;