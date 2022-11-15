const { Console } = require("@woowacourse/mission-utils");

class Statistic {
  #totalCount;
  constructor() {
    this.#totalCount = {
      "3hit": 0,
      "4hit": 0,
      "5hit": 0,
      "5hitBonus": 0,
      "6hit": 0,
    };
  }
  checkWin(lottoNumber, winningLotto) {
    const hit = this.countHit(lottoNumber, winningLotto);
    if (hit === 5) {
      this.checkBonusNumber(lottoNumber, winningLotto);
    }
    return hit;
  }
  countHit(lottoNumber, winningNumber) {
    let hit = 0;
    winningNumber = winningNumber.slice(0, 6);
    for (let number = 0; number < winningNumber.length; number++) {
      if (winningNumber.indexOf(lottoNumber[number]) !== -1) {
        console.log(winningNumber, lottoNumber[number]);
        hit += 1;
      }
    }
    return hit;
  }
  checkBonusNumber(lottoNumber, winningNumber) {
    if (lottoNumber.indexOf(winningNumber[winningNumber.length - 1]) !== -1) {
      return true;
    }
    return false;
  }
}

module.exports = { Statistic };
