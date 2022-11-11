class WinningResult {
  constructor(lottoArr, winningNumberArr) {
    this.lottoArr = lottoArr;
    this.winningNumberArr = winningNumberArr;
    this.result = { 5000: 0, 50000: 0, 1500000: 0, 30000000: 0, 2000000000: 0 };
    this.sum = 0;
  }

  setResult(bonusNumber) {
    this.lottoArr.forEach(lotto => {
      let sameArr = lotto.filter(num => this.winningNumberArr.includes(num));
      if (sameArr.length === 3) this.result[5000]++;
      if (sameArr.length === 4) this.result[50000]++;
      if (sameArr.length === 5 && lotto.includes(bonusNumber)) this.result[30000000]++;
      if (sameArr.length === 5 && !lotto.includes(bonusNumber)) this.result[1500000]++;
      if (sameArr.length === 6) this.result[2000000000]++;
    });
  }

  getResult() {
    return this.result;
  }

  calculateSum() {
    return Object.entries(this.result).reduce((acc, [key, value]) => acc + key * value, 0);
  }

  setYield(cash) {
    this.sum = this.calculateSum();
    return Math.round((this.sum * 1000) / cash) / 10;
  }
}

module.exports = WinningResult;
