const { VALIDATE_NUMBER, ERROR_MESSAGE } = require('./utils/Constants');

class PurchaseAmount {
  constructor(input) {
    this.validate(input);
  }
  
  validate(input) {
    this.isNumber(input);
    this.isDividedByTen(input);
    this.isEmpty(input);
  }

  isNumber(input) {
    if (isNaN(input) === true) {
      throw new Error(ERROR_MESSAGE.notMoney);
    }
  }

  isDividedByTen(input) {
    if (input % VALIDATE_NUMBER.moneyUnit !== 0) {
      throw new Error(ERROR_MESSAGE.moneyUnit);
    }
  }

  isEmpty(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGE.empty);
    }
  }
}

module.exports = PurchaseAmount;