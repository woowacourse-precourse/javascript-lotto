class LottoManager {
  lottosWinningBonus(lottos, winning, bonus) {
    let matchesAndHasBonus = [];

    lottos.forEach((lotto) => {
      let matches = lotto.countSameNumber(winning);
      let hasBonusNumber = lotto.hasNumber(bonus);

      matchesAndHasBonus.push({ matches, hasBonusNumber });
    });

    const winningArray = this.#countWinning(matchesAndHasBonus);
    const profit = this.#calculateProfit(winningArray);

    return { winningArray, profit };
  }

  #countWinning(matchesAndHasBonus) {
    let winningArray = [0, 0, 0, 0, 0];

    matchesAndHasBonus.forEach((result) => {
      const { matches, hasBonusNumber } = result;

      if (matches === 3) winningArray[0] += 1;
      else if (matches === 4) winningArray[1] += 1;
      else if (matches === 5 && hasBonusNumber) winningArray[3] += 1;
      else if (matches === 5) winningArray[2] += 1;
      else if (matches === 6) winningArray[4] += 1;
    });

    return winningArray;
  }

  #calculateProfit(winningArray) {
    return (
      winningArray[0] * 5_000 +
      winningArray[1] * 50_000 +
      winningArray[2] * 1_500_000 +
      winningArray[3] * 30_000_000 +
      winningArray[4] * 2_000_000_000
    );
  }
}

module.exports = LottoManager;
