const { LOTTO, PRIZE_TEXT, PRIZE_AMOUNT } = require('./constant/Constant');

class LottoScoreBoard {
  #drawResult = {
    threeSame: 0,
    fourSame: 0,
    fiveSame: 0,
    fiveSameWithBonus: 0,
    allSame: 0,
    profitRate: 0.0,
  };

  #totalCost = 0;
  #profit = 0;

  addLottoDrawResult(sameCount, bonusSameCount) {
    this.#totalCost += LOTTO.PRICE;
    if (sameCount < LOTTO.PRIZE_REQUIRED_SCORE) {
      return;
    }
    if (
      sameCount === LOTTO.PRIZE_REQUIRED_WITH_BONUS &&
      bonusSameCount === LOTTO.BONUS_REQUIRED_SCORE
    ) {
      this.#drawResult.fiveSameWithBonus += 1;
      this.#profit += PRIZE_AMOUNT.BONUS;
      return;
    }
    this.#drawResult[PRIZE_TEXT[sameCount]] += 1;
    this.#profit += PRIZE_AMOUNT[sameCount];
  }

  getLottosDrawResult() {
    this.#drawResult.profitRate = this.#getProfitRate();
    return this.#drawResult;
  }

  #getProfitRate() {
    return ((this.#profit / this.#totalCost) * 100).toFixed(1);
  }
}

module.exports = LottoScoreBoard;
