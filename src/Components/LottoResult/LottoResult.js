class LottoResult {
  #sameNumberCount;
  #isBonusNumberMatched;

  constructor(sameNumberCount, isBonusNumberMatched) {
    this.#sameNumberCount = sameNumberCount;
    this.#isBonusNumberMatched = isBonusNumberMatched;
  }

  getSameNumberCount() {
    return this.#sameNumberCount;
  }

  isBonusNumberMatched() {
    return this.#isBonusNumberMatched;
  }
}

module.exports = LottoResult;
