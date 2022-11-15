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

    return;
  }
}

module.exports = LottoChecker;
