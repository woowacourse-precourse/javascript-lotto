const { PRIZE, MATCHING_COUNT } = require("../Utils/constant");
const Print = require("../UI/Print");
class Result {
  constructor(userMoney) {
    this.userMoney = userMoney;
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
