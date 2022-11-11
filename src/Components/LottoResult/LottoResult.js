class LottoResult {
  #matchedNumberCount;
  #isBonusNumberMatched;

  constructor(matchedNumberCount, isBonusNumberMatched) {
    this.#matchedNumberCount = matchedNumberCount;
    this.#isBonusNumberMatched = isBonusNumberMatched;
  }

  getMatchedNumberCount() {
    return this.#matchedNumberCount;
  }

  isBonusNumberMatched() {
    return this.#isBonusNumberMatched;
  }

  hasEqualNumberCount(lottoResult) {
    return this.#matchedNumberCount === lottoResult.getMatchedNumberCount();
  }

  hasBonusNumber(lottoResult) {
    return this.#isBonusNumberMatched === lottoResult.isBonusNumberMatched();
  }
}

module.exports = LottoResult;
