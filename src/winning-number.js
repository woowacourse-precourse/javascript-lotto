class WinningNumber {
  setWinningNumber(numbers) {
    this.winningNumber = numbers;
  }

  setBonusNumber(number) {
    this.bonusNumber = number;
  }

  getWinningNumber() {
    return this.winningNumber;
  }

  getBonusNumber() {
    return this.bonusNumber;
  }
}

module.exports = WinningNumber;
