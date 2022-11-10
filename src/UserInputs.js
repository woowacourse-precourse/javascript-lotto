const { Console } = require("@woowacourse/mission-utils");
const Price = require('./Price');
const MakeLottos = require('./MakeLottos');
const PrintResults = require('./PrintResults');


class UserInputs {
  constructor() {
    this.printResults = new PrintResults();
    this.price = 0;
    this.lottoList = [];
  }

  getPrice() {
    Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
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
  }
  
  // getAnswerNumber() {
  //   Console.readLine('여기여기.\n', (answer) => {
  //     new Price(answer)
  //     this.price = answer
  //     // Console.print('000000000000000000')
  //   });
  // };

}

module.exports = UserInputs;
