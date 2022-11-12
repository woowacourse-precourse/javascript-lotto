class ExceptionHandler {
  budgetUnit(budget) {
    if (budget % 1000 !== 0) throw new Error("[ERROR] 단위를 정확히 입력해주세요.");
  }
}

exports.module = ExceptionHandler;
