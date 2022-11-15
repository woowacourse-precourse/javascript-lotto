const { Console, Random } = require('@woowacourse/mission-utils');
const {
  UNIT_OF_AMOUNT,
  VALID_LENGTH,
  VALID_MIN_NUM,
  VALID_MAX_NUM,
} = require('./constant/index');
const Lotto = require('./Lotto');
const { convertToNumber, convertToNumberArray } = require('./util/convert');

class App {
  constructor() {
    this.randomNumbersArray = [];
    this.lotto;
  }

  play() {
    this.startGame();
  }

  startGame() {
    this.getAmountOfPurchase();
  }

  getAmountOfPurchase() {
    Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      const amountOfPurchase = convertToNumber(answer);

      this.validatePurchaseAmount(amountOfPurchase);

      const numberOfPurchase = this.getNumberOfPurchase(amountOfPurchase);

      Console.print(`${numberOfPurchase}개를 구매했습니다.`);

      this.generateRandomNumbers(numberOfPurchase);

      this.getLottoNumbers();
    });
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
      const randomNumbers = Random.pickUniqueNumbersInRange(
        VALID_MIN_NUM,
        VALID_MAX_NUM,
        VALID_LENGTH
      ).sort((a, b) => a - b);

      this.randomNumbersArray.push(randomNumbers);
      Console.print(randomNumbers);
    }
  }

  getLottoNumbers() {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (answer) => {
      this.lotto = new Lotto(convertToNumberArray(answer));
    });
  }
}

const app = new App();
app.play();

module.exports = App;
