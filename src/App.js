const { Console } = require('@woowacourse/mission-utils');
const MadeNumber = require('./LottoTool');

class App {
  constructor() {
    this.lottoArray = [];
    this.userArray = [];
    this.totalPurchase = 0;
  }

  play() {
    this.lottoNumber();
  }

  lottoNumber() {
    Console.readLine(MESSAGE.ASK_PURCHASE, (answer) => {
      this.lottoArray = MadeNumber.userLotto(answer);
      this.totalPurchase = answer;
      this.userNumber();
    })
  }
}
module.exports = App;