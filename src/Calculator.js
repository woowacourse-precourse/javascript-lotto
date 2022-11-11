const { WINNING_AMOUNT_UNITS } = require('./Constant');

class Calculator {
  static totalWinningAmount(winningArray) {
    let totalAmount = 0;
    winningArray.forEach((winning) => {
      if (winning === 1) totalAmount += WINNING_AMOUNT_UNITS.FIFTH_PLACE;
      if (winning === 2) totalAmount += WINNING_AMOUNT_UNITS.SECOND_PLACEs;
      if (winning === 3) totalAmount += WINNING_AMOUNT_UNITS.THIRD_PLACE;
      if (winning === 4) totalAmount += WINNING_AMOUNT_UNITS.FOURTH_PLACE;
      if (winning === 5) totalAmount += WINNING_AMOUNT_UNITS.FIFTH_PLACE;
    });
    return totalAmount;
  }

  static statistics(totalWinning, purchageAmount) {
    return (totalWinning / purchageAmount) * 100;
  }

  static toFixedNumber(number) {
    return number.toFixed(1);
  }
}

module.exports = Calculator;

console.log(Calculator.totalWinningAmoun([5, 5, 5, 5, 5]));
t;
