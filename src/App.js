const { Console } = require('@woowacourse/mission-utils');
const checkPriceValidation = require('./checkValid/checkPriceValidation');
class App {
  constructor() {}

  play() {
    this.setPurchaseAmount();
  }

  setPurchaseAmount() {
    this.print('구입금액을 입력해 주세요.');
    const input = this.readLine('', input => {
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
app.setPurchaseAmount();
module.exports = App;
