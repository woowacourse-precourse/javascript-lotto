class Price {
  #lottoPrice = 0;

  #lottoCount = 0;

  getLottoPrice() {
    return this.#lottoPrice;
  }

  getLottoCount() {
    return this.#lottoCount;
  }
}

module.exports = Price;
