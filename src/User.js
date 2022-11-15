class User {
  #lottoGame;

  #lottoTickets;

  constructor(lottoGame) {
    this.#lottoGame = lottoGame;
  }

  setLottoTickets(lottoTickets) {
    this.#lottoTickets = lottoTickets;
  }
}

module.exports = User;
