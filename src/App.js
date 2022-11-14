const { Console, Random } = require('@woowacourse/mission-utils');
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

      const numberOfPurchase = this.getNumberOfPurchase(amountOfPurchase);

      Console.print(`${numberOfPurchase}개를 구매했습니다.`);

      for (let i = 0; i < numberOfPurchase; i++) {
        const randomNumbers = this.generateRandomNumbers();
        Console.print(randomNumbers);
      }
    });
  }

  convertToNumber(stringNumber) {
    return parseInt(stringNumber, 10);
  }

  validatePurchaseAmount(amount) {
    if (amount % UNIT_OF_AMOUNT !== 0)
      throw new Error('[ERROR] 로또 구입 금액은 1,000원 단위로 입력해주세요');
  }

  getNumberOfPurchase(amount) {
    return Math.floor(amount / UNIT_OF_AMOUNT);
  }

  generateRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
    return randomNumbers;
  }
}

const app = new App();
app.play();

module.exports = App;
