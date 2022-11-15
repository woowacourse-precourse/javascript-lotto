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
${RANK.MESSAGE}
${RANK.FIFTH(this.collectCount[0])}
${RANK.FOURTH(this.collectCount[1])}
${RANK.THIRD(this.collectCount[2])}
${RANK.SECOND(this.collectCount[3])}
${RANK.FIRST(this.collectCount[4])}
${RANK.RATE(rate)}
`);
    this.close();
  }

  close() {
    MissionUtils.Console.close();
  }
}
module.exports = Result;
