const MissionUtils = require("@woowacourse/mission-utils");
const { PRIZE, RANK } = require("./constant");
class Result {
  constructor(myMoney) {
    this.myMoney = myMoney;
    this.collectCount = [0, 0, 0, 0, 0];
  }

  statistics(bundle, numbers, bonus) {
    for (let i = 0; i < bundle.length; i++) {
      let bonusCount = 0;
      if (bundle[i].includes(bonus)) {
        bonusCount += 1;
      }
      const count = this.setCount(bundle[i], numbers);
      this.setCollectCount(count, bonusCount);
    }
    this.calculationResult();
  }

  setCount(lotto, numbers) {
    let count = 0;
    for (let i = 0; i < lotto.length; i++) {
      if (lotto.includes(numbers[i])) {
        count += 1;
      }
    }
    return count;
  }

  setCollectCount(count, bonusCount) {
    if (count === 3) {
      this.collectCount[0]++;
    }
    if (count === 4) {
      this.collectCount[1]++;
    }
    if (count === 5 && bonusCount !== 1) {
      this.collectCount[2]++;
    }
    if (count === 5 && bonusCount === 1) {
      this.collectCount[3]++;
    }
    if (count === 6) {
      this.collectCount[4]++;
    }
  }

  calculationResult() {
    const LottoMoney =
      this.collectCount[0] * PRIZE.FIFTH +
      this.collectCount[1] * PRIZE.FOURTH +
      this.collectCount[2] * PRIZE.THIRD +
      this.collectCount[3] * PRIZE.SECOND +
      this.collectCount[4] * PRIZE.FIRST;
    const rate = ((LottoMoney / this.myMoney) * 100).toFixed(1);
    this.printResult(rate);
  }

  printResult(rate) {
    MissionUtils.Console.print(`
당첨 통계
---
${RANK.FIFTH} - ${this.collectCount[0]}개
${RANK.FOURTH} - ${this.collectCount[1]}개
${RANK.THIRD} - ${this.collectCount[2]}개
${RANK.SECOND} - ${this.collectCount[3]}개
${RANK.FIRST} - ${this.collectCount[4]}개
총 수익률은 ${rate}%입니다.
`);
    this.close();
  }

  close() {
    MissionUtils.Console.close();
  }
}
module.exports = Result;
