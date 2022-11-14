const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { INPUT_PRICE_MSG } = require('./Constants.js');

class App {
  inputWinningNumbers(lottos) {}

  printLottos(lottos) {}

  buyLotto(price) {}

  validateBuyPrice(price) {}

  inputPriceCallback(input) {
    const totalPrice = Number(input);

    this.validateBuyPrice(totalPrice);

    const lottos = this.buyLotto(totalPrice);

    this.printLottos(lottos);
    this.inputWinningNumbers(lottos);
  }

  play() {
    Console.readLine(INPUT_PRICE_MSG, (input) =>
      this.inputPriceCallback(input)
    );
  }
}

module.exports = App;
