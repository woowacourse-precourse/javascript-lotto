const { Console } = require('@woowacourse/mission-utils');
const Message = require('../constants/Message');
const publishLotto =require('./PublishLotto');
const Validator = require('./Validator');

class App {
  play() {
    this.askPurchasePrice();
  }

  askPurchasePrice () {
    Console.readLine(Message.INPUT_PURCHASE_PRICE, (price) => {
      Validator.inputPurchase(price);
      const priceNumber = Message.getCountLottery(price);

      Console.print(`${priceNumber}${Message.COUNT_LOTTO}`);

      publishLotto.arrangeTotalLotto(priceNumber)
    });
  }
}

module.exports = App;
