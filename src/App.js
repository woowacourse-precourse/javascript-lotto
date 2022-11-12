const MissionUtils = require('@woowacourse/mission-utils');
const View = require('./utils/View');

class App {
  constructor() {
    this.view = new View();
  }

  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (lottoCost) => {
      const lottos = this.view.lottos(lottoCost);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
