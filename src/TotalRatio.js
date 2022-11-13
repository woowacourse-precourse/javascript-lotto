const MissionUtils = require("@woowacourse/mission-utils");

class TotalRatio {
  constructor() {
    // this.resultRatio(negativeTotalCalculate, positiveTotalCalculate);
  }
  roundDecimalPoint(positiveTotalCalculate, negativeTotalCalculate) {
    // return +(Math.round(positiveTotalCalculate + "e+1")  + "e-1")
    const roundedPositive = Math.round(positiveTotalCalculate * 10) / 10;
    const roundedNegative = Math.round(negativeTotalCalculate * 10) / 10;
    this.resultRatio(roundedPositive, roundedNegative);
  }
  resultRatio(roundedNegative, roundedPositive) {
    if (roundedPositive < 100) {
      return MissionUtils.Console.print(
        `총 수익률은 ${roundedNegative}%입니다.`
      );
    }
    if (roundedPositive > 100) {
      return MissionUtils.Console.print(
        `총 수익률은 ${roundedPositive}%입니다.`
      );
    }
    if (roundedPositive === 100 && roundedNegative !== 0) {
      return MissionUtils.Console.print(
        `총 수익률은 ${roundedPositive}%입니다.`
      );
    }
    if (roundedNegative === 0) {
      return MissionUtils.Console.print(
        `총 수익률은 ${roundedNegative}%입니다.`
      );
    }
  }
}

module.exports = TotalRatio;
