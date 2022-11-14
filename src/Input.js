const { Console } = require("@woowacourse/mission-utils");
const question = require("./utils/const/question");
const CustomError = require("./CustomError");
const ErrorMessage = require("./utils/const/error");
const ExceptionCheck = require("./ExceptionCheck");

class Input extends Console {
  constructor() {
    super();
  }

  static getValueWithType(type, callback, errorCheckparam) {
    this.readLine(question[type], (string) => {
      const trimmedString = string.trim();
      new InputExceptionCheck().check(type, trimmedString, errorCheckparam);
      callback(trimmedString);
    });
  }
}

class InputExceptionCheck extends ExceptionCheck {
  constructor() {
    super();
  }
  purchaseMoney(checkTarget) {
    const answer = Number(checkTarget);
    super.isNumber(answer);
    super.isPositiveNumber(answer);
    return true;
  }
  lotteryNumber(checkTarget) {
    const numOrCommaReg = /,|[0-9]/g;
    const lotteryNumberArray = checkTarget.split(",");
    lotteryNumberArray.forEach((num) => {
      super.isLotteryNumberAtom(num);
    });
    super.isError(
      !numOrCommaReg.test(checkTarget),
      ErrorMessage.notLotteryNumber
    );
    super.isRightLength(lotteryNumberArray, 6);
    super.isOverLapArray(lotteryNumberArray);

    return true;
  }

  bonusNumber(checkTarget, lotteryNumberArray) {
    super.isBonusNumber(lotteryNumberArray, checkTarget);
  }
}

module.exports = Input;
