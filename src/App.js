const { Console } = require("@woowacourse/mission-utils");
const LottoMachine = require("./domain/LottoMachine");
const LottoStatistics = require("./domain/LottoStatistics");
const Lotto = require("./Lotto");
const Utils = require("./Utils");
const { UI_MESSAGES, ERROR_MESSAGES } = require("./constants");

class App {
  constructor() {
    this.lottoMachine = new LottoMachine();
    this.buyingLottos = null;
    this.winningLotto = null;
    this.lottoStatistics = null;
  }

  play() {
    Console.readLine(UI_MESSAGES.PLEASE_MONEY, this.pleaseMoney.bind(this));
  }

  isValidMoney(money) {
    if (Number.isNaN(Number(money))) {
      throw new Error(ERROR_MESSAGES.MONEY_VALUE);
    }
  }

  pleaseMoney(money) {
    this.isValidMoney(money);
    this.printBuyingLottos(money);
    Console.readLine(
      UI_MESSAGES.PLEASE_WINNING_NUMBERS,
      this.pleaseWinningNumbers.bind(this),
    );
  }

  printBuyingLottos(money) {
    this.buyingLottos = this.lottoMachine.buy(money);
    const lottosAmount = this.buyingLottos.length;
    Console.print(`\n${lottosAmount}${UI_MESSAGES.BUY}`);
    this.buyingLottos.forEach((buyingLotto) => {
      Console.print(Utils.transformArrayToString(buyingLotto));
    });
  }

  pleaseWinningNumbers(inputWinningNumbers) {
    this.winningLotto = new Lotto(
      Utils.transformStringToNumberArray(inputWinningNumbers),
    );
    Console.readLine(
      UI_MESSAGES.PLEASE_BONUS_NUMBER,
      this.pleaseBonusNumber.bind(this),
    );
  }

  pleaseBonusNumber(inputBonusNumber) {
    this.winningLotto.addBonusNumber(parseInt(inputBonusNumber, 10));
    this.lottoStatistics = new LottoStatistics(this.winningLotto);
    this.printStatistics();
  }

  makeStatisticResultMessages() {
    const rankCounter = this.lottoStatistics.createRankCounter(
      this.buyingLottos,
    );
    const messages = [];
    for (let rank = 5; rank > 0; rank -= 1) {
      messages.push(
        `${UI_MESSAGES.RANK_TO_MESSAGES[rank]} - ${rankCounter[rank] || 0}개`,
      );
    }
    return messages;
  }

  printStatistics() {
    const resultMessages = this.makeStatisticResultMessages();
    const profit = this.lottoStatistics.getProfit(this.buyingLottos);

    Console.print("\n당첨 통계\n---");
    resultMessages.forEach((message) => {
      Console.print(message);
    });
    Console.print(`총 수익률은 ${Utils.formatProfit(profit)}%입니다.`);
    Console.close();
  }
}

module.exports = App;
