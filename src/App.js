const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Publish = require('./Publish');
const Exception = require('./Exception');
const { WINNING_TEXT, INPUT_TEXT } = require('./Constant');

class App {
  play() {
    this.purchase();
  }

  purchase() {
    Console.readLine(INPUT_TEXT.COST, (money) => {
      this.money = money;
      new Exception().purchase(this.money);
      this.publishLotto();
    });
  }

  publishLotto() {
    this.publish = new Publish(this.money);
    this.printLottoQuantity();
  }

  printLottoQuantity() {
    Console.print(`${this.publish.countQuantity()}개를 구매했습니다.`);
    this.printAllLotto();
  }

  printAllLotto() {
    this.publishResult = this.publish.result;
    for (let numberofLotto in this.publishResult) {
      Console.print(`[${this.publishResult[numberofLotto].join(', ')}]`);
    }
    this.enterWinningNumber();
  }

  enterWinningNumber() {
    Console.readLine(INPUT_TEXT.WINNING_NUMBER, (winningNumber) => {
      this.numbertoArray(winningNumber);
      this.lotto = new Lotto(this.winningArray);
      this.enterBonusNumber();
    });
  }

  numbertoArray(winNumber) {
    this.winningArray = winNumber.split(',').map((number) => {
      return parseInt(number, 10);
    });
  }

  enterBonusNumber() {
    Console.readLine(INPUT_TEXT.BONUS_NUMBER, (bonusNumber) => {
      this.lotto.bonusExecption(bonusNumber);
      this.winningResult();
    });
  }

  winningResult() {
    this.lotto.compare(this.publishResult);
    this.printWinningResult();
  }

  printWinningResult() {
    Console.print(`${WINNING_TEXT.FIFTH} ${this.lotto.fifthCount}개`);
    Console.print(`${WINNING_TEXT.FOURTH} ${this.lotto.fourthCount}개`);
    Console.print(`${WINNING_TEXT.THIRD} ${this.lotto.thirdCount}개`);
    Console.print(`${WINNING_TEXT.SECOND} ${this.lotto.secondCount}개`);
    Console.print(`${WINNING_TEXT.FIRST} ${this.lotto.firstCount}개`);
    this.totalReturn();
  }

  totalReturn() {
    Console.print(
      `총 수익률은 ${this.lotto.profitCalculator(this.money)}%입니다.`
    );
    Console.close();
  }
}
module.exports = App;
