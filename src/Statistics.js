class Statistics {
  #rank;

  constructor() {
    this.#rank = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
  }

  setRankList(userNums, lottoNum, bonusNum) {
    userNums.forEach((num) => this.setRank(num, lottoNum, bonusNum));
    return this.#rank;
  }

  setRank(num, lottoNum, bonusNum) {
    const sameCount = this.getSameCount(num, lottoNum);
    switch (sameCount) {
      case 6:
        this.#rank.first += 1;
        break;
      case 5:
        if (num.includes(bonusNum)) {
          this.#rank.second += 1;
          return;
        }
        this.#rank.third += 1;
        break;
      case 4:
        this.#rank.fourth += 1;
        break;
      case 3:
        this.#rank.fifth += 1;
        break;
      default:
        break;
    }
  }

  getSameCount(num, lottoNum) {
    return num.filter((n) => lottoNum.includes(n)).length;
  }

  getRateOfReturn(money) {
    const total =
      this.#rank.first * 2000000000 +
      this.#rank.second * 30000000 +
      this.#rank.third * 1500000 +
      this.#rank.fourth * 50000 +
      this.#rank.fifth * 5000;

    return Math.round((total / money) * 100 * 10) / 10;
  }

  getRank() {
    return this.#rank;
  }
}

module.exports = Statistics;
