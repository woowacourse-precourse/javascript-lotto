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

  play() {
    this.reset();

    this.setMoney();
    this.buyLotto();
    this.printLottoList();

    const winningNumbers = App.inputWinningNumbers();
    Lotto.validateNumbers(winningNumbers);
    const bonusNumber = App.inputBonusNumber();
    Lotto.validateBonusNumber(bonusNumber, winningNumbers);

    this.calculateStatistics(winningNumbers, bonusNumber);
    this.printStatistics();
  }

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

  printStatistics() {
    const message = Message.statistics(
      this.prizeStatistics[LottoConfig.PRIZE_1],
      this.prizeStatistics[LottoConfig.PRIZE_2],
      this.prizeStatistics[LottoConfig.PRIZE_3],
      this.prizeStatistics[LottoConfig.PRIZE_4],
      this.prizeStatistics[LottoConfig.PRIZE_5],
      this.getRateOfReturn(),
    );
    MissionUtils.Console.print(message);
  }

  #updateStatistics(lotto, winningNumbers, bonusNumber) {
    const { prizeStatus, prizeMoney } = lotto.getPrize(winningNumbers, bonusNumber);
    if (prizeStatus !== LottoConfig.NO_PRIZE) {
      this.prizeStatistics[prizeStatus] += 1;
      this.prizeStatistics.prizeMoney += prizeMoney;
    }
  }
}

module.exports = App;
