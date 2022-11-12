const { GAME_MESSAGE } = require('./lib/Constants');
const { readLine } = require('./lib/Utils');
const Price = require('./Price');

class LottoController {
  price;

  start() {
    this.inputPrice();
  }

  inputPrice() {
    readLine(GAME_MESSAGE.input_price, (answer) => this.getPrice(answer));
  }

  getPrice(answer) {
    this.price = new Price(answer);
  }
}

module.exports = LottoController;
