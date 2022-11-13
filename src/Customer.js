class Customer {
  #lottos = [];

  setNewLotto(lotto) {
    this.#lottos = this.#lottos.concat(lotto);
  }
}

module.exports = Customer;
