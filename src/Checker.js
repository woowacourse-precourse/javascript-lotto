const {
  ERROR_MSG_MAIN_NUMS_COUNT,
  ERROR_MSG_NUMS_NAN,
  ERROR_MSG_NUMS_INTEGER,
  ERROR_MSG_NUM_RANGE,
} = require("./constants/error-message");

class Checker {
  validateMainNums(input) {
    const mainNumStrs = input.split(",");
    this.checkSix(mainNumStrs);
    this.checkAllIsNumber(mainNumStrs);

    const mainNums = mainNumStrs.map(Number);
    this.checkAllIsInteger(mainNums);
    this.checkAllRange(mainNums);
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
    mainNums.forEach((num) => this.checkIsInteger(num));
  }

  checkIsInteger(num) {
    if (Number.isInteger(num)) return;
    throw new Error(ERROR_MSG_NUMS_INTEGER);
  }

  checkAllRange(mainNums) {
    mainNums.forEach((num) => this.checkRange(num));
  }

  checkRange(num) {
    if (1 <= num && num <= 45) return;
    throw new Error(ERROR_MSG_NUM_RANGE);
  }
}

module.exports = Checker;
