const MissionUtils = require("@woowacourse/mission-utils");

const NUMBER_OF_MATCHES = 3;

class ComparisonOfWinningNumbers {

  constructor(lottoNumber, winningNumber, bonusNumber, price) {
    this.lottoNumber = lottoNumber;
    this.winningNumber = winningNumber;
    this.bonusNumber = bonusNumber;
    this.price = price;
  }

  Comparison() {
    let numberComparison = this.lottoNumber.filter(number => this.winningNumber.includes(number));
    return numberComparison;
  }

  checkTheNumber(numberComparison) {
    return numberComparison.length;
  }

  countAndSave(numberComparison) {
    if (numberComparison >= NUMBER_OF_MATCHES) {
      if (numberComparison === 5 && this.winningNumber.includes(this.bonusNumber)) {
        return 1;
      }
      return numberComparison;
    }
    return 0;
  }

  checkTheRank(rank) {
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${rank.filter(element => 3 === element).length}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${rank.filter(element => 4 === element).length}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${rank.filter(element => 5 === element).length}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank.filter(element => 1 === element).length}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${rank.filter(element => 6 === element).length}개`);
  }

  RateOfReturn(price, rank) {
    let totalMoney = rank.filter(element => 3 === element).length * 5000 +
                            rank.filter(element => 4 === element).length * 50000 + 
                            rank.filter(element => 5 === element).length * 1500000 + 
                            rank.filter(element => 1 === element).length * 30000000 + 
                            rank.filter(element => 6 === element).length * 2000000000;
    let lottoRateOfReturn = totalMoney / price * 100;
    return lottoRateOfReturn;
  }

}

module.exports = ComparisonOfWinningNumbers;