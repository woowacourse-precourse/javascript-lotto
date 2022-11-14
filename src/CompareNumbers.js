let rank = {
  3: 5,
  4: 4,
  6: 1,
};

class CompareNumbers {
  constructor(lottoArr, winningArr, bonus) {
    this.lottoArr = lottoArr;
    this.winningArr = winningArr;
    this.bonus = bonus;
    this.result = new Array(6).fill(0);
  }

  getResult() {
    for (let index = 0; index < this.lottoArr.length; index++) {
      const matchNumber = this.countSameNumbers(this.lottoArr[index]);
      matchNumber === 5
        ? this.compareSecondThird(index)
        : this.ranking(matchNumber);
    }
    return this.result;
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

  ranking(matchNumber) {
    if (rank[matchNumber]) this.result[rank[matchNumber]] += 1;
  }

  compareSecondThird(index) {
    this.lottoArr[index].includes(this.bonus)
      ? (this.result[2] += 1)
      : (this.result[3] += 1);
  }
}

module.exports = CompareNumbers;
