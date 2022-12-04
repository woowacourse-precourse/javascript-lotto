const { SEPARATOR } = require('./settings');

class Draw {
  static changeWinningNumbersType(input) {
    return input.split(SEPARATOR).map((winningNumber) => Number(winningNumber));
  }
}

module.exports = Draw;
