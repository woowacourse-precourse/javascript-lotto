class User {
  #lottoCount = 0;
  #lottos = [];

  setLottoCount(count) {
    this.#lottoCount = count;
  }

  getLottoCount() {
    return this.#lottoCount;
  }

  setLottos(lottos) {
    this.#lottos = lottos;
  }

  getLottos() {
    return this.#lottos;
  }
}

module.exports = User;
