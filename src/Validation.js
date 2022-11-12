const { NAN_ERROR } = require("./Constants");

const checkNaN = (amount) => {
  if (isNaN(Number(amount))) return true;
};

const checkPurchaseAmount = (amount) => {
  if (checkNaN(amount)) throw NAN_ERROR;
};

module.exports = {
  checkPurchaseAmount: checkPurchaseAmount,
};
