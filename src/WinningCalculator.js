class WinningCalculator {
  #getMatchNumber(playerNumbers, winningNumbers) {
    return playerNumbers.filter((number) => winningNumbers.includes(number));
  }

  #getRankIndex(playerNumbers, winningNumbers, bonusNumber) {
    const matchNumber = this.#getMatchNumber(playerNumbers, winningNumbers);

    if (matchNumber.length === 6) return 0;
    if (matchNumber.length === 5 && playerNumbers.includes(bonusNumber)) return 1;
    if (matchNumber.length === 5 && !playerNumbers.includes(bonusNumber)) return 2;
    if (matchNumber.length === 4) return 3;
    if (matchNumber.length === 3) return 4;
  }

  getRankCount(playerLottos, winningLotto) {
    const rankCount = Array(5).fill(0);

    playerLottos.forEach((lotto) => {
      const rankIndex = this.#getRankIndex(lotto.numbers, winningLotto.numbers, winningLotto.bonusNumber);
      rankCount[rankIndex]++;
    });

    return rankCount;
  }

  #getPurchaseAmount(lottos) {
    return lottos.length * 1000;
  }

  #getPrizeMoney(rank) {
    const prize = [2000000000, 30000000, 1500000, 50000, 5000];

    return rank.reduce((acc, currentRank, idx) => {
      return acc + currentRank * prize[idx];
    }, 0);
  }

  getRateOfReturn(lottos, rank) {
    const purchaseAmount = this.#getPurchaseAmount(lottos);
    const prizeMoney = this.#getPrizeMoney(rank);

    return Math.round((prizeMoney / purchaseAmount) * 1000) / 10;
  }
}

module.exports = WinningCalculator;
