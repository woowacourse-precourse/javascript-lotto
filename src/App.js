const MissionUtils = require('@woowacourse/mission-utils');
const { LottoConfig, AppConfig, Message } = require('./Config');
const Lotto = require('./Lotto');

class App {
  #money = 0;

  #lottoList = [];

  static #validateMoney(money) {
    if (
      money < LottoConfig.PRICE
      || money % LottoConfig.PRICE !== 0
    ) {
      throw new Error(Message.ERROR_MONEY);
    }
  }

  play() {}

  setMoney() {
    let money;
    MissionUtils.Console.readLine(
      Message.ENTER_MONEY_MESSAGE,
      (answer) => { money = Number(answer); },
    );

    App.#validateMoney(money);
    this.#money = money;
  }

  buyLotto() {
    while (this.#money >= LottoConfig.PRICE) {
      this.#lottoList.push(new Lotto());
      this.#money -= LottoConfig.PRICE;
    }
  }

  printLottoList() {
    MissionUtils.Console.print(Message.buy(this.#lottoList.length));
    this.#lottoList.forEach((lotto) => {
      MissionUtils.Console.print(Message.lottoNumber(lotto));
    });
  }
}

module.exports = App;
