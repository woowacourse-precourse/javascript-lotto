const { ERROR } = require("../constants/constants");

const validate = {
  moneyInput: (input) => {
    if (input % 1000 !== 0) throw new Error(ERROR.INVALID_MONEY_INPUT);
  },
};

module.exports = validate;
