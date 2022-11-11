class Calculator {
  static statistics(totalWinning, purchageAmount) {
    return (totalWinning / purchageAmount) * 100;
  }

  static toFixedNumber(number) {
    return number.toFixed(2);
  }
}

module.exports = Calculator;

console.log(Calculator.statistics(5000, 8000));
