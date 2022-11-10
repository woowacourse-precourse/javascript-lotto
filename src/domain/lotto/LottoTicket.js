class LottoTicket {
  #lottos;

  constructor(lottos) {
    this.#lottos = lottos;
  }

  static of(lottos) {
    return new LottoTicket(lottos);
  }
}

module.exports = LottoTicket;
