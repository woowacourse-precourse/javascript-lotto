const {
  ERROR_MSG_MAIN_NUMS_COUNT,
  ERROR_MSG_NUMS_NAN,
  ERROR_MSG_NUMS_INTEGER,
  ERROR_MSG_NUM_RANGE,
  ERROR_MSG_NUMS_DUPLICATED,
  ERROR_MSG_BONUS_NUM_IN_MAIN_NUMS,
  ERROR_MSG_BUDGET_NAN,
  ERROR_MSG_BUDGET_NATURAL_NUM,
  ERROR_MSG_THOUSAND_UNIT,
} = require("./constants/error-message");

class Checker {
  validateBudget(input) {
    this.checkBudgetIsNumber(input);

    const budget = Number(input);
    this.checkBudgetIsNaturalNumber(budget);
  }

  checkBudgetIsNumber(input) {
    if (!isNaN(input)) return;
    throw new Error(ERROR_MSG_BUDGET_NAN);
  }

  checkBudgetIsNaturalNumber(budget) {
    if (0 <= budget) return;
    throw new Error(ERROR_MSG_BUDGET_NATURAL_NUM);
  }

  validateMainNums(input) {
    const mainNumStrs = input.split(",");
    this.checkSix(mainNumStrs);
    this.checkAllIsNumber(mainNumStrs);

    const mainNums = mainNumStrs.map(Number);
    this.checkAllIsInteger(mainNums);
    this.checkAllRange(mainNums);
    this.checkDuplicate(mainNums);
    return mainNums;
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

  checkDuplicate(mainNums) {
    const mainNumSet = new Set([...mainNums]);
    if (mainNumSet.size === 6) return;
    throw new Error(ERROR_MSG_NUMS_DUPLICATED);
  }

  validateBonusNum(input, mainNums) {
    this.checkIsNumber(input);

    const bonusNum = Number(input);
    this.checkIsInteger(bonusNum);
    this.checkRange(bonusNum);
    this.checkIsBonusNumInMainNums(bonusNum, mainNums);
    return bonusNum;
  }

  checkIsBonusNumInMainNums(bonusNum, mainNums) {
    if (!mainNums.includes(bonusNum)) return;
    throw new Error(ERROR_MSG_BONUS_NUM_IN_MAIN_NUMS);
  }
}

module.exports = Checker;
