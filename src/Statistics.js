const { Console } = require("@woowacourse/mission-utils");
const LOTTO_REWARD = {
  "3hit": 5000,
  "4hit": 50000,
  "5hit": 1500000,
  "5hitBonus": 30000000,
  "6hit": 2000000000,
};
class Statistic {
  #totalCount;
  #totalReword;
  constructor() {
    this.#totalCount = {
      "3hit": 0,
      "4hit": 0,
      "5hit": 0,
      "5hitBonus": 0,
      "6hit": 0,
    };
    this.#totalReword = 0;
  }

  calculateLotteryReturn(purchaseAmount) {
    Object.keys(this.#totalCount).forEach((hit) => {
      this.#totalReword += this.#totalCount[hit] * LOTTO_REWARD[hit];
    });
    return Math.round((this.#totalReword / purchaseAmount) * 100 * 10) / 10;
  }
  countRank(lottoNumbers, winningNumber) {
    lottoNumbers.forEach((lottoNumber) => {
      const rank = this.checkRank(
        this.countHit(lottoNumber, winningNumber),
        this.checkBonusNumber(lottoNumber, winningNumber)
      );
      if (rank) {
        this.#totalCount[rank] = this.#totalCount[rank] += 1;
      }
    });
  }

  checkRank(hit, bonusHit = false) {
    if (hit > 2) {
      if (hit == 5 && bonusHit) {
        return "5hitBonus";
      }
      return `${hit}hit`;
    }
    return null;
  }

  countHit(lottoNumber, winningNumber) {
    let hit = 0;
    winningNumber = winningNumber.slice(0, 6);
    for (let number = 0; number < winningNumber.length; number++) {
      if (winningNumber.indexOf(lottoNumber[number]) !== -1) {
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
  getTotalCount() {
    return this.#totalCount;
  }
}

module.exports = { Statistic };
