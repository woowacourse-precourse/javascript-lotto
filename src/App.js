const { Console } = require('@woowacourse/mission-utils');
const checkPriceValidation = require('./checkValid/checkPriceValidation');
const { LottoBuilder } = require('./Lotto');
class App {
  constructor() {
    this.LottoBuilder = new LottoBuilder();
  }

  play() {
    this.setPurchaseAmount();
  }

  setPurchaseAmount() {
    this.print('구입금액을 입력해 주세요.');
    this.readLine('', input => {
      if (checkPriceValidation(input)) {
      }
    });
  }

  readLine(message, callback) {
    return Console.readLine(message, callback);
  }

  print(message) {
    return Console.print(message);
  }
}

const app = new App();
app.play();
module.exports = App;
