const MissionUtils = require("@woowacourse/mission-utils");
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
      collectCount[0] * 5000 +
      collectCount[1] * 50_000 +
      collectCount[2] * 1_500_000 +
      collectCount[3] * 30_000_000 +
      collectCount[4] * 2_000_000_000;
    const rate = ((LottoMoney / this.myMoney) * 100).toFixed(1);
    MissionUtils.Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${collectCount[0]}개
4개 일치 (50,000원) - ${collectCount[1]}개
5개 일치 (1,500,000원) - ${collectCount[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${collectCount[3]}개
6개 일치 (2,000,000,000원) - ${collectCount[4]}개
총 수익률은 ${rate}%입니다.
`);
    this.close();
  }

  close() {
    MissionUtils.Console.close();
  }
}
module.exports = Result;
