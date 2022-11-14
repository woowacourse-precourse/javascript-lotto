const {
  ERROR_MSG_MAIN_NUMS_COUNT,
  ERROR_MSG_NUMS_NAN,
  ERROR_MSG_NUMS_INTEGER,
} = require("./constants/error-message");

class Checker {
  validateMainNums(input) {
    const mainNumStrs = input.split(",");
    this.checkSix(mainNumStrs);
    this.checkAllIsNumber(mainNumStrs);

    const mainNums = mainNumStrs.map(Number);
    this.checkAllIsInteger(mainNums);
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
    throw new Error(ERROR_MSG_NUMS_NAN);
  }

  checkAllIsInteger(mainNums) {
    mainNums.forEach((num) => this.checkAllIsInteger(num));
  }

  checkIsInteger(num) {
    if (Number.isInteger(num)) return;
    throw new Error(ERROR_MSG_NUMS_INTEGER);
  }
}

module.exports = Checker;
