const { Console } = require('@woowacourse/mission-utils');
const { QUESTION_MESSAGE } = require('./libs/const');
const Purchase = require('./libs/Purchase');
const Utils = require('./libs/Utils');
const Validations = require('./libs/Validations');
const Lotto = require('./Lotto');

class Game {
  constructor() {
    this.totalLottoes = [];
    this.Lotto = null;
    this.Purchase = null;
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
    Validations.isNotCommaPrize(userInput);
    const prizeStringArray = Utils.splitComma(userInput);
    const prizeNumberArray = Utils.convertStringNumber(prizeStringArray);
    this.Lotto = new Lotto(prizeNumberArray);
    this.setBonusNumber();
  }

  setBonusNumber() {
    Console.readLine(QUESTION_MESSAGE.bonus, userInput =>
      this.enterBounsNumber(userInput),
    );
  }

  enterBounsNumber(userInput) {
    this.Lotto.setBonusNum(userInput);
    this.getView();
  }

  getView() {
    this.Lotto.winCheck(this.totalLottoes);
    this.Lotto.winningAmountCalculation();
    this.Lotto.printWinner();
    const yieldPercent = this.Lotto.yieldCaculation(this.Purchase.money);
    this.Lotto.printYield(yieldPercent);
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
