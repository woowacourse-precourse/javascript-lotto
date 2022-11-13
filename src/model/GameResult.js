class GameResult {
  constructor(userLottos, winningNumbers, bonusNumber) {
    this.userLottos = userLottos;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.ranks = [];

    this.createResult();
  }

  getRanks() {
    return this.userLottos.forEach((lotto) => {
      lotto.getRank(this.winningNumbers, this.bonusNumber);
    });
  }

  createResult() {
    this.ranks = this.getRanks();
  }
}

module.exports = GameResult;
