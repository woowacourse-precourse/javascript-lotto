const CorrectValue = require('./CorrectValue')
const Price = require('./Price')

class LottoResult {


    constructor(userLottoNum,winningNum,lottoBonusNum){
        this.userLottoNum=userLottoNum
        this.winningNum=winningNum
        this.lottoBonusNum=lottoBonusNum
    }


  calcLottoResult() {
    let [countNormalWinner, countBonusWinner] = this.findCorrectValue(
      this.userLottoNum,
      this.winningNum,
      this.lottoBonusNum,
    )

    console.log(countNormalWinner, countBonusWinner)
    let revenue = this.getPrice(countNormalWinner, countBonusWinner)
    console.log(revenue)
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
  getRate(revenue) {}
}

module.exports = LottoResult
