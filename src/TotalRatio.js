const MissionUtils = require("@woowacourse/mission-utils");

class TotalRatio {
  constructor() {
    // this.resultRatio(negativeTotalCalculate, positiveTotalCalculate);
  }
  roundDecimalPoint(positiveTotalCalculate, negativeTotalCalculate) {
    const roundedPositive = Math.round(positiveTotalCalculate * 10) / 10;
    const roundedNegative = Math.round(negativeTotalCalculate * 10) / 10;
    const fixPositiveDecimalPoint = roundedPositive.toFixed(1)
    const fixNegativeDecimalPoint = roundedNegative.toFixed(1)
    this.resultRatio(fixPositiveDecimalPoint, fixNegativeDecimalPoint);
  }
  resultRatio(fixNegativeDecimalPoint, fixPositiveDecimalPoint) {
    if (fixPositiveDecimalPoint < 100) {
      return MissionUtils.Console.print(
        `총 수익률은 ${fixNegativeDecimalPoint}%입니다.`
      );
    }
    if (fixPositiveDecimalPoint > 100) {
      return MissionUtils.Console.print(
        `총 수익률은 ${fixPositiveDecimalPoint}%입니다.`
      );
    }
    if (fixPositiveDecimalPoint === 100 && fixNegativeDecimalPoint !== 0) {
      return MissionUtils.Console.print(
        `총 수익률은 ${fixPositiveDecimalPoint}%입니다.`
      );
    }
    if (fixNegativeDecimalPoint === 0) {
      return MissionUtils.Console.print(
        `총 수익률은 ${fixNegativeDecimalPoint}%입니다.`
      );
    }
  }
}

module.exports = TotalRatio;
