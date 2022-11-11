const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require('./Constants');
const Price = require('../check-avilable/Price');
const Lotto = require('../check-avilable/Lotto');
const Bonus = require('../check-avilable/Bonus');
const MakeLottos = require('./MakeLottos');
const PrintResults = require('../print/PrintResults');
const Calculate = require('./Calculate');

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
      this.price = answer;
      this.makeLottos();
    });
  };

  makeLottos() {
    this.amount = this.price/1000;
    const lottoMaker = new MakeLottos(this.amount);
    this.lottoList = lottoMaker.lottoLists
    this.printLottoLists()
  };

  printLottoLists() {
    this.printResults.printLotto(this.amount,this.lottoList)
    this.getLottoAnswerNumber()
  }

  getLottoAnswerNumber() {
    Console.readLine(MESSAGE.ANSWER, (answer) => {
      new Lotto(answer);
      this.answerNumber = answer;
      this.getBonusNumber(this.answerNumber);
    });
  };
  
  getBonusNumber(answerNumber) {
    Console.readLine(MESSAGE.BONUS, (answer) => {
      new Bonus(answer,answerNumber);
      this.bonusNumber = answer;
      this.startCalculate();
      // this.getBonusNumber(this.answerNumber);
    });
  };
  
  startCalculate() {
    const calculate = new Calculate();
    calculate.rankingCalculate(this.lottoList, this.answerNumber, this.bonusNumber);
  }


  // getAnswerNumber() {
  //   Console.readLine('여기여기.\n', (answer) => {
  //     new Price(answer)
  //     this.price = answer
  //     // Console.print('000000000000000000')
  //   });
  // };

}

module.exports = LottoHandler;
