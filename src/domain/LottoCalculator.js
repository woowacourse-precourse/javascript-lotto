const { WINNING_MONEY } = require('../constants/constants');

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
    const TOTAL_WINNING_MONEY =
      this.score['3'] * WINNING_MONEY.FIFTH_RANK +
      this.score['4'] * WINNING_MONEY.FOURTH_RANK +
      this.score['5'] * WINNING_MONEY.THIRD_RANK +
      this.score['bonus'] * WINNING_MONEY.SECOND_RANK +
      this.score['6'] * WINNING_MONEY.FIRST_RANK;
    return TOTAL_WINNING_MONEY;
  }

  isLottoIncludesBonusNum(lotto, bonusNum) {
    return lotto.includes(bonusNum);
  }

  countSameLottoNum(lotto, winningLotto) {
    const SAME_NUM = lotto.filter((num) => winningLotto.includes(num));
    return SAME_NUM.length;
  }

  calculateProfit() {
    return ((this.calculateWinningMoney() / this.paidMoney) * 100).toFixed(1);
  }
}

module.exports = LottoCalculator;
