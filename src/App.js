const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {}

  play() {}

  setPurchaseAmount() {
    this.print('구입금액을 입력해 주세요.');
    this.readLine('', (input) => {});
  }

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
