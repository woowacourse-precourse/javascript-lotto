class Customer {
  #lottos = [];

  purchaseLotto(lotto) {
    this.setNewLotto(lotto);
  }

  list() {
    return this.#lottos;
  }

  setNewLotto(lotto) {
    this.#lottos = this.#lottos.concat(lotto);
  }
}

module.exports = Customer;
