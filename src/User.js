const config = require("./util/config");
const rank = require("./util/rank");
const lottoRank = require("./util/lottoRank");

class User {
  constructor() {
    this.fee = 0;
    this.lottos = [];
    this.lottoCount = 0;
    this.prize = 0;
    this.hitRanks = [0, 0, 0, 0, 0, 0];
    this.returnOfInvestment = 0;
  }

  calculateLottoCount() {
    this.lottoCount = this.fee / config.FEE_PER_GAME;
  }

  calculateHitLottoCount(hitLotto, bonusNumber) {
    const hitLottoNumbers = hitLotto.getNumbers();

    this.lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const count = calcHitNumberCount(lottoNumbers, hitLottoNumbers);
      const isBonus = hitLottoNumbers.includes(bonusNumber);
      const rank = this.dicideRank(count, isBonus);

      this.hitRanks[rank] += 1;
    });

    return;
  }

  calcHitNumberCount(lottoNumbers, hitLottoNumbers) {
    let count = 0;

    lottoNumbers.forEach((lottoNumber) => {
      if (hitLottoNumbers.includes(lottoNumber)) {
        count++;
      }
    });

    return count;
  }

  dicideRank(count, isBonus) {
    if (count === 6) {
      return rank.FIRST;
    }
    if (count === 5 && isBonus) {
      return rank.SECOND;
    }
    if (count === 5) {
      return rank.THIRD;
    }
    if (count === 4) {
      return rank.FOURTH;
    }
    if (count == 3) {
      return rank.FIFTH;
    }
    return rank.LOST;
  }

  calculateStat(hitLotto, bonusNumber) {
    this.calculateHitLottoCount(hitLotto, bonusNumber);
    this.calculateTotalPrize();
    this.calcuateReturnOfInvestment();
  }

  calculateTotalPrize() {
    this.hitRanks.forEach((count, index) => {
      this.prize += lottoRank[index].prize * count;
    });
  }

  calcuateReturnOfInvestment() {
    this.returnOfInvestment = (this.prize / this.amount).toFixed(2);
  }
}

module.exports = User;
