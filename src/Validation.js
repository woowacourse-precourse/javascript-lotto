const { REQUIREMENT, PURCHASEAMOUNTERROR } = require('./constant/Constant');

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


module.exports = { validatePurchaseAmount };
