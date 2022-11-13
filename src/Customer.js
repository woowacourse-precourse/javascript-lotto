class Customer {
  #lottos = [];

  purchaseLotto(lotto) {
    this.setNewLotto(lotto);
  }

  setNewLotto(lotto) {
    this.#lottos = this.#lottos.concat(lotto);
  }
}

module.exports = Customer;
