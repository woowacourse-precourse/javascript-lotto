class LottoResult {
  constructor() {
    this.sameBonusNum = false;
    this.filteredArr = [];
    this.countWinning = [0, 0, 0, 0, 0];
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
      if (arrLength === 3) this.countWinning[0] += 1;
      if (arrLength === 4) this.countWinning[1] += 1;
      if (arrLength === 5 && !this.sameBonusNum) this.countWinning[2] += 1;
      if (arrLength === 5 && this.sameBonusNum) this.countWinning[3] += 1;
      if (arrLength === 6) this.countWinning[4] += 1;
    });
    return this.countWinning;
  }
}

module.exports = LottoResult;
