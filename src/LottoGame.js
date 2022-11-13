class LottoGame {
  user;
  winningNumbers;
  bonusNumber;

  constructor(user, winningNumbers, bonusNumber) {
    this.user = user;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }
}

module.exports = LottoGame;
