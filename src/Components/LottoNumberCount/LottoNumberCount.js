class LottoNumberCount {
  #lottoNumberCount;

  constructor(lottoNumberCount) {
    this.#lottoNumberCount = lottoNumberCount;
  }

  getLottoNumberCount() {
    return this.#lottoNumberCount;
  }

  isSame(lottoNumberCount) {
    return this.#lottoNumberCount === lottoNumberCount.getLottoNumberCount();
  }

  isNull() {
    return this.#lottoNumberCount === null;
  }
}

module.exports = LottoNumberCount;
