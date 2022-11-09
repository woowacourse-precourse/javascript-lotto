const MissionUtils = require('@woowacourse/mission-utils');
const { amountValidation } = require('./validation/amountValidation');
class App {
  constructor() {}

  play() {
    this.setPurchaseAmount();
  }

  setPurchaseAmount() {
    this.print('구입금액을 입력해 주세요.');
    this.readLine('', (input) => {
      if (amountValidation(input)) {
      }
    });
  }

  countLotto(input) {}

  readLine(message, callback) {
    return MissionUtils.Console.readLine(message, callback);
  }

  print(message) {
    return MissionUtils.Console.print(message);
  }
}

const app = new App();
app.play();

module.exports = App;
