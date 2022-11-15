const lottoRank = require('./util/lottoRank');
const rank = require('./util/rank');
const gameConfig = require('./util/gameConfig');

class User {
  constructor() {
    this.amount = 0;
    this.lottos = [];
    this.lottoCount = 0;
    this.prize = 0;
    this.hitRanks = [0, 0, 0, 0, 0, 0];
    this.returnOfInvestment = 0;
  }

  calcLottoCount() {
    this.lottoCount = this.amount / gameConfig.AMOUNT_PER_GAME;
  }

  calcHitLottoCount(hitLotto, bonusNumber) {
    const hitLottoNumbers = hitLotto.getNumbers();
    this.lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const count = this.calcHitNumberCount(lottoNumbers, hitLottoNumbers);
      const isBonus = hitLottoNumbers.includes(bonusNumber);
      const rank = this.decideRank(count, isBonus);
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

  decideRank(count, isBonus) {
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

  calcStat(hitLotto, bonusNumber) {
    this.calcHitLottoCount(hitLotto, bonusNumber);
    this.calcTotalPrize();
    this.calcReturnOfInvestment();
  }

  calcTotalPrize() {
    this.hitRanks.forEach((count, index) => {
      this.prize += lottoRank[index].prize * count;
    });
  }

  calcReturnOfInvestment() {
    this.returnOfInvestment = ((this.prize / this.amount) * 100).toFixed(1);
  }
}

module.exports = User;
