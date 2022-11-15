const { Console } = require('@woowacourse/mission-utils');
const { PRICE } = require('./settings');
const Message = require('./Message');

class Purchase {
  static pay(callback) {
    Console.readLine(Message.PRICE, (answer) => {
      const money = Number(answer);

      const lottoCount = Purchase.countLotto(money);

      callback(money, lottoCount);
    });
  }

  static countLotto(money) {
    return money / PRICE;
  }
}

module.exports = Purchase;
