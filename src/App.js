const { Random, Console } = require('@woowacourse/mission-utils');
const { REGEXP, MESSAGE, ERROR_MESSAGE } = require('./constant/constant');

class App {
  play() {
    this.inputPurchasingPrice();
  }

  inputPurchasingPrice() {
    Console.readLine(MESSAGE.INPUT_PURCHASING_PRICE, (price) => {
      this.validate(price);
      this.showLottosAmount(price);
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
    Console.print(`\n${price / 1000}${MESSAGE.NUMBER_OF_LOTTOS_AMOUNT}`);
  }
}

const app = new App();
app.play();

module.exports = App;
