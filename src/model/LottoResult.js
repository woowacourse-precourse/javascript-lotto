class LottoResult {
  constructor() {
    this.filteredArr = [];
    this.sameBonusNum = false;
    this.totalWinStatus = { countWinning: [0, 0, 0, 0, 0], totalReturn: 0 };
  }

  findSameNum(lottoNum, winSplitNum, bonusNum) {
    lottoNum.forEach((nums) => {
      this.filteredArr.push(nums.filter((x) => winSplitNum.includes(x)));
      if (nums.includes(bonusNum)) this.sameBonusNum = true;
    });
    return this.getWinStatus();
  }

  getWinStatus() {
    this.filteredArr.forEach((nums) => {
      let arrLength = nums.length;
      if (arrLength === 3) {
        this.totalWinStatus.countWinning[0] += 1;
        this.totalWinStatus.totalReturn += 5000;
      }
      if (arrLength === 4) {
        this.totalWinStatus.countWinning[1] += 1;
        this.totalWinStatus.totalReturn += 50000;
      }
      if (arrLength === 5 && !this.sameBonusNum) {
        this.totalWinStatus.countWinning[2] += 1;
        this.totalWinStatus.totalReturn += 1500000;
      }
      if (arrLength === 5 && this.sameBonusNum) {
        this.totalWinStatus.countWinning[3] += 1;
        this.totalWinStatus.totalReturn += 30000000;
      }
      if (arrLength === 6) {
        this.totalWinStatus.countWinning[4] += 1;
        this.totalWinStatus.totalReturn += 2000000000;
      }
    });
    return this.totalWinStatus;
  }
}

module.exports = LottoResult;
