const { SYSTEM } = require('./consts/LottoSystem');

class Calculate {
  numberOfMatch;
  isBonusMatch;
  rank;

  constructor(purchaseLotto, winningLotto) {
    this.numberOfMatch = this.calcNumberOfMatch(purchaseLotto, winningLotto);
    this.isBonusMatch = this.calcBonusMatch(purchaseLotto, winningLotto);
    this.rank = this.calculateRank();
  }

  getNumberOfMatch() {
    return this.numberOfMatch;
  }

  getIsBonusMatch() {
    return this.isBonusMatch;
  }

  getRank() {
    return this.rank;
  }

  calcNumberOfMatch(purchaseLotto, winningLotto) {
    const purchaseNumbers = purchaseLotto.getNumbers();
    const winningNumbers = winningLotto.getNumbers();

    const filtered = purchaseNumbers.filter((purchaseNumber) =>
      winningNumbers.includes(purchaseNumber)
    );

    return filtered.length;
  }

  calcBonusMatch(purchaseLotto, winningLotto) {
    const purchaseNumbers = purchaseLotto.getNumbers();
    const bonusNumber = winningLotto.getBonusNumber();

    return purchaseNumbers.includes(bonusNumber);
  }

  calculateRank() {
    const { RANK } = SYSTEM;

    switch (this.numberOfMatch) {
      case RANK[1]:
        return 1;
      case RANK[2]:
        if (thisBonusMatch) {
          return 2;
        }
        return 3;
      case RANK[4]:
        return 4;
      case RANK[5]:
        return 5;
      default:
        return 6;
    }
  }
}

module.exports = Calculate;
