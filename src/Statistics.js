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
  showStatistics() {
    Console.print("\n당첨 통계");
    Console.print("---");
    this.showTotalCount();
    this.showLotteryReturn();
  }
  showTotalCount() {
    for (let hit = 3; hit < 7; hit++) {
      this.showCount(hit);
    }
  }
  showCount(hit) {
    Console.print(
      `${hit}개 일치 ` +
        `(${LOTTO_REWARD[hit + "hit"]
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원) ` +
        `- ${this.#totalCount[hit + "hit"]}개`
    );
    if (hit === 5) {
      this.showBonusCount();
    }
  }
  showBonusCount() {
    Console.print(
      `5개 일치, 보너스 볼 일치 (${LOTTO_REWARD["5hitBonus"]
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원) - ${
        this.#totalCount["5hitBonus"]
      }개`
    );
  }
  showLotteryReturn() {
    Console.print(
      `총 수익률은 ${this.#totalReturn
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}%입니다.\n`
    );
  }
}

module.exports = { Statistic };
