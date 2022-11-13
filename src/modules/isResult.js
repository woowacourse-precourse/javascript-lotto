const MissionUtils = require("@woowacourse/mission-utils");
const { LOTTO_PRIZE } = require("../utils/lottoPrize");

class isResult {
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
      1: {
        match: "6개 일치",
        price: LOTTO_PRIZE[1],
        count: 0,
      },
      2: {
        match: "5개 일치, 보너스 볼 일치",
        price: LOTTO_PRIZE[2],
        count: 0,
      },
      3: {
        match: "5개 일치",
        price: LOTTO_PRIZE[3],
        count: 0,
      },
      4: {
        match: "4개 일치",
        price: LOTTO_PRIZE[4],
        count: 0,
      },
      5: {
        match: "3개 일치",
        price: LOTTO_PRIZE[5],
        count: 0,
      },
    };

    let count = 0;
    let totalWin = 0;
    this.userLottoArray.forEach((lotto) => {
      lotto.forEach((test) => {
        if (this.winningNumArray.includes(test)) count++;
      });

      switch (count) {
        case 3:
          totalWin += LOTTO_PRIZE[5];
          result[5].count += 1;
          break;
        case 4:
          totalWin += LOTTO_PRIZE[4];
          result[4].count += 1;
          break;
        case 5:
          if (lotto.includes(this.bonusNum)) {
            totalWin += LOTTO_PRIZE[2];
            result[2].count += 1;
          } else {
            totalWin += LOTTO_PRIZE[3];
            result[3].count += 1;
          }
          break;
        case 6:
          totalWin += LOTTO_PRIZE[1];
          result[1].count += 1;
          break;
      }
      count = 0;
    });
    this.resultPrint(result, totalWin);
  }

}

module.exports = isResult;
