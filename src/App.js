const { Random, Console } = require('@woowacourse/mission-utils');
const { REGEXP, MESSAGE, ERROR_MESSAGE } = require('./constant/constant');

class App {
  constructor() {
    this.lottos = [];
  }

  play() {
    this.inputPurchasingPrice();
  }

  inputPurchasingPrice() {
    Console.readLine(MESSAGE.INPUT_PURCHASING_PRICE, (price) => {
      this.validate(price);
      this.showLottosAmount(price);
      this.showLottosNumber();
    });
  }

  validate(price) {
    if (!REGEXP.CHECK_NUMBER.test(price)) {
      throw new Error(ERROR_MESSAGE.ONLY_INPUT_NUMBER);
    }

    if (REGEXP.CHECK_START_NUMBER.test(price)) {
      throw new Error(ERROR_MESSAGE.START_NUMBER_ZERO);
    }

    if (parseInt(price, 10) < 1000) {
      throw new Error(ERROR_MESSAGE.MIN_PRICE);
    }

    if (parseInt(price, 10) % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.INVALID_UNIT);
    }
  }

  showLottosAmount(price) {
    Console.print(
      `\n${parseInt(price, 10) / 1000}${MESSAGE.NUMBER_OF_LOTTOS_AMOUNT}`
    );
    this.setLottosNumber(parseInt(price, 10) / 1000);
  }

  setLottosNumber(amount) {
    for (let count = 0; count < amount; count += 1) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (num1, num2) => num1 - num2
      );
      this.lottos.push(lotto);
    }
  }

  showLottosNumber() {
    Console.print(this.lottos);
  }
}

const app = new App();
app.play();

module.exports = App;
