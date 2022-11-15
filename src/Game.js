const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Purchase = require('./libs/Purchase');
const BonusLotto = require('./libs/BonusLotto');
const GameResult = require('./libs/GameResult');
const { splitComma, convertStringNumber } = require('./libs/Utils');
const { isNotCommaPrize } = require('./libs/Validations');
const { QUESTION_MESSAGE } = require('./libs/const');

class Game {
  constructor() {
    this.totalLottoes = [];
    this.Lotto = null;
    this.Purchase = null;
    this.GameResult = null;
    this.BonusLotto = null;
    this.prizeNumber = [];
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
    this.totalLottoes = this.Purchase.createLottoArray();
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
    this.prizeNumber = this.Lotto.getPrizeNumber();
    this.setBonusNumber();
  }

  setBonusNumber() {
    Console.readLine(QUESTION_MESSAGE.bonus, userInput =>
      this.enterBounsNumber(userInput),
    );
  }

  enterBounsNumber(userInput) {
    this.BonusLotto = new BonusLotto(this.prizeNumber, userInput);
    this.bonusNumber = this.BonusLotto.getBonusNumber();
    this.lottoResults();
  }

  getRanking() {
    this.ranking = this.GameResult.winCheck(
      this.totalLottoes,
      this.prizeNumber,
      this.bonusNumber,
    );
  }

  getWinningAmount() {
    this.winningAmount = this.GameResult.winningAmountCalculation(this.ranking);
  }

  printYeild() {
    const yieldPercent = this.GameResult.yieldCaculation(
      this.winningAmount,
      this.Purchase.money,
    );
    this.GameResult.printYieldPercent(yieldPercent);
  }

  lottoResults() {
    this.GameResult = new GameResult();
    this.getRanking();
    this.getWinningAmount();
    this.GameResult.printWinner(this.ranking);
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
