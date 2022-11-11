const Data = require('./utils/Data');
const Tickets = require('./Tickets');
const GameOutput = require('./GameOutput');

class Player {
  #lotto = {
    number: 0,
    tickets: [],
  };

  buyLotto(priceString) {
    this.#lotto.number = Data.getLottoNumber(Data.makeUsablePrice(priceString));
  }

  getLotto() {
    this.#lotto.tickets = Tickets.publish(this.#lotto.number);
  }

  printLotto() {
    GameOutput.printNewLine();
    GameOutput.printLottoNumber(this.#lotto.number);
    GameOutput.printLottos(Data.convertLottosToPrintableLottos(this.#lotto.tickets));
    GameOutput.printNewLine();
  }
}

module.exports = Player;
