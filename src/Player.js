const Maker = require('./utils/Maker');
const Tickets = require('./Tickets');

class Player {
  #lotto = {
    number: 0,
    tickets: [],
  };

  constructor() {}

  buyLotto(priceString) {
    this.#lotto.number = Maker.getLottoNumber(Maker.makeUsablePrice(priceString));
  }

  getLotto() {
    this.#lotto.tickets = Tickets.publish(this.#lotto.number);
  }
}

module.exports = Player;
