const { PRICE } = require("./message");

class Calculator {
  rank = {
    fifth: 0,
    fourth: 0,
    third: 0,
    second: 0,
    first: 0,
  };

  constructor(userLotto, winngingLotto, bonusLotto) {
    this.userLotto = userLotto; // 사용자가 무작위 생성한 로또
    this.winngingLotto = winngingLotto; // 당첨 번호
    this.bonusLotto = bonusLotto; // 보너스 번호
    this.lotateLotto(userLotto, winngingLotto);
  }

  static calculateRevenue(rank, purchase) {
    const totalPrice =
      rank.first * PRICE.FIRST +
      rank.second * PRICE.SECOND +
      rank.third * PRICE.THIRD +
      rank.fourth * PRICE.FOURTH +
      rank.fifth * PRICE.FIFTH;
    const revenue = (totalPrice / purchase) * 100;
    return revenue.toFixed(1);
  }

  lotateLotto(userLotto, winngingLotto) {
    userLotto.forEach((lotto) => {
      this.matchLotto(lotto, winngingLotto);
    });
  }
  matchLotto(lotto, winngingLotto) {
    const sameBall = winngingLotto.filter((num) => lotto.includes(Number(num)));
    this.addRank(sameBall.length, lotto);
  }
  addRank(matching, lotto) {
    if (matching === 6) {
      this.rank.first++;
    } else if (matching === 5 && this.isBonusLotto(lotto, this.bonusLotto)) {
      this.rank.second++;
    } else if (matching === 5) {
      this.rank.third++;
    } else if (matching === 4) {
      this.rank.fourth++;
    } else if (matching === 3) {
      this.rank.fifth++;
    }
  }

  isBonusLotto(fiveBall, bonusLotto) {
    if (fiveBall.includes(Number(bonusLotto))) {
      return true;
    }
  }

  returnRank() {
    return this.rank;
  }
}
module.exports = Calculator;
