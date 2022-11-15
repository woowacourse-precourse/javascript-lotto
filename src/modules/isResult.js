const MissionUtils = require("@woowacourse/mission-utils");
const { LOTTO_PRIZE } = require("../utils/lottoPrize");

class IsResult {
  constructor(userLotto, winningNum, bounsNumber, userCost) {
    this.userLottoArray = userLotto;
    this.winningNumArray = winningNum;
    this.bonusNum = bounsNumber;
    this.userCost = userCost;
  }

  resultPrint(result, totalWin) {
    MissionUtils.Console.print("");
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");

    for (let key in result) {
      MissionUtils.Console.print(
        `${result[key].match} (${parseInt(result[key].price).toLocaleString()}원) - ${result[key].count}개`
      );
    }

    MissionUtils.Console.print(
      `총 수익률은 ${((totalWin / this.userCost) * 100).toFixed(1)}%입니다.`
    );
  }

  resultProcess() {
    const result = {
      1: { match: "6개 일치", price: LOTTO_PRIZE[1], count: 0 },
      2: { match: "5개 일치, 보너스 볼 일치", price: LOTTO_PRIZE[2], count: 0 },
      3: { match: "5개 일치", price: LOTTO_PRIZE[3], count: 0 },
      4: { match: "4개 일치", price: LOTTO_PRIZE[4], count: 0 },
      5: { match: "3개 일치", price: LOTTO_PRIZE[5], count: 0 },
    };
    this.prizeProcess(result)
  }

  prizeProcess(result) {
    let count = 0;
    let totalWin = 0;
    this.userLottoArray.forEach((lotto) => {
      lotto.forEach((test) => {
        if (this.winningNumArray.includes(test)) count++;
      });
      if(count === 3) result[5].count++
      if(count === 4) result[4].count++
      if(count === 5) lotto.includes(this.bonusNum) ? result[2].count++ : result[3].count++
      if(count === 6) result[1].count++
      count = 0;

    });
    for(let i=1; i<6; i++) totalWin += LOTTO_PRIZE[i] * result[i].count
    this.resultPrint(result, totalWin);
  }
}

module.exports = IsResult;
