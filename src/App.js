const MissionUtils = require('@woowacourse/mission-utils');
const Output = require('./utils/Output');

class App {
  constructor() {
    this.Output = new Output();
  }

  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (lottoCost) => {
      this.Output.printLottos(lottoCost);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
