const { Random, Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Publish = require('./Publish');
const Winning = require('./WinningNumber');

class App {
  play() {
    this.purchase();
  }

  purchase() {
    Console.readLine('구입금액을 입력해 주세요.', (money) => {
      this.money = money;
      this.purchaseException();
    });
  }

  purchaseException() {
    if (this.money % 1000 !== 0)
      throw new Error('[EEROR] 금액은 천원 단위로 입력해주세요.');
    this.makeLotto();
  }

  makeLotto() {
    this.quantity = this.money / 1000;
    this.PUBLISH = new Publish(this.quantity);
    this.printLottoQuantity();
  }

  printLottoQuantity() {
    Console.print(`${this.quantity}개를 구매했습니다.`);
    this.printAllLotto();
  }

  printAllLotto() {
    const publishResult = this.PUBLISH.publishResult;
    for (let numberofLotto in publishResult) {
      Console.print(publishResult[numberofLotto]);
    }
  }

  enterWinningNumber() {
    Console.readLine('당첨 번호를 입력해 주세요.', (winNumber) => {
      this.winning = new Winning();
      this.winning.numbertoArray(winNumber);
      this.winning.numberException();
    });
  }
}

const app = new App();
app.enterWinningNumber();
module.exports = App;
