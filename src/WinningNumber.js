class WinningNumber {
  setWinningNumber(winningNumber) {
    return (this.winningNumber = winningNumber
      .split(',')
      .map((split) => Number(split)));
  }

  setBonusNumber(bonusNumber) {
    return (this.bonusNumber = Number(bonusNumber));
  }
}

module.exports = WinningNumber;
