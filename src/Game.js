const { Console } = require('@woowacourse/mission-utils');
const { QUESTION_MESSAGE } = require('./libs/const');
const Purchase = require('./libs/Purchase');
const Validations = require('./libs/Validations');
const Lotto = require('./Lotto');

class Game {
  constructor() {
    this.totalLotto = [];
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
  }

  init() {
    Console.readLine(QUESTION_MESSAGE.buy, money => this.purchaseLotto(money));
  }

  purchaseLotto(money) {
    Validations.isThousand(money);
    this.purchaseAmount = money;
    this.totalLotto = Purchase.lottoes(this.purchaseAmount);
    this.setPrizeNumber();
  }

  setPrizeNumber() {
    Console.readLine(QUESTION_MESSAGE.prize, userInput =>
      this.enterPrizeNumbers(userInput),
    );
  }

  enterPrizeNumbers(userInput) {
    Validations.isNotCommaPrize(userInput);
    const prizeStringArray = userInput.split(',').map(item => item.trim());
    const prizeNumberArray = prizeStringArray.map(item => Number(item));
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
    this.lottoNumber.winCheck(this.totalLotto);
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
