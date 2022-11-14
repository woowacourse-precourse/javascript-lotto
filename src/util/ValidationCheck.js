const { RULES, ERROR } = require("../constants");

class ValidationCheck {
  purchaseMoney(input) {
    if (input === "") {
      throw new Error(ERROR.INPUT_NOVALUE_CHECK);
    }

    if (input.includes(" ")) {
      throw new Error(ERROR.INPUT_BLANK_CHECK);
    }

    if (isNaN(input)) {
      throw new Error(ERROR.INPUT_NUMBER_CHECK);
    }

    if (Number(input) % RULES.PURCHASE_UNIT !== 0 || Number(input) === 0) {
      throw new Error(ERROR.INPUT_UNIT_CHECK);
    }
  }
}

const validationCheck = new ValidationCheck();
module.exports = validationCheck;
