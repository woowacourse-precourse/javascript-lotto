const { ERROR, RULE } = require("./constants.js");

function bonusValidate(winningNumberList, bonusNumber) {
  if (hasCharacter(bonusNumber)) {
    throw new Error(ERROR.HAS_CHARACTER);
  }
  if (isOverMaxNumber(bonusNumber)) {
    throw new Error(ERROR.OVER_NUMBER_IN_RANGE);
  }
  if (isUnderMinNumber(bonusNumber)) {
    throw new Error(ERROR.UNDER_NUMBER_IN_RANGE);
  }
  if (containsWinningNumber(winningNumberList, bonusNumber)) {
    throw new Error(ERROR.CONTAINS_WINNING_NUMBER);
  }
  if (containsBlanks(bonusNumber)) {
    throw new Error(ERROR.CONTAINS_BLANKS);
  }
}

function hasCharacter(bonusNumber) {
  return isNaN(bonusNumber);
}

function isOverMaxNumber(bonusNumber) {
  return bonusNumber > RULE.MAX_NUMBER;
}

function isUnderMinNumber(bonusNumber) {
  return bonusNumber < RULE.MIN_NUMBER;
}

function containsWinningNumber(winningNumberList, bonusNumber) {
  return winningNumberList.includes(bonusNumber);
}

function containsBlanks(bonusNumber) {
  return bonusNumber.includes(" ");
}

module.exports = bonusValidate;
