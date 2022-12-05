class LottoResult {
  #filteredArr;
  #sameBonusNum;
  #totalWinStatus;

  constructor() {
    this.#filteredArr = [];
    this.#sameBonusNum = false;
    this.#totalWinStatus = { countWinning: [0, 0, 0, 0, 0], totalReturn: 0 };
  }

  findSameNum(lottoNum, winSplitNum, bonusNum) {
    lottoNum.forEach((nums) => {
      this.#filteredArr.push(nums.filter((x) => winSplitNum.includes(x)));
      if (nums.includes(bonusNum)) this.#sameBonusNum = true;
    });

    return this.getWinStatus();
  }

  getWinStatus() {
    this.#filteredArr.forEach((nums) => {
      let arrLength = nums.length;
      if (arrLength === 3) this.statusChange(0, 5000);
      if (arrLength === 4) this.statusChange(1, 50000);
      if (arrLength === 5) this.statusChange(2, 1500000);
      if (arrLength === 5 && this.#sameBonusNum) this.statusChange(3, 30000000);
      if (arrLength === 6) this.statusChange(4, 2000000000);
    });

    return this.#totalWinStatus;
  }

  statusChange(index, money) {
    this.#totalWinStatus.countWinning[index] += 1;
    this.#totalWinStatus.totalReturn += money;
  }
}

module.exports = LottoResult;
