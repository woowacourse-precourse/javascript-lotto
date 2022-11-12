const MissionUtils = require('@woowacourse/mission-utils');
const { LottoConfig, AppConfig, Message } = require('./Config');
const Lotto = require('./Lotto');

class App {
  #money = 0;

  static #validateMoney(money) {
    if (money % LottoConfig.PRICE !== 0) {
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
}

module.exports = App;
