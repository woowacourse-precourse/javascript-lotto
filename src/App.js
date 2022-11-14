const { Random, Console } = require('@woowacourse/mission-utils');
const { REGEXP, MESSAGE, ERROR_MESSAGE } = require('./constant/constant');

class App {
  play() {
    this.inputPurchasingPrice();
  }

  inputPurchasingPrice() {
    Console.readLine('구입금액을 입력해 주세요.\n', (price) => {
      this.validate(price);
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
}

const app = new App();
app.play();

module.exports = App;
