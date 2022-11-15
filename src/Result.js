const { Console } = require("@woowacourse/mission-utils");
const { LOTTO_RESULT, BONUS_RESULT } = require("./constants/core");
const { LOTTO, PRINT_MESSAGE } = require("./constants/constants");

class Result {
  #bonusCnt;

  createLottoResult(scores, bonusNum, lottoArr) {
    const lottoResult = LOTTO_RESULT;
    this.#bonusCnt = 0;
    for (let i = 0; i < scores.length; i++) {
      const score = scores[i];
      const lottoNubers = lottoArr[i].getLottoNumber();
      if (score < 3) continue;

      if (this.isFiveScoreAndContainBonusNumber(score, lottoNubers, bonusNum)) {
        this.#bonusCnt += 1;
        continue;
      }
      lottoResult[score][LOTTO.COUNT] += 1;
    }
    return lottoResult;
  }

  //   getBonusCnt() {
  //     return this.#bonusCnt;
  //   }

  createBonusResult() {
    const bonusResult = BONUS_RESULT;
    bonusResult[LOTTO.COUNT] += this.#bonusCnt;
    return bonusResult;
  }

  isFiveScoreAndContainBonusNumber(score, lotto, bonusNum) {
    return (
      this.isFiveScore(score) && this.isContainBonusNumber(lotto, bonusNum)
    );
  }

  isFiveScore(score) {
    return score === 5;
  }

  isContainBonusNumber(lotto, bonusNum) {
    return lotto.includes(bonusNum);
  }

  getTotalYield(buyMoney, lottoResult, bonusResult) {
    let totalProfit = 0;
    for (const score in lottoResult) {
      if (lottoResult[score][LOTTO.COUNT] > 0) {
        totalProfit += lottoResult[score][LOTTO.MONEY];
      }
    }
    if (bonusResult[LOTTO.COUNT] > 0) {
      totalProfit += bonusResult[LOTTO.MONEY];
    }
    return totalProfit === 0
      ? 0
      : Number(((totalProfit / buyMoney) * 100).toFixed(1));
  }

  printLottoResult(lottoResult, bonusResult, totalYield) {
    Console.print(
      PRINT_MESSAGE.THREE_CORRECT +
        lottoResult[LOTTO.THREE][LOTTO.COUNT] +
        PRINT_MESSAGE.COUNT
    );
    Console.print(
      PRINT_MESSAGE.FOUR_CORRECT +
        lottoResult[LOTTO.FOUR][LOTTO.COUNT] +
        PRINT_MESSAGE.COUNT
    );
    Console.print(
      PRINT_MESSAGE.FIVE_CORRECT +
        lottoResult[LOTTO.FIVE][LOTTO.COUNT] +
        PRINT_MESSAGE.COUNT
    );
    Console.print(
      PRINT_MESSAGE.FIVE_CORRECT_AND_BONUS +
        bonusResult[LOTTO.COUNT] +
        PRINT_MESSAGE.COUNT
    );
    Console.print(
      PRINT_MESSAGE.SIX_CORRECT +
        lottoResult[LOTTO.SIX][LOTTO.COUNT] +
        PRINT_MESSAGE.COUNT
    );
    Console.print(
      PRINT_MESSAGE.YIELD_START + totalYield + PRINT_MESSAGE.YIELD_END
    );
  }
}

module.exports = Result;
