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

    if (!Number(answer)) throw new CustomError(ErrorMessage.notNumber);
    if (answer < 0) throw new CustomError(ErrorMessage.notPositiveNumber);
    return true;
  }
  winningNumber(checkTarget) {
    const numOrCommaReg = /,|[0-9]/g;
    const lottoNumReg = /(^[1-9]$)|(^[1-3]{1}[0-9]{1}$)|(^4{1}[0-5]{1}$)/;
    const winningNumberArray = checkTarget.split(",");
    if (!numOrCommaReg.test(checkTarget))
      throw new CustomError(ErrorMessage.notWinningNumber);
    if (winningNumberArray.length != 6)
      throw new CustomError(ErrorMessage.notWinningNumber);
    winningNumberArray.forEach((num) => {
      if (!lottoNumReg.test(num))
        throw new CustomError(ErrorMessage.notWinningNumber);
    });
    return true;
  }

  bonusNumber(checkTarget, winningNumberArray) {
    const lottoNumReg = /(^[1-9]$)|(^[1-3]{1}[0-9]{1}$)|(^4{1}[0-5]{1}$)/;
    if (!lottoNumReg.test(checkTarget))
      throw new CustomError(ErrorMessage.notLottoNumer);
    if (!(typeof winningNumberArray === "object" && winningNumberArray.length))
      throw new CustomError(ErrorMessage.winningNumberArrayNotNumberArray);
    if (winningNumberArray.includes(Number(checkTarget)))
      throw new CustomError(ErrorMessage.notBonusNumber);
    return true;
  }
}

module.exports = Input;
