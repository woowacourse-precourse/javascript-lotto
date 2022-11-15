const { LOTTO_INFO, ERROR } = require("./Constants");

const getPurchaseAmount = (amount) => {
  const validate = (amount) => {
    if (amount % LOTTO_INFO.price) {
      throw new Error(ERROR.incorrect_purchase_amount);
    }
  };

  validate(amount);
  return amount / 1000;
};

module.exports = { getPurchaseAmount };
