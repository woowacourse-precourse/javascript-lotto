class User {
  #money = 0;
  #lottoQuantity = 0;
  #lottos = [];
  #matchLottos = {
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    bonus: 0,
  };

  setMoney(money) {
    this.#money = money;
  }

  getMoney() {
    return this.#money;
  }

  setLottoQuantity(quantity) {
    this.#lottoQuantity = quantity;
  }

  getLottoQuantity() {
    return this.#lottoQuantity;
  }

  setLottos(lottos) {
    this.#lottos = lottos;
  }

  getLottos() {
    return this.#lottos;
  }

  setMatchLottos(matchLottosKey) {
    this.#matchLottos[matchLottosKey] += 1;
  }

  getMatchLottos() {
    return this.#matchLottos;
  }
}

module.exports = User;
