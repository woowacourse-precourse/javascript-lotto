const { SEPARATOR } = require('./settings');

class Draw {
  #winningNumbers = [];

  #bonusNumber;

  static changeWinningNumbersType(input) {
    return input.split(SEPARATOR).map((winningNumber) => Number(winningNumber));
  }

  setWinningNumbers(input) {
    this.#winningNumbers = Draw.changeWinningNumbersType(input);
  }

  static changeBonusNumberType(input) {
    return Number(input);
  }

  setBonusNumber(input) {
    this.#bonusNumber = Draw.changeBonusNumberType(input);
  }

  getWinningAndBonus() {
    return { winningNumbers: this.#winningNumbers, bonusNumber: this.#bonusNumber };
  }
}

module.exports = Draw;
