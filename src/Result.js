const MissionUtils = require("@woowacourse/mission-utils");
const { PRIZE, RANK } = require("./constant");
class Result {
  constructor(myMoney) {
    this.myMoney = myMoney;
  }
  statistics(bundle, numbers, bonus) {
    const collectCount = [0, 0, 0, 0, 0];
    for (let i = 0; i < bundle.length; i++) {
      let count = 0;
      let bonusCount = 0;
      if (bundle[i].includes(bonus)) {
        bonusCount += 1;
      }
      for (let j = 0; j < bundle[i].length; j++) {
        if (bundle[i].includes(numbers[j])) {
          count += 1;
        }
      }
      if (count === 3) {
        collectCount[0]++;
      }
      if (count === 4) {
        collectCount[1]++;
      }
      if (count === 5 && bonusCount !== 1) {
        collectCount[2]++;
      }
      if (count === 5 && bonusCount === 1) {
        collectCount[3]++;
      }
      if (count === 6) {
        collectCount[4]++;
      }
    }
    this.printResult(collectCount);
  }

  printResult(collectCount) {
    const LottoMoney =
      collectCount[0] * PRIZE.FIFTH +
      collectCount[1] * PRIZE.FOURTH +
      collectCount[2] * PRIZE.THIRD +
      collectCount[3] * PRIZE.SECOND +
      collectCount[4] * PRIZE.FIRST;
    const rate = ((LottoMoney / this.myMoney) * 100).toFixed(1);
    MissionUtils.Console.print(`
당첨 통계
---
${RANK.FIFTH} - ${collectCount[0]}개
${RANK.FOURTH} - ${collectCount[1]}개
${RANK.THIRD} - ${collectCount[2]}개
${RANK.SECOND} - ${collectCount[3]}개
${RANK.FIRST} - ${collectCount[4]}개
총 수익률은 ${rate}%입니다.
`);
    this.close();
  }

  close() {
    MissionUtils.Console.close();
  }
}
module.exports = Result;
