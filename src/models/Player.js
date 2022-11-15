class Player {
  #data = {};

  constructor({ purchaseAmount, lottos, quantity }) {
    this.#setPlayersLottos({ purchaseAmount, lottos, quantity });
  }

  #setPlayersLottos({ purchaseAmount, lottos, quantity }) {
    this.#data.purchaseAmount = purchaseAmount;
    this.#data.lottos = lottos;
    this.#data.quantity = quantity;
  }

  getPlayersLottos() {
    return this.#data;
  }
}

module.exports = Player;
