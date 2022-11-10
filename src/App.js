const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./constants/lotto');

const LottoBuyer = require('./LottoBuyer');
const LottoSales = require('./LottoSales');

class App {
  #buyer;

  #sales;

  #lotto;

  play() {
    this.#readMoney();
  }

  #readMoney() {
    Console.readLine(GAME_MESSAGE.MONEY_INPUT, (money) => {
      this.#buyer = new LottoBuyer(money);
      const lottos = LottoSales.issueLottos(this.#buyer.money);
      Console.print(lottos);
      Console.close();
    });
  }
}

module.exports = App;
