class CorrectValue {
  constructor(userLottoNum, winningNum, lottoBonusNum) {
    this.userLottoNum = userLottoNum
    this.winningNum = winningNum
    this.lottoBonusNum = lottoBonusNum
  }

  //같은 값 찾기
  calc(eachUserLottoNum) {
    let count = 0
    let bonusFlag = false
    for (let i = 0; i < this.winningNum.length; i++) {
      if (eachUserLottoNum.indexOf(this.winningNum[i]) !== -1) {
        count++
      }
    }

    if (count === 5 && eachUserLottoNum.indexOf(this.lottoBonusNum)) {
      bonusFlag = true
    }

    return [count, bonusFlag]
  }

  findSameValue() {
    let listOfLottoNumReuslt = []
    for (let i = 0; i < this.userLottoNum.length; i++) {
      listOfLottoNumReuslt.push(this.calc(this.userLottoNum[i]))
    }

    return listOfLottoNumReuslt
  }
}

module.exports = CorrectValue
