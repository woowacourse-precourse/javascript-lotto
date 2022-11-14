const MissionUtils = require("@woowacourse/mission-utils");

class UserLotto {
  constructor() {
    this.userLottoList = [];
    this.lottoCount;
  }
  createUserLotto(amount) {
    this.lottoCount = amount / 1000;
    for (let make = 0; make < this.lottoCount; make++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.userLottoList.push(numbers.sort((a, b) => a - b));
    }
  }

  printUserLottoInformation() {
    MissionUtils.Console.print(`\n${this.lottoCount}개를 구매했습니다.`);
    this.userLottoList.map((lotto) => {
      MissionUtils.Console.print(`[${lotto.join(", ")}]`);
    });
  }

  getUserLottoList() {
    return this.userLottoList;
  }

  calculateMatchResult(countResult) {
    const matchResult = {
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      containBonus: 0,
    };
    for (let index = 0; index < countResult.length; index++) {
      if (countResult[index].length > 1) matchResult["containBonus"]++;
      if (countResult[index] in matchResult) {
        matchResult[`${countResult[index]}`]++;
      }
    }
    return matchResult;
  }
  calculateBenefit(matchResult) {
    const winningAmount = {
      3: 5000,
      4: 50000,
      5: 1500000,
      6: 2000000000,
      containBonus: 30000000,
    };
    const matchArray = Object.entries(matchResult);
    let totalAmount = 0;
    for (let i = 0; i < matchArray.length; i++) {
      totalAmount += winningAmount[`${matchArray[i][0]}`] * matchArray[i][1];
    }
    let result = (totalAmount / (this.lottoCount * 1000)) * 100;
    return Math.round(result * 10) / 10;
  }
}

module.exports = UserLotto;
