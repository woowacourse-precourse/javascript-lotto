class LottoResult {
  findSameNum(lottoNum, winSplitNum) {
    lottoNum.forEach((nums) => {
      this.getWinStatus(nums.filter((x) => winSplitNum.includes(x)));
    });
  }

  getWinStatus(arr) {}
}

module.exports = LottoResult;
