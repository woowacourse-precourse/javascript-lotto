const MissionUtils = require("@woowacourse/mission-utils");
const ExceptionCheck = require("./ExceptionCheck");
const ErrorMessage = require("./utils/const/error");
const printMessage = require("./utils/const/print");
const key = require("./utils/key");
class Print {
  static it(printTarget) {
    const { print: printKey } = key;
    const printType = this.prototype.printTypeCheck(printTarget);
    if (new PrintExceptionCheck().check(printKey[printType], printTarget))
      this.prototype[`${printType}Print`](printTarget);
  }

  printTypeCheck(printTarget) {
    if (typeof printTarget !== "object") return false;
    if (Object(printTarget).hasOwnProperty("purchaseMoney")) {
      return "profitRate";
    }
    if (Array.isArray(printTarget)) {
      if (Object(printTarget[0]).hasOwnProperty("correct"))
        return "winningResult";
      else return "lotteryNumberList";
    }
    return false;
  }

  lotteryNumberListPrint(printTarget) {
    printTarget.forEach((lottery) => {
      MissionUtils.Console.print(`[${lottery.join(", ")}]`);
    });
  }
  winningResultPrint(printTarget) {
    const winningResult = Array.from({ length: 8 }).fill(0);
    printTarget.forEach((winningObj) => {
      if (winningObj["isBonusCorrect"] && winningObj["correct"] == 5)
        winningResult[8] += 1;
      winningResult[winningObj["correct"]] += 1;
    });
    const sliceResult = winningResult.slice(3, 8);
    printMessage
      .winningResult(sliceResult)
      .forEach((message) => MissionUtils.Console.print(message));
  }
  profitRatePrint(printTarget) {
    const { purchaseMoney, profit } = printTarget;
    const profitRateNum =
      Math.round((Number(profit) / Number(purchaseMoney)) * 10000) / 100;
    MissionUtils.Console.print(printMessage.profitRate(profitRateNum));
  }
}

class PrintExceptionCheck extends ExceptionCheck {
  lotteryNumberList(printTarget) {
    super.isArray(printTarget);
    printTarget.forEach((lottery) => {
      super.isRightLength(lottery, 6);
      super.isOverLapArray(lottery);
      super.isSortedArray(lottery);
    });
    return true;
  }
  winningResult(printTarget) {
    const propertyList = ["correct", "isBonusCorrect"];
    super.isArray(printTarget);
    printTarget.forEach((winningObj) => {
      super.isHasProperties(winningObj, propertyList);
      super.isNumber(winningObj[propertyList[0]]);
      super.isError(
        !typeof winningObj["isBonusCorrect"] === "boolean",
        ErrorMessage.notBoolean
      );
    });
    return true;
  }
  profitRate(printTarget) {
    const propertyList = ["purchaseMoney", "profit"];
    super.isHasProperties(printTarget, propertyList);
    super.isNumber(printTarget[propertyList[0]]);
    super.isNumber(printTarget[propertyList[1]]);
    return true;
  }
}

module.exports = Print;
