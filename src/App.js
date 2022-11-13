const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Publish = require('./Publish');
const { MONEY, WINNING_TEXT, INPUT_TEXT, ERROR_TEXT } = require('./Constant');

class App {
  constructor() {}

  play() {
    //todo. 숫자 하드코딩 없애기
    this.purchase();
  }

  purchase() {
    Console.readLine(INPUT_TEXT.COST, (money) => {
      this.money = money;
      this.purchaseException();
    });
  }

  purchaseException() {
    if (this.money % MONEY.MIN !== 0) {
      throw new Error(ERROR_TEXT.MIN_PURCHASE);
    }
    this.makeLotto();
  }

  makeLotto() {
    this.quantity = this.money / MONEY.MIN;
    this.publish = new Publish(this.quantity);
    this.printLottoQuantity();
  }

  printLottoQuantity() {
    Console.print(`${this.quantity}개를 구매했습니다.`);
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
    Console.readLine(INPUT_TEXT.WINNING_NUMBER, (winNumber) => {
      this.numbertoArray(winNumber);
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
    this.printFifth();
    this.printFourth();
    this.printThird();
    this.printSecond();
    this.printFrist();
  }
  printFifth() {
    Console.print(`${WINNING_TEXT.FIFTH} ${this.lotto.fifthCount}개`);
  }
  printFourth() {
    Console.print(`${WINNING_TEXT.FOURTH} ${this.lotto.fourthCount}개`);
  }
  printThird() {
    Console.print(`${WINNING_TEXT.THIRD} ${this.lotto.thirdCount}개`);
  }
  printSecond() {
    Console.print(`${WINNING_TEXT.SECOND} ${this.lotto.secondCount}개`);
  }

  printFrist() {
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

const app = new App();
app.play();
module.exports = App;
