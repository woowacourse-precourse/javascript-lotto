const { NAN_ERROR, REMAINDER_ERROR } = require("./Constants");

const checkNaN = (amount) => {
  if (isNaN(Number(amount))) return true;
};

const checkRemainder = (amount) => {
  if (parseInt(amount) % 1000 !== 0) return true;
};

const checkPurchaseAmount = (amount) => {
  if (checkNaN(amount)) throw NAN_ERROR;
  if (checkRemainder(amount)) throw REMAINDER_ERROR;
};

module.exports = {
  checkPurchaseAmount: checkPurchaseAmount,
};
