const ErrorMsg = require("../message/Error");

class ValidCheckUtils {
  constructor() {}

  static checkPay(pay) {
    if (pay.length === 0) throw new Error(ErrorMsg.INVALID_PAY_EMPTY_STRING);
    if (pay.replace(/[0-9]/g, "").length > 0)
      throw new Error(ErrorMsg.INVALID_PAY_NOT_NUM);
    if (Number(pay) % 1000 > 0) throw new Error(ErrorMsg.INVALID_PAY_UNIT);
  }

  static checkWinningNumber(winningNum) {
    const winningNumberArray = String(winningNum).split(",");

    if (winningNum.length === 0)
      throw new Error(ErrorMsg.INVALID_WINNING_EMPTY_STRING);
    if (new Set(winningNumberArray).size !== winningNumberArray.length)
      throw new Error(ErrorMsg.INVALID_WINNING_DUPLICATE);
    if (
      winningNumberArray.filter((num) => Number(num) < 1 || Number(num) > 45)
        .length > 0
    )
      throw new Error(ErrorMsg.INVALID_WINNING_RANGE);
    if (winningNumberArray.length !== 6)
      throw new Error(ErrorMsg.INVALID_WINNING_COUNT);
    if (winningNum.replace(/[0-9]|\,/g, "").length > 0)
      throw new Error(ErrorMsg.INVALID_WINNING_NOT_NUM);
  }

  static checkBonusNumber(bonusNum, winningNumberArray) {
    if (bonusNum.length === 0)
      throw new Error(ErrorMsg.INVALID_BONUS_EMPTY_STRING);
    if (winningNumberArray.includes(bonusNum))
      throw new Error(ErrorMsg.INVALID_BONUS_DUPLICATE);
    if (Number(bonusNum) < 1 || Number(bonusNum) > 45)
      throw new Error(ErrorMsg.INVALID_BONUS_RANGE);
    if (String(bonusNum).replace(/[0-9]/g, "").length > 0 || bonusNum === "")
      throw new Error(ErrorMsg.INVALID_BONUS_NOT_NUM);
  }
}

module.exports = ValidCheckUtils;
