class Calculator {
  static calcProfit(cost, income) {
    return +((income / cost) * 100).toFixed(1);
  }

  static calcQuotient(numerator, denominator = 1000) {
    return Math.floor(numerator / denominator);
  }
}

module.exports = Calculator;
