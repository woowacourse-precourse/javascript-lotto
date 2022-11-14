const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = require("@woowacourse/mission-utils");

const LottoGameStart = require("./LottoGameStart");

class App {
  constructor() {}

  play() {
    this.lottoGameStart = new LottoGameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
