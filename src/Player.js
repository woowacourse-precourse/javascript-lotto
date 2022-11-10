const Maker = require('./utils/Maker');
const Lotto = require('./Lotto');

class Player {
  #lotto;

  #lottoNumber;

  #lottoTickets;

  constructor() {
    this.#lotto = new Lotto();
  }

  buyLotto(priceString) {
    this.#lottoNumber = Maker.getLottoNumber(Maker.makeUsablePrice(priceString));
  }

  getLotto() {
    this.#lottoTickets = this.#lotto.publishPlayersTicket(this.#lottoNumber);
  }
}

module.exports = Player;
