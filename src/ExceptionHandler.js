class ExceptionHandler {
  budgetUnit(budget) {
    if (budget % 1000 !== 0) throw new Error("[ERROR] 단위를 정확히 입력해주세요.");
  }
  winningNumberRedundancy(winningNumber) {
    const checkSet = new Set(winningNumber.split(","));
    if ([...checkSet].length < 6) throw new Error("[ERROR] 당첨 번호를 중복없이 입력해주세요.");
  }
}

exports.module = ExceptionHandler;
