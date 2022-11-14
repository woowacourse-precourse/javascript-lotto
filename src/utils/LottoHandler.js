const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constants');
const Price = require('../Price');
const Lotto = require('../Lotto');
const Bonus = require('../Bonus');
const MakeLottos = require('../lotto-make-and-calculate/MakeLottos');
const PrintResults = require('../print/PrintResults');
const Calculate = require('../lotto-make-and-calculate/Calculate');

class LottoHandler {
  constructor() {
    this.printResults = new PrintResults();
    this.price;
    this.lottoList;
    this.amount;
    this.answerNumber;
    this.bonusNumber;
  };

  getPrice() {
    Console.readLine(MESSAGE.PRICE, (answer) => {
      new Price(answer);
      this.price = Number(answer);
      this.makeLottos();
    });
  };

  makeLottos() {
    this.amount = this.price / 1000;
    const lottoMaker = new MakeLottos(this.amount);
    this.lottoList = lottoMaker.lottoLists;
    this.printLottoLists();
  };

  printLottoLists() {
    this.printResults.printLotto(this.amount, this.lottoList);
    this.getLottoAnswerNumber();
  };

  getLottoAnswerNumber() {
    Console.readLine(MESSAGE.ANSWER, (answer) => {
      let answerNumber = answer.split(',').map((number) => Number(number));
      new Lotto(answerNumber);
      this.answerNumber = answerNumber;
      this.getBonusNumber(this.answerNumber);
    });
  };
  
  getBonusNumber(answerNumber) {
    Console.readLine(MESSAGE.BONUS, (answer) => {
      new Bonus(answer, answerNumber);
      this.bonusNumber = Number(answer);
      this.startCalculate();
    });
  };
  
  startCalculate() {
    const calculate = new Calculate();
    calculate.rankingCalculate(this.lottoList, this.answerNumber, this.bonusNumber);
    calculate.prizeCalculate(this.price);
  };
};

module.exports = LottoHandler;
