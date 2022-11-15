const inputMessage = require('./model/InputMessage');
const buyLotto = require('./controller/BuyLotto');

class App {
  play() {
    this.message = inputMessage.INPUT_MONEY;
    buyLotto.inputMoney(this.message)
  }
}

module.exports = App;
