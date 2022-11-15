const MissionUtils = require("@woowacourse/mission-utils");
const question = require("./utils/const/question");
const CustomError = require("./CustomError");
const ErrorMessage = require("./utils/const/error");
const ExceptionCheck = require("./ExceptionCheck");

class Input {
  static getValueWithType(type, callback, errorCheckparam) {
    MissionUtils.Console.readLine(`${question[type]}\n`, (string) => {
      const trimmedString = string.trim();
      if (!trimmedString)
        throw new CustomError("[ERROR] : 값이 입력되지 않았습니다.");

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
      super.isNumberInRange(num);
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
