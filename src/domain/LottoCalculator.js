class LottoCalculator {
  constructor(lottos, winningLotto, bonusNum) {
    this.paidMoney = lottos.length * 1000;
    this.score = this.calculateLotto(lottos, winningLotto, bonusNum);
  }
  calculateLotto(lottos, winningLotto, bonusNum) {
    let score = { 3: 0, 4: 0, 5: 0, bonus: 0, 6: 0 };
    for (let i = 0; i < lottos.length; i += 1) {
      const SAME_NUM = this.countSameLottoNum(lottos[i], winningLotto);
      if (SAME_NUM === 5 && this.isLottoIncludesBonusNum(lottos[i], bonusNum)) {
        score['bonus'] += 1;
      }
      if (SAME_NUM >= 3) score[SAME_NUM] += 1;
    }
    score['5'] -= score['bonus'];
    return score;
  }

  calculateWinningMoney() {
    const WINNING_MONEY =
      this.score['3'] * 5000 +
      this.score['4'] * 50000 +
      this.score['5'] * 1500000 +
      this.score['bonus'] * 30000000 +
      this.score['6'] * 2000000000;
    return WINNING_MONEY;
  }

  isLottoIncludesBonusNum(lotto, bonusNum) {
    return lotto.includes(bonusNum);
  }

  countSameLottoNum(lotto, winningLotto) {
    const SAME_NUM = lotto.filter((num) => winningLotto.includes(num));
    return SAME_NUM.length;
  }

  calculateYield() {
    return ((this.calculateWinningMoney() / this.paidMoney) * 100).toFixed(1);
  }
}

module.exports = LottoCalculator;
