class LottoChecker {
  compareLotto(totalLotto, winningLotto, bonus) {
    let correctLottoPlus = [];

    totalLotto.forEach((lotto) => {
      const correctLotto = lotto.filter((number) =>
        winningLotto.includes(number)
      );
      const correctBonus = lotto.includes(bonus);
      correctLottoPlus.push({
        correctLotto,
        correctBonus,
      });
    });

    return this.countWinningLotto(correctLottoPlus);
  }

  countWinningLotto(correctLottoPlus) {
    let countLottoReward = [0, 0, 0, 0, 0];

    for (let i = 0; i < correctLottoPlus.length; i++) {
      const { correctLotto, correctBonus } = correctLottoPlus[i];

      if (correctLotto.length === 3) countLottoReward[0] += 1;
      else if (correctLotto.length === 4) countLottoReward[1] += 1;
      else if (correctLotto.length === 5 && correctBonus === true)
        countLottoReward[2] += 1;
      else if (correctLotto.length === 5) countLottoReward[3] += 1;
      else if (correctLotto.length === 6) countLottoReward[4] += 1;
    }

    return countLottoReward;
  }

  CalculateProfit(lottoResult, money) {
    const totalPrice =
      lottoResult[0] * 5000 +
      lottoResult[1] * 50000 +
      lottoResult[3] * 1500000 +
      lottoResult[2] * 30000000 +
      lottoResult[4] * 2000000000;
    const profitRate = ((totalPrice / money) * 100).toFixed(1);

    return profitRate;
  }
}

module.exports = LottoChecker;
