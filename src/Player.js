class Player {
  #pocket;

  constructor(tickets) {
    this.#pocket = tickets;
  }

  get pocket() {
    return this.#pocket;
  }
}

module.exports = Player;
