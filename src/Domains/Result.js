const { PRIZE, MATCHING_COUNT } = require("../Utils/constant");
const Print = require("../UI/Print");
class Result {
  constructor(userMoney) {
    this.userMoney = userMoney;
    this.collectCount = [0, 0, 0, 0, 0];
  }

  statistics(bundle, numbers, bonus) {
    bundle.forEach(x => {
      let bonusCount = 0;
      if(x.includes(bonus)) {
        bonusCount += 1;
      }
      const count = this.setCount(x, numbers);
      this.setCollectCount(count, bonusCount);
    })
    this.calculationResult();
  }

  setCount(lotto, numbers) {
    let count = 0;
    numbers.forEach(x => {
      if(lotto.includes(x)){
        count += 1;
      }
    })
    return count;
  }

  setCollectCount(count, bonusCount) {
    if (count === MATCHING_COUNT.THREE) {
      this.collectCount[0] += 1;
    }
    if (count === MATCHING_COUNT.FOUR) {
      this.collectCount[1] += 1;
    }
    if (count === MATCHING_COUNT.FIVE && bonusCount !== 1) {
      this.collectCount[2] += 1;
    }
    if (count === MATCHING_COUNT.FIVE && bonusCount === 1) {
      this.collectCount[3] += 1;
    }
    if (count === MATCHING_COUNT.SIX) {
      this.collectCount[4] += 1;
    }
  }

  calculationResult() {
    const LottoMoney =
      this.collectCount[0] * PRIZE.FIFTH +
      this.collectCount[1] * PRIZE.FOURTH +
      this.collectCount[2] * PRIZE.THIRD +
      this.collectCount[3] * PRIZE.SECOND +
      this.collectCount[4] * PRIZE.FIRST;
    const rate = ((LottoMoney / this.userMoney) * 100).toFixed(1);
    new Print().result(this.collectCount, rate);
  }
}
module.exports = Result;
