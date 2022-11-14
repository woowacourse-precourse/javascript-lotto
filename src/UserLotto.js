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
}

module.exports = UserLotto;
