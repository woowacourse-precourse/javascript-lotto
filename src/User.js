const lottoRank = require('./util/lottoRank');
const rank = require('./util/rank');
const util = require('./util/util');

class User {
  constructor() {
    this.amount = 0;
    this.lottos = [];
    this.lottoCount = 0;
    this.prize = 0;
    this.hitRanks = [0, 0, 0, 0, 0, 0];
    this.returnOfInvestment = 0;
  }

  calculateLottoCount() {
    this.lottoCount = this.amount / util.AMOUNT_PER_GAME;
  }

  calculateHitLottoCount(hitLotto, bonusNumber) {
    const hitLottoNumbers = hitLotto.getNumbers();
    this.lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const count = this.calcHitNumberCount(lottoNumbers, hitLottoNumbers);
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
    this.returnOfInvestment = ((this.prize / this.amount) * 100).toFixed(1);
  }
}

module.exports = User;
