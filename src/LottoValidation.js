const {
  LOTTOREQUIREMENT,
  BONUSCONDITION,
  PURCHASEUNIT,
} = require("./constant/Constant");

const validateLotto = (input) => {
  if (Number.isNaN(Number(input))) {
    throw new Error(PURCHASEUNIT.NaN);
  }
  if (input % LOTTOREQUIREMENT.LOTTOPRICE !== 0) {
    throw new Error(PURCHASEUNIT.PRICE);
  }
  if (input <= 0) {
    throw new Error(PURCHASEUNIT.RANGE);
  }
};

const validateBonus = (input, winningNumber) => {
  if (Number.isNaN(Number(input))) {
    throw new Error(BONUSCONDITION.NaN);
  }
  if (winningNumber.includes(Number(input))) {
    throw new Error(BONUSCONDITION.DUPLICATE);
  }
  if (Number(input) < LOTTOREQUIREMENT.MIN || Number(input) > LOTTOREQUIREMENT.MAX) {
    throw new Error(BONUSCONDITION.RANGE);
  }
};

module.exports = { validateLotto, validateBonus };
