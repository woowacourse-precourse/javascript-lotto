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

  buyLotto() {
    for (let purchase = 0; purchase < this.#money; purchase += LottoConfig.PRICE) {
      this.#lottoList.push(new Lotto());
    }
  }

  setMoney() {
    let money;
    MissionUtils.Console.readLine(
      Message.ENTER_MONEY_MESSAGE,
      (answer) => { money = Number(answer); },
    );

    App.#validateMoney(money);
    this.#money = money;
  }

  printLottoList() {
    MissionUtils.Console.print(Message.buy(this.#lottoList.length));
    this.#lottoList.forEach((lotto) => {
      MissionUtils.Console.print(Message.lottoNumber(lotto));
    });
  }
}

module.exports = App;
