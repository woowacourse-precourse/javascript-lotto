const { ERROR, RULE } = require("./constants.js");

function buyingAmountValidator(buyingAmount) {
  if (hasBlank(buyingAmount)) {
    throw new Error(ERROR.HAS_BLANK);
  }
  if (hasChar(buyingAmount)) {
    throw new Error(ERROR.NOT_NUMBER);
  }
  if (hasRemainder(buyingAmount)) {
    throw new Error(ERROR.NOT_DIVISIBLE);
  }
  if (isZeroWon(buyingAmount)) {
    throw new Error(ERROR.IS_ZERO_WON);
  }
  return buyingAmount / RULE.DIVISOR;
}

function hasBlank(buyingAmount) {
  return buyingAmount.includes(" ");
}

function hasChar(buyingAmount) {
  return isNaN(buyingAmount);
}
function hasRemainder(buyingAmount) {
  return buyingAmount % RULE.DIVISOR;
}

function isZeroWon(buyingAmount) {
  return buyingAmount === "0";
}

module.exports = buyingAmountValidator;
