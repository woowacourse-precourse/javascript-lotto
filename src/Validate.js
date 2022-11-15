const { PURCHASE_ERROR, BONUS_ERROR } = require("./constants/ErrorMessage");

function validatePurchase(input) {
  if (isNaN(input)) {
    throw new Error(PURCHASE_ERROR.notANumber);
  }
  input = Number(input);
  if (input % 1000 !== 0 || !Number.isInteger(input)) {
    throw new Error(PURCHASE_ERROR.notDividedExactly);
  }
  if (input <= 0) {
    throw new Error(PURCHASE_ERROR.isZeroOrLess);
  }
}
function validateBonusNumber(numbers, bonusNumber) {
  if (isNaN(bonusNumber)) {
    throw new Error(BONUS_ERROR.notANumber);
  }
  if (numbers.indexOf(bonusNumber) > 0) {
    throw new Error(BONUS_ERROR.duplicateWithWinning);
  }
  bonusNumber = Number(bonusNumber);
  if (bonusNumber > 45 || bonusNumber < 1) {
    throw new Error(BONUS_ERROR.outOfRange);
  }
}
module.exports = { validateBonusNumber, validatePurchase };
