const { ERROR_MSG_MAIN_NUMS_COUNT } = require("./constants/error-message");

class Checker {
  validateMainNums(input) {
    const mainNumStrs = input.split(",");
    checkSix(mainNumStrs);
  }

  checkSix(mainNumStrs) {
    if (mainNumStrs.length !== 6) {
      throw new Error(ERROR_MSG_MAIN_NUMS_COUNT);
    }
  }
}

module.exports = Checker;
