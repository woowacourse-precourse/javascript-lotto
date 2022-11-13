class LottoManager {
  lottosWinningBonus(lottos, winning, bonus) {
    let countResult = [];

    lottos.forEach((lotto) => {
      let matches = lotto.countSameNumber(winning);
      let hasBonusNumber = lotto.hasNumber(bonus);

      countResult.push({ matches, hasBonusNumber });
    });

    const winningArray = this.#countWinning(countResult);
    const profit = this.#calculateProfit(winningArray);

    return { winningArray, profit };
  }

  #countWinning(countResult) {
    let winningArray = [0, 0, 0, 0, 0];

    countResult.forEach((result) => {
      const { matches, hasBonusNumber } = result;

      if (matches === 3) winningArray[0] += 1;
      else if (matches === 4) winningArray[1] += 1;
      else if (matches === 5) winningArray[2] += 1;
      else if (matches === 5 && hasBonusNumber) winningArray[3] += 1;
      else if (matches === 6) winningArray[4] += 1;
    });

    return winningArray;
  }

  #calculateProfit(winningArray) {
    return (
      winningArray[0] * 5000 +
      winningArray[1] * 50000 +
      winningArray[2] * 1500000 +
      winningArray[3] * 30000000 +
      winningArray[4] * 2000000000
    );
  }
}

module.exports = LottoManager;
