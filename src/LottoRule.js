class LottoRule {
  winningNumberCount;
  range;

  constructor(winningNumberCount, range) {
    this.winningNumberCount = winningNumberCount;
    this.range = range;
  }

  checkRange(number) {
    return number >= this.range.min && number <= this.range.max;
  }
}

module.exports = LottoRule;
