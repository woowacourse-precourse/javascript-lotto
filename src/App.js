const { Console } = require('@woowacourse/mission-utils');
const { REGEXP, MESSAGE, ERROR_MESSAGE } = require('./constant/constant');
const Lotto = require('./Lotto');
const Lottos = require('./Lottos');

class App {
  constructor() {
    this.lottos = null;
    this.lotto = null;
  }

  play() {
    this.inputPurchasingPrice();
  }

  inputPurchasingPrice() {
    Console.readLine(MESSAGE.INPUT_PURCHASING_PRICE, (price) => {
      this.validate(price);
      this.lottos = new Lottos(parseInt(price, 10) / 1000);
      this.lottos.showLottosAmount();
      this.lottos.showLottosNumber();

      this.inputWinningNumbers();
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

  inputWinningNumbers() {
    Console.readLine(MESSAGE.INPUT_WINNING_NUMBERS, (numbers) => {
      const winningNumbers = numbers.split(',');
      this.lotto = new Lotto(winningNumbers);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
