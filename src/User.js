class User {
  #lottoCount = 0;

  setLottoCount(count) {
    this.#lottoCount = count;
  }

  getLottoCount() {
    return this.#lottoCount;
  }
}

module.exports = User;
