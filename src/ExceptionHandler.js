const Constant = require("../src/constant/Constant");

class ExceptionHandler {
  static budgetUnit(budget) {
    if (budget % 1000 !== 0) throw new Error("[ERROR] 단위를 정확히 입력해주세요.");
  }

  static winningNumberLength(winningNumber) {
    if (winningNumber.split(Constant.COMMA).length > 6) throw new Error("[ERROR] 숫자를 6개 입력해주세요.");
  }

  static winningNumberRedundancy(winningNumber) {
    const checkSet = new Set(winningNumber.split(Constant.COMMA));
    if ([...checkSet].length < 6) throw new Error("[ERROR] 당첨 번호를 중복없이 입력해주세요.");
  }
}

module.exports = ExceptionHandler;
