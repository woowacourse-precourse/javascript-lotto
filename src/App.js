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

  printResult(result) {
    Console.print(`${MESSAGE.THREE_MATCHS} ${result[0]}개`);
    Console.print(`${MESSAGE.FOUR_MATCHS} ${result[1]}개`);
    Console.print(`${MESSAGE.FIVE_MATCHS} ${result[2]}개`);
    Console.print(`${MESSAGE.FIVE_BONUS_MATCHS} ${result[3]}개`);
    Console.print(`${MESSAGE.SIX_MATCHS} ${result[4]}개`);

    let totalWins = 5000 * result[0] + 50000 * result[1] + 1500000 * result[2] + 30000000 * result[3] + 2000000000 * result[4];

    Console.print(`${MESSAGE.TOTAL_YIELD} ${Math.round(totalWins / this.totalPurchase * 1000) / 10}%입니다.`);
    Console.close();
  }
}
module.exports = App;