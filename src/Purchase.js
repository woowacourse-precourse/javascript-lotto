const { ERROR_MESSAGES } = require("./constants");

class Purchase {
  constructor(cost) {
    this.purchaseLotto(cost);
  }
  purchaseLotto = (cost) => {
    this.isValidCost(cost);
    const amount = Number(cost) / 1000;

    return amount;
  };

  isValidCost = (cost) => {
    if (cost !== Math.floor(cost))
      throw new Error(ERROR_MESSAGES.INVALID_COST_UNIT);
    if (cost < 1000 || cost > 10000)
      throw new Error(ERROR_MESSAGES.INVALID_COST_RANGE);

    return true;
  };
}

module.exports = Purchase;
