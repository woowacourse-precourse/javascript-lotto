const { Console } = require('@woowacourse/mission-utils');
const { UNIT_OF_AMOUNT } = require('./constant/index');

class App {
  play() {
    this.startGame();
  }

  startGame() {
    this.printStartMessage();
    this.getAmountOfPurchase();
  }

  printStartMessage() {
    Console.print('구입금액을 입력해 주세요.');
  }

  getAmountOfPurchase() {
    Console.readLine('', (answer) => {
      const amountOfPurchase = this.convertToNumber(answer);

      this.validatePurchaseAmount(amountOfPurchase);

      Console.print(
        `${this.numberOfPurchase(amountOfPurchase)}개를 구매했습니다.`
      );
    });
  }

  convertToNumber(stringNumber) {
    return parseInt(stringNumber, 10);
  }

  validatePurchaseAmount(amount) {
    if (amount % UNIT_OF_AMOUNT !== 0)
      throw new Error('[ERROR] 로또 구입 금액은 1,000원 단위로 입력해주세요');
  }

  numberOfPurchase(amount) {
    return Math.floor(amount / UNIT_OF_AMOUNT);
  }
}

const app = new App();
app.play();

module.exports = App;
