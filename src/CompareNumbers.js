const {
  FIRST,
  FOURTH,
  FIFTH,
  LOTTO_NUM,
  ZERO,
  FIVE,
} = require('../util/constants');

const rankAccordToMatchNum = {
  3: FIFTH,
  4: FOURTH,
  6: FIRST,
};

class CompareNumbers {
  constructor(lottoArr, winningArr, bonus) {
    this.lottoArr = lottoArr;
    this.winningArr = winningArr;
    this.bonus = bonus;
    this.result = new Array(LOTTO_NUM).fill(ZERO);
  }

  getResult() {
    for (let index = 0; index < this.lottoArr.length; index++) {
      const matchNumber = this.countSameNumbers(this.lottoArr[index]);
      matchNumber === FIVE
        ? this.compareSecondThird(index)
        : this.ranking(matchNumber);
    }
    return this.result;
  }

  countSameNumbers(lotto) {
    let count = 0;
    this.winningArr.forEach((winningNum) => {
      if (this.hasSameNumber(lotto, winningNum)) count += 1;
    });
    return count;
  }

  hasSameNumber(lotto, winningNum) {
    let start = 0;
    let end = lotto.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      let current = lotto[mid];

      if (current === winningNum) return true;
      current < winningNum ? (start = mid + 1) : (end = mid - 1);
    }
    return false;
  }

  ranking(matchNumber) {
    if (rankAccordToMatchNum[matchNumber])
      this.result[rankAccordToMatchNum[matchNumber]] += 1;
  }

  compareSecondThird(index) {
    this.lottoArr[index].includes(this.bonus)
      ? (this.result[SECOND] += 1)
      : (this.result[THIRD] += 1);
  }
}

module.exports = CompareNumbers;
