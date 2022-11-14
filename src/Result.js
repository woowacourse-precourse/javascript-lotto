const { Console } = require("@woowacourse/mission-utils");

class Result {
  lottoResult;
  bonusCnt;

  constructor() {}

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

  printLottoResult(lottoResult, bonusResult, totalYield) {
    // for (const score in lottoResult) {
    //   Console.print(
    //     `${score}개 일치 (${lottoResult[score][
    //       "money"
    //     ].toLocaleString()}원) - ${lottoResult[score]["count"]}개`
    //   );
    // }
    console.log(bonusResult["count"]);
    Console.print(`3개 일치 (5,000원) - ${lottoResult["3"]["count"]}개`);
    Console.print(`4개 일치 (50,000원) - ${lottoResult["4"]["count"]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${lottoResult["5"]["count"]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${bonusResult["count"]}개`
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${lottoResult["6"]["count"]}개`
    );
    Console.print(`총 수익률은 ${totalYield}%입니다.`);
  }
}
module.exports = Result;
