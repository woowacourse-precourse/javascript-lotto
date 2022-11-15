const MissionUtils = require("@woowacourse/mission-utils");

class TotalRatio {
  roundDecimalPoint(positiveTotalCalculate, negativeTotalCalculate) {
    const roundedPositive = Math.round(negativeTotalCalculate * 10) / 10;
    const roundedNegative = Math.round(positiveTotalCalculate * 10) / 10;
    const fixPositiveDecimalPoint = roundedPositive.toFixed(1);
    const fixNegativeDecimalPoint = roundedNegative.toFixed(1);
    this.resultRatio(positiveTotalCalculate, negativeTotalCalculate, fixPositiveDecimalPoint, fixNegativeDecimalPoint);
  }
  resultRatio(positiveTotalCalculate, negativeTotalCalculate, fixNegativeDecimalPoint, fixPositiveDecimalPoint) {
    if (positiveTotalCalculate < 100) {
      return MissionUtils.Console.print(
        `총 수익률은 ${fixNegativeDecimalPoint}%입니다.`
      );
    }
    if (positiveTotalCalculate > 100) {
      return MissionUtils.Console.print(
        `총 수익률은 ${fixPositiveDecimalPoint}%입니다.`
      );
    }
    if (positiveTotalCalculate === 100 && negativeTotalCalculate !== 0) {
      return MissionUtils.Console.print(
        `총 수익률은 ${fixPositiveDecimalPoint}%입니다.`
      );
    }
    if (negativeTotalCalculate === 0) {
      return MissionUtils.Console.print(
        `총 수익률은 ${fixNegativeDecimalPoint}%입니다.`
      );
    }
  }
}

module.exports = TotalRatio;
