class LottoCalculator {
  constructor(lottos, winningLotto, bonusNum) {
    this.score = this.calculateLotto(lottos, winningLotto, bonusNum);
    this.fifth = this.score[3];
    this.fourth = this.score[4];
    this.third = this.score[5];
    this.second = this.score['bonus'];
    this.first = this.score[6];
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

  isLottoIncludesBonusNum(lotto, bonusNum) {
    return lotto.includes(bonusNum);
  }

  countSameLottoNum(lotto, winningLotto) {
    const SAME_NUM = lotto.filter((num) => winningLotto.includes(num));
    return SAME_NUM.length;
  }

  calculateYield(paidMoney, winningMoney) {
    return ((paidMoney / winningMoney) * 100).toFixed(1);
  }
}

module.exports = LottoCalculator;
// const lottoCalculator = new LottoCalculator(
//   [
//     [8, 21, 23, 41, 42, 43],
//     [3, 5, 11, 16, 32, 38],
//     [7, 11, 16, 35, 36, 44],
//     [1, 8, 11, 31, 41, 42],
//     [13, 14, 16, 38, 42, 45],
//     [7, 11, 30, 40, 42, 43],
//     [2, 13, 22, 32, 38, 45],
//     [1, 3, 5, 14, 22, 45],
//   ],
//   [1, 2, 3, 4, 5, 6],
//   7
// );

// console.log(lottoCalculator);
