const { PARAMETERS, PRIZE_MONEY } = require('./utils/constants');

class CalculateLotto {
  constructor(winningNumber, bonusNumber, userLottoNumbers, purchaseCount) {
    this.winningCount = new Array(5).fill(0);
    this.winningNumber = winningNumber;
    this.bonusNumber = bonusNumber;
    this.userLottoNumbers = userLottoNumbers;
    this.purchaseAmount = purchaseCount * PARAMETERS.purchaseAmountUnit;
  }

  testUserLottos() {
    this.userLottoNumbers.forEach((lottoNumber) => {
      const COUNT = this.getCommonNumberCount(lottoNumber);
      const HAS_BONUS_NUMBER = this.checkBonusNumber(lottoNumber);
      this.updateWinningCount(COUNT, HAS_BONUS_NUMBER);
    });

    return this.winningCount;
  }

  calculateProfitRate() {
    const TOTAL_USER_PROFIT = this.winningCount.reduce(
      (acc, curr, index) => acc + curr * PRIZE_MONEY[index], 0
    );

    return ((TOTAL_USER_PROFIT / this.purchaseAmount) * 100).toFixed(1);
  }

  getCommonNumberCount(userLottoNumber) {
    return userLottoNumber.filter((number) => this.winningNumber.includes(number)).length;
  }

  checkBonusNumber(userLottoNumber) {
    return userLottoNumber.includes(this.bonusNumber);
  }

  updateWinningCount(count, hasBonusNumber) {
    switch (count) {
      case 3:
        this.winningCount[4] += 1;
        break;
      case 4:
        this.winningCount[3] += 1;
        break;
      case 5:
        if (hasBonusNumber) this.winningCount[1] += 1;
        else this.winningCount[2] += 1;
        break;
      case 6: 
        this.winningCount[0] += 1;
        break;
    }
  }
}

module.exports = CalculateLotto;
