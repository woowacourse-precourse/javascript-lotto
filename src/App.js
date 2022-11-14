const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const {
  INPUT_PRICE_MSG,
  PRICE_NAN_ERROR,
  PRICE_TOO_LOW_ERROR,
  PRICE_NOT_MULTIPLE_ERROR,
} = require('./Constants.js');

class App {
  inputWinningNumbers(lottos) {}

  printLottos(lottos) {}

  buyLotto(price) {}

  validateBuyPrice(price) {
    if (Number.isNaN(price)) {
      throw new Error(PRICE_NAN_ERROR);
    }
    if (price < PRICE) {
      throw new Error(PRICE_TOO_LOW_ERROR);
    }
    if (price % 1000 !== 0) {
      throw new Error(PRICE_NOT_MULTIPLE_ERROR);
    }
  }

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
