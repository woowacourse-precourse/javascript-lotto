const MissionUtils = require('@woowacourse/mission-utils');
const { LottoConfig, AppConfig, Message } = require('./Config');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.reset();
  }

  static inputWinningNumbers() {
    let input;
    MissionUtils.Console.readLine(
      Message.ENTER_WINNING_NUMBERS_MESSAGE,
      (answer) => { input = answer.trimRight(); },
    );

    App.#validateSeparator(input);
    return input.split(AppConfig.INPUT_SEPARATOR).map(Number);
  }

  static inputBonusNumber() {
    let input;
    MissionUtils.Console.readLine(
      Message.ENTER_BONUS_NUMBER_MESSAGE,
      (answer) => { input = answer; },
    );
    return Number(input);
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

  reset() {
    this.money = 0;
    this.lottoList = [];
    this.prizeStatistics = { prizeMoney: 0 };
    this.prizeStatistics[LottoConfig.PRIZE_1] = 0;
    this.prizeStatistics[LottoConfig.PRIZE_2] = 0;
    this.prizeStatistics[LottoConfig.PRIZE_3] = 0;
    this.prizeStatistics[LottoConfig.PRIZE_4] = 0;
    this.prizeStatistics[LottoConfig.PRIZE_5] = 0;
  }

  play() {}

  buyLotto() {
    for (let purchase = 0; purchase < this.money; purchase += LottoConfig.PRICE) {
      this.lottoList.push(new Lotto());
    }
  }

  calculateStatistics(winningNumbers, bonusNumber) {
    this.lottoList.forEach(
      (lotto) => { this.#updateStatistics(lotto, winningNumbers, bonusNumber); },
    );
  }

  getRateOfReturn() {
    return (this.prizeStatistics.prizeMoney / this.money) * 100;
  }

  setMoney() {
    let money;
    MissionUtils.Console.readLine(
      Message.ENTER_MONEY_MESSAGE,
      (answer) => { money = Number(answer); },
    );

    App.#validateMoney(money);
    this.money = money;
  }

  printLottoList() {
    MissionUtils.Console.print(Message.buy(this.lottoList.length));
    this.lottoList.forEach((lotto) => {
      MissionUtils.Console.print(Message.lottoNumber(lotto));
    });
  }

  #updateStatistics(lotto, winningNumbers, bonusNumber) {
    const { prizeStatus, prizeMoney } = lotto.getPrize(winningNumbers, bonusNumber);
    this.prizeStatistics[prizeStatus] += 1;
    this.prizeStatistics.prizeMoney += prizeMoney;
  }
}

module.exports = App;
