class RankCalculator {
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
}

module.exports = RankCalculator;
