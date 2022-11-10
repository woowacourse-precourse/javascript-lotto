const { Random, Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Publish = require('./Publish');

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
}

const app = new App();
app.play();
module.exports = App;
