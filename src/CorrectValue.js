class CorrectValue {
  constructor(userLottoNum, winningNum, lottoBonusNum) {
    this.userLottoNum = userLottoNum
    this.winningNum = winningNum
    this.lottoBonusNum = lottoBonusNum
  }

  
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

    return (this.findWinnersInfo(listOfLottoNumReuslt))
    
  }


  findWinnersInfo(correctValueList) {

    let countNormalWinner = new Array(4).fill(0)
    let countBonusWinner = [0]

    for (let i = 0; i < correctValueList.length; i++) {
      if (correctValueList[i][1]) {
        countBonusWinner[0] += 1
      }
      if (correctValueList[i][0] >= 3 && !correctValueList[i][1]) {
        countNormalWinner[correctValueList[i][0] - 3] += 1
      }
      //[3 4 5 6]
      // 0 1 2 3
    }
    
    return [countNormalWinner, countBonusWinner]
    //      [ 1, 0, 0, 0 ] [ 0 ]
  }








}

module.exports = CorrectValue
