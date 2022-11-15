const { Console, Random } = require('@woowacourse/mission-utils');
const { UNIT_OF_AMOUNT } = require('./constant/index');

class App {
  constructor() {
    this.randomNumbersArray = [];
  }

  play() {
    this.startGame();
  }

  startGame() {
    this.getAmountOfPurchase();
    this.getLottoNumbers();
  }

  getAmountOfPurchase() {
    Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      const amountOfPurchase = this.convertToNumber(answer);

      this.validatePurchaseAmount(amountOfPurchase);

      const numberOfPurchase = this.getNumberOfPurchase(amountOfPurchase);

      Console.print(`${numberOfPurchase}개를 구매했습니다.`);

      this.generateRandomNumbers(numberOfPurchase);
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

  generateRandomNumbers(number) {
    for (let i = 0; i < number; i++) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );

      this.randomNumbersArray.push(randomNumbers);
      Console.print(randomNumbers);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
