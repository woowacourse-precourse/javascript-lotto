const { ERROR_MSG_MAIN_NUMS_COUNT } = require("./constants/error-message");

class Checker {
  validateMainNums(input) {
    const mainNumStrs = input.split(",");
    this.checkSix(mainNumStrs);
    this.checkAllIsNumber(mainNumStrs);
  }

  checkSix(mainNumStrs) {
    if (mainNumStrs.length === 6) return;
    throw new Error(ERROR_MSG_MAIN_NUMS_COUNT);
  }

  checkAllIsNumber(mainNumStrs) {
    mainNumStrs.forEach((str) => this.checkIsNumber(str));
  }

  checkIsNumber(str) {
    if (!isNaN(str)) return;
    throw new Error(ERROR_MSG_MAIN_NUMS_COUNT);
  }
}

module.exports = Checker;
