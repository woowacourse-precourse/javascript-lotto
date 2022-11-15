const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constant');
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

  userNumber() {
    Console.readLine(MESSAGE.WINNING_NUMBER, (answer) => {
      MadeNumber.checkLotto(answer);
      this.userArray = answer.split(',').map(v => parseInt(v));
      this.bonusNumber(answer);
    })
  }

  bonusNumber() {
    Console.readLine(MESSAGE.BONUS_NUMBER, (answer) => {
      if (this.userArray.includes(Number(answer.split(' ')))){
        throw Error(MESSAGE.BONUS_NUMBER_ERROR);
      }
      
      MadeNumber.checkBonusNumber(answer);

      let result = MadeNumber.numberCompare(this.lottoArray, this.userArray, answer);

      this.printResult(result);
    })
  }

}
module.exports = App;