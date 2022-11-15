const CorrectValue = require('./CorrectValue')
const Price = require('./Price')
const { Console } = require('@woowacourse/mission-utils')

class LottoResult {
  constructor(userLottoNum, winningNum, lottoBonusNum) {
    this.userLottoNum = userLottoNum
    this.winningNum = winningNum
    this.lottoBonusNum = lottoBonusNum
  }

  calcLottoResult() {
    let [countNormalWinner, countBonusWinner] = this.findCorrectValue(
      this.userLottoNum,
      this.winningNum,
      this.lottoBonusNum,
    )

    let revenue = this.getPrice(countNormalWinner, countBonusWinner)
    let result = this.getRate(revenue)
  }

  findCorrectValue(userLottoNum, winningNum, lottoBonusNum) {
    let result = new CorrectValue(
      userLottoNum,
      winningNum,
      lottoBonusNum,
    ).findSameValue()

    return result
  }

  getPrice(countNormalWinner, countBonusWinner) {
    return new Price(countNormalWinner, countBonusWinner).calcPrice()
  }
  getRate(revenue) {
    return ((revenue / 8000) * 100).toFixed(1)
  }

 
}

module.exports = LottoResult
