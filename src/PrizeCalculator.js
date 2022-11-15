const MissionUtils = require("@woowacourse/mission-utils");
const RegExp = require("./constants/RegExp");
const ErrorMessages = require("./constants/ErrorMessages");

class PrizeCalculator {
  #money;
  #userLottosArr;
  #winningNums;
  #winningBonusNum;

  constructor(money, userLottosArr, winningNums, winningBonusNum) {
    this.#money = money;
    this.#userLottosArr = userLottosArr;
    this.#winningNums = winningNums;
    this.#winningBonusNum = winningBonusNum;
    this.accumulatedWinnings = 0;
  }

  countMatches(userLotto) {
    const matchNum = userLotto.filter((num) => this.#winningNums.includes(num)).length;
    const includeBonus = userLotto.includes(this.#winningBonusNum);
    return [matchNum, includeBonus];
  }

  countWinnings() {
    const cntWinningsArr = [0, 0, 0, 0, 0];
    this.#userLottosArr.forEach((userLotto) => {
      const [matchNum, includeBonus] = this.countMatches(userLotto);
      if (matchNum === 3) {
        cntWinningsArr[0] += 1;
        this.accumulatedWinnings += 5000;
      } else if (matchNum === 4) {
        cntWinningsArr[1] += 1;
        this.accumulatedWinnings += 50000;
      } else if (matchNum === 5) {
        cntWinningsArr[2] += 1;
        this.accumulatedWinnings += 1500000;
      } else if (matchNum === 5 && includeBonus) {
        cntWinningsArr[3] += 1;
        this.accumulatedWinnings += 30000000;
      } else if (matchNum === 6) {
        cntWinningsArr[4] += 1;
        this.accumulatedWinnings += 2000000000;
      }
    });
    return cntWinningsArr;
  }

  caculateYield() {
    return ((this.accumulatedWinnings / this.#money) * 100).toFixed(1);
  }
}

module.exports = PrizeCalculator;
