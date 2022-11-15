const { Console } = require('@woowacourse/mission-utils');
const { QUESTION_MESSAGE } = require('./libs/const');
const Purchase = require('./libs/Purchase');
const Utils = require('./libs/Utils');
const Validations = require('./libs/Validations');
const Lotto = require('./Lotto');

class Game {
  constructor() {
    this.totalLottoes = [];
    this.prizeNumber = null;
    this.bonusNumber = null;
    this.winnigAmount = 0;
    this.purchaseAmount = 0;
    this.lottoNumber = null;
    this.ranking = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    this.Purchase = new Purchase();
  }

  init() {
    Console.readLine(QUESTION_MESSAGE.buy, money => this.purchaseLotto(money));
  }

  purchaseLotto(money) {
    Validations.isThousand(money);
    this.purchaseAmount = money;
    this.totalLottoes = this.Purchase.createLottoArray(this.purchaseAmount);
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
    this.lottoNumber = new Lotto(prizeNumberArray);
    this.prizeNumber = prizeNumberArray;
    this.setBonusNumber();
  }

  setBonusNumber() {
    Console.readLine(QUESTION_MESSAGE.bonus, userInput =>
      this.enterBounsNumber(userInput),
    );
  }

  enterBounsNumber(userInput) {
    this.bonusNumber = this.lottoNumber.setBonusNum(userInput);
    this.getView();
  }

  getView() {
    this.lottoNumber.winCheck(this.totalLottoes);
    this.lottoNumber.winningAmountCalculation();
    this.lottoNumber.printWinner();
    const yieldPercent = this.lottoNumber.yieldCaculation(this.purchaseAmount);
    this.lottoNumber.printYield(yieldPercent);
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
