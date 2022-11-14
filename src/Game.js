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
    Console.readLine(QUESTION_MESSAGE.buy, money => {
      Validations.isThousand(money);
      this.purchaseAmount = money;
      this.totalLotto = Purchase.lottoes(this.purchaseAmount);
      this.setPrizeNumber();
    });
  }

  setPrizeNumber() {
    Console.readLine(QUESTION_MESSAGE.prize, userInput => {
      Validations.isNotCommaPrize(userInput);
      const prizeStringArray = userInput.split(',').map(item => item.trim());
      const prizeNumberArray = prizeStringArray.map(item => Number(item));
      this.lottoNumber = new Lotto(prizeNumberArray);
      this.prizeNumber = prizeNumberArray;
      this.setBonusNumber();

      //   this.#prizeNumber = prizeNumberArray;
    });
  }

  setBonusNumber() {
    Console.readLine(QUESTION_MESSAGE.bonus, userInput => {
      this.bonusNumber = this.lottoNumber.setBonusNum(userInput);
      this.getView();
    });
  }

  getView() {
    this.lottoNumber.winCheck(this.totalLotto);
    this.lottoNumber.winningAmountCalculation();
    this.lottoNumber.printWinner();
    this.lottoNumber.printYield(this.purchaseAmount);
  }

  play() {
    this.init();
  }

  // TODO: 추가 기능 구현
}

module.exports = Game;
