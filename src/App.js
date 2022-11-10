const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./constants/lotto');

const LottoBuyer = require('./LottoBuyer');

class App {
  #buyer;

  #lotto;

  play() {
    this.#readMoney();
  }

  #readMoney() {
    Console.readLine(GAME_MESSAGE.MONEY_INPUT, (money) => {
      this.#buyer = new LottoBuyer(money);
      this.#buyer.buyLotto();

      const buyerLotto = this.#buyer.lotto;

      Console.print(`\n${buyerLotto.length}${GAME_MESSAGE.PURCHASE_NUMBER}`);

      buyerLotto.forEach((lotto) => {
        Console.print(lotto);
      });

      Console.close();
    });
  }
}

module.exports = App;
