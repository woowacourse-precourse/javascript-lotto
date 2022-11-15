const { WINNING_AMOUNT_UNITS, LOTTO_NUMBER_RANGE } = require('./Constant');

class Calculator {
  static calWinningCount(userLottoArrays, winningArray, bonusNumber) {
    let winningCount = 0;
    winningArray.forEach((number) => {
      if (userLottoArrays.includes(number)) winningCount += 1;
    });
    if (winningCount === 6) return 1;
    if (winningCount === 5 && winningArray.includes(bonusNumber)) return 2;
    if (winningCount === 5) return 3;
    if (winningCount === 4) return 4;
    if (winningCount === 3) return 5;
    if (winningCount < 3) return 0;
    return 0;
  }

  static totalWinningAmount(winningArray) {
    let totalAmount = 0;
    winningArray.forEach((winning) => {
      if (winning === 1) totalAmount += WINNING_AMOUNT_UNITS.FIRST_PLACE;
      if (winning === 2) totalAmount += WINNING_AMOUNT_UNITS.SECOND_PLACEs;
      if (winning === 3) totalAmount += WINNING_AMOUNT_UNITS.THIRD_PLACE;
      if (winning === 4) totalAmount += WINNING_AMOUNT_UNITS.FOURTH_PLACE;
      if (winning === 5) totalAmount += WINNING_AMOUNT_UNITS.FIFTH_PLACE;
    });
    return totalAmount;
  }

  static divideUnit(number) {
    return number / LOTTO_NUMBER_RANGE.UNIT;
  }

  static getstatistics(totalWinning, purchaseAmount) {
    return Calculator.toFixedNumber((totalWinning / purchaseAmount) * 0.1);
  }

  static toFixedNumber(number) {
    return +number.toFixed(1);
  }
}

module.exports = Calculator;
