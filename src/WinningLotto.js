const Validation = require("./Validation.js");

class WinningLotto {
  winningNumbers;
  bonusNumber;

  setWinningNumbers(winningNumbers) {
    const winningNumbersArr = winningNumbers.split(",");

    Validation.validateLottoNumber(winningNumbersArr);
    this.winningNumbers = winningNumbersArr.map(Number);
  }

  setBonusNumber(bonusNumber) {
    Validation.validateBonusNumber(bonusNumber, this.winningNumbers);
    this.bonusNumber = Number(bonusNumber);
  }

  getWinningNumbers() {
    return this.winningNumbers;
  }

  getBonusNumber() {
    return this.bonusNumber;
  }
}

module.exports = WinningLotto;
