const Ranking = require('./Ranking');

class Prize {
  #ranks = [
    [6, 2_000_000_000],
    [5, 30_000_000, true],
    [5, 1_500_000, false],
    [4, 50_000],
    [3, 5_000],
  ].map((rank, index) => {
    const ranking = new Ranking(...rank);
    ranking.place = index + 1;
    return ranking;
  });

  getResult(issuedLottos, winningNumbers, bonusNumber) {
    this.compareAllLottos(issuedLottos, winningNumbers, bonusNumber);

    return this.#ranks;
  }

  getProfitRate(expense) {
    const profit = this.#ranks
      .map((rank) => rank.money * rank.count)
      .reduce((prev, curr) => prev + curr);

    return ((profit / expense) * 100).toFixed(1);
  }

  compareAllLottos(issuedLottos, winningNumbers, bonusNumber) {
    issuedLottos.forEach((issuedLotto) => {
      const { isWon, matchingCount, hasBonus } = this.compareSingleLotto(
        issuedLotto,
        winningNumbers,
        bonusNumber,
      );
      if (isWon) this.countRank(matchingCount, hasBonus);
    });
  }

  compareSingleLotto(issuedLotto, winningNumbers, bonusNumber) {
    const matchingCount = Prize.getMatchingCount(issuedLotto, winningNumbers);
    const isWon = matchingCount >= this.#ranks.find((rank) => rank.place === 5).criteria;
    const hasBonus = issuedLotto.includes(bonusNumber);

    return { isWon, matchingCount, hasBonus };
  }

  static getMatchingCount(issuedLotto, winningNumbers) {
    let matchingCount = 0;

    issuedLotto.forEach((issuedNumber) => {
      if (winningNumbers.includes(issuedNumber)) matchingCount += 1;
    });

    return matchingCount;
  }

  judgeIsSecondOrThirdPlace(matchingCount) {
    const secondPlaceCriteria = this.#ranks.find((rank) => rank.place === 2).criteria;
    const thirdPlaceCriteria = this.#ranks.find((rank) => rank.place === 3).criteria;

    return matchingCount === secondPlaceCriteria || matchingCount === thirdPlaceCriteria;
  }

  countRank(matchingCount, hasBonus) {
    if (this.judgeIsSecondOrThirdPlace(matchingCount)) {
      this.#ranks.find(
        (rank) => rank.criteria === matchingCount && rank.hasBonus === hasBonus,
      ).count += 1;
      return;
    }

    this.#ranks.find((rank) => rank.criteria === matchingCount).count += 1;
  }
}

module.exports = Prize;
