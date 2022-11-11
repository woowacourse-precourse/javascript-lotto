const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require('./Constants');
const Price = require('../check-avilable/Price');
const Lotto = require('../check-avilable/Lotto');
const MakeLottos = require('./MakeLottos');
const PrintResults = require('../print/PrintResults');


class LottoHandler {
  constructor() {
    this.printResults = new PrintResults();
    this.price = 0;
    this.lottoList = [];
    this.amount = 0;
    this.answerNumber = [];
  }

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
    // Console.print(this.lottoList)
    this.printLottoLists()
  };

  printLottoLists() {
    this.printResults.printLotto(this.amount,this.lottoList)
    // this.getLottoAnswerNumber()
  }

  // getLottoAnswerNumber() {
  //   Console.readLine(MESSAGE.ANSWER, (answer) => {
  //     new Lotto(answer);
  //     this.answerNumber = answer;
  //   });
  // };
  
  // getAnswerNumber() {
  //   Console.readLine('여기여기.\n', (answer) => {
  //     new Price(answer)
  //     this.price = answer
  //     // Console.print('000000000000000000')
  //   });
  // };

}

module.exports = LottoHandler;
