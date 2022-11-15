const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Purchase = require('./libs/Purchase');
const { splitComma, convertStringNumber } = require('./libs/Utils');
const { isNotCommaPrize } = require('./libs/Validations');
const { QUESTION_MESSAGE } = require('./libs/const');

class Game {
  constructor() {
    this.totalLottoes = [];
    this.Lotto = null;
    this.Purchase = null;
    this.bonusNumber = 0;
    this.winningAmount = 0;
    this.ranking = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  init() {
    Console.readLine(QUESTION_MESSAGE.buy, money => this.purchaseLotto(money));
  }

  purchaseLotto(money) {
    this.Purchase = new Purchase(money);
    this.totalLottoes = this.Purchase.createLottoArray(this.Purchase.money);
    this.Purchase.print();
    this.setPrizeNumber();
  }

  setPrizeNumber() {
    Console.readLine(QUESTION_MESSAGE.prize, userInput =>
      this.enterPrizeNumbers(userInput),
    );
  }

  enterPrizeNumbers(userInput) {
    isNotCommaPrize(userInput);
    const prizeStringArray = splitComma(userInput);
    const prizeNumberArray = convertStringNumber(prizeStringArray);
    this.Lotto = new Lotto(prizeNumberArray);
    this.bonusNumber = this.setBonusNumber();
  }

  setBonusNumber() {
    Console.readLine(QUESTION_MESSAGE.bonus, userInput =>
      this.enterBounsNumber(userInput),
    );
  }

  enterBounsNumber(userInput) {
    this.Lotto.setBonusNum(userInput);
    this.lottoResults();
  }

  getRanking() {
    this.ranking = this.Lotto.winCheck(this.totalLottoes, this.bonusNumber);

    this.exit();
  }

  getWinningAmount() {
    this.winningAmount = this.Lotto.winningAmountCalculation(this.ranking);
  }

  printYeild() {
    const yieldPercent = this.Lotto.yieldCaculation(
      this.winningAmount,
      this.Purchase.money,
    );
    this.Lotto.printYield(yieldPercent);
  }

  lottoResults() {
    this.getRanking();
    this.getWinningAmount();
    this.Lotto.printWinner(this.ranking);
    this.printYeild();
    this.exit();
  }

  exit() {
    Console.close();
  }

  play() {
    this.init();
  }
}

module.exports = Game;
