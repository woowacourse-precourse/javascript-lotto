class Result {
  constructor(lottoResult, bonusCnt) {
    this.lottoResult = lottoResult;
    this.bonusCnt = bonusCnt;
  }

  createLottoResult(scores, bonusNum, lottoArr) {
    this.lottoResult = {
      3: {
        money: 5000,
        count: 0,
      },
      4: {
        money: 50000,
        count: 0,
      },
      5: {
        money: 1500000,
        count: 0,
      },
      6: {
        money: 2000000000,
        count: 0,
      },
    };
    this.bonusCnt = 0;
    for (let i = 0; i < scores.length; i++) {
      const score = scores[i];
      if (score < 3) continue;
      if (this.isFiveScoreAndContainBonusNumber(score, lottoArr[i], bonusNum)) {
        this.bonusCnt += 1;
        continue;
      }

      this.lottoResult[score]["count"] += 1;
    }

    return this.lottoResult;
  }

  createBonusResult() {
    const bonusResult = {
      money: 30000000,
      count: this.bonusCnt,
    };

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
      if (lottoResult[score]["count"] > 0) {
        totalProfit += lottoResult[score]["money"];
      }
    }
    if (bonusResult["count"] > 0) {
      totalProfit += bonusResult["money"];
    }
    if (totalProfit === 0) return 0;

    return Number(((totalProfit / buyMoney) * 100).toFixed(1));
  }
}
module.exports = Result;
