const { PARAMETERS } = require('./utils/constants');

class CalculateLotto {
  constructor(winningNumber, bonusNumber, userLottoNumbers, purchaseCount) {
    this.winningCount = new Array(5).fill(0);
    this.winningNumber = winningNumber;
    this.bonusNumber = bonusNumber;
    this.userLottoNumbers = userLottoNumbers;
    this.purchaseAmount = purchaseCount * PARAMETERS.purchaseAmountUnit;
  }

  getCommonNumberCount(userLottoNumber) {
    return userLottoNumber.filter((number) => this.winningNumber.includes(number)).length;
  }

  checkBonusNumber(userLottoNumber) {
    return userLottoNumber.includes(this.bonusNumber);
  }
}

module.exports = CalculateLotto;
