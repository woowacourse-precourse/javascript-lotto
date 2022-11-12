const MissionUtils = require('@woowacourse/mission-utils');
const { LottoConfig, AppConfig, Message } = require('./Config');
const Lotto = require('./Lotto');

class App {
  #money = 0;

  #lottoList = [];

  static inputWinningNumbers() {
    let input;
    MissionUtils.Console.readLine(
      Message.ENTER_WINNING_NUMBERS_MESSAGE,
      (answer) => { input = answer.trimRight(); },
    );

    App.#validateSeparator(input);
    return input.split(AppConfig.INPUT_SEPARATOR).map(Number);
  }

  static #validateMoney(money) {
    if (
      money < LottoConfig.PRICE
      || money % LottoConfig.PRICE !== 0
    ) {
      throw new Error(Message.ERROR_MONEY);
    }
  }

  static #validateSeparator(input) {
    const inputFormat = new RegExp(`^[1-9]+(${AppConfig.INPUT_SEPARATOR}[1-9]+)+$`);
    if (!inputFormat.test(input)) {
      throw new Error(Message.ERROR_SEPARATOR);
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
