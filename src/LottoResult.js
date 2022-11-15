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

    this.printResult(countNormalWinner, countBonusWinner,result)
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

  printResult(countNormalWinner, countBonusWinner,result){
    Console.print( `
    당첨 통계
    ---
    3개 일치 (5,000원) - ${countNormalWinner[0]}개
    4개 일치 (50,000원) - ${countNormalWinner[1]}개
    5개 일치 (1,500,000원) - ${countNormalWinner[2]}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${countBonusWinner[0]}개
    6개 일치 (2,000,000,000원) - ${countNormalWinner[3]}개
    총 수익률은 ${result}%입니다.
    `)
  }
}

module.exports = LottoResult