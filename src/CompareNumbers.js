class CompareNumbers {
  constructor(lottoArr, winningArr, bonus) {
    this.lottoArr = lottoArr;
    this.winningArr = winningArr;
    this.bonus = bonus;
  }

  getResult() {
    for (let index = 0; index < this.lottoArr.length; index++) {
      const result = this.countSameNumbers(this.lottoArr[index]);
    }
  }

  countSameNumbers(lotto) {
    let count = 0;
    this.winningArr.forEach((winningNum) => {
      if (this.searchSameNumber(lotto, winningNum)) count += 1;
    });
    return count;
  }

  searchSameNumber(lotto, winningNum) {
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
}

module.exports = CompareNumbers;
