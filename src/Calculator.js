class Calculator {
  static calcProfit(cost, income) {
    return +((income / cost) * 100).toFixed(1);
  }
  static calcQuotient() {}
}

module.exports = Calculator;
