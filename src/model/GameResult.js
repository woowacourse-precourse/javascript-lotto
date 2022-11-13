class GameResult {
  constructor(userLottos, winningNumbers, bonusNumber) {
    this.userLottos = userLottos;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.ranks = [];

    this.createResult();
  }

  createRanks() {
    this.userLottos.forEach((lotto) => {
      this.ranks.push(lotto.getRank(this.winningNumbers, this.bonusNumber));
    });
  }
}

module.exports = GameResult;
