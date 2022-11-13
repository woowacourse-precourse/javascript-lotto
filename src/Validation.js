const { REQUIREMENT, BONUSNUMERROR, PURCHASEAMOUNTERROR } = require('./constant/Constant');

function validatePurchaseAmount(input) {
  if (Number.isNaN(Number(input))) {
    throw new Error(PURCHASEAMOUNTERROR.NaN);
  }
  if (input % REQUIREMENT.LOTTOPRICE !== 0) {
    throw new Error(PURCHASEAMOUNTERROR.PRICE);
  }
  if (input <= 0) {
    throw new Error(PURCHASEAMOUNTERROR.RANGE);
  }
};

function validateBonusNumber(input, winningNumber) {
  if (Number.isNaN(Number(input))) {
    throw new Error(BONUSNUMERROR.NaN);
  }
  if (winningNumber.includes(Number(input))) {
    throw new Error(BONUSNUMERROR.DUPLICATE);
  }
  if (Number(input) < REQUIREMENT.MIN || Number(input) > REQUIREMENT.MAX) {
    throw new Error(BONUSNUMERROR.RANGE);
  }
};

module.exports = { validatePurchaseAmount, validateBonusNumber };
